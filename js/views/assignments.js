// CampusHub Assignment & Task Manager View
import { store } from '../store.js';
import { escapeHtml, formatDateTime, isOverdue, getRelativeTime, triggerConfetti, showToast } from '../utils.js';

let filterStatus = 'All'; // 'All', 'Pending', 'Completed', 'Overdue'
let filterPriority = 'All'; // 'All', 'Urgent', 'High', 'Medium', 'Low'
let filterSubject = 'All';
let searchQuery = '';
let sortBy = 'deadline-asc'; // 'deadline-asc', 'priority-desc', 'title-asc'

export function renderAssignments(container) {
  const assignments = store.getAssignments();
  const timetable = store.getTimetable();

  // Extract distinct subjects
  const subjectSet = new Set();
  assignments.forEach(a => { if (a.subject) subjectSet.add(a.subject); });
  timetable.forEach(t => { if (t.subject) subjectSet.add(t.subject); });
  const subjectsList = Array.from(subjectSet).sort();

  // Filter assignments
  let filtered = assignments.filter(a => {
    const overdue = isOverdue(a.deadline, a.status);

    // Status filter
    if (filterStatus === 'Pending' && a.status === 'Completed') return false;
    if (filterStatus === 'Completed' && a.status !== 'Completed') return false;
    if (filterStatus === 'Overdue' && !overdue) return false;

    // Priority filter
    if (filterPriority !== 'All' && a.priority !== filterPriority) return false;

    // Subject filter
    if (filterSubject !== 'All' && a.subject !== filterSubject) return false;

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = (a.title || '').toLowerCase().includes(q);
      const matchSubject = (a.subject || '').toLowerCase().includes(q);
      const matchDesc = (a.description || '').toLowerCase().includes(q);
      if (!matchTitle && !matchSubject && !matchDesc) return false;
    }

    return true;
  });

  // Sorting
  const priorityWeight = { 'Urgent': 4, 'High': 3, 'Medium': 2, 'Low': 1 };
  filtered.sort((a, b) => {
    if (sortBy === 'deadline-asc') {
      return (new Date(a.deadline || 0)) - (new Date(b.deadline || 0));
    } else if (sortBy === 'priority-desc') {
      return (priorityWeight[b.priority] || 0) - (priorityWeight[a.priority] || 0);
    } else if (sortBy === 'title-asc') {
      return (a.title || '').localeCompare(b.title || '');
    }
    return 0;
  });

  const pendingCount = assignments.filter(a => a.status !== 'Completed').length;
  const overdueCount = assignments.filter(a => isOverdue(a.deadline, a.status)).length;
  const completedCount = assignments.filter(a => a.status === 'Completed').length;

  container.innerHTML = `
    <div class="space-y-6">

      <!-- Header & Top Action -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Assignments & Tasks</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Track course submissions, project milestones, and exam prep tasks.</p>
        </div>

        <button id="btn-add-assignment" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-md shadow-indigo-600/20 transition-all">
          <i data-lucide="plus" class="w-4 h-4"></i>
          <span>New Assignment</span>
        </button>
      </div>

      <!-- Quick Metrics Ribbon -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div class="text-xs font-semibold text-slate-400 uppercase">Total Tasks</div>
          <div class="text-2xl font-black text-slate-900 dark:text-white mt-1">${assignments.length}</div>
        </div>
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div class="text-xs font-semibold text-amber-500 uppercase">Pending</div>
          <div class="text-2xl font-black text-amber-600 dark:text-amber-400 mt-1">${pendingCount}</div>
        </div>
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div class="text-xs font-semibold text-red-500 uppercase">Overdue</div>
          <div class="text-2xl font-black text-red-600 dark:text-red-400 mt-1">${overdueCount}</div>
        </div>
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div class="text-xs font-semibold text-emerald-500 uppercase">Completed</div>
          <div class="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">${completedCount}</div>
        </div>
      </div>

      <!-- Filters & Search Toolbar -->
      <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
        
        <div class="flex flex-col md:flex-row items-center gap-3">
          <!-- Search input -->
          <div class="relative flex-1 w-full">
            <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
            <input type="text" id="asg-search" value="${escapeHtml(searchQuery)}" placeholder="Search tasks by title, subject or notes..." class="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
          </div>

          <!-- Sort dropdown -->
          <div class="w-full md:w-auto shrink-0">
            <select id="asg-sort" class="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="deadline-asc" ${sortBy === 'deadline-asc' ? 'selected' : ''}>Deadline: Soonest First</option>
              <option value="priority-desc" ${sortBy === 'priority-desc' ? 'selected' : ''}>Priority: Highest First</option>
              <option value="title-asc" ${sortBy === 'title-asc' ? 'selected' : ''}>Alphabetical: A to Z</option>
            </select>
          </div>
        </div>

        <!-- Filter Pills Bar -->
        <div class="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
          <!-- Status Tabs -->
          <div class="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            ${['All', 'Pending', 'Overdue', 'Completed'].map(st => `
              <button data-status="${st}" class="filter-status-btn px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                filterStatus === st
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }">
                ${st}
              </button>
            `).join('')}
          </div>

          <!-- Secondary Filters: Priority & Subject -->
          <div class="flex items-center gap-2">
            <select id="filter-priority" class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">
              <option value="All">All Priorities</option>
              <option value="Urgent" ${filterPriority === 'Urgent' ? 'selected' : ''}>Urgent</option>
              <option value="High" ${filterPriority === 'High' ? 'selected' : ''}>High</option>
              <option value="Medium" ${filterPriority === 'Medium' ? 'selected' : ''}>Medium</option>
              <option value="Low" ${filterPriority === 'Low' ? 'selected' : ''}>Low</option>
            </select>

            <select id="filter-subject" class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs max-w-[150px] truncate">
              <option value="All">All Subjects</option>
              ${subjectsList.map(s => `
                <option value="${escapeHtml(s)}" ${filterSubject === s ? 'selected' : ''}>${escapeHtml(s)}</option>
              `).join('')}
            </select>
          </div>
        </div>

      </div>

      <!-- Assignment Cards List -->
      <div class="space-y-3">
        ${filtered.length > 0 ? filtered.map(asg => {
          const isDone = asg.status === 'Completed';
          const overdue = isOverdue(asg.deadline, asg.status);
          const relTime = getRelativeTime(asg.deadline, asg.status);

          const priorityBadge = {
            Urgent: 'bg-red-50 text-red-700 dark:bg-red-950/60 dark:text-red-300 border-red-200 dark:border-red-900',
            High: 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-900',
            Medium: 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-900',
            Low: 'bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border-slate-200 dark:border-slate-700'
          }[asg.priority] || 'bg-slate-100 text-slate-700';

          return `
            <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border ${
              overdue
                ? 'border-red-300 dark:border-red-900/80 bg-red-50/20 dark:bg-red-950/10'
                : isDone
                ? 'border-slate-200/60 dark:border-slate-800/60 opacity-75'
                : 'border-slate-200/80 dark:border-slate-800'
            } shadow-sm card-hover-lift flex items-start gap-4 group">
              
              <!-- Checkbox button -->
              <button data-task-id="${asg.id}" class="task-toggle-btn mt-1 w-6 h-6 rounded-lg border-2 ${
                isDone
                  ? 'bg-emerald-500 border-emerald-500 text-white'
                  : 'border-slate-300 dark:border-slate-600 hover:border-indigo-600'
              } flex items-center justify-center shrink-0 transition-all">
                <i data-lucide="check" class="w-3.5 h-3.5 ${isDone ? 'block' : 'text-transparent hover:text-indigo-600'}"></i>
              </button>

              <!-- Main Content -->
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between gap-3 flex-wrap">
                  <div class="flex items-center gap-2 flex-wrap">
                    <h3 class="text-base font-bold ${isDone ? 'line-through text-slate-400 dark:text-slate-500' : 'text-slate-900 dark:text-white'}">
                      ${escapeHtml(asg.title)}
                    </h3>
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full border ${priorityBadge}">
                      ${asg.priority}
                    </span>
                    <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      ${escapeHtml(asg.subject)}
                    </span>
                  </div>

                  <!-- Deadline badge -->
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-semibold px-2.5 py-1 rounded-lg ${
                      isDone
                        ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400'
                        : overdue
                        ? 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 font-bold animate-pulse'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }">
                      ${isDone ? '✓ Completed' : overdue ? '⚠️ ' + relTime : '📅 ' + relTime}
                    </span>
                  </div>
                </div>

                ${asg.description ? `
                  <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 line-clamp-2">
                    ${escapeHtml(asg.description)}
                  </p>
                ` : ''}

                <div class="flex items-center justify-between mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs text-slate-400">
                  <span>Due: ${formatDateTime(asg.deadline)}</span>
                  <div class="flex items-center gap-3">
                    <button data-edit-id="${asg.id}" class="edit-asg-btn hover:text-indigo-600 transition-colors">Edit</button>
                    <span>•</span>
                    <button data-delete-id="${asg.id}" class="delete-asg-btn hover:text-red-600 transition-colors">Delete</button>
                  </div>
                </div>
              </div>

            </div>
          `;
        }).join('') : `
          <div class="p-12 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <i data-lucide="inbox" class="w-12 h-12 mx-auto text-slate-300 dark:text-slate-600 mb-3"></i>
            <h3 class="text-base font-bold text-slate-900 dark:text-white">No assignments found</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-4">No tasks match your selected filter or search keyword.</p>
            <button id="btn-empty-reset" class="px-4 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
              Clear Filters
            </button>
          </div>
        `}
      </div>

      <!-- Add/Edit Assignment Modal -->
      <div id="asg-modal" class="fixed inset-0 z-50 hidden bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 modal-enter">
          <div class="flex items-center justify-between mb-4">
            <h3 id="asg-modal-title" class="text-lg font-extrabold text-slate-900 dark:text-white">New Assignment</h3>
            <button id="asg-modal-close" class="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <form id="asg-form" class="space-y-4">
            <input type="hidden" id="asg-edit-id" value="">

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Assignment Title *</label>
              <input type="text" id="form-asg-title" required placeholder="e.g. Kernel Process Scheduler Simulator" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Subject *</label>
                <input type="text" id="form-asg-subject" required placeholder="e.g. Operating Systems" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Priority *</label>
                <select id="form-asg-priority" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                  <option value="Urgent">Urgent</option>
                  <option value="High">High</option>
                  <option value="Medium" selected>Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Submission Deadline *</label>
              <input type="datetime-local" id="form-asg-deadline" required class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Instructions / Description</label>
              <textarea id="form-asg-desc" rows="3" placeholder="Add assignment details, submission format, or rubric guidelines..." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"></textarea>
            </div>

            <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button type="button" id="asg-modal-cancel" class="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-semibold">
                Cancel
              </button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold shadow-md shadow-indigo-600/25">
                Save Task
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  `;

  // Toggle completion
  container.querySelectorAll('.task-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const taskId = btn.dataset.taskId;
      const status = store.toggleAssignmentStatus(taskId);
      if (status === 'Completed') {
        triggerConfetti();
        showToast('Task marked as completed! 🎯', 'success');
      } else {
        showToast('Task marked as pending', 'info');
      }
      renderAssignments(container);
    });
  });

  // Filter status buttons
  container.querySelectorAll('.filter-status-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filterStatus = btn.dataset.status;
      renderAssignments(container);
    });
  });

  // Search input
  const searchInput = container.querySelector('#asg-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderAssignments(container);
    });
  }

  // Sort dropdown
  const sortSelect = container.querySelector('#asg-sort');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortBy = e.target.value;
      renderAssignments(container);
    });
  }

  // Priority filter
  const prioSelect = container.querySelector('#filter-priority');
  if (prioSelect) {
    prioSelect.addEventListener('change', (e) => {
      filterPriority = e.target.value;
      renderAssignments(container);
    });
  }

  // Subject filter
  const subjSelect = container.querySelector('#filter-subject');
  if (subjSelect) {
    subjSelect.addEventListener('change', (e) => {
      filterSubject = e.target.value;
      renderAssignments(container);
    });
  }

  // Reset filter
  const resetBtn = container.querySelector('#btn-empty-reset');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      filterStatus = 'All';
      filterPriority = 'All';
      filterSubject = 'All';
      searchQuery = '';
      renderAssignments(container);
    });
  }

  // Modal setup
  const modal = container.querySelector('#asg-modal');
  const modalTitle = container.querySelector('#asg-modal-title');
  const form = container.querySelector('#asg-form');
  const closeBtn = container.querySelector('#asg-modal-close');
  const cancelBtn = container.querySelector('#asg-modal-cancel');

  function openAddModal() {
    modalTitle.textContent = 'New Assignment';
    form.reset();
    container.querySelector('#asg-edit-id').value = '';
    // Set default deadline to tomorrow 23:59
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(23, 59, 0, 0);
    const tzOffset = tomorrow.getTimezoneOffset() * 60000;
    const localISOTime = (new Date(tomorrow.getTime() - tzOffset)).toISOString().slice(0, 16);
    container.querySelector('#form-asg-deadline').value = localISOTime;
    modal.classList.remove('hidden');
  }

  function closeModal() {
    modal.classList.add('hidden');
  }

  const btnAdd = container.querySelector('#btn-add-assignment');
  if (btnAdd) btnAdd.onclick = openAddModal;
  if (closeBtn) closeBtn.onclick = closeModal;
  if (cancelBtn) cancelBtn.onclick = closeModal;

  // Edit Assignment
  container.querySelectorAll('.edit-asg-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.editId;
      const asg = assignments.find(a => a.id === id);
      if (asg) {
        modalTitle.textContent = 'Edit Assignment';
        container.querySelector('#asg-edit-id').value = asg.id;
        container.querySelector('#form-asg-title').value = asg.title;
        container.querySelector('#form-asg-subject').value = asg.subject;
        container.querySelector('#form-asg-priority').value = asg.priority;
        container.querySelector('#form-asg-deadline').value = asg.deadline ? asg.deadline.slice(0, 16) : '';
        container.querySelector('#form-asg-desc').value = asg.description || '';
        modal.classList.remove('hidden');
      }
    });
  });

  // Delete Assignment
  container.querySelectorAll('.delete-asg-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.deleteId;
      if (confirm('Delete this assignment?')) {
        store.deleteAssignment(id);
        showToast('Assignment deleted', 'info');
        renderAssignments(container);
      }
    });
  });

  // Form Submit
  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const editId = container.querySelector('#asg-edit-id').value;
      const data = {
        title: container.querySelector('#form-asg-title').value.trim(),
        subject: container.querySelector('#form-asg-subject').value.trim(),
        priority: container.querySelector('#form-asg-priority').value,
        deadline: container.querySelector('#form-asg-deadline').value,
        description: container.querySelector('#form-asg-desc').value.trim()
      };

      if (editId) {
        store.updateAssignment(editId, data);
        showToast('Assignment updated!', 'success');
      } else {
        store.addAssignment(data);
        showToast('New assignment created!', 'success');
      }

      closeModal();
      renderAssignments(container);
    };
  }

  if (window.lucide) window.lucide.createIcons();
}
