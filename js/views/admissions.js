// CampusHub Admissions & Prospective Students Portal (Features 16-30)
import { store } from '../store.js';
import { escapeHtml, showToast, triggerConfetti } from '../utils.js';

let activeAdmissionsTab = 'apply'; // 'apply', 'tracker', 'eligibility', 'compare', 'fees', 'scholarships'

export function renderAdmissions(container) {
  const adm = store.getAdmissions();
  const courses = adm.courses || [];
  const scholarships = adm.scholarships || [];
  const deadlines = adm.deadlines || [];

  container.innerHTML = `
    <div class="space-y-6">

      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Admissions Portal 2026–27</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Undergraduate, Postgraduate, and Doctoral degree admissions, eligibility, and scholarship hub.</p>
        </div>

        <div class="flex items-center gap-2">
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-800">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            Admissions Open
          </span>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <div class="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar border-b border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-semibold">
        <button data-tab="apply" class="adm-tab-btn px-4 py-2.5 rounded-t-xl transition-all ${activeAdmissionsTab === 'apply' ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/30' : 'text-slate-500 hover:text-slate-900'}">
          Online Application Form
        </button>
        <button data-tab="tracker" class="adm-tab-btn px-4 py-2.5 rounded-t-xl transition-all ${activeAdmissionsTab === 'tracker' ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/30' : 'text-slate-500 hover:text-slate-900'}">
          Application Status Tracker
        </button>
        <button data-tab="eligibility" class="adm-tab-btn px-4 py-2.5 rounded-t-xl transition-all ${activeAdmissionsTab === 'eligibility' ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/30' : 'text-slate-500 hover:text-slate-900'}">
          Eligibility Checker
        </button>
        <button data-tab="compare" class="adm-tab-btn px-4 py-2.5 rounded-t-xl transition-all ${activeAdmissionsTab === 'compare' ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/30' : 'text-slate-500 hover:text-slate-900'}">
          Course Comparison
        </button>
        <button data-tab="fees" class="adm-tab-btn px-4 py-2.5 rounded-t-xl transition-all ${activeAdmissionsTab === 'fees' ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/30' : 'text-slate-500 hover:text-slate-900'}">
          Fee Calculator
        </button>
        <button data-tab="scholarships" class="adm-tab-btn px-4 py-2.5 rounded-t-xl transition-all ${activeAdmissionsTab === 'scholarships' ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/30' : 'text-slate-500 hover:text-slate-900'}">
          Scholarships
        </button>
      </div>

      <!-- Live Deadlines Ticker (Feature 24 & 29) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        ${deadlines.map(d => `
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="flex items-center justify-between text-[11px] font-bold text-indigo-600 dark:text-indigo-400 mb-1">
              <span>${d.status}</span>
              <span class="text-slate-400">📅 ${d.date}</span>
            </div>
            <h4 class="text-xs font-black text-slate-900 dark:text-white line-clamp-1">${escapeHtml(d.round)}</h4>
            <div class="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
              ${d.seatsRemaining} seats remaining
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Tab 1: Online Application Form (Feature 17) -->
      ${activeAdmissionsTab === 'apply' ? `
        <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div class="max-w-2xl mx-auto space-y-6">
            <div>
              <h2 class="text-lg font-bold text-slate-900 dark:text-white">Undergraduate & Postgraduate Admission Form</h2>
              <p class="text-xs text-slate-500 mt-0.5">Submit your academic details to receive instant Application ID and tracking status.</p>
            </div>

            <form id="adm-apply-form" class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Candidate Full Name *</label>
                  <input type="text" id="adm-name" required placeholder="e.g. Jordan Smith" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Email Address *</label>
                  <input type="email" id="adm-email" required placeholder="e.g. candidate@example.com" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Preferred Program *</label>
                  <select id="adm-course" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                    ${courses.map(c => `<option value="${escapeHtml(c.name)}">${escapeHtml(c.name)}</option>`).join('')}
                  </select>
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">12th / Diploma % *</label>
                  <input type="number" id="adm-pct" min="40" max="100" step="0.1" required placeholder="88.5" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Entrance Exam Score (JEE / CET)</label>
                  <input type="text" id="adm-entrance" placeholder="e.g. 94.2 Percentile" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Hostel Accommodation Needed?</label>
                  <select id="adm-hostel" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                    <option value="Yes">Yes, require on-campus hostel</option>
                    <option value="No">No, day scholar</option>
                  </select>
                </div>
              </div>

              <!-- Document Checklist (Feature 26) -->
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 text-xs">
                <div class="font-bold text-slate-800 dark:text-slate-200 mb-2">Mandatory Documents Self-Declaration:</div>
                <div class="grid grid-cols-2 gap-2 text-slate-600 dark:text-slate-300">
                  <label class="flex items-center gap-2"><input type="checkbox" required checked class="rounded text-indigo-600"> 10th & 12th Official Marksheet</label>
                  <label class="flex items-center gap-2"><input type="checkbox" required checked class="rounded text-indigo-600"> Entrance Exam Scorecard</label>
                  <label class="flex items-center gap-2"><input type="checkbox" required checked class="rounded text-indigo-600"> Identity Proof (Passport / Aadhaar)</label>
                  <label class="flex items-center gap-2"><input type="checkbox" required checked class="rounded text-indigo-600"> Conduct & Migration Certificate</label>
                </div>
              </div>

              <button type="submit" class="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-xl shadow-indigo-600/25 transition-all">
                Submit Online Application & Generate Application ID
              </button>
            </form>
          </div>
        </div>
      ` : ''}

      <!-- Tab 2: Application Status Tracker (Feature 18) -->
      ${activeAdmissionsTab === 'tracker' ? `
        <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div class="max-w-xl mx-auto space-y-6">
            <div class="text-center">
              <h2 class="text-lg font-bold text-slate-900 dark:text-white">Track Your Application Status</h2>
              <p class="text-xs text-slate-500 mt-1">Enter your Application ID to view live progress (e.g. Try: <strong>APP-2026-1048</strong>)</p>
            </div>

            <div class="flex gap-2">
              <input type="text" id="tracker-input" value="APP-2026-1048" placeholder="e.g. APP-2026-1048" class="flex-1 px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm font-mono uppercase focus:ring-2 focus:ring-indigo-500 focus:outline-none">
              <button id="tracker-search-btn" class="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition-all">
                Track
              </button>
            </div>

            <div id="tracker-result" class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-4">
              <!-- Rendered via JS -->
            </div>
          </div>
        </div>
      ` : ''}

      <!-- Tab 3: Eligibility Checker (Feature 19) -->
      ${activeAdmissionsTab === 'eligibility' ? `
        <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div class="max-w-xl mx-auto space-y-4">
            <h2 class="text-lg font-bold text-slate-900 dark:text-white text-center">Course Eligibility Calculator</h2>
            <div class="space-y-3 text-xs">
              <div>
                <label class="block font-bold mb-1">Select Intended Course</label>
                <select id="elig-course" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm">
                  ${courses.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
                </select>
              </div>
              <div>
                <label class="block font-bold mb-1">Your 12th / Qualifying Score (%)</label>
                <input type="number" id="elig-score" value="78" min="30" max="100" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm">
              </div>
              <button id="btn-check-elig" class="w-full py-3 rounded-xl bg-indigo-600 text-white font-bold text-xs">Calculate Eligibility</button>
              <div id="elig-result" class="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 text-emerald-800 dark:text-emerald-300 font-medium">
                ✓ You are eligible for B.Tech Computer Science & Engineering! Minimum cutoff requirement is 65%.
              </div>
            </div>
          </div>
        </div>
      ` : ''}

      <!-- Tab 4: Course Comparison Matrix (Feature 20) -->
      ${activeAdmissionsTab === 'compare' ? `
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-x-auto">
          <h2 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Program Comparison Matrix</h2>
          <table class="w-full text-left text-xs border-collapse">
            <thead>
              <tr class="border-b border-slate-200 dark:border-slate-800 text-slate-400">
                <th class="py-3 px-3">Program</th>
                <th class="py-3 px-3">Duration</th>
                <th class="py-3 px-3">Annual Tuition</th>
                <th class="py-3 px-3">Median CTC</th>
                <th class="py-3 px-3">Intake</th>
                <th class="py-3 px-3">Key Specialization</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
              ${courses.map(c => `
                <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td class="py-3 px-3 font-bold text-slate-900 dark:text-white">${c.name}</td>
                  <td class="py-3 px-3 text-slate-500">${c.degree}</td>
                  <td class="py-3 px-3 font-mono font-bold text-indigo-600">₹${c.feePerYear.toLocaleString()}</td>
                  <td class="py-3 px-3 font-mono font-bold text-emerald-600">${c.medianPackage}</td>
                  <td class="py-3 px-3">${c.intake} seats</td>
                  <td class="py-3 px-3 text-slate-500">${c.highlights}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      ` : ''}

      <!-- Tab 5: Fee Structure Calculator (Feature 22) -->
      ${activeAdmissionsTab === 'fees' ? `
        <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div class="max-w-xl mx-auto space-y-4">
            <h2 class="text-lg font-bold text-slate-900 dark:text-white text-center">Interactive Fee Estimator</h2>
            <div class="space-y-3 text-xs">
              <div>
                <label class="block font-bold mb-1">Select Degree</label>
                <select id="fee-calc-course" class="w-full px-3 py-2 rounded-xl border bg-white dark:bg-slate-800">
                  ${courses.map(c => `<option value="${c.feePerYear}">${c.name} (₹${c.feePerYear.toLocaleString()} / yr)</option>`).join('')}
                </select>
              </div>
              <div>
                <label class="block font-bold mb-1">Hostel Accommodation</label>
                <select id="fee-calc-hostel" class="w-full px-3 py-2 rounded-xl border bg-white dark:bg-slate-800">
                  <option value="0">Day Scholar (No Hostel)</option>
                  <option value="75000">Triple Occupancy Non-AC (₹75,000 / yr)</option>
                  <option value="95000">Double Occupancy AC (₹95,000 / yr)</option>
                  <option value="120000">Single Occupancy AC Suite (₹1,20,000 / yr)</option>
                </select>
              </div>
              <div class="pt-4 border-t flex items-center justify-between text-base font-black">
                <span>Estimated Annual Investment:</span>
                <span id="fee-total" class="text-indigo-600 font-mono text-xl">₹2,80,000</span>
              </div>
            </div>
          </div>
        </div>
      ` : ''}

      <!-- Tab 6: Scholarship Information (Feature 23) -->
      ${activeAdmissionsTab === 'scholarships' ? `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${scholarships.map(s => `
            <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                    ${s.waiver}
                  </span>
                  <span class="text-[11px] text-slate-400 font-semibold">${s.slots} Total Slots</span>
                </div>
                <h3 class="text-base font-bold text-slate-900 dark:text-white mt-1 mb-2">${s.title}</h3>
                <p class="text-xs text-slate-500 leading-relaxed"><strong>Eligibility Criteria:</strong> ${s.criteria}</p>
              </div>
              <button class="mt-4 w-full py-2.5 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 dark:bg-slate-800 text-xs font-bold transition-colors">
                Apply for Scholarship
              </button>
            </div>
          `).join('')}
        </div>
      ` : ''}

    </div>
  `;

  // Tab switching
  container.querySelectorAll('.adm-tab-btn').forEach(btn => {
    btn.onclick = () => {
      activeAdmissionsTab = btn.dataset.tab;
      renderAdmissions(container);
    };
  });

  // Application form submit
  const applyForm = container.querySelector('#adm-apply-form');
  if (applyForm) {
    applyForm.onsubmit = (e) => {
      e.preventDefault();
      const applicantName = container.querySelector('#adm-name').value.trim();
      const course = container.querySelector('#adm-course').value;
      const app = store.submitAdmissionApplication({ applicantName, course });

      triggerConfetti();
      showToast(`Application submitted! Your Application ID is ${app.id}`, 'success');
      activeAdmissionsTab = 'tracker';
      renderAdmissions(container);

      // Auto populate tracker
      const trackerInput = container.querySelector('#tracker-input');
      if (trackerInput) {
        trackerInput.value = app.id;
        updateTrackerDisplay(app.id);
      }
    };
  }

  // Tracker logic
  function updateTrackerDisplay(appId) {
    const box = container.querySelector('#tracker-result');
    if (!box) return;

    const app = store.checkApplicationStatus(appId);
    if (!app) {
      box.innerHTML = `
        <div class="text-center py-4 text-red-500 text-xs font-semibold">
          No application found matching ID "${escapeHtml(appId)}". Please check your ID and try again.
        </div>
      `;
      return;
    }

    box.innerHTML = `
      <div class="flex items-center justify-between border-b pb-3 border-slate-200 dark:border-slate-700">
        <div>
          <span class="text-[10px] uppercase font-bold text-slate-400">Application Number</span>
          <div class="text-sm font-black font-mono text-indigo-600">${app.id}</div>
        </div>
        <span class="px-3 py-1 rounded-full text-xs font-bold ${app.status === 'Accepted' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}">
          ${app.status}
        </span>
      </div>

      <div class="space-y-2 text-xs">
        <div><strong>Applicant Name:</strong> ${escapeHtml(app.applicantName)}</div>
        <div><strong>Course:</strong> ${escapeHtml(app.course)}</div>
        <div><strong>Date Submitted:</strong> ${app.dateSubmitted}</div>
        <div class="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200">
          <strong>Current Stage:</strong> ${escapeHtml(app.verificationStage)}<br>
          <span class="text-[11px] text-slate-500">${escapeHtml(app.remarks)}</span>
        </div>
      </div>
    `;
  }

  const trackerBtn = container.querySelector('#tracker-search-btn');
  if (trackerBtn) {
    trackerBtn.onclick = () => {
      const val = container.querySelector('#tracker-input').value.trim();
      updateTrackerDisplay(val);
    };
    // Run initially
    const initialInput = container.querySelector('#tracker-input');
    if (initialInput) updateTrackerDisplay(initialInput.value);
  }

  // Fee calculation logic
  const feeCourse = container.querySelector('#fee-calc-course');
  const feeHostel = container.querySelector('#fee-calc-hostel');
  const feeTotal = container.querySelector('#fee-total');
  function recalcFee() {
    if (!feeCourse || !feeHostel || !feeTotal) return;
    const t = (parseFloat(feeCourse.value) || 0) + (parseFloat(feeHostel.value) || 0);
    feeTotal.textContent = `₹${t.toLocaleString()}`;
  }
  if (feeCourse) feeCourse.onchange = recalcFee;
  if (feeHostel) feeHostel.onchange = recalcFee;
  recalcFee();

  if (window.lucide) window.lucide.createIcons();
}
