// CampusHub State Store & Persistence Layer - Extended for 150 Features
import { initialData } from './sampleData.js';

const STORAGE_KEY = 'campushub_state_v2';
const THEME_KEY = 'campushub_theme';

class Store {
  constructor() {
    this.listeners = new Map();
    this.state = this.loadState();
    this.initTheme();
  }

  loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...initialData, ...parsed };
      }
    } catch (err) {
      console.warn('Could not parse saved state, resetting to initialData', err);
    }
    this.saveState(initialData);
    return JSON.parse(JSON.stringify(initialData));
  }

  saveState(stateToSave = this.state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    } catch (err) {
      console.error('Failed to save to localStorage:', err);
    }
  }

  subscribe(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event).add(callback);
    return () => this.listeners.get(event).delete(callback);
  }

  emit(event, data) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach(cb => {
        try { cb(data); } catch (e) { console.error(`Error in subscriber for ${event}:`, e); }
      });
    }
    if (this.listeners.has('*')) {
      this.listeners.get('*').forEach(cb => {
        try { cb({ event, data }); } catch (e) { console.error(`Error in wildcard subscriber:`, e); }
      });
    }
  }

  // Role Management (Feature 150)
  getRole() {
    return this.state.currentRole || 'student';
  }

  setRole(role) {
    this.state.currentRole = role;
    this.saveState();
    this.emit('role:changed', role);
  }

  // Theme Management
  initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const activeTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    this.setTheme(activeTheme);
  }

  setTheme(theme) {
    this.theme = theme;
    localStorage.setItem(THEME_KEY, theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    this.emit('theme:changed', theme);
  }

  toggleTheme() {
    const nextTheme = this.theme === 'dark' ? 'light' : 'dark';
    this.setTheme(nextTheme);
    return nextTheme;
  }

  getTheme() {
    return this.theme || 'light';
  }

  // Institutional Info (Features 1-15)
  getInstitution() {
    return this.state.institution;
  }

  // Admissions (Features 16-30)
  getAdmissions() {
    return this.state.admissions;
  }

  submitAdmissionApplication(appData) {
    const newId = 'APP-2026-' + Math.floor(1300 + Math.random() * 8000);
    const newApp = {
      id: newId,
      applicantName: appData.applicantName,
      course: appData.course,
      status: 'Submitted',
      dateSubmitted: new Date().toISOString().split('T')[0],
      verificationStage: 'Application Received & Awaiting Document Review',
      remarks: 'Application fees paid. Entrance score recorded.'
    };
    if (!this.state.admissions.applications) this.state.admissions.applications = [];
    this.state.admissions.applications.unshift(newApp);
    this.saveState();
    this.emit('admissions:updated', this.state.admissions);
    return newApp;
  }

  checkApplicationStatus(appId) {
    if (!this.state.admissions?.applications) return null;
    return this.state.admissions.applications.find(a => a.id.toUpperCase() === appId.trim().toUpperCase());
  }

  // Academic Exams & Assessment (Features 40, 42, 43)
  getExamTimetable() {
    return this.state.examTimetable || [];
  }

  getAssessmentMarks() {
    return this.state.assessmentMarks || [];
  }

  getAcademicCalendar() {
    return this.state.academicCalendar || [];
  }

  // Digital Library (Features 51-70)
  getBooks() {
    return this.state.libraryBooks || [];
  }

  toggleReserveBook(bookId) {
    const book = this.state.libraryBooks.find(b => b.id === bookId);
    if (book) {
      book.reservedByMe = !book.reservedByMe;
      this.saveState();
      this.emit('library:updated', this.state.libraryBooks);
      return book.reservedByMe;
    }
    return false;
  }

  getPyqs() {
    return this.state.pyqPapers || [];
  }

  getQuizzes() {
    return this.state.quizzes || [];
  }

  // Faculty Hub (Features 71-85)
  getFaculty() {
    return this.state.facultyMembers || [];
  }

  bookFacultyAppointment(data) {
    const newApt = {
      id: 'apt-' + Date.now(),
      facultyName: data.facultyName,
      studentName: this.state.profile.name,
      date: data.date,
      time: data.time,
      topic: data.topic,
      status: 'Confirmed'
    };
    if (!this.state.facultyAppointments) this.state.facultyAppointments = [];
    this.state.facultyAppointments.unshift(newApt);
    this.saveState();
    this.emit('faculty:updated', this.state.facultyAppointments);
    return newApt;
  }

  getFacultyAppointments() {
    return this.state.facultyAppointments || [];
  }

  // Hostel, Cafeteria & Bookings (Features 116-130)
  getMessMenu() {
    return this.state.messMenu;
  }

  getBusRoutes() {
    return this.state.busRoutes || [];
  }

  getFacilityBookings() {
    return this.state.facilityBookings || [];
  }

  bookFacility(data) {
    const newBk = {
      id: 'bk-' + Date.now(),
      facilityName: data.facilityName,
      bookedBy: this.state.profile.name,
      date: data.date,
      timeSlot: data.timeSlot,
      purpose: data.purpose,
      status: 'Confirmed'
    };
    if (!this.state.facilityBookings) this.state.facilityBookings = [];
    this.state.facilityBookings.unshift(newBk);
    this.saveState();
    this.emit('facilities:updated', this.state.facilityBookings);
    return newBk;
  }

  getHostelAllocation() {
    return this.state.hostelAllocation;
  }

  // Student Services & Grievances (Features 131-140)
  getGrievances() {
    return this.state.grievances || [];
  }

  submitGrievance(data) {
    const newId = 'GRV-' + Math.floor(1050 + Math.random() * 8000);
    const newGrv = {
      id: newId,
      title: data.title,
      category: data.category || 'General',
      isAnonymous: !!data.isAnonymous,
      date: new Date().toISOString().split('T')[0],
      status: 'Submitted',
      department: data.department || 'Student Welfare Office',
      resolutionNote: 'Ticket acknowledged. Assigned to duty inspector.'
    };
    if (!this.state.grievances) this.state.grievances = [];
    this.state.grievances.unshift(newGrv);
    this.saveState();
    this.emit('grievances:updated', this.state.grievances);
    return newGrv;
  }

  getLeaveApplications() {
    return this.state.leaveApplications || [];
  }

  submitLeaveApplication(data) {
    const newLeave = {
      id: 'LV-' + Math.floor(450 + Math.random() * 900),
      type: data.type || 'Out-Station Pass',
      fromDate: data.fromDate,
      toDate: data.toDate,
      reason: data.reason,
      destination: data.destination,
      parentApprovalStatus: 'Approved via SMS',
      wardenStatus: 'Pass Granted (QR Active)'
    };
    if (!this.state.leaveApplications) this.state.leaveApplications = [];
    this.state.leaveApplications.unshift(newLeave);
    this.saveState();
    this.emit('leave:updated', this.state.leaveApplications);
    return newLeave;
  }

  getCertificates() {
    return this.state.certificateRequests || [];
  }

  requestCertificate(data) {
    const newCert = {
      id: 'CERT-' + Math.floor(900 + Math.random() * 900),
      type: data.type,
      purpose: data.purpose,
      date: new Date().toISOString().split('T')[0],
      status: 'Ready for Download',
      serialNo: `SXIT/CERT/2026/${Math.floor(1000 + Math.random() * 9000)}`
    };
    if (!this.state.certificateRequests) this.state.certificateRequests = [];
    this.state.certificateRequests.unshift(newCert);
    this.saveState();
    this.emit('certificates:updated', this.state.certificateRequests);
    return newCert;
  }

  getMedicalCenter() {
    return this.state.medicalCenter;
  }

  // Placements (Features 147-148)
  getPlacements() {
    return this.state.placements || [];
  }

  applyPlacement(id) {
    const plc = this.state.placements.find(p => p.id === id);
    if (plc) {
      plc.applied = true;
      plc.status = 'Application Submitted';
      this.saveState();
      this.emit('placements:updated', this.state.placements);
      return true;
    }
    return false;
  }

  // Community & Alumni (Features 111-115)
  getCommunityPosts() {
    return this.state.communityPosts || [];
  }

  addCommunityPost(data) {
    const newPost = {
      id: 'post-' + Date.now(),
      author: this.state.profile.name,
      authorRole: `${this.state.profile.year} Student`,
      time: 'Just now',
      title: data.title,
      votes: 1,
      repliesCount: 0,
      tags: data.tags || ['General']
    };
    if (!this.state.communityPosts) this.state.communityPosts = [];
    this.state.communityPosts.unshift(newPost);
    this.saveState();
    this.emit('community:updated', this.state.communityPosts);
    return newPost;
  }

  upvotePost(id) {
    const post = this.state.communityPosts.find(p => p.id === id);
    if (post) {
      post.votes++;
      this.saveState();
      this.emit('community:updated', this.state.communityPosts);
    }
  }

  getAlumniList() {
    return this.state.alumniList || [];
  }

  // Admin Analytics & Role Switcher (Features 149-150)
  getAdminMetrics() {
    return this.state.adminMetrics || {};
  }

  getRole() {
    return this.state.currentRole || 'Student';
  }

  setRole(role) {
    this.state.currentRole = role;
    this.saveState();
    this.emit('role:updated', role);
    return role;
  }

  // ==========================================
  // PROFILE & SYSTEM (Pre-existing Features)
  // ==========================================
  getProfile() { return this.state.profile; }
  updateProfile(updates) {
    this.state.profile = { ...this.state.profile, ...updates };
    this.saveState();
    this.emit('profile:updated', this.state.profile);
  }
  addSkill(skill) {
    const clean = skill.trim();
    if (clean && !this.state.profile.skills.includes(clean)) {
      this.state.profile.skills.push(clean);
      this.saveState();
      this.emit('profile:updated', this.state.profile);
    }
  }
  removeSkill(skill) {
    this.state.profile.skills = this.state.profile.skills.filter(s => s !== skill);
    this.saveState();
    this.emit('profile:updated', this.state.profile);
  }

  getTimetable(day = null) {
    if (!day) return this.state.timetable;
    return this.state.timetable.filter(c => c.day.toLowerCase() === day.toLowerCase());
  }
  addClass(classItem) {
    const newClass = { ...classItem, id: 'tt-' + Date.now() };
    this.state.timetable.push(newClass);
    this.saveState();
    this.emit('timetable:updated', this.state.timetable);
    return newClass;
  }
  updateClass(id, updates) {
    const idx = this.state.timetable.findIndex(c => c.id === id);
    if (idx !== -1) {
      this.state.timetable[idx] = { ...this.state.timetable[idx], ...updates };
      this.saveState();
      this.emit('timetable:updated', this.state.timetable);
    }
  }
  deleteClass(id) {
    this.state.timetable = this.state.timetable.filter(c => c.id !== id);
    this.saveState();
    this.emit('timetable:updated', this.state.timetable);
  }

  getAttendance() { return this.state.attendance; }
  markAttendance(subjectId, status = 'present') {
    const subject = this.state.attendance.find(s => s.id === subjectId);
    if (subject) {
      subject.totalClasses = (subject.totalClasses || 0) + 1;
      if (status === 'present') subject.attendedClasses = (subject.attendedClasses || 0) + 1;
      this.saveState();
      this.emit('attendance:updated', this.state.attendance);
    }
  }
  addSubject(data) {
    const newSubject = { id: 'att-' + Date.now(), subject: data.subject, code: data.code || 'SUB' + Math.floor(100 + Math.random() * 900), totalClasses: parseInt(data.totalClasses, 10) || 0, attendedClasses: parseInt(data.attendedClasses, 10) || 0, targetPercentage: parseInt(data.targetPercentage, 10) || 75 };
    this.state.attendance.push(newSubject);
    this.saveState();
    this.emit('attendance:updated', this.state.attendance);
    return newSubject;
  }
  updateSubject(id, updates) {
    const idx = this.state.attendance.findIndex(s => s.id === id);
    if (idx !== -1) {
      this.state.attendance[idx] = { ...this.state.attendance[idx], ...updates };
      this.saveState();
      this.emit('attendance:updated', this.state.attendance);
    }
  }
  deleteSubject(id) {
    this.state.attendance = this.state.attendance.filter(s => s.id !== id);
    this.saveState();
    this.emit('attendance:updated', this.state.attendance);
  }

  getAssignments() { return this.state.assignments; }
  addAssignment(data) {
    const newAssignment = { id: 'asg-' + Date.now(), title: data.title, subject: data.subject, deadline: data.deadline, priority: data.priority || 'Medium', status: 'Pending', description: data.description || '' };
    this.state.assignments.unshift(newAssignment);
    this.saveState();
    this.emit('assignments:updated', this.state.assignments);
    return newAssignment;
  }
  toggleAssignmentStatus(id) {
    const asg = this.state.assignments.find(a => a.id === id);
    if (asg) {
      asg.status = asg.status === 'Completed' ? 'Pending' : 'Completed';
      this.saveState();
      this.emit('assignments:updated', this.state.assignments);
      return asg.status;
    }
    return null;
  }
  updateAssignment(id, updates) {
    const idx = this.state.assignments.findIndex(a => a.id === id);
    if (idx !== -1) {
      this.state.assignments[idx] = { ...this.state.assignments[idx], ...updates };
      this.saveState();
      this.emit('assignments:updated', this.state.assignments);
    }
  }
  deleteAssignment(id) {
    this.state.assignments = this.state.assignments.filter(a => a.id !== id);
    this.saveState();
    this.emit('assignments:updated', this.state.assignments);
  }

  getStudySessions() { return this.state.studySessions; }
  addStudySession(session) {
    const newSession = { id: 'ss-' + Date.now(), subject: session.subject, topic: session.topic, date: session.date || new Date().toISOString().split('T')[0], durationMinutes: parseInt(session.durationMinutes, 10) || 25, status: session.status || 'Planned' };
    this.state.studySessions.unshift(newSession);
    this.saveState();
    this.emit('study:updated', this.state.studySessions);
    return newSession;
  }
  deleteStudySession(id) {
    this.state.studySessions = this.state.studySessions.filter(s => s.id !== id);
    this.saveState();
    this.emit('study:updated', this.state.studySessions);
  }
  logPomodoroMinutes(minutes = 25, subject = 'General Focus') {
    const session = { id: 'ss-' + Date.now(), subject, topic: 'Pomodoro Focus Session', date: new Date().toISOString().split('T')[0], durationMinutes: minutes, status: 'Completed' };
    this.state.studySessions.unshift(session);
    this.saveState();
    this.emit('study:updated', this.state.studySessions);
  }

  getEvents() { return this.state.events; }
  toggleBookmarkEvent(id) {
    const ev = this.state.events.find(e => e.id === id);
    if (ev) {
      ev.bookmarked = !ev.bookmarked;
      this.saveState();
      this.emit('events:updated', this.state.events);
      return ev.bookmarked;
    }
    return false;
  }
  addEvent(data) {
    const newEvent = { id: 'ev-' + Date.now(), title: data.title, category: data.category || 'Workshop', date: data.date, time: data.time || '10:00 AM - 01:00 PM', venue: data.venue || 'Auditorium', organizer: data.organizer || 'Student Committee', description: data.description || '', image: data.image || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=80', bookmarked: false, registeredCount: 1 };
    this.state.events.unshift(newEvent);
    this.saveState();
    this.emit('events:updated', this.state.events);
    return newEvent;
  }

  getNotes() { return this.state.notes; }
  addNote(data) {
    const newNote = { id: 'note-' + Date.now(), title: data.title, subject: data.subject, category: data.category || 'Lecture Notes', date: new Date().toISOString().split('T')[0], tags: data.tags || [], content: data.content || '', link: data.link || '' };
    this.state.notes.unshift(newNote);
    this.saveState();
    this.emit('notes:updated', this.state.notes);
    return newNote;
  }
  deleteNote(id) {
    this.state.notes = this.state.notes.filter(n => n.id !== id);
    this.saveState();
    this.emit('notes:updated', this.state.notes);
  }

  getGpaRecords() { return this.state.gpaRecords; }
  updateCurrentCourses(courses) {
    this.state.gpaRecords.currentSemesterCourses = courses;
    this.saveState();
    this.emit('gpa:updated', this.state.gpaRecords);
  }
  addGpaCourse(course) {
    const newCourse = { id: 'c-' + Date.now(), code: course.code || 'COURSE', name: course.name || 'New Course', credits: parseFloat(course.credits) || 3, grade: course.grade || 'A', gradePoint: parseFloat(course.gradePoint) || 8 };
    this.state.gpaRecords.currentSemesterCourses.push(newCourse);
    this.saveState();
    this.emit('gpa:updated', this.state.gpaRecords);
    return newCourse;
  }
  deleteGpaCourse(id) {
    this.state.gpaRecords.currentSemesterCourses = this.state.gpaRecords.currentSemesterCourses.filter(c => c.id !== id);
    this.saveState();
    this.emit('gpa:updated', this.state.gpaRecords);
  }

  getClubs() { return this.state.clubs; }
  toggleJoinClub(clubId) {
    const joined = this.state.profile.joinedClubs || [];
    const club = this.state.clubs.find(c => c.id === clubId);
    let isNowJoined = false;
    if (joined.includes(clubId)) {
      this.state.profile.joinedClubs = joined.filter(id => id !== clubId);
      if (club && club.memberCount > 0) club.memberCount--;
      isNowJoined = false;
    } else {
      this.state.profile.joinedClubs.push(clubId);
      if (club) club.memberCount++;
      isNowJoined = true;
    }
    this.saveState();
    this.emit('clubs:updated', this.state.clubs);
    this.emit('profile:updated', this.state.profile);
    return isNowJoined;
  }

  getLostFound() { return this.state.lostFound; }
  addLostFoundItem(item) {
    const newItem = { id: 'lf-' + Date.now(), type: item.type || 'Lost', title: item.title, category: item.category || 'Other', location: item.location, date: item.date || new Date().toISOString().split('T')[0], description: item.description, contactName: item.contactName || this.state.profile.name, contactInfo: item.contactInfo || this.state.profile.email, status: 'Active', reward: item.reward || '' };
    this.state.lostFound.unshift(newItem);
    this.saveState();
    this.emit('lostfound:updated', this.state.lostFound);
    return newItem;
  }
  resolveLostFoundItem(id) {
    const item = this.state.lostFound.find(i => i.id === id);
    if (item) {
      item.status = item.status === 'Resolved' ? 'Active' : 'Resolved';
      this.saveState();
      this.emit('lostfound:updated', this.state.lostFound);
      return item.status;
    }
    return null;
  }
  deleteLostFoundItem(id) {
    this.state.lostFound = this.state.lostFound.filter(i => i.id !== id);
    this.saveState();
    this.emit('lostfound:updated', this.state.lostFound);
  }

  getMarketplace() { return this.state.marketplace; }
  addMarketplaceItem(item) {
    const newItem = { id: 'mp-' + Date.now(), title: item.title, category: item.category || 'Textbooks', price: parseFloat(item.price) || 0, condition: item.condition || 'Good', description: item.description, sellerName: item.sellerName || this.state.profile.name, sellerContact: item.sellerContact || this.state.profile.email, image: item.image || 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=80', date: new Date().toISOString().split('T')[0] };
    this.state.marketplace.unshift(newItem);
    this.saveState();
    this.emit('marketplace:updated', this.state.marketplace);
    return newItem;
  }
  deleteMarketplaceItem(id) {
    this.state.marketplace = this.state.marketplace.filter(i => i.id !== id);
    this.saveState();
    this.emit('marketplace:updated', this.state.marketplace);
  }

  getNotifications() { return this.state.notifications; }
  markNotificationAsRead(id) {
    const notif = this.state.notifications.find(n => n.id === id);
    if (notif) {
      notif.read = true;
      this.saveState();
      this.emit('notifications:updated', this.state.notifications);
    }
  }
  markAllNotificationsRead() {
    this.state.notifications.forEach(n => n.read = true);
    this.saveState();
    this.emit('notifications:updated', this.state.notifications);
  }

  resetToSampleData() {
    this.state = JSON.parse(JSON.stringify(initialData));
    this.saveState();
    this.emit('*', { event: 'reset' });
    return this.state;
  }
  exportDataJson() { return JSON.stringify(this.state, null, 2); }
  importDataJson(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      this.state = { ...initialData, ...parsed };
      this.saveState();
      this.emit('*', { event: 'imported' });
      return true;
    } catch (e) {
      console.error('Invalid JSON import', e);
      return false;
    }
  }
}

export const store = new Store();
