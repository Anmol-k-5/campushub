// CampusHub Attendance Tracker & Smart Bunk Advisor View
import { store } from '../store.js';
import { escapeHtml, calculateAttendanceStatus, showToast, playChime } from '../utils.js';

export function renderAttendance(container) {
  const attendance = store.getAttendance();

  let aggregateHeld = 0;
  let aggregateAttended = 0;
  let warningCount = 0;

  attendance.forEach(sub => {
    aggregateHeld += (sub.totalClasses || 0);
    aggregateAttended += (sub.attendedClasses || 0);
    const stat = calculateAttendanceStatus(sub.attendedClasses, sub.totalClasses, sub.targetPercentage);
    if (stat.isBelowTarget) warningCount++;
  });

  const overallStat = calculateAttendanceStatus(aggregateAttended, aggregateHeld, 75);

  container.innerHTML = `
    <div class="space-y-6">

      <!-- Header & Top Action -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Attendance Tracker</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Smart Bunk Advisor & 75% Eligibility Monitor.</p>
        </div>

        <button id="btn-add-subject" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-md shadow-emerald-600/20 transition-all">
          <i data-lucide="plus" class="w-4 h-4"></i>
          <span>Add Subject</span>
        </button>
      </div>

      <!-- Warning Alert Banner if any subject is < 75% -->
      ${warningCount > 0 ? `
        <div class="p-4 sm:p-5 rounded-2xl bg-red-50 dark:bg-red-950/40 border-2 border-red-300 dark:border-red-900 text-red-900 dark:text-red-200 flex items-start gap-4">
          <div class="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/60 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0">
            <i data-lucide="alert-triangle" class="w-6 h-6"></i>
          </div>
          <div class="flex-1">
            <h3 class="text-base font-bold">Attendance Warning Alert!</h3>
            <p class="text-sm text-red-800 dark:text-red-300 mt-0.5">
              You have <strong>${warningCount} subject${warningCount > 1 ? 's' : ''}</strong> currently falling below the required 75% attendance threshold. You risk being debarred from midterms/finals unless you attend upcoming classes.
            </p>
          </div>
        </div>
      ` : ''}

      <!-- Overall Attendance Summary Hero -->
      <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          <!-- Overall Circle Metric -->
          <div class="flex items-center gap-5">
            <div class="relative w-24 h-24 shrink-0 flex items-center justify-center">
              <svg class="w-24 h-24 transform -rotate-90">
                <circle cx="48" cy="48" r="40" stroke="currentColor" stroke-width="8" class="text-slate-100 dark:text-slate-800" fill="transparent" />
                <circle cx="48" cy="48" r="40" stroke="currentColor" stroke-width="8" class="${overallStat.isBelowTarget ? 'text-red-500' : 'text-emerald-500'} timer-ring-circle" fill="transparent" stroke-dasharray="251.2" stroke-dashoffset="${251.2 - (251.2 * overallStat.percentage) / 100}" stroke-linecap="round" />
              </svg>
              <div class="absolute text-center">
                <span class="text-xl font-black text-slate-900 dark:text-white">${overallStat.formattedPercentage}%</span>
              </div>
            </div>
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Overall Attendance</span>
              <h2 class="text-lg font-black text-slate-900 dark:text-white mt-0.5">
                ${overallStat.isBelowTarget ? '⚠️ Action Required' : '🎉 In the Safe Zone'}
              </h2>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                ${aggregateAttended} attended out of ${aggregateHeld} total held
              </p>
            </div>
          </div>

          <!-- Overall Safe Bunks -->
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            <div class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Bunk Margin</div>
            <div class="text-2xl font-black text-slate-900 dark:text-white mt-1">
              ${overallStat.isBelowTarget ? `<span class="text-red-600 dark:text-red-400">0 Classes</span>` : `${overallStat.bunkAllowance} Classes`}
            </div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
              ${overallStat.statusMessage}
            </p>
          </div>

          <!-- Subjects Status Count -->
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            <div class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Tracked Subjects</div>
            <div class="text-2xl font-black text-slate-900 dark:text-white mt-1">
              ${attendance.length} Subjects
            </div>
            <div class="flex items-center gap-3 text-xs mt-1">
              <span class="text-emerald-600 dark:text-emerald-400 font-semibold">✓ ${attendance.length - warningCount} Safe</span>
              <span class="text-red-600 dark:text-red-400 font-semibold">⚠️ ${warningCount} Critical</span>
            </div>
          </div>

        </div>
      </div>

      <!-- Subject Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${attendance.map(sub => {
          const stat = calculateAttendanceStatus(sub.attendedClasses, sub.totalClasses, sub.targetPercentage);
          const colorStyles = {
            emerald: {
              badge: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
              bar: 'bg-emerald-500',
              border: 'border-slate-200/80 dark:border-slate-800'
            },
            amber: {
              badge: 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800',
              bar: 'bg-amber-500',
              border: 'border-amber-300 dark:border-amber-900'
            },
            red: {
              badge: 'bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-300 border-red-300 dark:border-red-900',
              bar: 'bg-red-500',
              border: 'border-red-400 dark:border-red-900 ring-2 ring-red-500/10'
            }
          };
          const style = colorStyles[stat.statusColor] || colorStyles.emerald;

          return `
            <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border ${style.border} shadow-sm card-hover-lift flex flex-col justify-between">
              
              <div>
                <!-- Top Row: Subject & Percentage -->
                <div class="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">${escapeHtml(sub.code)}</span>
                    <h3 class="text-base font-extrabold text-slate-900 dark:text-white line-clamp-1">${escapeHtml(sub.subject)}</h3>
                  </div>
                  <span class="text-xl font-black ${stat.isBelowTarget ? 'text-red-600 dark:text-red-400' : 'text-slate-900 dark:text-white'}">
                    ${stat.formattedPercentage}%
                  </span>
                </div>

                <!-- Progress Bar -->
                <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden my-3">
                  <div class="h-2.5 rounded-full ${style.bar} transition-all duration-500" style="width: ${Math.min(100, stat.percentage)}%"></div>
                </div>

                <!-- Count Info -->
                <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span>Attended: <strong class="text-slate-800 dark:text-slate-200">${sub.attendedClasses}</strong> / ${sub.totalClasses}</span>
                  <span>Target: <strong>${sub.targetPercentage || 75}%</strong></span>
                </div>

                <!-- Smart Advisor Box -->
                <div class="p-3 rounded-xl border text-xs font-medium ${style.badge} mb-4">
                  ${stat.statusMessage}
                </div>
              </div>

              <!-- Action Buttons -->
              <div>
                <div class="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <button data-subject-id="${sub.id}" data-action="present" class="btn-mark-att inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900 text-emerald-700 dark:text-emerald-300 font-bold text-xs transition-colors">
                    <i data-lucide="check" class="w-4 h-4"></i>
                    <span>+ Present</span>
                  </button>

                  <button data-subject-id="${sub.id}" data-action="absent" class="btn-mark-att inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-red-50 hover:bg-red-100 dark:bg-red-950/60 dark:hover:bg-red-900 text-red-700 dark:text-red-300 font-bold text-xs transition-colors">
                    <i data-lucide="x" class="w-4 h-4"></i>
                    <span>+ Absent</span>
                  </button>
                </div>

                <div class="flex items-center justify-end gap-3 mt-2 text-xs text-slate-400">
                  <button data-edit-id="${sub.id}" class="edit-subject-btn hover:text-indigo-600 transition-colors">Edit</button>
                  <span>•</span>
                  <button data-delete-id="${sub.id}" class="delete-subject-btn hover:text-red-600 transition-colors">Delete</button>
                </div>
              </div>

            </div>
          `;
        }).join('')}
      </div>

      <!-- Add/Edit Subject Modal -->
      <div id="subject-modal" class="fixed inset-0 z-50 hidden bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 modal-enter">
          <div class="flex items-center justify-between mb-4">
            <h3 id="subject-modal-title" class="text-lg font-extrabold text-slate-900 dark:text-white">Add Subject</h3>
            <button id="subject-modal-close" class="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <form id="subject-form" class="space-y-4">
            <input type="hidden" id="subject-edit-id" value="">

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Subject Name *</label>
              <input type="text" id="sub-name" required placeholder="e.g. Distributed Operating Systems" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none">
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Course Code</label>
                <input type="text" id="sub-code" placeholder="e.g. CS401" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Target % *</label>
                <input type="number" id="sub-target" min="50" max="100" value="75" required class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none">
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Total Classes Held *</label>
                <input type="number" id="sub-total" min="0" value="0" required class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Classes Attended *</label>
                <input type="number" id="sub-attended" min="0" value="0" required class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none">
              </div>
            </div>

            <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button type="button" id="subject-modal-cancel" class="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-semibold">
                Cancel
              </button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md shadow-emerald-600/25">
                Save Subject
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  `;

  // Mark Present / Absent buttons
  container.querySelectorAll('.btn-mark-att').forEach(btn => {
    btn.addEventListener('click', () => {
      const subjectId = btn.dataset.subjectId;
      const action = btn.dataset.action; // 'present' or 'absent'
      store.markAttendance(subjectId, action);
      if (action === 'present') {
        playChime('success');
        showToast('Marked Present! Attendance updated.', 'success');
      } else {
        playChime('warning');
        showToast('Marked Absent. Attendance updated.', 'warning');
      }
      renderAttendance(container);
    });
  });

  // Modal setup
  const modal = container.querySelector('#subject-modal');
  const modalTitle = container.querySelector('#subject-modal-title');
  const form = container.querySelector('#subject-form');
  const closeBtn = container.querySelector('#subject-modal-close');
  const cancelBtn = container.querySelector('#subject-modal-cancel');

  function openAddModal() {
    modalTitle.textContent = 'Add Subject';
    form.reset();
    container.querySelector('#subject-edit-id').value = '';
    modal.classList.remove('hidden');
  }

  function closeModal() {
    modal.classList.add('hidden');
  }

  const btnAdd = container.querySelector('#btn-add-subject');
  if (btnAdd) btnAdd.onclick = openAddModal;
  if (closeBtn) closeBtn.onclick = closeModal;
  if (cancelBtn) cancelBtn.onclick = closeModal;

  // Edit Subject
  container.querySelectorAll('.edit-subject-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.editId;
      const sub = attendance.find(s => s.id === id);
      if (sub) {
        modalTitle.textContent = 'Edit Subject Attendance';
        container.querySelector('#subject-edit-id').value = sub.id;
        container.querySelector('#sub-name').value = sub.subject;
        container.querySelector('#sub-code').value = sub.code || '';
        container.querySelector('#sub-target').value = sub.targetPercentage || 75;
        container.querySelector('#sub-total').value = sub.totalClasses;
        container.querySelector('#sub-attended').value = sub.attendedClasses;
        modal.classList.remove('hidden');
      }
    });
  });

  // Delete Subject
  container.querySelectorAll('.delete-subject-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.deleteId;
      if (confirm('Delete this subject from your attendance tracker?')) {
        store.deleteSubject(id);
        showToast('Subject deleted', 'info');
        renderAttendance(container);
      }
    });
  });

  // Form Submit
  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const editId = container.querySelector('#subject-edit-id').value;
      const data = {
        subject: container.querySelector('#sub-name').value.trim(),
        code: container.querySelector('#sub-code').value.trim(),
        targetPercentage: parseInt(container.querySelector('#sub-target').value, 10) || 75,
        totalClasses: parseInt(container.querySelector('#sub-total').value, 10) || 0,
        attendedClasses: parseInt(container.querySelector('#sub-attended').value, 10) || 0
      };

      if (data.attendedClasses > data.totalClasses) {
        alert('Attended classes cannot exceed total classes held!');
        return;
      }

      if (editId) {
        store.updateSubject(editId, data);
        showToast('Subject updated!', 'success');
      } else {
        store.addSubject(data);
        showToast('New subject added to attendance tracker!', 'success');
      }

      closeModal();
      renderAttendance(container);
    };
  }

  if (window.lucide) window.lucide.createIcons();
}
