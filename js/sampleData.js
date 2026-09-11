// CampusHub Sample Data - Initial State for First-Time Users
export const initialData = {
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
