// CampusHub Main Application Controller & Router (150 Features Master Edition)
import { store } from './store.js';
import { escapeHtml, showToast } from './utils.js';

// Pre-existing Views
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

// New Feature Views (150 Master Spec)
import { renderCampusAbout } from './views/campusAbout.js';
import { renderAdmissions } from './views/admissions.js';
import { renderDigitalId } from './views/digitalId.js';
import { renderLibraryStudy } from './views/libraryStudy.js';
import { renderFacultyDept } from './views/facultyDept.js';
import { renderFacilitiesHostel } from './views/facilitiesHostel.js';
import { renderStudentServices } from './views/studentServices.js';
import { renderPlacements } from './views/placements.js';
import { renderAdminAnalytics } from './views/adminAnalytics.js';

// Route configuration
const ROUTES = {
  '': { title: 'CampusHub', render: renderLanding, isLanding: true },
  '#': { title: 'CampusHub', render: renderLanding, isLanding: true },
  '#landing': { title: 'CampusHub — Welcome', render: renderLanding, isLanding: true },

  // Academics & Core
  '#dashboard': { title: 'Student Dashboard', icon: 'layout-dashboard', render: renderDashboard },
  '#digitalid': { title: 'Digital ID Card', icon: 'badge-check', render: renderDigitalId },
  '#timetable': { title: 'Class Timetable', icon: 'calendar', render: renderTimetable },
  '#attendance': { title: 'Attendance Tracker', icon: 'check-check', render: renderAttendance },
  '#assignments': { title: 'Assignments & Tasks', icon: 'check-square', render: renderAssignments },
  '#study': { title: 'Study & Pomodoro', icon: 'timer', render: renderStudyPlanner },
  '#notes': { title: 'Notes & Resources', icon: 'book-open', render: renderNotes },
  '#gpa': { title: 'GPA Calculator', icon: 'calculator', render: renderGpaCalculator },

  // College & Admissions
  '#about': { title: 'Campus & Vision', icon: 'landmark', render: renderCampusAbout },
  '#admissions': { title: 'Admissions 2026', icon: 'graduation-cap', render: renderAdmissions },
  '#faculty': { title: 'Faculty & Mentors', icon: 'user-check', render: renderFacultyDept },

  // Learning & Library
  '#library': { title: 'Central Library & AI', icon: 'library', render: renderLibraryStudy },

  // Campus Life & Facilities
  '#facilities': { title: 'Hostel, Mess & Bus', icon: 'home', render: renderFacilitiesHostel },
  '#events': { title: 'Campus Events', icon: 'sparkles', render: renderEvents },
  '#clubs': { title: 'Clubs & Societies', icon: 'users', render: renderClubs },
  '#lostfound': { title: 'Lost & Found', icon: 'help-circle', render: renderLostFound },
  '#marketplace': { title: 'Peer Marketplace', icon: 'shopping-bag', render: renderMarketplace },

  // Welfare, Career & Admin
  '#services': { title: 'Services & Grievances', icon: 'shield-alert', render: renderStudentServices },
  '#placements': { title: 'Training & Placements', icon: 'briefcase', render: renderPlacements },
  '#admin': { title: 'Executive Analytics', icon: 'bar-chart-3', render: renderAdminAnalytics },
  '#profile': { title: 'Student Profile', icon: 'user', render: renderProfile },
};

class App {
  constructor() {
    this.root = document.getElementById('app-root');
    this.currentHash = window.location.hash || '#landing';
    this.mobileSidebarOpen = false;
    this.notifDropdownOpen = false;
    this.chatbotOpen = false;
    this.chatMessages = [
      { sender: 'bot', text: 'Hello! I am CampusBot, your 24/7 AI university assistant. Ask me anything about admissions, cafeteria food, hostel gate passes, placement packages, or exam papers!' }
    ];

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

    // Grouped Navigation Sections
    const navSections = [
      {
        title: 'Academics & Core',
        items: [
          { hash: '#dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
          { hash: '#digitalid', label: 'Digital ID Card', icon: 'badge-check', badge: 'QR Verified', badgeColor: 'bg-emerald-600' },
          { hash: '#timetable', label: 'Class Timetable', icon: 'calendar' },
          { hash: '#attendance', label: 'Attendance Tracker', icon: 'check-check', badge: lowAttCount > 0 ? `${lowAttCount} alert` : null, badgeColor: 'bg-red-500' },
          { hash: '#assignments', label: 'Assignments', icon: 'check-square', badge: pendingCount > 0 ? pendingCount : null, badgeColor: 'bg-amber-500' },
          { hash: '#study', label: 'Study & Pomodoro', icon: 'timer' },
          { hash: '#notes', label: 'Notes & Files', icon: 'book-open' },
          { hash: '#gpa', label: 'GPA Calculator', icon: 'calculator' },
        ]
      },
      {
        title: 'University & Admissions',
        items: [
          { hash: '#about', label: 'Campus & Vision', icon: 'landmark' },
          { hash: '#admissions', label: 'Admissions 2026', icon: 'graduation-cap', badge: 'Open', badgeColor: 'bg-indigo-500' },
          { hash: '#faculty', label: 'Faculty Directory', icon: 'user-check' },
        ]
      },
      {
        title: 'Learning & Library',
        items: [
          { hash: '#library', label: 'Library & AI Tutor', icon: 'library' },
        ]
      },
      {
        title: 'Campus Life & Facilities',
        items: [
          { hash: '#facilities', label: 'Hostel, Mess & Bus', icon: 'home' },
          { hash: '#events', label: 'College Events', icon: 'sparkles' },
          { hash: '#clubs', label: 'Campus Clubs', icon: 'users' },
          { hash: '#lostfound', label: 'Lost & Found', icon: 'help-circle' },
          { hash: '#marketplace', label: 'Marketplace', icon: 'shopping-bag' },
        ]
      },
      {
        title: 'Services & Career',
        items: [
          { hash: '#services', label: 'Services & Grievances', icon: 'shield-alert' },
          { hash: '#placements', label: 'Placements & Drives', icon: 'briefcase', badge: 'Google', badgeColor: 'bg-purple-600' },
          { hash: '#admin', label: 'Executive Analytics', icon: 'bar-chart-3' },
          { hash: '#profile', label: 'Student Profile', icon: 'user' },
        ]
      }
    ];

    this.root.innerHTML = `
      <div class="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-950">
        
        <!-- Mobile Sidebar Backdrop -->
        <div id="mobile-sidebar-backdrop" class="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden hidden"></div>

        <!-- Sidebar Navigation (Desktop & Mobile Drawer) -->
        <aside id="app-sidebar" class="fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-900 border-r border-slate-200/80 dark:border-slate-800 flex flex-col transition-transform duration-300 transform -translate-x-full lg:translate-x-0 lg:static lg:inset-auto shrink-0 shadow-lg lg:shadow-none">
          
          <!-- Logo & Brand Header -->
          <div class="h-16 flex items-center justify-between px-5 border-b border-slate-100 dark:border-slate-800 shrink-0">
            <a href="#landing" class="flex items-center gap-2.5 group">
              <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
                🎓
              </div>
              <div>
                <span class="text-lg font-black tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">CampusHub</span>
                <span class="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider">150 Features Suite</span>
              </div>
            </a>

            <!-- Close Mobile Menu Button -->
            <button id="mobile-sidebar-close" class="p-1 rounded-lg text-slate-400 hover:text-slate-600 lg:hidden">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <!-- Grouped Navigation Links Scroll Area -->
          <nav class="flex-1 overflow-y-auto p-3 space-y-4 no-scrollbar">
            ${navSections.map(section => `
              <div>
                <p class="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">${section.title}</p>
                <div class="space-y-0.5">
                  ${section.items.map(item => {
                    const isActive = currentHash === item.hash;
                    return `
                      <a href="${item.hash}" class="nav-link flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-[13px] font-medium transition-all ${
                        isActive
                          ? 'bg-indigo-600 text-white font-semibold shadow-sm shadow-indigo-600/20'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'
                      }">
                        <div class="flex items-center gap-2.5 min-w-0">
                          <i data-lucide="${item.icon}" class="w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-500'}"></i>
                          <span class="truncate">${item.label}</span>
                        </div>
                        ${item.badge ? `
                          <span class="px-1.5 py-0.5 rounded-full text-[9px] font-bold text-white ${item.badgeColor || 'bg-indigo-500'} shrink-0 shadow-xs">
                            ${item.badge}
                          </span>
                        ` : ''}
                      </a>
                    `;
                  }).join('')}
                </div>
              </div>
            `).join('')}
          </nav>

          <!-- Sidebar Footer: Student Profile Mini Card -->
          <div class="p-3 border-t border-slate-100 dark:border-slate-800 shrink-0">
            <a href="#profile" class="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
              <img src="${profile.avatar}" alt="${escapeHtml(profile.name)}" class="w-9 h-9 rounded-xl object-cover border border-slate-200 dark:border-slate-700 shrink-0">
              <div class="min-w-0 flex-1">
                <div class="text-xs font-bold text-slate-900 dark:text-white truncate group-hover:text-indigo-600">${escapeHtml(profile.name)}</div>
                <div class="text-[11px] text-slate-400 truncate">${escapeHtml(profile.rollNo)} • ${profile.year}</div>
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
                <span class="truncate">Search 150 campus features, courses, books, faculty...</span>
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
                <span>Home</span>
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
            <a href="#services" class="flex flex-col items-center py-1 px-2 text-[10px] font-semibold ${currentHash === '#services' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500'}">
              <i data-lucide="shield-alert" class="w-5 h-5"></i>
              <span>Services</span>
            </a>
          </div>

        </div>

      </div>

      <!-- Feature 141: Floating 24/7 AI Campus Chatbot Widget -->
      <div id="campus-ai-bot-container" class="fixed bottom-6 right-6 z-40">
        <!-- Floating Trigger Button -->
        <button id="btn-toggle-chatbot" class="relative group p-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl hover:shadow-indigo-500/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center">
          <i data-lucide="bot" class="w-6 h-6"></i>
          <span class="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 animate-pulse"></span>
          <span class="hidden group-hover:inline-block absolute right-14 whitespace-nowrap bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg">
            Ask CampusBot AI (24/7)
          </span>
        </button>

        <!-- Chatbot Window Popover -->
        <div id="campus-ai-window" class="hidden absolute bottom-16 right-0 w-[90vw] sm:w-96 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col h-[500px] z-50">
          <!-- Chat Header -->
          <div class="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-between">
            <div class="flex items-center space-x-2.5">
              <div class="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
                <i data-lucide="bot" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="font-bold text-sm leading-none">CampusBot AI</h4>
                <p class="text-[10px] text-indigo-100 mt-1 flex items-center space-x-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
                  <span>Instant University Knowledge Base</span>
                </p>
              </div>
            </div>
            <button id="btn-close-chatbot" class="p-1 rounded-lg text-white/80 hover:text-white">
              <i data-lucide="x" class="w-4 h-4"></i>
            </button>
          </div>

          <!-- Messages Scroll Area -->
          <div id="chatbot-messages" class="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
            <!-- Messages rendered dynamically -->
          </div>

          <!-- Quick Chips -->
          <div class="p-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center space-x-1.5 overflow-x-auto no-scrollbar text-[11px]">
            <button class="chat-chip px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 whitespace-nowrap hover:border-indigo-500">Cafeteria Menu</button>
            <button class="chat-chip px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 whitespace-nowrap hover:border-indigo-500">Hostel Pass</button>
            <button class="chat-chip px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 whitespace-nowrap hover:border-indigo-500">Placements</button>
            <button class="chat-chip px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 whitespace-nowrap hover:border-indigo-500">Admissions</button>
            <button class="chat-chip px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 whitespace-nowrap hover:border-indigo-500">Emergency</button>
          </div>

          <!-- Chat Input -->
          <form id="chatbot-form" class="p-3 border-t border-slate-100 dark:border-slate-800 flex items-center space-x-2 bg-white dark:bg-slate-900">
            <input id="chatbot-input" type="text" placeholder="Type your query..." class="flex-1 px-3 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:text-white" />
            <button type="submit" class="p-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
              <i data-lucide="send" class="w-3.5 h-3.5"></i>
            </button>
          </form>
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
    this.attachChatbotListeners();

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

  attachChatbotListeners() {
    const trigger = document.getElementById('btn-toggle-chatbot');
    const windowEl = document.getElementById('campus-ai-window');
    const closeBtn = document.getElementById('btn-close-chatbot');
    const form = document.getElementById('chatbot-form');
    const input = document.getElementById('chatbot-input');
    const messagesContainer = document.getElementById('chatbot-messages');

    const renderChatMessages = () => {
      if (!messagesContainer) return;
      messagesContainer.innerHTML = this.chatMessages.map(msg => `
        <div class="flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}">
          <div class="max-w-[80%] p-3 rounded-2xl ${
            msg.sender === 'user'
              ? 'bg-indigo-600 text-white rounded-br-none'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-none'
          }">
            ${msg.text}
          </div>
        </div>
      `).join('');
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    const answerQuery = (q) => {
      const lower = q.toLowerCase();
      let response = '';

      if (lower.includes('mess') || lower.includes('food') || lower.includes('cafeteria') || lower.includes('menu')) {
        const mess = store.getMessMenu();
        response = `Today's menu (${mess.today}): Breakfast is ${mess.meals.breakfast.items[0]}. Lunch is ${mess.meals.lunch.items[0]}. Dinner is ${mess.meals.dinner.items[0]}. Check #facilities for full calorie counts!`;
      } else if (lower.includes('leave') || lower.includes('gate pass') || lower.includes('warden')) {
        response = `You can apply for an Out-Station or Day Outing gate pass under #services. Warden status and instant Security Gate QR are generated automatically with SMS consent to your parents.`;
      } else if (lower.includes('admission') || lower.includes('fee') || lower.includes('course') || lower.includes('eligibility')) {
        response = `Admissions for 2026-27 are open! B.Tech CSE fee is ₹2,20,000/yr with 180 seats. Merit cut-off is 94.5 percentile. Apply or check fee calculator at #admissions.`;
      } else if (lower.includes('placement') || lower.includes('job') || lower.includes('package') || lower.includes('intern')) {
        response = `St. Xavier's placement rate is 94.8% with ₹62 LPA highest (Google India) and ₹12.8 LPA average. Google, Microsoft, and NVIDIA drives are active now at #placements!`;
      } else if (lower.includes('doctor') || lower.includes('medical') || lower.includes('emergency') || lower.includes('ambulance')) {
        const med = store.getMedicalCenter();
        response = `Campus Medical Hospital is open 24/7. Doctor on duty: ${med.doctorOnDuty}. Direct Ambulance Hotline: ${med.ambulanceHotline}.`;
      } else if (lower.includes('library') || lower.includes('book') || lower.includes('pyq') || lower.includes('question paper')) {
        response = `The Central Library houses 85,000+ volumes and offers instant book hold reservations, past 5 years' university PYQ exam papers, and an interactive AI study tutor under #library.`;
      } else if (lower.includes('attendance') || lower.includes('bunk')) {
        response = `CampusHub tracks subject-wise attendance against your 75% target with smart bunk calculation. Check #attendance to see how many classes you can afford to miss or need to attend.`;
      } else {
        response = `CampusBot AI here! I can help you navigate all 150 features of St. Xavier's CampusHub. Try checking our Central Library (#library), Placement Cell (#placements), or Services Desk (#services)!`;
      }

      this.chatMessages.push({ sender: 'bot', text: response });
      renderChatMessages();
    };

    if (trigger && windowEl) {
      trigger.onclick = () => {
        this.chatbotOpen = !this.chatbotOpen;
        if (this.chatbotOpen) {
          windowEl.classList.remove('hidden');
          renderChatMessages();
          if (input) input.focus();
        } else {
          windowEl.classList.add('hidden');
        }
      };
    }

    if (closeBtn && windowEl) {
      closeBtn.onclick = () => {
        this.chatbotOpen = false;
        windowEl.classList.add('hidden');
      };
    }

    if (form && input) {
      form.onsubmit = (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (!text) return;
        this.chatMessages.push({ sender: 'user', text });
        input.value = '';
        renderChatMessages();

        setTimeout(() => answerQuery(text), 400);
      };
    }

    document.querySelectorAll('.chat-chip').forEach(chip => {
      chip.onclick = () => {
        const text = chip.innerText;
        this.chatMessages.push({ sender: 'user', text });
        renderChatMessages();
        setTimeout(() => answerQuery(text), 300);
      };
    });
  }

  updateShellCounters() {
    // Refresh icons
    if (window.lucide) window.lucide.createIcons();
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
            Search 150 campus features: classes, books, admissions, faculty, buses, placements, events...
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
      const books = store.getBooks();
      const faculty = store.getFaculty();
      const placements = store.getPlacements();
      const busRoutes = store.getBusRoutes();

      const hits = [];

      // Books (Features 51-70)
      books.forEach(b => {
        if (b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q) || b.category.toLowerCase().includes(q)) {
          hits.push({ type: 'Library Book', title: b.title, desc: `${b.author} • ${b.category} • Shelf: ${b.shelfLocation}`, link: '#library', icon: 'book', color: 'text-emerald-500' });
        }
      });

      // Faculty (Features 71-85)
      faculty.forEach(f => {
        if (f.name.toLowerCase().includes(q) || f.department.toLowerCase().includes(q) || f.designation.toLowerCase().includes(q)) {
          hits.push({ type: 'Faculty', title: f.name, desc: `${f.designation}, ${f.department} • Cabin: ${f.cabin}`, link: '#faculty', icon: 'user-check', color: 'text-blue-500' });
        }
      });

      // Placements (Features 147-148)
      placements.forEach(p => {
        if (p.company.toLowerCase().includes(q) || p.role.toLowerCase().includes(q) || p.skillsRequired.some(s => s.toLowerCase().includes(q))) {
          hits.push({ type: 'Placement Drive', title: `${p.company} — ${p.role}`, desc: `CTC: ${p.ctc} • Location: ${p.location}`, link: '#placements', icon: 'briefcase', color: 'text-purple-500' });
        }
      });

      // Bus Routes (Features 120-130)
      busRoutes.forEach(br => {
        if (br.routeNo.toLowerCase().includes(q) || br.origin.toLowerCase().includes(q) || br.stops.some(s => s.toLowerCase().includes(q))) {
          hits.push({ type: 'Bus Route', title: `${br.routeNo}: ${br.origin}`, desc: `Morning: ${br.morningTime} • Status: ${br.status}`, link: '#facilities', icon: 'bus', color: 'text-amber-500' });
        }
      });

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
            ${hits.slice(0, 12).map(hit => `
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
