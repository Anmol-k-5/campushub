// CampusHub Lost & Found Bulletin Board View
import { store } from '../store.js';
import { escapeHtml, formatDate, showToast } from '../utils.js';

let lfFilterType = 'All'; // 'All', 'Lost', 'Found', 'Resolved'
let lfFilterCategory = 'All';
let lfSearchQuery = '';

export function renderLostFound(container) {
  const lostFoundItems = store.getLostFound();
  const profile = store.getProfile();

  const categories = ['All', 'Electronics', 'Accessories', 'ID Cards', 'Keys', 'Books & Notes', 'Other'];

  // Filter items
  let filtered = lostFoundItems.filter(item => {
    if (lfFilterType === 'Lost' && item.type !== 'Lost') return false;
    if (lfFilterType === 'Found' && item.type !== 'Found') return false;
    if (lfFilterType === 'Resolved' && item.status !== 'Resolved') return false;
    if (lfFilterType !== 'Resolved' && item.status === 'Resolved') return false;

    if (lfFilterCategory !== 'All' && item.category !== lfFilterCategory) return false;

    if (lfSearchQuery.trim()) {
      const q = lfSearchQuery.toLowerCase();
      const matchTitle = (item.title || '').toLowerCase().includes(q);
      const matchDesc = (item.description || '').toLowerCase().includes(q);
      const matchLoc = (item.location || '').toLowerCase().includes(q);
      const matchContact = (item.contactName || '').toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchLoc && !matchContact) return false;
    }

    return true;
  });

  const lostCount = lostFoundItems.filter(i => i.type === 'Lost' && i.status !== 'Resolved').length;
  const foundCount = lostFoundItems.filter(i => i.type === 'Found' && i.status !== 'Resolved').length;

  container.innerHTML = `
    <div class="space-y-6">

      <!-- Header & Top Action -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Lost & Found Bulletin</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Report missing belongings or help fellow students recover items left behind on campus.</p>
        </div>

        <button id="btn-add-item" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold shadow-md shadow-red-600/20 transition-all">
          <i data-lucide="plus" class="w-4 h-4"></i>
          <span>Report Item</span>
        </button>
      </div>

      <!-- Quick Metrics Ribbon -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div class="text-xs font-semibold text-slate-400 uppercase">Total Reported</div>
          <div class="text-2xl font-black text-slate-900 dark:text-white mt-1">${lostFoundItems.length}</div>
        </div>
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div class="text-xs font-semibold text-red-500 uppercase">Active Lost Items</div>
          <div class="text-2xl font-black text-red-600 dark:text-red-400 mt-1">${lostCount}</div>
        </div>
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div class="text-xs font-semibold text-emerald-500 uppercase">Items Found & Held</div>
          <div class="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">${foundCount}</div>
        </div>
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div class="text-xs font-semibold text-indigo-500 uppercase">Resolved / Returned</div>
          <div class="text-2xl font-black text-indigo-600 dark:text-indigo-400 mt-1">${lostFoundItems.filter(i => i.status === 'Resolved').length}</div>
        </div>
      </div>

      <!-- Filters & Search Toolbar -->
      <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
        
        <div class="flex flex-col md:flex-row items-center gap-3">
          <!-- Search input -->
          <div class="relative flex-1 w-full">
            <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
            <input type="text" id="lf-search" value="${escapeHtml(lfSearchQuery)}" placeholder="Search by item name, location found, or keywords..." class="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500">
          </div>

          <!-- Category filter -->
          <div class="w-full md:w-auto shrink-0">
            <select id="lf-cat-select" class="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500">
              ${categories.map(c => `<option value="${c}" ${lfFilterCategory === c ? 'selected' : ''}>${c === 'All' ? 'All Categories' : c}</option>`).join('')}
            </select>
          </div>
        </div>

        <!-- Type Filter Tabs -->
        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
          ${['All', 'Lost', 'Found', 'Resolved'].map(type => `
            <button data-type="${type}" class="lf-type-btn px-3 py-1.5 rounded-lg font-semibold transition-colors shrink-0 ${
              lfFilterType === type
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }">
              ${type === 'All' ? 'All Active Items' : type}
            </button>
          `).join('')}
        </div>

      </div>

      <!-- Items Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${filtered.length > 0 ? filtered.map(item => {
          const isLost = item.type === 'Lost';
          const isResolved = item.status === 'Resolved';

          return `
            <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border ${
              isResolved
                ? 'border-slate-200/60 dark:border-slate-800/60 opacity-70'
                : isLost
                ? 'border-red-200/80 dark:border-red-900/40'
                : 'border-emerald-200/80 dark:border-emerald-900/40'
            } shadow-sm card-hover-lift flex flex-col justify-between group">

              <div>
                <!-- Top Badge Row -->
                <div class="flex items-center justify-between gap-2 mb-3">
                  <span class="inline-flex items-center gap-1.5 text-xs font-extrabold px-2.5 py-0.5 rounded-full ${
                    isResolved
                      ? 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                      : isLost
                      ? 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300 border border-red-200 dark:border-red-800'
                      : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                  }">
                    <span class="w-1.5 h-1.5 rounded-full ${isResolved ? 'bg-slate-400' : isLost ? 'bg-red-500' : 'bg-emerald-500'}"></span>
                    ${isResolved ? 'Resolved / Claimed' : item.type.toUpperCase()}
                  </span>

                  <span class="text-[11px] text-slate-400 font-medium">
                    ${formatDate(item.date)}
                  </span>
                </div>

                <!-- Item Title -->
                <h3 class="text-base font-black text-slate-900 dark:text-white line-clamp-1 mb-1">
                  ${escapeHtml(item.title)}
                </h3>

                <span class="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 inline-block mb-3">
                  ${escapeHtml(item.category)}
                </span>

                <!-- Description -->
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                  ${escapeHtml(item.description)}
                </p>

                <!-- Location & Contact info -->
                <div class="space-y-2 text-xs text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div class="flex items-start gap-2">
                    <i data-lucide="map-pin" class="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5"></i>
                    <span><strong>Location:</strong> ${escapeHtml(item.location)}</span>
                  </div>
                  <div class="flex items-start gap-2">
                    <i data-lucide="user" class="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5"></i>
                    <span><strong>Contact:</strong> ${escapeHtml(item.contactName)} (${escapeHtml(item.contactInfo)})</span>
                  </div>
                  ${item.reward ? `
                    <div class="flex items-start gap-2 text-emerald-600 dark:text-emerald-400 font-bold">
                      <i data-lucide="gift" class="w-3.5 h-3.5 shrink-0 mt-0.5"></i>
                      <span>Reward: ${escapeHtml(item.reward)}</span>
                    </div>
                  ` : ''}
                </div>
              </div>

              <!-- Action Footer -->
              <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button data-resolve-id="${item.id}" class="resolve-btn text-xs font-bold px-3 py-1.5 rounded-lg border transition-all ${
                  isResolved
                    ? 'border-slate-300 text-slate-500 hover:border-slate-400'
                    : 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90'
                }">
                  ${isResolved ? 'Re-open Item' : 'Mark as Resolved ✓'}
                </button>

                <button data-delete-id="${item.id}" class="delete-lf-btn text-slate-400 hover:text-red-600 transition-colors p-1" title="Delete listing">
                  <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
              </div>

            </div>
          `;
        }).join('') : `
          <div class="col-span-full p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <i data-lucide="help-circle" class="w-12 h-12 mx-auto text-slate-300 dark:text-slate-600 mb-3"></i>
            <h3 class="text-base font-bold text-slate-900 dark:text-white">No items found</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">No reported items match your current filter.</p>
          </div>
        `}
      </div>

      <!-- Add Lost/Found Item Modal -->
      <div id="lf-modal" class="fixed inset-0 z-50 hidden bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 modal-enter">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-extrabold text-slate-900 dark:text-white">Report Lost or Found Item</h3>
            <button id="lf-modal-close" class="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <form id="lf-form" class="space-y-4">
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Status Type *</label>
                <select id="form-lf-type" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none font-bold">
                  <option value="Lost">I Lost An Item</option>
                  <option value="Found">I Found An Item</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Category *</label>
                <select id="form-lf-cat" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none">
                  ${categories.filter(c => c !== 'All').map(c => `<option value="${c}">${c}</option>`).join('')}
                </select>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Item Title *</label>
              <input type="text" id="form-lf-title" required placeholder="e.g. Blue Hydro Flask 32oz Bottle" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none">
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Location Lost/Found *</label>
                <input type="text" id="form-lf-loc" required placeholder="e.g. Central Library 2nd Floor" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Date *</label>
                <input type="date" id="form-lf-date" required value="${new Date().toISOString().split('T')[0]}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none">
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Item Description & Identifiers *</label>
              <textarea id="form-lf-desc" required rows="3" placeholder="Provide distinct characteristics, stickers, color, or condition..." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"></textarea>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Contact Name *</label>
                <input type="text" id="form-lf-contact-name" required value="${escapeHtml(profile.name)}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Phone / Email / Room *</label>
                <input type="text" id="form-lf-contact-info" required value="${escapeHtml(profile.email)}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none">
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Reward (Optional)</label>
              <input type="text" id="form-lf-reward" placeholder="e.g. Free Cafeteria Coffee / $10" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none">
            </div>

            <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button type="button" id="lf-modal-cancel" class="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-semibold">
                Cancel
              </button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-bold shadow-md shadow-red-600/25">
                Submit Report
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  `;

  // Toggle resolve status
  container.querySelectorAll('.resolve-btn').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.resolveId;
      const newStatus = store.resolveLostFoundItem(id);
      showToast(newStatus === 'Resolved' ? 'Item marked as claimed / resolved! 🎉' : 'Item marked as active', 'success');
      renderLostFound(container);
    };
  });

  // Delete item
  container.querySelectorAll('.delete-lf-btn').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.deleteId;
      if (confirm('Delete this listing?')) {
        store.deleteLostFoundItem(id);
        showToast('Listing removed', 'info');
        renderLostFound(container);
      }
    };
  });

  // Filter type tabs
  container.querySelectorAll('.lf-type-btn').forEach(btn => {
    btn.onclick = () => {
      lfFilterType = btn.dataset.type;
      renderLostFound(container);
    };
  });

  // Category select
  const catSelect = container.querySelector('#lf-cat-select');
  if (catSelect) {
    catSelect.onchange = (e) => {
      lfFilterCategory = e.target.value;
      renderLostFound(container);
    };
  }

  // Search input
  const searchInput = container.querySelector('#lf-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      lfSearchQuery = e.target.value;
      renderLostFound(container);
    });
  }

  // Modal logic
  const modal = container.querySelector('#lf-modal');
  const form = container.querySelector('#lf-form');
  const closeBtn = container.querySelector('#lf-modal-close');
  const cancelBtn = container.querySelector('#lf-modal-cancel');
  const btnAdd = container.querySelector('#btn-add-item');

  if (btnAdd) btnAdd.onclick = () => modal.classList.remove('hidden');
  if (closeBtn) closeBtn.onclick = () => modal.classList.add('hidden');
  if (cancelBtn) cancelBtn.onclick = () => modal.classList.add('hidden');

  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const itemData = {
        type: container.querySelector('#form-lf-type').value,
        category: container.querySelector('#form-lf-cat').value,
        title: container.querySelector('#form-lf-title').value.trim(),
        location: container.querySelector('#form-lf-loc').value.trim(),
        date: container.querySelector('#form-lf-date').value,
        description: container.querySelector('#form-lf-desc').value.trim(),
        contactName: container.querySelector('#form-lf-contact-name').value.trim(),
        contactInfo: container.querySelector('#form-lf-contact-info').value.trim(),
        reward: container.querySelector('#form-lf-reward').value.trim()
      };

      store.addLostFoundItem(itemData);
      showToast('Lost & Found report published!', 'success');
      modal.classList.add('hidden');
      renderLostFound(container);
    };
  }

  if (window.lucide) window.lucide.createIcons();
}
