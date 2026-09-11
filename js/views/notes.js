// CampusHub Notes & Resources Repository View
import { store } from '../store.js';
import { escapeHtml, formatDate, showToast } from '../utils.js';

let filterCategory = 'All';
let filterSubject = 'All';
let notesSearchQuery = '';

export function renderNotes(container) {
  const notes = store.getNotes();
  const timetable = store.getTimetable();

  const categories = ['All', 'Lecture Notes', 'Exam Notes', 'Cheatsheet', 'Code', 'Reference'];

  // Extract distinct subjects
  const subjectSet = new Set(['Operating Systems', 'Database Management Systems', 'Design & Analysis of Algorithms', 'Computer Networks', 'Machine Learning & AI']);
  notes.forEach(n => { if (n.subject) subjectSet.add(n.subject); });
  timetable.forEach(t => { if (t.subject) subjectSet.add(t.subject); });
  const subjectsList = Array.from(subjectSet).sort();

  // Filter notes
  let filtered = notes.filter(note => {
    if (filterCategory !== 'All' && note.category !== filterCategory) return false;
    if (filterSubject !== 'All' && note.subject !== filterSubject) return false;
    if (notesSearchQuery.trim()) {
      const q = notesSearchQuery.toLowerCase();
      const matchTitle = (note.title || '').toLowerCase().includes(q);
      const matchSubject = (note.subject || '').toLowerCase().includes(q);
      const matchContent = (note.content || '').toLowerCase().includes(q);
      const matchTags = (note.tags || []).some(t => t.toLowerCase().includes(q));
      if (!matchTitle && !matchSubject && !matchContent && !matchTags) return false;
    }
    return true;
  });

  container.innerHTML = `
    <div class="space-y-6">

      <!-- Header & Top Action -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Notes & Resources</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Lecture slides, cheatsheets, code snippets, and study materials.</p>
        </div>

        <button id="btn-add-note" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold shadow-md shadow-teal-600/20 transition-all">
          <i data-lucide="plus" class="w-4 h-4"></i>
          <span>Add Note / Resource</span>
        </button>
      </div>

      <!-- Filters Toolbar -->
      <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
        <div class="flex flex-col md:flex-row items-center gap-3">
          <!-- Search input -->
          <div class="relative flex-1 w-full">
            <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
            <input type="text" id="note-search" value="${escapeHtml(notesSearchQuery)}" placeholder="Search notes by title, topic, or content..." class="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
          </div>

          <!-- Subject filter -->
          <div class="w-full md:w-auto shrink-0">
            <select id="filter-note-subject" class="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option value="All">All Subjects (${notes.length})</option>
              ${subjectsList.map(s => `
                <option value="${escapeHtml(s)}" ${filterSubject === s ? 'selected' : ''}>${escapeHtml(s)}</option>
              `).join('')}
            </select>
          </div>
        </div>

        <!-- Category Pills -->
        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
          ${categories.map(cat => `
            <button data-cat="${cat}" class="cat-pill-btn px-3 py-1.5 rounded-lg font-semibold transition-colors shrink-0 ${
              filterCategory === cat
                ? 'bg-teal-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }">
              ${cat}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Notes Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${filtered.length > 0 ? filtered.map(note => {
          const categoryColors = {
            'Lecture Notes': 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-800',
            'Exam Notes': 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300 border-amber-200 dark:border-amber-800',
            Cheatsheet: 'bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300 border-purple-200 dark:border-purple-800',
            Code: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
            Reference: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700'
          };
          const badgeClass = categoryColors[note.category] || categoryColors.Reference;

          return `
            <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm card-hover-lift flex flex-col justify-between group">
              
              <div>
                <div class="flex items-center justify-between gap-2 mb-2">
                  <span class="text-xs font-bold px-2.5 py-0.5 rounded-full border ${badgeClass}">
                    ${note.category}
                  </span>
                  <span class="text-[11px] text-slate-400 font-medium">
                    ${formatDate(note.date)}
                  </span>
                </div>

                <h3 class="text-base font-bold text-slate-900 dark:text-white line-clamp-2 mb-1 group-hover:text-teal-600 transition-colors">
                  ${escapeHtml(note.title)}
                </h3>

                <div class="text-xs font-semibold text-teal-600 dark:text-teal-400 mb-3">
                  ${escapeHtml(note.subject)}
                </div>

                <!-- Preview text -->
                <div class="text-xs text-slate-600 dark:text-slate-400 line-clamp-4 leading-relaxed font-mono bg-slate-50 dark:bg-slate-800/40 p-3 rounded-xl border border-slate-100 dark:border-slate-800/80 whitespace-pre-line mb-4">
                  ${escapeHtml(note.content)}
                </div>

                <!-- Tag badges -->
                ${note.tags && note.tags.length > 0 ? `
                  <div class="flex flex-wrap gap-1 mb-4">
                    ${note.tags.map(t => `
                      <span class="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                        #${escapeHtml(t)}
                      </span>
                    `).join('')}
                  </div>
                ` : ''}
              </div>

              <!-- Footer with resource link & actions -->
              <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                ${note.link ? `
                  <a href="${escapeHtml(note.link)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-teal-600 dark:text-teal-400 font-bold hover:underline">
                    <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                    <span>Open Resource</span>
                  </a>
                ` : `
                  <span class="text-slate-400 italic">Self-contained note</span>
                `}

                <div class="flex items-center gap-2">
                  <button data-view-id="${note.id}" class="view-note-btn text-slate-500 hover:text-teal-600 font-semibold transition-colors">View</button>
                  <span class="text-slate-300 dark:text-slate-700">•</span>
                  <button data-delete-id="${note.id}" class="delete-note-btn text-slate-400 hover:text-red-600 transition-colors">Delete</button>
                </div>
              </div>

            </div>
          `;
        }).join('') : `
          <div class="col-span-full p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <i data-lucide="book-open" class="w-12 h-12 mx-auto text-slate-300 dark:text-slate-600 mb-3"></i>
            <h3 class="text-base font-bold text-slate-900 dark:text-white">No notes found</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Try switching category tabs or clearing search filters.</p>
          </div>
        `}
      </div>

      <!-- Add/Edit Note Modal -->
      <div id="note-modal" class="fixed inset-0 z-50 hidden bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 modal-enter">
          <div class="flex items-center justify-between mb-4">
            <h3 id="note-modal-title" class="text-lg font-extrabold text-slate-900 dark:text-white">Add Note / Resource</h3>
            <button id="note-modal-close" class="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <form id="note-form" class="space-y-4">
            <input type="hidden" id="note-edit-id" value="">

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Title *</label>
              <input type="text" id="form-note-title" required placeholder="e.g. Memory Hierarchy & Cache Coherence Cheatsheet" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none">
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Subject *</label>
                <input type="text" id="form-note-subject" required placeholder="e.g. Computer Architecture" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Category *</label>
                <select id="form-note-cat" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none">
                  ${categories.filter(c => c !== 'All').map(c => `<option value="${c}">${c}</option>`).join('')}
                </select>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Notes Content / Summary *</label>
              <textarea id="form-note-content" required rows="5" placeholder="Enter key formulas, lecture notes, or reference summaries..." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-mono focus:ring-2 focus:ring-teal-500 focus:outline-none"></textarea>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">External Resource Link (Google Drive, GitHub, PDF)</label>
              <input type="url" id="form-note-link" placeholder="https://..." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none">
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Tags (Comma-separated)</label>
              <input type="text" id="form-note-tags" placeholder="e.g. CPU, Cache, L1/L2, Midterm" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none">
            </div>

            <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button type="button" id="note-modal-cancel" class="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-semibold">
                Cancel
              </button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold shadow-md shadow-teal-600/25">
                Save Note
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  `;

  // Category pill filtering
  container.querySelectorAll('.cat-pill-btn').forEach(btn => {
    btn.onclick = () => {
      filterCategory = btn.dataset.cat;
      renderNotes(container);
    };
  });

  // Subject select
  const subjSelect = container.querySelector('#filter-note-subject');
  if (subjSelect) {
    subjSelect.onchange = (e) => {
      filterSubject = e.target.value;
      renderNotes(container);
    };
  }

  // Search input
  const searchInput = container.querySelector('#note-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      notesSearchQuery = e.target.value;
      renderNotes(container);
    });
  }

  // Delete note
  container.querySelectorAll('.delete-note-btn').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.deleteId;
      if (confirm('Delete this note?')) {
        store.deleteNote(id);
        showToast('Note deleted', 'info');
        renderNotes(container);
      }
    };
  });

  // View note full modal
  container.querySelectorAll('.view-note-btn').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.viewId;
      const note = notes.find(n => n.id === id);
      if (note) {
        alert(`${note.title}\n\nSubject: ${note.subject}\nCategory: ${note.category}\n\n${note.content}`);
      }
    };
  });

  // Modal logic
  const modal = container.querySelector('#note-modal');
  const form = container.querySelector('#note-form');
  const closeBtn = container.querySelector('#note-modal-close');
  const cancelBtn = container.querySelector('#note-modal-cancel');
  const btnAdd = container.querySelector('#btn-add-note');

  if (btnAdd) btnAdd.onclick = () => {
    form.reset();
    container.querySelector('#note-edit-id').value = '';
    modal.classList.remove('hidden');
  };
  if (closeBtn) closeBtn.onclick = () => modal.classList.add('hidden');
  if (cancelBtn) cancelBtn.onclick = () => modal.classList.add('hidden');

  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const tagsRaw = container.querySelector('#form-note-tags').value;
      const tags = tagsRaw.split(',').map(t => t.trim()).filter(Boolean);

      const noteData = {
        title: container.querySelector('#form-note-title').value.trim(),
        subject: container.querySelector('#form-note-subject').value.trim(),
        category: container.querySelector('#form-note-cat').value,
        content: container.querySelector('#form-note-content').value.trim(),
        link: container.querySelector('#form-note-link').value.trim(),
        tags
      };

      store.addNote(noteData);
      showToast('Note saved to repository!', 'success');
      modal.classList.add('hidden');
      renderNotes(container);
    };
  }

  if (window.lucide) window.lucide.createIcons();
}
