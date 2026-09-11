# ============================================================
# CAMPUSHUB DATABASE & AUTHENTICATION ENGINE (SQLite)
# Secure user storage, salted password hashing, sessions & data
# ============================================================
import sqlite3
import hashlib
import os
import secrets
import json
from datetime import datetime, timedelta

DB_PATH = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "campus.db")

def get_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def hash_password(password: str, salt: bytes = None):
    if salt is None:
        salt = os.urandom(16)
    hashed = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), salt, 100000)
    return hashed.hex(), salt.hex()

def verify_password(password: str, stored_hash: str, stored_salt_hex: str) -> bool:
    salt = bytes.fromhex(stored_salt_hex)
    hashed = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), salt, 100000)
    return hashed.hex() == stored_hash

def init_db():
    conn = get_connection()
    cursor = conn.cursor()

    # 1. Users table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL COLLATE NOCASE,
        password_hash TEXT NOT NULL,
        salt TEXT NOT NULL,
        name TEXT NOT NULL,
        roll_no TEXT,
        department TEXT DEFAULT 'Computer Science & Engineering',
        role TEXT DEFAULT 'Student',
        year TEXT DEFAULT '3rd Year',
        avatar TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
    """)

    # 2. Sessions table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS sessions (
        token TEXT PRIMARY KEY,
        user_id INTEGER NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        expires_at DATETIME NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
    """)

    # 3. User Data table (Stores per-user isolated data slices)
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS user_data (
        user_id INTEGER NOT NULL,
        data_key TEXT NOT NULL,
        json_content TEXT NOT NULL,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (user_id, data_key),
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
    """)

    conn.commit()

    # Pre-seed default demo accounts if not existing
    seed_demo_users(conn)
    conn.close()

def seed_demo_users(conn):
    cursor = conn.cursor()
    cursor.execute("SELECT COUNT(*) as count FROM users")
    if cursor.fetchone()["count"] == 0:
        # Default Student: Alex Rivera
        h1, s1 = hash_password("campus123")
        cursor.execute("""
        INSERT INTO users (email, password_hash, salt, name, roll_no, department, role, year, avatar)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            "alex@campus.edu", h1, s1,
            "Alex Rivera", "CS21B042",
            "Computer Science & Engineering",
            "Student", "3rd Year",
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
        ))

        # Default Faculty: Dr. Sarah Vance
        h2, s2 = hash_password("faculty123")
        cursor.execute("""
        INSERT INTO users (email, password_hash, salt, name, roll_no, department, role, year, avatar)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            "sarah.vance@campus.edu", h2, s2,
            "Dr. Sarah Vance", "FAC-CS-01",
            "Computer Science & Engineering",
            "Faculty", "Professor",
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80"
        ))

        # Default Admin: Dean Academic Office
        h3, s3 = hash_password("admin123")
        cursor.execute("""
        INSERT INTO users (email, password_hash, salt, name, roll_no, department, role, year, avatar)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            "admin@campus.edu", h3, s3,
            "Dean of Student Affairs", "ADM-001",
            "Central Administration",
            "Admin", "Officer",
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80"
        ))
        conn.commit()

def register_user(email, password, name, roll_no=None, department="Computer Science & Engineering", role="Student", year="1st Year"):
    conn = get_connection()
    cursor = conn.cursor()
    clean_email = email.strip().lower()

    cursor.execute("SELECT id FROM users WHERE email = ?", (clean_email,))
    if cursor.fetchone():
        conn.close()
        raise ValueError("An account with this email address already exists.")

    h, s = hash_password(password)
    default_avatar = f"https://api.dicebear.com/7.x/bottts/svg?seed={secrets.token_hex(4)}"

    cursor.execute("""
    INSERT INTO users (email, password_hash, salt, name, roll_no, department, role, year, avatar)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (clean_email, h, s, name.strip(), roll_no or f"STU-{secrets.token_hex(3).upper()}", department, role, year, default_avatar))
    
    user_id = cursor.lastrowid
    conn.commit()

    user = get_user_by_id(user_id, conn)
    token = create_session(user_id, conn)
    conn.close()
    return {"token": token, "user": user}

def authenticate_user(email, password):
    conn = get_connection()
    cursor = conn.cursor()
    clean_email = email.strip().lower()

    cursor.execute("SELECT * FROM users WHERE email = ?", (clean_email,))
    user_row = cursor.fetchone()
    if not user_row:
        conn.close()
        return None

    if not verify_password(password, user_row["password_hash"], user_row["salt"]):
        conn.close()
        return None

    user_id = user_row["id"]
    token = create_session(user_id, conn)
    user = format_user(user_row)
    conn.close()
    return {"token": token, "user": user}

def create_session(user_id, conn=None):
    close_after = False
    if conn is None:
        conn = get_connection()
        close_after = True

    token = secrets.token_urlsafe(32)
    expires_at = datetime.utcnow() + timedelta(days=30)

    cursor = conn.cursor()
    cursor.execute("""
    INSERT INTO sessions (token, user_id, expires_at)
    VALUES (?, ?, ?)
    """, (token, user_id, expires_at.isoformat()))
    conn.commit()

    if close_after:
        conn.close()
    return token

def get_user_by_token(token):
    if not token:
        return None
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
    SELECT u.* FROM users u
    JOIN sessions s ON u.id = s.user_id
    WHERE s.token = ? AND s.expires_at > CURRENT_TIMESTAMP
    """, (token,))
    row = cursor.fetchone()
    conn.close()
    return format_user(row) if row else None

def get_user_by_id(user_id, conn=None):
    close_after = False
    if conn is None:
        conn = get_connection()
        close_after = True

    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
    row = cursor.fetchone()
    if close_after:
        conn.close()
    return format_user(row) if row else None

def format_user(row):
    if not row:
        return None
    return {
        "id": row["id"],
        "email": row["email"],
        "name": row["name"],
        "rollNo": row["roll_no"],
        "department": row["department"],
        "branch": row["department"],
        "role": row["role"],
        "year": row["year"],
        "avatar": row["avatar"],
        "createdAt": row["created_at"]
    }

def get_user_data(user_id):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT data_key, json_content FROM user_data WHERE user_id = ?", (user_id,))
    rows = cursor.fetchall()
    conn.close()

    result = {}
    for r in rows:
        try:
            result[r["data_key"]] = json.loads(r["json_content"])
        except Exception:
            result[r["data_key"]] = r["json_content"]
    return result

def save_user_data_key(user_id, data_key, content):
    conn = get_connection()
    cursor = conn.cursor()
    serialized = json.dumps(content) if not isinstance(content, str) else content

    cursor.execute("""
    INSERT INTO user_data (user_id, data_key, json_content, updated_at)
    VALUES (?, ?, ?, CURRENT_TIMESTAMP)
    ON CONFLICT(user_id, data_key) DO UPDATE SET
        json_content = excluded.json_content,
        updated_at = CURRENT_TIMESTAMP
    """, (user_id, data_key, serialized))
    conn.commit()
    conn.close()
    return True

def delete_session(token):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM sessions WHERE token = ?", (token,))
    conn.commit()
    conn.close()
    return True

# Initialize on module load
init_db()
