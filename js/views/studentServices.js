// ============================================================
// STUDENT SERVICES & GRIEVANCES VIEW (Features 131 - 140)
// Campus Services, Grievances, Leave Passes, Certificates & Health
// ============================================================
import { store } from '../store.js';

export function renderStudentServices(container) {
  let activeTab = 'grievances'; // 'grievances' | 'leave' | 'certificates' | 'medical'

  function render() {
    const grievances = store.getGrievances();
    const leaves = store.getLeaveApplications();
    const certificates = store.getCertificates();
    const medical = store.getMedicalCenter();
    const profile = store.getProfile();

    container.innerHTML = `
      <div class="space-y-8 animate-fade-in pb-16">
        <!-- Header Banner -->
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-700 via-emerald-800 to-cyan-900 text-white p-8 md:p-10 shadow-xl">
          <div class="relative z-10 max-w-2xl">
            <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-emerald-100 border border-white/20 inline-block mb-3">
              Features 131–140 • Campus Care & Welfare
            </span>
            <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight">Student Services & Grievance Cell</h1>
            <p class="mt-3 text-emerald-100 text-sm md:text-base leading-relaxed">
              Official institutional helpdesk, anonymous grievance redressal, hostel digital gate passes with warden QR, verified certificate issuance, and 24/7 campus emergency health center.
            </p>
          </div>
          <div class="absolute -bottom-10 -right-10 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        <!-- Navigation Tabs -->
        <div class="flex items-center space-x-2 border-b border-gray-200 dark:border-gray-800 pb-2 overflow-x-auto no-scrollbar">
          <button id="tab-btn-grievances" class="px-5 py-2.5 rounded-xl font-medium text-sm transition-all flex items-center space-x-2 whitespace-nowrap ${
            activeTab === 'grievances'
              ? 'bg-teal-600 text-white shadow-md'
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
          }">
            <i data-lucide="shield-alert" class="w-4 h-4"></i>
            <span>Grievance Cell & Tickets</span>
          </button>
          <button id="tab-btn-leave" class="px-5 py-2.5 rounded-xl font-medium text-sm transition-all flex items-center space-x-2 whitespace-nowrap ${
            activeTab === 'leave'
              ? 'bg-teal-600 text-white shadow-md'
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
          }">
            <i data-lucide="qr-code" class="w-4 h-4"></i>
            <span>Hostel Leave & Gate Pass</span>
          </button>
          <button id="tab-btn-certificates" class="px-5 py-2.5 rounded-xl font-medium text-sm transition-all flex items-center space-x-2 whitespace-nowrap ${
            activeTab === 'certificates'
              ? 'bg-teal-600 text-white shadow-md'
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
          }">
            <i data-lucide="file-check" class="w-4 h-4"></i>
            <span>Certificates & Letters</span>
          </button>
          <button id="tab-btn-medical" class="px-5 py-2.5 rounded-xl font-medium text-sm transition-all flex items-center space-x-2 whitespace-nowrap ${
            activeTab === 'medical'
              ? 'bg-teal-600 text-white shadow-md'
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
          }">
            <i data-lucide="heart-pulse" class="w-4 h-4"></i>
            <span>Medical & Emergency 24/7</span>
          </button>
        </div>

        <!-- Tab 1: Grievance Cell & Tickets -->
        ${activeTab === 'grievances' ? `
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Submit Form -->
            <div class="lg:col-span-1 bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <div class="flex items-center space-x-3 mb-5">
                <div class="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-900/30 text-teal-600 flex items-center justify-center">
                  <i data-lucide="message-square-plus" class="w-5 h-5"></i>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 dark:text-white">Lodge a Grievance / Ticket</h3>
                  <p class="text-xs text-gray-500 dark:text-gray-400">Escalated directly to Welfare Dean</p>
                </div>
              </div>

              <form id="grievance-form" class="space-y-4">
                <div>
                  <label class="block text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase mb-1">Issue Category</label>
                  <select id="grv-cat" class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal-500 dark:text-white">
                    <option value="IT & Wi-Fi">IT & Wi-Fi Network</option>
                    <option value="Hostel & Mess">Hostel & Mess Maintenance</option>
                    <option value="Academics & Timetable">Academics & Timetable</option>
                    <option value="Library & Lab Facilities">Library & Lab Facilities</option>
                    <option value="Harassment / Anti-Ragging">Harassment / Anti-Ragging (High Priority)</option>
                    <option value="General Administration">General Administration</option>
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase mb-1">Subject / Summary</label>
                  <input id="grv-title" required placeholder="e.g. Broken water purifier in Hostel 2" class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal-500 dark:text-white" />
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase mb-1">Target Department</label>
                  <input id="grv-dept" placeholder="e.g. Estate & Maintenance Office" value="Student Welfare & Maintenance Office" class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal-500 dark:text-white" />
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase mb-1">Detailed Description</label>
                  <textarea id="grv-desc" rows="3" placeholder="Provide specific room number, date, or context..." class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal-500 dark:text-white"></textarea>
                </div>

                <!-- Anonymous toggle -->
                <div class="p-3.5 rounded-xl bg-teal-50/60 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800/50 flex items-start space-x-3">
                  <input type="checkbox" id="grv-anon" class="mt-0.5 rounded text-teal-600 focus:ring-teal-500 h-4 w-4" />
                  <label for="grv-anon" class="text-xs text-teal-900 dark:text-teal-200 cursor-pointer">
                    <span class="font-semibold block">Submit Anonymously</span>
                    Your student ID, name, and email will be completely masked from the resolution officer.
                  </label>
                </div>

                <button type="submit" class="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center space-x-2">
                  <i data-lucide="send" class="w-4 h-4"></i>
                  <span>Submit Ticket</span>
                </button>
              </form>
            </div>

            <!-- Grievance List -->
            <div class="lg:col-span-2 space-y-4">
              <div class="flex items-center justify-between">
                <h3 class="font-bold text-gray-900 dark:text-white text-lg">My Submitted Tickets & Complaints</h3>
                <span class="text-xs font-medium text-gray-500 dark:text-gray-400">Total: ${grievances.length} tickets</span>
              </div>

              <div class="space-y-3">
                ${grievances.map(grv => `
                  <div class="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:border-teal-300 dark:hover:border-teal-700 transition-all">
                    <div class="flex items-start justify-between">
                      <div class="space-y-1">
                        <div class="flex items-center space-x-2">
                          <span class="font-mono text-xs font-bold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30 px-2 py-0.5 rounded">${grv.id}</span>
                          <span class="px-2 py-0.5 rounded text-xs font-semibold ${
                            grv.status === 'Resolved' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' :
                            grv.status === 'In Progress' ? 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300' :
                            'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                          }">${grv.status}</span>
                          ${grv.isAnonymous ? `<span class="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-[11px] px-2 py-0.5 rounded-full font-medium">Anonymous</span>` : ''}
                        </div>
                        <h4 class="font-bold text-gray-900 dark:text-white text-base">${grv.title}</h4>
                        <p class="text-xs text-gray-500 dark:text-gray-400">Category: <span class="font-medium text-gray-700 dark:text-gray-300">${grv.category}</span> • Department: <span class="font-medium text-gray-700 dark:text-gray-300">${grv.department}</span></p>
                      </div>
                      <span class="text-xs text-gray-400">${grv.date}</span>
                    </div>

                    <div class="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center space-x-2 text-xs">
                      <i data-lucide="check-circle-2" class="w-4 h-4 text-teal-600 shrink-0"></i>
                      <p class="text-gray-600 dark:text-gray-300 italic"><span class="font-semibold text-gray-800 dark:text-gray-200">Latest Action:</span> ${grv.resolutionNote || 'Under review by duty supervisor'}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        ` : ''}

        <!-- Tab 2: Hostel Leave & Gate Pass -->
        ${activeTab === 'leave' ? `
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Apply Leave -->
            <div class="lg:col-span-1 bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <div class="flex items-center space-x-3 mb-5">
                <div class="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center">
                  <i data-lucide="file-text" class="w-5 h-5"></i>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 dark:text-white">Request Gate Pass</h3>
                  <p class="text-xs text-gray-500 dark:text-gray-400">Automated Parent & Warden SMS</p>
                </div>
              </div>

              <form id="leave-form" class="space-y-4">
                <div>
                  <label class="block text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase mb-1">Pass Type</label>
                  <select id="lv-type" class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal-500 dark:text-white">
                    <option value="Out-Station / Weekend Pass">Out-Station / Weekend Pass</option>
                    <option value="Day Outing Pass (City)">Day Outing Pass (City)</option>
                    <option value="Emergency Medical Leave">Emergency Medical Leave</option>
                    <option value="Academic Conference / Hackathon">Academic Conference / Hackathon</option>
                  </select>
                </div>

                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="block text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase mb-1">Departure</label>
                    <input id="lv-from" type="date" required value="${new Date().toISOString().split('T')[0]}" class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:border-teal-500 dark:text-white" />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase mb-1">Expected Return</label>
                    <input id="lv-to" type="date" required class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:border-teal-500 dark:text-white" />
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase mb-1">Destination City / Place</label>
                  <input id="lv-dest" required placeholder="e.g. Mysuru / Home Residence" class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal-500 dark:text-white" />
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase mb-1">Reason for Leave</label>
                  <textarea id="lv-reason" rows="2" required placeholder="State exact reason..." class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal-500 dark:text-white"></textarea>
                </div>

                <div class="text-[11px] text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-xl border border-gray-100 dark:border-gray-800">
                  ⚠️ An OTP approval notification is automatically triggered to registered guardian mobile (+91 98450 99881).
                </div>

                <button type="submit" class="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center space-x-2">
                  <i data-lucide="send" class="w-4 h-4"></i>
                  <span>Submit Leave Request</span>
                </button>
              </form>
            </div>

            <!-- Passes List with QR Card -->
            <div class="lg:col-span-2 space-y-4">
              <h3 class="font-bold text-gray-900 dark:text-white text-lg">Active & Past Gate Passes</h3>

              <div class="space-y-4">
                ${leaves.map(lv => `
                  <div class="bg-white dark:bg-gray-900 rounded-2xl border border-teal-200 dark:border-teal-900 p-6 shadow-md relative overflow-hidden">
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-gray-100 dark:border-gray-800">
                      <div>
                        <div class="flex items-center space-x-2 mb-1">
                          <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300 font-mono">${lv.id}</span>
                          <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 flex items-center space-x-1">
                            <i data-lucide="check" class="w-3 h-3"></i>
                            <span>${lv.wardenStatus}</span>
                          </span>
                        </div>
                        <h4 class="font-bold text-gray-900 dark:text-white text-lg">${lv.type}</h4>
                        <p class="text-xs text-gray-500">Destination: <span class="font-semibold text-gray-700 dark:text-gray-300">${lv.destination}</span></p>
                      </div>

                      <!-- QR Code Preview -->
                      <div class="flex items-center space-x-3 bg-gray-50 dark:bg-gray-800 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700">
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=70x70&data=VERIFIED_GATEPASS_${lv.id}_${profile.rollNo}" alt="Gate Pass QR" class="w-14 h-14 rounded-lg bg-white p-1 shadow-sm" />
                        <div class="text-left">
                          <p class="text-[11px] font-bold text-gray-800 dark:text-gray-200 uppercase">Security Gate QR</p>
                          <p class="text-[10px] text-gray-500">Show to Main Gate Warden</p>
                          <span class="inline-block mt-1 text-[10px] text-emerald-600 font-bold bg-emerald-50 dark:bg-emerald-950 px-1.5 py-0.5 rounded">Active</span>
                        </div>
                      </div>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 text-xs">
                      <div>
                        <p class="text-gray-400">Valid From</p>
                        <p class="font-semibold text-gray-800 dark:text-gray-200">${lv.fromDate}</p>
                      </div>
                      <div>
                        <p class="text-gray-400">Valid To</p>
                        <p class="font-semibold text-gray-800 dark:text-gray-200">${lv.toDate}</p>
                      </div>
                      <div>
                        <p class="text-gray-400">Parent Consent</p>
                        <p class="font-semibold text-emerald-600">${lv.parentApprovalStatus}</p>
                      </div>
                      <div>
                        <p class="text-gray-400">Student</p>
                        <p class="font-semibold text-gray-800 dark:text-gray-200">${profile.name} (${profile.rollNo})</p>
                      </div>
                    </div>

                    <div class="mt-3 text-xs text-gray-500 bg-gray-50 dark:bg-gray-800/40 p-2 rounded-lg">
                      <span class="font-semibold">Reason:</span> ${lv.reason}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        ` : ''}

        <!-- Tab 3: Certificates & Letters -->
        ${activeTab === 'certificates' ? `
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Request Certificate -->
            <div class="lg:col-span-1 bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <div class="flex items-center space-x-3 mb-5">
                <div class="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center">
                  <i data-lucide="award" class="w-5 h-5"></i>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 dark:text-white">Apply for Certificate</h3>
                  <p class="text-xs text-gray-500 dark:text-gray-400">Digitally signed PDF with verification</p>
                </div>
              </div>

              <form id="cert-form" class="space-y-4">
                <div>
                  <label class="block text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase mb-1">Certificate Type</label>
                  <select id="cert-type" class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal-500 dark:text-white">
                    <option value="Bonafide Student Certificate">Bonafide Student Certificate</option>
                    <option value="Estimated Tuition Fee Letter">Estimated Tuition Fee Letter</option>
                    <option value="Medium of Instruction (English) Letter">Medium of Instruction (English) Letter</option>
                    <option value="No Objection Certificate (NOC) for Internship">No Objection Certificate (NOC) for Internship</option>
                    <option value="Character & Conduct Certificate">Character & Conduct Certificate</option>
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase mb-1">Purpose / Submission To</label>
                  <input id="cert-purpose" required placeholder="e.g. Passport Office / SBI Education Loan / Visa" class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal-500 dark:text-white" />
                </div>

                <div class="p-3 bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-xl text-xs text-blue-900 dark:text-blue-200">
                  ℹ️ Standard digital verification seal of St. Xavier's Institute of Technology is affixed automatically with a cryptographically verifiable serial number.
                </div>

                <button type="submit" class="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center space-x-2">
                  <i data-lucide="printer" class="w-4 h-4"></i>
                  <span>Generate Certificate</span>
                </button>
              </form>
            </div>

            <!-- Certificates List -->
            <div class="lg:col-span-2 space-y-4">
              <h3 class="font-bold text-gray-900 dark:text-white text-lg">My Issued Documents & Letters</h3>

              <div class="space-y-4">
                ${certificates.map(c => `
                  <div class="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:border-blue-300 dark:hover:border-blue-700 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div class="space-y-1">
                      <div class="flex items-center space-x-2">
                        <span class="px-2 py-0.5 rounded text-xs font-mono font-bold bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">${c.serialNo}</span>
                        <span class="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">${c.status}</span>
                      </div>
                      <h4 class="font-bold text-gray-900 dark:text-white text-base">${c.type}</h4>
                      <p class="text-xs text-gray-500 dark:text-gray-400">Purpose: <span class="text-gray-800 dark:text-gray-200 font-medium">${c.purpose}</span> • Applied: ${c.date}</p>
                    </div>

                    <button onclick="window.print()" class="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-teal-600 hover:text-white text-gray-700 dark:text-gray-200 text-xs font-semibold transition-all flex items-center space-x-2 shadow-sm shrink-0">
                      <i data-lucide="download" class="w-3.5 h-3.5"></i>
                      <span>Download PDF</span>
                    </button>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        ` : ''}

        <!-- Tab 4: Medical & Emergency 24/7 -->
        ${activeTab === 'medical' ? `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="md:col-span-2 bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-6">
              <div class="flex items-center justify-between">
                <div>
                  <span class="px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300 inline-block mb-2">Emergency Response Centre</span>
                  <h3 class="text-2xl font-black text-gray-900 dark:text-white">Campus Health & Wellness Hospital</h3>
                </div>
                <div class="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-900/30 text-red-600 flex items-center justify-center">
                  <i data-lucide="activity" class="w-6 h-6"></i>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <p class="text-xs text-gray-500 font-medium">Doctor on Duty</p>
                  <p class="text-base font-bold text-gray-900 dark:text-white mt-1">${medical.doctorOnDuty}</p>
                  <span class="text-[11px] text-emerald-600 font-semibold flex items-center space-x-1 mt-1">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping"></span>
                    <span>Currently In Consultation Room 1</span>
                  </span>
                </div>

                <div class="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <p class="text-xs text-gray-500 font-medium">Head Nurse</p>
                  <p class="text-base font-bold text-gray-900 dark:text-white mt-1">${medical.nurseOnDuty}</p>
                  <span class="text-[11px] text-gray-500 mt-1 block">Triage & First-Aid Station</span>
                </div>

                <div class="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <p class="text-xs text-gray-500 font-medium">Operating Hours</p>
                  <p class="text-sm font-bold text-gray-900 dark:text-white mt-1">${medical.timings}</p>
                </div>

                <div class="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <p class="text-xs text-gray-500 font-medium">Pharmacy Dispensary</p>
                  <p class="text-xs font-semibold text-emerald-600 mt-1">${medical.pharmacyStatus}</p>
                </div>
              </div>

              <div class="p-5 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0 animate-pulse">
                    <i data-lucide="phone-call" class="w-5 h-5"></i>
                  </div>
                  <div>
                    <p class="text-sm font-bold text-red-900 dark:text-red-200">Campus Ambulance Hotline (Direct Line)</p>
                    <p class="text-xs text-red-700 dark:text-red-300 font-mono">${medical.ambulanceHotline}</p>
                  </div>
                </div>
                <a href="tel:${medical.ambulanceHotline}" class="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md transition-all shrink-0">
                  Call Ambulance Now
                </a>
              </div>
            </div>

            <!-- Quick Contacts Card -->
            <div class="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
              <h4 class="font-bold text-gray-900 dark:text-white text-base">Key Emergency Numbers</h4>

              <div class="space-y-3 text-xs">
                <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800">
                  <p class="font-bold text-gray-800 dark:text-gray-200">Campus Security Main Gate</p>
                  <p class="text-gray-500 font-mono">+91 80 2345 6701</p>
                </div>

                <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800">
                  <p class="font-bold text-gray-800 dark:text-gray-200">Women's Safety / Anti-Harassment Cell</p>
                  <p class="text-gray-500 font-mono">+91 80 2345 6710 (24/7)</p>
                </div>

                <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800">
                  <p class="font-bold text-gray-800 dark:text-gray-200">Hostel Chief Warden</p>
                  <p class="text-gray-500 font-mono">+91 98450 11223</p>
                </div>

                <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800">
                  <p class="font-bold text-gray-800 dark:text-gray-200">Mental Health & Counselling Helpline</p>
                  <p class="text-gray-500 font-mono">1800-599-0019 (Toll Free)</p>
                </div>
              </div>
            </div>
          </div>
        ` : ''}
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();

    // Event listeners
    document.getElementById('tab-btn-grievances')?.addEventListener('click', () => { activeTab = 'grievances'; render(); });
    document.getElementById('tab-btn-leave')?.addEventListener('click', () => { activeTab = 'leave'; render(); });
    document.getElementById('tab-btn-certificates')?.addEventListener('click', () => { activeTab = 'certificates'; render(); });
    document.getElementById('tab-btn-medical')?.addEventListener('click', () => { activeTab = 'medical'; render(); });

    // Grievance submit
    document.getElementById('grievance-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('grv-title').value;
      const category = document.getElementById('grv-cat').value;
      const department = document.getElementById('grv-dept').value;
      const isAnonymous = document.getElementById('grv-anon').checked;

      store.submitGrievance({ title, category, department, isAnonymous });
      render();
    });

    // Leave submit
    document.getElementById('leave-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const type = document.getElementById('lv-type').value;
      const fromDate = document.getElementById('lv-from').value;
      const toDate = document.getElementById('lv-to').value;
      const destination = document.getElementById('lv-dest').value;
      const reason = document.getElementById('lv-reason').value;

      store.submitLeaveApplication({ type, fromDate, toDate, destination, reason });
      render();
    });

    // Certificate submit
    document.getElementById('cert-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const type = document.getElementById('cert-type').value;
      const purpose = document.getElementById('cert-purpose').value;

      store.requestCertificate({ type, purpose });
      render();
    });
  }

  render();
}
