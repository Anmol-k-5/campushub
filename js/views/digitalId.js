// CampusHub Digital Student ID Card View (Feature 34)
import { store } from '../store.js';
import { escapeHtml, showToast } from '../utils.js';

export function renderDigitalId(container) {
  const profile = store.getProfile();
  const inst = store.getInstitution();

  container.innerHTML = `
    <div class="space-y-6 max-w-4xl mx-auto">

      <!-- Header & Action -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Digital Student ID Card</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Official institution RFID identity pass for campus entry, library access, and exam verification.</p>
        </div>

        <button id="btn-print-id" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-md shadow-indigo-600/20 transition-all">
          <i data-lucide="printer" class="w-4 h-4"></i>
          <span>Print / Save ID PDF</span>
        </button>
      </div>

      <!-- ID Cards Display (Front & Back) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

        <!-- ID Card Front -->
        <div class="rounded-3xl overflow-hidden shadow-2xl border border-slate-300 dark:border-slate-700 bg-gradient-to-b from-indigo-900 via-slate-900 to-indigo-950 text-white p-6 relative">
          <!-- Top Hologram Ribbon -->
          <div class="flex items-center justify-between pb-4 border-b border-white/15">
            <div class="flex items-center gap-2.5">
              <div class="w-9 h-9 rounded-xl bg-white text-indigo-900 font-bold flex items-center justify-center text-lg shadow-sm">
                🎓
              </div>
              <div>
                <div class="text-[11px] font-black uppercase tracking-wider text-indigo-300">${escapeHtml(inst.shortName || 'ST. XAVIER')}</div>
                <div class="text-[9px] text-slate-300">Identity & Smart Access Pass</div>
              </div>
            </div>
            <div class="px-2 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-[10px] font-bold tracking-widest uppercase">
              STUDENT
            </div>
          </div>

          <!-- Body: Photo & Details -->
          <div class="flex items-center gap-5 my-6">
            <div class="relative shrink-0">
              <img src="${profile.avatar}" alt="Student Photo" class="w-24 h-28 rounded-2xl object-cover border-2 border-indigo-400 shadow-md">
              <div class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-indigo-950 flex items-center justify-center text-[10px]">
                ✓
              </div>
            </div>

            <div class="space-y-1 min-w-0">
              <h3 class="text-lg font-black text-white truncate">${escapeHtml(profile.name)}</h3>
              <div class="font-mono text-xs font-bold text-indigo-300 tracking-wider">${escapeHtml(profile.rollNo)}</div>
              <div class="text-xs text-slate-300 truncate">${escapeHtml(profile.degree)}</div>
              <div class="text-[11px] text-slate-400 truncate">${escapeHtml(profile.department)}</div>
              <div class="text-[11px] text-slate-400 font-semibold pt-1">Valid Thru: <strong>${profile.validUpto || 'June 2027'}</strong></div>
            </div>
          </div>

          <!-- Card Bottom: Barcode Simulation & Chip -->
          <div class="pt-4 border-t border-white/15 flex items-center justify-between">
            <div>
              <div class="font-mono text-[9px] tracking-widest text-slate-400">${profile.digitalIdBarcode || 'SXITM-2023-CS-1048'}</div>
              <!-- Barcode visual simulation -->
              <div class="flex items-center gap-0.5 mt-1 h-6">
                ${[2,1,3,1,2,4,1,2,1,3,2,1,4,1,2,1,3,1,2,1].map(w => `
                  <span class="bg-white h-full" style="width: ${w * 1.5}px"></span>
                `).join('')}
              </div>
            </div>

            <!-- RFID Chip icon -->
            <div class="w-9 h-7 rounded-md bg-amber-400/30 border border-amber-400/60 flex items-center justify-center text-[10px] text-amber-200">
              <i data-lucide="radio" class="w-4 h-4"></i>
            </div>
          </div>
        </div>

        <!-- ID Card Back -->
        <div class="rounded-3xl overflow-hidden shadow-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-6 flex flex-col justify-between">
          <div>
            <!-- Magnetic stripe simulation -->
            <div class="-mx-6 -mt-6 h-10 bg-slate-950 mb-5"></div>

            <div class="flex items-start justify-between gap-4">
              <div class="space-y-2 text-xs flex-1">
                <div><span class="text-slate-400 font-bold uppercase text-[10px]">Blood Group:</span> <strong class="text-red-600">${profile.bloodGroup || 'O+ Positive'}</strong></div>
                <div><span class="text-slate-400 font-bold uppercase text-[10px]">Date of Birth:</span> <strong>${profile.dob || '18 June 2004'}</strong></div>
                <div><span class="text-slate-400 font-bold uppercase text-[10px]">Emergency Contact:</span> <strong>${profile.emergencyContact || '+91 98765 43210'}</strong></div>
                <div><span class="text-slate-400 font-bold uppercase text-[10px]">Hostel Residence:</span> <strong>${profile.hostelResident || 'Hostel 2 • Room 304'}</strong></div>
              </div>

              <!-- QR Code Simulation -->
              <div class="p-2 rounded-xl bg-white border border-slate-200 shadow-sm shrink-0 text-center">
                <svg class="w-20 h-20 text-slate-900" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M10 10h30v30h-30z M15 15v20h20v-20z M20 20h10v10h-10z M60 10h30v30h-30z M65 15v20h20v-20z M70 20h10v10h-10z M10 60h30v30h-30z M15 65v20h20v-20z M20 70h10v10h-10z M50 20h5v10h-5z M50 60h10v5h-10z M65 60h5v10h-5z M80 65h10v10h-10z M60 80h10v10h-10z M75 80h15v5h-15z" />
                </svg>
                <span class="text-[8px] font-mono text-slate-500 font-bold">SCAN TO VERIFY</span>
              </div>
            </div>

            <!-- Terms -->
            <p class="text-[10px] text-slate-400 mt-4 leading-relaxed">
              This card is the property of St. Xavier Institute of Technology. If found, please return to Security Desk or Call Ext. 4100. Unauthorized duplication is strictly prohibited.
            </p>
          </div>

          <div class="pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
            <span class="text-[10px] font-bold text-slate-500">AUTHORIZED REGISTRAR SIGNATURE</span>
            <div class="h-6 flex items-center justify-center font-serif italic text-indigo-600 dark:text-indigo-400 text-sm">
              Arthur Pendelton
            </div>
          </div>
        </div>

      </div>

    </div>
  `;

  const btnPrint = container.querySelector('#btn-print-id');
  if (btnPrint) {
    btnPrint.onclick = () => {
      window.print();
    };
  }

  if (window.lucide) window.lucide.createIcons();
}
