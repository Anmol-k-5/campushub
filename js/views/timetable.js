// CampusHub Class Timetable View
import { store } from '../store.js';
import { escapeHtml, getCurrentDayName, showToast } from '../utils.js';

let selectedDay = getCurrentDayName();
let viewMode = 'day'; // 'day' or 'week'

export function renderTimetable(container) {
  const timetable = store.getTimetable();
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Current time detection
  const now = new Date();
  const currentDayActual = daysOfWeek[now.getDay() - 1] || 'Monday';
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  function isCurrentClass(cls) {
    if (cls.day.toLowerCase() !== currentDayActual.toLowerCase()) return false;
    const [sH, sM] = cls.startTime.split(':').map(Number);
    const [eH, eM] = cls.endTime.split(':').map(Number);
    return currentMinutes >= (sH * 60 + sM) && currentMinutes <= (eH * 60 + eM);
  }

  function isUpcomingClass(cls) {
    if (cls.day.toLowerCase() !== currentDayActual.toLowerCase()) return false;
    const [sH, sM] = cls.startTime.split(':').map(Number);
    return currentMinutes < (sH * 60 + sM);
  }

  const dayClasses = timetable
    .filter(c => c.day.toLowerCase() === selectedDay.toLowerCase())
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  container.innerHTML = `
    <div class="space-y-6">

      <!-- Top Header & Actions -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Class Timetable</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage your weekly lectures, lab sessions, and classroom venues.</p>
        </div>

        <div class="flex items-center gap-3">
          <!-- View toggle: Day vs Week -->
          <div class="inline-flex rounded-xl p-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold">
            <button id="view-mode-day" class="px-3 py-1.5 rounded-lg transition-all ${viewMode === 'day' ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'}">
              Day View
            </button>
            <button id="view-mode-week" class="px-3 py-1.5 rounded-lg transition-all ${viewMode === 'week' ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'}">
              Full Week
            </button>
          </div>

          <button id="btn-add-class" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-md shadow-indigo-600/20 transition-all">
            <i data-lucide="plus" class="w-4 h-4"></i>
            <span>Add Class</span>
          </button>
        </div>
      </div>

      <!-- Day Navigation Tabs (in Day Mode) -->
      ${viewMode === 'day' ? `
        <div class="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          ${daysOfWeek.map(day => {
            const isSelected = day.toLowerCase() === selectedDay.toLowerCase();
            const isToday = day.toLowerCase() === currentDayActual.toLowerCase();
            const count = timetable.filter(c => c.day.toLowerCase() === day.toLowerCase()).length;

            return `
              <button data-day="${day}" class="day-tab-btn flex-1 min-w-[110px] p-3 rounded-2xl border text-left transition-all ${
                isSelected
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-600/25'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-indigo-400'
              }">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold uppercase tracking-wider ${isSelected ? 'text-indigo-100' : 'text-slate-400'}">
                    ${day.slice(0, 3)}
                  </span>
                  ${isToday ? `<span class="w-2 h-2 rounded-full ${isSelected ? 'bg-white' : 'bg-emerald-500'}"></span>` : ''}
                </div>
                <div class="text-sm font-black mt-0.5 truncate">${day}</div>
                <div class="text-[11px] mt-1 ${isSelected ? 'text-indigo-200' : 'text-slate-500'}">
                  ${count} ${count === 1 ? 'class' : 'classes'}
                </div>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Day Schedule Content -->
        <div class="space-y-4">
          ${dayClasses.length > 0 ? `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${dayClasses.map(cls => {
                const current = isCurrentClass(cls);
                const upcoming = isUpcomingClass(cls);

                return `
                  <div class="relative p-5 rounded-2xl bg-white dark:bg-slate-900 border ${
                    current
                      ? 'border-indigo-500 ring-2 ring-indigo-500/20 shadow-md shadow-indigo-500/10'
                      : 'border-slate-200/80 dark:border-slate-800'
                  } shadow-sm card-hover-lift group">

                    ${current ? `
                      <div class="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-[11px] font-bold">
                        <span class="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
                        Happening Now
                      </div>
                    ` : upcoming ? `
                      <div class="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[11px] font-semibold">
                        Upcoming
                      </div>
                    ` : ''}

                    <div class="flex items-start gap-4">
                      <div class="w-3 h-14 rounded-full shrink-0" style="background-color: ${cls.color || '#6366f1'}"></div>
                      
                      <div class="flex-1 min-w-0 pr-16">
                        <h3 class="text-base font-bold text-slate-900 dark:text-white truncate">${escapeHtml(cls.subject)}</h3>
                        
                        <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1">
                          <i data-lucide="user" class="w-3.5 h-3.5 text-slate-400"></i>
                          <span>${escapeHtml(cls.professor)}</span>
                        </div>

                        <div class="flex items-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-300 mt-2">
                          <span class="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400">
                            <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
                            ${escapeHtml(cls.room)}
                          </span>
                          <span class="inline-flex items-center gap-1">
                            <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                            ${cls.startTime} - ${cls.endTime}
                          </span>
                        </div>
                      </div>
                    </div>

                    <!-- Actions -->
                    <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-end gap-2 opacity-90 group-hover:opacity-100">
                      <button data-edit-id="${cls.id}" class="edit-class-btn p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" title="Edit Class">
                        <i data-lucide="edit-3" class="w-4 h-4"></i>
                      </button>
                      <button data-delete-id="${cls.id}" class="delete-class-btn p-1.5 rounded-lg text-slate-500 hover:text-red-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" title="Delete Class">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                      </button>
                    </div>

                  </div>
                `;
              }).join('')}
            </div>
          ` : `
            <div class="p-12 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <i data-lucide="calendar-x" class="w-12 h-12 mx-auto text-slate-300 dark:text-slate-600 mb-3"></i>
              <h3 class="text-base font-bold text-slate-900 dark:text-white">No classes on ${selectedDay}</h3>
              <p class="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-4">You have no scheduled academic sessions on this day.</p>
              <button class="btn-quick-add px-4 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
                + Add Class to ${selectedDay}
              </button>
            </div>
          `}
        </div>
      ` : `
        <!-- Full Week Matrix Mode -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${daysOfWeek.map(day => {
            const list = timetable
              .filter(c => c.day.toLowerCase() === day.toLowerCase())
              .sort((a, b) => a.startTime.localeCompare(b.startTime));

            return `
              <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-3">
                  <span class="font-black text-slate-900 dark:text-white text-base">${day}</span>
                  <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    ${list.length} classes
                  </span>
                </div>

                <div class="space-y-3 flex-1">
                  ${list.length > 0 ? list.map(c => `
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border-l-4" style="border-left-color: ${c.color || '#6366f1'}">
                      <div class="text-xs font-bold text-slate-900 dark:text-white truncate">${escapeHtml(c.subject)}</div>
                      <div class="text-[11px] text-slate-500 mt-0.5">${c.startTime} - ${c.endTime} • ${escapeHtml(c.room)}</div>
                      <div class="text-[11px] text-slate-400 truncate">${escapeHtml(c.professor)}</div>
                    </div>
                  `).join('') : `
                    <div class="text-xs text-slate-400 py-6 text-center italic">Free Day</div>
                  `}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `}

      <!-- Modal Container for Add / Edit Class -->
      <div id="class-modal" class="fixed inset-0 z-50 hidden bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 modal-enter">
          <div class="flex items-center justify-between mb-4">
            <h3 id="class-modal-title" class="text-lg font-extrabold text-slate-900 dark:text-white">Add New Class</h3>
            <button id="class-modal-close" class="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <form id="class-form" class="space-y-4">
            <input type="hidden" id="class-edit-id" value="">

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Subject Name *</label>
              <input type="text" id="class-subject" required placeholder="e.g. Operating Systems" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Day of Week *</label>
                <select id="class-day" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                  ${daysOfWeek.map(d => `<option value="${d}">${d}</option>`).join('')}
                </select>
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Room / Hall *</label>
                <input type="text" id="class-room" required placeholder="e.g. Hall 302" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Professor / Instructor</label>
              <input type="text" id="class-professor" placeholder="e.g. Dr. Sarah Vance" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Start Time *</label>
                <input type="time" id="class-start-time" required value="09:00" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">End Time *</label>
                <input type="time" id="class-end-time" required value="10:00" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Color Tag</label>
              <div class="flex items-center gap-3">
                ${['#6366f1', '#06b6d4', '#8b5cf6', '#10b981', '#f59e0b', '#ec4899', '#3b82f6'].map(col => `
                  <label class="cursor-pointer">
                    <input type="radio" name="class-color" value="${col}" class="sr-only peer" ${col === '#6366f1' ? 'checked' : ''}>
                    <div class="w-7 h-7 rounded-full peer-checked:ring-4 peer-checked:ring-indigo-300 dark:peer-checked:ring-indigo-700 transition-all" style="background-color: ${col}"></div>
                  </label>
                `).join('')}
              </div>
            </div>

            <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button type="button" id="class-modal-cancel" class="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-semibold">
                Cancel
              </button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold shadow-md shadow-indigo-600/25">
                Save Class
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  `;

  // Attach Day tab listeners
  container.querySelectorAll('.day-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedDay = btn.dataset.day;
      renderTimetable(container);
    });
  });

  // Attach view mode buttons
  const btnDay = container.querySelector('#view-mode-day');
  const btnWeek = container.querySelector('#view-mode-week');
  if (btnDay) btnDay.onclick = () => { viewMode = 'day'; renderTimetable(container); };
  if (btnWeek) btnWeek.onclick = () => { viewMode = 'week'; renderTimetable(container); };

  // Modal logic
  const modal = container.querySelector('#class-modal');
  const modalTitle = container.querySelector('#class-modal-title');
  const classForm = container.querySelector('#class-form');
  const closeBtn = container.querySelector('#class-modal-close');
  const cancelBtn = container.querySelector('#class-modal-cancel');

  function openAddModal(defaultDay = selectedDay) {
    modalTitle.textContent = 'Add New Class';
    classForm.reset();
    container.querySelector('#class-edit-id').value = '';
    container.querySelector('#class-day').value = defaultDay;
    modal.classList.remove('hidden');
  }

  function closeModal() {
    modal.classList.add('hidden');
  }

  const btnAdd = container.querySelector('#btn-add-class');
  if (btnAdd) btnAdd.onclick = () => openAddModal();

  const btnQuickAdd = container.querySelector('.btn-quick-add');
  if (btnQuickAdd) btnQuickAdd.onclick = () => openAddModal(selectedDay);

  if (closeBtn) closeBtn.onclick = closeModal;
  if (cancelBtn) cancelBtn.onclick = closeModal;

  // Edit class
  container.querySelectorAll('.edit-class-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.editId;
      const cls = timetable.find(c => c.id === id);
      if (cls) {
        modalTitle.textContent = 'Edit Class';
        container.querySelector('#class-edit-id').value = cls.id;
        container.querySelector('#class-subject').value = cls.subject;
        container.querySelector('#class-day').value = cls.day;
        container.querySelector('#class-room').value = cls.room;
        container.querySelector('#class-professor').value = cls.professor || '';
        container.querySelector('#class-start-time').value = cls.startTime;
        container.querySelector('#class-end-time').value = cls.endTime;
        const colorRadio = container.querySelector(`input[name="class-color"][value="${cls.color}"]`);
        if (colorRadio) colorRadio.checked = true;
        modal.classList.remove('hidden');
      }
    });
  });

  // Delete class
  container.querySelectorAll('.delete-class-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.deleteId;
      if (confirm('Are you sure you want to delete this class from your timetable?')) {
        store.deleteClass(id);
        showToast('Class removed from schedule', 'info');
        renderTimetable(container);
      }
    });
  });

  // Handle Form Submission
  if (classForm) {
    classForm.onsubmit = (e) => {
      e.preventDefault();
      const editId = container.querySelector('#class-edit-id').value;
      const selectedColor = container.querySelector('input[name="class-color"]:checked')?.value || '#6366f1';

      const classData = {
        subject: container.querySelector('#class-subject').value.trim(),
        day: container.querySelector('#class-day').value,
        room: container.querySelector('#class-room').value.trim(),
        professor: container.querySelector('#class-professor').value.trim() || 'Staff Faculty',
        startTime: container.querySelector('#class-start-time').value,
        endTime: container.querySelector('#class-end-time').value,
        color: selectedColor
      };

      if (editId) {
        store.updateClass(editId, classData);
        showToast('Class updated successfully!', 'success');
      } else {
        store.addClass(classData);
        showToast('New class added to schedule!', 'success');
      }

      closeModal();
      renderTimetable(container);
    };
  }

  if (window.lucide) window.lucide.createIcons();
}
