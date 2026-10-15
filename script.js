function showScreen(screenId) {
  // Hide all screens
  document.querySelectorAll('.screen').forEach((screen) => {
    screen.classList.add('hidden');
  });

  // Show the requested screen
  const targetScreen = document.getElementById(screenId);
  targetScreen.classList.remove('hidden');
}

// Start button navigation
document.getElementById('start-btn').addEventListener('click', () => {
  showScreen('level-screen');
});

let currentLevel = 0;
let currentQuestion = 0;
let xp = 0;
let health = 3;
let missedQuestions = [];

const chapterNames = [
  'Origins & Oral Traditions',
  'The World Before 1491',
  'Contact & Colonization',
  'Revolution & Removal',
  'The Western Frontier',
  'Survival & Sovereignty',
];

document.querySelectorAll('.level-btn').forEach((button) => {
  button.addEventListener('click', () => {
    currentLevel = Number(button.dataset.level);
    currentQuestion = 0;

    activeQuestions = questions
      .filter((question) => question.level === currentLevel)
      .sort(() => Math.random() - 0.5);
    showScreen('battle-screen');
    loadQuestion();
  });
});

function loadQuestion() {
  const question = activeQuestions[currentQuestion];

  document.getElementById('chapter-title').textContent =
    chapterNames[currentLevel];

  document.getElementById('question-text').textContent = question.question;

  const answerContainer = document.getElementById('answer-options');
  answerContainer.innerHTML = '';

  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;

    // We'll implement this function next.
    button.addEventListener('click', () => {
      checkAnswer(index, question);
    });

    answerContainer.appendChild(button);
  });

  document.getElementById('feedback').textContent = '';
  document.getElementById('next-btn').classList.add('hidden');
}

function checkAnswer(selectedIndex, question) {
  const feedback = document.getElementById('feedback');
  const nextButton = document.getElementById('next-btn');

  // Check whether the selected answer is correct
  if (selectedIndex === question.correct) {
    xp += 100;
    feedback.textContent = `CORRECT! +100 XP\n${question.explanation}`;
    feedback.style.color = '#91d8b4';
  } else {
    if (!missedQuestions.includes(question)) {
      missedQuestions.push(question);
    }

    document.getElementById('missed').textContent =
      `MISSED: ${missedQuestions.length}`;

    health = Math.max(0, health - 1);
    feedback.textContent = `INCORRECT!\n${question.explanation}`;
    feedback.style.color = '#ff8c8c';
  }

  // Update player statistics
  document.getElementById('xp').textContent = `XP: ${xp}`;
  document.getElementById('health').textContent = `HP: ${health}`;

  // Prevent multiple submissions
  document.querySelectorAll('#answer-options button').forEach((button) => {
    button.disabled = true;
  });

  // Reveal the next challenge
  nextButton.classList.remove('hidden');
}

document.getElementById('next-btn').addEventListener('click', () => {
  currentQuestion++;

  const chapterQuestions = questions.filter(
    (question) => question.level === currentLevel,
  );

  if (currentQuestion < activeQuestions.length) {
    loadQuestion();
  } else {
    showBossBattle();
  }
});

const bossBattles = [
  {
    question:
      'Compare Indigenous oral traditions with conventional Western approaches to history. How might each preserve knowledge about the past?',
    rubric:
      'Discuss oral traditions, cultural memory, spirituality, written records, and the limitations of treating one approach as inherently superior.',
  },
  {
    question:
      'Explain why describing the Americas in 1491 as an empty wilderness is historically inaccurate.',
    rubric:
      'Discuss agricultural innovations, complex political institutions, trade networks, and examples of Indigenous civilizations.',
  },
  {
    question:
      'Compare Spanish and French colonization. How did their different objectives affect Native societies?',
    rubric:
      'Compare missions and imperial control with fur trading and diplomacy. Explain that both systems involved coercion, alliances, and significant regional variation.',
  },
  {
    question:
      'How did the American Revolution and the Indian Removal Act reshape Indigenous sovereignty?',
    rubric:
      'Explain settler expansion, the changing balance of political power, treaty violations, and forced displacement.',
  },
  {
    question:
      'How did nineteenth-century ideas of race, science, and progress influence U.S. policies toward Native Americans?',
    rubric:
      'Discuss racial hierarchies, westward expansion, reservations, boarding schools, and assimilation.',
  },
  {
    question:
      'Why is the idea that Indigenous peoples disappeared historically misleading?',
    rubric:
      'Discuss continued Indigenous communities, cultural survival, political activism, and struggles for sovereignty.',
  },
];

function showBossBattle() {
  const boss = bossBattles[currentLevel];

  document.getElementById('boss-question').textContent = boss.question;
  document.getElementById('boss-rubric').textContent = boss.rubric;

  document.getElementById('boss-answer').value = '';
  document.getElementById('boss-feedback').classList.add('hidden');
  document.getElementById('submit-boss').classList.remove('hidden');

  showScreen('boss-screen');
}

document.getElementById('submit-boss').addEventListener('click', () => {
  const answer = document.getElementById('boss-answer').value.trim();

  if (answer.length < 20) {
    alert('Write at least a few sentences before submitting.');
    return;
  }

  document.getElementById('boss-feedback').classList.remove('hidden');
  document.getElementById('submit-boss').classList.add('hidden');
});

document.getElementById('complete-btn').addEventListener('click', () => {
  showScreen('level-screen');
});

let activeQuestions = [];

let examQuestions = [];
let examIndex = 0;
let examAnswers = [];
let examTime = 300;
let examInterval = null;

function shuffleQuestions(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function startExam() {
  clearInterval(examInterval);

  examQuestions = shuffleQuestions(questions).slice(0, 10);
  examIndex = 0;
  examAnswers = [];
  examTime = 300;

  showScreen('exam-screen');
  loadExamQuestion();
  updateExamTimer();

  examInterval = setInterval(() => {
    examTime--;
    updateExamTimer();

    if (examTime <= 0) {
      finishExam();
    }
  }, 1000);
}

function updateExamTimer() {
  const minutes = Math.floor(examTime / 60);
  const seconds = examTime % 60;

  document.getElementById('exam-timer').textContent =
    `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

document.getElementById('exam-btn').addEventListener('click', startExam);

document.getElementById('retry-exam').addEventListener('click', startExam);

document
  .getElementById('return-home')
  .addEventListener('click', () => showScreen('home-screen'));

function loadExamQuestion() {
  const question = examQuestions[examIndex];

  document.getElementById('exam-progress').textContent =
    `QUESTION ${examIndex + 1} / ${examQuestions.length}`;

  document.getElementById('exam-question').textContent = question.question;

  const container = document.getElementById('exam-options');
  container.innerHTML = '';

  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;

    button.addEventListener('click', () => {
      submitExamAnswer(index);
    });

    container.appendChild(button);
  });
}

function submitExamAnswer(selectedIndex) {
  // 1. Record the selected answer
  examAnswers.push(selectedIndex);

  // 2. Advance to the next question
  examIndex++;

  // 3. Check whether questions remain
  if (examIndex < examQuestions.length) {
    loadExamQuestion();
  } else {
    // 4. Finish the exam
    finishExam();
  }
}

function finishExam() {
  clearInterval(examInterval);
  examInterval = null;

  let correctCount = 0;
  const review = document.getElementById('exam-review');
  review.innerHTML = '';

  examQuestions.forEach((question, index) => {
    const selected = examAnswers[index];
    const correct = selected === question.correct;

    if (correct) {
      correctCount++;
    } else if (!missedQuestions.includes(question)) {
      missedQuestions.push(question);
    }

    const card = document.createElement('div');
    card.className = 'review-card';

    const status = document.createElement('h3');
    status.textContent = correct
      ? `QUESTION ${index + 1}: CORRECT`
      : `QUESTION ${index + 1}: INCORRECT`;

    status.style.color = correct ? '#91d8b4' : '#ff8c8c';

    const prompt = document.createElement('p');
    prompt.textContent = question.question;

    const explanation = document.createElement('p');
    explanation.textContent = `Correct answer: ${question.options[question.correct]}. ${question.explanation}`;

    card.append(status, prompt, explanation);
    review.appendChild(card);
  });

  document.getElementById('exam-score').textContent =
    `${correctCount} / ${examQuestions.length} CORRECT`;

  document.getElementById('exam-summary').textContent =
    `Accuracy: ${Math.round((correctCount / examQuestions.length) * 100)}%`;

  document.getElementById('missed').textContent =
    `MISSED: ${missedQuestions.length}`;

  showScreen('results-screen');
}
