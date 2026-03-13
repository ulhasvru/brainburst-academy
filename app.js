// =====================================================
// DATA & STATE
// =====================================================
const SUBJECTS = [
  { id:'math',     name:'Mathematics',   icon:'🔢', cls:'sc-math',      subtitle:'Numbers & Shapes', desc:'Master 6-digit numbers and geometry!' },
  { id:'evs',      name:'EVS & Science', icon:'🌿', cls:'sc-evs',       subtitle:'Nature & Science', desc:'Explore the amazing world!' },
  { id:'english',  name:'English',       icon:'📚', cls:'sc-eng',       subtitle:'Grammar & Stories', desc:'Build your vocabulary!' },
  { id:'hindi',    name:'Hindi',         icon:'🪔', cls:'sc-hindi',     subtitle:'Hindi Vyakaran',   desc:'Learn Hindi grammar!' },
  { id:'kannada',  name:'Kannada',       icon:'🏛️', cls:'sc-kannada',  subtitle:'Namma Bhasha',     desc:'Explore Karnataka culture!' },
  { id:'computer', name:'Computers',     icon:'💻', cls:'sc-computer', subtitle:'Tech Literacy',     desc:'Discover computers and logical thinking!' }
];

const HERO_BGSRC = {
  math: 'linear-gradient(135deg,#FF6B6B,#FF9F1C)',
  evs: 'linear-gradient(135deg,#06D6A0,#4CC9F0)',
  english: 'linear-gradient(135deg,#4CC9F0,#7B2FBE)',
  hindi: 'linear-gradient(135deg,#FFD93D,#FF6B6B)',
  kannada: 'linear-gradient(135deg,#C77DFF,#FF4D6D)',
  computer: 'linear-gradient(135deg,#4CC9F0,#06D6A0)'
};

// ... (Your SYLLABUS, QUESTIONS, and ALL_BADGES remain the same here) ...
// (I am omitting the long arrays for brevity, but keep yours in this section!)

const S = {
  name:'', totalScore:0, subjectId:null,
  questions:[], qIdx:0, qScore:0, correct:0,
  badges:[], subjScores:{}
};

// =====================================================
// CORE NAVIGATION
// =====================================================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  syncUI();
  if(id==='screen-badges') renderBadgesWall();
  if(id==='screen-home') updateHomeProgress();
}

function syncUI() {
  const n=S.name||'Explorer', sc=S.totalScore;
  document.querySelectorAll('#header-name').forEach(e=>e.textContent=n);
  document.querySelectorAll('#header-score,#quiz-hdr-score,#bdg-score').forEach(e=>e.textContent=sc);
  document.querySelectorAll('.dyn-score').forEach(e=>e.textContent=sc);
}

function startApp() {
  const inp=document.getElementById('student-name-input');
  const nm=inp.value.trim();
  if(!nm){document.getElementById('name-error').style.display='block';inp.focus();return;}
  S.name=nm;
  document.getElementById('greeting-name').textContent=nm;
  renderSubjectsGrid();
  showScreen('screen-home');
  toast(`🦁 Welcome ${nm}!`);
}

// =====================================================
// LOCAL STORAGE & ADMIN LOGS
// =====================================================
function saveToLocalLogs(subjectName, pct) {
    const logs = JSON.parse(localStorage.getItem('brainburst_logs')) || [];
    let status = "❌ Failed";
    if(pct === 100) status = "🌟 Perfect";
    else if(pct >= 50) status = "✅ Passed";

    const entry = {
        name: S.name,
        subject: subjectName,
        score: pct,
        status: status,
        date: new Date().toLocaleString('en-IN')
    };

    logs.push(entry);
    localStorage.setItem('brainburst_logs', JSON.stringify(logs));
}

function showAdminDashboard() {
    showScreen('screen-admin');
    document.getElementById('admin-search-input').value = ""; // Reset search
    renderLogTable(); 
}

function filterLogs() {
    const term = document.getElementById('admin-search-input').value.toLowerCase();
    renderLogTable(term);
}

function renderLogTable(filterText = "") {
    const logs = JSON.parse(localStorage.getItem('brainburst_logs')) || [];
    const tableBody = document.getElementById('admin-table-body');
    
    const filtered = logs.filter(l => l.name.toLowerCase().includes(filterText));

    tableBody.innerHTML = filtered.length === 0 
        ? '<tr><td colspan="5" style="text-align:center; padding:20px;">No records found.</td></tr>'
        : filtered.map(l => `
            <tr style="border-top:1px solid #EEE;">
                <td style="padding:12px;">${l.name}</td>
                <td style="padding:12px;">${l.subject}</td>
                <td style="padding:12px; font-weight:bold;">${l.score}%</td>
                <td style="padding:12px;">${l.status}</td>
                <td style="padding:12px; font-size:0.8rem; color:#666;">${l.date}</td>
            </tr>
        `).join('');

    document.getElementById('log-count').textContent = `${filtered.length} records found`;
}

function clearLogs() {
    if(confirm("Delete all records?")) {
        localStorage.removeItem('brainburst_logs');
        renderLogTable();
    }
}

// =====================================================
// QUIZ ENGINE UPDATED
// =====================================================
function showResults() {
  const tot=S.questions.length;
  const pct=Math.round((S.correct/tot)*100);
  const currentSubj = SUBJECTS.find(x=>x.id===S.subjectId);
  
  S.subjScores[S.subjectId]=pct;
  renderSubjectsGrid();

  // SAVE TO LOCAL STORAGE
  saveToLocalLogs(currentSubj.name, pct);

  // ... (rest of your existing showResults badge logic) ...
  
  document.getElementById('res-pct').textContent=pct+'%';
  showScreen('screen-result');
  launchConfetti();
}

// ... (Keep your existing Subject, Syllabus, renderQ, pick, nextQuestion, confetti, and toast functions below) ...
