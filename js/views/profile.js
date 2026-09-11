// CampusHub Student Profile & Settings View
import { store } from '../store.js';
import { escapeHtml, showToast, triggerConfetti } from '../utils.js';

export function renderProfile(container) {
  const profile = store.getProfile();
  const allClubs = store.getClubs();
  const joinedClubs = allClubs.filter(c => (profile.joinedClubs || []).includes(c.id));

  container.innerHTML = `
    <div class="space-y-6 max-w-5xl mx-auto">

      <!-- Header & Edit Profile Action -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Student Profile</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage your academic credentials, skills portfolio, joined societies, and local data backup.</p>
        </div>

        <button id="btn-edit-profile" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-md shadow-indigo-600/20 transition-all">
          <i data-lucide="edit-3" class="w-4 h-4"></i>
          <span>Edit Profile</span>
        </button>
      </div>

      <!-- Main Profile Hero Card -->
      <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm relative overflow-hidden">
        <!-- Top decorative banner background -->
        <div class="h-32 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative">
          <div class="absolute right-6 bottom-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold">
            ${profile.semester} • ${profile.year}
          </div>
        </div>

        <div class="relative flex flex-col sm:flex-row items-start sm:items-end gap-6 pt-2">
          <!-- Avatar -->
          <div class="relative -mt-16 sm:-mt-20">
            <img src="${profile.avatar}" alt="${escapeHtml(profile.name)}" class="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl object-cover border-4 border-white dark:border-slate-900 shadow-xl shadow-black/10">
            <button id="btn-change-avatar" class="absolute bottom-1 right-1 p-1.5 rounded-full bg-indigo-600 text-white shadow-md hover:bg-indigo-700 transition-colors" title="Change Avatar URL">
              <i data-lucide="camera" class="w-3.5 h-3.5"></i>
            </button>
          </div>

          <!-- Name & Core Info -->
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-3 flex-wrap">
              <h2 class="text-2xl font-black text-slate-900 dark:text-white">${escapeHtml(profile.name)}</h2>
              <span class="px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-bold border border-indigo-200 dark:border-indigo-800">
                ${escapeHtml(profile.rollNo)}
              </span>
            </div>

            <p class="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
              ${escapeHtml(profile.degree)}
            </p>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              ${escapeHtml(profile.department)} • ${escapeHtml(profile.email)}
            </p>

            ${profile.bio ? `
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 max-w-2xl leading-relaxed">
                ${escapeHtml(profile.bio)}
              </p>
            ` : ''}
          </div>

          <!-- Quick Stats Pill -->
          <div class="flex sm:flex-col items-center sm:items-end gap-3 shrink-0">
            <div class="text-right">
              <span class="text-[10px] uppercase font-bold text-slate-400">Overall CGPA</span>
              <div class="text-2xl font-black text-indigo-600 dark:text-indigo-400 font-mono">${profile.currentCgpa}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 2-Column Grid: Skills & Achievements -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <!-- Skills & Interests Card -->
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <i data-lucide="cpu" class="w-4 h-4"></i>
                </div>
                <h3 class="text-base font-extrabold text-slate-900 dark:text-white">Skills & Interests</h3>
              </div>
              <span class="text-xs text-slate-400">${profile.skills.length} skills</span>
            </div>

            <!-- Tag cloud -->
            <div class="flex flex-wrap gap-2 mb-4" id="skills-container">
              ${profile.skills.map(skill => `
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold group">
                  <span>${escapeHtml(skill)}</span>
                  <button data-skill="${escapeHtml(skill)}" class="btn-remove-skill text-slate-400 hover:text-red-500 transition-colors">
                    &times;
                  </button>
                </span>
              `).join('')}
            </div>
          </div>

          <!-- Add skill form -->
          <form id="add-skill-form" class="flex gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
            <input type="text" id="new-skill-input" placeholder="Add a skill or interest..." class="flex-1 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none">
            <button type="submit" class="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-sm transition-colors">
              Add
            </button>
          </form>
        </div>

        <!-- Academic & Campus Achievements -->
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <i data-lucide="award" class="w-4 h-4"></i>
              </div>
              <h3 class="text-base font-extrabold text-slate-900 dark:text-white">Honors & Achievements</h3>
            </div>
            <span class="text-xs text-slate-400">${profile.achievements.length} badges</span>
          </div>

          <div class="space-y-3">
            ${profile.achievements.map(ach => `
              <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-center gap-3.5">
                <span class="text-2xl">${ach.badge || '🎖️'}</span>
                <div class="min-w-0 flex-1">
                  <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">${escapeHtml(ach.title)}</h4>
                  <span class="text-[11px] text-slate-400">${escapeHtml(ach.date)}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>

      <!-- Joined Campus Clubs -->
      <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl bg-cyan-50 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
              <i data-lucide="users" class="w-4 h-4"></i>
            </div>
            <h3 class="text-base font-extrabold text-slate-900 dark:text-white">Joined Campus Clubs</h3>
          </div>
          <a href="#clubs" class="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline">Explore More Clubs</a>
        </div>

        ${joinedClubs.length > 0 ? `
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            ${joinedClubs.map(club => `
              <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 flex items-center justify-between gap-3">
                <div class="flex items-center gap-3 min-w-0">
                  <span class="text-2xl shrink-0">${club.logo || '🎓'}</span>
                  <div class="min-w-0">
                    <h4 class="text-xs font-bold text-slate-900 dark:text-white truncate">${escapeHtml(club.name)}</h4>
                    <span class="text-[11px] text-slate-400">${club.category}</span>
                  </div>
                </div>

                <a href="#clubs" class="p-1.5 rounded-lg text-slate-400 hover:text-cyan-600 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  <i data-lucide="chevron-right" class="w-4 h-4"></i>
                </a>
              </div>
            `).join('')}
          </div>
        ` : `
          <div class="text-center py-6 text-slate-400 text-xs font-medium">
            You haven't joined any campus clubs yet. <a href="#clubs" class="text-indigo-600 dark:text-indigo-400 underline">Browse Club Directory</a>
          </div>
        `}
      </div>

      <!-- Local Data Management & Backup -->
      <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <h3 class="text-base font-extrabold text-slate-900 dark:text-white mb-2">Local Data Management</h3>
        <p class="text-xs text-slate-500 dark:text-slate-400 mb-4">
          All your records are safely saved in your browser's local storage. You can backup your data as JSON or restore realistic sample data anytime.
        </p>

        <div class="flex flex-wrap items-center gap-3">
          <button id="btn-export-data" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center gap-2 transition-colors">
            <i data-lucide="download" class="w-4 h-4"></i>
            <span>Export Data (JSON)</span>
          </button>

          <label class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center gap-2 transition-colors cursor-pointer">
            <i data-lucide="upload" class="w-4 h-4"></i>
            <span>Import Data (JSON)</span>
            <input type="file" id="input-import-data" accept=".json" class="sr-only">
          </label>

          <button id="btn-reset-demo" class="px-4 py-2 rounded-xl bg-red-50 hover:bg-red-100 dark:bg-red-950/60 dark:hover:bg-red-900 text-red-600 dark:text-red-300 font-bold text-xs flex items-center gap-2 transition-colors">
            <i data-lucide="refresh-cw" class="w-4 h-4"></i>
            <span>Reset to Demo Data</span>
          </button>
        </div>
      </div>

      <!-- Edit Profile Modal -->
      <div id="profile-modal" class="fixed inset-0 z-50 hidden bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 modal-enter max-h-[90vh] overflow-y-auto">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-extrabold text-slate-900 dark:text-white">Edit Student Profile</h3>
            <button id="profile-modal-close" class="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <form id="profile-form" class="space-y-4">
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Full Name *</label>
                <input type="text" id="form-prof-name" required value="${escapeHtml(profile.name)}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Roll / ID Number *</label>
                <input type="text" id="form-prof-roll" required value="${escapeHtml(profile.rollNo)}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Degree / Course *</label>
                <input type="text" id="form-prof-degree" required value="${escapeHtml(profile.degree)}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Department</label>
                <input type="text" id="form-prof-dept" value="${escapeHtml(profile.department)}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Year</label>
                <input type="text" id="form-prof-year" value="${escapeHtml(profile.year)}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Semester</label>
                <input type="text" id="form-prof-sem" value="${escapeHtml(profile.semester)}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Email</label>
              <input type="email" id="form-prof-email" value="${escapeHtml(profile.email)}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Avatar Image URL</label>
              <input type="url" id="form-prof-avatar" value="${escapeHtml(profile.avatar)}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Short Bio</label>
              <textarea id="form-prof-bio" rows="3" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">${escapeHtml(profile.bio)}</textarea>
            </div>

            <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button type="button" id="profile-modal-cancel" class="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-semibold">
                Cancel
              </button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold shadow-md shadow-indigo-600/25">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  `;

  // Skills tag removal
  container.querySelectorAll('.btn-remove-skill').forEach(btn => {
    btn.onclick = () => {
      const skill = btn.dataset.skill;
      store.removeSkill(skill);
      renderProfile(container);
    };
  });

  // Add skill form
  const addSkillForm = container.querySelector('#add-skill-form');
  if (addSkillForm) {
    addSkillForm.onsubmit = (e) => {
      e.preventDefault();
      const input = container.querySelector('#new-skill-input');
      const val = input.value.trim();
      if (val) {
        store.addSkill(val);
        input.value = '';
        renderProfile(container);
      }
    };
  }

  // Modal logic
  const modal = container.querySelector('#profile-modal');
  const form = container.querySelector('#profile-form');
  const closeBtn = container.querySelector('#profile-modal-close');
  const cancelBtn = container.querySelector('#profile-modal-cancel');
  const btnEdit = container.querySelector('#btn-edit-profile');
  const btnChangeAvatar = container.querySelector('#btn-change-avatar');

  if (btnEdit) btnEdit.onclick = () => modal.classList.remove('hidden');
  if (btnChangeAvatar) btnChangeAvatar.onclick = () => modal.classList.remove('hidden');
  if (closeBtn) closeBtn.onclick = () => modal.classList.add('hidden');
  if (cancelBtn) cancelBtn.onclick = () => modal.classList.add('hidden');

  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const updates = {
        name: container.querySelector('#form-prof-name').value.trim(),
        rollNo: container.querySelector('#form-prof-roll').value.trim(),
        degree: container.querySelector('#form-prof-degree').value.trim(),
        department: container.querySelector('#form-prof-dept').value.trim(),
        year: container.querySelector('#form-prof-year').value.trim(),
        semester: container.querySelector('#form-prof-sem').value.trim(),
        email: container.querySelector('#form-prof-email').value.trim(),
        avatar: container.querySelector('#form-prof-avatar').value.trim() || profile.avatar,
        bio: container.querySelector('#form-prof-bio').value.trim()
      };

      store.updateProfile(updates);
      showToast('Profile updated successfully!', 'success');
      triggerConfetti();
      modal.classList.add('hidden');
      renderProfile(container);
    };
  }

  // Export JSON
  const btnExport = container.querySelector('#btn-export-data');
  if (btnExport) {
    btnExport.onclick = () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(store.exportDataJson());
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `campushub_backup_${new Date().toISOString().slice(0, 10)}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast('Data exported as JSON file', 'success');
    };
  }

  // Import JSON
  const inputImport = container.querySelector('#input-import-data');
  if (inputImport) {
    inputImport.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const success = store.importDataJson(event.target.result);
          if (success) {
            showToast('Backup restored successfully!', 'success');
            renderProfile(container);
          } else {
            showToast('Failed to parse backup file', 'error');
          }
        };
        reader.readAsText(file);
      }
    };
  }

  // Reset to Demo Data
  const btnReset = container.querySelector('#btn-reset-demo');
  if (btnReset) {
    btnReset.onclick = () => {
      if (confirm('Reset all CampusHub data to the default sample dataset? Any unsaved custom records will be replaced.')) {
        store.resetToSampleData();
        showToast('Reset to default demo data', 'info');
        renderProfile(container);
      }
    };
  }

  if (window.lucide) window.lucide.createIcons();
}
