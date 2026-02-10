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
function determineLevel(answers, questions) {
  let totalCorrect = 0;

  let vocabCorrect = 0;
  let vocabTotal = 0;

  let grammarCorrect = 0;
  let grammarTotal = 0;

  let readingCorrect = 0;
  let readingTotal = 0;

  questions.forEach((q, index) => {
    const isCorrect = answers[index] === q.correctAnswer;

    if (isCorrect) totalCorrect++;

    if (q.type === "vocabulary") {
      vocabTotal++;
      if (isCorrect) vocabCorrect++;
    }

    if (q.type === "grammar") {
      grammarTotal++;
      if (isCorrect) grammarCorrect++;
    }

    if (q.type === "reading") {
      readingTotal++;
      if (isCorrect) readingCorrect++;
    }
  });

  // C2: tudo certo
  if (totalCorrect === questions.length) {
    return "C2";
  }

  // C1: errou apenas 1 e foi reading
  if (
    totalCorrect === questions.length - 1 &&
    readingCorrect === readingTotal - 1
  ) {
    return "C1";
  }

  // B2: tudo certo em vocabulário e gramática
  if (
    vocabCorrect === vocabTotal &&
    grammarCorrect === grammarTotal
  ) {
    return "B2";
  }

  // B1: tudo certo em vocabulário e pelo menos 1 de gramática
  if (
    vocabCorrect === vocabTotal &&
    grammarCorrect >= 1
  ) {
    return "B1";
  }

  // A2: acertou 4 e todas de vocabulário
  if (
    totalCorrect === 4 &&
    vocabCorrect === vocabTotal
  ) {
    return "A2";
  }

  // A1: resto
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
  const level = determineLevel(answers, quizData.questions);

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
