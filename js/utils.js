// CampusHub Utilities & Formulas

// HTML escaping helper for safe rendering
export function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Format date into human readable string
export function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

// Format ISO date/time into display format
export function formatDateTime(dateTimeString) {
  if (!dateTimeString) return '';
  const date = new Date(dateTimeString);
  if (isNaN(date.getTime())) return dateTimeString;
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}

// Get current day name (Monday, Tuesday...)
export function getCurrentDayName() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = days[new Date().getDay()];
  return today === 'Sunday' ? 'Monday' : today; // Default to Monday if viewed on Sunday
}

// Personalized greeting based on time of day
export function getTimeOfDayGreeting(studentName = 'Student') {
  const hour = new Date().getHours();
  let greeting = 'Good morning';
  let icon = '☀️';

  if (hour >= 12 && hour < 17) {
    greeting = 'Good afternoon';
    icon = '🌤️';
  } else if (hour >= 17 && hour < 21) {
    greeting = 'Good evening';
    icon = '🌆';
  } else if (hour >= 21 || hour < 5) {
    greeting = 'Good night';
    icon = '🌙';
  }

  return { greeting: `${greeting}, ${studentName}!`, icon };
}

// Check if an assignment deadline is overdue
export function isOverdue(deadlineStr, status) {
  if (!deadlineStr || status === 'Completed') return false;
  const deadline = new Date(deadlineStr);
  return deadline < new Date();
}

// Relative time string (e.g. "Due in 2 days", "Overdue by 12 hours")
export function getRelativeTime(dateTimeString, status = 'Pending') {
  if (!dateTimeString) return '';
  if (status === 'Completed') return 'Completed';

  const now = new Date();
  const target = new Date(dateTimeString);
  const diffMs = target - now;
  const isPast = diffMs < 0;
  const absDiff = Math.abs(diffMs);

  const mins = Math.floor(absDiff / (1000 * 60));
  const hours = Math.floor(absDiff / (1000 * 60 * 60));
  const days = Math.floor(absDiff / (1000 * 60 * 60 * 24));

  if (isPast) {
    if (days > 0) return `Overdue by ${days}d`;
    if (hours > 0) return `Overdue by ${hours}h`;
    return `Overdue by ${mins}m`;
  } else {
    if (days > 0) return `Due in ${days}d ${hours % 24}h`;
    if (hours > 0) return `Due in ${hours}h ${mins % 60}m`;
    return `Due in ${mins}m`;
  }
}

// ==========================================
// ATTENDANCE CALCULATIONS & BUNK ADVISOR
// ==========================================

export function calculateAttendanceStatus(attended, total, target = 75) {
  const safeAttended = Math.max(0, parseInt(attended, 10) || 0);
  const safeTotal = Math.max(0, parseInt(total, 10) || 0);

  if (safeTotal === 0) {
    return {
      percentage: 100,
      formattedPercentage: '100.0',
      isBelowTarget: false,
      bunkAllowance: 0,
      classesNeeded: 0,
      statusColor: 'emerald',
      statusMessage: 'No classes held yet'
    };
  }

  const rawPercentage = (safeAttended / safeTotal) * 100;
  const percentage = Math.min(100, Math.round(rawPercentage * 10) / 10);
  const isBelowTarget = percentage < target;

  let bunkAllowance = 0;
  let classesNeeded = 0;
  let statusMessage = '';

  if (!isBelowTarget) {
    // Formula: floor((100 * attended - target * total) / target)
    bunkAllowance = Math.floor((100 * safeAttended - target * safeTotal) / target);
    bunkAllowance = Math.max(0, bunkAllowance);
    if (bunkAllowance === 0) {
      statusMessage = `On the borderline! Don't miss your next class.`;
    } else if (bunkAllowance === 1) {
      statusMessage = `You can safely bunk 1 class and stay above ${target}%.`;
    } else {
      statusMessage = `You can safely bunk ${bunkAllowance} classes and stay above ${target}%.`;
    }
  } else {
    // Formula: ceil((target * total - 100 * attended) / (100 - target))
    const denominator = 100 - target;
    if (denominator > 0) {
      classesNeeded = Math.ceil((target * safeTotal - 100 * safeAttended) / denominator);
      classesNeeded = Math.max(1, classesNeeded);
    } else {
      classesNeeded = 999;
    }
    statusMessage = `⚠️ Low Attendance! Attend the next ${classesNeeded} consecutive class${classesNeeded > 1 ? 'es' : ''} to reach ${target}%.`;
  }

  let statusColor = 'emerald';
  if (percentage < target) {
    statusColor = 'red';
  } else if (percentage < target + 5) {
    statusColor = 'amber';
  }

  return {
    percentage,
    formattedPercentage: percentage.toFixed(1),
    isBelowTarget,
    bunkAllowance,
    classesNeeded,
    statusColor,
    statusMessage
  };
}

// ==========================================
// GPA & CGPA CALCULATIONS
// ==========================================

export const GRADE_POINTS_MAP = {
  'O': 10,
  'A+': 9,
  'A': 8,
  'B+': 7,
  'B': 6,
  'C': 5,
  'P': 4,
  'F': 0
};

export function calculateSemesterGpa(courses = []) {
  if (!courses || courses.length === 0) return { gpa: 0, totalCredits: 0 };

  let totalQualityPoints = 0;
  let totalCredits = 0;

  courses.forEach(course => {
    const credits = parseFloat(course.credits) || 0;
    let gradePoint = 0;

    if (course.gradePoint !== undefined && course.gradePoint !== null && course.gradePoint !== '') {
      gradePoint = parseFloat(course.gradePoint) || 0;
    } else if (course.grade && GRADE_POINTS_MAP[course.grade.toUpperCase()] !== undefined) {
      gradePoint = GRADE_POINTS_MAP[course.grade.toUpperCase()];
    }

    totalQualityPoints += (credits * gradePoint);
    totalCredits += credits;
  });

  const gpa = totalCredits > 0 ? (totalQualityPoints / totalCredits) : 0;
  return {
    gpa: Math.round(gpa * 100) / 100,
    formattedGpa: gpa.toFixed(2),
    totalCredits
  };
}

export function calculateCumulativeCgpa(semesters = []) {
  if (!semesters || semesters.length === 0) return { cgpa: 0, totalCredits: 0 };

  let totalWeightedScore = 0;
  let totalCredits = 0;

  semesters.forEach(sem => {
    const gpa = parseFloat(sem.gpa) || 0;
    const credits = parseFloat(sem.credits) || 0;
    totalWeightedScore += (gpa * credits);
    totalCredits += credits;
  });

  const cgpa = totalCredits > 0 ? (totalWeightedScore / totalCredits) : 0;
  return {
    cgpa: Math.round(cgpa * 100) / 100,
    formattedCgpa: cgpa.toFixed(2),
    totalCredits
  };
}

// Estimate required GPA to hit target CGPA
export function estimateRequiredGpa(currentCgpa, completedCredits, remainingCredits, targetCgpa) {
  const cCgpa = parseFloat(currentCgpa) || 0;
  const compCredits = parseFloat(completedCredits) || 0;
  const remCredits = parseFloat(remainingCredits) || 0;
  const tCgpa = parseFloat(targetCgpa) || 0;

  if (remCredits <= 0) return null;

  const totalCredits = compCredits + remCredits;
  const targetTotalPoints = tCgpa * totalCredits;
  const currentTotalPoints = cCgpa * compCredits;
  const requiredPoints = targetTotalPoints - currentTotalPoints;
  const requiredGpa = requiredPoints / remCredits;

  return {
    requiredGpa: Math.round(requiredGpa * 100) / 100,
    formattedRequiredGpa: requiredGpa.toFixed(2),
    isAchievable: requiredGpa <= 10.0 && requiredGpa >= 0
  };
}

// ==========================================
// TOAST NOTIFICATIONS & AUDIO SYNTHESIS
// ==========================================

export function showToast(message, type = 'info', duration = 3200) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const typeStyles = {
    success: 'bg-emerald-600 text-white border-emerald-500 shadow-emerald-500/20',
    error: 'bg-red-600 text-white border-red-500 shadow-red-500/20',
    warning: 'bg-amber-600 text-white border-amber-500 shadow-amber-500/20',
    info: 'bg-indigo-600 text-white border-indigo-500 shadow-indigo-500/20'
  };

  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠️',
    info: 'ℹ️'
  };

  toast.className = `flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border text-sm font-medium transition-all duration-300 transform translate-y-4 opacity-0 ${typeStyles[type] || typeStyles.info}`;
  toast.innerHTML = `
    <span class="text-base">${icons[type] || 'ℹ️'}</span>
    <span class="flex-1">${escapeHtml(message)}</span>
    <button class="text-white/80 hover:text-white text-base leading-none">&times;</button>
  `;

  toast.querySelector('button').onclick = () => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 250);
  };

  container.appendChild(toast);

  // Trigger animation in
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  });

  // Auto remove
  setTimeout(() => {
    if (toast.parentElement) {
      toast.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => toast.remove(), 250);
    }
  }, duration);
}

// Web Audio API chime tone (no external audio files needed)
export function playChime(type = 'success') {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;

    if (type === 'success' || type === 'pomodoro') {
      // Pleasant two-tone chime
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(880.00, now + 0.15); // A5

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

      osc.start(now);
      osc.stop(now + 0.6);
    } else if (type === 'warning') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.setValueAtTime(330, now + 0.15);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      osc.start(now);
      osc.stop(now + 0.4);
    }
  } catch (err) {
    console.debug('Audio chime unable to play:', err);
  }
}

// Confetti burst helper (using global canvas-confetti)
export function triggerConfetti() {
  if (typeof window.confetti === 'function') {
    window.confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.75 },
      colors: ['#6366f1', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b']
    });
  }
}
