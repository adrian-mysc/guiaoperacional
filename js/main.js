/* ============================================================
   MC GUIAS — Shared JavaScript
   Versão: 1.0
   ============================================================ */

"use strict";

/* ---- Tab Switcher ---------------------------------------- */
function initTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;

      tabBtns.forEach((b) => b.classList.remove("active"));
      tabPanels.forEach((p) => p.classList.remove("active"));

      btn.classList.add("active");
      const panel = document.getElementById("panel-" + target);
      if (panel) panel.classList.add("active");

      btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });

      // Persist tab selection per page
      const pageId = document.body.dataset.page;
      if (pageId) sessionStorage.setItem("tab-" + pageId, target);
    });
  });

  // Restore last tab
  const pageId = document.body.dataset.page;
  if (pageId) {
    const saved = sessionStorage.getItem("tab-" + pageId);
    if (saved) {
      const savedBtn = document.querySelector(`.tab-btn[data-tab="${saved}"]`);
      if (savedBtn) savedBtn.click();
    }
  }
}

/* ---- Checklist ------------------------------------------- */
function initChecklist() {
  document.querySelectorAll(".check-item input[type=checkbox]").forEach((cb) => {
    cb.addEventListener("change", () => {
      cb.closest(".check-item").classList.toggle("done", cb.checked);
    });
  });
}

/* ---- Quiz Engine ----------------------------------------- */
function initQuiz(questions) {
  const app = document.getElementById("quiz-app");
  if (!app) return;

  let current = 0;
  let score = 0;
  let answered = false;

  // Shuffle questions
  const pool = shuffle([...questions]);

  function render() {
    if (current >= pool.length) return showResult();

    const q = pool[current];
    const opts = shuffle([...q.options]);
    const pct = Math.round((current / pool.length) * 100);

    answered = false;

    app.innerHTML = `
      <div style="display:flex;flex-direction:column;gap:14px;">
        <div>
          <div class="quiz-progress-bar">
            <div class="quiz-progress-fill" style="width:${pct}%"></div>
          </div>
          <div style="display:flex;justify-content:space-between;margin-top:4px;">
            <span class="quiz-counter">Pergunta ${current + 1} de ${pool.length}</span>
            <span class="quiz-counter">✅ ${score} corretas</span>
          </div>
        </div>

        <div class="quiz-question-card">
          <div class="quiz-category">${q.category}</div>
          <div class="quiz-question">${q.question}</div>
          <div class="quiz-options" id="quiz-options">
            ${opts.map((o, i) => `
              <button class="quiz-option" data-answer="${o}" data-correct="${o === q.answer}">
                ${o}
              </button>
            `).join("")}
          </div>
        </div>

        <div class="quiz-feedback" id="quiz-feedback"></div>

        <div class="quiz-nav">
          <button class="btn-secondary" onclick="initQuiz(window._quizData)">🔀 Reiniciar</button>
          <button class="btn-primary" id="btn-next" style="display:none;" onclick="nextQuestion()">
            ${current + 1 < pool.length ? "Próxima →" : "Ver Resultado →"}
          </button>
        </div>
      </div>
    `;

    document.querySelectorAll(".quiz-option").forEach((btn) => {
      btn.addEventListener("click", () => handleAnswer(btn, q.answer, q.explanation));
    });
  }

  function handleAnswer(btn, correct, explanation) {
    if (answered) return;
    answered = true;

    const isCorrect = btn.dataset.correct === "true";
    if (isCorrect) score++;

    document.querySelectorAll(".quiz-option").forEach((b) => {
      b.disabled = true;
      if (b.dataset.correct === "true") b.classList.add("correct");
      else if (b === btn && !isCorrect) b.classList.add("wrong");
    });

    const fb = document.getElementById("quiz-feedback");
    fb.className = `quiz-feedback show ${isCorrect ? "correct" : "wrong"}`;
    fb.innerHTML = isCorrect
      ? `✅ <strong>Correto!</strong> ${explanation || ""}`
      : `❌ <strong>Incorreto.</strong> A resposta certa é: <strong>${correct}</strong>. ${explanation || ""}`;

    document.getElementById("btn-next").style.display = "inline-flex";
  }

  window.nextQuestion = () => { current++; render(); };

  function showResult() {
    const pct = Math.round((score / pool.length) * 100);
    const msg = pct >= 80 ? "🎉 Excelente!" : pct >= 60 ? "👍 Bom trabalho!" : "📚 Continue estudando!";

    app.innerHTML = `
      <div class="quiz-result-card">
        <div style="font-size:48px;margin-bottom:10px;">${pct >= 80 ? "🏆" : pct >= 60 ? "👍" : "📖"}</div>
        <div class="quiz-score">${score}/${pool.length}</div>
        <div class="quiz-score-label">${msg}</div>
        <div style="font-size:22px;font-weight:700;color:var(--muted);margin-top:6px;">${pct}% de acertos</div>
        <div style="margin-top:20px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
          <button class="btn-primary" onclick="initQuiz(window._quizData)">🔀 Tentar Novamente</button>
          <a href="../index.html" class="btn-secondary">🏠 Início</a>
        </div>
      </div>
    `;
  }

  window._quizData = questions;
  render();
}

/* ---- Utility: Fisher-Yates Shuffle ----------------------- */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* ---- Auto-init on DOMContentLoaded ----------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initChecklist();
});
