// ============================================================
// CAMPUSHUB AUTHENTICATION VIEW (Sign In & Sign Up)
// User registration, password authentication, and session handling
// Supports Supabase Cloud Database + Local Server + Offline Fallback
// ============================================================
import { api } from '../api.js';
import { store } from '../store.js';
import { showToast } from '../utils.js';
import { config, SUPABASE_SCHEMA_SQL } from '../config.js';
import { supabaseService } from '../supabase.js';

export function renderAuth(container) {
  let mode = window.location.hash === '#register' ? 'register' : 'login'; // 'login' | 'register'
  let errorMessage = '';
  let isLoading = false;
  let showSupabaseModal = false;
  let isTestingSupabase = false;
  let supabaseModalError = '';
  let supabaseModalSuccess = '';

  function render() {
    container.innerHTML = `
      <div class="min-h-[80vh] flex items-center justify-center p-4 relative">
        <div class="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xl overflow-hidden animate-fade-in">
          
          <!-- Auth Header Banner -->
          <div class="p-8 text-center bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 text-white relative">
            
            <!-- Supabase Cloud Connection Status Pill -->
            <div class="flex items-center justify-center mb-3">
              ${supabaseService.isReady() ? `
                <button id="btn-open-supabase" type="button" class="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/25 hover:bg-emerald-500/35 text-emerald-100 border border-emerald-300/40 shadow-sm transition-all cursor-pointer">
                  <span class="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                  <span>Supabase Cloud Connected</span>
                  <i data-lucide="settings" class="w-3.5 h-3.5 ml-0.5 opacity-80"></i>
                </button>
              ` : `
                <button id="btn-open-supabase" type="button" class="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/20 hover:bg-white/30 text-white border border-white/30 shadow-sm transition-all cursor-pointer">
                  <i data-lucide="cloud" class="w-3.5 h-3.5 mr-0.5"></i>
                  <span>Connect Supabase Cloud</span>
                  <i data-lucide="chevron-right" class="w-3 h-3 ml-0.5 opacity-80"></i>
                </button>
              `}
            </div>

            <div class="w-14 h-14 mx-auto rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl shadow-lg mb-3">
              🎓
            </div>
            <h2 class="text-2xl font-black tracking-tight">CampusHub Account</h2>
            <p class="text-xs text-indigo-100 mt-1">
              ${mode === 'login' ? 'Sign in to access your private college dashboard' : 'Join thousands of students and faculty on CampusHub'}
            </p>

            <!-- Mode Switcher Tabs -->
            <div class="flex items-center justify-center mt-6 p-1 bg-black/20 rounded-2xl max-w-xs mx-auto">
              <button id="btn-switch-login" class="flex-1 py-1.5 rounded-xl text-xs font-bold transition-all ${
                mode === 'login' ? 'bg-white text-indigo-700 shadow-md' : 'text-white/80 hover:text-white'
              }">
                Sign In
              </button>
              <button id="btn-switch-register" class="flex-1 py-1.5 rounded-xl text-xs font-bold transition-all ${
                mode === 'register' ? 'bg-white text-indigo-700 shadow-md' : 'text-white/80 hover:text-white'
              }">
                Register
              </button>
            </div>
          </div>

          <!-- Form Area -->
          <div class="p-6 sm:p-8 space-y-5">
            ${errorMessage ? `
              <div class="p-3.5 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-xs font-medium flex items-center space-x-2">
                <i data-lucide="alert-circle" class="w-4 h-4 shrink-0"></i>
                <span>${errorMessage}</span>
              </div>
            ` : ''}

            ${mode === 'login' ? `
              <!-- Sign In Form -->
              <form id="auth-login-form" class="space-y-4">
                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">Email Address</label>
                  <div class="relative">
                    <i data-lucide="mail" class="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5"></i>
                    <input id="login-email" type="email" required placeholder="name@campus.edu" value="alex@campus.edu" class="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-indigo-500 dark:text-white" />
                  </div>
                </div>

                <div>
                  <div class="flex items-center justify-between mb-1.5">
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">Password</label>
                  </div>
                  <div class="relative">
                    <i data-lucide="lock" class="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5"></i>
                    <input id="login-password" type="password" required placeholder="••••••••" value="campus123" class="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-indigo-500 dark:text-white" />
                  </div>
                </div>

                <button type="submit" ${isLoading ? 'disabled' : ''} class="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center space-x-2 disabled:opacity-50">
                  ${isLoading ? `
                    <span class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Authenticating...</span>
                  ` : `
                    <span>Sign In</span>
                    <i data-lucide="arrow-right" class="w-4 h-4"></i>
                  `}
                </button>

                <!-- Demo Accounts Quick Fill -->
                <div class="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span class="text-[11px] font-semibold text-slate-400 block mb-2 text-center uppercase tracking-wider">One-Click Demo Personas</span>
                  <div class="grid grid-cols-3 gap-2">
                    <button type="button" class="btn-demo px-2 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950 text-[11px] font-bold text-slate-700 dark:text-slate-300 transition-colors" data-email="alex@campus.edu" data-pass="campus123">
                      Student
                    </button>
                    <button type="button" class="btn-demo px-2 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950 text-[11px] font-bold text-slate-700 dark:text-slate-300 transition-colors" data-email="sarah.vance@campus.edu" data-pass="faculty123">
                      Faculty
                    </button>
                    <button type="button" class="btn-demo px-2 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950 text-[11px] font-bold text-slate-700 dark:text-slate-300 transition-colors" data-email="admin@campus.edu" data-pass="admin123">
                      Admin
                    </button>
                  </div>
                </div>
              </form>
            ` : `
              <!-- Register Form -->
              <form id="auth-register-form" class="space-y-4">
                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">Full Name</label>
                  <div class="relative">
                    <i data-lucide="user" class="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5"></i>
                    <input id="reg-name" required placeholder="e.g. Jordan Miller" class="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-indigo-500 dark:text-white" />
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">Email Address</label>
                  <div class="relative">
                    <i data-lucide="mail" class="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5"></i>
                    <input id="reg-email" type="email" required placeholder="jordan.miller@campus.edu" class="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-indigo-500 dark:text-white" />
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">Create Password</label>
                  <div class="relative">
                    <i data-lucide="lock" class="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5"></i>
                    <input id="reg-password" type="password" required minlength="6" placeholder="At least 6 characters" class="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-indigo-500 dark:text-white" />
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">Role</label>
                    <select id="reg-role" class="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium focus:outline-none focus:border-indigo-500 dark:text-white">
                      <option value="Student">Student</option>
                      <option value="Faculty">Faculty</option>
                      <option value="Admin">Administrator</option>
                      <option value="Applicant">Applicant</option>
                    </select>
                  </div>

                  <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">Academic Year</label>
                    <select id="reg-year" class="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium focus:outline-none focus:border-indigo-500 dark:text-white">
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                      <option value="Postgraduate">Postgraduate</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">Department</label>
                  <select id="reg-dept" class="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium focus:outline-none focus:border-indigo-500 dark:text-white">
                    <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                    <option value="Electronics & Communication">Electronics & Communication</option>
                    <option value="Information Science & AI">Information Science & AI</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Civil & Environmental">Civil & Environmental</option>
                  </select>
                </div>

                <button type="submit" ${isLoading ? 'disabled' : ''} class="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center space-x-2 disabled:opacity-50">
                  ${isLoading ? `
                    <span class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Creating Account...</span>
                  ` : `
                    <span>Create My Account</span>
                    <i data-lucide="user-plus" class="w-4 h-4"></i>
                  `}
                </button>
              </form>
            `}
          </div>

          <!-- Footer -->
          <div class="px-6 py-4 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-500 flex items-center justify-center space-x-2">
            ${supabaseService.isReady() ? `
              <span class="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-semibold">
                <span class="w-2 h-2 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
                Connected to Supabase PostgreSQL Cloud
              </span>
            ` : `
              <span>Encrypted with SHA-256 & Salt • Ready for Cloud Sync</span>
            `}
          </div>
        </div>

        <!-- Supabase Cloud Settings Modal Dialog -->
        ${showSupabaseModal ? `
          <div id="supabase-modal-backdrop" class="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div class="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-fade-in flex flex-col max-h-[90vh]">
              
              <!-- Modal Header -->
              <div class="p-6 bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex items-center justify-between">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl">
                    ⚡
                  </div>
                  <div>
                    <h3 class="text-lg font-black leading-snug">Supabase Cloud Database</h3>
                    <p class="text-xs text-emerald-100">Global multi-device sync & PostgreSQL Auth</p>
                  </div>
                </div>
                <button id="btn-close-supabase-modal" type="button" class="w-8 h-8 rounded-full bg-black/20 hover:bg-black/30 flex items-center justify-center text-white transition-colors">
                  <i data-lucide="x" class="w-4 h-4"></i>
                </button>
              </div>

              <!-- Modal Body -->
              <div class="p-6 overflow-y-auto space-y-4 text-slate-700 dark:text-slate-200">
                <!-- Status Messages -->
                ${supabaseModalError ? `
                  <div class="p-3 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-xs flex items-start space-x-2">
                    <i data-lucide="alert-triangle" class="w-4 h-4 shrink-0 mt-0.5"></i>
                    <span>${supabaseModalError}</span>
                  </div>
                ` : ''}

                ${supabaseModalSuccess ? `
                  <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs flex items-start space-x-2">
                    <i data-lucide="check-circle-2" class="w-4 h-4 shrink-0 mt-0.5"></i>
                    <span>${supabaseModalSuccess}</span>
                  </div>
                ` : ''}

                <!-- Setup Steps Guide -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-2.5">
                  <div class="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                    <span>How to connect your free Supabase project:</span>
                    <a href="https://supabase.com/dashboard" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center space-x-1">
                      <span>Open Supabase</span>
                      <i data-lucide="external-link" class="w-3 h-3"></i>
                    </a>
                  </div>
                  <ol class="list-decimal list-inside space-y-1 text-slate-600 dark:text-slate-400 leading-relaxed">
                    <li>Create a free account at <strong>supabase.com</strong> and click <strong>New project</strong>.</li>
                    <li>Open <strong>SQL Editor</strong>, paste our schema script, and click <strong>Run</strong>:</li>
                  </ol>
                  <button id="btn-copy-sql-schema" type="button" class="w-full py-2 px-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-semibold flex items-center justify-center space-x-2 border border-indigo-200 dark:border-indigo-800 transition-colors">
                    <i data-lucide="copy" class="w-3.5 h-3.5"></i>
                    <span id="copy-sql-label">📋 1-Click Copy Database Schema (SQL)</span>
                  </button>
                  <ol start="3" class="list-decimal list-inside space-y-1 text-slate-600 dark:text-slate-400 leading-relaxed">
                    <li>Go to <strong>Project Settings ➔ API</strong>, copy your <strong>URL</strong> and <strong>anon public key</strong>, and paste below:</li>
                  </ol>
                </div>

                <!-- Input Credentials -->
                <div class="space-y-3">
                  <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">Project URL</label>
                    <input id="input-supabase-url" type="url" placeholder="https://xyzprojectid.supabase.co" value="${config.getSupabaseUrl()}" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono focus:outline-none focus:border-emerald-500 dark:text-white" />
                  </div>

                  <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">Anon Public Key</label>
                    <input id="input-supabase-key" type="password" placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." value="${config.getSupabaseAnonKey()}" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono focus:outline-none focus:border-emerald-500 dark:text-white" />
                  </div>
                </div>
              </div>

              <!-- Modal Footer Actions -->
              <div class="p-6 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between space-x-3">
                ${config.isSupabaseConfigured() ? `
                  <button id="btn-disconnect-supabase" type="button" class="px-3 py-2 rounded-xl text-xs font-bold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 border border-red-200 dark:border-red-900 transition-colors">
                    Disconnect
                  </button>
                ` : `<div></div>`}

                <div class="flex items-center space-x-2">
                  <button id="btn-cancel-supabase" type="button" class="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    Cancel
                  </button>
                  <button id="btn-save-supabase" type="button" ${isTestingSupabase ? 'disabled' : ''} class="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-600/30 transition-all flex items-center space-x-2 disabled:opacity-50">
                    ${isTestingSupabase ? `
                      <span class="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Testing Connection...</span>
                    ` : `
                      <i data-lucide="save" class="w-3.5 h-3.5"></i>
                      <span>Save & Connect</span>
                    `}
                  </button>
                </div>
              </div>

            </div>
          </div>
        ` : ''}

      </div>
    `;

    if (window.lucide) window.lucide.createIcons();

    // Mode switch
    document.getElementById('btn-switch-login')?.addEventListener('click', () => {
      mode = 'login';
      errorMessage = '';
      render();
    });

    document.getElementById('btn-switch-register')?.addEventListener('click', () => {
      mode = 'register';
      errorMessage = '';
      render();
    });

    // Supabase Modal triggers
    document.getElementById('btn-open-supabase')?.addEventListener('click', () => {
      showSupabaseModal = true;
      supabaseModalError = '';
      supabaseModalSuccess = '';
      render();
    });

    document.getElementById('btn-close-supabase-modal')?.addEventListener('click', () => {
      showSupabaseModal = false;
      render();
    });

    document.getElementById('btn-cancel-supabase')?.addEventListener('click', () => {
      showSupabaseModal = false;
      render();
    });

    // Copy SQL Schema Button
    document.getElementById('btn-copy-sql-schema')?.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(SUPABASE_SCHEMA_SQL);
        const label = document.getElementById('copy-sql-label');
        if (label) label.textContent = '✅ Schema Copied to Clipboard!';
        showToast('SQL Schema copied to clipboard! Paste it into Supabase SQL Editor.', 'success');
        setTimeout(() => {
          if (label) label.textContent = '📋 1-Click Copy Database Schema (SQL)';
        }, 3000);
      } catch (err) {
        const temp = document.createElement('textarea');
        temp.value = SUPABASE_SCHEMA_SQL;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
        showToast('SQL Schema copied to clipboard!', 'success');
      }
    });

    // Save & Connect Supabase
    document.getElementById('btn-save-supabase')?.addEventListener('click', async () => {
      const urlInput = document.getElementById('input-supabase-url');
      const keyInput = document.getElementById('input-supabase-key');
      const url = urlInput ? urlInput.value.trim() : '';
      const key = keyInput ? keyInput.value.trim() : '';

      if (!url || !key) {
        supabaseModalError = 'Please provide both your Supabase Project URL and Anon Public Key.';
        render();
        return;
      }

      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        supabaseModalError = 'Project URL must start with https:// (e.g. https://yourid.supabase.co)';
        render();
        return;
      }

      isTestingSupabase = true;
      supabaseModalError = '';
      supabaseModalSuccess = '';
      render();

      try {
        await supabaseService.testConnection(url, key);
        config.setSupabaseCredentials(url, key);
        supabaseService.initClient();
        isTestingSupabase = false;
        supabaseModalSuccess = 'Successfully connected to Supabase Cloud Database!';
        showToast('Supabase Cloud Database connected successfully!', 'success');
        setTimeout(() => {
          showSupabaseModal = false;
          render();
        }, 1200);
      } catch (err) {
        isTestingSupabase = false;
        supabaseModalError = `Connection test failed: ${err.message || 'Check your URL and Anon Key'}`;
        render();
      }
    });

    // Disconnect Supabase
    document.getElementById('btn-disconnect-supabase')?.addEventListener('click', () => {
      config.clearSupabaseCredentials();
      supabaseService.initClient();
      showToast('Supabase disconnected. Using local & offline mode.', 'info');
      showSupabaseModal = false;
      render();
    });

    // Demo pills fill
    container.querySelectorAll('.btn-demo').forEach(btn => {
      btn.addEventListener('click', () => {
        const emailInput = document.getElementById('login-email');
        const passInput = document.getElementById('login-password');
        if (emailInput && passInput) {
          emailInput.value = btn.getAttribute('data-email');
          passInput.value = btn.getAttribute('data-pass');
        }
      });
    });

    // Login submit
    document.getElementById('auth-login-form')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const pass = document.getElementById('login-password').value;

      isLoading = true;
      errorMessage = '';
      render();

      try {
        const res = await api.login(email, pass);
        store.setCurrentUser(res.user);
        showToast(`Welcome back, ${res.user.name.split(' ')[0]}!`, 'success');
        window.location.hash = '#dashboard';
      } catch (err) {
        errorMessage = err.message || 'Login failed.';
        isLoading = false;
        render();
      }
    });

    // Register submit
    document.getElementById('auth-register-form')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('reg-name').value;
      const email = document.getElementById('reg-email').value;
      const password = document.getElementById('reg-password').value;
      const role = document.getElementById('reg-role').value;
      const year = document.getElementById('reg-year').value;
      const department = document.getElementById('reg-dept').value;

      isLoading = true;
      errorMessage = '';
      render();

      try {
        const res = await api.register({ name, email, password, role, year, department });
        store.setCurrentUser(res.user);
        showToast(`Account created! Welcome to CampusHub, ${name.split(' ')[0]}!`, 'success');
        window.location.hash = '#dashboard';
      } catch (err) {
        errorMessage = err.message || 'Registration failed.';
        isLoading = false;
        render();
      }
    });
  }

  render();
}

