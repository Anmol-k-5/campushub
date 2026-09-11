// CampusHub Hostel, Cafeteria & Facility Bookings View (Features 116-130)
import { store } from '../store.js';
import { escapeHtml, showToast, triggerConfetti } from '../utils.js';

let activeFacilityTab = 'mess'; // 'mess', 'hostel', 'booking', 'bus'

export function renderFacilitiesHostel(container) {
  const mess = store.getMessMenu();
  const hostel = store.getHostelAllocation();
  const bookings = store.getFacilityBookings();
  const buses = store.getBusRoutes();

  container.innerHTML = `
    <div class="space-y-6">

      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Hostel, Mess & Campus Facilities</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Daily cafeteria menu, residential hostel room status, lab facility reservations, and transit routes.</p>
        </div>

        <button id="btn-quick-facility-book" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold shadow-md shadow-orange-600/20 transition-all">
          <i data-lucide="calendar-plus" class="w-4 h-4"></i>
          <span>Book Facility</span>
        </button>
      </div>

      <!-- Navigation Tabs -->
      <div class="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar border-b border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-semibold">
        <button data-tab="mess" class="fac-tab-btn px-4 py-2.5 rounded-t-xl transition-all ${activeFacilityTab === 'mess' ? 'text-orange-600 dark:text-orange-400 border-b-2 border-orange-600 bg-orange-50/50 dark:bg-orange-950/30' : 'text-slate-500 hover:text-slate-900'}">
          🍽️ Daily Cafeteria / Mess Menu
        </button>
        <button data-tab="hostel" class="fac-tab-btn px-4 py-2.5 rounded-t-xl transition-all ${activeFacilityTab === 'hostel' ? 'text-orange-600 dark:text-orange-400 border-b-2 border-orange-600 bg-orange-50/50 dark:bg-orange-950/30' : 'text-slate-500 hover:text-slate-900'}">
          🏨 Hostel Room & Residence
        </button>
        <button data-tab="booking" class="fac-tab-btn px-4 py-2.5 rounded-t-xl transition-all ${activeFacilityTab === 'booking' ? 'text-orange-600 dark:text-orange-400 border-b-2 border-orange-600 bg-orange-50/50 dark:bg-orange-950/30' : 'text-slate-500 hover:text-slate-900'}">
          🔬 Lab & Sports Facility Bookings
        </button>
        <button data-tab="bus" class="fac-tab-btn px-4 py-2.5 rounded-t-xl transition-all ${activeFacilityTab === 'bus' ? 'text-orange-600 dark:text-orange-400 border-b-2 border-orange-600 bg-orange-50/50 dark:bg-orange-950/30' : 'text-slate-500 hover:text-slate-900'}">
          🚌 Campus Transit Bus Routes
        </button>
      </div>

      <!-- Tab 1: Live Cafeteria & Mess Menu (Features 120 & 121) -->
      ${activeFacilityTab === 'mess' ? `
        <div class="space-y-4">
          <div class="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 flex items-center justify-between">
            <span>📅 Today's Food Schedule (${mess.today}) • Freshly Prepared in Central Kitchen</span>
            <span class="font-bold">FSSAI Certified Hygiene</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Breakfast -->
            <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold uppercase text-orange-600">Breakfast</span>
                  <span class="text-[11px] text-slate-400">${mess.meals.breakfast.time}</span>
                </div>
                <div class="text-xs font-bold text-slate-900 dark:text-white mb-3">~ ${mess.meals.breakfast.calories}</div>
                <ul class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  ${mess.meals.breakfast.items.map(it => `
                    <li class="flex items-start gap-1.5">
                      <span class="text-emerald-500">●</span>
                      <span>${escapeHtml(it)}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] text-emerald-600 font-bold uppercase">
                🟢 100% Vegetarian
              </div>
            </div>

            <!-- Lunch -->
            <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold uppercase text-orange-600">Grand Lunch</span>
                  <span class="text-[11px] text-slate-400">${mess.meals.lunch.time}</span>
                </div>
                <div class="text-xs font-bold text-slate-900 dark:text-white mb-3">~ ${mess.meals.lunch.calories}</div>
                <ul class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  ${mess.meals.lunch.items.map(it => `
                    <li class="flex items-start gap-1.5">
                      <span class="text-amber-500">●</span>
                      <span>${escapeHtml(it)}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-500 font-bold uppercase">
                🔴 Veg & Non-Veg Counters Available
              </div>
            </div>

            <!-- Snacks -->
            <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold uppercase text-orange-600">Evening Snacks</span>
                  <span class="text-[11px] text-slate-400">${mess.meals.snacks.time}</span>
                </div>
                <div class="text-xs font-bold text-slate-900 dark:text-white mb-3">~ ${mess.meals.snacks.calories}</div>
                <ul class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  ${mess.meals.snacks.items.map(it => `
                    <li class="flex items-start gap-1.5">
                      <span class="text-emerald-500">●</span>
                      <span>${escapeHtml(it)}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] text-emerald-600 font-bold uppercase">
                🟢 Hot Tea & Savory Snacks
              </div>
            </div>

            <!-- Dinner -->
            <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold uppercase text-orange-600">Nutritional Dinner</span>
                  <span class="text-[11px] text-slate-400">${mess.meals.dinner.time}</span>
                </div>
                <div class="text-xs font-bold text-slate-900 dark:text-white mb-3">~ ${mess.meals.dinner.calories}</div>
                <ul class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  ${mess.meals.dinner.items.map(it => `
                    <li class="flex items-start gap-1.5">
                      <span class="text-emerald-500">●</span>
                      <span>${escapeHtml(it)}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] text-emerald-600 font-bold uppercase">
                🟢 Balanced Vegetarian Dinner
              </div>
            </div>
          </div>
        </div>
      ` : ''}

      <!-- Tab 2: Hostel Room & Residence (Features 116-119) -->
      ${activeFacilityTab === 'hostel' ? `
        <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div class="flex items-center justify-between">
            <h2 class="text-base font-bold text-slate-900 dark:text-white">Resident Hostel Details</h2>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
              Active Resident
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 space-y-1">
              <span class="text-slate-400 font-semibold uppercase text-[10px]">Hostel Block</span>
              <div class="text-sm font-bold text-slate-900 dark:text-white">${escapeHtml(hostel.blockName)}</div>
              <div class="text-slate-500">${escapeHtml(hostel.floor)}</div>
            </div>
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 space-y-1">
              <span class="text-slate-400 font-semibold uppercase text-[10px]">Room Number</span>
              <div class="text-sm font-bold text-indigo-600 dark:text-indigo-400">${escapeHtml(hostel.roomNo)}</div>
              <div class="text-slate-500">Roommate: <strong>${escapeHtml(hostel.roommate)}</strong></div>
            </div>
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 space-y-1">
              <span class="text-slate-400 font-semibold uppercase text-[10px]">Chief Warden</span>
              <div class="text-sm font-bold text-slate-900 dark:text-white">${escapeHtml(hostel.wardenName)}</div>
              <div class="text-slate-500 font-mono">${escapeHtml(hostel.wardenPhone)}</div>
            </div>
          </div>
        </div>
      ` : ''}

      <!-- Tab 3: Lab & Sports Facility Bookings (Features 124-128) -->
      ${activeFacilityTab === 'booking' ? `
        <div class="space-y-4">
          <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="text-base font-bold text-slate-900 dark:text-white">Active Facility Reservations</h3>
              <span class="text-xs text-slate-400">${bookings.length} reservations</span>
            </div>

            <div class="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
              ${bookings.map(b => `
                <div class="py-3.5 flex items-center justify-between gap-4">
                  <div>
                    <h4 class="font-bold text-slate-900 dark:text-white">${escapeHtml(b.facilityName)}</h4>
                    <p class="text-slate-500 text-[11px]">Purpose: ${escapeHtml(b.purpose)}</p>
                  </div>
                  <div class="text-right">
                    <div class="font-bold text-orange-600">${b.timeSlot}</div>
                    <div class="text-slate-400 text-[11px]">📅 ${b.date} • <span class="text-emerald-600 font-bold">${b.status}</span></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      ` : ''}

      <!-- Tab 4: Campus Transit Bus Routes (Feature 130) -->
      ${activeFacilityTab === 'bus' ? `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${buses.map(bus => `
            <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono">
                    ${bus.routeNo}
                  </span>
                  <span class="text-[11px] font-bold text-emerald-600">● ${bus.status}</span>
                </div>
                <h3 class="text-base font-bold text-slate-900 dark:text-white mt-1 mb-2">${bus.origin}</h3>
                
                <div class="space-y-1 text-xs text-slate-500 dark:text-slate-400 mb-4">
                  <div><strong>Morning Pickup:</strong> ${bus.morningTime}</div>
                  <div><strong>Evening Departure:</strong> ${bus.eveningTime}</div>
                  <div class="pt-2 text-[11px]">
                    <strong>Transit Stops:</strong><br>
                    ${bus.stops.join(' ➔ ')}
                  </div>
                </div>
              </div>

              <div class="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 flex items-center justify-between">
                <span>Driver: ${bus.driverName}</span>
                <span class="font-mono text-indigo-600">${bus.driverPhone}</span>
              </div>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- Booking Modal -->
      <div id="booking-modal" class="fixed inset-0 z-50 hidden bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 modal-enter">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-extrabold text-slate-900 dark:text-white">Reserve Campus Facility</h3>
            <button id="booking-modal-close" class="p-1 rounded-lg text-slate-400 hover:text-slate-600">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <form id="booking-form" class="space-y-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Facility *</label>
              <select id="form-bk-facility" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm">
                <option value="HPC GPU Supercomputing Workstation">HPC GPU Supercomputing Workstation</option>
                <option value="Indoor Badminton Court 1">Indoor Badminton Court 1</option>
                <option value="Indoor Badminton Court 2">Indoor Badminton Court 2</option>
                <option value="Dr. APJ Abdul Kalam Auditorium">Dr. APJ Abdul Kalam Auditorium (1500 Seats)</option>
                <option value="Smart Conference Hall C">Smart Conference Hall C</option>
              </select>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Date *</label>
                <input type="date" id="form-bk-date" required value="${new Date().toISOString().split('T')[0]}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Time Slot *</label>
                <select id="form-bk-slot" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm">
                  <option value="09:00 AM - 11:00 AM">09:00 AM - 11:00 AM</option>
                  <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
                  <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
                  <option value="06:00 PM - 07:30 PM">06:00 PM - 07:30 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Purpose *</label>
              <input type="text" id="form-bk-purpose" required placeholder="e.g. Model training, Club event, Team practice" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm">
            </div>

            <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button type="button" id="booking-modal-cancel" class="px-4 py-2 rounded-xl text-slate-500 text-sm font-semibold">Cancel</button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md">Confirm Reservation</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  `;

  // Tab switching
  container.querySelectorAll('.fac-tab-btn').forEach(btn => {
    btn.onclick = () => {
      activeFacilityTab = btn.dataset.tab;
      renderFacilitiesHostel(container);
    };
  });

  // Modal logic
  const modal = container.querySelector('#booking-modal');
  const form = container.querySelector('#booking-form');
  const closeBtn = container.querySelector('#booking-modal-close');
  const cancelBtn = container.querySelector('#booking-modal-cancel');
  const btnBook = container.querySelector('#btn-quick-facility-book');

  if (btnBook) btnBook.onclick = () => modal.classList.remove('hidden');
  if (closeBtn) closeBtn.onclick = () => modal.classList.add('hidden');
  if (cancelBtn) cancelBtn.onclick = () => modal.classList.add('hidden');

  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const bkData = {
        facilityName: container.querySelector('#form-bk-facility').value,
        date: container.querySelector('#form-bk-date').value,
        timeSlot: container.querySelector('#form-bk-slot').value,
        purpose: container.querySelector('#form-bk-purpose').value.trim()
      };
      store.bookFacility(bkData);
      triggerConfetti();
      showToast('Facility reserved successfully!', 'success');
      modal.classList.add('hidden');
      activeFacilityTab = 'booking';
      renderFacilitiesHostel(container);
    };
  }

  if (window.lucide) window.lucide.createIcons();
}
