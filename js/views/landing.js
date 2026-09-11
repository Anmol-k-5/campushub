// CampusHub Landing Page View
import { store } from '../store.js';

export function renderLanding(container) {
  const profile = store.getProfile();

  container.innerHTML = `
    <div class="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      
      <!-- Top Landing Nav -->
      <header class="sticky top-0 z-30 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/80 dark:border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-indigo-500/25">
              🎓
            </div>
            <div>
              <span class="text-xl font-black tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:to-pink-400 bg-clip-text text-transparent">CampusHub</span>
              <span class="hidden sm:inline-block ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">v2.4</span>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <button id="landing-theme-toggle" class="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" title="Toggle theme">
              <i data-lucide="${store.getTheme() === 'dark' ? 'sun' : 'moon'}" class="w-5 h-5"></i>
            </button>
            <a href="#dashboard" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]">
              <span>Open Dashboard</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
          </div>
        </div>
      </header>

      <!-- Hero Section -->
      <section class="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
        <!-- Background Gradient Glows -->
        <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl pointer-events-none -z-10 rounded-full"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/60 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-medium mb-6 shadow-sm">
            <span class="flex h-2 w-2 rounded-full bg-indigo-500 animate-ping"></span>
            Built for college students, by students
          </div>

          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight sm:leading-none mb-6">
            Everything you need for college. <br class="hidden sm:inline" />
            <span class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">In one place.</span>
          </h1>

          <p class="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 font-normal">
            Streamline your timetable, track attendance with smart bunk math, conquer assignment deadlines, crush GPA goals, join clubs, and connect with campus peers.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
            <a href="#dashboard" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base shadow-xl shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]">
              <span>Enter CampusHub</span>
              <i data-lucide="sparkles" class="w-5 h-5"></i>
            </a>
            <a href="#profile" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-semibold text-base transition-all hover:scale-[1.02]">
              <img src="${profile.avatar}" class="w-6 h-6 rounded-full object-cover" alt="Student avatar">
              <span>View as ${profile.name.split(' ')[0]}</span>
            </a>
          </div>

          <!-- Feature Cards Spotlight -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
            <!-- Widget 1 -->
            <div class="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-sm card-hover-lift">
              <div class="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                <i data-lucide="shield-check" class="w-6 h-6"></i>
              </div>
              <h3 class="text-lg font-bold mb-2">Smart Attendance Advisor</h3>
              <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">Calculates precise safe bunks or required consecutive classes to protect your 75% requirement.</p>
              <div class="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 inline-block">
                ✓ Prevents debarment
              </div>
            </div>

            <!-- Widget 2 -->
            <div class="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-sm card-hover-lift">
              <div class="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
                <i data-lucide="clock" class="w-6 h-6"></i>
              </div>
              <h3 class="text-lg font-bold mb-2">Live Timetable & Schedule</h3>
              <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">Highlights current happening and upcoming classes with lecture hall numbers and faculty info.</p>
              <div class="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 inline-block">
                🕒 Real-time room locator
              </div>
            </div>

            <!-- Widget 3 -->
            <div class="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-sm card-hover-lift">
              <div class="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 flex items-center justify-center mb-4">
                <i data-lucide="calculator" class="w-6 h-6"></i>
              </div>
              <h3 class="text-lg font-bold mb-2">GPA & Target Estimator</h3>
              <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">Multi-course credit weighted SGPA and cumulative CGPA projections with target simulator.</p>
              <div class="text-xs font-semibold px-2.5 py-1 rounded-md bg-pink-50 dark:bg-pink-950/40 text-pink-700 dark:text-pink-300 inline-block">
                🎯 Honor roll planner
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Campus Statistics Bar -->
      <section class="border-y border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div class="text-3xl sm:text-4xl font-black text-indigo-600 dark:text-indigo-400">12-in-1</div>
              <div class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">Campus Modules</div>
            </div>
            <div>
              <div class="text-3xl sm:text-4xl font-black text-purple-600 dark:text-purple-400">100%</div>
              <div class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">Local Data Privacy</div>
            </div>
            <div>
              <div class="text-3xl sm:text-4xl font-black text-pink-600 dark:text-pink-400">75%</div>
              <div class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">Attendance Guardian</div>
            </div>
            <div>
              <div class="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400">0ms</div>
              <div class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">Instant Load Speed</div>
            </div>
          </div>
        </div>
      </section>

      <!-- All 12 Core Features Grid -->
      <section class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">Complete Student Ecosystem</h2>
          <p class="text-slate-600 dark:text-slate-400 text-base sm:text-lg">No more switching between ten different university portals and chat groups. Everything is unified.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <!-- 1. Student Dashboard -->
          <a href="#dashboard" class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all card-hover-lift block group">
            <div class="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i data-lucide="layout-dashboard" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">1. Student Dashboard</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Personalized greetings, today's schedule, pending tasks, quick stats, and dynamic action buttons.</p>
          </a>

          <!-- 2. Class Timetable -->
          <a href="#timetable" class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all card-hover-lift block group">
            <div class="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i data-lucide="calendar" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">2. Class Timetable</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Weekly schedule planner with room numbers, professors, time slots, and automatic current-class detection.</p>
          </a>

          <!-- 3. Attendance Tracker -->
          <a href="#attendance" class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all card-hover-lift block group">
            <div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i data-lucide="check-check" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">3. Attendance Tracker</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">One-tap presence logging, 75% threshold warnings, and smart bunk / recovery calculations.</p>
          </a>

          <!-- 4. Assignment Manager -->
          <a href="#assignments" class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all card-hover-lift block group">
            <div class="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i data-lucide="check-square" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">4. Assignment & Tasks</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Priority tagging, overdue warnings, status filters, and instant completion celebrations.</p>
          </a>

          <!-- 5. Study Planner & Pomodoro -->
          <a href="#study" class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all card-hover-lift block group">
            <div class="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i data-lucide="timer" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">5. Study Planner & Pomodoro</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Built-in Pomodoro focus timer with audio chimes, daily targets, and weekly study hours breakdown.</p>
          </a>

          <!-- 6. College Events -->
          <a href="#events" class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all card-hover-lift block group">
            <div class="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i data-lucide="sparkles" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">6. College Events & Fests</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Discover upcoming hackathons, tech workshops, fests, and competitions with bookmarking.</p>
          </a>

          <!-- 7. Notes & Resources -->
          <a href="#notes" class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all card-hover-lift block group">
            <div class="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i data-lucide="book-open" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">7. Notes & Resources</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Organized subject repository for lecture slides, exam cheatsheets, code snippets, and study links.</p>
          </a>

          <!-- 8. CGPA / GPA Calculator -->
          <a href="#gpa" class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all card-hover-lift block group">
            <div class="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-950 text-violet-600 dark:text-violet-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i data-lucide="calculator" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">8. CGPA / GPA Calculator</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Real-time semester SGPA and cumulative CGPA calculator with target goal simulator.</p>
          </a>

          <!-- 9. Campus Clubs -->
          <a href="#clubs" class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all card-hover-lift block group">
            <div class="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i data-lucide="users" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">9. Campus Clubs</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Explore technical, cultural, and sports societies. One-click club joining synced to your profile.</p>
          </a>

          <!-- 10. Lost & Found -->
          <a href="#lostfound" class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all card-hover-lift block group">
            <div class="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i data-lucide="help-circle" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">10. Lost & Found</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Campus bulletin for reported missing or discovered items, locations, and return confirmations.</p>
          </a>

          <!-- 11. Campus Marketplace -->
          <a href="#marketplace" class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all card-hover-lift block group">
            <div class="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i data-lucide="shopping-bag" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">11. Peer Marketplace</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Buy and sell pre-loved textbooks, scientific calculators, bicycles, and hostel room essentials.</p>
          </a>

          <!-- 12. Student Profile -->
          <a href="#profile" class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all card-hover-lift block group">
            <div class="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i data-lucide="user" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">12. Student Profile</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Academic portfolio with skills, achievements, joined societies, custom avatars, and data backup.</p>
          </a>

        </div>
      </section>

      <!-- CTA Bottom Section -->
      <section class="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-center">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl sm:text-4xl font-extrabold mb-4">Ready to upgrade your college life?</h2>
          <p class="text-indigo-100 text-lg mb-8 max-w-xl mx-auto">CampusHub comes preloaded with realistic sample data. Zero signups needed to test-drive.</p>
          <a href="#dashboard" class="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-indigo-700 hover:bg-slate-100 font-bold text-base shadow-2xl transition-all hover:scale-105 active:scale-95">
            <span>Launch CampusHub Dashboard</span>
            <i data-lucide="arrow-right" class="w-5 h-5"></i>
          </a>
        </div>
      </section>

      <!-- Footer -->
      <footer class="border-t border-slate-200 dark:border-slate-800 py-8 text-center text-xs text-slate-500 dark:text-slate-400">
        <p>© 2026 CampusHub • Modern Digital Companion for College Students • Free & Open Source</p>
      </footer>

    </div>
  `;

  // Attach event listener for theme toggle
  const themeBtn = container.querySelector('#landing-theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const nextTheme = store.toggleTheme();
      themeBtn.innerHTML = `<i data-lucide="${nextTheme === 'dark' ? 'sun' : 'moon'}" class="w-5 h-5"></i>`;
      if (window.lucide) window.lucide.createIcons();
    });
  }

  // Render icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
}
