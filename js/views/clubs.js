// CampusHub Campus Clubs & Student Societies View
import { store } from '../store.js';
import { escapeHtml, showToast, triggerConfetti } from '../utils.js';

let clubCategoryFilter = 'All';
let clubSearchQuery = '';

export function renderClubs(container) {
  const clubs = store.getClubs();
  const profile = store.getProfile();
  const joinedClubIds = profile.joinedClubs || [];

  const categories = ['All', 'Tech & Coding', 'Robotics & Hardware', 'Business & Startups', 'Cultural & Arts', 'Media & Arts', 'Sports & Fitness'];

  // Filter clubs
  let filtered = clubs.filter(club => {
    if (clubCategoryFilter !== 'All' && club.category !== clubCategoryFilter) return false;
    if (clubSearchQuery.trim()) {
      const q = clubSearchQuery.toLowerCase();
      const matchName = (club.name || '').toLowerCase().includes(q);
      const matchDesc = (club.description || '').toLowerCase().includes(q);
      const matchLeads = (club.leads || '').toLowerCase().includes(q);
      const matchTags = (club.tags || []).some(t => t.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchLeads && !matchTags) return false;
    }
    return true;
  });

  container.innerHTML = `
    <div class="space-y-6">

      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Campus Clubs & Societies</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Connect with student organizations, attend workshops, and grow your network.</p>
        </div>

        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 text-xs font-semibold">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-cyan-600"></i>
          <span>You have joined ${joinedClubIds.length} clubs</span>
        </div>
      </div>

      <!-- Filters & Search Toolbar -->
      <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
        
        <!-- Search input -->
        <div class="relative w-full">
          <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
          <input type="text" id="club-search" value="${escapeHtml(clubSearchQuery)}" placeholder="Search clubs by name, focus area, or keywords..." class="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500">
        </div>

        <!-- Category Pills -->
        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
          ${categories.map(cat => `
            <button data-cat="${cat}" class="club-cat-btn px-3 py-1.5 rounded-lg font-semibold transition-colors shrink-0 ${
              clubCategoryFilter === cat
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }">
              ${cat}
            </button>
          `).join('')}
        </div>

      </div>

      <!-- Clubs Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${filtered.length > 0 ? filtered.map(club => {
          const isJoined = joinedClubIds.includes(club.id);

          return `
            <div class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm card-hover-lift flex flex-col justify-between overflow-hidden group">
              
              <div>
                <!-- Gradient Header with Icon -->
                <div class="p-6 bg-gradient-to-r ${club.bannerColor || 'from-indigo-500 to-purple-600'} text-white relative">
                  <div class="flex items-center justify-between">
                    <span class="text-3xl filter drop-shadow">${club.logo || '🎓'}</span>
                    <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-black/25 backdrop-blur-sm text-white">
                      ${club.category}
                    </span>
                  </div>
                  <h3 class="text-lg font-black text-white mt-4 line-clamp-1">${escapeHtml(club.name)}</h3>
                  <div class="flex items-center gap-2 text-xs text-white/90 mt-1">
                    <i data-lucide="users" class="w-3.5 h-3.5"></i>
                    <span>${club.memberCount} active members</span>
                  </div>
                </div>

                <!-- Body Content -->
                <div class="p-6 space-y-4">
                  <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    ${escapeHtml(club.description)}
                  </p>

                  <div class="space-y-2 text-xs text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <div class="flex items-start gap-2">
                      <i data-lucide="user-check" class="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5"></i>
                      <span><strong>Leads:</strong> ${escapeHtml(club.leads)}</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <i data-lucide="clock" class="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5"></i>
                      <span><strong>Meets:</strong> ${escapeHtml(club.regularMeeting)}</span>
                    </div>
                  </div>

                  <!-- Tag pills -->
                  ${club.tags && club.tags.length > 0 ? `
                    <div class="flex flex-wrap gap-1.5 pt-1">
                      ${club.tags.map(t => `
                        <span class="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                          #${escapeHtml(t)}
                        </span>
                      `).join('')}
                    </div>
                  ` : ''}
                </div>
              </div>

              <!-- Action Footer: Join Club Button -->
              <div class="p-6 pt-0">
                <button data-club-id="${club.id}" class="join-club-btn w-full py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2 ${
                  isJoined
                    ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 hover:bg-red-50 hover:text-red-700 hover:border-red-300 group/btn'
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/25 hover:scale-[1.02] active:scale-[0.98]'
                }">
                  ${isJoined ? `
                    <span class="group-hover/btn:hidden flex items-center gap-1.5">
                      <i data-lucide="check" class="w-4 h-4 text-emerald-600 dark:text-emerald-400"></i>
                      Joined Member
                    </span>
                    <span class="hidden group-hover/btn:flex items-center gap-1.5 text-red-600">
                      <i data-lucide="user-minus" class="w-4 h-4"></i>
                      Leave Club
                    </span>
                  ` : `
                    <i data-lucide="user-plus" class="w-4 h-4"></i>
                    <span>Join Club</span>
                  `}
                </button>
              </div>

            </div>
          `;
        }).join('') : `
          <div class="col-span-full p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <i data-lucide="users" class="w-12 h-12 mx-auto text-slate-300 dark:text-slate-600 mb-3"></i>
            <h3 class="text-base font-bold text-slate-900 dark:text-white">No clubs found</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Try switching category tabs or clearing search query.</p>
          </div>
        `}
      </div>

    </div>
  `;

  // Join / Leave club toggle
  container.querySelectorAll('.join-club-btn').forEach(btn => {
    btn.onclick = () => {
      const clubId = btn.dataset.clubId;
      const isJoined = store.toggleJoinClub(clubId);
      if (isJoined) {
        triggerConfetti();
        showToast('Welcome to the club! Added to your Student Profile. 🎉', 'success');
      } else {
        showToast('You have left the club.', 'info');
      }
      renderClubs(container);
    };
  });

  // Category filter
  container.querySelectorAll('.club-cat-btn').forEach(btn => {
    btn.onclick = () => {
      clubCategoryFilter = btn.dataset.cat;
      renderClubs(container);
    };
  });

  // Search input
  const searchInput = container.querySelector('#club-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      clubSearchQuery = e.target.value;
      renderClubs(container);
    });
  }

  if (window.lucide) window.lucide.createIcons();
}
