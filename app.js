// 1. DATA
const SUBJECTS = [
    { id: 'math', name: 'Mathematics', icon: '🔢', cls: 'sc-math' },
    { id: 'evs', name: 'EVS', icon: '🌿', cls: 'sc-evs' },
    { id: 'english', name: 'English', icon: '📚', cls: 'sc-eng' },
    { id: 'hindi', name: 'Hindi', icon: '🪔', cls: 'sc-hindi' },
    { id: 'kannada', name: 'Kannada', icon: '🏛️', cls: 'sc-kannada' },
    { id: 'computer', name: 'Computers', icon: '💻', cls: 'sc-computer' }
];

const QUESTIONS = {
    math: [{ q: "What is 10 + 20?", opts: ["20", "30", "40"], ans: 1 }],
    evs: [{ q: "What color is a leaf?", opts: ["Red", "Green", "Blue"], ans: 1 }],
    english: [{ q: "Opposite of 'Big'?", opts: ["Large", "Small", "Tall"], ans: 1 }],
    hindi: [{ q: "Hindi for 'Water'?", opts: ["Paani", "Khana", "Ghar"], ans: 0 }],
    kannada: [{ q: "Kannada for 'Hello'?", opts: ["Namaskara", "Oota", "Hogi"], ans: 0 }],
    computer: [{ q: "Brain of Computer?", opts: ["CPU", "Mouse", "Keyboard"], ans: 0 }]
};

// 2. STATE
let S = {
    name: '',
    subjectId: '',
    questions: [],
    qIdx: 0,
    correct: 0
};

// 3. CORE FUNCTIONS (Defining these first ensures no 'not defined' errors)
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function renderSubjectsGrid() {
    const grid = document.getElementById('subjects-grid');
    grid.innerHTML = SUBJECTS.map(s => `
        <div class="subj-card" onclick="startQuiz('${s.id}')">
            <div style="font-size:2rem;">${s.icon}</div>
            <h3>${s.name}</h3>
        </div>
    `).join('');
}

function startApp() {
    const nameInput = document.getElementById('student-name-input');
    const name = nameInput.value.trim();
    if (!name) {
        document.getElementById('name-error').style.display = 'block';
        return;
    }
    S.name = name;
    document.getElementById('greeting-name').textContent = name;
    renderSubjectsGrid(); // Calling it here
    showScreen('screen-home');
}

function startQuiz(id) {
    S.subjectId = id;
    S.questions = QUESTIONS[id] || [];
    S.qIdx = 0;
    S.correct = 0;
    showScreen('screen-quiz');
    renderQuestion();
}

function renderQuestion() {
    const q = S.questions[S.qIdx];
    document.getElementById('q-text').textContent = q.q;
    document.getElementById('q-opts').innerHTML = q.opts.map((o, i) => `
        <button onclick="checkAnswer(${i})" style="display:block; width:100%; margin:5px; padding:10px;">${o}</button>
    `).join('');
    document.getElementById('next-btn').style.display = 'none';
}

function checkAnswer(idx) {
    const q = S.questions[S.qIdx];
    if (idx === q.ans) {
        S.correct++;
        toast("✅ Correct!");
    } else {
        toast("❌ Wrong!");
    }
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    S.qIdx++;
    if (S.qIdx >= S.questions.length) {
        finishQuiz();
    } else {
        renderQuestion();
    }
}

function finishQuiz() {
    const pct = Math.round((S.correct / S.questions.length) * 100);
    document.getElementById('res-pct').textContent = pct + "%";
    saveLog(pct);
    showScreen('screen-result');
}

// 4. LOGS ENGINE
function saveLog(pct) {
    const logs = JSON.parse(localStorage.getItem('bb_logs')) || [];
    logs.push({
        name: S.name,
        subject: S.subjectId,
        score: pct,
        status: pct >= 50 ? "Pass" : "Fail",
        date: new Date().toLocaleDateString()
    });
    localStorage.setItem('bb_logs', JSON.stringify(logs));
}

function showAdminDashboard() {
    showScreen('screen-admin');
    renderLogTable();
}

function renderLogTable(filter = "") {
    const logs = JSON.parse(localStorage.getItem('bb_logs')) || [];
    const filtered = logs.filter(l => l.name.toLowerCase().includes(filter.toLowerCase()));
    const body = document.getElementById('admin-table-body');
    body.innerHTML = filtered.map(l => `
        <tr style="border-bottom:1px solid #ddd;">
            <td style="padding:10px;">${l.name}</td>
            <td>${l.subject}</td>
            <td>${l.score}%</td>
            <td>${l.status}</td>
            <td>${l.date}</td>
        </tr>
    `).join('');
    document.getElementById('log-count').textContent = filtered.length + " records";
}

function filterLogs() {
    const term = document.getElementById('admin-search-input').value;
    renderLogTable(term);
}

function clearLogs() {
    if (confirm("Clear all?")) {
        localStorage.removeItem('bb_logs');
        renderLogTable();
    }
}

function toast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.style.display = 'block';
    setTimeout(() => t.style.display = 'none', 2000);
}
