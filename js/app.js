// CampusHub Main Application Controller & Router
import { store } from './store.js';
import { escapeHtml, showToast } from './utils.js';

// Import Views
import { renderLanding } from './views/landing.js';
import { renderDashboard } from './views/dashboard.js';
import { renderTimetable } from './views/timetable.js';
import { renderAttendance } from './views/attendance.js';
import { renderAssignments } from './views/assignments.js';
import { renderStudyPlanner } from './views/studyPlanner.js';
import { renderEvents } from './views/events.js';
import { renderNotes } from './views/notes.js';
import { renderGpaCalculator } from './views/gpaCalculator.js';
import { renderClubs } from './views/clubs.js';
import { renderLostFound } from './views/lostFound.js';
import { renderMarketplace } from './views/marketplace.js';
import { renderProfile } from './views/profile.js';

// Route configuration
const ROUTES = {
  '': { title: 'CampusHub', render: renderLanding, isLanding: true },
  '#': { title: 'CampusHub', render: renderLanding, isLanding: true },
  '#landing': { title: 'CampusHub — Welcome', render: renderLanding, isLanding: true },
  '#dashboard': { title: 'Dashboard', icon: 'layout-dashboard', render: renderDashboard },
  '#timetable': { title: 'Timetable', icon: 'calendar', render: renderTimetable },
  '#attendance': { title: 'Attendance', icon: 'check-check', render: renderAttendance },
  '#assignments': { title: 'Assignments', icon: 'check-square', render: renderAssignments },
  '#study': { title: 'Study & Pomodoro', icon: 'timer', render: renderStudyPlanner },
  '#events': { title: 'Campus Events', icon: 'sparkles', render: renderEvents },
  '#notes': { title: 'Notes & Files', icon: 'book-open', render: renderNotes },
  '#gpa': { title: 'GPA Calculator', icon: 'calculator', render: renderGpaCalculator },
  '#clubs': { title: 'Campus Clubs', icon: 'users', render: renderClubs },
  '#lostfound': { title: 'Lost & Found', icon: 'help-circle', render: renderLostFound },
  '#marketplace': { title: 'Marketplace', icon: 'shopping-bag', render: renderMarketplace },
  '#profile': { title: 'Profile', icon: 'user', render: renderProfile },
};

class App {
  constructor() {
    this.root = document.getElementById('app-root');
    this.currentHash = window.location.hash || '#landing';
    this.mobileSidebarOpen = false;
    this.notifDropdownOpen = false;

    this.init();
  }

  init() {
    window.addEventListener('hashchange', () => this.handleRouting());
    this.setupGlobalSearch();
    this.handleRouting();

    // Subscribe to state changes to update badges & shell UI
    store.subscribe('*', () => this.updateShellCounters());
  }

  handleRouting() {
    const rawHash = window.location.hash;
    const cleanHash = rawHash.split('?')[0] || '#landing';
    this.currentHash = cleanHash;

    const route = ROUTES[cleanHash] || ROUTES['#dashboard'];

    if (route.isLanding) {
      this.renderLandingLayout(route);
    } else {
      this.renderAppLayout(route, cleanHash);
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  renderLandingLayout(route) {
    this.root.innerHTML = `<div id="landing-container" class="min-h-screen"></div>`;
    const container = document.getElementById('landing-container');
    route.render(container);
  }

  renderAppLayout(route, currentHash) {
    const profile = store.getProfile();
    const assignments = store.getAssignments();
    const attendance = store.getAttendance();
    const notifications = store.getNotifications();

    const pendingCount = assignments.filter(a => a.status !== 'Completed').length;
    const unreadNotifCount = notifications.filter(n => !n.read).length;
    const lowAttCount = attendance.filter(s => {
      const total = s.totalClasses || 0;
      const attended = s.attendedClasses || 0;
      return total > 0 && ((attended / total) * 100) < (s.targetPercentage || 75);
    }).length;

    // Build navigation items
    const navItems = [
      { hash: '#dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
      { hash: '#timetable', label: 'Class Timetable', icon: 'calendar' },
      { hash: '#attendance', label: 'Attendance Tracker', icon: 'check-check', badge: lowAttCount > 0 ? `${lowAttCount} alert` : null, badgeColor: 'bg-red-500' },
      { hash: '#assignments', label: 'Assignments', icon: 'check-square', badge: pendingCount > 0 ? pendingCount : null, badgeColor: 'bg-amber-500' },
      { hash: '#study', label: 'Study & Pomodoro', icon: 'timer' },
      { hash: '#events', label: 'College Events', icon: 'sparkles' },
      { hash: '#notes', label: 'Notes & Resources', icon: 'book-open' },
      { hash: '#gpa', label: 'GPA Calculator', icon: 'calculator' },
      { hash: '#clubs', label: 'Campus Clubs', icon: 'users' },
      { hash: '#lostfound', label: 'Lost & Found', icon: 'help-circle' },
      { hash: '#marketplace', label: 'Marketplace', icon: 'shopping-bag' },
      { hash: '#profile', label: 'Student Profile', icon: 'user' },
    ];

    this.root.innerHTML = `
      <div class="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-950">
        
        <!-- Mobile Sidebar Backdrop -->
        <div id="mobile-sidebar-backdrop" class="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden hidden"></div>

        <!-- Sidebar Navigation (Desktop & Mobile Drawer) -->
        <aside id="app-sidebar" class="fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-900 border-r border-slate-200/80 dark:border-slate-800 flex flex-col transition-transform duration-300 transform -translate-x-full lg:translate-x-0 lg:static lg:inset-auto shrink-0 shadow-lg lg:shadow-none">
          
          <!-- Logo & Brand Header -->
          <div class="h-16 flex items-center justify-between px-5 border-b border-slate-100 dark:border-slate-800">
            <a href="#landing" class="flex items-center gap-2.5 group">
              <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
                🎓
              </div>
              <div>
                <span class="text-lg font-black tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">CampusHub</span>
                <span class="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Student Portal</span>
              </div>
            </a>

            <!-- Close Mobile Menu Button -->
            <button id="mobile-sidebar-close" class="p-1 rounded-lg text-slate-400 hover:text-slate-600 lg:hidden">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <!-- Navigation Links Scroll Area -->
          <nav class="flex-1 overflow-y-auto p-3 space-y-1">
            ${navItems.map(item => {
              const isActive = currentHash === item.hash;
              return `
                <a href="${item.hash}" class="nav-link flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'
                }">
                  <div class="flex items-center gap-3 min-w-0">
                    <i data-lucide="${item.icon}" class="w-4 h-4 shrink-0"></i>
                    <span class="truncate">${item.label}</span>
                  </div>
                  ${item.badge ? `
                    <span class="px-2 py-0.5 rounded-full text-[10px] font-bold text-white ${item.badgeColor || 'bg-indigo-500'} shrink-0 shadow-xs">
                      ${item.badge}
                    </span>
                  ` : ''}
                </a>
              `;
            }).join('')}
          </nav>

          <!-- Sidebar Footer: Student Profile Mini Card -->
          <div class="p-3 border-t border-slate-100 dark:border-slate-800">
            <a href="#profile" class="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
              <img src="${profile.avatar}" alt="${escapeHtml(profile.name)}" class="w-9 h-9 rounded-xl object-cover border border-slate-200 dark:border-slate-700 shrink-0">
              <div class="min-w-0 flex-1">
                <div class="text-xs font-bold text-slate-900 dark:text-white truncate group-hover:text-indigo-600">${escapeHtml(profile.name)}</div>
                <div class="text-[11px] text-slate-400 truncate">${escapeHtml(profile.rollNo)}</div>
              </div>
              <i data-lucide="chevron-right" class="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform"></i>
            </a>
          </div>

        </aside>

        <!-- Main App Content Area -->
        <div class="flex-1 flex flex-col min-w-0 overflow-hidden">

          <!-- Top Navigation Bar -->
          <header class="h-16 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 px-4 sm:px-6 flex items-center justify-between gap-4 shrink-0">
            
            <!-- Left: Mobile Menu Trigger & Search Button -->
            <div class="flex items-center gap-3 flex-1 max-w-md">
              <button id="mobile-sidebar-toggle" class="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden">
                <i data-lucide="menu" class="w-5 h-5"></i>
              </button>

              <!-- Global Search Trigger Bar -->
              <button id="header-search-trigger" class="flex-1 hidden sm:flex items-center gap-3 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-600 text-xs font-medium border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all text-left">
                <i data-lucide="search" class="w-4 h-4 text-indigo-500"></i>
                <span class="truncate">Search tasks, classes, events, notes...</span>
                <kbd class="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-white dark:bg-slate-700 text-slate-500 font-mono shadow-xs">Ctrl K</kbd>
              </button>

              <button id="header-search-trigger-mobile" class="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 sm:hidden" title="Search">
                <i data-lucide="search" class="w-5 h-5"></i>
              </button>
            </div>

            <!-- Right: Actions & Tools -->
            <div class="flex items-center gap-2 sm:gap-3">
              
              <!-- Back to Landing Page -->
              <a href="#landing" class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <i data-lucide="home" class="w-4 h-4"></i>
                <span>Landing</span>
              </a>

              <!-- Theme Switcher -->
              <button id="header-theme-toggle" class="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" title="Toggle dark/light mode">
                <i data-lucide="${store.getTheme() === 'dark' ? 'sun' : 'moon'}" class="w-5 h-5"></i>
              </button>

              <!-- Notifications Dropdown Trigger -->
              <div class="relative">
                <button id="header-notif-toggle" class="relative p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <i data-lucide="bell" class="w-5 h-5"></i>
                  ${unreadNotifCount > 0 ? `
                    <span class="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-900 animate-pulse"></span>
                  ` : ''}
                </button>

                <!-- Notifications Dropdown Menu -->
                <div id="header-notif-dropdown" class="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-4 hidden z-50 modal-enter">
                  <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-3">
                    <div class="flex items-center gap-2">
                      <h4 class="text-sm font-bold text-slate-900 dark:text-white">Campus Notifications</h4>
                      <span class="text-[11px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                        ${unreadNotifCount} unread
                      </span>
                    </div>
                    <button id="btn-mark-all-read" class="text-xs text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
                      Mark all read
                    </button>
                  </div>

                  <div class="space-y-2 max-h-72 overflow-y-auto">
                    ${notifications.length > 0 ? notifications.map(notif => `
                      <a href="${notif.link || '#'}" class="block p-3 rounded-xl ${notif.read ? 'bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50' : 'bg-indigo-50/50 dark:bg-indigo-950/30'} border border-slate-100 dark:border-slate-800/60 transition-colors">
                        <div class="flex items-center justify-between mb-1">
                          <span class="text-xs font-bold text-slate-900 dark:text-white">${escapeHtml(notif.title)}</span>
                          <span class="text-[10px] text-slate-400">${notif.time}</span>
                        </div>
                        <p class="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">${escapeHtml(notif.message)}</p>
                      </a>
                    `).join('') : `
                      <div class="text-center py-6 text-slate-400 text-xs font-medium">No notifications</div>
                    `}
                  </div>
                </div>
              </div>

              <!-- Profile avatar quick link -->
              <a href="#profile" class="p-0.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:ring-2 hover:ring-indigo-500 transition-all">
                <img src="${profile.avatar}" alt="Avatar" class="w-8 h-8 rounded-lg object-cover">
              </a>

            </div>
          </header>

          <!-- Main Scrollable Content Container -->
          <main class="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            <div id="view-container" class="max-w-7xl mx-auto">
              <!-- View Content dynamically injected -->
            </div>
          </main>

          <!-- Mobile Bottom Navigation Bar -->
          <div class="lg:hidden h-14 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-around px-2 shrink-0 z-30">
            <a href="#dashboard" class="flex flex-col items-center py-1 px-2 text-[10px] font-semibold ${currentHash === '#dashboard' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500'}">
              <i data-lucide="layout-dashboard" class="w-5 h-5"></i>
              <span>Home</span>
            </a>
            <a href="#timetable" class="flex flex-col items-center py-1 px-2 text-[10px] font-semibold ${currentHash === '#timetable' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500'}">
              <i data-lucide="calendar" class="w-5 h-5"></i>
              <span>Schedule</span>
            </a>
            <a href="#attendance" class="flex flex-col items-center py-1 px-2 text-[10px] font-semibold ${currentHash === '#attendance' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500'}">
              <i data-lucide="check-check" class="w-5 h-5"></i>
              <span>Attendance</span>
            </a>
            <a href="#assignments" class="flex flex-col items-center py-1 px-2 text-[10px] font-semibold ${currentHash === '#assignments' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500'}">
              <i data-lucide="check-square" class="w-5 h-5"></i>
              <span>Tasks</span>
            </a>
            <a href="#profile" class="flex flex-col items-center py-1 px-2 text-[10px] font-semibold ${currentHash === '#profile' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500'}">
              <i data-lucide="user" class="w-5 h-5"></i>
              <span>Profile</span>
            </a>
          </div>

        </div>

      </div>
    `;

    // Render the view into view-container
    const viewContainer = document.getElementById('view-container');
    if (viewContainer && route.render) {
      route.render(viewContainer);
    }

    // Attach listeners for app shell components
    this.attachShellListeners();

    // Refresh icons
    if (window.lucide) window.lucide.createIcons();
  }

  attachShellListeners() {
    // Theme toggle
    const themeBtn = document.getElementById('header-theme-toggle');
    if (themeBtn) {
      themeBtn.onclick = () => {
        const next = store.toggleTheme();
        themeBtn.innerHTML = `<i data-lucide="${next === 'dark' ? 'sun' : 'moon'}" class="w-5 h-5"></i>`;
        if (window.lucide) window.lucide.createIcons();
      };
    }

    // Mobile sidebar toggle
    const mobileToggle = document.getElementById('mobile-sidebar-toggle');
    const mobileClose = document.getElementById('mobile-sidebar-close');
    const mobileBackdrop = document.getElementById('mobile-sidebar-backdrop');
    const sidebar = document.getElementById('app-sidebar');

    const openSidebar = () => {
      if (sidebar) sidebar.classList.remove('-translate-x-full');
      if (mobileBackdrop) mobileBackdrop.classList.remove('hidden');
    };

    const closeSidebar = () => {
      if (sidebar) sidebar.classList.add('-translate-x-full');
      if (mobileBackdrop) mobileBackdrop.classList.add('hidden');
    };

    if (mobileToggle) mobileToggle.onclick = openSidebar;
    if (mobileClose) mobileClose.onclick = closeSidebar;
    if (mobileBackdrop) mobileBackdrop.onclick = closeSidebar;

    // Notifications dropdown
    const notifBtn = document.getElementById('header-notif-toggle');
    const notifDropdown = document.getElementById('header-notif-dropdown');
    if (notifBtn && notifDropdown) {
      notifBtn.onclick = (e) => {
        e.stopPropagation();
        notifDropdown.classList.toggle('hidden');
      };

      document.addEventListener('click', (e) => {
        if (!notifDropdown.contains(e.target) && !notifBtn.contains(e.target)) {
          notifDropdown.classList.add('hidden');
        }
      });
    }

    const markAllRead = document.getElementById('btn-mark-all-read');
    if (markAllRead) {
      markAllRead.onclick = () => {
        store.markAllNotificationsRead();
        showToast('All notifications marked as read', 'info');
        this.renderAppLayout(ROUTES[this.currentHash] || ROUTES['#dashboard'], this.currentHash);
      };
    }
  }

  updateShellCounters() {
    // Re-render current app layout to reflect counts if not on landing
    if (this.currentHash !== '#landing' && this.currentHash !== '') {
      // Re-trigger icons
      if (window.lucide) window.lucide.createIcons();
    }
  }

  setupGlobalSearch() {
    const modal = document.getElementById('global-search-modal');
    const input = document.getElementById('global-search-input');
    const resultsContainer = document.getElementById('global-search-results');
    const closeBtn = document.getElementById('global-search-close');

    const openModal = () => {
      modal.classList.remove('hidden');
      input.value = '';
      input.focus();
      renderSearchResults('');
    };

    const closeModal = () => {
      modal.classList.add('hidden');
    };

    // Keyboard shortcuts: Ctrl+K or /
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (modal.classList.contains('hidden')) openModal();
        else closeModal();
      } else if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
      }
    });

    // Button click listeners
    document.addEventListener('click', (e) => {
      if (e.target.closest('#header-search-trigger') || e.target.closest('#header-search-trigger-mobile')) {
        openModal();
      }
      if (e.target.closest('#global-search-close') || e.target === modal) {
        closeModal();
      }
    });

    const renderSearchResults = (query) => {
      const q = query.trim().toLowerCase();
      if (!q) {
        resultsContainer.innerHTML = `
          <div class="text-center py-8 text-slate-400 text-xs font-medium">
            Search for classes, assignments, events, notes, clubs, or marketplace listings...
          </div>
        `;
        return;
      }

      const timetable = store.getTimetable();
      const assignments = store.getAssignments();
      const events = store.getEvents();
      const notes = store.getNotes();
      const clubs = store.getClubs();
      const marketplace = store.getMarketplace();

      const hits = [];

      // Classes
      timetable.forEach(c => {
        if (c.subject.toLowerCase().includes(q) || c.room.toLowerCase().includes(q) || c.professor.toLowerCase().includes(q)) {
          hits.push({ type: 'Class', title: c.subject, desc: `${c.day} • ${c.startTime}-${c.endTime} • ${c.room}`, link: '#timetable', icon: 'calendar', color: 'text-indigo-500' });
        }
      });

      // Assignments
      assignments.forEach(a => {
        if (a.title.toLowerCase().includes(q) || a.subject.toLowerCase().includes(q)) {
          hits.push({ type: 'Assignment', title: a.title, desc: `${a.subject} • Priority: ${a.priority}`, link: '#assignments', icon: 'check-square', color: 'text-amber-500' });
        }
      });

      // Events
      events.forEach(ev => {
        if (ev.title.toLowerCase().includes(q) || ev.category.toLowerCase().includes(q) || ev.organizer.toLowerCase().includes(q)) {
          hits.push({ type: 'Event', title: ev.title, desc: `${ev.category} • ${ev.date} • ${ev.venue}`, link: '#events', icon: 'sparkles', color: 'text-rose-500' });
        }
      });

      // Notes
      notes.forEach(n => {
        if (n.title.toLowerCase().includes(q) || n.subject.toLowerCase().includes(q) || n.content.toLowerCase().includes(q)) {
          hits.push({ type: 'Note', title: n.title, desc: `${n.subject} • ${n.category}`, link: '#notes', icon: 'book-open', color: 'text-teal-500' });
        }
      });

      // Clubs
      clubs.forEach(cl => {
        if (cl.name.toLowerCase().includes(q) || cl.category.toLowerCase().includes(q) || cl.description.toLowerCase().includes(q)) {
          hits.push({ type: 'Club', title: cl.name, desc: `${cl.category} • ${cl.memberCount} members`, link: '#clubs', icon: 'users', color: 'text-cyan-500' });
        }
      });

      // Marketplace
      marketplace.forEach(mp => {
        if (mp.title.toLowerCase().includes(q) || mp.category.toLowerCase().includes(q)) {
          hits.push({ type: 'Marketplace', title: mp.title, desc: `$${mp.price} • ${mp.condition} • ${mp.category}`, link: '#marketplace', icon: 'shopping-bag', color: 'text-orange-500' });
        }
      });

      if (hits.length === 0) {
        resultsContainer.innerHTML = `
          <div class="text-center py-8 text-slate-400 text-xs font-medium">
            No matching results found for "${escapeHtml(query)}"
          </div>
        `;
      } else {
        resultsContainer.innerHTML = `
          <div class="space-y-1">
            ${hits.slice(0, 10).map(hit => `
              <a href="${hit.link}" class="search-result-item flex items-center justify-between p-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
                <div class="flex items-center gap-3 min-w-0">
                  <div class="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 ${hit.color}">
                    <i data-lucide="${hit.icon}" class="w-4 h-4"></i>
                  </div>
                  <div class="min-w-0">
                    <div class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-indigo-600">${escapeHtml(hit.title)}</div>
                    <div class="text-[11px] text-slate-400 truncate">${escapeHtml(hit.desc)}</div>
                  </div>
                </div>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500">
                  ${hit.type}
                </span>
              </a>
            `).join('')}
          </div>
        `;

        resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
          item.onclick = () => closeModal();
        });
      }

      if (window.lucide) window.lucide.createIcons();
    };

    input.addEventListener('input', (e) => {
      renderSearchResults(e.target.value);
    });
  }
}

// Instantiate and start app on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new App();
});
