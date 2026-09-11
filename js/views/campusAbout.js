// CampusHub College Overview & Institutional Portal (Features 2-15)
import { store } from '../store.js';
import { escapeHtml } from '../utils.js';

export function renderCampusAbout(container) {
  const inst = store.getInstitution();

  container.innerHTML = `
    <div class="space-y-8">

      <!-- Hero Header & Identity -->
      <div class="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl relative overflow-hidden">
        <div class="absolute right-0 top-0 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none"></div>
        <div class="relative z-10 max-w-3xl space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-indigo-300 backdrop-blur-md">
            <span>🏛️</span>
            <span>Established in ${inst.foundedYear} • Autonomous Institution</span>
          </div>
          <h1 class="text-3xl sm:text-5xl font-black tracking-tight">${escapeHtml(inst.name)}</h1>
          <p class="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">${escapeHtml(inst.tagline)}</p>
          <div class="flex flex-wrap items-center gap-4 pt-2 text-xs font-semibold text-indigo-200">
            <span class="flex items-center gap-1.5"><i data-lucide="award" class="w-4 h-4 text-amber-400"></i> ${inst.accreditation}</span>
            <span class="flex items-center gap-1.5"><i data-lucide="trending-up" class="w-4 h-4 text-emerald-400"></i> ${inst.nirfRank}</span>
            <span class="flex items-center gap-1.5"><i data-lucide="map-pin" class="w-4 h-4 text-rose-400"></i> ${inst.campusAcreage} Eco-Campus</span>
          </div>
        </div>
      </div>

      <!-- Live Campus Statistics (Feature 9) -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
          <div class="text-3xl font-black text-indigo-600 dark:text-indigo-400 font-mono">${inst.stats.totalStudents}+</div>
          <div class="text-xs text-slate-500 mt-1 font-semibold">Enrolled Students</div>
        </div>
        <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
          <div class="text-3xl font-black text-purple-600 dark:text-purple-400 font-mono">${inst.stats.facultyCount}+</div>
          <div class="text-xs text-slate-500 mt-1 font-semibold">Distinguished Faculty</div>
        </div>
        <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
          <div class="text-3xl font-black text-emerald-600 dark:text-emerald-400 font-mono">${inst.stats.placementRate}</div>
          <div class="text-xs text-slate-500 mt-1 font-semibold">Placement Track Record</div>
        </div>
        <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
          <div class="text-3xl font-black text-rose-600 dark:text-rose-400 font-mono">${inst.stats.researchLabs}+</div>
          <div class="text-xs text-slate-500 mt-1 font-semibold">Specialized Labs & Hubs</div>
        </div>
      </div>

      <!-- Vision & Mission (Feature 3) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div class="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3">
            <i data-lucide="compass" class="w-5 h-5"></i>
          </div>
          <h2 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Our Vision</h2>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            To be an internationally recognized center of technological excellence, pioneering breakthrough research, nurturing entrepreneurial ecosystems, and transforming students into socially responsible global leaders.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div class="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3">
            <i data-lucide="target" class="w-5 h-5"></i>
          </div>
          <h2 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Our Mission</h2>
          <ul class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed">
            <li>• Provide outcome-based education bridging fundamentals with emerging tech.</li>
            <li>• Foster industry-academia partnerships for real-world capstone innovation.</li>
            <li>• Encourage open-source contribution, startup incubation, and ethics in AI.</li>
          </ul>
        </div>
      </div>

      <!-- Leadership Messages (Features 4 & 5) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Principal -->
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-4 mb-4">
              <img src="${inst.leadership.principal.photo}" alt="Principal" class="w-14 h-14 rounded-2xl object-cover border-2 border-indigo-500">
              <div>
                <h3 class="text-base font-bold text-slate-900 dark:text-white">${escapeHtml(inst.leadership.principal.name)}</h3>
                <span class="text-xs font-semibold text-indigo-600 dark:text-indigo-400">Principal</span>
                <div class="text-[11px] text-slate-400">${inst.leadership.principal.qualifications}</div>
              </div>
            </div>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
              "${escapeHtml(inst.leadership.principal.message)}"
            </p>
          </div>
        </div>

        <!-- Vice Principal -->
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-4 mb-4">
              <img src="${inst.leadership.vicePrincipal.photo}" alt="Vice Principal" class="w-14 h-14 rounded-2xl object-cover border-2 border-purple-500">
              <div>
                <h3 class="text-base font-bold text-slate-900 dark:text-white">${escapeHtml(inst.leadership.vicePrincipal.name)}</h3>
                <span class="text-xs font-semibold text-purple-600 dark:text-purple-400">Vice-Principal (Academic Affairs)</span>
                <div class="text-[11px] text-slate-400">${inst.leadership.vicePrincipal.qualifications}</div>
              </div>
            </div>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
              "${escapeHtml(inst.leadership.vicePrincipal.message)}"
            </p>
          </div>
        </div>
      </div>

      <!-- Historical Milestones Timeline (Feature 6) -->
      <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h2 class="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
          <i data-lucide="clock" class="w-5 h-5 text-indigo-500"></i>
          <span>Institutional Milestones Timeline</span>
        </h2>
        <div class="space-y-6 relative border-l-2 border-indigo-100 dark:border-slate-800 ml-4 pl-6">
          ${inst.timeline.map(item => `
            <div class="relative group">
              <div class="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-indigo-50 dark:ring-slate-900"></div>
              <div class="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">${item.year}</div>
              <h4 class="text-sm font-bold text-slate-900 dark:text-white mt-0.5">${escapeHtml(item.title)}</h4>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">${escapeHtml(item.desc)}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Interactive Campus Map & Virtual Tour (Features 13 & 14) -->
      <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <i data-lucide="map" class="w-5 h-5 text-indigo-500"></i>
              <span>Interactive Campus Navigator & Map</span>
            </h2>
            <p class="text-xs text-slate-500 mt-1">Locate academic blocks, specialized labs, dorms, and emergency facilities</p>
          </div>
          <span class="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
            ● 8 Key Zones Indexed
          </span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          ${inst.mapLocations.map(loc => `
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 transition-colors">
              <div class="flex items-center justify-between mb-2">
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-mono">${loc.code}</span>
                <span class="text-[11px] text-slate-400">${loc.coords}</span>
              </div>
              <h4 class="text-xs font-bold text-slate-900 dark:text-white mb-1">${escapeHtml(loc.name)}</h4>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">${escapeHtml(loc.desc)}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Official Administrative Contact Directory (Feature 15) -->
      <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h2 class="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <i data-lucide="phone-call" class="w-5 h-5 text-indigo-500"></i>
          <span>Official Campus Contact Directory</span>
        </h2>
        <div class="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
          ${inst.contactDirectory.map(c => `
            <div class="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div class="font-bold text-slate-900 dark:text-white">${escapeHtml(c.department)}</div>
                <div class="text-slate-400 text-[11px]">${escapeHtml(c.room)}</div>
              </div>
              <div class="flex items-center gap-4 text-slate-600 dark:text-slate-300">
                <span class="font-mono">${escapeHtml(c.phone)}</span>
                <span class="text-indigo-600 dark:text-indigo-400 font-semibold">${escapeHtml(c.email)}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
}
