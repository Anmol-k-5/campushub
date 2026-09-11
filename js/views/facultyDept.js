// CampusHub Faculty & Department Hub View (Features 71-85)
import { store } from '../store.js';
import { escapeHtml, showToast, triggerConfetti } from '../utils.js';

export function renderFacultyDept(container) {
  const faculty = store.getFaculty();
  const appointments = store.getFacultyAppointments();

  container.innerHTML = `
    <div class="space-y-6">

      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Faculty & Department Hub</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Faculty directory, live office availability status, research publications, and consultation booking.</p>
        </div>

        <div class="flex items-center gap-2">
          <span class="text-xs font-semibold px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
            👨‍🏫 480+ Full-Time Faculty Members
          </span>
        </div>
      </div>

      <!-- Active Booked Appointments Banner -->
      ${appointments.length > 0 ? `
        <div class="p-5 rounded-3xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 space-y-3">
          <div class="flex items-center justify-between">
            <h3 class="text-xs font-bold uppercase tracking-wider text-indigo-800 dark:text-indigo-300 flex items-center gap-2">
              <i data-lucide="calendar-check" class="w-4 h-4 text-indigo-600"></i>
              <span>Your Confirmed Faculty Appointments (${appointments.length})</span>
            </h3>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            ${appointments.map(a => `
              <div class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <div class="font-bold text-slate-900 dark:text-white">${escapeHtml(a.facultyName)}</div>
                  <div class="text-slate-500 text-[11px]">${escapeHtml(a.topic)}</div>
                </div>
                <div class="text-right">
                  <div class="font-bold text-indigo-600">${a.time}</div>
                  <div class="text-slate-400 text-[11px]">${a.date}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Faculty Members Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${faculty.map(f => {
          const statusColors = {
            'In Office': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-300',
            'In Lecture': 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300',
            'In Meeting': 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-300',
            'On Leave': 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border-slate-300'
          };
          const badgeClass = statusColors[f.status] || statusColors['In Office'];

          return `
            <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm card-hover-lift flex flex-col justify-between">
              <div>
                <div class="flex items-start justify-between gap-4 mb-4">
                  <div class="flex items-center gap-3">
                    <img src="${f.photo}" alt="${escapeHtml(f.name)}" class="w-14 h-14 rounded-2xl object-cover border-2 border-slate-200 dark:border-slate-700 shrink-0">
                    <div>
                      <h3 class="text-base font-bold text-slate-900 dark:text-white">${escapeHtml(f.name)}</h3>
                      <div class="text-xs font-semibold text-indigo-600 dark:text-indigo-400">${escapeHtml(f.designation)}</div>
                      <div class="text-[11px] text-slate-400">${escapeHtml(f.department)}</div>
                    </div>
                  </div>

                  <!-- Live Availability Status (Feature 75) -->
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${badgeClass} shrink-0">
                    ● ${f.status}
                  </span>
                </div>

                <div class="space-y-2 text-xs text-slate-600 dark:text-slate-300 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div class="flex items-center gap-2">
                    <i data-lucide="map-pin" class="w-3.5 h-3.5 text-slate-400"></i>
                    <span><strong>Office:</strong> ${escapeHtml(f.room)} (${escapeHtml(f.phone)})</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <i data-lucide="mail" class="w-3.5 h-3.5 text-slate-400"></i>
                    <span>${escapeHtml(f.email)}</span>
                  </div>
                  <div class="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold">
                    <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                    <span><strong>Office Hours:</strong> ${escapeHtml(f.officeHours)}</span>
                  </div>
                  <div class="pt-1 text-[11px] text-slate-500">
                    <strong>Research Focus:</strong> ${escapeHtml(f.researchArea)}
                  </div>
                </div>
              </div>

              <!-- Action Footer -->
              <div class="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span class="text-[11px] text-slate-400 font-mono">${f.publicationsCount} Scopus / IEEE Papers</span>
                <button data-book-fac="${escapeHtml(f.name)}" class="btn-book-apt px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-all">
                  Book 1-on-1 Consultation
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Book Appointment Modal -->
      <div id="apt-modal" class="fixed inset-0 z-50 hidden bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 modal-enter">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-extrabold text-slate-900 dark:text-white">Schedule Faculty Consultation</h3>
            <button id="apt-modal-close" class="p-1 rounded-lg text-slate-400 hover:text-slate-600">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <form id="apt-form" class="space-y-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Faculty Member</label>
              <input type="text" id="form-apt-faculty" readonly class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-sm font-bold">
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Date *</label>
                <input type="date" id="form-apt-date" required value="${new Date().toISOString().split('T')[0]}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Time Slot *</label>
                <select id="form-apt-time" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm">
                  <option value="02:30 PM">02:30 PM</option>
                  <option value="03:15 PM">03:15 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="04:45 PM">04:45 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Meeting Purpose / Discussion Topic *</label>
              <textarea id="form-apt-topic" required rows="3" placeholder="e.g. Capstone Project guidance, research paper review..." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"></textarea>
            </div>

            <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button type="button" id="apt-modal-cancel" class="px-4 py-2 rounded-xl text-slate-500 text-sm font-semibold">Cancel</button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md">Confirm Appointment</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  `;

  // Modal logic
  const modal = container.querySelector('#apt-modal');
  const form = container.querySelector('#apt-form');
  const closeBtn = container.querySelector('#apt-modal-close');
  const cancelBtn = container.querySelector('#apt-modal-cancel');
  const facInput = container.querySelector('#form-apt-faculty');

  container.querySelectorAll('.btn-book-apt').forEach(btn => {
    btn.onclick = () => {
      facInput.value = btn.dataset.bookFac;
      modal.classList.remove('hidden');
    };
  });

  if (closeBtn) closeBtn.onclick = () => modal.classList.add('hidden');
  if (cancelBtn) cancelBtn.onclick = () => modal.classList.add('hidden');

  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const aptData = {
        facultyName: facInput.value,
        date: container.querySelector('#form-apt-date').value,
        time: container.querySelector('#form-apt-time').value,
        topic: container.querySelector('#form-apt-topic').value.trim()
      };
      store.bookFacultyAppointment(aptData);
      triggerConfetti();
      showToast('Faculty consultation appointment confirmed!', 'success');
      modal.classList.add('hidden');
      renderFacultyDept(container);
    };
  }

  if (window.lucide) window.lucide.createIcons();
}
