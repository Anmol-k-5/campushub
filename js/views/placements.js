// ============================================================
// PLACEMENTS & CAREER PORTAL VIEW (Features 147 - 148)
// Corporate Drives, Job & Internship Engine, Skill Match
// ============================================================
import { store } from '../store.js';

export function renderPlacements(container) {
  let filterRole = 'all'; // 'all' | 'internship' | 'fulltime'
  let searchQuery = '';

  function render() {
    const placements = store.getPlacements();
    const profile = store.getProfile();
    const studentSkills = (profile.skills || []).map(s => s.toLowerCase());

    const filtered = placements.filter(job => {
      const matchRole =
        filterRole === 'all' ? true :
        filterRole === 'internship' ? job.role.toLowerCase().includes('intern') :
        !job.role.toLowerCase().includes('intern');

      const matchQuery =
        !searchQuery ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.skillsRequired.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchRole && matchQuery;
    });

    // Compute stats
    const totalDrives = placements.length;
    const appliedDrives = placements.filter(p => p.applied).length;

    container.innerHTML = `
      <div class="space-y-8 animate-fade-in pb-16">
        <!-- Header Banner -->
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-8 md:p-10 shadow-xl">
          <div class="relative z-10 max-w-2xl">
            <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-indigo-100 border border-white/20 inline-block mb-3">
              Features 147–148 • Corporate Relations & Placements
            </span>
            <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight">Training & Placement Cell</h1>
            <p class="mt-3 text-indigo-100 text-sm md:text-base leading-relaxed">
              Direct access to top-tier campus recruiters, AI-assisted skill matching, internship stipends, full-time offers, and real-time recruitment drive status.
            </p>
          </div>
          <div class="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        <!-- Institutional Placement Highlights -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div class="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm text-center">
            <span class="text-2xl md:text-3xl font-black text-indigo-600 dark:text-indigo-400">94.8%</span>
            <p class="text-xs font-semibold text-gray-500 uppercase mt-1">Placement Rate</p>
          </div>
          <div class="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm text-center">
            <span class="text-2xl md:text-3xl font-black text-emerald-600 dark:text-emerald-400">₹62 LPA</span>
            <p class="text-xs font-semibold text-gray-500 uppercase mt-1">Highest Package</p>
          </div>
          <div class="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm text-center">
            <span class="text-2xl md:text-3xl font-black text-blue-600 dark:text-blue-400">₹12.8 LPA</span>
            <p class="text-xs font-semibold text-gray-500 uppercase mt-1">Average Package</p>
          </div>
          <div class="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm text-center">
            <span class="text-2xl md:text-3xl font-black text-purple-600 dark:text-purple-400">180+</span>
            <p class="text-xs font-semibold text-gray-500 uppercase mt-1">Visiting Companies</p>
          </div>
        </div>

        <!-- Student Eligibility Card -->
        <div class="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-transparent p-6 rounded-2xl border border-indigo-200 dark:border-indigo-900/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
              ${profile.cgpa || '8.9'}
            </div>
            <div>
              <div class="flex items-center space-x-2">
                <h3 class="font-bold text-gray-900 dark:text-white text-base">${profile.name} • Eligibility Status</h3>
                <span class="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">All Clear (0 Backlogs)</span>
              </div>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                Current CGPA: <span class="font-bold text-gray-800 dark:text-gray-200">${profile.cgpa || '8.9'}</span> • Registered for ${profile.branch} (Batch 2023–27) • Applied Drives: <span class="font-bold text-indigo-600">${appliedDrives} / ${totalDrives}</span>
              </p>
            </div>
          </div>

          <div class="flex items-center space-x-2">
            <button class="px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-300 shadow-sm hover:border-indigo-500 transition-all flex items-center space-x-1.5">
              <i data-lucide="file-text" class="w-4 h-4 text-indigo-600"></i>
              <span>View Verified Resume</span>
            </button>
          </div>
        </div>

        <!-- Search & Filter Controls -->
        <div class="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div class="relative w-full sm:w-80">
            <i data-lucide="search" class="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5"></i>
            <input id="plc-search" type="text" placeholder="Search company, skills, or role..." value="${searchQuery}" class="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:border-indigo-500 dark:text-white" />
          </div>

          <div class="flex items-center space-x-2 w-full sm:w-auto overflow-x-auto no-scrollbar">
            <button id="flt-all" class="px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filterRole === 'all'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-800'
            }">All Opportunities</button>
            <button id="flt-intern" class="px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filterRole === 'internship'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-800'
            }">Internships Only</button>
            <button id="flt-fulltime" class="px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filterRole === 'fulltime'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-800'
            }">Full-Time Roles</button>
          </div>
        </div>

        <!-- Drives Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${filtered.map(job => {
            // Calculate skill match
            const matchedSkills = job.skillsRequired.filter(s =>
              studentSkills.some(userSkill => userSkill.includes(s.toLowerCase()) || s.toLowerCase().includes(userSkill))
            );
            const matchScore = Math.round((matchedSkills.length / job.skillsRequired.length) * 100);

            return `
              <div class="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
                <div>
                  <div class="flex items-start justify-between">
                    <div>
                      <span class="px-2.5 py-1 rounded-full text-[11px] font-bold ${
                        job.role.toLowerCase().includes('intern')
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                          : 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300'
                      }">
                        ${job.role.toLowerCase().includes('intern') ? 'Summer Internship' : 'Full-Time Job'}
                      </span>
                      <h3 class="text-xl font-extrabold text-gray-900 dark:text-white mt-2">${job.company}</h3>
                      <p class="text-sm font-semibold text-indigo-600 dark:text-indigo-400">${job.role}</p>
                    </div>

                    <div class="text-right">
                      <span class="text-base font-black text-gray-900 dark:text-white">${job.ctc}</span>
                      <p class="text-[11px] text-gray-400">${job.location}</p>
                    </div>
                  </div>

                  <!-- Requirements & Match -->
                  <div class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 space-y-3">
                    <div class="flex items-center justify-between text-xs">
                      <span class="text-gray-500">Min CGPA Required: <span class="font-bold text-gray-800 dark:text-gray-200">${job.eligibilityCgpa}</span></span>
                      <div class="flex items-center space-x-1 font-semibold ${
                        matchScore >= 70 ? 'text-emerald-600' : 'text-amber-600'
                      }">
                        <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
                        <span>${matchScore}% Skill Match</span>
                      </div>
                    </div>

                    <!-- Skills Tags -->
                    <div class="flex flex-wrap gap-1.5">
                      ${job.skillsRequired.map(skill => {
                        const isMatch = studentSkills.some(us => us.includes(skill.toLowerCase()) || skill.toLowerCase().includes(us));
                        return `
                          <span class="text-[11px] px-2 py-0.5 rounded-md font-medium ${
                            isMatch
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800'
                              : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                          }">
                            ${isMatch ? '✓ ' : ''}${skill}
                          </span>
                        `;
                      }).join('')}
                    </div>
                  </div>
                </div>

                <div class="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <div class="text-xs text-gray-400">
                    <span>Deadline: <span class="font-semibold text-gray-700 dark:text-gray-300">${job.deadline}</span></span>
                  </div>

                  ${job.applied ? `
                    <div class="flex items-center space-x-2">
                      <span class="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-900 flex items-center space-x-1">
                        <i data-lucide="check" class="w-3.5 h-3.5"></i>
                        <span>${job.status}</span>
                      </span>
                    </div>
                  ` : `
                    <button data-apply-id="${job.id}" class="btn-apply-job px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-md transition-all flex items-center space-x-1.5">
                      <span>Apply Now</span>
                      <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                    </button>
                  `}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();

    // Event listeners
    document.getElementById('plc-search')?.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      render();
    });

    document.getElementById('flt-all')?.addEventListener('click', () => { filterRole = 'all'; render(); });
    document.getElementById('flt-intern')?.addEventListener('click', () => { filterRole = 'internship'; render(); });
    document.getElementById('flt-fulltime')?.addEventListener('click', () => { filterRole = 'fulltime'; render(); });

    container.querySelectorAll('.btn-apply-job').forEach(btn => {
      btn.addEventListener('click', () => {
        const jobId = btn.getAttribute('data-apply-id');
        store.applyPlacement(jobId);
        render();
      });
    });
  }

  render();
}
