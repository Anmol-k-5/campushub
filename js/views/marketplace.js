// CampusHub Campus Marketplace View
import { store } from '../store.js';
import { escapeHtml, formatDate, showToast } from '../utils.js';

let mpFilterCategory = 'All';
let mpSearchQuery = '';
let mpSortBy = 'date-desc'; // 'date-desc', 'price-asc', 'price-desc'

export function renderMarketplace(container) {
  const marketplace = store.getMarketplace();
  const profile = store.getProfile();

  const categories = ['All', 'Textbooks', 'Electronics', 'Bicycles', 'Hostel Gear', 'Stationery & Tools'];

  // Filter items
  let filtered = marketplace.filter(item => {
    if (mpFilterCategory !== 'All' && item.category !== mpFilterCategory) return false;
    if (mpSearchQuery.trim()) {
      const q = mpSearchQuery.toLowerCase();
      const matchTitle = (item.title || '').toLowerCase().includes(q);
      const matchDesc = (item.description || '').toLowerCase().includes(q);
      const matchSeller = (item.sellerName || '').toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchSeller) return false;
    }
    return true;
  });

  // Sort items
  filtered.sort((a, b) => {
    if (mpSortBy === 'price-asc') return a.price - b.price;
    if (mpSortBy === 'price-desc') return b.price - a.price;
    return new Date(b.date || 0) - new Date(a.date || 0);
  });

  container.innerHTML = `
    <div class="space-y-6">

      <!-- Header & Top Action -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Campus Marketplace</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Buy and sell pre-owned textbooks, electronics, cycles, and dorm essentials among campus peers.</p>
        </div>

        <button id="btn-add-listing" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold shadow-md shadow-orange-600/20 transition-all">
          <i data-lucide="tag" class="w-4 h-4"></i>
          <span>List Item for Sale</span>
        </button>
      </div>

      <!-- Filters Toolbar -->
      <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
        
        <div class="flex flex-col md:flex-row items-center gap-3">
          <!-- Search input -->
          <div class="relative flex-1 w-full">
            <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
            <input type="text" id="mp-search" value="${escapeHtml(mpSearchQuery)}" placeholder="Search books, calculators, bicycles, furniture..." class="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
          </div>

          <!-- Sort dropdown -->
          <div class="w-full md:w-auto shrink-0">
            <select id="mp-sort-select" class="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option value="date-desc" ${mpSortBy === 'date-desc' ? 'selected' : ''}>Newest First</option>
              <option value="price-asc" ${mpSortBy === 'price-asc' ? 'selected' : ''}>Price: Low to High</option>
              <option value="price-desc" ${mpSortBy === 'price-desc' ? 'selected' : ''}>Price: High to Low</option>
            </select>
          </div>
        </div>

        <!-- Category Pills -->
        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
          ${categories.map(cat => `
            <button data-cat="${cat}" class="mp-cat-btn px-3 py-1.5 rounded-lg font-semibold transition-colors shrink-0 ${
              mpFilterCategory === cat
                ? 'bg-orange-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }">
              ${cat}
            </button>
          `).join('')}
        </div>

      </div>

      <!-- Marketplace Listings Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        ${filtered.length > 0 ? filtered.map(item => `
          <div class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm card-hover-lift flex flex-col justify-between group">
            
            <div>
              <!-- Product Image with Price Badge -->
              <div class="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img src="${item.image}" alt="${escapeHtml(item.title)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                
                <div class="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm text-white text-xs font-black">
                  $${item.price}
                </div>

                <div class="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 text-[11px] font-bold shadow-sm backdrop-blur-sm">
                  ${item.condition}
                </div>
              </div>

              <!-- Product Details Body -->
              <div class="p-5">
                <div class="text-[11px] font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-1">
                  ${escapeHtml(item.category)}
                </div>

                <h3 class="text-base font-black text-slate-900 dark:text-white line-clamp-1 mb-2">
                  ${escapeHtml(item.title)}
                </h3>

                <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                  ${escapeHtml(item.description)}
                </p>

                <div class="space-y-1.5 text-xs text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div class="flex items-center gap-2 truncate">
                    <i data-lucide="user" class="w-3.5 h-3.5 text-slate-400 shrink-0"></i>
                    <span class="truncate"><strong>Seller:</strong> ${escapeHtml(item.sellerName)}</span>
                  </div>
                  <div class="flex items-center gap-2 truncate">
                    <i data-lucide="phone" class="w-3.5 h-3.5 text-slate-400 shrink-0"></i>
                    <span class="truncate">${escapeHtml(item.sellerContact)}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Action footer -->
            <div class="p-5 pt-0 flex items-center justify-between gap-3">
              <button data-contact-id="${item.id}" class="contact-seller-btn flex-1 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold text-xs shadow-sm transition-all text-center">
                Contact Seller
              </button>

              <button data-delete-id="${item.id}" class="delete-mp-btn p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" title="Delete Listing">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
            </div>

          </div>
        `).join('') : `
          <div class="col-span-full p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <i data-lucide="shopping-bag" class="w-12 h-12 mx-auto text-slate-300 dark:text-slate-600 mb-3"></i>
            <h3 class="text-base font-bold text-slate-900 dark:text-white">No marketplace listings found</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Try switching category tabs or clearing search query.</p>
          </div>
        `}
      </div>

      <!-- Add Marketplace Item Modal -->
      <div id="mp-modal" class="fixed inset-0 z-50 hidden bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 modal-enter">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-extrabold text-slate-900 dark:text-white">List Item for Sale</h3>
            <button id="mp-modal-close" class="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <form id="mp-form" class="space-y-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Item Name *</label>
              <input type="text" id="form-mp-title" required placeholder="e.g. Casio fx-991EX ClassWiz Calculator" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none">
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Category *</label>
                <select id="form-mp-cat" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none">
                  ${categories.filter(c => c !== 'All').map(c => `<option value="${c}">${c}</option>`).join('')}
                </select>
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Price ($) *</label>
                <input type="number" id="form-mp-price" min="1" step="0.5" required placeholder="35" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none">
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Item Condition *</label>
                <select id="form-mp-condition" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none">
                  <option value="Brand New">Brand New</option>
                  <option value="Like New" selected>Like New</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair / Usable</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Image URL</label>
                <input type="url" id="form-mp-image" placeholder="https://images.unsplash.com/..." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none">
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Description *</label>
              <textarea id="form-mp-desc" required rows="3" placeholder="Condition details, reason for sale, edition year..." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"></textarea>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Seller Name *</label>
                <input type="text" id="form-mp-seller" required value="${escapeHtml(profile.name)}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Contact Info (Phone / Room) *</label>
                <input type="text" id="form-mp-contact" required value="${escapeHtml(profile.email)}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none">
              </div>
            </div>

            <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button type="button" id="mp-modal-cancel" class="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-semibold">
                Cancel
              </button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold shadow-md shadow-orange-600/25">
                List for Sale
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  `;

  // Contact seller action
  container.querySelectorAll('.contact-seller-btn').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.contactId;
      const item = marketplace.find(i => i.id === id);
      if (item) {
        alert(`Contact Seller:\n\nName: ${item.sellerName}\nContact: ${item.sellerContact}\nItem: ${item.title} ($${item.price})`);
      }
    };
  });

  // Delete listing
  container.querySelectorAll('.delete-mp-btn').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.deleteId;
      if (confirm('Delete this marketplace listing?')) {
        store.deleteMarketplaceItem(id);
        showToast('Listing removed', 'info');
        renderMarketplace(container);
      }
    };
  });

  // Category filter
  container.querySelectorAll('.mp-cat-btn').forEach(btn => {
    btn.onclick = () => {
      mpFilterCategory = btn.dataset.cat;
      renderMarketplace(container);
    };
  });

  // Sort dropdown
  const sortSelect = container.querySelector('#mp-sort-select');
  if (sortSelect) {
    sortSelect.onchange = (e) => {
      mpSortBy = e.target.value;
      renderMarketplace(container);
    };
  }

  // Search input
  const searchInput = container.querySelector('#mp-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      mpSearchQuery = e.target.value;
      renderMarketplace(container);
    });
  }

  // Modal logic
  const modal = container.querySelector('#mp-modal');
  const form = container.querySelector('#mp-form');
  const closeBtn = container.querySelector('#mp-modal-close');
  const cancelBtn = container.querySelector('#mp-modal-cancel');
  const btnAdd = container.querySelector('#btn-add-listing');

  if (btnAdd) btnAdd.onclick = () => modal.classList.remove('hidden');
  if (closeBtn) closeBtn.onclick = () => modal.classList.add('hidden');
  if (cancelBtn) cancelBtn.onclick = () => modal.classList.add('hidden');

  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const itemData = {
        title: container.querySelector('#form-mp-title').value.trim(),
        category: container.querySelector('#form-mp-cat').value,
        price: parseFloat(container.querySelector('#form-mp-price').value) || 0,
        condition: container.querySelector('#form-mp-condition').value,
        image: container.querySelector('#form-mp-image').value.trim() || 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=80',
        description: container.querySelector('#form-mp-desc').value.trim(),
        sellerName: container.querySelector('#form-mp-seller').value.trim(),
        sellerContact: container.querySelector('#form-mp-contact').value.trim()
      };

      store.addMarketplaceItem(itemData);
      showToast('Item listed on Marketplace!', 'success');
      modal.classList.add('hidden');
      renderMarketplace(container);
    };
  }

  if (window.lucide) window.lucide.createIcons();
}
