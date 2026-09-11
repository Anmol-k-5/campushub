# ============================================================
# CAMPUSHUB FULL-STACK REST API & WEB SERVER
# Integrated static file server + REST API with SQLite database
# ============================================================
import http.server
import socketserver
import json
import os
import sys

# Add project root to sys.path
PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))
if PROJECT_ROOT not in sys.path:
    sys.path.insert(0, PROJECT_ROOT)

from backend.db import (
    register_user,
    authenticate_user,
    get_user_by_token,
    get_user_data,
    save_user_data_key,
    delete_session
)

PORT = int(os.environ.get("PORT", 8000))

class CampusHubHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=PROJECT_ROOT, **kwargs)

    def end_headers(self):
        # Enable CORS for all requests
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def send_json(self, data, status=200):
        body = json.dumps(data).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def read_json_body(self):
        try:
            content_length = int(self.headers.get("Content-Length", 0))
            if content_length == 0:
                return {}
            raw_body = self.rfile.read(content_length).decode("utf-8")
            return json.loads(raw_body)
        except Exception as e:
            return None

    def get_bearer_token(self):
        auth_header = self.headers.get("Authorization", "")
        if auth_header.startswith("Bearer "):
            return auth_header[7:].strip()
        return None

    def get_authenticated_user(self):
        token = self.get_bearer_token()
        if not token:
            return None
        return get_user_by_token(token)

    # ------------------------------------------------------------
    # ROUTE DISPATCHER
    # ------------------------------------------------------------
    def do_POST(self):
        path = self.path.split("?")[0]

        # 1. Register: POST /api/auth/register
        if path == "/api/auth/register":
            payload = self.read_json_body()
            if not payload:
                return self.send_json({"error": "Invalid JSON body"}, 400)

            email = payload.get("email")
            password = payload.get("password")
            name = payload.get("name")
            roll_no = payload.get("rollNo")
            department = payload.get("department", "Computer Science & Engineering")
            role = payload.get("role", "Student")
            year = payload.get("year", "1st Year")

            if not email or not password or not name:
                return self.send_json({"error": "Email, password, and full name are required."}, 400)

            if len(password) < 6:
                return self.send_json({"error": "Password must be at least 6 characters long."}, 400)

            try:
                result = register_user(email, password, name, roll_no, department, role, year)
                return self.send_json({"success": True, "token": result["token"], "user": result["user"]}, 201)
            except ValueError as ve:
                return self.send_json({"error": str(ve)}, 409)
            except Exception as e:
                return self.send_json({"error": f"Server error: {str(e)}"}, 500)

        # 2. Login: POST /api/auth/login
        elif path == "/api/auth/login":
            payload = self.read_json_body()
            if not payload:
                return self.send_json({"error": "Invalid JSON body"}, 400)

            email = payload.get("email")
            password = payload.get("password")

            if not email or not password:
                return self.send_json({"error": "Email and password are required."}, 400)

            result = authenticate_user(email, password)
            if not result:
                return self.send_json({"error": "Invalid email or password. Please check your credentials."}, 401)

            return self.send_json({"success": True, "token": result["token"], "user": result["user"]})

        # 3. Logout: POST /api/auth/logout
        elif path == "/api/auth/logout":
            token = self.get_bearer_token()
            if token:
                delete_session(token)
            return self.send_json({"success": True})

        # 4. Save User Data Slice: POST /api/data
        elif path == "/api/data":
            user = self.get_authenticated_user()
            if not user:
                return self.send_json({"error": "Unauthorized. Please log in."}, 401)

            payload = self.read_json_body()
            if not payload or "key" not in payload or "content" not in payload:
                return self.send_json({"error": "Data key and content are required."}, 400)

            key = payload.get("key")
            content = payload.get("content")
            save_user_data_key(user["id"], key, content)
            return self.send_json({"success": True, "key": key})

        else:
            return self.send_json({"error": f"Endpoint not found: {path}"}, 404)

    def do_GET(self):
        path = self.path.split("?")[0]

        # 1. Server Health Check: GET /api/health
        if path == "/api/health":
            return self.send_json({
                "status": "online",
                "service": "CampusHub Master Full-Stack API",
                "version": "2.4.0",
                "database": "SQLite (campus.db)"
            })

        # 2. Current User Profile: GET /api/auth/me
        elif path == "/api/auth/me":
            user = self.get_authenticated_user()
            if not user:
                return self.send_json({"error": "Unauthorized or session expired."}, 401)
            return self.send_json({"success": True, "user": user})

        # 3. All User Data Slices: GET /api/data
        elif path == "/api/data":
            user = self.get_authenticated_user()
            if not user:
                return self.send_json({"error": "Unauthorized or session expired."}, 401)

            user_data = get_user_data(user["id"])
            return self.send_json({"success": True, "data": user_data})

        # 4. Fallback to static file serving
        else:
            super().do_GET()

def run_server():
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), CampusHubHandler) as httpd:
        print("======================================================================")
        print(f"[OK] CampusHub Full-Stack Server Running Live on port {PORT}")
        print(f"     Local URL:    http://localhost:{PORT}")
        print(f"     REST API:     http://localhost:{PORT}/api/health")
        print(f"     Database:     {os.path.join(PROJECT_ROOT, 'campus.db')}")
        print("======================================================================")
        httpd.serve_forever()

if __name__ == "__main__":
    run_server()
