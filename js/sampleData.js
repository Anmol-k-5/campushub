// CampusHub Comprehensive University Sample Dataset - Enriched for 150 Features
export const initialData = {
  // Current active view role: 'student', 'faculty', 'admin', 'applicant'
  currentRole: 'student',

  // 1. Institutional Identity & Overview (Features 1-15)
  institution: {
    name: "St. Xavier Institute of Technology & Management",
    shortName: "SXITM Campus",
    tagline: "Empowering Next-Gen Innovators & Leaders",
    foundedYear: 1984,
    campusAcreage: "125 Acres",
    accreditation: "NAAC Grade A++ (3.78 CGPA) • NBA Tier-1 Accredited",
    nirfRank: "Rank #14 in Engineering (NIRF 2025)",
    qsRank: "QS 4-Star Excellence Rating",
    stats: {
      totalStudents: 12450,
      facultyCount: 480,
      placementRate: "96.4%",
      researchLabs: 64,
      patentsGranted: 142,
      activeClubs: 42
    },
    leadership: {
      principal: {
        name: "Dr. Arthur Pendelton",
        qualifications: "Ph.D. (MIT), FIEEE, FNAE",
        message: "Welcome to St. Xavier Institute of Technology. For over four decades, our institution has stood as a beacon of academic rigor, research excellence, and holistic student development. We inspire our students not merely to seek employment, but to become ethical creators, researchers, and entrepreneurs shaping the future of global technology.",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
      },
      vicePrincipal: {
        name: "Dr. Sunita Deshmukh",
        qualifications: "Ph.D. (IIT Bombay), PostDoc (Stanford)",
        message: "Our pedagogical framework bridges theoretical fundamentals with hands-on multidisciplinary industry projects. Every student at our campus is empowered with 24/7 maker spaces, world-class labs, and personalized faculty mentorship.",
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80"
      }
    },
    timeline: [
      { year: 1984, title: "Foundation Established", desc: "Inaugurated with 3 core engineering branches and 180 students." },
      { year: 1998, title: "Computer Science & IT Centre", desc: "Launched dedicated computing supercomputer cluster and fiber backbone." },
      { year: 2010, title: "Autonomous Status & NBA Tier-1", desc: "Awarded academic autonomy by UGC and highest tier NBA accreditation." },
      { year: 2020, title: "AI & Innovation Incubator", desc: "Established state-of-the-art AI Centre of Excellence with $4M industry grant." },
      { year: 2025, title: "NAAC A++ Accreditation", desc: "Scored 3.78/4.0 CGPA, placing in the top 1% of technological universities." }
    ],
    contactDirectory: [
      { department: "Principal's Secretariat", phone: "+91 80 2345 6701", email: "principal@sxit.edu", room: "Admin Block A, 3rd Floor" },
      { department: "Dean of Academic Affairs", phone: "+91 80 2345 6702", email: "dean.academics@sxit.edu", room: "Admin Block A, 2nd Floor" },
      { department: "Office of Admissions", phone: "+91 80 2345 6703", email: "admissions@sxit.edu", room: "Student Amenity Center Room 101" },
      { department: "Controller of Examinations", phone: "+91 80 2345 6704", email: "coe@sxit.edu", room: "Exam Tower Level 4" },
      { department: "Training & Placement Cell", phone: "+91 80 2345 6705", email: "placements@sxit.edu", room: "Corporate Relations Hub" },
      { department: "Campus Chief Warden (Hostels)", phone: "+91 80 2345 6706", email: "warden@sxit.edu", room: "Hostel Block 1 Ground Floor" },
      { department: "24/7 Security & ER Desk", phone: "+91 80 2345 6799", email: "security@sxit.edu", room: "Main Campus Gate 1" }
    ],
    mapLocations: [
      { id: "loc-1", name: "Main Administrative Tower", code: "ADM", coords: "Zone A", desc: "Principal Office, Deanery, Admissions, Accounts" },
      { id: "loc-2", name: "Sir CV Raman Tech Block (CS/IT/AI)", code: "TC-1", coords: "Zone B", desc: "Computing Labs, High Performance Cluster, AI Lab" },
      { id: "loc-3", name: "Aryabhata Engineering Block (ECE/EEE/Mech)", code: "TC-2", coords: "Zone B", desc: "Robotics Bay, Microelectronics Lab, Wind Tunnel" },
      { id: "loc-4", name: "Central Digital Library (5 Floors)", code: "LIB", coords: "Zone C", desc: "Reading halls, E-resource hub, 180,000 volumes" },
      { id: "loc-5", name: "Dr. APJ Abdul Kalam Auditorium (1500 Seats)", code: "AUD", coords: "Zone C", desc: "Convocations, national hackathons, cultural fests" },
      { id: "loc-6", name: "Student Cafeteria & Food Court", code: "CAF", coords: "Zone D", desc: "Multi-cuisine food court, nescafe kiosk, mess halls" },
      { id: "loc-7", name: "University Sports Arena & Olympic Pool", code: "SPT", coords: "Zone E", desc: "Indoor badminton, basketball turf, gymnasium, track" },
      { id: "loc-8", name: "Hostel Blocks (Boys H1-H4 & Girls G1-G3)", code: "HST", coords: "Zone F", desc: "Residential dorms with Wi-Fi and study lounges" }
    ]
  },

  // 2. Admissions Portal (Features 16-30)
  admissions: {
    deadlines: [
      { id: "dl-1", round: "B.Tech Early Round Admission", date: "2026-09-30", status: "Active", seatsRemaining: 142 },
      { id: "dl-2", round: "M.Tech & PG Research Entrance", date: "2026-10-15", status: "Active", seatsRemaining: 48 },
      { id: "dl-3", round: "Merit Scholarship Applications", date: "2026-10-05", status: "Closing Soon", seatsRemaining: 25 },
      { id: "dl-4", round: "NRI & International Quota", date: "2026-10-20", status: "Upcoming", seatsRemaining: 60 }
    ],
    courses: [
      {
        id: "crs-1",
        name: "B.Tech Computer Science & Engineering",
        degree: "Undergraduate (4 Years)",
        intake: 240,
        availableSeats: 28,
        feePerYear: 185000,
        medianPackage: "14.2 LPA",
        eligibility: "Minimum 65% in 12th PCM + JEE/CET Qualified",
        highlights: "AI/ML Specialization, 100% Internship Placement, ABET Accredited"
      },
      {
        id: "crs-2",
        name: "B.Tech Artificial Intelligence & Data Science",
        degree: "Undergraduate (4 Years)",
        intake: 120,
        availableSeats: 14,
        feePerYear: 195000,
        medianPackage: "15.8 LPA",
        eligibility: "Minimum 65% in 12th PCM + Valid Entrance Score",
        highlights: "NVIDIA Supercomputing Lab, Cloud Certifications, Industry Capstones"
      },
      {
        id: "crs-3",
        name: "B.Tech Electronics & Communication Engineering",
        degree: "Undergraduate (4 Years)",
        intake: 180,
        availableSeats: 32,
        feePerYear: 175000,
        medianPackage: "11.6 LPA",
        eligibility: "Minimum 60% in 12th PCM",
        highlights: "VLSI Design Suite, Embedded IoT Systems, Qualcomm Partnership"
      },
      {
        id: "crs-4",
        name: "B.Tech Mechanical & Mechatronics Engineering",
        degree: "Undergraduate (4 Years)",
        intake: 120,
        availableSeats: 24,
        feePerYear: 160000,
        medianPackage: "9.8 LPA",
        eligibility: "Minimum 60% in 12th PCM",
        highlights: "Formula Student Racing Workshop, 3D Prototyping Bay, Robotics Cell"
      },
      {
        id: "crs-5",
        name: "M.Tech Distributed Systems & Cloud Computing",
        degree: "Postgraduate (2 Years)",
        intake: 60,
        availableSeats: 12,
        feePerYear: 140000,
        medianPackage: "18.5 LPA",
        eligibility: "B.E/B.Tech in CS/IT with min 60% or valid GATE score",
        highlights: "Funded Research Assistantships, Joint Industry Thesis"
      }
    ],
    scholarships: [
      { id: "sch-1", title: "Presidential Merit Scholarship", waiver: "100% Tuition Waiver", criteria: ">95% in 12th PCM or JEE Rank < 10,000", slots: 20 },
      { id: "sch-2", title: "National Sports Excellence Grant", waiver: "50% Tuition Waiver", criteria: "State/National sports representation in official federations", slots: 15 },
      { id: "sch-3", title: "Women in STEM Innovation Fellowship", waiver: "40% Tuition Waiver", criteria: "Top 30 female engineering rank holders", slots: 30 },
      { id: "sch-4", title: "Economically Weaker Section (EWS) Aid", waiver: "75% Tuition Waiver", criteria: "Annual family income under 4.5 Lakhs", slots: 50 }
    ],
    applications: [
      { id: "APP-2026-1048", applicantName: "Alex Rivera", course: "B.Tech Computer Science & Engineering", status: "Accepted", dateSubmitted: "2026-08-15", verificationStage: "Document Verification Completed", remarks: "Merit rank 42. Offer letter issued." },
      { id: "APP-2026-1182", applicantName: "Rohan Verma", course: "B.Tech AI & Data Science", status: "Interview Scheduled", dateSubmitted: "2026-09-02", verificationStage: "Round 2 Technical Interview on Sept 18", remarks: "Test score 92/100." },
      { id: "APP-2026-1290", applicantName: "Priya Sundaram", course: "B.Tech Electronics & Comm", status: "Under Review", dateSubmitted: "2026-09-08", verificationStage: "Marksheet Verification in Progress", remarks: "12th transcript received." }
    ]
  },

  // 3. Student Profile & Digital ID (Features 31-50)
  profile: {
    name: "Alex Rivera",
    rollNo: "CS23B1048",
    digitalIdBarcode: "SXITM-2023-CS-1048",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    email: "alex.rivera@campus.edu",
    degree: "B.Tech Computer Science & Engineering",
    department: "School of Computing & Data Sciences",
    year: "3rd Year",
    semester: "6th Semester",
    bloodGroup: "O+ Positive",
    dob: "2004-06-18",
    validUpto: "June 2027",
    hostelResident: "Hostel 2 • Room 304",
    emergencyContact: "+91 98765 43210 (Guardian)",
    currentCgpa: 8.84,
    targetGpa: 9.2,
    bio: "Full-stack developer, open source enthusiast, and campus tech organizer. Passionate about AI & distributed systems.",
    skills: ["Python", "JavaScript / React", "Data Structures", "System Design", "UI/UX Design", "Docker", "Git", "Public Speaking", "Machine Learning"],
    achievements: [
      { id: "ach-1", title: "1st Place - Smart Campus Hackathon 2025", date: "Nov 2025", badge: "🏆" },
      { id: "ach-2", title: "Dean's Merit List (Consecutive Semesters)", date: "2023 - 2025", badge: "🎖️" },
      { id: "ach-3", title: "Google Cloud Student Innovator", date: "Aug 2025", badge: "☁️" },
      { id: "ach-4", title: "Campus Coding Lead Award", date: "Jan 2026", badge: "🌟" }
    ],
    joinedClubs: ["club-1", "club-2", "club-4"]
  },

  // Exam Timetable & Internal Assessment Marks (Features 40, 42, 43)
  examTimetable: [
    { id: "ex-1", courseCode: "CS301", courseName: "Operating Systems", date: "2026-10-12", time: "09:30 AM - 12:30 PM", hall: "Hall 302 Seat #14", type: "Mid-Term" },
    { id: "ex-2", courseCode: "CS302", courseName: "Database Management Systems", date: "2026-10-14", time: "09:30 AM - 12:30 PM", hall: "Hall 201 Seat #22", type: "Mid-Term" },
    { id: "ex-3", courseCode: "CS303", courseName: "Design & Analysis of Algorithms", date: "2026-10-16", time: "09:30 AM - 12:30 PM", hall: "Tech Aud 1 Seat #08", type: "Mid-Term" },
    { id: "ex-4", courseCode: "CS304", courseName: "Computer Networks", date: "2026-10-19", time: "09:30 AM - 12:30 PM", hall: "Hall 105 Seat #30", type: "Mid-Term" },
    { id: "ex-5", courseCode: "CS305", courseName: "Machine Learning & AI", date: "2026-10-21", time: "09:30 AM - 12:30 PM", hall: "Tech Aud 2 Seat #16", type: "Mid-Term" }
  ],

  assessmentMarks: [
    { code: "CS301", subject: "Operating Systems", test1: 24, test2: 23, quiz: 9, assignment: 10, totalInternal: 66, maxInternal: 70 },
    { code: "CS302", subject: "Database Systems", test1: 25, test2: 25, quiz: 10, assignment: 10, totalInternal: 70, maxInternal: 70 },
    { code: "CS303", subject: "Algorithms", test1: 22, test2: 24, quiz: 8, assignment: 9, totalInternal: 63, maxInternal: 70 },
    { code: "CS304", subject: "Computer Networks", test1: 18, test2: 19, quiz: 7, assignment: 8, totalInternal: 52, maxInternal: 70 },
    { code: "CS305", subject: "Machine Learning", test1: 25, test2: 24, quiz: 10, assignment: 10, totalInternal: 69, maxInternal: 70 }
  ],

  academicCalendar: [
    { date: "2026-08-01", event: "Commencement of Fall Semester Classes", category: "Academic" },
    { date: "2026-09-15", event: "Project Synopsis Submission Deadline", category: "Academic" },
    { date: "2026-10-12", event: "Mid-Term Examination Week Begins", category: "Exam" },
    { date: "2026-10-25", event: "Diwali & Autumn Institutional Break", category: "Holiday" },
    { date: "2026-11-05", event: "Horizon 2026 Annual Cultural Fest (3 Days)", category: "Fest" },
    { date: "2026-11-20", event: "Inter-Collegiate Sports Championship", category: "Sports" },
    { date: "2026-12-08", event: "End-Semester Practical & Lab Viva", category: "Exam" },
    { date: "2026-12-15", event: "University End-Semester Theory Exams", category: "Exam" }
  ],

  // 4. Digital Library, PYQs & Learning Hub (Features 51-70)
  libraryBooks: [
    { id: "bk-1", title: "Operating System Concepts (Silberschatz)", author: "Abraham Silberschatz", isbn: "978-1118063330", category: "Computer Science", shelf: "Shelf B-14", totalCopies: 24, availableCopies: 5, reservedByMe: false },
    { id: "bk-2", title: "Introduction to Algorithms (CLRS 4th Ed)", author: "Cormen, Leiserson, Rivest, Stein", isbn: "978-0262046305", category: "Algorithms", shelf: "Shelf B-08", totalCopies: 30, availableCopies: 0, reservedByMe: true },
    { id: "bk-3", title: "Database System Concepts 7th Edition", author: "Korth, Sudarshan", isbn: "978-0078022159", category: "Database", shelf: "Shelf C-02", totalCopies: 20, availableCopies: 8, reservedByMe: false },
    { id: "bk-4", title: "Computer Networks: A Systems Approach", author: "Larry Peterson, Bruce Davie", isbn: "978-0123850591", category: "Networking", shelf: "Shelf C-11", totalCopies: 18, availableCopies: 4, reservedByMe: false },
    { id: "bk-5", title: "Pattern Recognition and Machine Learning", author: "Christopher M. Bishop", isbn: "978-0387310732", category: "Artificial Intelligence", shelf: "Shelf D-05", totalCopies: 15, availableCopies: 3, reservedByMe: false },
    { id: "bk-6", title: "Clean Code: A Handbook of Agile Software", author: "Robert C. Martin", isbn: "978-0132350884", category: "Software Engineering", shelf: "Shelf A-19", totalCopies: 12, availableCopies: 2, reservedByMe: false }
  ],

  pyqPapers: [
    { id: "pyq-1", subject: "Operating Systems", year: "2025 Fall", semester: "Sem 5", regulation: "R21", paperType: "End-Semester", link: "#" },
    { id: "pyq-2", subject: "Operating Systems", year: "2024 Fall", semester: "Sem 5", regulation: "R21", paperType: "End-Semester", link: "#" },
    { id: "pyq-3", subject: "Database Management Systems", year: "2025 Fall", semester: "Sem 5", regulation: "R21", paperType: "End-Semester", link: "#" },
    { id: "pyq-4", subject: "Design & Analysis of Algorithms", year: "2025 Fall", semester: "Sem 5", regulation: "R21", paperType: "End-Semester", link: "#" },
    { id: "pyq-5", subject: "Computer Networks", year: "2025 Fall", semester: "Sem 5", regulation: "R21", paperType: "End-Semester", link: "#" },
    { id: "pyq-6", subject: "Machine Learning & AI", year: "2025 Fall", semester: "Sem 5", regulation: "R21", paperType: "End-Semester", link: "#" }
  ],

  quizzes: [
    {
      id: "qz-1",
      subject: "Operating Systems",
      title: "Memory Management & Virtual Paging Quiz",
      questionsCount: 5,
      timeLimitMinutes: 10,
      questions: [
        { q: "What is the primary function of the Translation Lookaside Buffer (TLB)?", options: ["Cache page table mappings in hardware", "Execute arithmetic logic", "Handle disk I/O interrupts", "Compress swap partition"], answer: 0 },
        { q: "Which page replacement algorithm suffers from Belady's anomaly?", options: ["LRU", "Optimal", "FIFO", "Clock"], answer: 2 },
        { q: "Inverted page tables store one entry per:", options: ["Virtual page", "Physical frame", "Process thread", "Disk block"], answer: 1 }
      ]
    },
    {
      id: "qz-2",
      subject: "Computer Networks",
      title: "TCP/IP Protocol Stack & Subnetting",
      questionsCount: 5,
      timeLimitMinutes: 10,
      questions: [
        { q: "Which layer of the OSI model does TCP operate in?", options: ["Data Link Layer", "Network Layer", "Transport Layer", "Session Layer"], answer: 2 },
        { q: "How many usable host IP addresses are available in a /28 subnet?", options: ["14", "16", "30", "6"], answer: 0 }
      ]
    }
  ],

  // 5. Faculty & Department Directory (Features 71-85)
  facultyMembers: [
    {
      id: "fac-1",
      name: "Dr. Sarah Vance",
      designation: "Professor & Head of Department",
      department: "Computer Science & Engineering",
      email: "sarah.vance@sxit.edu",
      phone: "Ext. 4102",
      room: "Tech Block Room 302",
      status: "In Office", // In Office, In Lecture, In Meeting, On Leave
      officeHours: "Mon & Wed: 02:00 PM - 04:00 PM",
      researchArea: "Distributed OS, Cloud Orchestration, Kernel Architecture",
      publicationsCount: 48,
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "fac-2",
      name: "Prof. Alan Turing",
      designation: "Associate Professor",
      department: "Computer Science & Engineering",
      email: "alan.turing@sxit.edu",
      phone: "Ext. 4105",
      room: "Tech Block Room 204",
      status: "In Lecture",
      officeHours: "Tue & Thu: 11:30 AM - 01:00 PM",
      researchArea: "Database Optimization, B-Trees, Distributed Storage",
      publicationsCount: 36,
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "fac-3",
      name: "Dr. Maya Patel",
      designation: "Professor",
      department: "Computer Science & Engineering",
      email: "maya.patel@sxit.edu",
      phone: "Ext. 4108",
      room: "Tech Block Room 310",
      status: "In Office",
      officeHours: "Wednesday: 10:00 AM - 12:30 PM",
      researchArea: "Approximation Algorithms, Computational Geometry",
      publicationsCount: 52,
      photo: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "fac-4",
      name: "Dr. Marcus Brody",
      designation: "Associate Professor & Lead AI Lab",
      department: "AI & Data Science",
      email: "marcus.brody@sxit.edu",
      phone: "Ext. 4120",
      room: "AI Centre Room 102",
      status: "In Meeting",
      officeHours: "Friday: 03:00 PM - 05:00 PM",
      researchArea: "Deep Learning, Generative Vision Models, NLP",
      publicationsCount: 42,
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80"
    }
  ],

  facultyAppointments: [
    { id: "apt-1", facultyName: "Dr. Sarah Vance", studentName: "Alex Rivera", date: "2026-09-15", time: "02:30 PM", topic: "Final Year Capstone Project Consultation", status: "Confirmed" }
  ],

  // 6. Hostel & Cafeteria (Features 116-130)
  messMenu: {
    today: "Friday",
    meals: {
      breakfast: { time: "07:30 AM - 09:30 AM", items: ["Steamed Idli & Medu Vada with Sambar", "Coconut & Tomato Chutneys", "Egg / Veg Sandwiches", "Fresh Seasonal Papaya", "Tea / Filter Coffee"], calories: "420 kcal", veg: true },
      lunch: { time: "12:30 PM - 02:30 PM", items: ["Paneer Butter Masala (Veg) / Butter Chicken", "Dal Tadka & Steamed Basmati Rice", "Tandoori Butter Roti", "Cucumber Tomato Mint Raita", "Gulab Jamun (1 pc)"], calories: "780 kcal", veg: false },
      snacks: { time: "05:00 PM - 06:15 PM", items: ["Crispy Onion Pakoda / Samosa with Green Chutney", "Chai / Masala Tea", "Biscuits"], calories: "280 kcal", veg: true },
      dinner: { time: "07:45 PM - 09:45 PM", items: ["Aloo Gobi Matar Masala", "Yellow Moong Dal & Jeera Rice", "Phulkas with Ghee", "Fresh Green Salad", "Vanilla Custard with Fruits"], calories: "640 kcal", veg: true }
    }
  },

  busRoutes: [
    { routeNo: "Route 1", origin: "City Central Station", stops: ["Metro Junction", "MG Road Mall", "Indiranagar Circle", "Campus Main Gate"], morningTime: "07:45 AM", eveningTime: "05:15 PM", driverName: "Mr. Ramesh Patil", driverPhone: "+91 94481 23091", status: "On Time" },
    { routeNo: "Route 2", origin: "North Suburbs Terminal", stops: ["Hebbal Flyover", "Yelahanka Hub", "Tech Park Cross", "Campus Main Gate"], morningTime: "07:30 AM", eveningTime: "05:15 PM", driverName: "Mr. Suresh Gowda", driverPhone: "+91 94481 23092", status: "On Time" },
    { routeNo: "Route 3", origin: "South Tech Corridor", stops: ["Silk Board", "BTM 2nd Stage", "Jaynagar 4th Block", "Campus Main Gate"], morningTime: "07:35 AM", eveningTime: "05:15 PM", driverName: "Mr. Anand Kumar", driverPhone: "+91 94481 23093", status: "Traffic Delay (10m)" }
  ],

  facilityBookings: [
    { id: "bk-1", facilityName: "High Performance Computing Lab (GPU Server)", bookedBy: "Alex Rivera", date: "2026-09-14", timeSlot: "04:00 PM - 06:00 PM", purpose: "Training CNN CIFAR-10 model", status: "Approved" },
    { id: "bk-2", facilityName: "Indoor Badminton Court 2", bookedBy: "Alex Rivera", date: "2026-09-12", timeSlot: "06:00 PM - 07:00 PM", purpose: "Inter-Hostel practice", status: "Confirmed" }
  ],

  hostelAllocation: {
    blockName: "Sir Visvesvaraya Hostel Block 2",
    roomNo: "Room 304 (Double Occupancy AC)",
    floor: "3rd Floor West Wing",
    roommate: "Devon Clark (Robotics Society)",
    wardenName: "Prof. H.K. Sastry",
    wardenPhone: "+91 98450 11223"
  },

  // 7. Student Services, Grievances & Certificates (Features 131-140)
  grievances: [
    { id: "GRV-1024", title: "Hostel 2 3rd Floor Wi-Fi Access Point Frequent Disconnections", category: "IT & Wi-Fi", isAnonymous: false, date: "2026-09-10", status: "In Progress", department: "Network Admin", resolutionNote: "Hardware technician dispatched to replace Cisco AP router." },
    { id: "GRV-1019", title: "Library Air Conditioning Low Cooling in 2nd Floor Reading Hall", category: "Infrastructure", isAnonymous: true, date: "2026-09-08", status: "Resolved", department: "Estate Office", resolutionNote: "HVAC cooling compressor serviced." }
  ],

  leaveApplications: [
    { id: "LV-401", type: "Out-Station / Weekend Pass", fromDate: "2026-09-19", toDate: "2026-09-21", reason: "Visiting family in hometown", destination: "Mysuru", parentApprovalStatus: "Approved via SMS", wardenStatus: "Pass Granted (QR Active)" }
  ],

  certificateRequests: [
    { id: "CERT-881", type: "Bonafide Student Certificate", purpose: "Passport Application Verification", date: "2026-09-09", status: "Ready for Download", serialNo: "SXIT/BONA/2026/0881" },
    { id: "CERT-890", type: "Estimated Tuition Fee Letter", purpose: "Education Loan Subsidy", date: "2026-09-11", status: "Processing", serialNo: "SXIT/FEE/2026/0890" }
  ],

  medicalCenter: {
    doctorOnDuty: "Dr. Anjali Rao (M.D. General Medicine)",
    nurseOnDuty: "Sister Mary V.",
    timings: "Open 24/7 (Emergency) • OPD: 08:30 AM - 08:00 PM",
    ambulanceHotline: "+91 80 2345 6790",
    pharmacyStatus: "Stocked with generic essentials & OTC medicines"
  },

  // 8. Placements & Career Portal (Features 147-148)
  placements: [
    {
      id: "plc-1",
      company: "Google India",
      role: "Software Engineering Intern (Summer 2027)",
      ctc: "₹1,25,000 / month stipend",
      location: "Bengaluru / Hyderabad",
      deadline: "2026-09-26",
      eligibilityCgpa: 8.0,
      skillsRequired: ["Data Structures", "Algorithms", "Python", "System Design"],
      eligible: true,
      applied: true,
      status: "Shortlisted for Online Assessment"
    },
    {
      id: "plc-2",
      company: "Microsoft",
      role: "Support Software Engineer",
      ctc: "₹18.5 LPA",
      location: "Hyderabad",
      deadline: "2026-10-02",
      eligibilityCgpa: 7.5,
      skillsRequired: ["C++", "OS Internals", "Networking"],
      eligible: true,
      applied: false,
      status: "Applications Open"
    },
    {
      id: "plc-3",
      company: "NVIDIA Corporation",
      role: "AI / Deep Learning Research Intern",
      ctc: "₹1,10,000 / month stipend",
      location: "Bengaluru",
      deadline: "2026-09-30",
      eligibilityCgpa: 8.5,
      skillsRequired: ["PyTorch", "CUDA", "C++", "Machine Learning"],
      eligible: true,
      applied: true,
      status: "Application Submitted"
    },
    {
      id: "plc-4",
      company: "Atlassian",
      role: "Junior Cloud Infrastructure Engineer",
      ctc: "₹24.0 LPA",
      location: "Bengaluru / Remote",
      deadline: "2026-10-10",
      eligibilityCgpa: 8.0,
      skillsRequired: ["Docker", "Kubernetes", "AWS", "Go/Python"],
      eligible: true,
      applied: false,
      status: "Applications Open"
    }
  ],

  // 9. Community Forum, Blogs & Alumni (Features 111-115)
  communityPosts: [
    { id: "post-1", author: "Sarah Chen (Final Year)", authorRole: "Peer Mentor", time: "3 hours ago", title: "How to prepare for Operating Systems and DBMS midterm with past 3 years' questions", votes: 48, repliesCount: 14, tags: ["ExamPrep", "StudyTips"] },
    { id: "post-2", author: "Devon Clark", authorRole: "Robotics Lead", time: "Yesterday", title: "Recruiting 4 junior developers for Autonomous Quadcopter Drone competition", votes: 36, repliesCount: 19, tags: ["Robotics", "Recruitment"] },
    { id: "post-3", author: "Ananya Mehta", authorRole: "E-Cell", time: "2 days ago", title: "Pitch Tank registrations are closing soon! Mentorship sessions available this Thursday", votes: 29, repliesCount: 6, tags: ["Startups", "E-Cell"] }
  ],

  alumniList: [
    { id: "alm-1", name: "Kavita Ramachandran", batch: "Class of 2021 (CSE)", currentRole: "Senior ML Engineer at DeepMind", location: "London, UK", linkedIn: "linkedin.com/in/sample-kavita", quote: "St. Xavier's hackathon culture and open lab access were the foundation of my career in generative AI research." },
    { id: "alm-2", name: "Rahul Deshmukh", batch: "Class of 2019 (ECE)", currentRole: "Co-Founder & CTO at HyperLog (Series-A funded)", location: "Bengaluru, India", linkedIn: "linkedin.com/in/sample-rahul", quote: "The entrepreneurship cell gave us our first seed grant and mentorship when we were still dorm room tinkerers." }
  ],

  // 10. Admin Analytics & Institutional Metrics (Features 149-150)
  currentRole: "Student", // Role Switcher: 'Student' | 'Faculty' | 'Admin' | 'Applicant'
  adminMetrics: {
    totalStudents: 8420,
    facultyCount: 380,
    placementRate: "94.8%",
    avgAttendance: "82.4%",
    researchGrants: "₹14.2 Cr",
    activeGrievances: 3,
    departmentBreakdown: [
      { dept: "Computer Science & Engg", students: 2400, faculty: 95, placementRate: "98.2%", avgAttendance: "85%" },
      { dept: "Electronics & Communication", students: 1850, faculty: 78, placementRate: "93.5%", avgAttendance: "81%" },
      { dept: "Mechanical Engineering", students: 1520, faculty: 65, placementRate: "89.4%", avgAttendance: "79%" },
      { dept: "Civil & Environmental", students: 1200, faculty: 52, placementRate: "86.1%", avgAttendance: "82%" },
      { dept: "Information Science & AI", students: 1450, faculty: 90, placementRate: "97.5%", avgAttendance: "84%" }
    ],
    placementTrend: [
      { year: "2022", rate: 91.2, highest: "₹42 LPA", avg: "₹9.4 LPA" },
      { year: "2023", rate: 93.0, highest: "₹48 LPA", avg: "₹10.8 LPA" },
      { year: "2024", rate: 94.5, highest: "₹54 LPA", avg: "₹11.6 LPA" },
      { year: "2025", rate: 96.2, highest: "₹62 LPA", avg: "₹12.8 LPA" }
    ],
    systemLogs: [
      { id: "log-1", time: "10 mins ago", event: "Semester VII End-Term Grade Roster verified by Dean Academic", type: "academic" },
      { id: "log-2", time: "42 mins ago", event: "Google Cloud Innovation Lab license pack renewed (500 seats)", type: "it" },
      { id: "log-3", time: "2 hours ago", event: "Hostel Block 3 Solar Geyser Maintenance work completed", type: "facility" },
      { id: "log-4", time: "4 hours ago", event: "Campus Placement: 42 students shortlisted for Google OA", type: "placement" }
    ]
  },

  // 10. Existing 12 Features Data (Intact & Fully Preserved)
  timetable: [
    { id: "tt-1", day: "Monday", subject: "Operating Systems", professor: "Dr. Sarah Vance", room: "Hall 302", startTime: "09:00", endTime: "10:00", color: "#6366f1" },
    { id: "tt-2", day: "Monday", subject: "Database Management Systems", professor: "Prof. Alan Turing", room: "CS Lab 4", startTime: "10:15", endTime: "11:15", color: "#06b6d4" },
    { id: "tt-3", day: "Monday", subject: "Design & Analysis of Algorithms", professor: "Dr. Maya Patel", room: "Hall 201", startTime: "11:30", endTime: "12:30", color: "#8b5cf6" },
    { id: "tt-4", day: "Monday", subject: "Computer Networks Lab", professor: "Prof. Rajesh Kumar", room: "Network Lab B", startTime: "14:00", endTime: "16:00", color: "#10b981" },
    { id: "tt-5", day: "Tuesday", subject: "Machine Learning & AI", professor: "Dr. Marcus Brody", room: "Tech Aud 1", startTime: "09:00", endTime: "10:30", color: "#f59e0b" },
    { id: "tt-6", day: "Tuesday", subject: "Operating Systems", professor: "Dr. Sarah Vance", room: "Hall 302", startTime: "10:45", endTime: "11:45", color: "#6366f1" },
    { id: "tt-7", day: "Tuesday", subject: "Web Engineering", professor: "Prof. Elena Rostova", room: "CS Lab 2", startTime: "12:00", endTime: "13:00", color: "#ec4899" },
    { id: "tt-8", day: "Tuesday", subject: "Software Project Studio", professor: "Prof. Alan Turing", room: "Innovation Lab", startTime: "14:30", endTime: "16:30", color: "#3b82f6" },
    { id: "tt-9", day: "Wednesday", subject: "Design & Analysis of Algorithms", professor: "Dr. Maya Patel", room: "Hall 201", startTime: "09:00", endTime: "10:00", color: "#8b5cf6" },
    { id: "tt-10", day: "Wednesday", subject: "Database Management Systems", professor: "Prof. Alan Turing", room: "CS Lab 4", startTime: "10:15", endTime: "11:15", color: "#06b6d4" },
    { id: "tt-11", day: "Wednesday", subject: "Technical Communication", professor: "Dr. Anita Desai", room: "Seminar Hall C", startTime: "11:30", endTime: "12:30", color: "#14b8a6" },
    { id: "tt-12", day: "Wednesday", subject: "Open Elective: Quantum Computing", professor: "Prof. K. Thorne", room: "Physics Aud", startTime: "14:00", endTime: "15:30", color: "#a855f7" },
    { id: "tt-13", day: "Thursday", subject: "Computer Networks", professor: "Prof. Rajesh Kumar", room: "Hall 105", startTime: "09:00", endTime: "10:00", color: "#10b981" },
    { id: "tt-14", day: "Thursday", subject: "Machine Learning & AI", professor: "Dr. Marcus Brody", room: "Tech Aud 1", startTime: "10:15", endTime: "11:15", color: "#f59e0b" },
    { id: "tt-15", day: "Thursday", subject: "Operating Systems Lab", professor: "Dr. Sarah Vance", room: "OS Lab A", startTime: "11:30", endTime: "13:30", color: "#6366f1" },
    { id: "tt-16", day: "Thursday", subject: "Research Methodology", professor: "Dr. Maya Patel", room: "Hall 302", startTime: "14:30", endTime: "15:30", color: "#f97316" },
    { id: "tt-17", day: "Friday", subject: "Database Management Systems", professor: "Prof. Alan Turing", room: "CS Lab 4", startTime: "09:00", endTime: "10:00", color: "#06b6d4" },
    { id: "tt-18", day: "Friday", subject: "Web Engineering", professor: "Prof. Elena Rostova", room: "CS Lab 2", startTime: "10:15", endTime: "11:15", color: "#ec4899" },
    { id: "tt-19", day: "Friday", subject: "Computer Networks", professor: "Prof. Rajesh Kumar", room: "Hall 105", startTime: "11:30", endTime: "12:30", color: "#10b981" },
    { id: "tt-20", day: "Friday", subject: "Club & Mentorship Hour", professor: "Student Council", room: "Student Hub", startTime: "15:00", endTime: "17:00", color: "#e11d48" },
    { id: "tt-21", day: "Saturday", subject: "Competitive Programming Workshop", professor: "GDSC Team", room: "Coding Hub", startTime: "10:00", endTime: "12:00", color: "#6366f1" },
    { id: "tt-22", day: "Saturday", subject: "Capstone Review", professor: "Faculty Panel", room: "Tech Aud 2", startTime: "12:30", endTime: "14:00", color: "#3b82f6" }
  ],

  attendance: [
    { id: "att-1", subject: "Operating Systems", code: "CS301", totalClasses: 38, attendedClasses: 33, targetPercentage: 75 },
    { id: "att-2", subject: "Database Management Systems", code: "CS302", totalClasses: 40, attendedClasses: 35, targetPercentage: 75 },
    { id: "att-3", subject: "Design & Analysis of Algorithms", code: "CS303", totalClasses: 36, attendedClasses: 31, targetPercentage: 75 },
    { id: "att-4", subject: "Computer Networks", code: "CS304", totalClasses: 35, attendedClasses: 25, targetPercentage: 75 }, // Alert!
    { id: "att-5", subject: "Machine Learning & AI", code: "CS305", totalClasses: 28, attendedClasses: 22, targetPercentage: 75 },
    { id: "att-6", subject: "Web Engineering", code: "CS306", totalClasses: 32, attendedClasses: 29, targetPercentage: 75 },
    { id: "att-7", subject: "Technical Communication", code: "HS301", totalClasses: 24, attendedClasses: 17, targetPercentage: 75 } // Alert!
  ],

  assignments: [
    {
      id: "asg-1",
      title: "Round Robin & Priority CPU Scheduler Simulator",
      subject: "Operating Systems",
      deadline: "2026-09-13T23:59",
      priority: "Urgent",
      status: "Pending",
      description: "Implement interactive CPU scheduler simulator in C++/Python supporting preemptive priority and Round-Robin with Gantt chart output."
    },
    {
      id: "asg-2",
      title: "B+ Tree Indexing & Query Cost Analyzer",
      subject: "Database Management Systems",
      deadline: "2026-09-15T18:00",
      priority: "High",
      status: "Pending",
      description: "Write SQL queries with EXPLAIN ANALYZE to compare sequential scan vs index scan on a 1M row synthetic customer orders database."
    },
    {
      id: "asg-3",
      title: "Dynamic Programming: Matrix Chain Multiplication & 0/1 Knapsack",
      subject: "Design & Analysis of Algorithms",
      deadline: "2026-09-17T23:59",
      priority: "Medium",
      status: "Pending",
      description: "Submit written proofs and recursive memoization vs bottom-up tabulation implementations with time complexity analysis."
    },
    {
      id: "asg-4",
      title: "Wireshark Packet Analysis on TCP Handshake & DNS Resolution",
      subject: "Computer Networks",
      deadline: "2026-09-10T23:59",
      priority: "High",
      status: "Pending",
      description: "Capture pcap file analyzing 3-way TCP handshake, window size scaling, and DNS TTL resolution sequence."
    },
    {
      id: "asg-5",
      title: "CNN Classifier on CIFAR-10 with Data Augmentation",
      subject: "Machine Learning & AI",
      deadline: "2026-09-22T23:59",
      priority: "High",
      status: "Pending",
      description: "Build and train a convolutional network achieving at least 84% test accuracy with dropout and batch normalization."
    },
    {
      id: "asg-6",
      title: "RESTful Authentication Microservice with JWT",
      subject: "Web Engineering",
      deadline: "2026-09-25T17:00",
      priority: "Medium",
      status: "Completed",
      description: "Create secure user registration, token generation, refresh tokens, and rate limiting with automated unit tests."
    }
  ],

  studySessions: [
    { id: "ss-1", subject: "Operating Systems", topic: "Virtual Memory & Page Replacement Algorithms", date: "2026-09-11", durationMinutes: 50, status: "Completed" },
    { id: "ss-2", subject: "Algorithms", topic: "Dijkstra & Bellman-Ford Shortest Paths", date: "2026-09-11", durationMinutes: 45, status: "Completed" },
    { id: "ss-3", subject: "Database Systems", topic: "ACID Properties & Two-Phase Locking", date: "2026-09-12", durationMinutes: 60, status: "Planned" }
  ],

  events: [
    {
      id: "ev-1",
      title: "HackCampus 2026: 48-Hour National Hackathon",
      category: "Hackathon",
      date: "2026-10-18",
      time: "09:00 AM - 05:00 PM (3 Days)",
      venue: "Main Campus Auditorium & Tech Pavilions",
      organizer: "Google Developer Student Club (GDSC)",
      description: "Build solutions for Smart Cities, Climate Tech, and Health AI. Over $5,000 in prizes, sponsored tracks, and top tech recruiters on-site.",
      tags: ["AI", "Web3", "Cash Prizes", "Mentorship"],
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=80",
      bookmarked: true,
      registeredCount: 420
    },
    {
      id: "ev-2",
      title: "Horizon 2026: Annual Inter-College Cultural Extravaganza",
      category: "Fest",
      date: "2026-11-05",
      time: "10:00 AM - 10:00 PM (3 Days)",
      venue: "Open Air Amphitheatre & Campus Lawns",
      organizer: "Student Cultural Council",
      description: "The biggest campus festival of the year! Battle of the bands, pro celebrity DJ night, street play competitions, art exhibits, and 30+ food trucks.",
      tags: ["Concert", "Dance", "Drama", "Celebrity Night"],
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=80",
      bookmarked: true,
      registeredCount: 2800
    },
    {
      id: "ev-3",
      title: "NextGen AI & Large Language Models Workshop",
      category: "Workshop",
      date: "2026-09-24",
      time: "02:00 PM - 05:30 PM",
      venue: "CS Advanced Lab 1",
      organizer: "AI/ML Research Society",
      description: "Hands-on session fine-tuning open source LLMs with LoRA/QLoRA and deploying semantic RAG search pipelines using vector databases.",
      tags: ["PyTorch", "HuggingFace", "RAG", "Hands-on"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
      bookmarked: false,
      registeredCount: 156
    }
  ],

  notes: [
    {
      id: "note-1",
      title: "Virtual Memory & Inverted Page Tables Cheatsheet",
      subject: "Operating Systems",
      category: "Cheatsheet",
      date: "2026-09-08",
      tags: ["TLB", "Page Faults", "Paging"],
      content: `# Virtual Memory Architecture\n- TLB: Hardware cache for virtual-to-physical address mappings.\n- Inverted Page Table: One entry per physical frame rather than virtual page.\n- Formula: EAT = Hit_Ratio * (TLB_time + Mem_time) + (1 - Hit_Ratio) * (TLB_time + 2 * Mem_time).`,
      link: "https://drive.google.com/sample/os-cheatsheet.pdf"
    },
    {
      id: "note-2",
      title: "Graph Algorithms: Shortest Path & Minimum Spanning Tree",
      subject: "Design & Analysis of Algorithms",
      category: "Exam Notes",
      date: "2026-09-05",
      tags: ["Dijkstra", "Kruskal", "Prim"],
      content: `# Graph Algorithms Quick Summary\n1. Dijkstra: Greedy SSSP with non-negative edge weights O((V + E) log V).\n2. Bellman-Ford: Detects negative cycles O(V * E).\n3. Kruskal: Disjoint Set Union O(E log E).`,
      link: ""
    }
  ],

  gpaRecords: {
    scale: 10,
    semesters: [
      { semNumber: 1, gpa: 8.60, credits: 21 },
      { semNumber: 2, gpa: 8.75, credits: 22 },
      { semNumber: 3, gpa: 8.90, credits: 24 },
      { semNumber: 4, gpa: 8.85, credits: 23 },
      { semNumber: 5, gpa: 9.05, credits: 22 }
    ],
    currentSemesterCourses: [
      { id: "c-1", code: "CS301", name: "Operating Systems", credits: 4, grade: "A+", gradePoint: 9 },
      { id: "c-2", code: "CS302", name: "Database Management Systems", credits: 4, grade: "O", gradePoint: 10 },
      { id: "c-3", code: "CS303", name: "Design & Analysis of Algorithms", credits: 4, grade: "A+", gradePoint: 9 },
      { id: "c-4", code: "CS304", name: "Computer Networks", credits: 3, grade: "A", gradePoint: 8 },
      { id: "c-5", code: "CS305", name: "Machine Learning & AI", credits: 3, grade: "O", gradePoint: 10 },
      { id: "c-6", code: "CS306", name: "Web Engineering", credits: 3, grade: "O", gradePoint: 10 }
    ]
  },

  clubs: [
    {
      id: "club-1",
      name: "Google Developer Student Club (GDSC)",
      category: "Tech & Coding",
      logo: "💻",
      description: "University chapter of global Google developers community. Hackathons, web & mobile bootcamps, and open-source contributions.",
      leads: "Aarav Sharma & Priya Sen",
      regularMeeting: "Every Wednesday at 5:00 PM • Tech Hub Room 102",
      memberCount: 340,
      bannerColor: "from-blue-500 to-indigo-600",
      tags: ["Google Cloud", "Flutter", "Android", "Web"]
    },
    {
      id: "club-2",
      name: "Robotics & Automation Society (RAS)",
      category: "Robotics & Hardware",
      logo: "🤖",
      description: "Autonomous rovers, combat bots, and IoT smart campus sensors with 3D printers and CNC milling.",
      leads: "Devon Clark",
      regularMeeting: "Tuesdays & Fridays at 4:30 PM • Makerspace Lab",
      memberCount: 185,
      bannerColor: "from-amber-500 to-red-600",
      tags: ["Arduino", "ROS", "Drone Tech"]
    },
    {
      id: "club-3",
      name: "The Entrepreneurship Cell (E-Cell)",
      category: "Business & Startups",
      logo: "🚀",
      description: "Student ventures, pitch incubators, VC meetups, and founder fireside chats.",
      leads: "Ananya Mehta",
      regularMeeting: "Thursdays at 6:00 PM • Incubation Lounge",
      memberCount: 220,
      bannerColor: "from-emerald-500 to-teal-700",
      tags: ["Funding", "Startups", "Networking"]
    },
    {
      id: "club-4",
      name: "Rhythm & Beats Music Society",
      category: "Cultural & Arts",
      logo: "🎸",
      description: "Campus acoustic band, fusion orchestra, and music production studio.",
      leads: "Zack Martin & Maya Lin",
      regularMeeting: "Mondays & Thursdays at 5:30 PM • Music Hall 4",
      memberCount: 145,
      bannerColor: "from-purple-500 to-pink-600",
      tags: ["Jam Sessions", "Vocals", "Bands"]
    }
  ],

  lostFound: [
    {
      id: "lf-1",
      type: "Lost",
      title: "Casio fx-991EX ClassWiz Scientific Calculator",
      category: "Electronics",
      location: "Central Library, 2nd Floor Reading Hall table #14",
      date: "2026-09-10",
      description: "Black and white carbon-finish scientific calculator with smiley sticker.",
      contactName: "Alex Rivera",
      contactInfo: "alex.rivera@campus.edu",
      status: "Active",
      reward: "$15 Cafeteria Voucher"
    },
    {
      id: "lf-2",
      type: "Found",
      title: "Navy Blue Hydro Flask 32oz Water Bottle",
      category: "Accessories",
      location: "Mechanical Workshop bench",
      date: "2026-09-11",
      description: "Has several coding stickers. Kept safely with lab attendant.",
      contactName: "Lab Assistant Sharma",
      contactInfo: "Mech Block Room 02",
      status: "Active",
      reward: ""
    }
  ],

  marketplace: [
    {
      id: "mp-1",
      title: "Introduction to Algorithms (CLRS) 4th Edition - Hardcover",
      category: "Textbooks",
      price: 38,
      condition: "Like New",
      description: "Hardly used textbook for Algorithms course. Pristine condition.",
      sellerName: "Sarah Chen",
      sellerContact: "sarah.chen@campus.edu",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=80",
      date: "2026-09-08"
    }
  ],

  notifications: [
    {
      id: "notif-1",
      type: "warning",
      title: "Low Attendance Warning",
      message: "Your attendance in Computer Networks is 71.4% (below 75% requirement). Attend next 5 consecutive classes.",
      time: "2 hours ago",
      read: false,
      link: "#attendance"
    },
    {
      id: "notif-2",
      type: "urgent",
      title: "Assignment Due Soon",
      message: "OS Kernel Process Scheduler Simulator is due tomorrow at 11:59 PM.",
      time: "4 hours ago",
      read: false,
      link: "#assignments"
    },
    {
      id: "notif-3",
      type: "event",
      title: "Campus Placements: Google India Drive Opened",
      message: "Software Engineering Intern summer applications are open until Sept 26.",
      time: "Yesterday",
      read: false,
      link: "#placements"
    }
  ]
};
