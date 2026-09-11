// CampusHub State Store & Persistence Layer
import { initialData } from './sampleData.js';

const STORAGE_KEY = 'campushub_state_v1';
const THEME_KEY = 'campushub_theme';

class Store {
  constructor() {
    this.listeners = new Map();
    this.state = this.loadState();
    this.initTheme();
  }

  // Load from localStorage or seed initial data
  loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure all top-level keys exist if initialData added new ones
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

  // Event Pub/Sub
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
    // Also notify global wildcard listeners
    if (this.listeners.has('*')) {
      this.listeners.get('*').forEach(cb => {
        try { cb({ event, data }); } catch (e) { console.error(`Error in wildcard subscriber:`, e); }
      });
    }
  }

  // ==========================================
  // THEME MANAGEMENT
  // ==========================================
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

  // ==========================================
  // PROFILE METHODS
  // ==========================================
  getProfile() {
    return this.state.profile;
  }

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

  // ==========================================
  // TIMETABLE METHODS
  // ==========================================
  getTimetable(day = null) {
    if (!day) return this.state.timetable;
    return this.state.timetable.filter(c => c.day.toLowerCase() === day.toLowerCase());
  }

  addClass(classItem) {
    const newClass = {
      ...classItem,
      id: 'tt-' + Date.now()
    };
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

  // ==========================================
  // ATTENDANCE METHODS
  // ==========================================
  getAttendance() {
    return this.state.attendance;
  }

  markAttendance(subjectId, status = 'present') {
    const subject = this.state.attendance.find(s => s.id === subjectId);
    if (subject) {
      subject.totalClasses = (subject.totalClasses || 0) + 1;
      if (status === 'present') {
        subject.attendedClasses = (subject.attendedClasses || 0) + 1;
      }
      this.saveState();
      this.emit('attendance:updated', this.state.attendance);
    }
  }

  addSubject(subjectData) {
    const newSubject = {
      id: 'att-' + Date.now(),
      subject: subjectData.subject,
      code: subjectData.code || 'SUB' + Math.floor(100 + Math.random() * 900),
      totalClasses: parseInt(subjectData.totalClasses, 10) || 0,
      attendedClasses: parseInt(subjectData.attendedClasses, 10) || 0,
      targetPercentage: parseInt(subjectData.targetPercentage, 10) || 75
    };
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

  // ==========================================
  // ASSIGNMENTS & TASKS METHODS
  // ==========================================
  getAssignments() {
    return this.state.assignments;
  }

  addAssignment(assignmentData) {
    const newAssignment = {
      id: 'asg-' + Date.now(),
      title: assignmentData.title,
      subject: assignmentData.subject,
      deadline: assignmentData.deadline,
      priority: assignmentData.priority || 'Medium',
      status: 'Pending',
      description: assignmentData.description || ''
    };
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

  // ==========================================
  // STUDY PLANNER METHODS
  // ==========================================
  getStudySessions() {
    return this.state.studySessions;
  }

  addStudySession(session) {
    const newSession = {
      id: 'ss-' + Date.now(),
      subject: session.subject,
      topic: session.topic,
      date: session.date || new Date().toISOString().split('T')[0],
      durationMinutes: parseInt(session.durationMinutes, 10) || 25,
      status: session.status || 'Planned'
    };
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
    const today = new Date().toISOString().split('T')[0];
    const session = {
      id: 'ss-' + Date.now(),
      subject: subject,
      topic: 'Pomodoro Focus Session',
      date: today,
      durationMinutes: minutes,
      status: 'Completed'
    };
    this.state.studySessions.unshift(session);
    this.saveState();
    this.emit('study:updated', this.state.studySessions);
  }

  // ==========================================
  // EVENTS METHODS
  // ==========================================
  getEvents() {
    return this.state.events;
  }

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

  addEvent(eventData) {
    const newEvent = {
      id: 'ev-' + Date.now(),
      title: eventData.title,
      category: eventData.category || 'Workshop',
      date: eventData.date,
      time: eventData.time || '10:00 AM - 01:00 PM',
      venue: eventData.venue || 'Campus Auditorium',
      organizer: eventData.organizer || 'Student Committee',
      description: eventData.description || '',
      tags: eventData.tags || ['Campus'],
      image: eventData.image || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=80',
      bookmarked: false,
      registeredCount: 1
    };
    this.state.events.unshift(newEvent);
    this.saveState();
    this.emit('events:updated', this.state.events);
    return newEvent;
  }

  // ==========================================
  // NOTES & RESOURCES METHODS
  // ==========================================
  getNotes() {
    return this.state.notes;
  }

  addNote(noteData) {
    const newNote = {
      id: 'note-' + Date.now(),
      title: noteData.title,
      subject: noteData.subject,
      category: noteData.category || 'Lecture Notes',
      date: new Date().toISOString().split('T')[0],
      tags: noteData.tags || [],
      content: noteData.content || '',
      link: noteData.link || ''
    };
    this.state.notes.unshift(newNote);
    this.saveState();
    this.emit('notes:updated', this.state.notes);
    return newNote;
  }

  updateNote(id, updates) {
    const idx = this.state.notes.findIndex(n => n.id === id);
    if (idx !== -1) {
      this.state.notes[idx] = { ...this.state.notes[idx], ...updates };
      this.saveState();
      this.emit('notes:updated', this.state.notes);
    }
  }

  deleteNote(id) {
    this.state.notes = this.state.notes.filter(n => n.id !== id);
    this.saveState();
    this.emit('notes:updated', this.state.notes);
  }

  // ==========================================
  // GPA CALCULATOR METHODS
  // ==========================================
  getGpaRecords() {
    return this.state.gpaRecords;
  }

  updateCurrentCourses(courses) {
    this.state.gpaRecords.currentSemesterCourses = courses;
    this.saveState();
    this.emit('gpa:updated', this.state.gpaRecords);
  }

  addGpaCourse(course) {
    const newCourse = {
      id: 'c-' + Date.now(),
      code: course.code || 'COURSE',
      name: course.name || 'New Course',
      credits: parseFloat(course.credits) || 3,
      grade: course.grade || 'A',
      gradePoint: parseFloat(course.gradePoint) || 8
    };
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

  updateSemesters(semesters) {
    this.state.gpaRecords.semesters = semesters;
    this.saveState();
    this.emit('gpa:updated', this.state.gpaRecords);
  }

  // ==========================================
  // CLUBS METHODS
  // ==========================================
  getClubs() {
    return this.state.clubs;
  }

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

  // ==========================================
  // LOST & FOUND METHODS
  // ==========================================
  getLostFound() {
    return this.state.lostFound;
  }

  addLostFoundItem(item) {
    const newItem = {
      id: 'lf-' + Date.now(),
      type: item.type || 'Lost',
      title: item.title,
      category: item.category || 'Other',
      location: item.location,
      date: item.date || new Date().toISOString().split('T')[0],
      description: item.description,
      contactName: item.contactName || this.state.profile.name,
      contactInfo: item.contactInfo || this.state.profile.email,
      status: 'Active',
      reward: item.reward || ''
    };
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

  // ==========================================
  // MARKETPLACE METHODS
  // ==========================================
  getMarketplace() {
    return this.state.marketplace;
  }

  addMarketplaceItem(item) {
    const newItem = {
      id: 'mp-' + Date.now(),
      title: item.title,
      category: item.category || 'Textbooks',
      price: parseFloat(item.price) || 0,
      condition: item.condition || 'Good',
      description: item.description,
      sellerName: item.sellerName || this.state.profile.name,
      sellerContact: item.sellerContact || this.state.profile.email,
      image: item.image || 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=80',
      date: new Date().toISOString().split('T')[0]
    };
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

  // ==========================================
  // NOTIFICATIONS METHODS
  // ==========================================
  getNotifications() {
    return this.state.notifications;
  }

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

  // ==========================================
  // SYSTEM & DATA MANAGEMENT
  // ==========================================
  resetToSampleData() {
    this.state = JSON.parse(JSON.stringify(initialData));
    this.saveState();
    this.emit('*', { event: 'reset' });
    return this.state;
  }

  exportDataJson() {
    return JSON.stringify(this.state, null, 2);
  }

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
