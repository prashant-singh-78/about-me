/**
 * Prashant Friendship Quiz ❤️
 * "How Well Do You Know Prashant?"
 *
 * Fully client-side, offline, Vanilla JavaScript application.
 * 25-Question Bank, 6 random questions per session, 4 shuffled options,
 * accurate scoring, 3 result tiers, answer review, and result sharing.
 */

// =============================================================================
// 1. QUESTION BANK (25 Authentic Questions about Prashant)
// =============================================================================
const QUESTION_BANK = [
  {
    id: 1,
    category: "Friendship Values",
    question: "What does Prashant value most in a friend?",
    correctAnswer: "Understanding",
    options: [
      "Understanding",
      "Constant daily texting",
      "Expensive gifts and treats",
      "Agreeing with him on everything"
    ],
    explanation: "For Prashant, true mutual understanding is the greatest pillar of genuine friendship."
  },
  {
    id: 2,
    category: "Life Ambitions",
    question: "What is Prashant's biggest life goal?",
    correctAnswer: "To become a successful entrepreneur",
    options: [
      "To become a successful entrepreneur",
      "To work a routine 9-to-5 job forever",
      "To become a full-time social media influencer",
      "To move to a deserted island and retire early"
    ],
    explanation: "Prashant is driven by entrepreneurship, innovation, and building his own success."
  },
  {
    id: 3,
    category: "Social Circle",
    question: "How many female friends does Prashant have?",
    correctAnswer: "2",
    options: [
      "2",
      "0",
      "5",
      "More than 10"
    ],
    explanation: "Prashant keeps his close circle selective—he currently has exactly 2 female friends."
  },
  {
    id: 4,
    category: "Personal Life",
    question: "What is Prashant's current love-life situation?",
    correctAnswer: "He is single, with no current love-life scene",
    options: [
      "He is single, with no current love-life scene",
      "In a committed, serious relationship",
      "Actively talking to multiple people",
      "Secretly engaged to someone"
    ],
    explanation: "Prashant is currently single with zero relationship drama, focusing on himself and his goals."
  },
  {
    id: 5,
    category: "Friendship Expectations",
    question: "What kind of support does Prashant expect from friends during difficult times?",
    correctAnswer: "Support without judging him",
    options: [
      "Support without judging him",
      "Endless unsolicited lectures",
      "Pretending nothing ever happened",
      "Public sympathy posts on social media"
    ],
    explanation: "When times are tough, Prashant needs non-judgmental empathy and honest support."
  },
  {
    id: 6,
    category: "Pet Peeves",
    question: "What makes Prashant angry the most?",
    correctAnswer: "Disrespect or insults",
    options: [
      "Disrespect or insults",
      "Slightly late replies on WhatsApp",
      "Losing a casual video game match",
      "Rainy weather on a weekend"
    ],
    explanation: "Prashant holds self-respect and mutual dignity in high regard; disrespect crosses the line."
  },
  {
    id: 7,
    category: "True Friendship",
    question: "What is the most important quality in a true friend for Prashant?",
    correctAnswer: "Understanding him without needing everything explained",
    options: [
      "Understanding him without needing everything explained",
      "Calling him at least three times a day",
      "Buying lavish birthday presents",
      "Sharing the exact same music playlist"
    ],
    explanation: "A friend who reads the silence and understands without a 10-page explanation is gold to Prashant."
  },
  {
    id: 8,
    category: "Coping & Moods",
    question: "What does Prashant prefer when he is in a bad mood?",
    correctAnswer: "Being alone with his thoughts",
    options: [
      "Being alone with his thoughts",
      "Going to an energetic, crowded nightclub",
      "Venting angrily to whoever is nearby",
      "Going on an impulsive shopping spree"
    ],
    explanation: "Solitude and quiet reflection are how Prashant recharges and processes heavy emotions."
  },
  {
    id: 9,
    category: "Emotional Reactions",
    question: "How does Prashant usually react when a friend upsets him?",
    correctAnswer: "He acts normal but feels hurt inside",
    options: [
      "He acts normal but feels hurt inside",
      "He instantly screams and picks a fight",
      "He blocks them across all social platforms",
      "He laughs loudly and forgets within 2 seconds"
    ],
    explanation: "Prashant tends to internalize pain—he maintains a calm exterior even when hurting within."
  },
  {
    id: 10,
    category: "Friendship Vibe",
    question: "What does Prashant check before becoming close friends with someone?",
    correctAnswer: "Whether their vibes match",
    options: [
      "Whether their vibes match",
      "How many Instagram followers they have",
      "Their financial status or family wealth",
      "Whether they attend the same school or college"
    ],
    explanation: "Vibe check is supreme! If the energy and emotional frequency don't align, it won't click."
  },
  {
    id: 11,
    category: "Friendship Style",
    question: "What is Prashant's friendship style with close friends?",
    correctAnswer: "Funny and playful",
    options: [
      "Funny and playful",
      "Strict and overly formal",
      "Ultra-serious and competitive",
      "Distant and detached"
    ],
    explanation: "With his inner circle, Prashant is humorous, playful, and loves keeping the energy upbeat."
  },
  {
    id: 12,
    category: "Trust & Forgiveness",
    question: "What does Prashant do when someone breaks his trust?",
    correctAnswer: "It depends on the situation and the mistake",
    options: [
      "It depends on the situation and the mistake",
      "He permanently cuts them off without a single word",
      "He blindly forgives immediately as if nothing happened",
      "He plans dramatic revenge right away"
    ],
    explanation: "Prashant weighs context, intentions, and the nature of the error before deciding how to handle broken trust."
  },
  {
    id: 13,
    category: "Openness",
    question: "How much does Prashant share with his close friends?",
    correctAnswer: "Almost everything",
    options: [
      "Almost everything",
      "Practically nothing at all",
      "Only surface-level casual banter",
      "Only strictly professional or study matters"
    ],
    explanation: "Once you earn his trust, Prashant is an open book with his true inner circle."
  },
  {
    id: 14,
    category: "Helping Hand",
    question: "What does Prashant do when a friend is in trouble?",
    correctAnswer: "Immediately looks for a solution",
    options: [
      "Immediately looks for a solution",
      "Gives empty sympathy and walks away",
      "Panics and ignores the friend's calls",
      "Blames the friend for getting into trouble"
    ],
    explanation: "Prashant is solution-oriented—when trouble strikes, his instinct is to figure out a practical fix."
  },
  {
    id: 15,
    category: "Vulnerabilities",
    question: "What is one of Prashant's weaknesses in friendship?",
    correctAnswer: "Overthinking small things",
    options: [
      "Overthinking small things",
      "Being completely cold and emotionless",
      "Forgetting friends' birthdays every year",
      "Constantly borrowing money and never returning it"
    ],
    explanation: "Prashant cares deeply, which sometimes leads to over-analyzing minor details and nuances."
  },
  {
    id: 16,
    category: "Free Time & Habits",
    question: "What does Prashant often do in his free time?",
    correctAnswer: "Sit alone, think, or plan his future",
    options: [
      "Sit alone, think, or plan his future",
      "Binge-watch random reality TV all day",
      "Scroll mindlessly for 10 hours without purpose",
      "Host loud house parties every single night"
    ],
    explanation: "He loves spending downtime brainstorming his future moves, ideating, and reflecting quietly."
  },
  {
    id: 17,
    category: "Dreams & Aspirations",
    question: "What kind of life does Prashant dream of?",
    correctAnswer: "A peaceful, happy, tension-free life",
    options: [
      "A peaceful, happy, tension-free life",
      "A chaotic celebrity life with paparazzi chasing him",
      "A stressful 80-hour-per-week corporate grind",
      "Complete isolation with no human contact"
    ],
    explanation: "Above all chaos, Prashant seeks peace of mind, genuine happiness, and a stress-free existence."
  },
  {
    id: 18,
    category: "Handling Hurt",
    question: "What does Prashant do when he feels hurt inside?",
    correctAnswer: "Stays alone and thinks things through",
    options: [
      "Stays alone and thinks things through",
      "Breaks down crying in front of a big group",
      "Spams sad status updates on WhatsApp and Instagram",
      "Picks arguments with random strangers"
    ],
    explanation: "Prashant retreats to his private mental space to deconstruct and process whatever hurt him."
  },
  {
    id: 19,
    category: "Inner Fears",
    question: "What is Prashant's biggest fear?",
    correctAnswer: "Not achieving his goals",
    options: [
      "Not achieving his goals",
      "Dark rooms and scary movies",
      "Public speaking among close friends",
      "Eating unfamiliar spicy food"
    ],
    explanation: "Falling short of his ambitious entrepreneurial and personal dreams is what scares him most."
  },
  {
    id: 20,
    category: "Vibe & Atmosphere",
    question: "What is Prashant's favourite free-time vibe?",
    correctAnswer: "Peaceful solitude, thinking, and relaxing",
    options: [
      "Peaceful solitude, thinking, and relaxing",
      "Chaotic noise and blaring music in crowded clubs",
      "Non-stop high-stakes debates with strangers",
      "Extreme adrenaline sports non-stop"
    ],
    explanation: "Serenity, chill thoughts, and calm headspace are his ultimate comfort zone."
  },
  {
    id: 21,
    category: "Anger & Tempers",
    question: "How does Prashant react when he gets very angry?",
    correctAnswer: "He reacts immediately in anger",
    options: [
      "He reacts immediately in anger",
      "He stays completely silent for three months",
      "He laughs hysterically without reason",
      "He puts on a fake smile and schemes in secret"
    ],
    explanation: "When pushed past his limit, his anger surfaces right away without hidden mind games."
  },
  {
    id: 22,
    category: "Loyalty",
    question: "How does Prashant show loyalty to a friend?",
    correctAnswer: "He stands by the friend even when the situation is difficult",
    options: [
      "He stands by the friend even when the situation is difficult",
      "He only shows up when there is free food or drinks",
      "He abandons friends as soon as trouble appears",
      "He agrees with everything even if it ruins their life"
    ],
    explanation: "Loyalty means riding through rough storms together; Prashant sticks around when it counts."
  },
  {
    id: 23,
    category: "Group Dynamics",
    question: "What might Prashant do when his friend group is quiet?",
    correctAnswer: "Playfully tease his friends to make the atmosphere funny",
    options: [
      "Playfully tease his friends to make the atmosphere funny",
      "Pack his belongings and walk out immediately",
      "Deliver a stern lecture on conversation etiquette",
      "Stare at the wall silently for hours"
    ],
    explanation: "He breaks awkward silences with lighthearted teasing and good-natured jokes to revive the vibe."
  },
  {
    id: 24,
    category: "Friendship Boundaries",
    question: "What kind of behaviour from friends irritates Prashant?",
    correctAnswer: "It depends on the situation",
    options: [
      "It depends on the situation",
      "Sending voice messages instead of text",
      "Eating French fries without asking him first",
      "Replying too quickly to his messages"
    ],
    explanation: "Prashant evaluates context and intention rather than having rigid pet-peeve rules."
  },
  {
    id: 25,
    category: "Confidants",
    question: "With whom does Prashant share his personal problems?",
    correctAnswer: "Only with a trusted best friend",
    options: [
      "Only with a trusted best friend",
      "With every single person on his phone contacts",
      "With random acquaintances he meets online",
      "He never shares with any human under any circumstance"
    ],
    explanation: "Deep personal problems are strictly reserved for his most trusted, proven best friend."
  }
];

// =============================================================================
// 2. QUIZ APPLICATION STATE
// =============================================================================
const QUIZ_STATE = {
  activeQuestions: [],     // 6 selected questions for current session
  currentIndex: 0,        // 0 to 5
  score: 0,               // Number of correct answers (0 to 6)
  userAnswers: [],        // Records for review screen
  isAnswerLocked: false   // Prevents multiple submissions
};

// =============================================================================
// 3. DOM ELEMENT REFERENCES
// =============================================================================
const DOM = {
  // Screens
  welcomeScreen: document.getElementById("welcome-screen"),
  quizScreen: document.getElementById("quiz-screen"),
  resultsScreen: document.getElementById("results-screen"),
  reviewScreen: document.getElementById("review-screen"),

  // Welcome Screen
  startQuizBtn: document.getElementById("start-quiz-btn"),

  // Quiz Screen Elements
  questionCategory: document.getElementById("question-category"),
  currentQuestionNum: document.getElementById("current-question-num"),
  progressBarFill: document.getElementById("progress-bar-fill"),
  quizQuestionText: document.getElementById("quiz-question-text"),
  optionsGrid: document.getElementById("options-grid"),
  feedbackPanel: document.getElementById("feedback-panel"),
  feedbackIcon: document.getElementById("feedback-icon"),
  feedbackTitle: document.getElementById("feedback-title"),
  feedbackDesc: document.getElementById("feedback-desc"),
  nextQuestionBtn: document.getElementById("next-question-btn"),
  nextBtnText: document.getElementById("next-btn-text"),

  // Results Screen Elements
  resultVisualIcon: document.getElementById("result-visual-icon"),
  resultCardTheme: document.getElementById("result-card-theme"),
  finalScoreVal: document.getElementById("final-score-val"),
  correctCountText: document.getElementById("correct-count-text"),
  incorrectCountText: document.getElementById("incorrect-count-text"),
  resultTitle: document.getElementById("result-title"),
  resultMessage: document.getElementById("result-message"),
  playAgainBtn: document.getElementById("play-again-btn"),
  reviewAnswersBtn: document.getElementById("review-answers-btn"),
  shareResultBtn: document.getElementById("share-result-btn"),

  // Review Screen Elements
  reviewList: document.getElementById("review-list"),
  closeReviewTopBtn: document.getElementById("close-review-top-btn"),
  backToResultsBtn: document.getElementById("back-to-results-btn"),
  reviewPlayAgainBtn: document.getElementById("review-play-again-btn"),

  // Toast
  toast: document.getElementById("toast"),
  toastMessage: document.getElementById("toast-message"),
  toastIcon: document.getElementById("toast-icon"),

  // Canvas
  confettiCanvas: document.getElementById("confetti-canvas")
};

// =============================================================================
// 4. UTILITY FUNCTIONS
// =============================================================================

/**
 * Fisher-Yates array shuffler (in-place clone)
 */
function shuffleArray(array) {
  const cloned = [...array];
  for (let i = cloned.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

/**
 * Show a given screen and hide all others
 */
function showScreen(screenToShow) {
  const screens = [
    DOM.welcomeScreen,
    DOM.quizScreen,
    DOM.resultsScreen,
    DOM.reviewScreen
  ];

  screens.forEach((screen) => {
    if (screen === screenToShow) {
      screen.classList.remove("hidden");
      screen.classList.add("active");
    } else {
      screen.classList.add("hidden");
      screen.classList.remove("active");
    }
  });

  // Smooth scroll back to top of main card
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * Toast notification handler
 */
let toastTimeout = null;
function showToast(message, icon = "📋") {
  if (toastTimeout) clearTimeout(toastTimeout);

  DOM.toastMessage.textContent = message;
  DOM.toastIcon.textContent = icon;
  DOM.toast.classList.add("show");

  toastTimeout = setTimeout(() => {
    DOM.toast.classList.remove("show");
  }, 3200);
}

// =============================================================================
// 5. QUIZ ENGINE LOGIC
// =============================================================================

/**
 * Starts a brand new quiz session:
 * - Selects 6 random unique questions from 25
 * - Shuffles 4 options per question
 * - Resets score, index, and records
 */
function startQuiz() {
  // 1. Pick 6 unique random questions from the 25-question bank
  const shuffledBank = shuffleArray(QUESTION_BANK);
  const selectedSix = shuffledBank.slice(0, 6);

  // 2. Format questions and shuffle options
  QUIZ_STATE.activeQuestions = selectedSix.map((item) => {
    return {
      ...item,
      shuffledOptions: shuffleArray(item.options)
    };
  });

  // 3. Reset session states
  QUIZ_STATE.currentIndex = 0;
  QUIZ_STATE.score = 0;
  QUIZ_STATE.userAnswers = [];
  QUIZ_STATE.isAnswerLocked = false;

  // 4. Render first question & switch screen
  renderCurrentQuestion();
  showScreen(DOM.quizScreen);
}

/**
 * Renders the question at QUIZ_STATE.currentIndex
 */
function renderCurrentQuestion() {
  QUIZ_STATE.isAnswerLocked = false;
  const currentQ = QUIZ_STATE.activeQuestions[QUIZ_STATE.currentIndex];
  const qNum = QUIZ_STATE.currentIndex + 1;
  const totalQ = QUIZ_STATE.activeQuestions.length; // 6

  // Meta info
  DOM.questionCategory.textContent = currentQ.category || "Friendship & Life";
  DOM.currentQuestionNum.textContent = qNum;

  // Progress Bar
  const progressPercent = (qNum / totalQ) * 100;
  DOM.progressBarFill.style.width = `${progressPercent}%`;

  // Question Title
  DOM.quizQuestionText.textContent = currentQ.question;

  // Clear previous options and feedback
  DOM.optionsGrid.innerHTML = "";
  DOM.feedbackPanel.classList.add("hidden");
  DOM.feedbackPanel.classList.remove("correct-theme", "incorrect-theme");

  // Next button text check
  if (qNum === totalQ) {
    DOM.nextBtnText.textContent = "See Final Results 🏆";
  } else {
    DOM.nextBtnText.textContent = "Next Question";
  }

  // Render 4 answer options
  const optionLetters = ["A", "B", "C", "D"];
  currentQ.shuffledOptions.forEach((optionText, idx) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "option-card";
    card.setAttribute("role", "radio");
    card.setAttribute("aria-checked", "false");
    card.dataset.option = optionText;

    card.innerHTML = `
      <span class="option-badge">${optionLetters[idx]}</span>
      <span class="option-text">${escapeHTML(optionText)}</span>
      <span class="option-status-icon" aria-hidden="true"></span>
    `;

    card.addEventListener("click", () => handleOptionSelection(card, optionText, currentQ));
    DOM.optionsGrid.appendChild(card);
  });
}

/**
 * Handles user selection of an answer option
 */
function handleOptionSelection(selectedCard, chosenOption, currentQ) {
  // Prevent double submissions or modifying answers
  if (QUIZ_STATE.isAnswerLocked) return;
  QUIZ_STATE.isAnswerLocked = true;

  const isCorrect = chosenOption === currentQ.correctAnswer;
  if (isCorrect) {
    QUIZ_STATE.score++;
  }

  // Record for the Review Answers screen
  QUIZ_STATE.userAnswers.push({
    questionNum: QUIZ_STATE.currentIndex + 1,
    questionText: currentQ.question,
    category: currentQ.category,
    selectedAnswer: chosenOption,
    correctAnswer: currentQ.correctAnswer,
    isCorrect: isCorrect,
    explanation: currentQ.explanation
  });

  // Lock and style all cards
  const allCards = DOM.optionsGrid.querySelectorAll(".option-card");
  allCards.forEach((card) => {
    card.classList.add("locked");
    const optVal = card.dataset.option;
    const statusIcon = card.querySelector(".option-status-icon");

    if (optVal === currentQ.correctAnswer) {
      card.classList.add("correct");
      if (statusIcon) statusIcon.textContent = "✓";
    } else if (card === selectedCard && !isCorrect) {
      card.classList.add("incorrect");
      if (statusIcon) statusIcon.textContent = "✕";
    } else {
      card.classList.add("dimmed");
    }
  });

  // Show Feedback Panel
  DOM.feedbackPanel.classList.remove("hidden");
  if (isCorrect) {
    DOM.feedbackPanel.classList.add("correct-theme");
    DOM.feedbackIcon.textContent = "🔥";
    DOM.feedbackTitle.textContent = "Correct! 🔥";
    DOM.feedbackDesc.textContent = currentQ.explanation || "Spot on! That is true about Prashant.";
  } else {
    DOM.feedbackPanel.classList.add("incorrect-theme");
    DOM.feedbackIcon.textContent = "😅";
    DOM.feedbackTitle.textContent = "Oops, not quite! 😅";
    DOM.feedbackDesc.textContent = `Correct answer: "${currentQ.correctAnswer}". ${currentQ.explanation}`;
  }

  // Smoothly bring next button into comfortable view if needed
  DOM.feedbackPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/**
 * Advances to the next question or shows results
 */
function advanceQuiz() {
  if (QUIZ_STATE.currentIndex + 1 < QUIZ_STATE.activeQuestions.length) {
    QUIZ_STATE.currentIndex++;
    renderCurrentQuestion();
  } else {
    displayResults();
  }
}

// =============================================================================
// 6. RESULTS & SCORING TIERS
// =============================================================================

/**
 * Calculates and presents final score and matching tier
 */
function displayResults() {
  const score = QUIZ_STATE.score; // 0 to 6
  const total = QUIZ_STATE.activeQuestions.length; // 6
  const incorrectCount = total - score;

  // Populate numeric badges
  DOM.finalScoreVal.textContent = score;
  DOM.correctCountText.textContent = `${score} Correct`;
  DOM.incorrectCountText.textContent = `${incorrectCount} Incorrect`;

  // Reset tier visual styling
  DOM.resultVisualIcon.className = "result-visual-icon";

  // Tier 1: Score 5-6 out of 6
  if (score >= 5) {
    DOM.resultVisualIcon.textContent = "👽";
    DOM.resultVisualIcon.classList.add("tier-clone");
    DOM.resultTitle.textContent = "YOU ARE A CLONE OF PRASHANT! 👽";
    DOM.resultTitle.style.color = "var(--neon-cyan)";
    DOM.resultMessage.textContent = "“Bro, you know Prashant so well that you might actually be his clone! 😂🔥”";
    triggerConfetti();
  }
  // Tier 2: Score 3-4 out of 6
  else if (score >= 3) {
    DOM.resultVisualIcon.textContent = "🏆";
    DOM.resultVisualIcon.classList.add("tier-bestfriend");
    DOM.resultTitle.textContent = "YOU ARE THE BEST FRIEND OF PRASHANT! 🏆";
    DOM.resultTitle.style.color = "var(--neon-gold-glow)";
    DOM.resultMessage.textContent = "“Congratulations! ❤️ You know Prashant really well. You're one of the people who truly understand him!”";
    triggerConfetti(60);
  }
  // Tier 3: Score 0-2 out of 6
  else {
    DOM.resultVisualIcon.textContent = "😅";
    DOM.resultVisualIcon.classList.add("tier-better");
    DOM.resultTitle.textContent = "YOU NEED TO KNOW PRASHANT BETTER ❤️";
    DOM.resultTitle.style.color = "var(--neon-pink-hot)";
    DOM.resultMessage.textContent = "“Haha, bro! 😂 You still have a lot to learn about Prashant. Spend more time with him and try again!”";
  }

  showScreen(DOM.resultsScreen);
}

// =============================================================================
// 7. REVIEW SCREEN
// =============================================================================

/**
 * Builds the review list for the 6 answered questions
 */
function renderReviewScreen() {
  DOM.reviewList.innerHTML = "";

  QUIZ_STATE.userAnswers.forEach((item) => {
    const itemCard = document.createElement("div");
    itemCard.className = `review-item-card ${item.isCorrect ? "correct-item" : "incorrect-item"}`;

    const statusBadge = item.isCorrect
      ? '<span class="review-badge badge-success">✓ Correct</span>'
      : '<span class="review-badge badge-danger">✕ Incorrect</span>';

    const yourAnswerClass = item.isCorrect ? "is-user-correct" : "is-user-wrong";

    itemCard.innerHTML = `
      <div class="review-item-top">
        <span class="review-q-num">Question ${item.questionNum} • ${escapeHTML(item.category || "General")}</span>
        ${statusBadge}
      </div>
      <h3 class="review-q-text">${escapeHTML(item.questionText)}</h3>
      <div class="review-answers-box">
        <div class="review-answer-row">
          <span class="review-label your-label">Your Answer:</span>
          <span class="review-val ${yourAnswerClass}">${escapeHTML(item.selectedAnswer)}</span>
        </div>
        ${
          !item.isCorrect
            ? `<div class="review-answer-row">
                <span class="review-label correct-label">Correct Answer:</span>
                <span class="review-val" style="color: var(--neon-green-glow); font-weight: 600;">${escapeHTML(item.correctAnswer)}</span>
              </div>`
            : ""
        }
        ${
          item.explanation
            ? `<div class="review-explanation">💡 ${escapeHTML(item.explanation)}</div>`
            : ""
        }
      </div>
    `;

    DOM.reviewList.appendChild(itemCard);
  });

  showScreen(DOM.reviewScreen);
}

// =============================================================================
// 8. SHARE RESULT HANDLER
// =============================================================================

/**
 * Shares or copies quiz score
 */
async function shareResult() {
  const score = QUIZ_STATE.score;
  const shareText = `I scored ${score}/6 in the Prashant Friendship Quiz! ❤️ Think you know Prashant better? Take the challenge!`;

  // 1. Web Share API (Mobile / Modern Browsers)
  if (navigator.share) {
    try {
      await navigator.share({
        title: "How Well Do You Know Prashant?",
        text: shareText
      });
      return;
    } catch (err) {
      // User cancelled share or share failed; fallback to clipboard
      if (err.name !== "AbortError") {
        console.warn("Web Share API error, using clipboard fallback:", err);
      } else {
        return;
      }
    }
  }

  // 2. Clipboard API Fallback
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(shareText);
      showToast("Result copied to clipboard! 📋 Share it with Prashant!");
      return;
    } catch (clipErr) {
      console.warn("Clipboard API failed:", clipErr);
    }
  }

  // 3. Legacy textarea execCommand fallback
  try {
    const tempInput = document.createElement("textarea");
    tempInput.value = shareText;
    tempInput.style.position = "fixed";
    tempInput.style.opacity = "0";
    document.body.appendChild(tempInput);
    tempInput.focus();
    tempInput.select();
    const successful = document.execCommand("copy");
    document.body.removeChild(tempInput);

    if (successful) {
      showToast("Result copied to clipboard! 📋 Share it with Prashant!");
    } else {
      showToast(shareText, "💬");
    }
  } catch (legacyErr) {
    // Ultimate fallback: prompt alert
    window.prompt("Copy your quiz result:", shareText);
  }
}

// =============================================================================
// 9. LIGHTWEIGHT STANDALONE CONFETTI ENGINE
// =============================================================================
let confettiAnimationId = null;

function triggerConfetti(particleCount = 120) {
  const canvas = DOM.confettiCanvas;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  if (confettiAnimationId) {
    cancelAnimationFrame(confettiAnimationId);
  }

  const colors = [
    "#00f0ff", // cyan
    "#a855f7", // purple
    "#ec4899", // pink
    "#ffd700", // gold
    "#05ffa1", // emerald
    "#ffffff"  // white
  ];

  const particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * (height * 0.4) - 20,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedX: (Math.random() - 0.5) * 6,
      speedY: Math.random() * 5 + 3,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 8,
      opacity: 1
    });
  }

  let startTime = Date.now();
  const maxDuration = 3800; // ms

  function renderConfetti() {
    const elapsed = Date.now() - startTime;
    if (elapsed > maxDuration) {
      ctx.clearRect(0, 0, width, height);
      return;
    }

    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotationSpeed;

      if (elapsed > maxDuration - 1000) {
        p.opacity = Math.max(0, (maxDuration - elapsed) / 1000);
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
      ctx.restore();
    });

    confettiAnimationId = requestAnimationFrame(renderConfetti);
  }

  renderConfetti();
}

// Window resize listener for canvas
window.addEventListener("resize", () => {
  if (DOM.confettiCanvas) {
    DOM.confettiCanvas.width = window.innerWidth;
    DOM.confettiCanvas.height = window.innerHeight;
  }
});

// Helper for escaping strings rendered dynamically in HTML
function escapeHTML(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// =============================================================================
// 10. EVENT LISTENERS SETUP
// =============================================================================
function initApp() {
  // Start Quiz
  DOM.startQuizBtn.addEventListener("click", startQuiz);

  // Next Question / See Results
  DOM.nextQuestionBtn.addEventListener("click", advanceQuiz);

  // Play Again from Results Screen
  DOM.playAgainBtn.addEventListener("click", startQuiz);

  // Review Answers button
  DOM.reviewAnswersBtn.addEventListener("click", renderReviewScreen);

  // Close Review buttons
  DOM.closeReviewTopBtn.addEventListener("click", () => showScreen(DOM.resultsScreen));
  DOM.backToResultsBtn.addEventListener("click", () => showScreen(DOM.resultsScreen));

  // Play Fresh Quiz from Review Screen
  DOM.reviewPlayAgainBtn.addEventListener("click", startQuiz);

  // Share Result button
  DOM.shareResultBtn.addEventListener("click", shareResult);

  // Keyboard accessibility: ESC closes review
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !DOM.reviewScreen.classList.contains("hidden")) {
      showScreen(DOM.resultsScreen);
    }
  });
}

// Initialize on DOM load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
