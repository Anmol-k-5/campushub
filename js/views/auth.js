// ============================================================
// CAMPUSHUB AUTHENTICATION VIEW (Sign In & Sign Up)
// User registration, password authentication, and session handling
// ============================================================
import { api } from '../api.js';
import { store } from '../store.js';
import { showToast } from '../utils.js';

export function renderAuth(container) {
  let mode = window.location.hash === '#register' ? 'register' : 'login'; // 'login' | 'register'
  let errorMessage = '';
  let isLoading = false;

  function render() {
    container.innerHTML = `
      <div class="min-h-[80vh] flex items-center justify-center p-4">
        <div class="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xl overflow-hidden animate-fade-in">
          
          <!-- Auth Header Banner -->
          <div class="p-8 text-center bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 text-white relative">
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
          <div class="px-6 py-4 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-500">
            <span>Encrypted with SHA-256 & Salt • SQLite DB Ready</span>
          </div>
        </div>
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
