// --- FILE: js/sampleData.js ---
// CampusHub Sample Data - Initial State for First-Time Users
const initialData = {
  profile: {
    name: "Alex Rivera",
    rollNo: "CS23B1048",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    email: "alex.rivera@campus.edu",
    degree: "B.Tech Computer Science & Engineering",
    department: "School of Computing & Data Sciences",
    year: "3rd Year",
    semester: "6th Semester",
    currentCgpa: 8.84,
    targetGpa: 9.2,
    bio: "Full-stack developer, open source enthusiast, and campus tech organizer. Passionate about AI & distributed systems.",
    skills: ["Python", "JavaScript / React", "Data Structures", "System Design", "UI/UX Design", "Docker", "Git", "Public Speaking"],
    achievements: [
      { id: "ach-1", title: "1st Place - Smart Campus Hackathon 2025", date: "Nov 2025", badge: "🏆" },
      { id: "ach-2", title: "Dean's Merit List (Consecutive Semesters)", date: "2023 - 2025", badge: "🎖️" },
      { id: "ach-3", title: "Google Cloud Student Innovator", date: "Aug 2025", badge: "☁️" },
      { id: "ach-4", title: "Campus Coding Lead Award", date: "Jan 2026", badge: "🌟" }
    ],
    joinedClubs: ["club-1", "club-2", "club-4"]
  },

  timetable: [
    // Monday
    { id: "tt-1", day: "Monday", subject: "Operating Systems", professor: "Dr. Sarah Vance", room: "Hall 302", startTime: "09:00", endTime: "10:00", color: "#6366f1" },
    { id: "tt-2", day: "Monday", subject: "Database Management Systems", professor: "Prof. Alan Turing", room: "CS Lab 4", startTime: "10:15", endTime: "11:15", color: "#06b6d4" },
    { id: "tt-3", day: "Monday", subject: "Design & Analysis of Algorithms", professor: "Dr. Maya Patel", room: "Hall 201", startTime: "11:30", endTime: "12:30", color: "#8b5cf6" },
    { id: "tt-4", day: "Monday", subject: "Computer Networks Lab", professor: "Prof. Rajesh Kumar", room: "Network Lab B", startTime: "14:00", endTime: "16:00", color: "#10b981" },
    // Tuesday
    { id: "tt-5", day: "Tuesday", subject: "Machine Learning & AI", professor: "Dr. Marcus Brody", room: "Tech Aud 1", startTime: "09:00", endTime: "10:30", color: "#f59e0b" },
    { id: "tt-6", day: "Tuesday", subject: "Operating Systems", professor: "Dr. Sarah Vance", room: "Hall 302", startTime: "10:45", endTime: "11:45", color: "#6366f1" },
    { id: "tt-7", day: "Tuesday", subject: "Web Engineering", professor: "Prof. Elena Rostova", room: "CS Lab 2", startTime: "12:00", endTime: "13:00", color: "#ec4899" },
    { id: "tt-8", day: "Tuesday", subject: "Software Project Studio", professor: "Prof. Alan Turing", room: "Innovation Lab", startTime: "14:30", endTime: "16:30", color: "#3b82f6" },
    // Wednesday
    { id: "tt-9", day: "Wednesday", subject: "Design & Analysis of Algorithms", professor: "Dr. Maya Patel", room: "Hall 201", startTime: "09:00", endTime: "10:00", color: "#8b5cf6" },
    { id: "tt-10", day: "Wednesday", subject: "Database Management Systems", professor: "Prof. Alan Turing", room: "CS Lab 4", startTime: "10:15", endTime: "11:15", color: "#06b6d4" },
    { id: "tt-11", day: "Wednesday", subject: "Technical Communication", professor: "Dr. Anita Desai", room: "Seminar Hall C", startTime: "11:30", endTime: "12:30", color: "#14b8a6" },
    { id: "tt-12", day: "Wednesday", subject: "Open Elective: Quantum Computing", professor: "Prof. K. Thorne", room: "Physics Aud", startTime: "14:00", endTime: "15:30", color: "#a855f7" },
    // Thursday
    { id: "tt-13", day: "Thursday", subject: "Computer Networks", professor: "Prof. Rajesh Kumar", room: "Hall 105", startTime: "09:00", endTime: "10:00", color: "#10b981" },
    { id: "tt-14", day: "Thursday", subject: "Machine Learning & AI", professor: "Dr. Marcus Brody", room: "Tech Aud 1", startTime: "10:15", endTime: "11:15", color: "#f59e0b" },
    { id: "tt-15", day: "Thursday", subject: "Operating Systems Lab", professor: "Dr. Sarah Vance", room: "OS Lab A", startTime: "11:30", endTime: "13:30", color: "#6366f1" },
    { id: "tt-16", day: "Thursday", subject: "Research Methodology", professor: "Dr. Maya Patel", room: "Hall 302", startTime: "14:30", endTime: "15:30", color: "#f97316" },
    // Friday
    { id: "tt-17", day: "Friday", subject: "Database Management Systems", professor: "Prof. Alan Turing", room: "CS Lab 4", startTime: "09:00", endTime: "10:00", color: "#06b6d4" },
    { id: "tt-18", day: "Friday", subject: "Web Engineering", professor: "Prof. Elena Rostova", room: "CS Lab 2", startTime: "10:15", endTime: "11:15", color: "#ec4899" },
    { id: "tt-19", day: "Friday", subject: "Computer Networks", professor: "Prof. Rajesh Kumar", room: "Hall 105", startTime: "11:30", endTime: "12:30", color: "#10b981" },
    { id: "tt-20", day: "Friday", subject: "Club & Mentorship Hour", professor: "Student Council", room: "Student Hub", startTime: "15:00", endTime: "17:00", color: "#e11d48" },
    // Saturday
    { id: "tt-21", day: "Saturday", subject: "Competitive Programming Workshop", professor: "GDSC Team", room: "Coding Hub", startTime: "10:00", endTime: "12:00", color: "#6366f1" },
    { id: "tt-22", day: "Saturday", subject: "Capstone Review", professor: "Faculty Panel", room: "Tech Aud 2", startTime: "12:30", endTime: "14:00", color: "#3b82f6" }
  ],

  attendance: [
    { id: "att-1", subject: "Operating Systems", code: "CS301", totalClasses: 38, attendedClasses: 33, targetPercentage: 75 },
    { id: "att-2", subject: "Database Management Systems", code: "CS302", totalClasses: 40, attendedClasses: 35, targetPercentage: 75 },
    { id: "att-3", subject: "Design & Analysis of Algorithms", code: "CS303", totalClasses: 36, attendedClasses: 31, targetPercentage: 75 },
    { id: "att-4", subject: "Computer Networks", code: "CS304", totalClasses: 35, attendedClasses: 25, targetPercentage: 75 }, // 71.4% Alert!
    { id: "att-5", subject: "Machine Learning & AI", code: "CS305", totalClasses: 28, attendedClasses: 22, targetPercentage: 75 },
    { id: "att-6", subject: "Web Engineering", code: "CS306", totalClasses: 32, attendedClasses: 29, targetPercentage: 75 },
    { id: "att-7", subject: "Technical Communication", code: "HS301", totalClasses: 24, attendedClasses: 17, targetPercentage: 75 } // 70.8% Alert!
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
      deadline: "2026-09-10T23:59", // Overdue to showcase highlight
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
    },
    {
      id: "asg-7",
      title: "Literature Review on Edge AI Deployment",
      subject: "Technical Communication",
      deadline: "2026-09-28T23:59",
      priority: "Low",
      status: "Pending",
      description: "Draft 4-page IEEE formatted survey summarizing lightweight quantized neural network architectures on microcontroller edges."
    },
    {
      id: "asg-8",
      title: "Schema Normalization to Boyce-Codd Normal Form (BCNF)",
      subject: "Database Management Systems",
      deadline: "2026-09-08T23:59",
      priority: "Medium",
      status: "Completed",
      description: "Given a medical clinic database specification with multi-valued dependencies, decompose into 3NF and BCNF relations."
    }
  ],

  studySessions: [
    { id: "ss-1", subject: "Operating Systems", topic: "Virtual Memory & Page Replacement Algorithms", date: "2026-09-11", durationMinutes: 50, status: "Completed" },
    { id: "ss-2", subject: "Algorithms", topic: "Dijkstra & Bellman-Ford Shortest Paths", date: "2026-09-11", durationMinutes: 45, status: "Completed" },
    { id: "ss-3", subject: "Database Systems", topic: "ACID Properties & Two-Phase Locking", date: "2026-09-12", durationMinutes: 60, status: "Planned" },
    { id: "ss-4", subject: "Machine Learning", topic: "Backpropagation Math & Gradient Descent", date: "2026-09-13", durationMinutes: 90, status: "Planned" },
    { id: "ss-5", subject: "Computer Networks", topic: "Subnet Masking & CIDR Routing tables", date: "2026-09-10", durationMinutes: 60, status: "Completed" },
    { id: "ss-6", subject: "Web Engineering", topic: "React Fiber Architecture & Reconciliation", date: "2026-09-09", durationMinutes: 40, status: "Completed" },
    { id: "ss-7", subject: "Operating Systems", topic: "Deadlocks Detection & Banker's Algorithm", date: "2026-09-08", durationMinutes: 75, status: "Completed" }
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
      title: "NextGen AI & Large Language Models Workshop",
      category: "Workshop",
      date: "2026-09-24",
      time: "02:00 PM - 05:30 PM",
      venue: "CS Advanced Lab 1 & Hybrid Stream",
      organizer: "AI/ML Research Society",
      description: "Hands-on session fine-tuning open source LLMs with LoRA/QLoRA and deploying semantic RAG search pipelines using vector databases.",
      tags: ["PyTorch", "HuggingFace", "RAG", "Hands-on"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
      bookmarked: false,
      registeredCount: 156
    },
    {
      id: "ev-3",
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
      id: "ev-4",
      title: "Pitch Tank: Annual Startup Pitch Competition",
      category: "Competition",
      date: "2026-10-02",
      time: "11:00 AM - 04:00 PM",
      venue: "Incubation Center Auditorium",
      organizer: "Campus E-Cell (Entrepreneurship Club)",
      description: "Pitch your venture to angel investors and seed VCs. Up to $10,000 in non-dilutive seed funding and 6 months incubation space.",
      tags: ["Startups", "Funding", "Pitching", "VC"],
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&auto=format&fit=crop&q=80",
      bookmarked: false,
      registeredCount: 88
    },
    {
      id: "ev-5",
      title: "Cloud Native & Kubernetes Masterclass",
      category: "Seminar",
      date: "2026-09-30",
      time: "03:00 PM - 05:00 PM",
      venue: "Seminar Hall B",
      organizer: "Open Source Collective",
      description: "Industry architects break down microservice orchestration, service meshes (Istio), zero-downtime canary deployments, and CI/CD pipelines.",
      tags: ["DevOps", "Kubernetes", "Docker", "Industry Talk"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
      bookmarked: false,
      registeredCount: 190
    },
    {
      id: "ev-6",
      title: "Inter-Hostel Chess Blitz Championship",
      category: "Club Event",
      date: "2026-09-28",
      time: "05:00 PM - 08:30 PM",
      venue: "Student Recreation Center",
      organizer: "Campus Chess Society",
      description: "Fast-paced 3+2 blitz tournament across all undergraduate hostels. Medals, trophies, and rating points awarded to top performers.",
      tags: ["Sports", "Chess", "Hostel Cup"],
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&auto=format&fit=crop&q=80",
      bookmarked: false,
      registeredCount: 64
    }
  ],

  notes: [
    {
      id: "note-1",
      title: "Virtual Memory & Inverted Page Tables Cheatsheet",
      subject: "Operating Systems",
      category: "Cheatsheet",
      date: "2026-09-08",
      tags: ["TLB", "Page Faults", "Paging", "Exam Prep"],
      content: `# Virtual Memory Architecture
- **TLB (Translation Lookaside Buffer)**: Hardware cache for virtual-to-physical address mappings.
- **Page Table Entry (PTE)**: Contains Frame number, Valid/Invalid bit, Dirty bit, Read/Write permissions.
- **Inverted Page Table**: One entry per physical frame rather than virtual page. Drastically reduces memory overhead for 64-bit address spaces!
- **Formula**: Effective Access Time (EAT) = Hit_Ratio * (TLB_time + Mem_time) + (1 - Hit_Ratio) * (TLB_time + 2 * Mem_time).`,
      link: "https://drive.google.com/sample/os-cheatsheet.pdf"
    },
    {
      id: "note-2",
      title: "Graph Algorithms: Shortest Path & Minimum Spanning Tree",
      subject: "Design & Analysis of Algorithms",
      category: "Exam Notes",
      date: "2026-09-05",
      tags: ["Dijkstra", "Kruskal", "Prim", "Graph Theory"],
      content: `# Graph Algorithms Quick Summary
1. **Dijkstra's Algorithm**: Greedy approach for Single Source Shortest Path with non-negative edge weights. Time: O((V + E) log V) with Min-Heap.
2. **Bellman-Ford**: Handles negative weights and detects negative weight cycles. Time: O(V * E).
3. **Kruskal's MST**: Sorts edges by weight and utilizes Disjoint Set Union (DSU) with path compression. Time: O(E log E).
4. **Prim's MST**: Grows a connected tree from starting vertex using priority queue. Time: O(E log V).`,
      link: ""
    },
    {
      id: "note-3",
      title: "SQL Indexing Strategies & Query Optimization",
      subject: "Database Management Systems",
      category: "Lecture Notes",
      date: "2026-09-02",
      tags: ["B-Tree", "Clustered Index", "Query Cost", "SQL"],
      content: `# Database Indexing Best Practices
- Use **Clustered Index** on primary sequential keys (e.g., auto-increment ID). Only ONE clustered index per table.
- **Covering Index**: An index that contains all columns requested in the SELECT statement, avoiding table lookups entirely.
- Avoid wildcard prefixes like \`LIKE '%abc'\` which invalidate index traversal and force sequential table scan.
- Compound Index Column Order: Place high-cardinality equality columns first, then range filter columns.`,
      link: "https://github.com/alexrivera/dbms-optimizations"
    },
    {
      id: "note-4",
      title: "Computer Networks: OSI 7-Layer Model & TCP/IP Stack",
      subject: "Computer Networks",
      category: "Reference",
      date: "2026-08-30",
      tags: ["OSI", "TCP", "UDP", "Subnetting"],
      content: `# Protocol Stack Reference
- **Layer 7 (Application)**: HTTP/HTTPS, DNS, SSH, SMTP.
- **Layer 4 (Transport)**: TCP (reliable, connection-oriented, flow & congestion control) vs UDP (unreliable, connectionless, low latency).
- **Layer 3 (Network)**: IP, ICMP, Routing (OSPF, BGP). Handles logical addressing and packet routing.
- **Layer 2 (Data Link)**: Ethernet, MAC addresses, Framing, Error detection (CRC).
- Subnetting shortcut: /24 = 254 usable hosts, /28 = 14 usable hosts.`,
      link: "https://network-handbook.sample/osi-reference"
    },
    {
      id: "note-5",
      title: "Python ML Cheatsheet: PyTorch & Scikit-Learn Snippets",
      subject: "Machine Learning & AI",
      category: "Code",
      date: "2026-08-25",
      tags: ["PyTorch", "NumPy", "Tensors", "Training Loop"],
      content: `# Standard PyTorch Training Loop
\`\`\`python
for epoch in range(num_epochs):
    model.train()
    for batch_x, batch_y in dataloader:
        optimizer.zero_grad()
        outputs = model(batch_x)
        loss = criterion(outputs, batch_y)
        loss.backward()
        optimizer.step()
\`\`\`
Always ensure gradients are zeroed before backprop!`,
      link: "https://gist.github.com/alexrivera/pytorch-boilerplate"
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
      { id: "c-6", code: "CS306", name: "Web Engineering", credits: 3, grade: "O", gradePoint: 10 },
      { id: "c-7", code: "CS307", name: "Operating Systems Lab", credits: 2, grade: "A+", gradePoint: 9 }
    ]
  },

  clubs: [
    {
      id: "club-1",
      name: "Google Developer Student Club (GDSC)",
      category: "Tech & Coding",
      logo: "💻",
      description: "University chapter of global Google developers community. We host hackathons, web & mobile bootcamps, and open-source contributions.",
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
      description: "Designing autonomous rovers, combat bots, and IoT smart campus sensors. Full access to 3D printers, CNC mills, and soldering bays.",
      leads: "Devon Clark",
      regularMeeting: "Tuesdays & Fridays at 4:30 PM • Makerspace Lab",
      memberCount: 185,
      bannerColor: "from-amber-500 to-red-600",
      tags: ["Arduino", "ROS", "Drone Tech", "Hardware"]
    },
    {
      id: "club-3",
      name: "The Entrepreneurship Cell (E-Cell)",
      category: "Business & Startups",
      logo: "🚀",
      description: "Fostering student ventures, pitch incubators, VC meetups, and founder fireside chats. Turning dorm room ideas into scalable startups.",
      leads: "Ananya Mehta",
      regularMeeting: "Thursdays at 6:00 PM • Incubation Lounge",
      memberCount: 220,
      bannerColor: "from-emerald-500 to-teal-700",
      tags: ["Funding", "Venture Capital", "Networking", "Product"]
    },
    {
      id: "club-4",
      name: "Rhythm & Beats Music Society",
      category: "Cultural & Arts",
      logo: "🎸",
      description: "Campus acoustic band, fusion orchestra, and music production studio. We perform at annual college fests and host open mic acoustic nights.",
      leads: "Zack Martin & Maya Lin",
      regularMeeting: "Mondays & Thursdays at 5:30 PM • Music Hall 4",
      memberCount: 145,
      bannerColor: "from-purple-500 to-pink-600",
      tags: ["Acoustic", "Jam Sessions", "Vocals", "Bands"]
    },
    {
      id: "club-5",
      name: "Aperture Photography & Cinematography",
      category: "Media & Arts",
      logo: "📸",
      description: "Documenting campus life through visual storytelling, photowalks, drone videography, and digital darkroom workshops.",
      leads: "Rohan Kapoor",
      regularMeeting: "Saturday Mornings at 8:00 AM • Campus Lawns",
      memberCount: 110,
      bannerColor: "from-sky-500 to-blue-700",
      tags: ["Photo Walks", "Portraits", "Film", "Lightroom"]
    },
    {
      id: "club-6",
      name: "Campus Titans Sports & Athletics",
      category: "Sports & Fitness",
      logo: "⚽",
      description: "Inter-collegiate football, basketball, badminton, and fitness conditioning. Promoting team spirit and healthy athletic habits.",
      leads: "Captain Vikram Singh",
      regularMeeting: "Daily at 6:30 AM & 5:00 PM • Sports Complex",
      memberCount: 290,
      bannerColor: "from-orange-500 to-amber-600",
      tags: ["Football", "Basketball", "Athletics", "Tournaments"]
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
      description: "Black and white carbon-finish scientific calculator. Has a small yellow smiley sticker on the protective slide cover.",
      contactName: "Alex Rivera",
      contactInfo: "alex.rivera@campus.edu / Ext 4120",
      status: "Active",
      reward: "$15 Cafeteria Voucher"
    },
    {
      id: "lf-2",
      type: "Found",
      title: "Navy Blue Hydro Flask 32oz Water Bottle",
      category: "Accessories",
      location: "Mechanical Engineering Workshop bench",
      date: "2026-09-11",
      description: "Has several coding stickers including GitHub Octocat and React logo. Kept safely with lab attendant Mr. Sharma.",
      contactName: "Lab Assistant Sharma",
      contactInfo: "Mech Block Ground Floor Room 02",
      status: "Active",
      reward: ""
    },
    {
      id: "lf-3",
      type: "Lost",
      title: "Student ID Card with RFID Tag (CS Department)",
      category: "ID Cards",
      location: "Between Main Canteen and CS Block B Lawn",
      date: "2026-09-09",
      description: "ID card belonging to 'Rahul Verma' Roll No CS24B022. Very urgent as library access is blocked without it.",
      contactName: "Rahul Verma",
      contactInfo: "98765-43210 (WhatsApp)",
      status: "Active",
      reward: "Free Coffee"
    },
    {
      id: "lf-4",
      type: "Found",
      title: "Sony WF-1000XM4 Wireless Earbuds Charging Case",
      category: "Electronics",
      location: "Auditorium Row F Seat 12",
      date: "2026-09-08",
      description: "Matte black case without earbuds inside. Battery was at ~60%. Please verify serial number or Bluetooth pairing to claim.",
      contactName: "Security Desk",
      contactInfo: "Main Gate Security Office",
      status: "Active",
      reward: ""
    },
    {
      id: "lf-5",
      type: "Found",
      title: "Set of 3 Keys with Marvel Deadpool Keychain",
      category: "Keys",
      location: "Hostel 4 Ground Floor Water Cooler",
      date: "2026-09-07",
      description: "Two Godrej lock keys and one bicycle lock key on a red metallic ring.",
      contactName: "Hostel 4 Warden Office",
      contactInfo: "Hostel 4 Caretaker",
      status: "Resolved",
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
      description: "Hardly used textbook for Algorithms course. Crisp pages, zero pencil marks, pristine condition. Retail is $85+.",
      sellerName: "Sarah Chen (Final Year CS)",
      sellerContact: "sarah.chen@campus.edu • Room 304 H-2",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=80",
      date: "2026-09-08"
    },
    {
      id: "mp-2",
      title: "Hero Sprint Pro 21-Speed Gear Bicycle with Lock & Helmet",
      category: "Bicycles",
      price: 65,
      condition: "Good",
      description: "Serviced last month with new brake pads and lubricated derailleur. Great for quick commute between campus gates and hostel blocks.",
      sellerName: "David Miller",
      sellerContact: "david.m@campus.edu • Phone: 555-0192",
      image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&auto=format&fit=crop&q=80",
      date: "2026-09-09"
    },
    {
      id: "mp-3",
      title: "Raspberry Pi 4 Model B (4GB RAM) + 32GB SD + Argon ONE Case",
      category: "Electronics",
      price: 55,
      condition: "Like New",
      description: "Complete embedded project setup with power supply, micro HDMI cable, and pre-flashed Raspberry Pi OS. Perfect for IoT/Robotics courses.",
      sellerName: "Devon Clark (Robotics RAS)",
      sellerContact: "devon.ras@campus.edu",
      image: "https://images.unsplash.com/photo-1517055729445-fa7d27394b48?w=500&auto=format&fit=crop&q=80",
      date: "2026-09-10"
    },
    {
      id: "mp-4",
      title: "Dorm Study LED Desk Lamp with 3 Color Modes & Wireless Charger",
      category: "Hostel Gear",
      price: 18,
      condition: "Like New",
      description: "Eye-care adjustable lamp with built-in 10W fast wireless charging pad for your phone. Selling because graduating this term.",
      sellerName: "Jessica Wong",
      sellerContact: "jessica.w@campus.edu • Girls Hostel 3",
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop&q=80",
      date: "2026-09-07"
    },
    {
      id: "mp-5",
      title: "Engineering Mechanics & Graphics Mini Drafter + Drawing Board",
      category: "Stationery & Tools",
      price: 22,
      condition: "Good",
      description: "Standard Omega engineering mini drafter with clamp and 30x20 wooden drawing board. Mandatory for 1st/2nd year civil and mechanical labs.",
      sellerName: "Rohan Kapoor",
      sellerContact: "rohan.k@campus.edu",
      image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=500&auto=format&fit=crop&q=80",
      date: "2026-09-05"
    }
  ],

  notifications: [
    {
      id: "notif-1",
      type: "warning",
      title: "Low Attendance Warning",
      message: "Your attendance in Computer Networks is 71.4% (below 75% requirement). You need 5 consecutive classes to restore 75%.",
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
      title: "HackCampus 2026 Registration Open",
      message: "Over 400 students have registered. Early bird registrations close in 48 hours.",
      time: "Yesterday",
      read: true,
      link: "#events"
    },
    {
      id: "notif-4",
      type: "success",
      title: "Study Goal Milestone",
      message: "You logged 95 minutes of focused study today! Keep up the momentum.",
      time: "Yesterday",
      read: true,
      link: "#study"
    }
  ]
};


// --- FILE: js/utils.js ---
// CampusHub Utilities & Formulas

// HTML escaping helper for safe rendering
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Format date into human readable string
function formatDate(dateString) {
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
function formatDateTime(dateTimeString) {
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
function getCurrentDayName() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = days[new Date().getDay()];
  return today === 'Sunday' ? 'Monday' : today; // Default to Monday if viewed on Sunday
}

// Personalized greeting based on time of day
function getTimeOfDayGreeting(studentName = 'Student') {
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
function isOverdue(deadlineStr, status) {
  if (!deadlineStr || status === 'Completed') return false;
  const deadline = new Date(deadlineStr);
  return deadline < new Date();
}

// Relative time string (e.g. "Due in 2 days", "Overdue by 12 hours")
function getRelativeTime(dateTimeString, status = 'Pending') {
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

function calculateAttendanceStatus(attended, total, target = 75) {
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

const GRADE_POINTS_MAP = {
  'O': 10,
  'A+': 9,
  'A': 8,
  'B+': 7,
  'B': 6,
  'C': 5,
  'P': 4,
  'F': 0
};

function calculateSemesterGpa(courses = []) {
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

function calculateCumulativeCgpa(semesters = []) {
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
function estimateRequiredGpa(currentCgpa, completedCredits, remainingCredits, targetCgpa) {
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

function showToast(message, type = 'info', duration = 3200) {
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
function playChime(type = 'success') {
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
function triggerConfetti() {
  if (typeof window.confetti === 'function') {
    window.confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.75 },
      colors: ['#6366f1', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b']
    });
  }
}


// --- FILE: js/store.js ---
// CampusHub State Store & Persistence Layer


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

const store = new Store();


// --- FILE: js/views/landing.js ---
// CampusHub Landing Page View


function renderLanding(container) {
  const profile = store.getProfile();

  container.innerHTML = `
    <div class="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      
      <!-- Top Landing Nav -->
      <header class="sticky top-0 z-30 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/80 dark:border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-indigo-500/25">
              🎓
            </div>
            <div>
              <span class="text-xl font-black tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:to-pink-400 bg-clip-text text-transparent">CampusHub</span>
              <span class="hidden sm:inline-block ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">v2.4</span>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <button id="landing-theme-toggle" class="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" title="Toggle theme">
              <i data-lucide="${store.getTheme() === 'dark' ? 'sun' : 'moon'}" class="w-5 h-5"></i>
            </button>
            <a href="#dashboard" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]">
              <span>Open Dashboard</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
          </div>
        </div>
      </header>

      <!-- Hero Section -->
      <section class="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
        <!-- Background Gradient Glows -->
        <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl pointer-events-none -z-10 rounded-full"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/60 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-medium mb-6 shadow-sm">
            <span class="flex h-2 w-2 rounded-full bg-indigo-500 animate-ping"></span>
            Built for college students, by students
          </div>

          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight sm:leading-none mb-6">
            Everything you need for college. <br class="hidden sm:inline" />
            <span class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">In one place.</span>
          </h1>

          <p class="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 font-normal">
            Streamline your timetable, track attendance with smart bunk math, conquer assignment deadlines, crush GPA goals, join clubs, and connect with campus peers.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
            <a href="#dashboard" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base shadow-xl shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]">
              <span>Enter CampusHub</span>
              <i data-lucide="sparkles" class="w-5 h-5"></i>
            </a>
            <a href="#profile" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-semibold text-base transition-all hover:scale-[1.02]">
              <img src="${profile.avatar}" class="w-6 h-6 rounded-full object-cover" alt="Student avatar">
              <span>View as ${profile.name.split(' ')[0]}</span>
            </a>
          </div>

          <!-- Feature Cards Spotlight -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
            <!-- Widget 1 -->
            <div class="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-sm card-hover-lift">
              <div class="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                <i data-lucide="shield-check" class="w-6 h-6"></i>
              </div>
              <h3 class="text-lg font-bold mb-2">Smart Attendance Advisor</h3>
              <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">Calculates precise safe bunks or required consecutive classes to protect your 75% requirement.</p>
              <div class="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 inline-block">
                ✓ Prevents debarment
              </div>
            </div>

            <!-- Widget 2 -->
            <div class="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-sm card-hover-lift">
              <div class="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
                <i data-lucide="clock" class="w-6 h-6"></i>
              </div>
              <h3 class="text-lg font-bold mb-2">Live Timetable & Schedule</h3>
              <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">Highlights current happening and upcoming classes with lecture hall numbers and faculty info.</p>
              <div class="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 inline-block">
                🕒 Real-time room locator
              </div>
            </div>

            <!-- Widget 3 -->
            <div class="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-sm card-hover-lift">
              <div class="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 flex items-center justify-center mb-4">
                <i data-lucide="calculator" class="w-6 h-6"></i>
              </div>
              <h3 class="text-lg font-bold mb-2">GPA & Target Estimator</h3>
              <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">Multi-course credit weighted SGPA and cumulative CGPA projections with target simulator.</p>
              <div class="text-xs font-semibold px-2.5 py-1 rounded-md bg-pink-50 dark:bg-pink-950/40 text-pink-700 dark:text-pink-300 inline-block">
                🎯 Honor roll planner
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Campus Statistics Bar -->
      <section class="border-y border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div class="text-3xl sm:text-4xl font-black text-indigo-600 dark:text-indigo-400">12-in-1</div>
              <div class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">Campus Modules</div>
            </div>
            <div>
              <div class="text-3xl sm:text-4xl font-black text-purple-600 dark:text-purple-400">100%</div>
              <div class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">Local Data Privacy</div>
            </div>
            <div>
              <div class="text-3xl sm:text-4xl font-black text-pink-600 dark:text-pink-400">75%</div>
              <div class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">Attendance Guardian</div>
            </div>
            <div>
              <div class="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400">0ms</div>
              <div class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">Instant Load Speed</div>
            </div>
          </div>
        </div>
      </section>

      <!-- All 12 Core Features Grid -->
      <section class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">Complete Student Ecosystem</h2>
          <p class="text-slate-600 dark:text-slate-400 text-base sm:text-lg">No more switching between ten different university portals and chat groups. Everything is unified.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <!-- 1. Student Dashboard -->
          <a href="#dashboard" class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all card-hover-lift block group">
            <div class="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i data-lucide="layout-dashboard" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">1. Student Dashboard</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Personalized greetings, today's schedule, pending tasks, quick stats, and dynamic action buttons.</p>
          </a>

          <!-- 2. Class Timetable -->
          <a href="#timetable" class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all card-hover-lift block group">
            <div class="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i data-lucide="calendar" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">2. Class Timetable</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Weekly schedule planner with room numbers, professors, time slots, and automatic current-class detection.</p>
          </a>

          <!-- 3. Attendance Tracker -->
          <a href="#attendance" class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all card-hover-lift block group">
            <div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i data-lucide="check-check" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">3. Attendance Tracker</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">One-tap presence logging, 75% threshold warnings, and smart bunk / recovery calculations.</p>
          </a>

          <!-- 4. Assignment Manager -->
          <a href="#assignments" class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all card-hover-lift block group">
            <div class="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i data-lucide="check-square" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">4. Assignment & Tasks</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Priority tagging, overdue warnings, status filters, and instant completion celebrations.</p>
          </a>

          <!-- 5. Study Planner & Pomodoro -->
          <a href="#study" class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all card-hover-lift block group">
            <div class="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i data-lucide="timer" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">5. Study Planner & Pomodoro</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Built-in Pomodoro focus timer with audio chimes, daily targets, and weekly study hours breakdown.</p>
          </a>

          <!-- 6. College Events -->
          <a href="#events" class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all card-hover-lift block group">
            <div class="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i data-lucide="sparkles" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">6. College Events & Fests</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Discover upcoming hackathons, tech workshops, fests, and competitions with bookmarking.</p>
          </a>

          <!-- 7. Notes & Resources -->
          <a href="#notes" class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all card-hover-lift block group">
            <div class="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i data-lucide="book-open" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">7. Notes & Resources</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Organized subject repository for lecture slides, exam cheatsheets, code snippets, and study links.</p>
          </a>

          <!-- 8. CGPA / GPA Calculator -->
          <a href="#gpa" class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all card-hover-lift block group">
            <div class="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-950 text-violet-600 dark:text-violet-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i data-lucide="calculator" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">8. CGPA / GPA Calculator</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Real-time semester SGPA and cumulative CGPA calculator with target goal simulator.</p>
          </a>

          <!-- 9. Campus Clubs -->
          <a href="#clubs" class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all card-hover-lift block group">
            <div class="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i data-lucide="users" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">9. Campus Clubs</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Explore technical, cultural, and sports societies. One-click club joining synced to your profile.</p>
          </a>

          <!-- 10. Lost & Found -->
          <a href="#lostfound" class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all card-hover-lift block group">
            <div class="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i data-lucide="help-circle" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">10. Lost & Found</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Campus bulletin for reported missing or discovered items, locations, and return confirmations.</p>
          </a>

          <!-- 11. Campus Marketplace -->
          <a href="#marketplace" class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all card-hover-lift block group">
            <div class="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i data-lucide="shopping-bag" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">11. Peer Marketplace</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Buy and sell pre-loved textbooks, scientific calculators, bicycles, and hostel room essentials.</p>
          </a>

          <!-- 12. Student Profile -->
          <a href="#profile" class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all card-hover-lift block group">
            <div class="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i data-lucide="user" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">12. Student Profile</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Academic portfolio with skills, achievements, joined societies, custom avatars, and data backup.</p>
          </a>

        </div>
      </section>

      <!-- CTA Bottom Section -->
      <section class="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-center">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl sm:text-4xl font-extrabold mb-4">Ready to upgrade your college life?</h2>
          <p class="text-indigo-100 text-lg mb-8 max-w-xl mx-auto">CampusHub comes preloaded with realistic sample data. Zero signups needed to test-drive.</p>
          <a href="#dashboard" class="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-indigo-700 hover:bg-slate-100 font-bold text-base shadow-2xl transition-all hover:scale-105 active:scale-95">
            <span>Launch CampusHub Dashboard</span>
            <i data-lucide="arrow-right" class="w-5 h-5"></i>
          </a>
        </div>
      </section>

      <!-- Footer -->
      <footer class="border-t border-slate-200 dark:border-slate-800 py-8 text-center text-xs text-slate-500 dark:text-slate-400">
        <p>© 2026 CampusHub • Modern Digital Companion for College Students • Free & Open Source</p>
      </footer>

    </div>
  `;

  // Attach event listener for theme toggle
  const themeBtn = container.querySelector('#landing-theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const nextTheme = store.toggleTheme();
      themeBtn.innerHTML = `<i data-lucide="${nextTheme === 'dark' ? 'sun' : 'moon'}" class="w-5 h-5"></i>`;
      if (window.lucide) window.lucide.createIcons();
    });
  }

  // Render icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
}


// --- FILE: js/views/dashboard.js ---
// CampusHub Student Dashboard View

import {
  escapeHtml,
  formatDate,
  formatDateTime,
  getCurrentDayName,
  getTimeOfDayGreeting,
  isOverdue,
  getRelativeTime,
  calculateAttendanceStatus,
  triggerConfetti,
  showToast
} from '../utils.js';

function renderDashboard(container) {
  const profile = store.getProfile();
  const timetable = store.getTimetable();
  const attendance = store.getAttendance();
  const assignments = store.getAssignments();
  const studySessions = store.getStudySessions();
  const events = store.getEvents();
  const notifications = store.getNotifications();

  const currentDay = getCurrentDayName();
  const todayClasses = timetable.filter(c => c.day.toLowerCase() === currentDay.toLowerCase());

  // Aggregate attendance stats
  let totalClassesHeld = 0;
  let totalClassesAttended = 0;
  let lowAttendanceCount = 0;

  attendance.forEach(sub => {
    totalClassesHeld += sub.totalClasses || 0;
    totalClassesAttended += sub.attendedClasses || 0;
    const stat = calculateAttendanceStatus(sub.attendedClasses, sub.totalClasses, sub.targetPercentage);
    if (stat.isBelowTarget) lowAttendanceCount++;
  });

  const overallAttendancePct = totalClassesHeld > 0 ? ((totalClassesAttended / totalClassesHeld) * 100).toFixed(1) : 100;
  const isOverallLow = overallAttendancePct < 75;

  // Assignments stats
  const pendingAssignments = assignments.filter(a => a.status !== 'Completed');
  const overdueAssignments = assignments.filter(a => isOverdue(a.deadline, a.status));

  // Study hours logged this week
  const totalStudyMinutes = studySessions
    .filter(s => s.status === 'Completed')
    .reduce((sum, s) => sum + (s.durationMinutes || 0), 0);
  const studyHours = (totalStudyMinutes / 60).toFixed(1);

  // Determine current/next class
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  let activeClass = null;
  let nextClass = null;

  todayClasses.forEach(cls => {
    const [startH, startM] = cls.startTime.split(':').map(Number);
    const [endH, endM] = cls.endTime.split(':').map(Number);
    const startMins = startH * 60 + startM;
    const endMins = endH * 60 + endM;

    if (currentMinutes >= startMins && currentMinutes <= endMins) {
      activeClass = cls;
    } else if (currentMinutes < startMins && !nextClass) {
      nextClass = cls;
    }
  });

  const greetingData = getTimeOfDayGreeting(profile.name.split(' ')[0]);

  container.innerHTML = `
    <div class="space-y-6">

      <!-- Personalized Welcome Banner -->
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-6 sm:p-8 text-white shadow-xl shadow-indigo-500/15">
        <!-- Ambient decorative shapes -->
        <div class="absolute -right-8 -top-8 w-44 h-44 rounded-full bg-white/10 blur-xl pointer-events-none"></div>
        <div class="absolute right-24 -bottom-10 w-36 h-36 rounded-full bg-pink-500/20 blur-xl pointer-events-none"></div>

        <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-2">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-indigo-100">
              <span>${greetingData.icon}</span>
              <span>${currentDay} • ${profile.semester}</span>
            </div>
            <h1 class="text-2xl sm:text-4xl font-extrabold tracking-tight">
              ${greetingData.greeting}
            </h1>
            <p class="text-indigo-100 text-sm sm:text-base max-w-xl">
              You have <strong class="text-white">${todayClasses.length} classes</strong> scheduled today and <strong class="text-white">${pendingAssignments.length} pending tasks</strong>. Stay focused and keep moving forward!
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <a href="#assignments" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-indigo-700 font-semibold text-sm shadow-md hover:bg-indigo-50 transition-all hover:scale-105 active:scale-95">
              <i data-lucide="plus" class="w-4 h-4"></i>
              <span>New Task</span>
            </a>
            <a href="#study" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-semibold text-sm backdrop-blur-md transition-all">
              <i data-lucide="timer" class="w-4 h-4"></i>
              <span>Start Pomodoro</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Quick Statistics Cards -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        <!-- Attendance Card -->
        <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm card-hover-lift">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Attendance</span>
            <div class="w-8 h-8 rounded-lg ${isOverallLow ? 'bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400' : 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400'} flex items-center justify-center">
              <i data-lucide="${isOverallLow ? 'alert-triangle' : 'shield-check'}" class="w-4 h-4"></i>
            </div>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">${overallAttendancePct}%</span>
            <span class="text-xs font-semibold ${isOverallLow ? 'text-red-600 dark:text-red-400' : 'text-emerald-600 dark:text-emerald-400'}">
              ${isOverallLow ? 'Under 75%' : 'Safe'}
            </span>
          </div>
          <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 mt-3 overflow-hidden">
            <div class="h-2 rounded-full ${isOverallLow ? 'bg-red-500' : 'bg-emerald-500'}" style="width: ${Math.min(100, overallAttendancePct)}%"></div>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-2">
            ${lowAttendanceCount > 0 ? `<span class="text-red-500 font-semibold">${lowAttendanceCount} subject(s)</span> below 75%` : 'All subjects above 75%'}
          </p>
        </div>

        <!-- Pending Tasks Card -->
        <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm card-hover-lift">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Pending Work</span>
            <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400 flex items-center justify-center">
              <i data-lucide="check-square" class="w-4 h-4"></i>
            </div>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">${pendingAssignments.length}</span>
            <span class="text-xs font-medium text-slate-500">Tasks</span>
          </div>
          <div class="mt-3 flex items-center gap-2">
            ${overdueAssignments.length > 0 
              ? `<span class="inline-flex items-center gap-1 text-xs font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/60 px-2 py-0.5 rounded-md">
                  <i data-lucide="alert-circle" class="w-3 h-3"></i> ${overdueAssignments.length} overdue
                </span>` 
              : `<span class="text-xs text-emerald-600 dark:text-emerald-400 font-medium">✓ No overdue tasks</span>`}
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-2">Assignments & lab reports</p>
        </div>

        <!-- Study Hours Card -->
        <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm card-hover-lift">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Study Focus</span>
            <div class="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400 flex items-center justify-center">
              <i data-lucide="flame" class="w-4 h-4"></i>
            </div>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">${studyHours}</span>
            <span class="text-xs font-medium text-slate-500">Hours</span>
          </div>
          <div class="mt-3 flex items-center gap-1.5 text-xs text-purple-600 dark:text-purple-400 font-semibold">
            <i data-lucide="trending-up" class="w-3.5 h-3.5"></i>
            <span>${studySessions.length} total sessions</span>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-2">Logged focus time</p>
        </div>

        <!-- CGPA Card -->
        <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm card-hover-lift">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Current CGPA</span>
            <div class="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400 flex items-center justify-center">
              <i data-lucide="award" class="w-4 h-4"></i>
            </div>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">${profile.currentCgpa}</span>
            <span class="text-xs font-medium text-slate-500">/ 10.0</span>
          </div>
          <div class="mt-3 flex items-center gap-1.5 text-xs text-indigo-600 dark:text-indigo-400 font-semibold">
            <i data-lucide="target" class="w-3.5 h-3.5"></i>
            <span>Target: ${profile.targetGpa}</span>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-2">Scale of 10.0</p>
        </div>

      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-3 overflow-x-auto pb-1 pt-1 no-scrollbar">
        <a href="#timetable" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-indigo-500 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-sm shrink-0">
          <i data-lucide="calendar" class="w-4 h-4 text-indigo-500"></i>
          <span>View Full Schedule</span>
        </a>
        <a href="#attendance" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-emerald-500 dark:hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all shadow-sm shrink-0">
          <i data-lucide="check-check" class="w-4 h-4 text-emerald-500"></i>
          <span>Check Bunk Allowance</span>
        </a>
        <a href="#gpa" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-purple-500 dark:hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-all shadow-sm shrink-0">
          <i data-lucide="calculator" class="w-4 h-4 text-purple-500"></i>
          <span>Calculate Semester GPA</span>
        </a>
        <a href="#notes" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-teal-500 dark:hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-all shadow-sm shrink-0">
          <i data-lucide="book-open" class="w-4 h-4 text-teal-500"></i>
          <span>Browse Notes</span>
        </a>
        <a href="#lostfound" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-red-500 dark:hover:border-red-500 hover:text-red-600 dark:hover:text-red-400 transition-all shadow-sm shrink-0">
          <i data-lucide="help-circle" class="w-4 h-4 text-red-500"></i>
          <span>Report Lost Item</span>
        </a>
      </div>

      <!-- Main Dashboard 2-Column Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <!-- Left Column: Today's Classes & Pending Assignments (2 spans) -->
        <div class="lg:col-span-2 space-y-6">

          <!-- Today's Schedule Card -->
          <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <i data-lucide="calendar" class="w-5 h-5"></i>
                </div>
                <div>
                  <h2 class="text-lg font-bold text-slate-900 dark:text-white">Today's Classes (${currentDay})</h2>
                  <p class="text-xs text-slate-500">${todayClasses.length} lectures scheduled</p>
                </div>
              </div>
              <a href="#timetable" class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">
                <span>All Days</span>
                <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
              </a>
            </div>

            <!-- Active / Next Class Indicator Banner -->
            ${activeClass ? `
              <div class="mb-4 p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <span class="flex h-3 w-3 relative">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-indigo-600"></span>
                  </span>
                  <div>
                    <span class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">Happening Now</span>
                    <h4 class="text-sm font-bold text-slate-900 dark:text-white">${escapeHtml(activeClass.subject)}</h4>
                  </div>
                </div>
                <div class="text-right text-xs font-semibold text-indigo-600 dark:text-indigo-300">
                  <div>${activeClass.room}</div>
                  <div class="text-slate-500">${activeClass.startTime} - ${activeClass.endTime}</div>
                </div>
              </div>
            ` : nextClass ? `
              <div class="mb-4 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                <div class="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                  <i data-lucide="clock" class="w-4 h-4 text-indigo-500"></i>
                  <span>Next up: <strong>${escapeHtml(nextClass.subject)}</strong> in ${nextClass.room}</span>
                </div>
                <span class="font-bold text-indigo-600 dark:text-indigo-400">${nextClass.startTime}</span>
              </div>
            ` : ''}

            <!-- Classes List -->
            ${todayClasses.length > 0 ? `
              <div class="divide-y divide-slate-100 dark:divide-slate-800/80">
                ${todayClasses.map(cls => `
                  <div class="py-3.5 flex items-center justify-between gap-4 group">
                    <div class="flex items-center gap-3 min-w-0">
                      <div class="w-2.5 h-10 rounded-full" style="background-color: ${cls.color || '#6366f1'}"></div>
                      <div class="min-w-0">
                        <div class="flex items-center gap-2">
                          <h4 class="text-sm font-bold text-slate-900 dark:text-white truncate">${escapeHtml(cls.subject)}</h4>
                        </div>
                        <p class="text-xs text-slate-500 dark:text-slate-400 truncate flex items-center gap-2 mt-0.5">
                          <span>${escapeHtml(cls.professor)}</span>
                          <span>•</span>
                          <span class="font-medium text-slate-600 dark:text-slate-300">${escapeHtml(cls.room)}</span>
                        </p>
                      </div>
                    </div>

                    <div class="text-right shrink-0">
                      <div class="text-xs font-bold text-slate-800 dark:text-slate-200">${cls.startTime} - ${cls.endTime}</div>
                    </div>
                  </div>
                `).join('')}
              </div>
            ` : `
              <div class="text-center py-8 text-slate-400">
                <i data-lucide="coffee" class="w-10 h-10 mx-auto mb-2 text-slate-300 dark:text-slate-600"></i>
                <p class="text-sm font-medium">No classes scheduled for today! Enjoy your free time.</p>
              </div>
            `}
          </div>

          <!-- Pending Assignments Widget -->
          <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <i data-lucide="check-square" class="w-5 h-5"></i>
                </div>
                <div>
                  <h2 class="text-lg font-bold text-slate-900 dark:text-white">Upcoming Assignments</h2>
                  <p class="text-xs text-slate-500">${pendingAssignments.length} pending submissions</p>
                </div>
              </div>
              <a href="#assignments" class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">
                <span>View All</span>
                <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
              </a>
            </div>

            ${pendingAssignments.length > 0 ? `
              <div class="space-y-3">
                ${pendingAssignments.slice(0, 4).map(asg => {
                  const overdue = isOverdue(asg.deadline, asg.status);
                  const relTime = getRelativeTime(asg.deadline, asg.status);
                  const priorityColors = {
                    Urgent: 'bg-red-50 text-red-700 dark:bg-red-950/60 dark:text-red-400 border-red-200/60 dark:border-red-900',
                    High: 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border-amber-200/60 dark:border-amber-900',
                    Medium: 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400 border-blue-200/60 dark:border-blue-900',
                    Low: 'bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  };

                  return `
                    <div class="p-3.5 rounded-xl border ${overdue ? 'border-red-300 dark:border-red-900/60 bg-red-50/30 dark:bg-red-950/20' : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30'} flex items-start gap-3 hover:border-indigo-400 transition-colors">
                      <button data-task-id="${asg.id}" class="task-checkbox-btn mt-0.5 w-5 h-5 rounded-md border-2 border-slate-300 dark:border-slate-600 hover:border-indigo-600 flex items-center justify-center shrink-0 transition-colors" title="Mark as completed">
                        <i data-lucide="check" class="w-3 h-3 text-transparent hover:text-indigo-600"></i>
                      </button>

                      <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                          <h4 class="text-sm font-bold text-slate-900 dark:text-white truncate">${escapeHtml(asg.title)}</h4>
                          <span class="text-[10px] font-bold px-2 py-0.5 rounded-full border ${priorityColors[asg.priority] || priorityColors.Medium}">
                            ${asg.priority}
                          </span>
                        </div>
                        <div class="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1">
                          <span>${escapeHtml(asg.subject)}</span>
                          <span>•</span>
                          <span class="${overdue ? 'text-red-600 dark:text-red-400 font-bold' : ''}">
                            ${overdue ? '⚠️ ' : '📅 '}${relTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            ` : `
              <div class="text-center py-8 text-slate-400">
                <i data-lucide="sparkles" class="w-10 h-10 mx-auto mb-2 text-emerald-400"></i>
                <p class="text-sm font-medium text-slate-600 dark:text-slate-300">All caught up! No pending assignments.</p>
              </div>
            `}
          </div>

        </div>

        <!-- Right Column: Notifications & Upcoming Events & Quick Links (1 span) -->
        <div class="space-y-6">

          <!-- Recent Notifications Widget -->
          <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <i data-lucide="bell" class="w-4 h-4"></i>
                </div>
                <h3 class="text-base font-bold text-slate-900 dark:text-white">Recent Alerts</h3>
              </div>
              <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                ${notifications.filter(n => !n.read).length} new
              </span>
            </div>

            <div class="space-y-3">
              ${notifications.slice(0, 3).map(notif => {
                const borderClass = notif.type === 'warning' ? 'border-l-4 border-l-red-500' :
                                    notif.type === 'urgent' ? 'border-l-4 border-l-amber-500' :
                                    notif.type === 'success' ? 'border-l-4 border-l-emerald-500' : 'border-l-4 border-l-indigo-500';
                return `
                  <a href="${notif.link || '#'}" class="block p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 ${borderClass} hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-xs font-bold text-slate-900 dark:text-white">${escapeHtml(notif.title)}</span>
                      <span class="text-[10px] text-slate-400">${notif.time}</span>
                    </div>
                    <p class="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">${escapeHtml(notif.message)}</p>
                  </a>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Upcoming Campus Events Snapshot -->
          <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-xl bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                  <i data-lucide="sparkles" class="w-4 h-4"></i>
                </div>
                <h3 class="text-base font-bold text-slate-900 dark:text-white">Campus Highlights</h3>
              </div>
              <a href="#events" class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">See All</a>
            </div>

            <div class="space-y-3.5">
              ${events.slice(0, 2).map(ev => `
                <div class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 group">
                  <div class="h-24 w-full relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img src="${ev.image}" alt="${escapeHtml(ev.title)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                    <div class="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold">
                      ${ev.category}
                    </div>
                  </div>
                  <div class="p-3 bg-white dark:bg-slate-900">
                    <h4 class="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">${escapeHtml(ev.title)}</h4>
                    <div class="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                      <i data-lucide="calendar" class="w-3 h-3 text-rose-500"></i>
                      <span>${formatDate(ev.date)}</span>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Weekly Study Target Box -->
          <div class="p-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-indigo-100 dark:border-indigo-900/50">
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-800 dark:text-indigo-300">Study Sprint</h4>
              <span class="text-xs font-black text-indigo-600 dark:text-indigo-400">${studyHours} / 15 hrs</span>
            </div>
            <div class="w-full bg-indigo-200/60 dark:bg-indigo-950 rounded-full h-2 overflow-hidden mb-3">
              <div class="bg-indigo-600 h-2 rounded-full" style="width: ${Math.min(100, (parseFloat(studyHours) / 15) * 100)}%"></div>
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-3">Goal: Log at least 15 hours of focused deep study per week.</p>
            <a href="#study" class="block w-full py-2 text-center rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors">
              Open Pomodoro Timer
            </a>
          </div>

        </div>

      </div>

    </div>
  `;

  // Attach interactive checkbox listeners to complete assignments
  container.querySelectorAll('.task-checkbox-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const taskId = btn.dataset.taskId;
      const status = store.toggleAssignmentStatus(taskId);
      if (status === 'Completed') {
        triggerConfetti();
        showToast('Assignment marked as completed! 🎉', 'success');
      }
      renderDashboard(container);
    });
  });

  // Reinitialize icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
}


// --- FILE: js/views/timetable.js ---
// CampusHub Class Timetable View



let selectedDay = getCurrentDayName();
let viewMode = 'day'; // 'day' or 'week'

function renderTimetable(container) {
  const timetable = store.getTimetable();
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Current time detection
  const now = new Date();
  const currentDayActual = daysOfWeek[now.getDay() - 1] || 'Monday';
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  function isCurrentClass(cls) {
    if (cls.day.toLowerCase() !== currentDayActual.toLowerCase()) return false;
    const [sH, sM] = cls.startTime.split(':').map(Number);
    const [eH, eM] = cls.endTime.split(':').map(Number);
    return currentMinutes >= (sH * 60 + sM) && currentMinutes <= (eH * 60 + eM);
  }

  function isUpcomingClass(cls) {
    if (cls.day.toLowerCase() !== currentDayActual.toLowerCase()) return false;
    const [sH, sM] = cls.startTime.split(':').map(Number);
    return currentMinutes < (sH * 60 + sM);
  }

  const dayClasses = timetable
    .filter(c => c.day.toLowerCase() === selectedDay.toLowerCase())
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  container.innerHTML = `
    <div class="space-y-6">

      <!-- Top Header & Actions -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Class Timetable</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage your weekly lectures, lab sessions, and classroom venues.</p>
        </div>

        <div class="flex items-center gap-3">
          <!-- View toggle: Day vs Week -->
          <div class="inline-flex rounded-xl p-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold">
            <button id="view-mode-day" class="px-3 py-1.5 rounded-lg transition-all ${viewMode === 'day' ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'}">
              Day View
            </button>
            <button id="view-mode-week" class="px-3 py-1.5 rounded-lg transition-all ${viewMode === 'week' ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'}">
              Full Week
            </button>
          </div>

          <button id="btn-add-class" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-md shadow-indigo-600/20 transition-all">
            <i data-lucide="plus" class="w-4 h-4"></i>
            <span>Add Class</span>
          </button>
        </div>
      </div>

      <!-- Day Navigation Tabs (in Day Mode) -->
      ${viewMode === 'day' ? `
        <div class="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          ${daysOfWeek.map(day => {
            const isSelected = day.toLowerCase() === selectedDay.toLowerCase();
            const isToday = day.toLowerCase() === currentDayActual.toLowerCase();
            const count = timetable.filter(c => c.day.toLowerCase() === day.toLowerCase()).length;

            return `
              <button data-day="${day}" class="day-tab-btn flex-1 min-w-[110px] p-3 rounded-2xl border text-left transition-all ${
                isSelected
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-600/25'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-indigo-400'
              }">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold uppercase tracking-wider ${isSelected ? 'text-indigo-100' : 'text-slate-400'}">
                    ${day.slice(0, 3)}
                  </span>
                  ${isToday ? `<span class="w-2 h-2 rounded-full ${isSelected ? 'bg-white' : 'bg-emerald-500'}"></span>` : ''}
                </div>
                <div class="text-sm font-black mt-0.5 truncate">${day}</div>
                <div class="text-[11px] mt-1 ${isSelected ? 'text-indigo-200' : 'text-slate-500'}">
                  ${count} ${count === 1 ? 'class' : 'classes'}
                </div>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Day Schedule Content -->
        <div class="space-y-4">
          ${dayClasses.length > 0 ? `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${dayClasses.map(cls => {
                const current = isCurrentClass(cls);
                const upcoming = isUpcomingClass(cls);

                return `
                  <div class="relative p-5 rounded-2xl bg-white dark:bg-slate-900 border ${
                    current
                      ? 'border-indigo-500 ring-2 ring-indigo-500/20 shadow-md shadow-indigo-500/10'
                      : 'border-slate-200/80 dark:border-slate-800'
                  } shadow-sm card-hover-lift group">

                    ${current ? `
                      <div class="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-[11px] font-bold">
                        <span class="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
                        Happening Now
                      </div>
                    ` : upcoming ? `
                      <div class="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[11px] font-semibold">
                        Upcoming
                      </div>
                    ` : ''}

                    <div class="flex items-start gap-4">
                      <div class="w-3 h-14 rounded-full shrink-0" style="background-color: ${cls.color || '#6366f1'}"></div>
                      
                      <div class="flex-1 min-w-0 pr-16">
                        <h3 class="text-base font-bold text-slate-900 dark:text-white truncate">${escapeHtml(cls.subject)}</h3>
                        
                        <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1">
                          <i data-lucide="user" class="w-3.5 h-3.5 text-slate-400"></i>
                          <span>${escapeHtml(cls.professor)}</span>
                        </div>

                        <div class="flex items-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-300 mt-2">
                          <span class="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400">
                            <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
                            ${escapeHtml(cls.room)}
                          </span>
                          <span class="inline-flex items-center gap-1">
                            <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                            ${cls.startTime} - ${cls.endTime}
                          </span>
                        </div>
                      </div>
                    </div>

                    <!-- Actions -->
                    <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-end gap-2 opacity-90 group-hover:opacity-100">
                      <button data-edit-id="${cls.id}" class="edit-class-btn p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" title="Edit Class">
                        <i data-lucide="edit-3" class="w-4 h-4"></i>
                      </button>
                      <button data-delete-id="${cls.id}" class="delete-class-btn p-1.5 rounded-lg text-slate-500 hover:text-red-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" title="Delete Class">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                      </button>
                    </div>

                  </div>
                `;
              }).join('')}
            </div>
          ` : `
            <div class="p-12 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <i data-lucide="calendar-x" class="w-12 h-12 mx-auto text-slate-300 dark:text-slate-600 mb-3"></i>
              <h3 class="text-base font-bold text-slate-900 dark:text-white">No classes on ${selectedDay}</h3>
              <p class="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-4">You have no scheduled academic sessions on this day.</p>
              <button class="btn-quick-add px-4 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
                + Add Class to ${selectedDay}
              </button>
            </div>
          `}
        </div>
      ` : `
        <!-- Full Week Matrix Mode -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${daysOfWeek.map(day => {
            const list = timetable
              .filter(c => c.day.toLowerCase() === day.toLowerCase())
              .sort((a, b) => a.startTime.localeCompare(b.startTime));

            return `
              <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-3">
                  <span class="font-black text-slate-900 dark:text-white text-base">${day}</span>
                  <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    ${list.length} classes
                  </span>
                </div>

                <div class="space-y-3 flex-1">
                  ${list.length > 0 ? list.map(c => `
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border-l-4" style="border-left-color: ${c.color || '#6366f1'}">
                      <div class="text-xs font-bold text-slate-900 dark:text-white truncate">${escapeHtml(c.subject)}</div>
                      <div class="text-[11px] text-slate-500 mt-0.5">${c.startTime} - ${c.endTime} • ${escapeHtml(c.room)}</div>
                      <div class="text-[11px] text-slate-400 truncate">${escapeHtml(c.professor)}</div>
                    </div>
                  `).join('') : `
                    <div class="text-xs text-slate-400 py-6 text-center italic">Free Day</div>
                  `}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `}

      <!-- Modal Container for Add / Edit Class -->
      <div id="class-modal" class="fixed inset-0 z-50 hidden bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 modal-enter">
          <div class="flex items-center justify-between mb-4">
            <h3 id="class-modal-title" class="text-lg font-extrabold text-slate-900 dark:text-white">Add New Class</h3>
            <button id="class-modal-close" class="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <form id="class-form" class="space-y-4">
            <input type="hidden" id="class-edit-id" value="">

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Subject Name *</label>
              <input type="text" id="class-subject" required placeholder="e.g. Operating Systems" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Day of Week *</label>
                <select id="class-day" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                  ${daysOfWeek.map(d => `<option value="${d}">${d}</option>`).join('')}
                </select>
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Room / Hall *</label>
                <input type="text" id="class-room" required placeholder="e.g. Hall 302" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Professor / Instructor</label>
              <input type="text" id="class-professor" placeholder="e.g. Dr. Sarah Vance" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Start Time *</label>
                <input type="time" id="class-start-time" required value="09:00" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">End Time *</label>
                <input type="time" id="class-end-time" required value="10:00" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Color Tag</label>
              <div class="flex items-center gap-3">
                ${['#6366f1', '#06b6d4', '#8b5cf6', '#10b981', '#f59e0b', '#ec4899', '#3b82f6'].map(col => `
                  <label class="cursor-pointer">
                    <input type="radio" name="class-color" value="${col}" class="sr-only peer" ${col === '#6366f1' ? 'checked' : ''}>
                    <div class="w-7 h-7 rounded-full peer-checked:ring-4 peer-checked:ring-indigo-300 dark:peer-checked:ring-indigo-700 transition-all" style="background-color: ${col}"></div>
                  </label>
                `).join('')}
              </div>
            </div>

            <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button type="button" id="class-modal-cancel" class="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-semibold">
                Cancel
              </button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold shadow-md shadow-indigo-600/25">
                Save Class
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  `;

  // Attach Day tab listeners
  container.querySelectorAll('.day-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedDay = btn.dataset.day;
      renderTimetable(container);
    });
  });

  // Attach view mode buttons
  const btnDay = container.querySelector('#view-mode-day');
  const btnWeek = container.querySelector('#view-mode-week');
  if (btnDay) btnDay.onclick = () => { viewMode = 'day'; renderTimetable(container); };
  if (btnWeek) btnWeek.onclick = () => { viewMode = 'week'; renderTimetable(container); };

  // Modal logic
  const modal = container.querySelector('#class-modal');
  const modalTitle = container.querySelector('#class-modal-title');
  const classForm = container.querySelector('#class-form');
  const closeBtn = container.querySelector('#class-modal-close');
  const cancelBtn = container.querySelector('#class-modal-cancel');

  function openAddModal(defaultDay = selectedDay) {
    modalTitle.textContent = 'Add New Class';
    classForm.reset();
    container.querySelector('#class-edit-id').value = '';
    container.querySelector('#class-day').value = defaultDay;
    modal.classList.remove('hidden');
  }

  function closeModal() {
    modal.classList.add('hidden');
  }

  const btnAdd = container.querySelector('#btn-add-class');
  if (btnAdd) btnAdd.onclick = () => openAddModal();

  const btnQuickAdd = container.querySelector('.btn-quick-add');
  if (btnQuickAdd) btnQuickAdd.onclick = () => openAddModal(selectedDay);

  if (closeBtn) closeBtn.onclick = closeModal;
  if (cancelBtn) cancelBtn.onclick = closeModal;

  // Edit class
  container.querySelectorAll('.edit-class-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.editId;
      const cls = timetable.find(c => c.id === id);
      if (cls) {
        modalTitle.textContent = 'Edit Class';
        container.querySelector('#class-edit-id').value = cls.id;
        container.querySelector('#class-subject').value = cls.subject;
        container.querySelector('#class-day').value = cls.day;
        container.querySelector('#class-room').value = cls.room;
        container.querySelector('#class-professor').value = cls.professor || '';
        container.querySelector('#class-start-time').value = cls.startTime;
        container.querySelector('#class-end-time').value = cls.endTime;
        const colorRadio = container.querySelector(`input[name="class-color"][value="${cls.color}"]`);
        if (colorRadio) colorRadio.checked = true;
        modal.classList.remove('hidden');
      }
    });
  });

  // Delete class
  container.querySelectorAll('.delete-class-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.deleteId;
      if (confirm('Are you sure you want to delete this class from your timetable?')) {
        store.deleteClass(id);
        showToast('Class removed from schedule', 'info');
        renderTimetable(container);
      }
    });
  });

  // Handle Form Submission
  if (classForm) {
    classForm.onsubmit = (e) => {
      e.preventDefault();
      const editId = container.querySelector('#class-edit-id').value;
      const selectedColor = container.querySelector('input[name="class-color"]:checked')?.value || '#6366f1';

      const classData = {
        subject: container.querySelector('#class-subject').value.trim(),
        day: container.querySelector('#class-day').value,
        room: container.querySelector('#class-room').value.trim(),
        professor: container.querySelector('#class-professor').value.trim() || 'Staff Faculty',
        startTime: container.querySelector('#class-start-time').value,
        endTime: container.querySelector('#class-end-time').value,
        color: selectedColor
      };

      if (editId) {
        store.updateClass(editId, classData);
        showToast('Class updated successfully!', 'success');
      } else {
        store.addClass(classData);
        showToast('New class added to schedule!', 'success');
      }

      closeModal();
      renderTimetable(container);
    };
  }

  if (window.lucide) window.lucide.createIcons();
}


// --- FILE: js/views/attendance.js ---
// CampusHub Attendance Tracker & Smart Bunk Advisor View



function renderAttendance(container) {
  const attendance = store.getAttendance();

  let aggregateHeld = 0;
  let aggregateAttended = 0;
  let warningCount = 0;

  attendance.forEach(sub => {
    aggregateHeld += (sub.totalClasses || 0);
    aggregateAttended += (sub.attendedClasses || 0);
    const stat = calculateAttendanceStatus(sub.attendedClasses, sub.totalClasses, sub.targetPercentage);
    if (stat.isBelowTarget) warningCount++;
  });

  const overallStat = calculateAttendanceStatus(aggregateAttended, aggregateHeld, 75);

  container.innerHTML = `
    <div class="space-y-6">

      <!-- Header & Top Action -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Attendance Tracker</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Smart Bunk Advisor & 75% Eligibility Monitor.</p>
        </div>

        <button id="btn-add-subject" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-md shadow-emerald-600/20 transition-all">
          <i data-lucide="plus" class="w-4 h-4"></i>
          <span>Add Subject</span>
        </button>
      </div>

      <!-- Warning Alert Banner if any subject is < 75% -->
      ${warningCount > 0 ? `
        <div class="p-4 sm:p-5 rounded-2xl bg-red-50 dark:bg-red-950/40 border-2 border-red-300 dark:border-red-900 text-red-900 dark:text-red-200 flex items-start gap-4">
          <div class="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/60 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0">
            <i data-lucide="alert-triangle" class="w-6 h-6"></i>
          </div>
          <div class="flex-1">
            <h3 class="text-base font-bold">Attendance Warning Alert!</h3>
            <p class="text-sm text-red-800 dark:text-red-300 mt-0.5">
              You have <strong>${warningCount} subject${warningCount > 1 ? 's' : ''}</strong> currently falling below the required 75% attendance threshold. You risk being debarred from midterms/finals unless you attend upcoming classes.
            </p>
          </div>
        </div>
      ` : ''}

      <!-- Overall Attendance Summary Hero -->
      <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          <!-- Overall Circle Metric -->
          <div class="flex items-center gap-5">
            <div class="relative w-24 h-24 shrink-0 flex items-center justify-center">
              <svg class="w-24 h-24 transform -rotate-90">
                <circle cx="48" cy="48" r="40" stroke="currentColor" stroke-width="8" class="text-slate-100 dark:text-slate-800" fill="transparent" />
                <circle cx="48" cy="48" r="40" stroke="currentColor" stroke-width="8" class="${overallStat.isBelowTarget ? 'text-red-500' : 'text-emerald-500'} timer-ring-circle" fill="transparent" stroke-dasharray="251.2" stroke-dashoffset="${251.2 - (251.2 * overallStat.percentage) / 100}" stroke-linecap="round" />
              </svg>
              <div class="absolute text-center">
                <span class="text-xl font-black text-slate-900 dark:text-white">${overallStat.formattedPercentage}%</span>
              </div>
            </div>
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Overall Attendance</span>
              <h2 class="text-lg font-black text-slate-900 dark:text-white mt-0.5">
                ${overallStat.isBelowTarget ? '⚠️ Action Required' : '🎉 In the Safe Zone'}
              </h2>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                ${aggregateAttended} attended out of ${aggregateHeld} total held
              </p>
            </div>
          </div>

          <!-- Overall Safe Bunks -->
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            <div class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Bunk Margin</div>
            <div class="text-2xl font-black text-slate-900 dark:text-white mt-1">
              ${overallStat.isBelowTarget ? `<span class="text-red-600 dark:text-red-400">0 Classes</span>` : `${overallStat.bunkAllowance} Classes`}
            </div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
              ${overallStat.statusMessage}
            </p>
          </div>

          <!-- Subjects Status Count -->
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            <div class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Tracked Subjects</div>
            <div class="text-2xl font-black text-slate-900 dark:text-white mt-1">
              ${attendance.length} Subjects
            </div>
            <div class="flex items-center gap-3 text-xs mt-1">
              <span class="text-emerald-600 dark:text-emerald-400 font-semibold">✓ ${attendance.length - warningCount} Safe</span>
              <span class="text-red-600 dark:text-red-400 font-semibold">⚠️ ${warningCount} Critical</span>
            </div>
          </div>

        </div>
      </div>

      <!-- Subject Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${attendance.map(sub => {
          const stat = calculateAttendanceStatus(sub.attendedClasses, sub.totalClasses, sub.targetPercentage);
          const colorStyles = {
            emerald: {
              badge: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
              bar: 'bg-emerald-500',
              border: 'border-slate-200/80 dark:border-slate-800'
            },
            amber: {
              badge: 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800',
              bar: 'bg-amber-500',
              border: 'border-amber-300 dark:border-amber-900'
            },
            red: {
              badge: 'bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-300 border-red-300 dark:border-red-900',
              bar: 'bg-red-500',
              border: 'border-red-400 dark:border-red-900 ring-2 ring-red-500/10'
            }
          };
          const style = colorStyles[stat.statusColor] || colorStyles.emerald;

          return `
            <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border ${style.border} shadow-sm card-hover-lift flex flex-col justify-between">
              
              <div>
                <!-- Top Row: Subject & Percentage -->
                <div class="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">${escapeHtml(sub.code)}</span>
                    <h3 class="text-base font-extrabold text-slate-900 dark:text-white line-clamp-1">${escapeHtml(sub.subject)}</h3>
                  </div>
                  <span class="text-xl font-black ${stat.isBelowTarget ? 'text-red-600 dark:text-red-400' : 'text-slate-900 dark:text-white'}">
                    ${stat.formattedPercentage}%
                  </span>
                </div>

                <!-- Progress Bar -->
                <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden my-3">
                  <div class="h-2.5 rounded-full ${style.bar} transition-all duration-500" style="width: ${Math.min(100, stat.percentage)}%"></div>
                </div>

                <!-- Count Info -->
                <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span>Attended: <strong class="text-slate-800 dark:text-slate-200">${sub.attendedClasses}</strong> / ${sub.totalClasses}</span>
                  <span>Target: <strong>${sub.targetPercentage || 75}%</strong></span>
                </div>

                <!-- Smart Advisor Box -->
                <div class="p-3 rounded-xl border text-xs font-medium ${style.badge} mb-4">
                  ${stat.statusMessage}
                </div>
              </div>

              <!-- Action Buttons -->
              <div>
                <div class="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <button data-subject-id="${sub.id}" data-action="present" class="btn-mark-att inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900 text-emerald-700 dark:text-emerald-300 font-bold text-xs transition-colors">
                    <i data-lucide="check" class="w-4 h-4"></i>
                    <span>+ Present</span>
                  </button>

                  <button data-subject-id="${sub.id}" data-action="absent" class="btn-mark-att inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-red-50 hover:bg-red-100 dark:bg-red-950/60 dark:hover:bg-red-900 text-red-700 dark:text-red-300 font-bold text-xs transition-colors">
                    <i data-lucide="x" class="w-4 h-4"></i>
                    <span>+ Absent</span>
                  </button>
                </div>

                <div class="flex items-center justify-end gap-3 mt-2 text-xs text-slate-400">
                  <button data-edit-id="${sub.id}" class="edit-subject-btn hover:text-indigo-600 transition-colors">Edit</button>
                  <span>•</span>
                  <button data-delete-id="${sub.id}" class="delete-subject-btn hover:text-red-600 transition-colors">Delete</button>
                </div>
              </div>

            </div>
          `;
        }).join('')}
      </div>

      <!-- Add/Edit Subject Modal -->
      <div id="subject-modal" class="fixed inset-0 z-50 hidden bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 modal-enter">
          <div class="flex items-center justify-between mb-4">
            <h3 id="subject-modal-title" class="text-lg font-extrabold text-slate-900 dark:text-white">Add Subject</h3>
            <button id="subject-modal-close" class="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <form id="subject-form" class="space-y-4">
            <input type="hidden" id="subject-edit-id" value="">

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Subject Name *</label>
              <input type="text" id="sub-name" required placeholder="e.g. Distributed Operating Systems" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none">
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Course Code</label>
                <input type="text" id="sub-code" placeholder="e.g. CS401" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Target % *</label>
                <input type="number" id="sub-target" min="50" max="100" value="75" required class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none">
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Total Classes Held *</label>
                <input type="number" id="sub-total" min="0" value="0" required class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Classes Attended *</label>
                <input type="number" id="sub-attended" min="0" value="0" required class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none">
              </div>
            </div>

            <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button type="button" id="subject-modal-cancel" class="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-semibold">
                Cancel
              </button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md shadow-emerald-600/25">
                Save Subject
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  `;

  // Mark Present / Absent buttons
  container.querySelectorAll('.btn-mark-att').forEach(btn => {
    btn.addEventListener('click', () => {
      const subjectId = btn.dataset.subjectId;
      const action = btn.dataset.action; // 'present' or 'absent'
      store.markAttendance(subjectId, action);
      if (action === 'present') {
        playChime('success');
        showToast('Marked Present! Attendance updated.', 'success');
      } else {
        playChime('warning');
        showToast('Marked Absent. Attendance updated.', 'warning');
      }
      renderAttendance(container);
    });
  });

  // Modal setup
  const modal = container.querySelector('#subject-modal');
  const modalTitle = container.querySelector('#subject-modal-title');
  const form = container.querySelector('#subject-form');
  const closeBtn = container.querySelector('#subject-modal-close');
  const cancelBtn = container.querySelector('#subject-modal-cancel');

  function openAddModal() {
    modalTitle.textContent = 'Add Subject';
    form.reset();
    container.querySelector('#subject-edit-id').value = '';
    modal.classList.remove('hidden');
  }

  function closeModal() {
    modal.classList.add('hidden');
  }

  const btnAdd = container.querySelector('#btn-add-subject');
  if (btnAdd) btnAdd.onclick = openAddModal;
  if (closeBtn) closeBtn.onclick = closeModal;
  if (cancelBtn) cancelBtn.onclick = closeModal;

  // Edit Subject
  container.querySelectorAll('.edit-subject-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.editId;
      const sub = attendance.find(s => s.id === id);
      if (sub) {
        modalTitle.textContent = 'Edit Subject Attendance';
        container.querySelector('#subject-edit-id').value = sub.id;
        container.querySelector('#sub-name').value = sub.subject;
        container.querySelector('#sub-code').value = sub.code || '';
        container.querySelector('#sub-target').value = sub.targetPercentage || 75;
        container.querySelector('#sub-total').value = sub.totalClasses;
        container.querySelector('#sub-attended').value = sub.attendedClasses;
        modal.classList.remove('hidden');
      }
    });
  });

  // Delete Subject
  container.querySelectorAll('.delete-subject-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.deleteId;
      if (confirm('Delete this subject from your attendance tracker?')) {
        store.deleteSubject(id);
        showToast('Subject deleted', 'info');
        renderAttendance(container);
      }
    });
  });

  // Form Submit
  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const editId = container.querySelector('#subject-edit-id').value;
      const data = {
        subject: container.querySelector('#sub-name').value.trim(),
        code: container.querySelector('#sub-code').value.trim(),
        targetPercentage: parseInt(container.querySelector('#sub-target').value, 10) || 75,
        totalClasses: parseInt(container.querySelector('#sub-total').value, 10) || 0,
        attendedClasses: parseInt(container.querySelector('#sub-attended').value, 10) || 0
      };

      if (data.attendedClasses > data.totalClasses) {
        alert('Attended classes cannot exceed total classes held!');
        return;
      }

      if (editId) {
        store.updateSubject(editId, data);
        showToast('Subject updated!', 'success');
      } else {
        store.addSubject(data);
        showToast('New subject added to attendance tracker!', 'success');
      }

      closeModal();
      renderAttendance(container);
    };
  }

  if (window.lucide) window.lucide.createIcons();
}


// --- FILE: js/views/assignments.js ---
// CampusHub Assignment & Task Manager View



let filterStatus = 'All'; // 'All', 'Pending', 'Completed', 'Overdue'
let filterPriority = 'All'; // 'All', 'Urgent', 'High', 'Medium', 'Low'
let filterSubject = 'All';
let searchQuery = '';
let sortBy = 'deadline-asc'; // 'deadline-asc', 'priority-desc', 'title-asc'

function renderAssignments(container) {
  const assignments = store.getAssignments();
  const timetable = store.getTimetable();

  // Extract distinct subjects
  const subjectSet = new Set();
  assignments.forEach(a => { if (a.subject) subjectSet.add(a.subject); });
  timetable.forEach(t => { if (t.subject) subjectSet.add(t.subject); });
  const subjectsList = Array.from(subjectSet).sort();

  // Filter assignments
  let filtered = assignments.filter(a => {
    const overdue = isOverdue(a.deadline, a.status);

    // Status filter
    if (filterStatus === 'Pending' && a.status === 'Completed') return false;
    if (filterStatus === 'Completed' && a.status !== 'Completed') return false;
    if (filterStatus === 'Overdue' && !overdue) return false;

    // Priority filter
    if (filterPriority !== 'All' && a.priority !== filterPriority) return false;

    // Subject filter
    if (filterSubject !== 'All' && a.subject !== filterSubject) return false;

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = (a.title || '').toLowerCase().includes(q);
      const matchSubject = (a.subject || '').toLowerCase().includes(q);
      const matchDesc = (a.description || '').toLowerCase().includes(q);
      if (!matchTitle && !matchSubject && !matchDesc) return false;
    }

    return true;
  });

  // Sorting
  const priorityWeight = { 'Urgent': 4, 'High': 3, 'Medium': 2, 'Low': 1 };
  filtered.sort((a, b) => {
    if (sortBy === 'deadline-asc') {
      return (new Date(a.deadline || 0)) - (new Date(b.deadline || 0));
    } else if (sortBy === 'priority-desc') {
      return (priorityWeight[b.priority] || 0) - (priorityWeight[a.priority] || 0);
    } else if (sortBy === 'title-asc') {
      return (a.title || '').localeCompare(b.title || '');
    }
    return 0;
  });

  const pendingCount = assignments.filter(a => a.status !== 'Completed').length;
  const overdueCount = assignments.filter(a => isOverdue(a.deadline, a.status)).length;
  const completedCount = assignments.filter(a => a.status === 'Completed').length;

  container.innerHTML = `
    <div class="space-y-6">

      <!-- Header & Top Action -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Assignments & Tasks</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Track course submissions, project milestones, and exam prep tasks.</p>
        </div>

        <button id="btn-add-assignment" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-md shadow-indigo-600/20 transition-all">
          <i data-lucide="plus" class="w-4 h-4"></i>
          <span>New Assignment</span>
        </button>
      </div>

      <!-- Quick Metrics Ribbon -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div class="text-xs font-semibold text-slate-400 uppercase">Total Tasks</div>
          <div class="text-2xl font-black text-slate-900 dark:text-white mt-1">${assignments.length}</div>
        </div>
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div class="text-xs font-semibold text-amber-500 uppercase">Pending</div>
          <div class="text-2xl font-black text-amber-600 dark:text-amber-400 mt-1">${pendingCount}</div>
        </div>
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div class="text-xs font-semibold text-red-500 uppercase">Overdue</div>
          <div class="text-2xl font-black text-red-600 dark:text-red-400 mt-1">${overdueCount}</div>
        </div>
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div class="text-xs font-semibold text-emerald-500 uppercase">Completed</div>
          <div class="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">${completedCount}</div>
        </div>
      </div>

      <!-- Filters & Search Toolbar -->
      <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
        
        <div class="flex flex-col md:flex-row items-center gap-3">
          <!-- Search input -->
          <div class="relative flex-1 w-full">
            <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
            <input type="text" id="asg-search" value="${escapeHtml(searchQuery)}" placeholder="Search tasks by title, subject or notes..." class="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
          </div>

          <!-- Sort dropdown -->
          <div class="w-full md:w-auto shrink-0">
            <select id="asg-sort" class="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="deadline-asc" ${sortBy === 'deadline-asc' ? 'selected' : ''}>Deadline: Soonest First</option>
              <option value="priority-desc" ${sortBy === 'priority-desc' ? 'selected' : ''}>Priority: Highest First</option>
              <option value="title-asc" ${sortBy === 'title-asc' ? 'selected' : ''}>Alphabetical: A to Z</option>
            </select>
          </div>
        </div>

        <!-- Filter Pills Bar -->
        <div class="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
          <!-- Status Tabs -->
          <div class="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            ${['All', 'Pending', 'Overdue', 'Completed'].map(st => `
              <button data-status="${st}" class="filter-status-btn px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                filterStatus === st
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }">
                ${st}
              </button>
            `).join('')}
          </div>

          <!-- Secondary Filters: Priority & Subject -->
          <div class="flex items-center gap-2">
            <select id="filter-priority" class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">
              <option value="All">All Priorities</option>
              <option value="Urgent" ${filterPriority === 'Urgent' ? 'selected' : ''}>Urgent</option>
              <option value="High" ${filterPriority === 'High' ? 'selected' : ''}>High</option>
              <option value="Medium" ${filterPriority === 'Medium' ? 'selected' : ''}>Medium</option>
              <option value="Low" ${filterPriority === 'Low' ? 'selected' : ''}>Low</option>
            </select>

            <select id="filter-subject" class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs max-w-[150px] truncate">
              <option value="All">All Subjects</option>
              ${subjectsList.map(s => `
                <option value="${escapeHtml(s)}" ${filterSubject === s ? 'selected' : ''}>${escapeHtml(s)}</option>
              `).join('')}
            </select>
          </div>
        </div>

      </div>

      <!-- Assignment Cards List -->
      <div class="space-y-3">
        ${filtered.length > 0 ? filtered.map(asg => {
          const isDone = asg.status === 'Completed';
          const overdue = isOverdue(asg.deadline, asg.status);
          const relTime = getRelativeTime(asg.deadline, asg.status);

          const priorityBadge = {
            Urgent: 'bg-red-50 text-red-700 dark:bg-red-950/60 dark:text-red-300 border-red-200 dark:border-red-900',
            High: 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-900',
            Medium: 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-900',
            Low: 'bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border-slate-200 dark:border-slate-700'
          }[asg.priority] || 'bg-slate-100 text-slate-700';

          return `
            <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border ${
              overdue
                ? 'border-red-300 dark:border-red-900/80 bg-red-50/20 dark:bg-red-950/10'
                : isDone
                ? 'border-slate-200/60 dark:border-slate-800/60 opacity-75'
                : 'border-slate-200/80 dark:border-slate-800'
            } shadow-sm card-hover-lift flex items-start gap-4 group">
              
              <!-- Checkbox button -->
              <button data-task-id="${asg.id}" class="task-toggle-btn mt-1 w-6 h-6 rounded-lg border-2 ${
                isDone
                  ? 'bg-emerald-500 border-emerald-500 text-white'
                  : 'border-slate-300 dark:border-slate-600 hover:border-indigo-600'
              } flex items-center justify-center shrink-0 transition-all">
                <i data-lucide="check" class="w-3.5 h-3.5 ${isDone ? 'block' : 'text-transparent hover:text-indigo-600'}"></i>
              </button>

              <!-- Main Content -->
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between gap-3 flex-wrap">
                  <div class="flex items-center gap-2 flex-wrap">
                    <h3 class="text-base font-bold ${isDone ? 'line-through text-slate-400 dark:text-slate-500' : 'text-slate-900 dark:text-white'}">
                      ${escapeHtml(asg.title)}
                    </h3>
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full border ${priorityBadge}">
                      ${asg.priority}
                    </span>
                    <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      ${escapeHtml(asg.subject)}
                    </span>
                  </div>

                  <!-- Deadline badge -->
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-semibold px-2.5 py-1 rounded-lg ${
                      isDone
                        ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400'
                        : overdue
                        ? 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 font-bold animate-pulse'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }">
                      ${isDone ? '✓ Completed' : overdue ? '⚠️ ' + relTime : '📅 ' + relTime}
                    </span>
                  </div>
                </div>

                ${asg.description ? `
                  <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 line-clamp-2">
                    ${escapeHtml(asg.description)}
                  </p>
                ` : ''}

                <div class="flex items-center justify-between mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs text-slate-400">
                  <span>Due: ${formatDateTime(asg.deadline)}</span>
                  <div class="flex items-center gap-3">
                    <button data-edit-id="${asg.id}" class="edit-asg-btn hover:text-indigo-600 transition-colors">Edit</button>
                    <span>•</span>
                    <button data-delete-id="${asg.id}" class="delete-asg-btn hover:text-red-600 transition-colors">Delete</button>
                  </div>
                </div>
              </div>

            </div>
          `;
        }).join('') : `
          <div class="p-12 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <i data-lucide="inbox" class="w-12 h-12 mx-auto text-slate-300 dark:text-slate-600 mb-3"></i>
            <h3 class="text-base font-bold text-slate-900 dark:text-white">No assignments found</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-4">No tasks match your selected filter or search keyword.</p>
            <button id="btn-empty-reset" class="px-4 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
              Clear Filters
            </button>
          </div>
        `}
      </div>

      <!-- Add/Edit Assignment Modal -->
      <div id="asg-modal" class="fixed inset-0 z-50 hidden bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 modal-enter">
          <div class="flex items-center justify-between mb-4">
            <h3 id="asg-modal-title" class="text-lg font-extrabold text-slate-900 dark:text-white">New Assignment</h3>
            <button id="asg-modal-close" class="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <form id="asg-form" class="space-y-4">
            <input type="hidden" id="asg-edit-id" value="">

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Assignment Title *</label>
              <input type="text" id="form-asg-title" required placeholder="e.g. Kernel Process Scheduler Simulator" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Subject *</label>
                <input type="text" id="form-asg-subject" required placeholder="e.g. Operating Systems" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Priority *</label>
                <select id="form-asg-priority" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                  <option value="Urgent">Urgent</option>
                  <option value="High">High</option>
                  <option value="Medium" selected>Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Submission Deadline *</label>
              <input type="datetime-local" id="form-asg-deadline" required class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Instructions / Description</label>
              <textarea id="form-asg-desc" rows="3" placeholder="Add assignment details, submission format, or rubric guidelines..." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"></textarea>
            </div>

            <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button type="button" id="asg-modal-cancel" class="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-semibold">
                Cancel
              </button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold shadow-md shadow-indigo-600/25">
                Save Task
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  `;

  // Toggle completion
  container.querySelectorAll('.task-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const taskId = btn.dataset.taskId;
      const status = store.toggleAssignmentStatus(taskId);
      if (status === 'Completed') {
        triggerConfetti();
        showToast('Task marked as completed! 🎯', 'success');
      } else {
        showToast('Task marked as pending', 'info');
      }
      renderAssignments(container);
    });
  });

  // Filter status buttons
  container.querySelectorAll('.filter-status-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filterStatus = btn.dataset.status;
      renderAssignments(container);
    });
  });

  // Search input
  const searchInput = container.querySelector('#asg-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderAssignments(container);
    });
  }

  // Sort dropdown
  const sortSelect = container.querySelector('#asg-sort');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortBy = e.target.value;
      renderAssignments(container);
    });
  }

  // Priority filter
  const prioSelect = container.querySelector('#filter-priority');
  if (prioSelect) {
    prioSelect.addEventListener('change', (e) => {
      filterPriority = e.target.value;
      renderAssignments(container);
    });
  }

  // Subject filter
  const subjSelect = container.querySelector('#filter-subject');
  if (subjSelect) {
    subjSelect.addEventListener('change', (e) => {
      filterSubject = e.target.value;
      renderAssignments(container);
    });
  }

  // Reset filter
  const resetBtn = container.querySelector('#btn-empty-reset');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      filterStatus = 'All';
      filterPriority = 'All';
      filterSubject = 'All';
      searchQuery = '';
      renderAssignments(container);
    });
  }

  // Modal setup
  const modal = container.querySelector('#asg-modal');
  const modalTitle = container.querySelector('#asg-modal-title');
  const form = container.querySelector('#asg-form');
  const closeBtn = container.querySelector('#asg-modal-close');
  const cancelBtn = container.querySelector('#asg-modal-cancel');

  function openAddModal() {
    modalTitle.textContent = 'New Assignment';
    form.reset();
    container.querySelector('#asg-edit-id').value = '';
    // Set default deadline to tomorrow 23:59
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(23, 59, 0, 0);
    const tzOffset = tomorrow.getTimezoneOffset() * 60000;
    const localISOTime = (new Date(tomorrow.getTime() - tzOffset)).toISOString().slice(0, 16);
    container.querySelector('#form-asg-deadline').value = localISOTime;
    modal.classList.remove('hidden');
  }

  function closeModal() {
    modal.classList.add('hidden');
  }

  const btnAdd = container.querySelector('#btn-add-assignment');
  if (btnAdd) btnAdd.onclick = openAddModal;
  if (closeBtn) closeBtn.onclick = closeModal;
  if (cancelBtn) cancelBtn.onclick = closeModal;

  // Edit Assignment
  container.querySelectorAll('.edit-asg-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.editId;
      const asg = assignments.find(a => a.id === id);
      if (asg) {
        modalTitle.textContent = 'Edit Assignment';
        container.querySelector('#asg-edit-id').value = asg.id;
        container.querySelector('#form-asg-title').value = asg.title;
        container.querySelector('#form-asg-subject').value = asg.subject;
        container.querySelector('#form-asg-priority').value = asg.priority;
        container.querySelector('#form-asg-deadline').value = asg.deadline ? asg.deadline.slice(0, 16) : '';
        container.querySelector('#form-asg-desc').value = asg.description || '';
        modal.classList.remove('hidden');
      }
    });
  });

  // Delete Assignment
  container.querySelectorAll('.delete-asg-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.deleteId;
      if (confirm('Delete this assignment?')) {
        store.deleteAssignment(id);
        showToast('Assignment deleted', 'info');
        renderAssignments(container);
      }
    });
  });

  // Form Submit
  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const editId = container.querySelector('#asg-edit-id').value;
      const data = {
        title: container.querySelector('#form-asg-title').value.trim(),
        subject: container.querySelector('#form-asg-subject').value.trim(),
        priority: container.querySelector('#form-asg-priority').value,
        deadline: container.querySelector('#form-asg-deadline').value,
        description: container.querySelector('#form-asg-desc').value.trim()
      };

      if (editId) {
        store.updateAssignment(editId, data);
        showToast('Assignment updated!', 'success');
      } else {
        store.addAssignment(data);
        showToast('New assignment created!', 'success');
      }

      closeModal();
      renderAssignments(container);
    };
  }

  if (window.lucide) window.lucide.createIcons();
}


// --- FILE: js/views/studyPlanner.js ---
// CampusHub Study Planner & Pomodoro Timer View



// Pomodoro Timer State (persisted across renders)
let pomodoroMode = 'focus'; // 'focus', 'shortBreak', 'longBreak'
let pomodoroSecondsLeft = 25 * 60;
let pomodoroIsRunning = false;
let pomodoroInterval = null;
let pomodoroCompletedCycles = 0;

function renderStudyPlanner(container) {
  const studySessions = store.getStudySessions();
  const timetable = store.getTimetable();

  // Extract distinct subjects
  const subjectSet = new Set(['Operating Systems', 'Database Systems', 'Algorithms', 'Computer Networks', 'Machine Learning']);
  timetable.forEach(t => { if (t.subject) subjectSet.add(t.subject); });
  const subjects = Array.from(subjectSet);

  // Group study stats
  const totalMinutes = studySessions
    .filter(s => s.status === 'Completed')
    .reduce((acc, s) => acc + (s.durationMinutes || 0), 0);

  const totalHours = (totalMinutes / 60).toFixed(1);

  // Subject breakdown for chart
  const subjectTotals = {};
  studySessions.forEach(s => {
    if (s.status === 'Completed') {
      subjectTotals[s.subject] = (subjectTotals[s.subject] || 0) + s.durationMinutes;
    }
  });

  const chartLabels = Object.keys(subjectTotals);
  const chartData = Object.values(subjectTotals);

  function formatTimerDisplay(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  const totalModeDuration = pomodoroMode === 'focus' ? 25 * 60 : pomodoroMode === 'shortBreak' ? 5 * 60 : 15 * 60;
  const progressPercent = ((totalModeDuration - pomodoroSecondsLeft) / totalModeDuration) * 100;

  container.innerHTML = `
    <div class="space-y-6">

      <!-- Header & Top Action -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Study Planner & Pomodoro</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Boost focus with timed intervals, manage study schedule, and track deep work hours.</p>
        </div>

        <button id="btn-add-session" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold shadow-md shadow-purple-600/20 transition-all">
          <i data-lucide="plus" class="w-4 h-4"></i>
          <span>Schedule Study Session</span>
        </button>
      </div>

      <!-- Top Row: Pomodoro Hero Widget (Interactive) & Quick Stats -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <!-- Pomodoro Interactive Widget (2 cols) -->
        <div class="lg:col-span-2 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white shadow-xl relative overflow-hidden flex flex-col items-center text-center">
          
          <!-- Mode Tabs -->
          <div class="inline-flex p-1 rounded-2xl bg-white/10 backdrop-blur-md mb-8 text-xs sm:text-sm font-semibold">
            <button id="pomo-mode-focus" class="px-4 py-2 rounded-xl transition-all ${pomodoroMode === 'focus' ? 'bg-white text-indigo-900 shadow-md font-bold' : 'text-white/80 hover:text-white'}">
              Focus (25m)
            </button>
            <button id="pomo-mode-short" class="px-4 py-2 rounded-xl transition-all ${pomodoroMode === 'shortBreak' ? 'bg-white text-indigo-900 shadow-md font-bold' : 'text-white/80 hover:text-white'}">
              Short Break (5m)
            </button>
            <button id="pomo-mode-long" class="px-4 py-2 rounded-xl transition-all ${pomodoroMode === 'longBreak' ? 'bg-white text-indigo-900 shadow-md font-bold' : 'text-white/80 hover:text-white'}">
              Long Break (15m)
            </button>
          </div>

          <!-- Circular Clock Graphic -->
          <div class="relative w-56 h-56 flex items-center justify-center mb-6">
            <svg class="w-56 h-56 transform -rotate-90">
              <circle cx="112" cy="112" r="96" stroke="rgba(255, 255, 255, 0.15)" stroke-width="8" fill="transparent" />
              <circle id="pomo-progress-circle" cx="112" cy="112" r="96" stroke="#ec4899" stroke-width="8" class="timer-ring-circle" fill="transparent" stroke-dasharray="603" stroke-dashoffset="${603 - (603 * progressPercent) / 100}" stroke-linecap="round" />
            </svg>
            <div class="absolute text-center">
              <div id="pomo-time-display" class="text-5xl sm:text-6xl font-black tracking-tight text-white font-mono">
                ${formatTimerDisplay(pomodoroSecondsLeft)}
              </div>
              <div class="text-xs font-semibold text-purple-200 mt-1 uppercase tracking-wider">
                ${pomodoroMode === 'focus' ? '🎯 Stay Focused' : '☕ Relax & Recharge'}
              </div>
            </div>
          </div>

          <!-- Controller Buttons -->
          <div class="flex items-center gap-4">
            <button id="pomo-toggle-btn" class="px-8 py-3.5 rounded-2xl ${pomodoroIsRunning ? 'bg-amber-500 hover:bg-amber-600' : 'bg-pink-500 hover:bg-pink-600'} text-white font-bold text-base shadow-xl shadow-pink-500/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
              <i data-lucide="${pomodoroIsRunning ? 'pause' : 'play'}" class="w-5 h-5"></i>
              <span>${pomodoroIsRunning ? 'Pause' : 'Start Focus'}</span>
            </button>

            <button id="pomo-reset-btn" class="p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm" title="Reset timer">
              <i data-lucide="rotate-ccw" class="w-5 h-5"></i>
            </button>
          </div>

          <!-- Cycle Tracker Bar -->
          <div class="mt-6 flex items-center gap-2 text-xs text-purple-200">
            <span>Completed Today:</span>
            <div class="flex items-center gap-1.5">
              ${[1, 2, 3, 4].map(idx => `
                <div class="w-3 h-3 rounded-full ${idx <= pomodoroCompletedCycles ? 'bg-pink-400 shadow-sm shadow-pink-400' : 'bg-white/20'}"></div>
              `).join('')}
            </div>
            <span class="ml-1">(${pomodoroCompletedCycles} cycles)</span>
          </div>

        </div>

        <!-- Quick Study Stats & Chart (1 col) -->
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-base font-extrabold text-slate-900 dark:text-white">Weekly Focus Hours</h3>
              <span class="text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950 px-2 py-0.5 rounded-md">
                ${totalHours} hrs logged
              </span>
            </div>

            <!-- Subject Distribution Bar Breakdown -->
            <div class="space-y-3 mt-4">
              ${chartLabels.map(sub => {
                const mins = subjectTotals[sub];
                const pct = totalMinutes > 0 ? Math.round((mins / totalMinutes) * 100) : 0;
                return `
                  <div>
                    <div class="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      <span class="truncate pr-2">${escapeHtml(sub)}</span>
                      <span>${(mins / 60).toFixed(1)}h (${pct}%)</span>
                    </div>
                    <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div class="h-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" style="width: ${pct}%"></div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Quick Tip Box -->
          <div class="mt-6 p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/60 text-xs text-purple-900 dark:text-purple-200">
            <div class="font-bold mb-1 flex items-center gap-1.5">
              <i data-lucide="lightbulb" class="w-4 h-4 text-purple-600"></i>
              <span>Study Tip: 25-5 Technique</span>
            </div>
            <p class="text-purple-800 dark:text-purple-300 leading-relaxed">
              Eliminate distractions for 25 minutes. After 4 focus cycles, take a rejuvenating 15-minute walk.
            </p>
          </div>
        </div>

      </div>

      <!-- Study Schedule Log -->
      <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h2 class="text-lg font-bold text-slate-900 dark:text-white">Study Sessions & Schedule</h2>
            <p class="text-xs text-slate-500">Planned and completed academic study blocks</p>
          </div>
          <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">
            ${studySessions.length} sessions
          </span>
        </div>

        <div class="divide-y divide-slate-100 dark:divide-slate-800/80">
          ${studySessions.map(session => `
            <div class="py-3.5 flex items-center justify-between gap-4">
              <div class="flex items-center gap-3 min-w-0">
                <div class="w-8 h-8 rounded-xl ${session.status === 'Completed' ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400' : 'bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400'} flex items-center justify-center shrink-0">
                  <i data-lucide="${session.status === 'Completed' ? 'check' : 'book-open'}" class="w-4 h-4"></i>
                </div>
                <div class="min-w-0">
                  <div class="flex items-center gap-2">
                    <h4 class="text-sm font-bold text-slate-900 dark:text-white truncate">${escapeHtml(session.topic)}</h4>
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${session.status === 'Completed' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300'}">
                      ${session.status}
                    </span>
                  </div>
                  <div class="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    <span>${escapeHtml(session.subject)}</span>
                    <span>•</span>
                    <span>⏱️ ${session.durationMinutes} mins</span>
                    <span>•</span>
                    <span>📅 ${formatDate(session.date)}</span>
                  </div>
                </div>
              </div>

              <button data-delete-id="${session.id}" class="delete-session-btn p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" title="Delete session">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Add Study Session Modal -->
      <div id="session-modal" class="fixed inset-0 z-50 hidden bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 modal-enter">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-extrabold text-slate-900 dark:text-white">Schedule Study Session</h3>
            <button id="session-modal-close" class="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <form id="session-form" class="space-y-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Subject *</label>
              <select id="form-sess-subject" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none">
                ${subjects.map(s => `<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`).join('')}
              </select>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Topic / Study Objective *</label>
              <input type="text" id="form-sess-topic" required placeholder="e.g. Chapter 4 Virtual Memory & TLB" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none">
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Duration (Mins) *</label>
                <input type="number" id="form-sess-duration" min="10" max="240" step="5" value="45" required class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Date *</label>
                <input type="date" id="form-sess-date" required value="${new Date().toISOString().split('T')[0]}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none">
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Status</label>
              <select id="form-sess-status" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none">
                <option value="Planned">Planned</option>
                <option value="Completed">Completed (Log now)</option>
              </select>
            </div>

            <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button type="button" id="session-modal-cancel" class="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-semibold">
                Cancel
              </button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold shadow-md shadow-purple-600/25">
                Save Session
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  `;

  // Pomodoro interactive handling
  const pomoDisplay = container.querySelector('#pomo-time-display');
  const pomoCircle = container.querySelector('#pomo-progress-circle');
  const pomoToggleBtn = container.querySelector('#pomo-toggle-btn');
  const pomoResetBtn = container.querySelector('#pomo-reset-btn');

  function updateTimerUI() {
    if (pomoDisplay) pomoDisplay.textContent = formatTimerDisplay(pomodoroSecondsLeft);
    if (pomoCircle) {
      const modeDuration = pomodoroMode === 'focus' ? 25 * 60 : pomodoroMode === 'shortBreak' ? 5 * 60 : 15 * 60;
      const pct = ((modeDuration - pomodoroSecondsLeft) / modeDuration) * 100;
      pomoCircle.style.strokeDashoffset = `${603 - (603 * pct) / 100}`;
    }
  }

  function startTimer() {
    if (pomodoroInterval) clearInterval(pomodoroInterval);
    pomodoroIsRunning = true;
    if (pomoToggleBtn) {
      pomoToggleBtn.innerHTML = `<i data-lucide="pause" class="w-5 h-5"></i><span>Pause</span>`;
      pomoToggleBtn.className = pomoToggleBtn.className.replace('bg-pink-500', 'bg-amber-500').replace('hover:bg-pink-600', 'hover:bg-amber-600');
      if (window.lucide) window.lucide.createIcons();
    }

    pomodoroInterval = setInterval(() => {
      if (pomodoroSecondsLeft > 0) {
        pomodoroSecondsLeft--;
        updateTimerUI();
      } else {
        // Timer Finished!
        clearInterval(pomodoroInterval);
        pomodoroIsRunning = false;
        playChime('pomodoro');

        if (pomodoroMode === 'focus') {
          pomodoroCompletedCycles++;
          triggerConfetti();
          store.logPomodoroMinutes(25, 'Pomodoro Deep Focus');
          showToast('Pomodoro cycle complete! 25 mins logged. Take a break! ☕', 'success');
          pomodoroMode = 'shortBreak';
          pomodoroSecondsLeft = 5 * 60;
        } else {
          showToast('Break finished! Ready to focus again?', 'info');
          pomodoroMode = 'focus';
          pomodoroSecondsLeft = 25 * 60;
        }
        renderStudyPlanner(container);
      }
    }, 1000);
  }

  function pauseTimer() {
    clearInterval(pomodoroInterval);
    pomodoroIsRunning = false;
    if (pomoToggleBtn) {
      pomoToggleBtn.innerHTML = `<i data-lucide="play" class="w-5 h-5"></i><span>Start Focus</span>`;
      pomoToggleBtn.className = pomoToggleBtn.className.replace('bg-amber-500', 'bg-pink-500').replace('hover:bg-amber-600', 'hover:bg-pink-600');
      if (window.lucide) window.lucide.createIcons();
    }
  }

  if (pomoToggleBtn) {
    pomoToggleBtn.onclick = () => {
      if (pomodoroIsRunning) {
        pauseTimer();
      } else {
        startTimer();
      }
    };
  }

  if (pomoResetBtn) {
    pomoResetBtn.onclick = () => {
      pauseTimer();
      pomodoroSecondsLeft = pomodoroMode === 'focus' ? 25 * 60 : pomodoroMode === 'shortBreak' ? 5 * 60 : 15 * 60;
      updateTimerUI();
    };
  }

  // Mode buttons
  const btnFocus = container.querySelector('#pomo-mode-focus');
  const btnShort = container.querySelector('#pomo-mode-short');
  const btnLong = container.querySelector('#pomo-mode-long');

  if (btnFocus) {
    btnFocus.onclick = () => {
      pauseTimer();
      pomodoroMode = 'focus';
      pomodoroSecondsLeft = 25 * 60;
      renderStudyPlanner(container);
    };
  }
  if (btnShort) {
    btnShort.onclick = () => {
      pauseTimer();
      pomodoroMode = 'shortBreak';
      pomodoroSecondsLeft = 5 * 60;
      renderStudyPlanner(container);
    };
  }
  if (btnLong) {
    btnLong.onclick = () => {
      pauseTimer();
      pomodoroMode = 'longBreak';
      pomodoroSecondsLeft = 15 * 60;
      renderStudyPlanner(container);
    };
  }

  // Delete session
  container.querySelectorAll('.delete-session-btn').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.deleteId;
      store.deleteStudySession(id);
      showToast('Study session deleted', 'info');
      renderStudyPlanner(container);
    };
  });

  // Modal logic
  const modal = container.querySelector('#session-modal');
  const form = container.querySelector('#session-form');
  const closeBtn = container.querySelector('#session-modal-close');
  const cancelBtn = container.querySelector('#session-modal-cancel');
  const btnAdd = container.querySelector('#btn-add-session');

  if (btnAdd) btnAdd.onclick = () => modal.classList.remove('hidden');
  if (closeBtn) closeBtn.onclick = () => modal.classList.add('hidden');
  if (cancelBtn) cancelBtn.onclick = () => modal.classList.add('hidden');

  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const sessionData = {
        subject: container.querySelector('#form-sess-subject').value,
        topic: container.querySelector('#form-sess-topic').value.trim(),
        durationMinutes: parseInt(container.querySelector('#form-sess-duration').value, 10) || 30,
        date: container.querySelector('#form-sess-date').value,
        status: container.querySelector('#form-sess-status').value
      };

      store.addStudySession(sessionData);
      showToast('Study session scheduled!', 'success');
      modal.classList.add('hidden');
      renderStudyPlanner(container);
    };
  }

  if (window.lucide) window.lucide.createIcons();
}


// --- FILE: js/views/events.js ---
// CampusHub College Events & Hackathons View



let filterCategory = 'All';
let filterBookmarkedOnly = false;
let eventSearchQuery = '';

function renderEvents(container) {
  const events = store.getEvents();
  const categories = ['All', 'Hackathon', 'Fest', 'Workshop', 'Seminar', 'Competition', 'Club Event'];

  // Filter events
  let filtered = events.filter(ev => {
    if (filterBookmarkedOnly && !ev.bookmarked) return false;
    if (filterCategory !== 'All' && ev.category !== filterCategory) return false;
    if (eventSearchQuery.trim()) {
      const q = eventSearchQuery.toLowerCase();
      const matchTitle = (ev.title || '').toLowerCase().includes(q);
      const matchDesc = (ev.description || '').toLowerCase().includes(q);
      const matchOrg = (ev.organizer || '').toLowerCase().includes(q);
      const matchVenue = (ev.venue || '').toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchOrg && !matchVenue) return false;
    }
    return true;
  });

  const bookmarkedCount = events.filter(e => e.bookmarked).length;

  container.innerHTML = `
    <div class="space-y-6">

      <!-- Header & Top Actions -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">College Events & Fests</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Hackathons, annual fests, technical bootcamps, and competitions.</p>
        </div>

        <button id="btn-add-event" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold shadow-md shadow-rose-600/20 transition-all">
          <i data-lucide="plus" class="w-4 h-4"></i>
          <span>Post Campus Event</span>
        </button>
      </div>

      <!-- Filters & Search Toolbar -->
      <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
        
        <div class="flex flex-col sm:flex-row items-center gap-3">
          <!-- Search input -->
          <div class="relative flex-1 w-full">
            <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
            <input type="text" id="ev-search" value="${escapeHtml(eventSearchQuery)}" placeholder="Search hackathons, fests, organizers, venues..." class="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-500">
          </div>

          <!-- Bookmarked toggle button -->
          <button id="btn-toggle-saved" class="px-4 py-2 rounded-xl border text-xs sm:text-sm font-semibold flex items-center gap-2 shrink-0 transition-all ${
            filterBookmarkedOnly
              ? 'bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 border-rose-300 dark:border-rose-900'
              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-rose-300'
          }">
            <i data-lucide="bookmark" class="w-4 h-4 ${filterBookmarkedOnly ? 'fill-rose-500 text-rose-500' : ''}"></i>
            <span>Bookmarked (${bookmarkedCount})</span>
          </button>
        </div>

        <!-- Category Pills -->
        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
          ${categories.map(cat => `
            <button data-cat="${cat}" class="cat-filter-btn px-3 py-1.5 rounded-lg font-semibold transition-colors shrink-0 ${
              filterCategory === cat
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }">
              ${cat}
            </button>
          `).join('')}
        </div>

      </div>

      <!-- Events Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${filtered.length > 0 ? filtered.map(ev => {
          const categoryColors = {
            Hackathon: 'bg-indigo-600',
            Fest: 'bg-rose-600',
            Workshop: 'bg-blue-600',
            Seminar: 'bg-teal-600',
            Competition: 'bg-amber-600',
            'Club Event': 'bg-purple-600'
          };
          const badgeBg = categoryColors[ev.category] || 'bg-slate-800';

          return `
            <div class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm card-hover-lift flex flex-col justify-between group">
              
              <div>
                <!-- Event Image & Category Badge -->
                <div class="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img src="${ev.image}" alt="${escapeHtml(ev.title)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  <div class="absolute top-3 left-3 px-3 py-1 rounded-full ${badgeBg} text-white text-[11px] font-bold shadow-md">
                    ${ev.category}
                  </div>

                  <!-- Bookmark Button -->
                  <button data-bookmark-id="${ev.id}" class="bookmark-btn absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 backdrop-blur-md flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-transform" title="Save event">
                    <i data-lucide="bookmark" class="w-4 h-4 ${ev.bookmarked ? 'fill-rose-500 text-rose-500' : 'text-slate-600 dark:text-slate-300'}"></i>
                  </button>

                  <div class="absolute bottom-3 left-3 right-3 text-white">
                    <div class="flex items-center gap-1.5 text-xs font-semibold text-rose-200">
                      <i data-lucide="calendar" class="w-3.5 h-3.5"></i>
                      <span>${formatDate(ev.date)} • ${ev.time}</span>
                    </div>
                  </div>
                </div>

                <!-- Event Details Body -->
                <div class="p-5">
                  <h3 class="text-base font-black text-slate-900 dark:text-white line-clamp-2 mb-2 group-hover:text-rose-600 transition-colors">
                    ${escapeHtml(ev.title)}
                  </h3>

                  <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                    ${escapeHtml(ev.description)}
                  </p>

                  <div class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <div class="flex items-center gap-2 truncate">
                      <i data-lucide="map-pin" class="w-3.5 h-3.5 text-rose-500 shrink-0"></i>
                      <span class="truncate">${escapeHtml(ev.venue)}</span>
                    </div>
                    <div class="flex items-center gap-2 truncate">
                      <i data-lucide="shield" class="w-3.5 h-3.5 text-purple-500 shrink-0"></i>
                      <span class="truncate">By ${escapeHtml(ev.organizer)}</span>
                    </div>
                  </div>

                  <!-- Tag Pills -->
                  ${ev.tags && ev.tags.length > 0 ? `
                    <div class="flex flex-wrap gap-1.5 mt-3">
                      ${ev.tags.map(t => `
                        <span class="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                          #${escapeHtml(t)}
                        </span>
                      `).join('')}
                    </div>
                  ` : ''}
                </div>
              </div>

              <!-- Action footer -->
              <div class="p-5 pt-0">
                <button data-rsvp-id="${ev.id}" class="rsvp-btn w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2">
                  <i data-lucide="check-circle" class="w-4 h-4 text-emerald-400"></i>
                  <span>RSVP & Attend (${ev.registeredCount || 100}+ going)</span>
                </button>
              </div>

            </div>
          `;
        }).join('') : `
          <div class="col-span-full p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <i data-lucide="calendar-x" class="w-12 h-12 mx-auto text-slate-300 dark:text-slate-600 mb-3"></i>
            <h3 class="text-base font-bold text-slate-900 dark:text-white">No events found</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Try switching categories or clearing search keywords.</p>
          </div>
        `}
      </div>

      <!-- Add Event Modal -->
      <div id="event-modal" class="fixed inset-0 z-50 hidden bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 modal-enter">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-extrabold text-slate-900 dark:text-white">Post Campus Event</h3>
            <button id="event-modal-close" class="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <form id="event-form" class="space-y-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Event Title *</label>
              <input type="text" id="ev-title" required placeholder="e.g. AI Prompt Engineering Hackathon" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none">
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Category *</label>
                <select id="ev-cat" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none">
                  ${categories.filter(c => c !== 'All').map(c => `<option value="${c}">${c}</option>`).join('')}
                </select>
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Date *</label>
                <input type="date" id="ev-date" required value="${new Date().toISOString().split('T')[0]}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none">
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Time Slot</label>
                <input type="text" id="ev-time" placeholder="e.g. 10:00 AM - 04:00 PM" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Venue / Hall *</label>
                <input type="text" id="ev-venue" required placeholder="e.g. Main Auditorium" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none">
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Host / Organizing Society *</label>
              <input type="text" id="ev-organizer" required placeholder="e.g. Coding Club & ACM Student Chapter" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none">
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Description</label>
              <textarea id="ev-desc" rows="3" placeholder="Explain schedule, eligibility, prize pool, or prerequisites..." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none"></textarea>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Image URL (Optional)</label>
              <input type="url" id="ev-image" placeholder="https://images.unsplash.com/..." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none">
            </div>

            <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button type="button" id="event-modal-cancel" class="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-semibold">
                Cancel
              </button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold shadow-md shadow-rose-600/25">
                Publish Event
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  `;

  // Bookmark toggling
  container.querySelectorAll('.bookmark-btn').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const id = btn.dataset.bookmarkId;
      const isSaved = store.toggleBookmarkEvent(id);
      showToast(isSaved ? 'Event bookmarked!' : 'Event removed from bookmarks', 'info');
      renderEvents(container);
    };
  });

  // Category filter
  container.querySelectorAll('.cat-filter-btn').forEach(btn => {
    btn.onclick = () => {
      filterCategory = btn.dataset.cat;
      renderEvents(container);
    };
  });

  // Saved events toggle
  const btnToggleSaved = container.querySelector('#btn-toggle-saved');
  if (btnToggleSaved) {
    btnToggleSaved.onclick = () => {
      filterBookmarkedOnly = !filterBookmarkedOnly;
      renderEvents(container);
    };
  }

  // Search input
  const searchInput = container.querySelector('#ev-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      eventSearchQuery = e.target.value;
      renderEvents(container);
    });
  }

  // RSVP buttons
  container.querySelectorAll('.rsvp-btn').forEach(btn => {
    btn.onclick = () => {
      showToast('RSVP Confirmed! See you at the event. 🎟️', 'success');
      btn.innerHTML = `<i data-lucide="check" class="w-4 h-4 text-emerald-400"></i><span>Registered & Confirmed ✓</span>`;
      btn.classList.add('bg-emerald-800', 'hover:bg-emerald-800');
      if (window.lucide) window.lucide.createIcons();
    };
  });

  // Modal logic
  const modal = container.querySelector('#event-modal');
  const form = container.querySelector('#event-form');
  const closeBtn = container.querySelector('#event-modal-close');
  const cancelBtn = container.querySelector('#event-modal-cancel');
  const btnAdd = container.querySelector('#btn-add-event');

  if (btnAdd) btnAdd.onclick = () => modal.classList.remove('hidden');
  if (closeBtn) closeBtn.onclick = () => modal.classList.add('hidden');
  if (cancelBtn) cancelBtn.onclick = () => modal.classList.add('hidden');

  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const eventData = {
        title: container.querySelector('#ev-title').value.trim(),
        category: container.querySelector('#ev-cat').value,
        date: container.querySelector('#ev-date').value,
        time: container.querySelector('#ev-time').value.trim() || '10:00 AM - 01:00 PM',
        venue: container.querySelector('#ev-venue').value.trim(),
        organizer: container.querySelector('#ev-organizer').value.trim(),
        description: container.querySelector('#ev-desc').value.trim(),
        image: container.querySelector('#ev-image').value.trim() || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=80'
      };

      store.addEvent(eventData);
      showToast('Event published successfully!', 'success');
      modal.classList.add('hidden');
      renderEvents(container);
    };
  }

  if (window.lucide) window.lucide.createIcons();
}


// --- FILE: js/views/notes.js ---
// CampusHub Notes & Resources Repository View



let filterCategory = 'All';
let filterSubject = 'All';
let notesSearchQuery = '';

function renderNotes(container) {
  const notes = store.getNotes();
  const timetable = store.getTimetable();

  const categories = ['All', 'Lecture Notes', 'Exam Notes', 'Cheatsheet', 'Code', 'Reference'];

  // Extract distinct subjects
  const subjectSet = new Set(['Operating Systems', 'Database Management Systems', 'Design & Analysis of Algorithms', 'Computer Networks', 'Machine Learning & AI']);
  notes.forEach(n => { if (n.subject) subjectSet.add(n.subject); });
  timetable.forEach(t => { if (t.subject) subjectSet.add(t.subject); });
  const subjectsList = Array.from(subjectSet).sort();

  // Filter notes
  let filtered = notes.filter(note => {
    if (filterCategory !== 'All' && note.category !== filterCategory) return false;
    if (filterSubject !== 'All' && note.subject !== filterSubject) return false;
    if (notesSearchQuery.trim()) {
      const q = notesSearchQuery.toLowerCase();
      const matchTitle = (note.title || '').toLowerCase().includes(q);
      const matchSubject = (note.subject || '').toLowerCase().includes(q);
      const matchContent = (note.content || '').toLowerCase().includes(q);
      const matchTags = (note.tags || []).some(t => t.toLowerCase().includes(q));
      if (!matchTitle && !matchSubject && !matchContent && !matchTags) return false;
    }
    return true;
  });

  container.innerHTML = `
    <div class="space-y-6">

      <!-- Header & Top Action -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Notes & Resources</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Lecture slides, cheatsheets, code snippets, and study materials.</p>
        </div>

        <button id="btn-add-note" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold shadow-md shadow-teal-600/20 transition-all">
          <i data-lucide="plus" class="w-4 h-4"></i>
          <span>Add Note / Resource</span>
        </button>
      </div>

      <!-- Filters Toolbar -->
      <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
        <div class="flex flex-col md:flex-row items-center gap-3">
          <!-- Search input -->
          <div class="relative flex-1 w-full">
            <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
            <input type="text" id="note-search" value="${escapeHtml(notesSearchQuery)}" placeholder="Search notes by title, topic, or content..." class="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
          </div>

          <!-- Subject filter -->
          <div class="w-full md:w-auto shrink-0">
            <select id="filter-note-subject" class="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option value="All">All Subjects (${notes.length})</option>
              ${subjectsList.map(s => `
                <option value="${escapeHtml(s)}" ${filterSubject === s ? 'selected' : ''}>${escapeHtml(s)}</option>
              `).join('')}
            </select>
          </div>
        </div>

        <!-- Category Pills -->
        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
          ${categories.map(cat => `
            <button data-cat="${cat}" class="cat-pill-btn px-3 py-1.5 rounded-lg font-semibold transition-colors shrink-0 ${
              filterCategory === cat
                ? 'bg-teal-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }">
              ${cat}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Notes Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${filtered.length > 0 ? filtered.map(note => {
          const categoryColors = {
            'Lecture Notes': 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-800',
            'Exam Notes': 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300 border-amber-200 dark:border-amber-800',
            Cheatsheet: 'bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300 border-purple-200 dark:border-purple-800',
            Code: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
            Reference: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700'
          };
          const badgeClass = categoryColors[note.category] || categoryColors.Reference;

          return `
            <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm card-hover-lift flex flex-col justify-between group">
              
              <div>
                <div class="flex items-center justify-between gap-2 mb-2">
                  <span class="text-xs font-bold px-2.5 py-0.5 rounded-full border ${badgeClass}">
                    ${note.category}
                  </span>
                  <span class="text-[11px] text-slate-400 font-medium">
                    ${formatDate(note.date)}
                  </span>
                </div>

                <h3 class="text-base font-bold text-slate-900 dark:text-white line-clamp-2 mb-1 group-hover:text-teal-600 transition-colors">
                  ${escapeHtml(note.title)}
                </h3>

                <div class="text-xs font-semibold text-teal-600 dark:text-teal-400 mb-3">
                  ${escapeHtml(note.subject)}
                </div>

                <!-- Preview text -->
                <div class="text-xs text-slate-600 dark:text-slate-400 line-clamp-4 leading-relaxed font-mono bg-slate-50 dark:bg-slate-800/40 p-3 rounded-xl border border-slate-100 dark:border-slate-800/80 whitespace-pre-line mb-4">
                  ${escapeHtml(note.content)}
                </div>

                <!-- Tag badges -->
                ${note.tags && note.tags.length > 0 ? `
                  <div class="flex flex-wrap gap-1 mb-4">
                    ${note.tags.map(t => `
                      <span class="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                        #${escapeHtml(t)}
                      </span>
                    `).join('')}
                  </div>
                ` : ''}
              </div>

              <!-- Footer with resource link & actions -->
              <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                ${note.link ? `
                  <a href="${escapeHtml(note.link)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-teal-600 dark:text-teal-400 font-bold hover:underline">
                    <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                    <span>Open Resource</span>
                  </a>
                ` : `
                  <span class="text-slate-400 italic">Self-contained note</span>
                `}

                <div class="flex items-center gap-2">
                  <button data-view-id="${note.id}" class="view-note-btn text-slate-500 hover:text-teal-600 font-semibold transition-colors">View</button>
                  <span class="text-slate-300 dark:text-slate-700">•</span>
                  <button data-delete-id="${note.id}" class="delete-note-btn text-slate-400 hover:text-red-600 transition-colors">Delete</button>
                </div>
              </div>

            </div>
          `;
        }).join('') : `
          <div class="col-span-full p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <i data-lucide="book-open" class="w-12 h-12 mx-auto text-slate-300 dark:text-slate-600 mb-3"></i>
            <h3 class="text-base font-bold text-slate-900 dark:text-white">No notes found</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Try switching category tabs or clearing search filters.</p>
          </div>
        `}
      </div>

      <!-- Add/Edit Note Modal -->
      <div id="note-modal" class="fixed inset-0 z-50 hidden bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 modal-enter">
          <div class="flex items-center justify-between mb-4">
            <h3 id="note-modal-title" class="text-lg font-extrabold text-slate-900 dark:text-white">Add Note / Resource</h3>
            <button id="note-modal-close" class="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <form id="note-form" class="space-y-4">
            <input type="hidden" id="note-edit-id" value="">

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Title *</label>
              <input type="text" id="form-note-title" required placeholder="e.g. Memory Hierarchy & Cache Coherence Cheatsheet" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none">
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Subject *</label>
                <input type="text" id="form-note-subject" required placeholder="e.g. Computer Architecture" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Category *</label>
                <select id="form-note-cat" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none">
                  ${categories.filter(c => c !== 'All').map(c => `<option value="${c}">${c}</option>`).join('')}
                </select>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Notes Content / Summary *</label>
              <textarea id="form-note-content" required rows="5" placeholder="Enter key formulas, lecture notes, or reference summaries..." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-mono focus:ring-2 focus:ring-teal-500 focus:outline-none"></textarea>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">External Resource Link (Google Drive, GitHub, PDF)</label>
              <input type="url" id="form-note-link" placeholder="https://..." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none">
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Tags (Comma-separated)</label>
              <input type="text" id="form-note-tags" placeholder="e.g. CPU, Cache, L1/L2, Midterm" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none">
            </div>

            <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button type="button" id="note-modal-cancel" class="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-semibold">
                Cancel
              </button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold shadow-md shadow-teal-600/25">
                Save Note
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  `;

  // Category pill filtering
  container.querySelectorAll('.cat-pill-btn').forEach(btn => {
    btn.onclick = () => {
      filterCategory = btn.dataset.cat;
      renderNotes(container);
    };
  });

  // Subject select
  const subjSelect = container.querySelector('#filter-note-subject');
  if (subjSelect) {
    subjSelect.onchange = (e) => {
      filterSubject = e.target.value;
      renderNotes(container);
    };
  }

  // Search input
  const searchInput = container.querySelector('#note-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      notesSearchQuery = e.target.value;
      renderNotes(container);
    });
  }

  // Delete note
  container.querySelectorAll('.delete-note-btn').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.deleteId;
      if (confirm('Delete this note?')) {
        store.deleteNote(id);
        showToast('Note deleted', 'info');
        renderNotes(container);
      }
    };
  });

  // View note full modal
  container.querySelectorAll('.view-note-btn').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.viewId;
      const note = notes.find(n => n.id === id);
      if (note) {
        alert(`${note.title}\n\nSubject: ${note.subject}\nCategory: ${note.category}\n\n${note.content}`);
      }
    };
  });

  // Modal logic
  const modal = container.querySelector('#note-modal');
  const form = container.querySelector('#note-form');
  const closeBtn = container.querySelector('#note-modal-close');
  const cancelBtn = container.querySelector('#note-modal-cancel');
  const btnAdd = container.querySelector('#btn-add-note');

  if (btnAdd) btnAdd.onclick = () => {
    form.reset();
    container.querySelector('#note-edit-id').value = '';
    modal.classList.remove('hidden');
  };
  if (closeBtn) closeBtn.onclick = () => modal.classList.add('hidden');
  if (cancelBtn) cancelBtn.onclick = () => modal.classList.add('hidden');

  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const tagsRaw = container.querySelector('#form-note-tags').value;
      const tags = tagsRaw.split(',').map(t => t.trim()).filter(Boolean);

      const noteData = {
        title: container.querySelector('#form-note-title').value.trim(),
        subject: container.querySelector('#form-note-subject').value.trim(),
        category: container.querySelector('#form-note-cat').value,
        content: container.querySelector('#form-note-content').value.trim(),
        link: container.querySelector('#form-note-link').value.trim(),
        tags
      };

      store.addNote(noteData);
      showToast('Note saved to repository!', 'success');
      modal.classList.add('hidden');
      renderNotes(container);
    };
  }

  if (window.lucide) window.lucide.createIcons();
}


// --- FILE: js/views/gpaCalculator.js ---
// CampusHub CGPA / GPA Calculator View

import {
  escapeHtml,
  GRADE_POINTS_MAP,
  calculateSemesterGpa,
  calculateCumulativeCgpa,
  estimateRequiredGpa,
  showToast,
  triggerConfetti
} from '../utils.js';

function renderGpaCalculator(container) {
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


// --- FILE: js/views/clubs.js ---
// CampusHub Campus Clubs & Student Societies View



let clubCategoryFilter = 'All';
let clubSearchQuery = '';

function renderClubs(container) {
  const clubs = store.getClubs();
  const profile = store.getProfile();
  const joinedClubIds = profile.joinedClubs || [];

  const categories = ['All', 'Tech & Coding', 'Robotics & Hardware', 'Business & Startups', 'Cultural & Arts', 'Media & Arts', 'Sports & Fitness'];

  // Filter clubs
  let filtered = clubs.filter(club => {
    if (clubCategoryFilter !== 'All' && club.category !== clubCategoryFilter) return false;
    if (clubSearchQuery.trim()) {
      const q = clubSearchQuery.toLowerCase();
      const matchName = (club.name || '').toLowerCase().includes(q);
      const matchDesc = (club.description || '').toLowerCase().includes(q);
      const matchLeads = (club.leads || '').toLowerCase().includes(q);
      const matchTags = (club.tags || []).some(t => t.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchLeads && !matchTags) return false;
    }
    return true;
  });

  container.innerHTML = `
    <div class="space-y-6">

      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Campus Clubs & Societies</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Connect with student organizations, attend workshops, and grow your network.</p>
        </div>

        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 text-xs font-semibold">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-cyan-600"></i>
          <span>You have joined ${joinedClubIds.length} clubs</span>
        </div>
      </div>

      <!-- Filters & Search Toolbar -->
      <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
        
        <!-- Search input -->
        <div class="relative w-full">
          <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
          <input type="text" id="club-search" value="${escapeHtml(clubSearchQuery)}" placeholder="Search clubs by name, focus area, or keywords..." class="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500">
        </div>

        <!-- Category Pills -->
        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
          ${categories.map(cat => `
            <button data-cat="${cat}" class="club-cat-btn px-3 py-1.5 rounded-lg font-semibold transition-colors shrink-0 ${
              clubCategoryFilter === cat
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }">
              ${cat}
            </button>
          `).join('')}
        </div>

      </div>

      <!-- Clubs Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${filtered.length > 0 ? filtered.map(club => {
          const isJoined = joinedClubIds.includes(club.id);

          return `
            <div class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm card-hover-lift flex flex-col justify-between overflow-hidden group">
              
              <div>
                <!-- Gradient Header with Icon -->
                <div class="p-6 bg-gradient-to-r ${club.bannerColor || 'from-indigo-500 to-purple-600'} text-white relative">
                  <div class="flex items-center justify-between">
                    <span class="text-3xl filter drop-shadow">${club.logo || '🎓'}</span>
                    <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-black/25 backdrop-blur-sm text-white">
                      ${club.category}
                    </span>
                  </div>
                  <h3 class="text-lg font-black text-white mt-4 line-clamp-1">${escapeHtml(club.name)}</h3>
                  <div class="flex items-center gap-2 text-xs text-white/90 mt-1">
                    <i data-lucide="users" class="w-3.5 h-3.5"></i>
                    <span>${club.memberCount} active members</span>
                  </div>
                </div>

                <!-- Body Content -->
                <div class="p-6 space-y-4">
                  <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    ${escapeHtml(club.description)}
                  </p>

                  <div class="space-y-2 text-xs text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <div class="flex items-start gap-2">
                      <i data-lucide="user-check" class="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5"></i>
                      <span><strong>Leads:</strong> ${escapeHtml(club.leads)}</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <i data-lucide="clock" class="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5"></i>
                      <span><strong>Meets:</strong> ${escapeHtml(club.regularMeeting)}</span>
                    </div>
                  </div>

                  <!-- Tag pills -->
                  ${club.tags && club.tags.length > 0 ? `
                    <div class="flex flex-wrap gap-1.5 pt-1">
                      ${club.tags.map(t => `
                        <span class="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                          #${escapeHtml(t)}
                        </span>
                      `).join('')}
                    </div>
                  ` : ''}
                </div>
              </div>

              <!-- Action Footer: Join Club Button -->
              <div class="p-6 pt-0">
                <button data-club-id="${club.id}" class="join-club-btn w-full py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2 ${
                  isJoined
                    ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 hover:bg-red-50 hover:text-red-700 hover:border-red-300 group/btn'
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/25 hover:scale-[1.02] active:scale-[0.98]'
                }">
                  ${isJoined ? `
                    <span class="group-hover/btn:hidden flex items-center gap-1.5">
                      <i data-lucide="check" class="w-4 h-4 text-emerald-600 dark:text-emerald-400"></i>
                      Joined Member
                    </span>
                    <span class="hidden group-hover/btn:flex items-center gap-1.5 text-red-600">
                      <i data-lucide="user-minus" class="w-4 h-4"></i>
                      Leave Club
                    </span>
                  ` : `
                    <i data-lucide="user-plus" class="w-4 h-4"></i>
                    <span>Join Club</span>
                  `}
                </button>
              </div>

            </div>
          `;
        }).join('') : `
          <div class="col-span-full p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <i data-lucide="users" class="w-12 h-12 mx-auto text-slate-300 dark:text-slate-600 mb-3"></i>
            <h3 class="text-base font-bold text-slate-900 dark:text-white">No clubs found</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Try switching category tabs or clearing search query.</p>
          </div>
        `}
      </div>

    </div>
  `;

  // Join / Leave club toggle
  container.querySelectorAll('.join-club-btn').forEach(btn => {
    btn.onclick = () => {
      const clubId = btn.dataset.clubId;
      const isJoined = store.toggleJoinClub(clubId);
      if (isJoined) {
        triggerConfetti();
        showToast('Welcome to the club! Added to your Student Profile. 🎉', 'success');
      } else {
        showToast('You have left the club.', 'info');
      }
      renderClubs(container);
    };
  });

  // Category filter
  container.querySelectorAll('.club-cat-btn').forEach(btn => {
    btn.onclick = () => {
      clubCategoryFilter = btn.dataset.cat;
      renderClubs(container);
    };
  });

  // Search input
  const searchInput = container.querySelector('#club-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      clubSearchQuery = e.target.value;
      renderClubs(container);
    });
  }

  if (window.lucide) window.lucide.createIcons();
}


// --- FILE: js/views/lostFound.js ---
// CampusHub Lost & Found Bulletin Board View



let lfFilterType = 'All'; // 'All', 'Lost', 'Found', 'Resolved'
let lfFilterCategory = 'All';
let lfSearchQuery = '';

function renderLostFound(container) {
  const lostFoundItems = store.getLostFound();
  const profile = store.getProfile();

  const categories = ['All', 'Electronics', 'Accessories', 'ID Cards', 'Keys', 'Books & Notes', 'Other'];

  // Filter items
  let filtered = lostFoundItems.filter(item => {
    if (lfFilterType === 'Lost' && item.type !== 'Lost') return false;
    if (lfFilterType === 'Found' && item.type !== 'Found') return false;
    if (lfFilterType === 'Resolved' && item.status !== 'Resolved') return false;
    if (lfFilterType !== 'Resolved' && item.status === 'Resolved') return false;

    if (lfFilterCategory !== 'All' && item.category !== lfFilterCategory) return false;

    if (lfSearchQuery.trim()) {
      const q = lfSearchQuery.toLowerCase();
      const matchTitle = (item.title || '').toLowerCase().includes(q);
      const matchDesc = (item.description || '').toLowerCase().includes(q);
      const matchLoc = (item.location || '').toLowerCase().includes(q);
      const matchContact = (item.contactName || '').toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchLoc && !matchContact) return false;
    }

    return true;
  });

  const lostCount = lostFoundItems.filter(i => i.type === 'Lost' && i.status !== 'Resolved').length;
  const foundCount = lostFoundItems.filter(i => i.type === 'Found' && i.status !== 'Resolved').length;

  container.innerHTML = `
    <div class="space-y-6">

      <!-- Header & Top Action -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Lost & Found Bulletin</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Report missing belongings or help fellow students recover items left behind on campus.</p>
        </div>

        <button id="btn-add-item" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold shadow-md shadow-red-600/20 transition-all">
          <i data-lucide="plus" class="w-4 h-4"></i>
          <span>Report Item</span>
        </button>
      </div>

      <!-- Quick Metrics Ribbon -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div class="text-xs font-semibold text-slate-400 uppercase">Total Reported</div>
          <div class="text-2xl font-black text-slate-900 dark:text-white mt-1">${lostFoundItems.length}</div>
        </div>
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div class="text-xs font-semibold text-red-500 uppercase">Active Lost Items</div>
          <div class="text-2xl font-black text-red-600 dark:text-red-400 mt-1">${lostCount}</div>
        </div>
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div class="text-xs font-semibold text-emerald-500 uppercase">Items Found & Held</div>
          <div class="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">${foundCount}</div>
        </div>
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div class="text-xs font-semibold text-indigo-500 uppercase">Resolved / Returned</div>
          <div class="text-2xl font-black text-indigo-600 dark:text-indigo-400 mt-1">${lostFoundItems.filter(i => i.status === 'Resolved').length}</div>
        </div>
      </div>

      <!-- Filters & Search Toolbar -->
      <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
        
        <div class="flex flex-col md:flex-row items-center gap-3">
          <!-- Search input -->
          <div class="relative flex-1 w-full">
            <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
            <input type="text" id="lf-search" value="${escapeHtml(lfSearchQuery)}" placeholder="Search by item name, location found, or keywords..." class="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500">
          </div>

          <!-- Category filter -->
          <div class="w-full md:w-auto shrink-0">
            <select id="lf-cat-select" class="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500">
              ${categories.map(c => `<option value="${c}" ${lfFilterCategory === c ? 'selected' : ''}>${c === 'All' ? 'All Categories' : c}</option>`).join('')}
            </select>
          </div>
        </div>

        <!-- Type Filter Tabs -->
        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
          ${['All', 'Lost', 'Found', 'Resolved'].map(type => `
            <button data-type="${type}" class="lf-type-btn px-3 py-1.5 rounded-lg font-semibold transition-colors shrink-0 ${
              lfFilterType === type
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }">
              ${type === 'All' ? 'All Active Items' : type}
            </button>
          `).join('')}
        </div>

      </div>

      <!-- Items Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${filtered.length > 0 ? filtered.map(item => {
          const isLost = item.type === 'Lost';
          const isResolved = item.status === 'Resolved';

          return `
            <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border ${
              isResolved
                ? 'border-slate-200/60 dark:border-slate-800/60 opacity-70'
                : isLost
                ? 'border-red-200/80 dark:border-red-900/40'
                : 'border-emerald-200/80 dark:border-emerald-900/40'
            } shadow-sm card-hover-lift flex flex-col justify-between group">

              <div>
                <!-- Top Badge Row -->
                <div class="flex items-center justify-between gap-2 mb-3">
                  <span class="inline-flex items-center gap-1.5 text-xs font-extrabold px-2.5 py-0.5 rounded-full ${
                    isResolved
                      ? 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                      : isLost
                      ? 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300 border border-red-200 dark:border-red-800'
                      : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                  }">
                    <span class="w-1.5 h-1.5 rounded-full ${isResolved ? 'bg-slate-400' : isLost ? 'bg-red-500' : 'bg-emerald-500'}"></span>
                    ${isResolved ? 'Resolved / Claimed' : item.type.toUpperCase()}
                  </span>

                  <span class="text-[11px] text-slate-400 font-medium">
                    ${formatDate(item.date)}
                  </span>
                </div>

                <!-- Item Title -->
                <h3 class="text-base font-black text-slate-900 dark:text-white line-clamp-1 mb-1">
                  ${escapeHtml(item.title)}
                </h3>

                <span class="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 inline-block mb-3">
                  ${escapeHtml(item.category)}
                </span>

                <!-- Description -->
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                  ${escapeHtml(item.description)}
                </p>

                <!-- Location & Contact info -->
                <div class="space-y-2 text-xs text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div class="flex items-start gap-2">
                    <i data-lucide="map-pin" class="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5"></i>
                    <span><strong>Location:</strong> ${escapeHtml(item.location)}</span>
                  </div>
                  <div class="flex items-start gap-2">
                    <i data-lucide="user" class="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5"></i>
                    <span><strong>Contact:</strong> ${escapeHtml(item.contactName)} (${escapeHtml(item.contactInfo)})</span>
                  </div>
                  ${item.reward ? `
                    <div class="flex items-start gap-2 text-emerald-600 dark:text-emerald-400 font-bold">
                      <i data-lucide="gift" class="w-3.5 h-3.5 shrink-0 mt-0.5"></i>
                      <span>Reward: ${escapeHtml(item.reward)}</span>
                    </div>
                  ` : ''}
                </div>
              </div>

              <!-- Action Footer -->
              <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button data-resolve-id="${item.id}" class="resolve-btn text-xs font-bold px-3 py-1.5 rounded-lg border transition-all ${
                  isResolved
                    ? 'border-slate-300 text-slate-500 hover:border-slate-400'
                    : 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90'
                }">
                  ${isResolved ? 'Re-open Item' : 'Mark as Resolved ✓'}
                </button>

                <button data-delete-id="${item.id}" class="delete-lf-btn text-slate-400 hover:text-red-600 transition-colors p-1" title="Delete listing">
                  <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
              </div>

            </div>
          `;
        }).join('') : `
          <div class="col-span-full p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <i data-lucide="help-circle" class="w-12 h-12 mx-auto text-slate-300 dark:text-slate-600 mb-3"></i>
            <h3 class="text-base font-bold text-slate-900 dark:text-white">No items found</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">No reported items match your current filter.</p>
          </div>
        `}
      </div>

      <!-- Add Lost/Found Item Modal -->
      <div id="lf-modal" class="fixed inset-0 z-50 hidden bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 modal-enter">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-extrabold text-slate-900 dark:text-white">Report Lost or Found Item</h3>
            <button id="lf-modal-close" class="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <form id="lf-form" class="space-y-4">
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Status Type *</label>
                <select id="form-lf-type" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none font-bold">
                  <option value="Lost">I Lost An Item</option>
                  <option value="Found">I Found An Item</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Category *</label>
                <select id="form-lf-cat" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none">
                  ${categories.filter(c => c !== 'All').map(c => `<option value="${c}">${c}</option>`).join('')}
                </select>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Item Title *</label>
              <input type="text" id="form-lf-title" required placeholder="e.g. Blue Hydro Flask 32oz Bottle" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none">
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Location Lost/Found *</label>
                <input type="text" id="form-lf-loc" required placeholder="e.g. Central Library 2nd Floor" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Date *</label>
                <input type="date" id="form-lf-date" required value="${new Date().toISOString().split('T')[0]}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none">
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Item Description & Identifiers *</label>
              <textarea id="form-lf-desc" required rows="3" placeholder="Provide distinct characteristics, stickers, color, or condition..." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"></textarea>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Contact Name *</label>
                <input type="text" id="form-lf-contact-name" required value="${escapeHtml(profile.name)}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Phone / Email / Room *</label>
                <input type="text" id="form-lf-contact-info" required value="${escapeHtml(profile.email)}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none">
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Reward (Optional)</label>
              <input type="text" id="form-lf-reward" placeholder="e.g. Free Cafeteria Coffee / $10" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none">
            </div>

            <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button type="button" id="lf-modal-cancel" class="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-semibold">
                Cancel
              </button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-bold shadow-md shadow-red-600/25">
                Submit Report
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  `;

  // Toggle resolve status
  container.querySelectorAll('.resolve-btn').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.resolveId;
      const newStatus = store.resolveLostFoundItem(id);
      showToast(newStatus === 'Resolved' ? 'Item marked as claimed / resolved! 🎉' : 'Item marked as active', 'success');
      renderLostFound(container);
    };
  });

  // Delete item
  container.querySelectorAll('.delete-lf-btn').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.deleteId;
      if (confirm('Delete this listing?')) {
        store.deleteLostFoundItem(id);
        showToast('Listing removed', 'info');
        renderLostFound(container);
      }
    };
  });

  // Filter type tabs
  container.querySelectorAll('.lf-type-btn').forEach(btn => {
    btn.onclick = () => {
      lfFilterType = btn.dataset.type;
      renderLostFound(container);
    };
  });

  // Category select
  const catSelect = container.querySelector('#lf-cat-select');
  if (catSelect) {
    catSelect.onchange = (e) => {
      lfFilterCategory = e.target.value;
      renderLostFound(container);
    };
  }

  // Search input
  const searchInput = container.querySelector('#lf-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      lfSearchQuery = e.target.value;
      renderLostFound(container);
    });
  }

  // Modal logic
  const modal = container.querySelector('#lf-modal');
  const form = container.querySelector('#lf-form');
  const closeBtn = container.querySelector('#lf-modal-close');
  const cancelBtn = container.querySelector('#lf-modal-cancel');
  const btnAdd = container.querySelector('#btn-add-item');

  if (btnAdd) btnAdd.onclick = () => modal.classList.remove('hidden');
  if (closeBtn) closeBtn.onclick = () => modal.classList.add('hidden');
  if (cancelBtn) cancelBtn.onclick = () => modal.classList.add('hidden');

  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const itemData = {
        type: container.querySelector('#form-lf-type').value,
        category: container.querySelector('#form-lf-cat').value,
        title: container.querySelector('#form-lf-title').value.trim(),
        location: container.querySelector('#form-lf-loc').value.trim(),
        date: container.querySelector('#form-lf-date').value,
        description: container.querySelector('#form-lf-desc').value.trim(),
        contactName: container.querySelector('#form-lf-contact-name').value.trim(),
        contactInfo: container.querySelector('#form-lf-contact-info').value.trim(),
        reward: container.querySelector('#form-lf-reward').value.trim()
      };

      store.addLostFoundItem(itemData);
      showToast('Lost & Found report published!', 'success');
      modal.classList.add('hidden');
      renderLostFound(container);
    };
  }

  if (window.lucide) window.lucide.createIcons();
}


// --- FILE: js/views/marketplace.js ---
// CampusHub Campus Marketplace View



let mpFilterCategory = 'All';
let mpSearchQuery = '';
let mpSortBy = 'date-desc'; // 'date-desc', 'price-asc', 'price-desc'

function renderMarketplace(container) {
  const marketplace = store.getMarketplace();
  const profile = store.getProfile();

  const categories = ['All', 'Textbooks', 'Electronics', 'Bicycles', 'Hostel Gear', 'Stationery & Tools'];

  // Filter items
  let filtered = marketplace.filter(item => {
    if (mpFilterCategory !== 'All' && item.category !== mpFilterCategory) return false;
    if (mpSearchQuery.trim()) {
      const q = mpSearchQuery.toLowerCase();
      const matchTitle = (item.title || '').toLowerCase().includes(q);
      const matchDesc = (item.description || '').toLowerCase().includes(q);
      const matchSeller = (item.sellerName || '').toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchSeller) return false;
    }
    return true;
  });

  // Sort items
  filtered.sort((a, b) => {
    if (mpSortBy === 'price-asc') return a.price - b.price;
    if (mpSortBy === 'price-desc') return b.price - a.price;
    return new Date(b.date || 0) - new Date(a.date || 0);
  });

  container.innerHTML = `
    <div class="space-y-6">

      <!-- Header & Top Action -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Campus Marketplace</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Buy and sell pre-owned textbooks, electronics, cycles, and dorm essentials among campus peers.</p>
        </div>

        <button id="btn-add-listing" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold shadow-md shadow-orange-600/20 transition-all">
          <i data-lucide="tag" class="w-4 h-4"></i>
          <span>List Item for Sale</span>
        </button>
      </div>

      <!-- Filters Toolbar -->
      <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
        
        <div class="flex flex-col md:flex-row items-center gap-3">
          <!-- Search input -->
          <div class="relative flex-1 w-full">
            <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
            <input type="text" id="mp-search" value="${escapeHtml(mpSearchQuery)}" placeholder="Search books, calculators, bicycles, furniture..." class="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
          </div>

          <!-- Sort dropdown -->
          <div class="w-full md:w-auto shrink-0">
            <select id="mp-sort-select" class="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option value="date-desc" ${mpSortBy === 'date-desc' ? 'selected' : ''}>Newest First</option>
              <option value="price-asc" ${mpSortBy === 'price-asc' ? 'selected' : ''}>Price: Low to High</option>
              <option value="price-desc" ${mpSortBy === 'price-desc' ? 'selected' : ''}>Price: High to Low</option>
            </select>
          </div>
        </div>

        <!-- Category Pills -->
        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
          ${categories.map(cat => `
            <button data-cat="${cat}" class="mp-cat-btn px-3 py-1.5 rounded-lg font-semibold transition-colors shrink-0 ${
              mpFilterCategory === cat
                ? 'bg-orange-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }">
              ${cat}
            </button>
          `).join('')}
        </div>

      </div>

      <!-- Marketplace Listings Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        ${filtered.length > 0 ? filtered.map(item => `
          <div class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm card-hover-lift flex flex-col justify-between group">
            
            <div>
              <!-- Product Image with Price Badge -->
              <div class="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img src="${item.image}" alt="${escapeHtml(item.title)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                
                <div class="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm text-white text-xs font-black">
                  $${item.price}
                </div>

                <div class="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 text-[11px] font-bold shadow-sm backdrop-blur-sm">
                  ${item.condition}
                </div>
              </div>

              <!-- Product Details Body -->
              <div class="p-5">
                <div class="text-[11px] font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-1">
                  ${escapeHtml(item.category)}
                </div>

                <h3 class="text-base font-black text-slate-900 dark:text-white line-clamp-1 mb-2">
                  ${escapeHtml(item.title)}
                </h3>

                <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                  ${escapeHtml(item.description)}
                </p>

                <div class="space-y-1.5 text-xs text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div class="flex items-center gap-2 truncate">
                    <i data-lucide="user" class="w-3.5 h-3.5 text-slate-400 shrink-0"></i>
                    <span class="truncate"><strong>Seller:</strong> ${escapeHtml(item.sellerName)}</span>
                  </div>
                  <div class="flex items-center gap-2 truncate">
                    <i data-lucide="phone" class="w-3.5 h-3.5 text-slate-400 shrink-0"></i>
                    <span class="truncate">${escapeHtml(item.sellerContact)}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Action footer -->
            <div class="p-5 pt-0 flex items-center justify-between gap-3">
              <button data-contact-id="${item.id}" class="contact-seller-btn flex-1 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold text-xs shadow-sm transition-all text-center">
                Contact Seller
              </button>

              <button data-delete-id="${item.id}" class="delete-mp-btn p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" title="Delete Listing">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
            </div>

          </div>
        `).join('') : `
          <div class="col-span-full p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <i data-lucide="shopping-bag" class="w-12 h-12 mx-auto text-slate-300 dark:text-slate-600 mb-3"></i>
            <h3 class="text-base font-bold text-slate-900 dark:text-white">No marketplace listings found</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Try switching category tabs or clearing search query.</p>
          </div>
        `}
      </div>

      <!-- Add Marketplace Item Modal -->
      <div id="mp-modal" class="fixed inset-0 z-50 hidden bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 modal-enter">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-extrabold text-slate-900 dark:text-white">List Item for Sale</h3>
            <button id="mp-modal-close" class="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <form id="mp-form" class="space-y-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Item Name *</label>
              <input type="text" id="form-mp-title" required placeholder="e.g. Casio fx-991EX ClassWiz Calculator" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none">
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Category *</label>
                <select id="form-mp-cat" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none">
                  ${categories.filter(c => c !== 'All').map(c => `<option value="${c}">${c}</option>`).join('')}
                </select>
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Price ($) *</label>
                <input type="number" id="form-mp-price" min="1" step="0.5" required placeholder="35" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none">
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Item Condition *</label>
                <select id="form-mp-condition" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none">
                  <option value="Brand New">Brand New</option>
                  <option value="Like New" selected>Like New</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair / Usable</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Image URL</label>
                <input type="url" id="form-mp-image" placeholder="https://images.unsplash.com/..." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none">
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Description *</label>
              <textarea id="form-mp-desc" required rows="3" placeholder="Condition details, reason for sale, edition year..." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"></textarea>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Seller Name *</label>
                <input type="text" id="form-mp-seller" required value="${escapeHtml(profile.name)}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Contact Info (Phone / Room) *</label>
                <input type="text" id="form-mp-contact" required value="${escapeHtml(profile.email)}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none">
              </div>
            </div>

            <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button type="button" id="mp-modal-cancel" class="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-semibold">
                Cancel
              </button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold shadow-md shadow-orange-600/25">
                List for Sale
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  `;

  // Contact seller action
  container.querySelectorAll('.contact-seller-btn').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.contactId;
      const item = marketplace.find(i => i.id === id);
      if (item) {
        alert(`Contact Seller:\n\nName: ${item.sellerName}\nContact: ${item.sellerContact}\nItem: ${item.title} ($${item.price})`);
      }
    };
  });

  // Delete listing
  container.querySelectorAll('.delete-mp-btn').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.deleteId;
      if (confirm('Delete this marketplace listing?')) {
        store.deleteMarketplaceItem(id);
        showToast('Listing removed', 'info');
        renderMarketplace(container);
      }
    };
  });

  // Category filter
  container.querySelectorAll('.mp-cat-btn').forEach(btn => {
    btn.onclick = () => {
      mpFilterCategory = btn.dataset.cat;
      renderMarketplace(container);
    };
  });

  // Sort dropdown
  const sortSelect = container.querySelector('#mp-sort-select');
  if (sortSelect) {
    sortSelect.onchange = (e) => {
      mpSortBy = e.target.value;
      renderMarketplace(container);
    };
  }

  // Search input
  const searchInput = container.querySelector('#mp-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      mpSearchQuery = e.target.value;
      renderMarketplace(container);
    });
  }

  // Modal logic
  const modal = container.querySelector('#mp-modal');
  const form = container.querySelector('#mp-form');
  const closeBtn = container.querySelector('#mp-modal-close');
  const cancelBtn = container.querySelector('#mp-modal-cancel');
  const btnAdd = container.querySelector('#btn-add-listing');

  if (btnAdd) btnAdd.onclick = () => modal.classList.remove('hidden');
  if (closeBtn) closeBtn.onclick = () => modal.classList.add('hidden');
  if (cancelBtn) cancelBtn.onclick = () => modal.classList.add('hidden');

  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const itemData = {
        title: container.querySelector('#form-mp-title').value.trim(),
        category: container.querySelector('#form-mp-cat').value,
        price: parseFloat(container.querySelector('#form-mp-price').value) || 0,
        condition: container.querySelector('#form-mp-condition').value,
        image: container.querySelector('#form-mp-image').value.trim() || 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=80',
        description: container.querySelector('#form-mp-desc').value.trim(),
        sellerName: container.querySelector('#form-mp-seller').value.trim(),
        sellerContact: container.querySelector('#form-mp-contact').value.trim()
      };

      store.addMarketplaceItem(itemData);
      showToast('Item listed on Marketplace!', 'success');
      modal.classList.add('hidden');
      renderMarketplace(container);
    };
  }

  if (window.lucide) window.lucide.createIcons();
}


// --- FILE: js/views/profile.js ---
// CampusHub Student Profile & Settings View



function renderProfile(container) {
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


// --- FILE: js/app.js ---
// CampusHub Main Application Controller & Router



// Import Views














// Route configuration
const ROUTES = {
  '': { title: 'CampusHub', render: renderLanding, isLanding: true },
  '#': { title: 'CampusHub', render: renderLanding, isLanding: true },
  '#landing': { title: 'CampusHub — Welcome', render: renderLanding, isLanding: true },
  '#dashboard': { title: 'Dashboard', icon: 'layout-dashboard', render: renderDashboard },
  '#timetable': { title: 'Timetable', icon: 'calendar', render: renderTimetable },
  '#attendance': { title: 'Attendance', icon: 'check-check', render: renderAttendance },
  '#assignments': { title: 'Assignments', icon: 'check-square', render: renderAssignments },
  '#study': { title: 'Study & Pomodoro', icon: 'timer', render: renderStudyPlanner },
  '#events': { title: 'Campus Events', icon: 'sparkles', render: renderEvents },
  '#notes': { title: 'Notes & Files', icon: 'book-open', render: renderNotes },
  '#gpa': { title: 'GPA Calculator', icon: 'calculator', render: renderGpaCalculator },
  '#clubs': { title: 'Campus Clubs', icon: 'users', render: renderClubs },
  '#lostfound': { title: 'Lost & Found', icon: 'help-circle', render: renderLostFound },
  '#marketplace': { title: 'Marketplace', icon: 'shopping-bag', render: renderMarketplace },
  '#profile': { title: 'Profile', icon: 'user', render: renderProfile },
};

class App {
  constructor() {
    this.root = document.getElementById('app-root');
    this.currentHash = window.location.hash || '#landing';
    this.mobileSidebarOpen = false;
    this.notifDropdownOpen = false;

    this.init();
  }

  init() {
    window.addEventListener('hashchange', () => this.handleRouting());
    this.setupGlobalSearch();
    this.handleRouting();

    // Subscribe to state changes to update badges & shell UI
    store.subscribe('*', () => this.updateShellCounters());
  }

  handleRouting() {
    const rawHash = window.location.hash;
    const cleanHash = rawHash.split('?')[0] || '#landing';
    this.currentHash = cleanHash;

    const route = ROUTES[cleanHash] || ROUTES['#dashboard'];

    if (route.isLanding) {
      this.renderLandingLayout(route);
    } else {
      this.renderAppLayout(route, cleanHash);
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  renderLandingLayout(route) {
    this.root.innerHTML = `<div id="landing-container" class="min-h-screen"></div>`;
    const container = document.getElementById('landing-container');
    route.render(container);
  }

  renderAppLayout(route, currentHash) {
    const profile = store.getProfile();
    const assignments = store.getAssignments();
    const attendance = store.getAttendance();
    const notifications = store.getNotifications();

    const pendingCount = assignments.filter(a => a.status !== 'Completed').length;
    const unreadNotifCount = notifications.filter(n => !n.read).length;
    const lowAttCount = attendance.filter(s => {
      const total = s.totalClasses || 0;
      const attended = s.attendedClasses || 0;
      return total > 0 && ((attended / total) * 100) < (s.targetPercentage || 75);
    }).length;

    // Build navigation items
    const navItems = [
      { hash: '#dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
      { hash: '#timetable', label: 'Class Timetable', icon: 'calendar' },
      { hash: '#attendance', label: 'Attendance Tracker', icon: 'check-check', badge: lowAttCount > 0 ? `${lowAttCount} alert` : null, badgeColor: 'bg-red-500' },
      { hash: '#assignments', label: 'Assignments', icon: 'check-square', badge: pendingCount > 0 ? pendingCount : null, badgeColor: 'bg-amber-500' },
      { hash: '#study', label: 'Study & Pomodoro', icon: 'timer' },
      { hash: '#events', label: 'College Events', icon: 'sparkles' },
      { hash: '#notes', label: 'Notes & Resources', icon: 'book-open' },
      { hash: '#gpa', label: 'GPA Calculator', icon: 'calculator' },
      { hash: '#clubs', label: 'Campus Clubs', icon: 'users' },
      { hash: '#lostfound', label: 'Lost & Found', icon: 'help-circle' },
      { hash: '#marketplace', label: 'Marketplace', icon: 'shopping-bag' },
      { hash: '#profile', label: 'Student Profile', icon: 'user' },
    ];

    this.root.innerHTML = `
      <div class="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-950">
        
        <!-- Mobile Sidebar Backdrop -->
        <div id="mobile-sidebar-backdrop" class="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden hidden"></div>

        <!-- Sidebar Navigation (Desktop & Mobile Drawer) -->
        <aside id="app-sidebar" class="fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-900 border-r border-slate-200/80 dark:border-slate-800 flex flex-col transition-transform duration-300 transform -translate-x-full lg:translate-x-0 lg:static lg:inset-auto shrink-0 shadow-lg lg:shadow-none">
          
          <!-- Logo & Brand Header -->
          <div class="h-16 flex items-center justify-between px-5 border-b border-slate-100 dark:border-slate-800">
            <a href="#landing" class="flex items-center gap-2.5 group">
              <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
                🎓
              </div>
              <div>
                <span class="text-lg font-black tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">CampusHub</span>
                <span class="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Student Portal</span>
              </div>
            </a>

            <!-- Close Mobile Menu Button -->
            <button id="mobile-sidebar-close" class="p-1 rounded-lg text-slate-400 hover:text-slate-600 lg:hidden">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <!-- Navigation Links Scroll Area -->
          <nav class="flex-1 overflow-y-auto p-3 space-y-1">
            ${navItems.map(item => {
              const isActive = currentHash === item.hash;
              return `
                <a href="${item.hash}" class="nav-link flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'
                }">
                  <div class="flex items-center gap-3 min-w-0">
                    <i data-lucide="${item.icon}" class="w-4 h-4 shrink-0"></i>
                    <span class="truncate">${item.label}</span>
                  </div>
                  ${item.badge ? `
                    <span class="px-2 py-0.5 rounded-full text-[10px] font-bold text-white ${item.badgeColor || 'bg-indigo-500'} shrink-0 shadow-xs">
                      ${item.badge}
                    </span>
                  ` : ''}
                </a>
              `;
            }).join('')}
          </nav>

          <!-- Sidebar Footer: Student Profile Mini Card -->
          <div class="p-3 border-t border-slate-100 dark:border-slate-800">
            <a href="#profile" class="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
              <img src="${profile.avatar}" alt="${escapeHtml(profile.name)}" class="w-9 h-9 rounded-xl object-cover border border-slate-200 dark:border-slate-700 shrink-0">
              <div class="min-w-0 flex-1">
                <div class="text-xs font-bold text-slate-900 dark:text-white truncate group-hover:text-indigo-600">${escapeHtml(profile.name)}</div>
                <div class="text-[11px] text-slate-400 truncate">${escapeHtml(profile.rollNo)}</div>
              </div>
              <i data-lucide="chevron-right" class="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform"></i>
            </a>
          </div>

        </aside>

        <!-- Main App Content Area -->
        <div class="flex-1 flex flex-col min-w-0 overflow-hidden">

          <!-- Top Navigation Bar -->
          <header class="h-16 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 px-4 sm:px-6 flex items-center justify-between gap-4 shrink-0">
            
            <!-- Left: Mobile Menu Trigger & Search Button -->
            <div class="flex items-center gap-3 flex-1 max-w-md">
              <button id="mobile-sidebar-toggle" class="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden">
                <i data-lucide="menu" class="w-5 h-5"></i>
              </button>

              <!-- Global Search Trigger Bar -->
              <button id="header-search-trigger" class="flex-1 hidden sm:flex items-center gap-3 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-600 text-xs font-medium border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all text-left">
                <i data-lucide="search" class="w-4 h-4 text-indigo-500"></i>
                <span class="truncate">Search tasks, classes, events, notes...</span>
                <kbd class="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-white dark:bg-slate-700 text-slate-500 font-mono shadow-xs">Ctrl K</kbd>
              </button>

              <button id="header-search-trigger-mobile" class="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 sm:hidden" title="Search">
                <i data-lucide="search" class="w-5 h-5"></i>
              </button>
            </div>

            <!-- Right: Actions & Tools -->
            <div class="flex items-center gap-2 sm:gap-3">
              
              <!-- Back to Landing Page -->
              <a href="#landing" class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <i data-lucide="home" class="w-4 h-4"></i>
                <span>Landing</span>
              </a>

              <!-- Theme Switcher -->
              <button id="header-theme-toggle" class="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" title="Toggle dark/light mode">
                <i data-lucide="${store.getTheme() === 'dark' ? 'sun' : 'moon'}" class="w-5 h-5"></i>
              </button>

              <!-- Notifications Dropdown Trigger -->
              <div class="relative">
                <button id="header-notif-toggle" class="relative p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <i data-lucide="bell" class="w-5 h-5"></i>
                  ${unreadNotifCount > 0 ? `
                    <span class="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-900 animate-pulse"></span>
                  ` : ''}
                </button>

                <!-- Notifications Dropdown Menu -->
                <div id="header-notif-dropdown" class="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-4 hidden z-50 modal-enter">
                  <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-3">
                    <div class="flex items-center gap-2">
                      <h4 class="text-sm font-bold text-slate-900 dark:text-white">Campus Notifications</h4>
                      <span class="text-[11px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                        ${unreadNotifCount} unread
                      </span>
                    </div>
                    <button id="btn-mark-all-read" class="text-xs text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
                      Mark all read
                    </button>
                  </div>

                  <div class="space-y-2 max-h-72 overflow-y-auto">
                    ${notifications.length > 0 ? notifications.map(notif => `
                      <a href="${notif.link || '#'}" class="block p-3 rounded-xl ${notif.read ? 'bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50' : 'bg-indigo-50/50 dark:bg-indigo-950/30'} border border-slate-100 dark:border-slate-800/60 transition-colors">
                        <div class="flex items-center justify-between mb-1">
                          <span class="text-xs font-bold text-slate-900 dark:text-white">${escapeHtml(notif.title)}</span>
                          <span class="text-[10px] text-slate-400">${notif.time}</span>
                        </div>
                        <p class="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">${escapeHtml(notif.message)}</p>
                      </a>
                    `).join('') : `
                      <div class="text-center py-6 text-slate-400 text-xs font-medium">No notifications</div>
                    `}
                  </div>
                </div>
              </div>

              <!-- Profile avatar quick link -->
              <a href="#profile" class="p-0.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:ring-2 hover:ring-indigo-500 transition-all">
                <img src="${profile.avatar}" alt="Avatar" class="w-8 h-8 rounded-lg object-cover">
              </a>

            </div>
          </header>

          <!-- Main Scrollable Content Container -->
          <main class="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            <div id="view-container" class="max-w-7xl mx-auto">
              <!-- View Content dynamically injected -->
            </div>
          </main>

          <!-- Mobile Bottom Navigation Bar -->
          <div class="lg:hidden h-14 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-around px-2 shrink-0 z-30">
            <a href="#dashboard" class="flex flex-col items-center py-1 px-2 text-[10px] font-semibold ${currentHash === '#dashboard' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500'}">
              <i data-lucide="layout-dashboard" class="w-5 h-5"></i>
              <span>Home</span>
            </a>
            <a href="#timetable" class="flex flex-col items-center py-1 px-2 text-[10px] font-semibold ${currentHash === '#timetable' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500'}">
              <i data-lucide="calendar" class="w-5 h-5"></i>
              <span>Schedule</span>
            </a>
            <a href="#attendance" class="flex flex-col items-center py-1 px-2 text-[10px] font-semibold ${currentHash === '#attendance' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500'}">
              <i data-lucide="check-check" class="w-5 h-5"></i>
              <span>Attendance</span>
            </a>
            <a href="#assignments" class="flex flex-col items-center py-1 px-2 text-[10px] font-semibold ${currentHash === '#assignments' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500'}">
              <i data-lucide="check-square" class="w-5 h-5"></i>
              <span>Tasks</span>
            </a>
            <a href="#profile" class="flex flex-col items-center py-1 px-2 text-[10px] font-semibold ${currentHash === '#profile' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500'}">
              <i data-lucide="user" class="w-5 h-5"></i>
              <span>Profile</span>
            </a>
          </div>

        </div>

      </div>
    `;

    // Render the view into view-container
    const viewContainer = document.getElementById('view-container');
    if (viewContainer && route.render) {
      route.render(viewContainer);
    }

    // Attach listeners for app shell components
    this.attachShellListeners();

    // Refresh icons
    if (window.lucide) window.lucide.createIcons();
  }

  attachShellListeners() {
    // Theme toggle
    const themeBtn = document.getElementById('header-theme-toggle');
    if (themeBtn) {
      themeBtn.onclick = () => {
        const next = store.toggleTheme();
        themeBtn.innerHTML = `<i data-lucide="${next === 'dark' ? 'sun' : 'moon'}" class="w-5 h-5"></i>`;
        if (window.lucide) window.lucide.createIcons();
      };
    }

    // Mobile sidebar toggle
    const mobileToggle = document.getElementById('mobile-sidebar-toggle');
    const mobileClose = document.getElementById('mobile-sidebar-close');
    const mobileBackdrop = document.getElementById('mobile-sidebar-backdrop');
    const sidebar = document.getElementById('app-sidebar');

    const openSidebar = () => {
      if (sidebar) sidebar.classList.remove('-translate-x-full');
      if (mobileBackdrop) mobileBackdrop.classList.remove('hidden');
    };

    const closeSidebar = () => {
      if (sidebar) sidebar.classList.add('-translate-x-full');
      if (mobileBackdrop) mobileBackdrop.classList.add('hidden');
    };

    if (mobileToggle) mobileToggle.onclick = openSidebar;
    if (mobileClose) mobileClose.onclick = closeSidebar;
    if (mobileBackdrop) mobileBackdrop.onclick = closeSidebar;

    // Notifications dropdown
    const notifBtn = document.getElementById('header-notif-toggle');
    const notifDropdown = document.getElementById('header-notif-dropdown');
    if (notifBtn && notifDropdown) {
      notifBtn.onclick = (e) => {
        e.stopPropagation();
        notifDropdown.classList.toggle('hidden');
      };

      document.addEventListener('click', (e) => {
        if (!notifDropdown.contains(e.target) && !notifBtn.contains(e.target)) {
          notifDropdown.classList.add('hidden');
        }
      });
    }

    const markAllRead = document.getElementById('btn-mark-all-read');
    if (markAllRead) {
      markAllRead.onclick = () => {
        store.markAllNotificationsRead();
        showToast('All notifications marked as read', 'info');
        this.renderAppLayout(ROUTES[this.currentHash] || ROUTES['#dashboard'], this.currentHash);
      };
    }
  }

  updateShellCounters() {
    // Re-render current app layout to reflect counts if not on landing
    if (this.currentHash !== '#landing' && this.currentHash !== '') {
      // Re-trigger icons
      if (window.lucide) window.lucide.createIcons();
    }
  }

  setupGlobalSearch() {
    const modal = document.getElementById('global-search-modal');
    const input = document.getElementById('global-search-input');
    const resultsContainer = document.getElementById('global-search-results');
    const closeBtn = document.getElementById('global-search-close');

    const openModal = () => {
      modal.classList.remove('hidden');
      input.value = '';
      input.focus();
      renderSearchResults('');
    };

    const closeModal = () => {
      modal.classList.add('hidden');
    };

    // Keyboard shortcuts: Ctrl+K or /
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (modal.classList.contains('hidden')) openModal();
        else closeModal();
      } else if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
      }
    });

    // Button click listeners
    document.addEventListener('click', (e) => {
      if (e.target.closest('#header-search-trigger') || e.target.closest('#header-search-trigger-mobile')) {
        openModal();
      }
      if (e.target.closest('#global-search-close') || e.target === modal) {
        closeModal();
      }
    });

    const renderSearchResults = (query) => {
      const q = query.trim().toLowerCase();
      if (!q) {
        resultsContainer.innerHTML = `
          <div class="text-center py-8 text-slate-400 text-xs font-medium">
            Search for classes, assignments, events, notes, clubs, or marketplace listings...
          </div>
        `;
        return;
      }

      const timetable = store.getTimetable();
      const assignments = store.getAssignments();
      const events = store.getEvents();
      const notes = store.getNotes();
      const clubs = store.getClubs();
      const marketplace = store.getMarketplace();

      const hits = [];

      // Classes
      timetable.forEach(c => {
        if (c.subject.toLowerCase().includes(q) || c.room.toLowerCase().includes(q) || c.professor.toLowerCase().includes(q)) {
          hits.push({ type: 'Class', title: c.subject, desc: `${c.day} • ${c.startTime}-${c.endTime} • ${c.room}`, link: '#timetable', icon: 'calendar', color: 'text-indigo-500' });
        }
      });

      // Assignments
      assignments.forEach(a => {
        if (a.title.toLowerCase().includes(q) || a.subject.toLowerCase().includes(q)) {
          hits.push({ type: 'Assignment', title: a.title, desc: `${a.subject} • Priority: ${a.priority}`, link: '#assignments', icon: 'check-square', color: 'text-amber-500' });
        }
      });

      // Events
      events.forEach(ev => {
        if (ev.title.toLowerCase().includes(q) || ev.category.toLowerCase().includes(q) || ev.organizer.toLowerCase().includes(q)) {
          hits.push({ type: 'Event', title: ev.title, desc: `${ev.category} • ${ev.date} • ${ev.venue}`, link: '#events', icon: 'sparkles', color: 'text-rose-500' });
        }
      });

      // Notes
      notes.forEach(n => {
        if (n.title.toLowerCase().includes(q) || n.subject.toLowerCase().includes(q) || n.content.toLowerCase().includes(q)) {
          hits.push({ type: 'Note', title: n.title, desc: `${n.subject} • ${n.category}`, link: '#notes', icon: 'book-open', color: 'text-teal-500' });
        }
      });

      // Clubs
      clubs.forEach(cl => {
        if (cl.name.toLowerCase().includes(q) || cl.category.toLowerCase().includes(q) || cl.description.toLowerCase().includes(q)) {
          hits.push({ type: 'Club', title: cl.name, desc: `${cl.category} • ${cl.memberCount} members`, link: '#clubs', icon: 'users', color: 'text-cyan-500' });
        }
      });

      // Marketplace
      marketplace.forEach(mp => {
        if (mp.title.toLowerCase().includes(q) || mp.category.toLowerCase().includes(q)) {
          hits.push({ type: 'Marketplace', title: mp.title, desc: `$${mp.price} • ${mp.condition} • ${mp.category}`, link: '#marketplace', icon: 'shopping-bag', color: 'text-orange-500' });
        }
      });

      if (hits.length === 0) {
        resultsContainer.innerHTML = `
          <div class="text-center py-8 text-slate-400 text-xs font-medium">
            No matching results found for "${escapeHtml(query)}"
          </div>
        `;
      } else {
        resultsContainer.innerHTML = `
          <div class="space-y-1">
            ${hits.slice(0, 10).map(hit => `
              <a href="${hit.link}" class="search-result-item flex items-center justify-between p-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
                <div class="flex items-center gap-3 min-w-0">
                  <div class="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 ${hit.color}">
                    <i data-lucide="${hit.icon}" class="w-4 h-4"></i>
                  </div>
                  <div class="min-w-0">
                    <div class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-indigo-600">${escapeHtml(hit.title)}</div>
                    <div class="text-[11px] text-slate-400 truncate">${escapeHtml(hit.desc)}</div>
                  </div>
                </div>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500">
                  ${hit.type}
                </span>
              </a>
            `).join('')}
          </div>
        `;

        resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
          item.onclick = () => closeModal();
        });
      }

      if (window.lucide) window.lucide.createIcons();
    };

    input.addEventListener('input', (e) => {
      renderSearchResults(e.target.value);
    });
  }
}

// Instantiate and start app on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new App();
});
