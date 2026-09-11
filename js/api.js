// ============================================================
// CAMPUSHUB API & MULTI-USER AUTHENTICATION CLIENT
// Dual-Mode: REST API (server.py) + Client-Side Multi-Account Fallback
// ============================================================

class ApiClient {
  constructor() {
    this.baseUrl = window.location.origin.includes('localhost') || window.location.origin.includes('127.0.0.1')
      ? ''
      : '';
    this.tokenKey = 'campushub_session_token';
    this.userKey = 'campushub_current_user';
    this.offlineUsersKey = 'campushub_offline_accounts';
    this.offlineDataPrefix = 'campushub_user_data_';
    this.serverAvailable = null; // cached status
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  setSession(token, user) {
    if (token) localStorage.setItem(this.tokenKey, token);
    if (user) localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  clearSession() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
  }

  getCurrentUser() {
    try {
      const raw = localStorage.getItem(this.userKey);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  // Check if server REST API is alive
  async checkServerHealth() {
    try {
      const res = await fetch('/api/health', { method: 'GET', signal: AbortSignal.timeout(2000) });
      this.serverAvailable = res.ok;
      return this.serverAvailable;
    } catch {
      this.serverAvailable = false;
      return false;
    }
  }

  // Password hashing helper for offline mode using browser Web Crypto API
  async hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password + '_campushub_salt_2026');
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  // ------------------------------------------------------------
  // AUTHENTICATION: LOGIN
  // ------------------------------------------------------------
  async login(email, password) {
    const isOnline = await this.checkServerHealth();

    if (isOnline) {
      try {
        const res = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || 'Login failed.');
        }
        this.setSession(data.token, data.user);
        return { success: true, user: data.user, token: data.token };
      } catch (err) {
        if (err.message && !err.message.includes('fetch')) throw err;
      }
    }

    // Fallback: Local multi-account verification
    return await this.localLogin(email, password);
  }

  async localLogin(email, password) {
    const cleanEmail = email.trim().toLowerCase();
    const accounts = this.getLocalAccounts();
    const user = accounts.find(a => a.email.toLowerCase() === cleanEmail);

    if (!user) {
      // Check for built-in demo credentials
      if (cleanEmail === 'alex@campus.edu' && password === 'campus123') {
        const demoUser = {
          id: 'demo-1',
          name: 'Alex Rivera',
          email: 'alex@campus.edu',
          rollNo: 'CS21B042',
          department: 'Computer Science & Engineering',
          role: 'Student',
          year: '3rd Year',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80'
        };
        const token = 'offline_token_' + Date.now();
        this.setSession(token, demoUser);
        return { success: true, user: demoUser, token };
      } else if (cleanEmail === 'faculty@campus.edu' && password === 'faculty123') {
        const facUser = {
          id: 'demo-2',
          name: 'Dr. Sarah Vance',
          email: 'faculty@campus.edu',
          rollNo: 'FAC-CS-01',
          department: 'Computer Science & Engineering',
          role: 'Faculty',
          year: 'Professor',
          avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80'
        };
        const token = 'offline_token_' + Date.now();
        this.setSession(token, facUser);
        return { success: true, user: facUser, token };
      }
      throw new Error('Invalid email or password. Please check your credentials.');
    }

    const hashedInput = await this.hashPassword(password);
    if (user.passwordHash !== hashedInput) {
      throw new Error('Invalid email or password. Please check your credentials.');
    }

    const token = 'offline_token_' + Date.now();
    const safeUser = { ...user };
    delete safeUser.passwordHash;
    this.setSession(token, safeUser);
    return { success: true, user: safeUser, token };
  }

  // ------------------------------------------------------------
  // AUTHENTICATION: REGISTER
  // ------------------------------------------------------------
  async register(userData) {
    const isOnline = await this.checkServerHealth();

    if (isOnline) {
      try {
        const res = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData)
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || 'Registration failed.');
        }
        this.setSession(data.token, data.user);
        return { success: true, user: data.user, token: data.token };
      } catch (err) {
        if (err.message && !err.message.includes('fetch')) throw err;
      }
    }

    // Fallback: Local multi-account registration
    return await this.localRegister(userData);
  }

  async localRegister(userData) {
    const cleanEmail = userData.email.trim().toLowerCase();
    const accounts = this.getLocalAccounts();

    if (accounts.some(a => a.email.toLowerCase() === cleanEmail)) {
      throw new Error('An account with this email address already exists.');
    }

    const passwordHash = await this.hashPassword(userData.password);
    const userId = 'usr_' + Date.now();
    const newUser = {
      id: userId,
      name: userData.name.trim(),
      email: cleanEmail,
      rollNo: userData.rollNo || `STU-${Math.floor(1000 + Math.random() * 9000)}`,
      department: userData.department || 'Computer Science & Engineering',
      role: userData.role || 'Student',
      year: userData.year || '1st Year',
      avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${cleanEmail}`,
      passwordHash,
      createdAt: new Date().toISOString()
    };

    accounts.push(newUser);
    localStorage.setItem(this.offlineUsersKey, JSON.stringify(accounts));

    const token = 'offline_token_' + Date.now();
    const safeUser = { ...newUser };
    delete safeUser.passwordHash;
    this.setSession(token, safeUser);
    return { success: true, user: safeUser, token };
  }

  getLocalAccounts() {
    try {
      const raw = localStorage.getItem(this.offlineUsersKey);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  // ------------------------------------------------------------
  // AUTHENTICATION: LOGOUT
  // ------------------------------------------------------------
  async logout() {
    const token = this.getToken();
    if (token) {
      try {
        await fetch('/api/auth/logout', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      } catch {}
    }
    this.clearSession();
    return true;
  }

  // ------------------------------------------------------------
  // USER DATA STORAGE & SYNC
  // ------------------------------------------------------------
  async getUserData(key) {
    const user = this.getCurrentUser();
    if (!user) return null;

    const token = this.getToken();
    if (token && !token.startsWith('offline_')) {
      try {
        const res = await fetch('/api/data', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.ok) {
          const body = await res.json();
          if (body.data && body.data[key]) return body.data[key];
        }
      } catch {}
    }

    // Local user data slice
    try {
      const raw = localStorage.getItem(`${this.offlineDataPrefix}${user.id}_${key}`);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  async saveUserData(key, content) {
    const user = this.getCurrentUser();
    if (!user) return false;

    // Save locally
    localStorage.setItem(`${this.offlineDataPrefix}${user.id}_${key}`, JSON.stringify(content));

    // Save to remote server if connected
    const token = this.getToken();
    if (token && !token.startsWith('offline_')) {
      try {
        await fetch('/api/data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ key, content })
        });
      } catch {}
    }
    return true;
  }
}

export const api = new ApiClient();
