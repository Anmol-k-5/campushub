// CampusHub College Events & Hackathons View
import { store } from '../store.js';
import { escapeHtml, formatDate, showToast } from '../utils.js';

let filterCategory = 'All';
let filterBookmarkedOnly = false;
let eventSearchQuery = '';

export function renderEvents(container) {
  const events = store.getEvents();
  const categories = ['All', 'Hackathon', 'Fest', 'Workshop', 'Seminar', 'Competition', 'Club Event'];

  // Filter events
  let filtered = events.filter(ev => {
    if (filterBookmarkedOnly && !ev.bookmarked) return false;
    if (filterCategory !== 'All' && ev.category !== filterCategory) return false;
    if (eventSearchQuery.trim()) {
      const q = eventSearchQuery.toLowerCase();
      const matchTitle = (ev.title || '').toLowerCase().includes(q);
      const matchDesc = (ev.description || '').toLowerCase().includes(q);
      const matchOrg = (ev.organizer || '').toLowerCase().includes(q);
      const matchVenue = (ev.venue || '').toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchOrg && !matchVenue) return false;
    }
    return true;
  });

  const bookmarkedCount = events.filter(e => e.bookmarked).length;

  container.innerHTML = `
    <div class="space-y-6">

      <!-- Header & Top Actions -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">College Events & Fests</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Hackathons, annual fests, technical bootcamps, and competitions.</p>
        </div>

        <button id="btn-add-event" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold shadow-md shadow-rose-600/20 transition-all">
          <i data-lucide="plus" class="w-4 h-4"></i>
          <span>Post Campus Event</span>
        </button>
      </div>

      <!-- Filters & Search Toolbar -->
      <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
        
        <div class="flex flex-col sm:flex-row items-center gap-3">
          <!-- Search input -->
          <div class="relative flex-1 w-full">
            <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
            <input type="text" id="ev-search" value="${escapeHtml(eventSearchQuery)}" placeholder="Search hackathons, fests, organizers, venues..." class="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-500">
          </div>

          <!-- Bookmarked toggle button -->
          <button id="btn-toggle-saved" class="px-4 py-2 rounded-xl border text-xs sm:text-sm font-semibold flex items-center gap-2 shrink-0 transition-all ${
            filterBookmarkedOnly
              ? 'bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 border-rose-300 dark:border-rose-900'
              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-rose-300'
          }">
            <i data-lucide="bookmark" class="w-4 h-4 ${filterBookmarkedOnly ? 'fill-rose-500 text-rose-500' : ''}"></i>
            <span>Bookmarked (${bookmarkedCount})</span>
          </button>
        </div>

        <!-- Category Pills -->
        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
          ${categories.map(cat => `
            <button data-cat="${cat}" class="cat-filter-btn px-3 py-1.5 rounded-lg font-semibold transition-colors shrink-0 ${
              filterCategory === cat
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }">
              ${cat}
            </button>
          `).join('')}
        </div>

      </div>

      <!-- Events Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${filtered.length > 0 ? filtered.map(ev => {
          const categoryColors = {
            Hackathon: 'bg-indigo-600',
            Fest: 'bg-rose-600',
            Workshop: 'bg-blue-600',
            Seminar: 'bg-teal-600',
            Competition: 'bg-amber-600',
            'Club Event': 'bg-purple-600'
          };
          const badgeBg = categoryColors[ev.category] || 'bg-slate-800';

          return `
            <div class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm card-hover-lift flex flex-col justify-between group">
              
              <div>
                <!-- Event Image & Category Badge -->
                <div class="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img src="${ev.image}" alt="${escapeHtml(ev.title)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  <div class="absolute top-3 left-3 px-3 py-1 rounded-full ${badgeBg} text-white text-[11px] font-bold shadow-md">
                    ${ev.category}
                  </div>

                  <!-- Bookmark Button -->
                  <button data-bookmark-id="${ev.id}" class="bookmark-btn absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 backdrop-blur-md flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-transform" title="Save event">
                    <i data-lucide="bookmark" class="w-4 h-4 ${ev.bookmarked ? 'fill-rose-500 text-rose-500' : 'text-slate-600 dark:text-slate-300'}"></i>
                  </button>

                  <div class="absolute bottom-3 left-3 right-3 text-white">
                    <div class="flex items-center gap-1.5 text-xs font-semibold text-rose-200">
                      <i data-lucide="calendar" class="w-3.5 h-3.5"></i>
                      <span>${formatDate(ev.date)} • ${ev.time}</span>
                    </div>
                  </div>
                </div>

                <!-- Event Details Body -->
                <div class="p-5">
                  <h3 class="text-base font-black text-slate-900 dark:text-white line-clamp-2 mb-2 group-hover:text-rose-600 transition-colors">
                    ${escapeHtml(ev.title)}
                  </h3>

                  <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                    ${escapeHtml(ev.description)}
                  </p>

                  <div class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <div class="flex items-center gap-2 truncate">
                      <i data-lucide="map-pin" class="w-3.5 h-3.5 text-rose-500 shrink-0"></i>
                      <span class="truncate">${escapeHtml(ev.venue)}</span>
                    </div>
                    <div class="flex items-center gap-2 truncate">
                      <i data-lucide="shield" class="w-3.5 h-3.5 text-purple-500 shrink-0"></i>
                      <span class="truncate">By ${escapeHtml(ev.organizer)}</span>
                    </div>
                  </div>

                  <!-- Tag Pills -->
                  ${ev.tags && ev.tags.length > 0 ? `
                    <div class="flex flex-wrap gap-1.5 mt-3">
                      ${ev.tags.map(t => `
                        <span class="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                          #${escapeHtml(t)}
                        </span>
                      `).join('')}
                    </div>
                  ` : ''}
                </div>
              </div>

              <!-- Action footer -->
              <div class="p-5 pt-0">
                <button data-rsvp-id="${ev.id}" class="rsvp-btn w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2">
                  <i data-lucide="check-circle" class="w-4 h-4 text-emerald-400"></i>
                  <span>RSVP & Attend (${ev.registeredCount || 100}+ going)</span>
                </button>
              </div>

            </div>
          `;
        }).join('') : `
          <div class="col-span-full p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <i data-lucide="calendar-x" class="w-12 h-12 mx-auto text-slate-300 dark:text-slate-600 mb-3"></i>
            <h3 class="text-base font-bold text-slate-900 dark:text-white">No events found</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Try switching categories or clearing search keywords.</p>
          </div>
        `}
      </div>

      <!-- Add Event Modal -->
      <div id="event-modal" class="fixed inset-0 z-50 hidden bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 modal-enter">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-extrabold text-slate-900 dark:text-white">Post Campus Event</h3>
            <button id="event-modal-close" class="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <form id="event-form" class="space-y-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Event Title *</label>
              <input type="text" id="ev-title" required placeholder="e.g. AI Prompt Engineering Hackathon" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none">
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Category *</label>
                <select id="ev-cat" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none">
                  ${categories.filter(c => c !== 'All').map(c => `<option value="${c}">${c}</option>`).join('')}
                </select>
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Date *</label>
                <input type="date" id="ev-date" required value="${new Date().toISOString().split('T')[0]}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none">
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Time Slot</label>
                <input type="text" id="ev-time" placeholder="e.g. 10:00 AM - 04:00 PM" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Venue / Hall *</label>
                <input type="text" id="ev-venue" required placeholder="e.g. Main Auditorium" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none">
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Host / Organizing Society *</label>
              <input type="text" id="ev-organizer" required placeholder="e.g. Coding Club & ACM Student Chapter" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none">
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Description</label>
              <textarea id="ev-desc" rows="3" placeholder="Explain schedule, eligibility, prize pool, or prerequisites..." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none"></textarea>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Image URL (Optional)</label>
              <input type="url" id="ev-image" placeholder="https://images.unsplash.com/..." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none">
            </div>

            <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button type="button" id="event-modal-cancel" class="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-semibold">
                Cancel
              </button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold shadow-md shadow-rose-600/25">
                Publish Event
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  `;

  // Bookmark toggling
  container.querySelectorAll('.bookmark-btn').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const id = btn.dataset.bookmarkId;
      const isSaved = store.toggleBookmarkEvent(id);
      showToast(isSaved ? 'Event bookmarked!' : 'Event removed from bookmarks', 'info');
      renderEvents(container);
    };
  });

  // Category filter
  container.querySelectorAll('.cat-filter-btn').forEach(btn => {
    btn.onclick = () => {
      filterCategory = btn.dataset.cat;
      renderEvents(container);
    };
  });

  // Saved events toggle
  const btnToggleSaved = container.querySelector('#btn-toggle-saved');
  if (btnToggleSaved) {
    btnToggleSaved.onclick = () => {
      filterBookmarkedOnly = !filterBookmarkedOnly;
      renderEvents(container);
    };
  }

  // Search input
  const searchInput = container.querySelector('#ev-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      eventSearchQuery = e.target.value;
      renderEvents(container);
    });
  }

  // RSVP buttons
  container.querySelectorAll('.rsvp-btn').forEach(btn => {
    btn.onclick = () => {
      showToast('RSVP Confirmed! See you at the event. 🎟️', 'success');
      btn.innerHTML = `<i data-lucide="check" class="w-4 h-4 text-emerald-400"></i><span>Registered & Confirmed ✓</span>`;
      btn.classList.add('bg-emerald-800', 'hover:bg-emerald-800');
      if (window.lucide) window.lucide.createIcons();
    };
  });

  // Modal logic
  const modal = container.querySelector('#event-modal');
  const form = container.querySelector('#event-form');
  const closeBtn = container.querySelector('#event-modal-close');
  const cancelBtn = container.querySelector('#event-modal-cancel');
  const btnAdd = container.querySelector('#btn-add-event');

  if (btnAdd) btnAdd.onclick = () => modal.classList.remove('hidden');
  if (closeBtn) closeBtn.onclick = () => modal.classList.add('hidden');
  if (cancelBtn) cancelBtn.onclick = () => modal.classList.add('hidden');

  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const eventData = {
        title: container.querySelector('#ev-title').value.trim(),
        category: container.querySelector('#ev-cat').value,
        date: container.querySelector('#ev-date').value,
        time: container.querySelector('#ev-time').value.trim() || '10:00 AM - 01:00 PM',
        venue: container.querySelector('#ev-venue').value.trim(),
        organizer: container.querySelector('#ev-organizer').value.trim(),
        description: container.querySelector('#ev-desc').value.trim(),
        image: container.querySelector('#ev-image').value.trim() || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=80'
      };

      store.addEvent(eventData);
      showToast('Event published successfully!', 'success');
      modal.classList.add('hidden');
      renderEvents(container);
    };
  }

  if (window.lucide) window.lucide.createIcons();
}
