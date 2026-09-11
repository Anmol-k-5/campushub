// ============================================================
// ADMIN ANALYTICS & ROLE SWITCHER VIEW (Features 149 - 150)
// Executive Dashboard, Department Matrix & Role Modes
// ============================================================
import { store } from '../store.js';

export function renderAdminAnalytics(container) {
  function render() {
    const metrics = store.getAdminMetrics();
    const currentRole = store.getRole();
    const depts = metrics.departmentBreakdown || [];
    const trends = metrics.placementTrend || [];
    const logs = metrics.systemLogs || [];

    container.innerHTML = `
      <div class="space-y-8 animate-fade-in pb-16">
        <!-- Header Banner -->
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-gray-900 to-zinc-950 text-white p-8 md:p-10 shadow-xl border border-gray-800">
          <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div class="max-w-xl">
              <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md text-amber-300 border border-amber-400/20 inline-block mb-3">
                Features 149–150 • Executive Institutional Analytics
              </span>
              <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight">Executive Management Portal</h1>
              <p class="mt-3 text-gray-300 text-sm md:text-base leading-relaxed">
                Central command console for institutional governance, academic accreditation, real-time KPI metrics, and role-based persona switching.
              </p>
            </div>

            <!-- Role Switcher Control -->
            <div class="bg-gray-800/80 backdrop-blur-md p-4 rounded-2xl border border-gray-700 shadow-lg space-y-2 shrink-0">
              <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Active User Persona</span>
              <div class="grid grid-cols-2 gap-2">
                ${['Student', 'Faculty', 'Admin', 'Applicant'].map(role => `
                  <button data-role="${role}" class="btn-role-switch px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
                    currentRole === role
                      ? 'bg-amber-500 text-gray-950 shadow-md ring-2 ring-amber-400'
                      : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                  }">
                    <i data-lucide="${
                      role === 'Student' ? 'graduation-cap' :
                      role === 'Faculty' ? 'user-check' :
                      role === 'Admin' ? 'shield-check' : 'compass'
                    }" class="w-3.5 h-3.5"></i>
                    <span>${role}</span>
                  </button>
                `).join('')}
              </div>
              <p class="text-[11px] text-gray-400 text-center mt-1">Simulating permissions for: <strong class="text-amber-300">${currentRole}</strong></p>
            </div>
          </div>
        </div>

        <!-- Institutional Key Performance Indicators (KPIs) -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <div class="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm text-center">
            <span class="text-2xl font-black text-gray-900 dark:text-white">${metrics.totalStudents || 8420}</span>
            <p class="text-[11px] font-semibold text-gray-500 uppercase mt-1">Total Students</p>
          </div>

          <div class="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm text-center">
            <span class="text-2xl font-black text-gray-900 dark:text-white">${metrics.facultyCount || 380}</span>
            <p class="text-[11px] font-semibold text-gray-500 uppercase mt-1">Full-Time Faculty</p>
          </div>

          <div class="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm text-center">
            <span class="text-2xl font-black text-emerald-600 dark:text-emerald-400">${metrics.placementRate || '94.8%'}</span>
            <p class="text-[11px] font-semibold text-gray-500 uppercase mt-1">Placement Rate</p>
          </div>

          <div class="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm text-center">
            <span class="text-2xl font-black text-blue-600 dark:text-blue-400">${metrics.avgAttendance || '82.4%'}</span>
            <p class="text-[11px] font-semibold text-gray-500 uppercase mt-1">Avg Attendance</p>
          </div>

          <div class="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm text-center">
            <span class="text-2xl font-black text-purple-600 dark:text-purple-400">${metrics.researchGrants || '₹14.2 Cr'}</span>
            <p class="text-[11px] font-semibold text-gray-500 uppercase mt-1">R&D Grants</p>
          </div>

          <div class="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm text-center">
            <span class="text-2xl font-black text-amber-500">${metrics.activeGrievances || 3}</span>
            <p class="text-[11px] font-semibold text-gray-500 uppercase mt-1">Open Tickets</p>
          </div>
        </div>

        <!-- Department Performance Matrix -->
        <div class="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white">Academic Departments Health Matrix</h3>
              <p class="text-xs text-gray-500">Student enrollment, faculty ratio, attendance, and placement performance by discipline</p>
            </div>
            <button onclick="alert('Exporting Departmental Audit Report (CSV)...')" class="px-3.5 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center space-x-1">
              <i data-lucide="download" class="w-3.5 h-3.5"></i>
              <span>Export CSV</span>
            </button>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-sm">
              <thead class="bg-gray-50 dark:bg-gray-800 text-xs text-gray-500 dark:text-gray-400 uppercase">
                <tr>
                  <th class="py-3 px-4 rounded-l-xl">Department</th>
                  <th class="py-3 px-4">Enrolled Students</th>
                  <th class="py-3 px-4">Faculty Staff</th>
                  <th class="py-3 px-4">Student-Faculty Ratio</th>
                  <th class="py-3 px-4">Avg Attendance</th>
                  <th class="py-3 px-4 rounded-r-xl">Placement Rate</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
                ${depts.map(d => `
                  <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                    <td class="py-3.5 px-4 font-bold text-gray-900 dark:text-white">${d.dept}</td>
                    <td class="py-3.5 px-4 text-gray-600 dark:text-gray-300">${d.students}</td>
                    <td class="py-3.5 px-4 text-gray-600 dark:text-gray-300">${d.faculty}</td>
                    <td class="py-3.5 px-4 font-mono text-xs text-indigo-600 dark:text-indigo-400 font-bold">${Math.round(d.students / d.faculty)}:1</td>
                    <td class="py-3.5 px-4">
                      <div class="flex items-center space-x-2">
                        <span class="text-xs font-bold text-gray-700 dark:text-gray-300">${d.avgAttendance}</span>
                        <div class="w-16 bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                          <div class="bg-blue-500 h-full" style="width: ${d.avgAttendance}"></div>
                        </div>
                      </div>
                    </td>
                    <td class="py-3.5 px-4 font-bold text-emerald-600 dark:text-emerald-400">${d.placementRate}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Historical Trends & System Logs -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Placement & CTC Growth Trends -->
          <div class="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm space-y-4">
            <h3 class="text-base font-bold text-gray-900 dark:text-white flex items-center space-x-2">
              <i data-lucide="trending-up" class="w-4 h-4 text-emerald-600"></i>
              <span>4-Year Placement & CTC Growth</span>
            </h3>

            <div class="space-y-3">
              ${trends.map(t => `
                <div class="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-between">
                  <div class="space-y-0.5">
                    <span class="font-bold text-gray-900 dark:text-white text-base">Class of ${t.year}</span>
                    <p class="text-xs text-gray-500">Placement Success: <strong class="text-emerald-600">${t.rate}%</strong></p>
                  </div>
                  <div class="text-right">
                    <p class="text-sm font-black text-gray-900 dark:text-white">Avg: ${t.avg}</p>
                    <p class="text-xs text-indigo-600 font-semibold">Max: ${t.highest}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Audit & System Event Logs -->
          <div class="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm space-y-4">
            <h3 class="text-base font-bold text-gray-900 dark:text-white flex items-center space-x-2">
              <i data-lucide="terminal" class="w-4 h-4 text-amber-500"></i>
              <span>Institutional Audit & Action Log</span>
            </h3>

            <div class="space-y-3">
              ${logs.map(log => `
                <div class="p-3 rounded-xl border border-gray-100 dark:border-gray-800 flex items-start space-x-3 text-xs">
                  <div class="w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                    log.type === 'academic' ? 'bg-blue-500' :
                    log.type === 'it' ? 'bg-purple-500' :
                    log.type === 'placement' ? 'bg-emerald-500' : 'bg-amber-500'
                  }"></div>
                  <div class="flex-1">
                    <p class="font-medium text-gray-800 dark:text-gray-200">${log.event}</p>
                    <span class="text-[11px] text-gray-400">${log.time}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Quick Administration Operations -->
        <div class="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-transparent p-6 rounded-3xl border border-amber-200 dark:border-amber-900/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 class="font-bold text-gray-900 dark:text-white">Administrative Emergency & Governance Action Hub</h4>
            <p class="text-xs text-gray-500">Trigger university-wide broadcasts or download NAAC/NIRF accreditation packages</p>
          </div>
          <div class="flex flex-wrap gap-2">
            <button onclick="alert('Campus Broadcast sent to all 8,420 registered student emails and mobile push notifications!')" class="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-gray-950 font-bold text-xs shadow-md transition-all flex items-center space-x-1.5">
              <i data-lucide="radio" class="w-4 h-4"></i>
              <span>Broadcast Campus Alert</span>
            </button>
            <button onclick="alert('Generating 2026 NAAC SSR & NIRF Institutional Data Archive...')" class="px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:border-amber-500 transition-all">
              NAAC / NIRF Dossier
            </button>
          </div>
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();

    // Role switcher listeners
    container.querySelectorAll('.btn-role-switch').forEach(btn => {
      btn.addEventListener('click', () => {
        const newRole = btn.getAttribute('data-role');
        store.setRole(newRole);
        render();
      });
    });
  }

  render();
}
