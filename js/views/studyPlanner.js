// CampusHub Study Planner & Pomodoro Timer View
import { store } from '../store.js';
import { escapeHtml, formatDate, playChime, showToast, triggerConfetti } from '../utils.js';

// Pomodoro Timer State (persisted across renders)
let pomodoroMode = 'focus'; // 'focus', 'shortBreak', 'longBreak'
let pomodoroSecondsLeft = 25 * 60;
let pomodoroIsRunning = false;
let pomodoroInterval = null;
let pomodoroCompletedCycles = 0;

export function renderStudyPlanner(container) {
  const studySessions = store.getStudySessions();
  const timetable = store.getTimetable();

  // Extract distinct subjects
  const subjectSet = new Set(['Operating Systems', 'Database Systems', 'Algorithms', 'Computer Networks', 'Machine Learning']);
  timetable.forEach(t => { if (t.subject) subjectSet.add(t.subject); });
  const subjects = Array.from(subjectSet);

  // Group study stats
  const totalMinutes = studySessions
    .filter(s => s.status === 'Completed')
    .reduce((acc, s) => acc + (s.durationMinutes || 0), 0);

  const totalHours = (totalMinutes / 60).toFixed(1);

  // Subject breakdown for chart
  const subjectTotals = {};
  studySessions.forEach(s => {
    if (s.status === 'Completed') {
      subjectTotals[s.subject] = (subjectTotals[s.subject] || 0) + s.durationMinutes;
    }
  });

  const chartLabels = Object.keys(subjectTotals);
  const chartData = Object.values(subjectTotals);

  function formatTimerDisplay(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  const totalModeDuration = pomodoroMode === 'focus' ? 25 * 60 : pomodoroMode === 'shortBreak' ? 5 * 60 : 15 * 60;
  const progressPercent = ((totalModeDuration - pomodoroSecondsLeft) / totalModeDuration) * 100;

  container.innerHTML = `
    <div class="space-y-6">

      <!-- Header & Top Action -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Study Planner & Pomodoro</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Boost focus with timed intervals, manage study schedule, and track deep work hours.</p>
        </div>

        <button id="btn-add-session" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold shadow-md shadow-purple-600/20 transition-all">
          <i data-lucide="plus" class="w-4 h-4"></i>
          <span>Schedule Study Session</span>
        </button>
      </div>

      <!-- Top Row: Pomodoro Hero Widget (Interactive) & Quick Stats -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <!-- Pomodoro Interactive Widget (2 cols) -->
        <div class="lg:col-span-2 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white shadow-xl relative overflow-hidden flex flex-col items-center text-center">
          
          <!-- Mode Tabs -->
          <div class="inline-flex p-1 rounded-2xl bg-white/10 backdrop-blur-md mb-8 text-xs sm:text-sm font-semibold">
            <button id="pomo-mode-focus" class="px-4 py-2 rounded-xl transition-all ${pomodoroMode === 'focus' ? 'bg-white text-indigo-900 shadow-md font-bold' : 'text-white/80 hover:text-white'}">
              Focus (25m)
            </button>
            <button id="pomo-mode-short" class="px-4 py-2 rounded-xl transition-all ${pomodoroMode === 'shortBreak' ? 'bg-white text-indigo-900 shadow-md font-bold' : 'text-white/80 hover:text-white'}">
              Short Break (5m)
            </button>
            <button id="pomo-mode-long" class="px-4 py-2 rounded-xl transition-all ${pomodoroMode === 'longBreak' ? 'bg-white text-indigo-900 shadow-md font-bold' : 'text-white/80 hover:text-white'}">
              Long Break (15m)
            </button>
          </div>

          <!-- Circular Clock Graphic -->
          <div class="relative w-56 h-56 flex items-center justify-center mb-6">
            <svg class="w-56 h-56 transform -rotate-90">
              <circle cx="112" cy="112" r="96" stroke="rgba(255, 255, 255, 0.15)" stroke-width="8" fill="transparent" />
              <circle id="pomo-progress-circle" cx="112" cy="112" r="96" stroke="#ec4899" stroke-width="8" class="timer-ring-circle" fill="transparent" stroke-dasharray="603" stroke-dashoffset="${603 - (603 * progressPercent) / 100}" stroke-linecap="round" />
            </svg>
            <div class="absolute text-center">
              <div id="pomo-time-display" class="text-5xl sm:text-6xl font-black tracking-tight text-white font-mono">
                ${formatTimerDisplay(pomodoroSecondsLeft)}
              </div>
              <div class="text-xs font-semibold text-purple-200 mt-1 uppercase tracking-wider">
                ${pomodoroMode === 'focus' ? '🎯 Stay Focused' : '☕ Relax & Recharge'}
              </div>
            </div>
          </div>

          <!-- Controller Buttons -->
          <div class="flex items-center gap-4">
            <button id="pomo-toggle-btn" class="px-8 py-3.5 rounded-2xl ${pomodoroIsRunning ? 'bg-amber-500 hover:bg-amber-600' : 'bg-pink-500 hover:bg-pink-600'} text-white font-bold text-base shadow-xl shadow-pink-500/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
              <i data-lucide="${pomodoroIsRunning ? 'pause' : 'play'}" class="w-5 h-5"></i>
              <span>${pomodoroIsRunning ? 'Pause' : 'Start Focus'}</span>
            </button>

            <button id="pomo-reset-btn" class="p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm" title="Reset timer">
              <i data-lucide="rotate-ccw" class="w-5 h-5"></i>
            </button>
          </div>

          <!-- Cycle Tracker Bar -->
          <div class="mt-6 flex items-center gap-2 text-xs text-purple-200">
            <span>Completed Today:</span>
            <div class="flex items-center gap-1.5">
              ${[1, 2, 3, 4].map(idx => `
                <div class="w-3 h-3 rounded-full ${idx <= pomodoroCompletedCycles ? 'bg-pink-400 shadow-sm shadow-pink-400' : 'bg-white/20'}"></div>
              `).join('')}
            </div>
            <span class="ml-1">(${pomodoroCompletedCycles} cycles)</span>
          </div>

        </div>

        <!-- Quick Study Stats & Chart (1 col) -->
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-base font-extrabold text-slate-900 dark:text-white">Weekly Focus Hours</h3>
              <span class="text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950 px-2 py-0.5 rounded-md">
                ${totalHours} hrs logged
              </span>
            </div>

            <!-- Subject Distribution Bar Breakdown -->
            <div class="space-y-3 mt-4">
              ${chartLabels.map(sub => {
                const mins = subjectTotals[sub];
                const pct = totalMinutes > 0 ? Math.round((mins / totalMinutes) * 100) : 0;
                return `
                  <div>
                    <div class="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      <span class="truncate pr-2">${escapeHtml(sub)}</span>
                      <span>${(mins / 60).toFixed(1)}h (${pct}%)</span>
                    </div>
                    <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div class="h-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" style="width: ${pct}%"></div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Quick Tip Box -->
          <div class="mt-6 p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/60 text-xs text-purple-900 dark:text-purple-200">
            <div class="font-bold mb-1 flex items-center gap-1.5">
              <i data-lucide="lightbulb" class="w-4 h-4 text-purple-600"></i>
              <span>Study Tip: 25-5 Technique</span>
            </div>
            <p class="text-purple-800 dark:text-purple-300 leading-relaxed">
              Eliminate distractions for 25 minutes. After 4 focus cycles, take a rejuvenating 15-minute walk.
            </p>
          </div>
        </div>

      </div>

      <!-- Study Schedule Log -->
      <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h2 class="text-lg font-bold text-slate-900 dark:text-white">Study Sessions & Schedule</h2>
            <p class="text-xs text-slate-500">Planned and completed academic study blocks</p>
          </div>
          <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">
            ${studySessions.length} sessions
          </span>
        </div>

        <div class="divide-y divide-slate-100 dark:divide-slate-800/80">
          ${studySessions.map(session => `
            <div class="py-3.5 flex items-center justify-between gap-4">
              <div class="flex items-center gap-3 min-w-0">
                <div class="w-8 h-8 rounded-xl ${session.status === 'Completed' ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400' : 'bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400'} flex items-center justify-center shrink-0">
                  <i data-lucide="${session.status === 'Completed' ? 'check' : 'book-open'}" class="w-4 h-4"></i>
                </div>
                <div class="min-w-0">
                  <div class="flex items-center gap-2">
                    <h4 class="text-sm font-bold text-slate-900 dark:text-white truncate">${escapeHtml(session.topic)}</h4>
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${session.status === 'Completed' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300'}">
                      ${session.status}
                    </span>
                  </div>
                  <div class="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    <span>${escapeHtml(session.subject)}</span>
                    <span>•</span>
                    <span>⏱️ ${session.durationMinutes} mins</span>
                    <span>•</span>
                    <span>📅 ${formatDate(session.date)}</span>
                  </div>
                </div>
              </div>

              <button data-delete-id="${session.id}" class="delete-session-btn p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" title="Delete session">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Add Study Session Modal -->
      <div id="session-modal" class="fixed inset-0 z-50 hidden bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 modal-enter">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-extrabold text-slate-900 dark:text-white">Schedule Study Session</h3>
            <button id="session-modal-close" class="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <form id="session-form" class="space-y-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Subject *</label>
              <select id="form-sess-subject" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none">
                ${subjects.map(s => `<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`).join('')}
              </select>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Topic / Study Objective *</label>
              <input type="text" id="form-sess-topic" required placeholder="e.g. Chapter 4 Virtual Memory & TLB" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none">
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Duration (Mins) *</label>
                <input type="number" id="form-sess-duration" min="10" max="240" step="5" value="45" required class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Date *</label>
                <input type="date" id="form-sess-date" required value="${new Date().toISOString().split('T')[0]}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none">
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Status</label>
              <select id="form-sess-status" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none">
                <option value="Planned">Planned</option>
                <option value="Completed">Completed (Log now)</option>
              </select>
            </div>

            <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button type="button" id="session-modal-cancel" class="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-semibold">
                Cancel
              </button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold shadow-md shadow-purple-600/25">
                Save Session
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  `;

  // Pomodoro interactive handling
  const pomoDisplay = container.querySelector('#pomo-time-display');
  const pomoCircle = container.querySelector('#pomo-progress-circle');
  const pomoToggleBtn = container.querySelector('#pomo-toggle-btn');
  const pomoResetBtn = container.querySelector('#pomo-reset-btn');

  function updateTimerUI() {
    if (pomoDisplay) pomoDisplay.textContent = formatTimerDisplay(pomodoroSecondsLeft);
    if (pomoCircle) {
      const modeDuration = pomodoroMode === 'focus' ? 25 * 60 : pomodoroMode === 'shortBreak' ? 5 * 60 : 15 * 60;
      const pct = ((modeDuration - pomodoroSecondsLeft) / modeDuration) * 100;
      pomoCircle.style.strokeDashoffset = `${603 - (603 * pct) / 100}`;
    }
  }

  function startTimer() {
    if (pomodoroInterval) clearInterval(pomodoroInterval);
    pomodoroIsRunning = true;
    if (pomoToggleBtn) {
      pomoToggleBtn.innerHTML = `<i data-lucide="pause" class="w-5 h-5"></i><span>Pause</span>`;
      pomoToggleBtn.className = pomoToggleBtn.className.replace('bg-pink-500', 'bg-amber-500').replace('hover:bg-pink-600', 'hover:bg-amber-600');
      if (window.lucide) window.lucide.createIcons();
    }

    pomodoroInterval = setInterval(() => {
      if (pomodoroSecondsLeft > 0) {
        pomodoroSecondsLeft--;
        updateTimerUI();
      } else {
        // Timer Finished!
        clearInterval(pomodoroInterval);
        pomodoroIsRunning = false;
        playChime('pomodoro');

        if (pomodoroMode === 'focus') {
          pomodoroCompletedCycles++;
          triggerConfetti();
          store.logPomodoroMinutes(25, 'Pomodoro Deep Focus');
          showToast('Pomodoro cycle complete! 25 mins logged. Take a break! ☕', 'success');
          pomodoroMode = 'shortBreak';
          pomodoroSecondsLeft = 5 * 60;
        } else {
          showToast('Break finished! Ready to focus again?', 'info');
          pomodoroMode = 'focus';
          pomodoroSecondsLeft = 25 * 60;
        }
        renderStudyPlanner(container);
      }
    }, 1000);
  }

  function pauseTimer() {
    clearInterval(pomodoroInterval);
    pomodoroIsRunning = false;
    if (pomoToggleBtn) {
      pomoToggleBtn.innerHTML = `<i data-lucide="play" class="w-5 h-5"></i><span>Start Focus</span>`;
      pomoToggleBtn.className = pomoToggleBtn.className.replace('bg-amber-500', 'bg-pink-500').replace('hover:bg-amber-600', 'hover:bg-pink-600');
      if (window.lucide) window.lucide.createIcons();
    }
  }

  if (pomoToggleBtn) {
    pomoToggleBtn.onclick = () => {
      if (pomodoroIsRunning) {
        pauseTimer();
      } else {
        startTimer();
      }
    };
  }

  if (pomoResetBtn) {
    pomoResetBtn.onclick = () => {
      pauseTimer();
      pomodoroSecondsLeft = pomodoroMode === 'focus' ? 25 * 60 : pomodoroMode === 'shortBreak' ? 5 * 60 : 15 * 60;
      updateTimerUI();
    };
  }

  // Mode buttons
  const btnFocus = container.querySelector('#pomo-mode-focus');
  const btnShort = container.querySelector('#pomo-mode-short');
  const btnLong = container.querySelector('#pomo-mode-long');

  if (btnFocus) {
    btnFocus.onclick = () => {
      pauseTimer();
      pomodoroMode = 'focus';
      pomodoroSecondsLeft = 25 * 60;
      renderStudyPlanner(container);
    };
  }
  if (btnShort) {
    btnShort.onclick = () => {
      pauseTimer();
      pomodoroMode = 'shortBreak';
      pomodoroSecondsLeft = 5 * 60;
      renderStudyPlanner(container);
    };
  }
  if (btnLong) {
    btnLong.onclick = () => {
      pauseTimer();
      pomodoroMode = 'longBreak';
      pomodoroSecondsLeft = 15 * 60;
      renderStudyPlanner(container);
    };
  }

  // Delete session
  container.querySelectorAll('.delete-session-btn').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.deleteId;
      store.deleteStudySession(id);
      showToast('Study session deleted', 'info');
      renderStudyPlanner(container);
    };
  });

  // Modal logic
  const modal = container.querySelector('#session-modal');
  const form = container.querySelector('#session-form');
  const closeBtn = container.querySelector('#session-modal-close');
  const cancelBtn = container.querySelector('#session-modal-cancel');
  const btnAdd = container.querySelector('#btn-add-session');

  if (btnAdd) btnAdd.onclick = () => modal.classList.remove('hidden');
  if (closeBtn) closeBtn.onclick = () => modal.classList.add('hidden');
  if (cancelBtn) cancelBtn.onclick = () => modal.classList.add('hidden');

  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const sessionData = {
        subject: container.querySelector('#form-sess-subject').value,
        topic: container.querySelector('#form-sess-topic').value.trim(),
        durationMinutes: parseInt(container.querySelector('#form-sess-duration').value, 10) || 30,
        date: container.querySelector('#form-sess-date').value,
        status: container.querySelector('#form-sess-status').value
      };

      store.addStudySession(sessionData);
      showToast('Study session scheduled!', 'success');
      modal.classList.add('hidden');
      renderStudyPlanner(container);
    };
  }

  if (window.lucide) window.lucide.createIcons();
}
