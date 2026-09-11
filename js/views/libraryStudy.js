// CampusHub Digital Library, PYQs & AI Study Assistant View (Features 51-70)
import { store } from '../store.js';
import { escapeHtml, showToast, triggerConfetti } from '../utils.js';

let activeLibTab = 'catalog'; // 'catalog', 'pyq', 'quizzes', 'ai'
let librarySearchQuery = '';

export function renderLibraryStudy(container) {
  const books = store.getBooks();
  const pyqs = store.getPyqs();
  const quizzes = store.getQuizzes();

  let filteredBooks = books.filter(b => {
    if (!librarySearchQuery.trim()) return true;
    const q = librarySearchQuery.toLowerCase();
    return b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q) || b.category.toLowerCase().includes(q) || b.isbn.toLowerCase().includes(q);
  });

  container.innerHTML = `
    <div class="space-y-6">

      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Digital Library & Learning Hub</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Book catalog, previous-year exam papers, interactive quizzes, and 24/7 AI Study Assistant.</p>
        </div>

        <div class="flex items-center gap-2">
          <span class="text-xs font-semibold px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
            📚 Central Library: Open 08:00 AM - 11:00 PM
          </span>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <div class="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar border-b border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-semibold">
        <button data-tab="catalog" class="lib-tab-btn px-4 py-2.5 rounded-t-xl transition-all ${activeLibTab === 'catalog' ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/30' : 'text-slate-500 hover:text-slate-900'}">
          Book Catalogue & Reservation
        </button>
        <button data-tab="pyq" class="lib-tab-btn px-4 py-2.5 rounded-t-xl transition-all ${activeLibTab === 'pyq' ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/30' : 'text-slate-500 hover:text-slate-900'}">
          Previous Year Papers (PYQs)
        </button>
        <button data-tab="quizzes" class="lib-tab-btn px-4 py-2.5 rounded-t-xl transition-all ${activeLibTab === 'quizzes' ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/30' : 'text-slate-500 hover:text-slate-900'}">
          Online Practice Quizzes
        </button>
        <button data-tab="ai" class="lib-tab-btn px-4 py-2.5 rounded-t-xl transition-all ${activeLibTab === 'ai' ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/30' : 'text-slate-500 hover:text-slate-900'}">
          🤖 AI Study Assistant
        </button>
      </div>

      <!-- Tab 1: Book Catalogue & Reservation (Features 51-54) -->
      ${activeLibTab === 'catalog' ? `
        <div class="space-y-4">
          <!-- Search input -->
          <div class="relative w-full max-w-md">
            <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
            <input type="text" id="lib-search" value="${escapeHtml(librarySearchQuery)}" placeholder="Search by book title, author, or ISBN..." class="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${filteredBooks.map(b => `
              <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm card-hover-lift flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 uppercase">${b.category}</span>
                    <span class="text-[11px] font-mono text-slate-400">${b.shelf}</span>
                  </div>
                  <h3 class="text-base font-bold text-slate-900 dark:text-white line-clamp-2 mb-1">${escapeHtml(b.title)}</h3>
                  <p class="text-xs text-slate-500 mb-3">By ${escapeHtml(b.author)}</p>
                  <div class="text-[11px] text-slate-400 font-mono mb-4">ISBN: ${b.isbn}</div>
                </div>

                <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div class="text-xs">
                    <span class="${b.availableCopies > 0 ? 'text-emerald-600 font-bold' : 'text-amber-600 font-bold'}">
                      ${b.availableCopies > 0 ? `✓ ${b.availableCopies} Copies Available` : '⏳ Checked Out'}
                    </span>
                  </div>

                  <button data-book-id="${b.id}" class="btn-reserve-book px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                    b.reservedByMe
                      ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }">
                    ${b.reservedByMe ? 'Reserved ✓' : 'Reserve Hold'}
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Tab 2: Previous Year Papers (Feature 56) -->
      ${activeLibTab === 'pyq' ? `
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
          <div class="flex items-center justify-between">
            <h2 class="text-base font-bold text-slate-900 dark:text-white">University Past Examination Papers Archive</h2>
            <span class="text-xs text-slate-400 font-semibold">${pyqs.length} Available PDFs</span>
          </div>

          <div class="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
            ${pyqs.map(p => `
              <div class="py-3.5 flex items-center justify-between gap-4">
                <div class="flex items-center gap-3 min-w-0">
                  <div class="w-8 h-8 rounded-xl bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400 flex items-center justify-center shrink-0 font-bold text-[10px]">
                    PDF
                  </div>
                  <div>
                    <h4 class="font-bold text-slate-900 dark:text-white">${escapeHtml(p.subject)}</h4>
                    <span class="text-slate-400 text-[11px]">${p.year} • ${p.semester} • Regulation ${p.regulation} (${p.paperType})</span>
                  </div>
                </div>

                <button class="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold transition-colors">
                  Download PYQ
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Tab 3: Practice Quizzes (Features 60 & 61) -->
      ${activeLibTab === 'quizzes' ? `
        <div class="space-y-6">
          ${quizzes.map(quiz => `
            <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4" data-quiz-id="${quiz.id}">
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 uppercase">${quiz.subject}</span>
                  <h3 class="text-base font-bold text-slate-900 dark:text-white mt-1">${quiz.title}</h3>
                </div>
                <span class="text-xs text-slate-400">⏱️ ${quiz.timeLimitMinutes} Mins</span>
              </div>

              <div class="space-y-4 text-xs pt-2 border-t border-slate-100 dark:border-slate-800">
                ${quiz.questions.map((qItem, qIdx) => `
                  <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 space-y-2">
                    <div class="font-bold text-slate-900 dark:text-white">Q${qIdx + 1}: ${escapeHtml(qItem.q)}</div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      ${qItem.options.map((opt, optIdx) => `
                        <label class="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-indigo-500 cursor-pointer">
                          <input type="radio" name="quiz-${quiz.id}-q-${qIdx}" value="${optIdx}" class="text-indigo-600">
                          <span class="text-slate-700 dark:text-slate-300">${escapeHtml(opt)}</span>
                        </label>
                      `).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>

              <div class="flex items-center justify-between pt-2">
                <button data-submit-quiz="${quiz.id}" class="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md transition-all">
                  Submit Quiz & View Score
                </button>
                <div class="quiz-score-result text-xs font-bold text-emerald-600"></div>
              </div>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- Tab 4: AI Study Assistant (Feature 70) -->
      ${activeLibTab === 'ai' ? `
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4 max-w-3xl mx-auto">
          <div class="flex items-center gap-3 border-b pb-3 border-slate-100 dark:border-slate-800">
            <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center font-bold text-lg">
              🤖
            </div>
            <div>
              <h3 class="text-base font-bold text-slate-900 dark:text-white">CampusHub AI Academic Tutor</h3>
              <p class="text-xs text-slate-400">Ask any question on Operating Systems, DBMS, Algorithms, or exam prep</p>
            </div>
          </div>

          <!-- Chat messages stream -->
          <div id="ai-chat-messages" class="h-80 overflow-y-auto space-y-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 text-xs">
            <div class="flex items-start gap-2.5">
              <span class="text-base">🤖</span>
              <div class="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 max-w-[85%] text-slate-800 dark:text-slate-200">
                Hello Alex! I am your AI Study Assistant. Ask me to explain concepts (e.g. "Explain TLB", "Difference between B-Tree and B+ Tree", or "Dijkstra algorithm complexity").
              </div>
            </div>
          </div>

          <!-- Chat input -->
          <div class="flex gap-2">
            <input type="text" id="ai-chat-input" placeholder="Type your academic question..." class="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none">
            <button id="ai-chat-send" class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all">
              Ask AI
            </button>
          </div>
        </div>
      ` : ''}

    </div>
  `;

  // Tab switching
  container.querySelectorAll('.lib-tab-btn').forEach(btn => {
    btn.onclick = () => {
      activeLibTab = btn.dataset.tab;
      renderLibraryStudy(container);
    };
  });

  // Reserve book toggle
  container.querySelectorAll('.btn-reserve-book').forEach(btn => {
    btn.onclick = () => {
      const bookId = btn.dataset.bookId;
      const isReserved = store.toggleReserveBook(bookId);
      showToast(isReserved ? 'Book hold reserved! Pick up at Library Desk within 24h.' : 'Reservation cancelled.', isReserved ? 'success' : 'info');
      renderLibraryStudy(container);
    };
  });

  // Library search
  const libSearch = container.querySelector('#lib-search');
  if (libSearch) {
    libSearch.oninput = (e) => {
      librarySearchQuery = e.target.value;
      renderLibraryStudy(container);
    };
  }

  // Quiz submission
  container.querySelectorAll('[data-submit-quiz]').forEach(btn => {
    btn.onclick = () => {
      const quizId = btn.dataset.submitQuiz;
      const quiz = quizzes.find(q => q.id === quizId);
      if (!quiz) return;

      let score = 0;
      quiz.questions.forEach((qItem, qIdx) => {
        const selected = container.querySelector(`input[name="quiz-${quiz.id}-q-${qIdx}"]:checked`);
        if (selected && parseInt(selected.value, 10) === qItem.answer) {
          score++;
        }
      });

      triggerConfetti();
      const parent = btn.closest('.p-6');
      const scoreBox = parent.querySelector('.quiz-score-result');
      if (scoreBox) {
        scoreBox.textContent = `Score: ${score} / ${quiz.questions.length} Correct (${Math.round((score/quiz.questions.length)*100)}%)`;
      }
      showToast(`Quiz completed! You scored ${score}/${quiz.questions.length}`, 'success');
    };
  });

  // AI Study Assistant Chat logic
  const aiInput = container.querySelector('#ai-chat-input');
  const aiSend = container.querySelector('#ai-chat-send');
  const aiMessages = container.querySelector('#ai-chat-messages');

  const knowledgeBase = {
    'tlb': 'Translation Lookaside Buffer (TLB) is a fast hardware associative cache in the CPU MMU that stores recent virtual-to-physical page mappings, reducing multi-level memory lookups from 200ns to under 2ns.',
    'b+ tree': 'A B+ Tree stores all actual data records only in leaf nodes connected as a doubly linked list, while internal nodes store only routing keys. This allows ultra-fast range queries (BETWEEN x AND y) in SQL databases compared to standard B-Trees.',
    'dijkstra': "Dijkstra's algorithm finds the shortest path from a single source vertex to all others in graphs with non-negative edge weights. Using a Min-Heap priority queue, its time complexity is O((V + E) log V).",
    'osi': 'The OSI 7-layer model: 7. Application, 6. Presentation, 5. Session, 4. Transport (TCP/UDP), 3. Network (IP), 2. Data Link (Ethernet), 1. Physical.'
  };

  function sendAiQuery() {
    if (!aiInput || !aiMessages) return;
    const query = aiInput.value.trim();
    if (!query) return;

    // Append user message
    const userDiv = document.createElement('div');
    userDiv.className = 'flex items-start gap-2.5 justify-end';
    userDiv.innerHTML = `<div class="p-3 rounded-2xl bg-indigo-600 text-white max-w-[85%]">${escapeHtml(query)}</div>`;
    aiMessages.appendChild(userDiv);
    aiInput.value = '';

    // Simulate AI thinking and response
    setTimeout(() => {
      let reply = "That's an important topic for your semester exams. Make sure to review the lecture slides and solve the past 3 years' questions from our PYQ section!";
      const qLower = query.toLowerCase();

      for (const [k, ans] of Object.entries(knowledgeBase)) {
        if (qLower.includes(k)) {
          reply = ans;
          break;
        }
      }

      const aiDiv = document.createElement('div');
      aiDiv.className = 'flex items-start gap-2.5';
      aiDiv.innerHTML = `<span class="text-base">🤖</span><div class="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 max-w-[85%] text-slate-800 dark:text-slate-200">${reply}</div>`;
      aiMessages.appendChild(aiDiv);
      aiMessages.scrollTop = aiMessages.scrollHeight;
    }, 400);
  }

  if (aiSend) aiSend.onclick = sendAiQuery;
  if (aiInput) aiInput.onkeydown = (e) => { if (e.key === 'Enter') sendAiQuery(); };

  if (window.lucide) window.lucide.createIcons();
}
