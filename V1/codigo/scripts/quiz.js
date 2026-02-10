// =========================
// QUIZ ENGINE – EnglishFY
// =========================

let quizData = null;
let currentQuestionIndex = 0;
let answers = [];

// DOM
const introSection = document.querySelector(".quiz-intro");
const questionsSection = document.querySelector(".quiz-questions");
const questionCard = document.querySelector(".question-card");
const nextBtn = document.getElementById("nextQuestionBtn");

// Load quiz data
async function loadQuiz() {
  const response = await fetch("../data/quiz.json");
  quizData = await response.json();
}

// Render question
function renderQuestion() {
  const question = quizData.questions[currentQuestionIndex];

  questionCard.innerHTML = `
    <p class="question-text">
      ${currentQuestionIndex + 1}. ${question.question}
    </p>
    ${question.options
      .map(
        (option, index) => `
      <label class="option">
        <input
          type="radio"
          name="question"
          value="${index}"
        />
        ${option}
      </label>
    `
      )
      .join("")}
  `;
}

// Save answer
function saveAnswer() {
  const selected = document.querySelector('input[name="question"]:checked');
  if (!selected) return false;

  answers[currentQuestionIndex] = Number(selected.value);
  return true;
}

// Calculate score
function calculateResults() {
  let score = 0;
  let correctByType = {
    vocabulary: 0,
    grammar: 0,
    reading: 0,
    listening: 0
  };

  quizData.questions.forEach((q, index) => {
    if (answers[index] === q.correctAnswer) {
      score += q.weight;
      correctByType[q.type]++;
    }
  });

  return { score, correctByType };
}

// Determine level
function determineLevel(score, correctByType) {
  const rules = quizData.levelRules;

  if (rules.C2.perfectScore && score === maxScore()) return "C2";
  if (rules.C1.allowOneReadingError) return "C1";

  if (rules.B2.requireAllVocabulary && rules.B2.requireAllGrammar)
    return "B2";

  if (rules.B1.requireAllVocabulary && rules.B1.requireOneGrammar)
    return "B1";

  if (score >= rules.A2.minScore && score <= rules.A2.maxScore)
    return "A2";

  return "A1";
}

// Max possible score
function maxScore() {
  return quizData.questions.reduce((sum, q) => sum + q.weight, 0);
}

// Handle next
function handleNext() {
  if (!saveAnswer()) {
    alert("Selecione uma alternativa 😊");
    return;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.questions.length) {
    renderQuestion();
  } else {
    finishQuiz();
  }
}

// Finish quiz
function finishQuiz() {
  const { score, correctByType } = calculateResults();
  const level = determineLevel(score, correctByType);

  localStorage.setItem(
    "englishfy_quiz_result",
    JSON.stringify({ level })
  );

  window.location.href = "resultado-quiz.html";
}

// INIT
document.querySelector(".start-quiz-btn").addEventListener("click", async () => {
  await loadQuiz();
  introSection.classList.add("hidden");
  questionsSection.classList.remove("hidden");
  renderQuestion();
});

nextBtn.addEventListener("click", handleNext);
