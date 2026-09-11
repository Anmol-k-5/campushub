// CampusHub Student Dashboard View
import { store } from '../store.js';
import {
  escapeHtml,
  formatDate,
  formatDateTime,
  getCurrentDayName,
  getTimeOfDayGreeting,
  isOverdue,
  getRelativeTime,
  calculateAttendanceStatus,
  triggerConfetti,
  showToast
} from '../utils.js';

export function renderDashboard(container) {
  const profile = store.getProfile();
  const timetable = store.getTimetable();
  const attendance = store.getAttendance();
  const assignments = store.getAssignments();
  const studySessions = store.getStudySessions();
  const events = store.getEvents();
  const notifications = store.getNotifications();

  const currentDay = getCurrentDayName();
  const todayClasses = timetable.filter(c => c.day.toLowerCase() === currentDay.toLowerCase());

  // Aggregate attendance stats
  let totalClassesHeld = 0;
  let totalClassesAttended = 0;
  let lowAttendanceCount = 0;

  attendance.forEach(sub => {
    totalClassesHeld += sub.totalClasses || 0;
    totalClassesAttended += sub.attendedClasses || 0;
    const stat = calculateAttendanceStatus(sub.attendedClasses, sub.totalClasses, sub.targetPercentage);
    if (stat.isBelowTarget) lowAttendanceCount++;
  });

  const overallAttendancePct = totalClassesHeld > 0 ? ((totalClassesAttended / totalClassesHeld) * 100).toFixed(1) : 100;
  const isOverallLow = overallAttendancePct < 75;

  // Assignments stats
  const pendingAssignments = assignments.filter(a => a.status !== 'Completed');
  const overdueAssignments = assignments.filter(a => isOverdue(a.deadline, a.status));

  // Study hours logged this week
  const totalStudyMinutes = studySessions
    .filter(s => s.status === 'Completed')
    .reduce((sum, s) => sum + (s.durationMinutes || 0), 0);
  const studyHours = (totalStudyMinutes / 60).toFixed(1);

  // Determine current/next class
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  let activeClass = null;
  let nextClass = null;

  todayClasses.forEach(cls => {
    const [startH, startM] = cls.startTime.split(':').map(Number);
    const [endH, endM] = cls.endTime.split(':').map(Number);
    const startMins = startH * 60 + startM;
    const endMins = endH * 60 + endM;

    if (currentMinutes >= startMins && currentMinutes <= endMins) {
      activeClass = cls;
    } else if (currentMinutes < startMins && !nextClass) {
      nextClass = cls;
    }
  });

  const greetingData = getTimeOfDayGreeting(profile.name.split(' ')[0]);

  container.innerHTML = `
    <div class="space-y-6">

      <!-- Personalized Welcome Banner -->
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-6 sm:p-8 text-white shadow-xl shadow-indigo-500/15">
        <!-- Ambient decorative shapes -->
        <div class="absolute -right-8 -top-8 w-44 h-44 rounded-full bg-white/10 blur-xl pointer-events-none"></div>
        <div class="absolute right-24 -bottom-10 w-36 h-36 rounded-full bg-pink-500/20 blur-xl pointer-events-none"></div>

        <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-2">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-indigo-100">
              <span>${greetingData.icon}</span>
              <span>${currentDay} • ${profile.semester}</span>
            </div>
            <h1 class="text-2xl sm:text-4xl font-extrabold tracking-tight">
              ${greetingData.greeting}
            </h1>
            <p class="text-indigo-100 text-sm sm:text-base max-w-xl">
              You have <strong class="text-white">${todayClasses.length} classes</strong> scheduled today and <strong class="text-white">${pendingAssignments.length} pending tasks</strong>. Stay focused and keep moving forward!
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <a href="#assignments" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-indigo-700 font-semibold text-sm shadow-md hover:bg-indigo-50 transition-all hover:scale-105 active:scale-95">
              <i data-lucide="plus" class="w-4 h-4"></i>
              <span>New Task</span>
            </a>
            <a href="#study" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-semibold text-sm backdrop-blur-md transition-all">
              <i data-lucide="timer" class="w-4 h-4"></i>
              <span>Start Pomodoro</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Quick Statistics Cards -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        <!-- Attendance Card -->
        <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm card-hover-lift">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Attendance</span>
            <div class="w-8 h-8 rounded-lg ${isOverallLow ? 'bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400' : 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400'} flex items-center justify-center">
              <i data-lucide="${isOverallLow ? 'alert-triangle' : 'shield-check'}" class="w-4 h-4"></i>
            </div>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">${overallAttendancePct}%</span>
            <span class="text-xs font-semibold ${isOverallLow ? 'text-red-600 dark:text-red-400' : 'text-emerald-600 dark:text-emerald-400'}">
              ${isOverallLow ? 'Under 75%' : 'Safe'}
            </span>
          </div>
          <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 mt-3 overflow-hidden">
            <div class="h-2 rounded-full ${isOverallLow ? 'bg-red-500' : 'bg-emerald-500'}" style="width: ${Math.min(100, overallAttendancePct)}%"></div>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-2">
            ${lowAttendanceCount > 0 ? `<span class="text-red-500 font-semibold">${lowAttendanceCount} subject(s)</span> below 75%` : 'All subjects above 75%'}
          </p>
        </div>

        <!-- Pending Tasks Card -->
        <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm card-hover-lift">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Pending Work</span>
            <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400 flex items-center justify-center">
              <i data-lucide="check-square" class="w-4 h-4"></i>
            </div>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">${pendingAssignments.length}</span>
            <span class="text-xs font-medium text-slate-500">Tasks</span>
          </div>
          <div class="mt-3 flex items-center gap-2">
            ${overdueAssignments.length > 0 
              ? `<span class="inline-flex items-center gap-1 text-xs font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/60 px-2 py-0.5 rounded-md">
                  <i data-lucide="alert-circle" class="w-3 h-3"></i> ${overdueAssignments.length} overdue
                </span>` 
              : `<span class="text-xs text-emerald-600 dark:text-emerald-400 font-medium">✓ No overdue tasks</span>`}
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-2">Assignments & lab reports</p>
        </div>

        <!-- Study Hours Card -->
        <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm card-hover-lift">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Study Focus</span>
            <div class="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400 flex items-center justify-center">
              <i data-lucide="flame" class="w-4 h-4"></i>
            </div>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">${studyHours}</span>
            <span class="text-xs font-medium text-slate-500">Hours</span>
          </div>
          <div class="mt-3 flex items-center gap-1.5 text-xs text-purple-600 dark:text-purple-400 font-semibold">
            <i data-lucide="trending-up" class="w-3.5 h-3.5"></i>
            <span>${studySessions.length} total sessions</span>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-2">Logged focus time</p>
        </div>

        <!-- CGPA Card -->
        <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm card-hover-lift">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Current CGPA</span>
            <div class="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400 flex items-center justify-center">
              <i data-lucide="award" class="w-4 h-4"></i>
            </div>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">${profile.currentCgpa}</span>
            <span class="text-xs font-medium text-slate-500">/ 10.0</span>
          </div>
          <div class="mt-3 flex items-center gap-1.5 text-xs text-indigo-600 dark:text-indigo-400 font-semibold">
            <i data-lucide="target" class="w-3.5 h-3.5"></i>
            <span>Target: ${profile.targetGpa}</span>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-2">Scale of 10.0</p>
        </div>

      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-3 overflow-x-auto pb-1 pt-1 no-scrollbar">
        <a href="#timetable" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-indigo-500 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-sm shrink-0">
          <i data-lucide="calendar" class="w-4 h-4 text-indigo-500"></i>
          <span>View Full Schedule</span>
        </a>
        <a href="#attendance" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-emerald-500 dark:hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all shadow-sm shrink-0">
          <i data-lucide="check-check" class="w-4 h-4 text-emerald-500"></i>
          <span>Check Bunk Allowance</span>
        </a>
        <a href="#gpa" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-purple-500 dark:hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-all shadow-sm shrink-0">
          <i data-lucide="calculator" class="w-4 h-4 text-purple-500"></i>
          <span>Calculate Semester GPA</span>
        </a>
        <a href="#notes" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-teal-500 dark:hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-all shadow-sm shrink-0">
          <i data-lucide="book-open" class="w-4 h-4 text-teal-500"></i>
          <span>Browse Notes</span>
        </a>
        <a href="#lostfound" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-red-500 dark:hover:border-red-500 hover:text-red-600 dark:hover:text-red-400 transition-all shadow-sm shrink-0">
          <i data-lucide="help-circle" class="w-4 h-4 text-red-500"></i>
          <span>Report Lost Item</span>
        </a>
      </div>

      <!-- Main Dashboard 2-Column Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <!-- Left Column: Today's Classes & Pending Assignments (2 spans) -->
        <div class="lg:col-span-2 space-y-6">

          <!-- Today's Schedule Card -->
          <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <i data-lucide="calendar" class="w-5 h-5"></i>
                </div>
                <div>
                  <h2 class="text-lg font-bold text-slate-900 dark:text-white">Today's Classes (${currentDay})</h2>
                  <p class="text-xs text-slate-500">${todayClasses.length} lectures scheduled</p>
                </div>
              </div>
              <a href="#timetable" class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">
                <span>All Days</span>
                <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
              </a>
            </div>

            <!-- Active / Next Class Indicator Banner -->
            ${activeClass ? `
              <div class="mb-4 p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <span class="flex h-3 w-3 relative">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-indigo-600"></span>
                  </span>
                  <div>
                    <span class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">Happening Now</span>
                    <h4 class="text-sm font-bold text-slate-900 dark:text-white">${escapeHtml(activeClass.subject)}</h4>
                  </div>
                </div>
                <div class="text-right text-xs font-semibold text-indigo-600 dark:text-indigo-300">
                  <div>${activeClass.room}</div>
                  <div class="text-slate-500">${activeClass.startTime} - ${activeClass.endTime}</div>
                </div>
              </div>
            ` : nextClass ? `
              <div class="mb-4 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                <div class="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                  <i data-lucide="clock" class="w-4 h-4 text-indigo-500"></i>
                  <span>Next up: <strong>${escapeHtml(nextClass.subject)}</strong> in ${nextClass.room}</span>
                </div>
                <span class="font-bold text-indigo-600 dark:text-indigo-400">${nextClass.startTime}</span>
              </div>
            ` : ''}

            <!-- Classes List -->
            ${todayClasses.length > 0 ? `
              <div class="divide-y divide-slate-100 dark:divide-slate-800/80">
                ${todayClasses.map(cls => `
                  <div class="py-3.5 flex items-center justify-between gap-4 group">
                    <div class="flex items-center gap-3 min-w-0">
                      <div class="w-2.5 h-10 rounded-full" style="background-color: ${cls.color || '#6366f1'}"></div>
                      <div class="min-w-0">
                        <div class="flex items-center gap-2">
                          <h4 class="text-sm font-bold text-slate-900 dark:text-white truncate">${escapeHtml(cls.subject)}</h4>
                        </div>
                        <p class="text-xs text-slate-500 dark:text-slate-400 truncate flex items-center gap-2 mt-0.5">
                          <span>${escapeHtml(cls.professor)}</span>
                          <span>•</span>
                          <span class="font-medium text-slate-600 dark:text-slate-300">${escapeHtml(cls.room)}</span>
                        </p>
                      </div>
                    </div>

                    <div class="text-right shrink-0">
                      <div class="text-xs font-bold text-slate-800 dark:text-slate-200">${cls.startTime} - ${cls.endTime}</div>
                    </div>
                  </div>
                `).join('')}
              </div>
            ` : `
              <div class="text-center py-8 text-slate-400">
                <i data-lucide="coffee" class="w-10 h-10 mx-auto mb-2 text-slate-300 dark:text-slate-600"></i>
                <p class="text-sm font-medium">No classes scheduled for today! Enjoy your free time.</p>
              </div>
            `}
          </div>

          <!-- Pending Assignments Widget -->
          <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <i data-lucide="check-square" class="w-5 h-5"></i>
                </div>
                <div>
                  <h2 class="text-lg font-bold text-slate-900 dark:text-white">Upcoming Assignments</h2>
                  <p class="text-xs text-slate-500">${pendingAssignments.length} pending submissions</p>
                </div>
              </div>
              <a href="#assignments" class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">
                <span>View All</span>
                <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
              </a>
            </div>

            ${pendingAssignments.length > 0 ? `
              <div class="space-y-3">
                ${pendingAssignments.slice(0, 4).map(asg => {
                  const overdue = isOverdue(asg.deadline, asg.status);
                  const relTime = getRelativeTime(asg.deadline, asg.status);
                  const priorityColors = {
                    Urgent: 'bg-red-50 text-red-700 dark:bg-red-950/60 dark:text-red-400 border-red-200/60 dark:border-red-900',
                    High: 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border-amber-200/60 dark:border-amber-900',
                    Medium: 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400 border-blue-200/60 dark:border-blue-900',
                    Low: 'bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  };

                  return `
                    <div class="p-3.5 rounded-xl border ${overdue ? 'border-red-300 dark:border-red-900/60 bg-red-50/30 dark:bg-red-950/20' : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30'} flex items-start gap-3 hover:border-indigo-400 transition-colors">
                      <button data-task-id="${asg.id}" class="task-checkbox-btn mt-0.5 w-5 h-5 rounded-md border-2 border-slate-300 dark:border-slate-600 hover:border-indigo-600 flex items-center justify-center shrink-0 transition-colors" title="Mark as completed">
                        <i data-lucide="check" class="w-3 h-3 text-transparent hover:text-indigo-600"></i>
                      </button>

                      <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                          <h4 class="text-sm font-bold text-slate-900 dark:text-white truncate">${escapeHtml(asg.title)}</h4>
                          <span class="text-[10px] font-bold px-2 py-0.5 rounded-full border ${priorityColors[asg.priority] || priorityColors.Medium}">
                            ${asg.priority}
                          </span>
                        </div>
                        <div class="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1">
                          <span>${escapeHtml(asg.subject)}</span>
                          <span>•</span>
                          <span class="${overdue ? 'text-red-600 dark:text-red-400 font-bold' : ''}">
                            ${overdue ? '⚠️ ' : '📅 '}${relTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            ` : `
              <div class="text-center py-8 text-slate-400">
                <i data-lucide="sparkles" class="w-10 h-10 mx-auto mb-2 text-emerald-400"></i>
                <p class="text-sm font-medium text-slate-600 dark:text-slate-300">All caught up! No pending assignments.</p>
              </div>
            `}
          </div>

        </div>

        <!-- Right Column: Notifications & Upcoming Events & Quick Links (1 span) -->
        <div class="space-y-6">

          <!-- Recent Notifications Widget -->
          <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <i data-lucide="bell" class="w-4 h-4"></i>
                </div>
                <h3 class="text-base font-bold text-slate-900 dark:text-white">Recent Alerts</h3>
              </div>
              <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                ${notifications.filter(n => !n.read).length} new
              </span>
            </div>

            <div class="space-y-3">
              ${notifications.slice(0, 3).map(notif => {
                const borderClass = notif.type === 'warning' ? 'border-l-4 border-l-red-500' :
                                    notif.type === 'urgent' ? 'border-l-4 border-l-amber-500' :
                                    notif.type === 'success' ? 'border-l-4 border-l-emerald-500' : 'border-l-4 border-l-indigo-500';
                return `
                  <a href="${notif.link || '#'}" class="block p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 ${borderClass} hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-xs font-bold text-slate-900 dark:text-white">${escapeHtml(notif.title)}</span>
                      <span class="text-[10px] text-slate-400">${notif.time}</span>
                    </div>
                    <p class="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">${escapeHtml(notif.message)}</p>
                  </a>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Upcoming Campus Events Snapshot -->
          <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-xl bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                  <i data-lucide="sparkles" class="w-4 h-4"></i>
                </div>
                <h3 class="text-base font-bold text-slate-900 dark:text-white">Campus Highlights</h3>
              </div>
              <a href="#events" class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">See All</a>
            </div>

            <div class="space-y-3.5">
              ${events.slice(0, 2).map(ev => `
                <div class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 group">
                  <div class="h-24 w-full relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img src="${ev.image}" alt="${escapeHtml(ev.title)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                    <div class="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold">
                      ${ev.category}
                    </div>
                  </div>
                  <div class="p-3 bg-white dark:bg-slate-900">
                    <h4 class="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">${escapeHtml(ev.title)}</h4>
                    <div class="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                      <i data-lucide="calendar" class="w-3 h-3 text-rose-500"></i>
                      <span>${formatDate(ev.date)}</span>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Weekly Study Target Box -->
          <div class="p-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-indigo-100 dark:border-indigo-900/50">
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-800 dark:text-indigo-300">Study Sprint</h4>
              <span class="text-xs font-black text-indigo-600 dark:text-indigo-400">${studyHours} / 15 hrs</span>
            </div>
            <div class="w-full bg-indigo-200/60 dark:bg-indigo-950 rounded-full h-2 overflow-hidden mb-3">
              <div class="bg-indigo-600 h-2 rounded-full" style="width: ${Math.min(100, (parseFloat(studyHours) / 15) * 100)}%"></div>
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-3">Goal: Log at least 15 hours of focused deep study per week.</p>
            <a href="#study" class="block w-full py-2 text-center rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors">
              Open Pomodoro Timer
            </a>
          </div>

        </div>

      </div>

    </div>
  `;

  // Attach interactive checkbox listeners to complete assignments
  container.querySelectorAll('.task-checkbox-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const taskId = btn.dataset.taskId;
      const status = store.toggleAssignmentStatus(taskId);
      if (status === 'Completed') {
        triggerConfetti();
        showToast('Assignment marked as completed! 🎉', 'success');
      }
      renderDashboard(container);
    });
  });

  // Reinitialize icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
}
