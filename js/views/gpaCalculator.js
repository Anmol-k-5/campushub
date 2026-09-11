// CampusHub CGPA / GPA Calculator View
import { store } from '../store.js';
import {
  escapeHtml,
  GRADE_POINTS_MAP,
  calculateSemesterGpa,
  calculateCumulativeCgpa,
  estimateRequiredGpa,
  showToast,
  triggerConfetti
} from '../utils.js';

export function renderGpaCalculator(container) {
  const gpaRecords = store.getGpaRecords();
  const currentCourses = gpaRecords.currentSemesterCourses || [];
  const semesters = gpaRecords.semesters || [];

  // Calculate current semester GPA
  const semGpaResult = calculateSemesterGpa(currentCourses);

  // Calculate past semesters CGPA
  const pastCgpaResult = calculateCumulativeCgpa(semesters);

  // Calculate overall cumulative CGPA including current semester
  const combinedSemesters = [
    ...semesters,
    { gpa: semGpaResult.gpa, credits: semGpaResult.totalCredits }
  ];
  const overallCgpaResult = calculateCumulativeCgpa(combinedSemesters);

  container.innerHTML = `
    <div class="space-y-6">

      <!-- Header & Top Action -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">CGPA / GPA Calculator</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Real-time semester SGPA, cumulative CGPA, and target graduation estimator.</p>
        </div>

        <button id="btn-add-course" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold shadow-md shadow-violet-600/20 transition-all">
          <i data-lucide="plus" class="w-4 h-4"></i>
          <span>Add Course Row</span>
        </button>
      </div>

      <!-- Results Summary Hero Banner -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Semester SGPA Card -->
        <div class="p-6 rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-700 text-white shadow-xl shadow-violet-600/20 flex flex-col justify-between">
          <div>
            <div class="text-xs font-bold uppercase tracking-wider text-violet-200">Current Semester</div>
            <div class="text-4xl sm:text-5xl font-black mt-2 font-mono">${semGpaResult.formattedGpa}</div>
            <div class="text-xs font-semibold text-violet-100 mt-1">
              Semester GPA (SGPA) • ${semGpaResult.totalCredits} Credits
            </div>
          </div>
          <div class="pt-4 mt-4 border-t border-white/10 text-xs text-violet-200 flex items-center justify-between">
            <span>Based on ${currentCourses.length} courses</span>
            <span class="font-bold">Scale of 10.0</span>
          </div>
        </div>

        <!-- Cumulative CGPA Card -->
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <div class="text-xs font-bold uppercase tracking-wider text-slate-400">Cumulative CGPA</div>
            <div class="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mt-2 font-mono">
              ${overallCgpaResult.formattedCgpa}
            </div>
            <div class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
              Overall Across All Completed Semesters
            </div>
          </div>
          <div class="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
            <span>Total Credits: <strong>${overallCgpaResult.totalCredits}</strong></span>
            <span class="text-emerald-600 dark:text-emerald-400 font-bold">First Class with Distinction</span>
          </div>
        </div>

        <!-- Target Estimator Card -->
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <div class="text-xs font-bold uppercase tracking-wider text-slate-400">Target Goal Advisor</div>
            <div class="mt-2 space-y-2">
              <div class="flex items-center justify-between text-xs">
                <span class="text-slate-600 dark:text-slate-300">Target Graduating CGPA:</span>
                <input type="number" id="target-cgpa-input" value="9.0" step="0.1" min="5.0" max="10.0" class="w-16 px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-right">
              </div>
              <div class="flex items-center justify-between text-xs">
                <span class="text-slate-600 dark:text-slate-300">Remaining Credits (Future):</span>
                <input type="number" id="target-credits-input" value="44" min="1" max="120" class="w-16 px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-right">
              </div>
            </div>
          </div>

          <div id="target-result-box" class="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
            <!-- Dynamic calculation renders here -->
          </div>
        </div>

      </div>

      <!-- Current Semester Courses Table -->
      <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h2 class="text-lg font-bold text-slate-900 dark:text-white">Current Semester Courses</h2>
            <p class="text-xs text-slate-500">Edit course credits and letter grades to test different GPA scenarios</p>
          </div>
          <button id="btn-recalculate" class="px-3 py-1.5 rounded-xl bg-violet-50 dark:bg-violet-950 text-violet-700 dark:text-violet-300 text-xs font-bold hover:bg-violet-100 transition-colors">
            ↻ Recalculate
          </button>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr class="border-b border-slate-200 dark:border-slate-800 text-slate-400 uppercase text-[11px] font-bold">
                <th class="py-3 px-3">Code</th>
                <th class="py-3 px-3">Course Title</th>
                <th class="py-3 px-3 w-28">Credits</th>
                <th class="py-3 px-3 w-36">Grade</th>
                <th class="py-3 px-3 w-24">Points</th>
                <th class="py-3 px-3 w-16 text-right">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800/80">
              ${currentCourses.map((c, index) => {
                const gradePoint = c.gradePoint !== undefined ? c.gradePoint : (GRADE_POINTS_MAP[c.grade] || 0);

                return `
                  <tr class="course-row hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors" data-course-id="${c.id}">
                    <td class="py-3 px-3">
                      <input type="text" class="course-code-input w-20 px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent text-xs font-semibold uppercase" value="${escapeHtml(c.code)}">
                    </td>
                    <td class="py-3 px-3">
                      <input type="text" class="course-name-input w-full min-w-[140px] px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent text-xs font-medium" value="${escapeHtml(c.name)}">
                    </td>
                    <td class="py-3 px-3">
                      <select class="course-credits-select w-full px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent text-xs font-bold">
                        ${[1, 2, 3, 4, 5, 6].map(cr => `<option value="${cr}" ${c.credits === cr ? 'selected' : ''}>${cr} Credits</option>`).join('')}
                      </select>
                    </td>
                    <td class="py-3 px-3">
                      <select class="course-grade-select w-full px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent text-xs font-bold">
                        <option value="O" ${c.grade === 'O' ? 'selected' : ''}>O (Outstanding - 10)</option>
                        <option value="A+" ${c.grade === 'A+' ? 'selected' : ''}>A+ (Excellent - 9)</option>
                        <option value="A" ${c.grade === 'A' ? 'selected' : ''}>A (Very Good - 8)</option>
                        <option value="B+" ${c.grade === 'B+' ? 'selected' : ''}>B+ (Good - 7)</option>
                        <option value="B" ${c.grade === 'B' ? 'selected' : ''}>B (Above Avg - 6)</option>
                        <option value="C" ${c.grade === 'C' ? 'selected' : ''}>C (Pass - 5)</option>
                        <option value="F" ${c.grade === 'F' ? 'selected' : ''}>F (Fail - 0)</option>
                      </select>
                    </td>
                    <td class="py-3 px-3 font-mono font-bold text-violet-600 dark:text-violet-400">
                      ${gradePoint * c.credits} pts
                    </td>
                    <td class="py-3 px-3 text-right">
                      <button data-delete-id="${c.id}" class="delete-course-btn p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" title="Delete Course">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                      </button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>

        <div class="flex items-center justify-between pt-4 mt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
          <span class="text-slate-500">Total Semester Credits: <strong class="text-slate-800 dark:text-slate-200">${semGpaResult.totalCredits}</strong></span>
          <button id="btn-save-courses" class="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold transition-all shadow-sm">
            Save Course List
          </button>
        </div>
      </div>

      <!-- Past Semesters History & Grade Scale Guide -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <!-- Past Semesters Card -->
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-base font-bold text-slate-900 dark:text-white">Past Semesters History</h3>
            <span class="text-xs font-semibold text-slate-500">CGPA: ${pastCgpaResult.formattedCgpa}</span>
          </div>

          <div class="space-y-2">
            ${semesters.map((sem, idx) => `
              <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between text-xs">
                <span class="font-bold text-slate-700 dark:text-slate-300">Semester ${sem.semNumber || (idx + 1)}</span>
                <div class="flex items-center gap-4">
                  <span class="text-slate-500">${sem.credits} credits</span>
                  <span class="font-mono font-bold text-slate-900 dark:text-white">${parseFloat(sem.gpa).toFixed(2)} SGPA</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Official Grade Scale Guide -->
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <h3 class="text-base font-bold text-slate-900 dark:text-white mb-4">Standard 10-Point Grading Scale</h3>
          
          <div class="grid grid-cols-2 gap-2 text-xs">
            <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 flex justify-between">
              <span class="font-bold">O (Outstanding)</span>
              <span class="font-mono text-indigo-600 dark:text-indigo-400 font-bold">10 pts</span>
            </div>
            <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 flex justify-between">
              <span class="font-bold">A+ (Excellent)</span>
              <span class="font-mono text-indigo-600 dark:text-indigo-400 font-bold">9 pts</span>
            </div>
            <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 flex justify-between">
              <span class="font-bold">A (Very Good)</span>
              <span class="font-mono text-indigo-600 dark:text-indigo-400 font-bold">8 pts</span>
            </div>
            <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 flex justify-between">
              <span class="font-bold">B+ (Good)</span>
              <span class="font-mono text-indigo-600 dark:text-indigo-400 font-bold">7 pts</span>
            </div>
            <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 flex justify-between">
              <span class="font-bold">B (Above Average)</span>
              <span class="font-mono text-indigo-600 dark:text-indigo-400 font-bold">6 pts</span>
            </div>
            <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 flex justify-between">
              <span class="font-bold">C (Pass)</span>
              <span class="font-mono text-indigo-600 dark:text-indigo-400 font-bold">5 pts</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  `;

  // Dynamic target CGPA estimation calculation
  function updateTargetEstimation() {
    const targetCgpaInput = container.querySelector('#target-cgpa-input');
    const targetCreditsInput = container.querySelector('#target-credits-input');
    const targetBox = container.querySelector('#target-result-box');

    if (!targetCgpaInput || !targetCreditsInput || !targetBox) return;

    const targetCgpa = parseFloat(targetCgpaInput.value) || 9.0;
    const remainingCredits = parseFloat(targetCreditsInput.value) || 44;
    const completedCredits = overallCgpaResult.totalCredits;
    const currentCgpa = overallCgpaResult.cgpa;

    const estimation = estimateRequiredGpa(currentCgpa, completedCredits, remainingCredits, targetCgpa);

    if (estimation) {
      if (estimation.isAchievable) {
        targetBox.innerHTML = `
          <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300">
            You need an average SGPA of <strong class="font-mono text-sm">${estimation.formattedRequiredGpa}</strong> across your remaining ${remainingCredits} credits to graduate with a <strong>${targetCgpa} CGPA</strong>.
          </div>
        `;
      } else {
        targetBox.innerHTML = `
          <div class="p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300">
            A target CGPA of ${targetCgpa} requires an SGPA of ${estimation.formattedRequiredGpa}, which exceeds the 10.0 scale maximum.
          </div>
        `;
      }
    }
  }

  updateTargetEstimation();

  const targetInput = container.querySelector('#target-cgpa-input');
  const remCreditsInput = container.querySelector('#target-credits-input');
  if (targetInput) targetInput.oninput = updateTargetEstimation;
  if (remCreditsInput) remCreditsInput.oninput = updateTargetEstimation;

  // Add course row
  const btnAddCourse = container.querySelector('#btn-add-course');
  if (btnAddCourse) {
    btnAddCourse.onclick = () => {
      store.addGpaCourse({
        code: 'CS' + Math.floor(300 + Math.random() * 90),
        name: 'Elective Course',
        credits: 3,
        grade: 'A',
        gradePoint: 8
      });
      showToast('Course added to calculator', 'info');
      renderGpaCalculator(container);
    };
  }

  // Delete course
  container.querySelectorAll('.delete-course-btn').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.deleteId;
      store.deleteGpaCourse(id);
      renderGpaCalculator(container);
    };
  });

  // Save modified courses table
  function syncTableData() {
    const rows = container.querySelectorAll('.course-row');
    const updatedCourses = [];

    rows.forEach(row => {
      const id = row.dataset.courseId;
      const code = row.querySelector('.course-code-input').value.trim();
      const name = row.querySelector('.course-name-input').value.trim();
      const credits = parseFloat(row.querySelector('.course-credits-select').value) || 3;
      const grade = row.querySelector('.course-grade-select').value;
      const gradePoint = GRADE_POINTS_MAP[grade] || 0;

      updatedCourses.push({ id, code, name, credits, grade, gradePoint });
    });

    store.updateCurrentCourses(updatedCourses);
  }

  const btnRecalculate = container.querySelector('#btn-recalculate');
  if (btnRecalculate) {
    btnRecalculate.onclick = () => {
      syncTableData();
      renderGpaCalculator(container);
    };
  }

  const btnSaveCourses = container.querySelector('#btn-save-courses');
  if (btnSaveCourses) {
    btnSaveCourses.onclick = () => {
      syncTableData();
      showToast('Course list and SGPA saved!', 'success');
      triggerConfetti();
      renderGpaCalculator(container);
    };
  }

  // Live recalculate on dropdown change
  container.querySelectorAll('.course-grade-select, .course-credits-select').forEach(elem => {
    elem.onchange = () => {
      syncTableData();
      renderGpaCalculator(container);
    };
  });

  if (window.lucide) window.lucide.createIcons();
}
