// DOM VARIABLES
var startScreenWrap = document.querySelector("#start-screen");
var questionsWrap = document.querySelector("#questions");
var endScreenWrap = document.querySelector("#end-screen");
var timerWrap = document.querySelector(".timer");
var timerNumber = document.querySelector("#time");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var highScores = document.querySelector(".scores");
var initials = document.querySelector("#initials");
var startBtn = document.querySelector("#start");
var submitBtn = document.querySelector("#submit");
var feedback = document.querySelector("#feedback");
var finalScoreSpan = document.querySelector("#final-score");
var questionNumber = document.querySelector("#question-number");
var correctAnswersDisplay = document.querySelector("#correct-answers-total");
var progressBarFull = document.querySelector(".progressBarFull");

// || GLOBAL
var questionCount = 0;
var maxNumberOfQuestions = 5;
var secondsCount = maxNumberOfQuestions * 10;
var time;
var availableQuestions = [];
var displayQuestionNumber;
var correctAnswersTotal = 0;

// Event listener to start quiz/submit score
startBtn.onclick = startGame;
submitBtn.onclick = getScores;

// || FUNCTIONS
startTimer = () => {
  secondsCount--;
  timerNumber.innerText = secondsCount;
  if (secondsCount <= 0) {
    gameOver();
  }
};

function startGame() {
  questionCount = 0;
  // Shows question page + timer, and hides home screen + leaderboard
  startScreenWrap.classList.add("hide");
  highScores.classList.add("hide");
  questionsWrap.classList.remove("hide");
  timerWrap.classList.remove("hide");
  // Display number of question and total questions for start screen
  displayQuestionNumber = `Question: ${questionCount + 1}/${maxNumberOfQuestions}`;
  questionNumber.innerHTML = displayQuestionNumber;
  questionNumber.setAttribute("style", "color: var(--highlight-turqoise);");
  // Spread and copy questions into new array to get random question to work
  availableQuestions = [...questions];
  time = setInterval(startTimer, 1000);
  timerNumber.innerText = secondsCount;
  getQuestionAndChoices();
}

getQuestionAndChoices = () => {
  questionCount++;
  // Increase progress bar by percentage
  progressBarFull.style.width = `${(questionCount / maxNumberOfQuestions) * 100}%`;
  // Get random questions
  this.questionIndex = Math.floor(Math.random() * availableQuestions.length);
  // Assign index of random question to a variable
  var currentQuestion = availableQuestions[questionIndex];
  // Display current question
  questionTitle.innerText = currentQuestion.title;
  // Clear choices from display
  choices.innerText = "";
  // Loop through choices
  currentQuestion.choices.forEach((choice) => {
    // Add button to each choice
    var choiceButton = document.createElement("button");
    choiceButton.classList.add("button2");
    choiceButton.setAttribute("value", choice);
    choiceButton.innerText = choice;
    choices.appendChild(choiceButton);
    choiceButton.onclick = checkAnswer;
  });
};

function checkAnswer() {
  var timePenalty = 10;
  // Display number of current question and total questions
  displayQuestionNumber = `Question: ${questionCount + 1}/${maxNumberOfQuestions}`;
  questionNumber.innerHTML = displayQuestionNumber;
  // Assign audio.wav to corresponding variables
  var incorrectAudio = new Audio("assets/sfx/incorrect.wav");
  var correctAudio = new Audio("assets/sfx/correct.wav");
  // Check if the choice selected value matches the corresponding answer
  if (this.value === availableQuestions[questionIndex].answer) {
    // Add one if correct answer given
    correctAnswersTotal++;
    // Write and style correct feedback
    feedback.innerText = "Well done, that was correct!";
    feedback.setAttribute("style", "color: --highlight-turqoise; border-top: solid 2px --highlight-turqoise;");
    // Play correct audio.wav
    correctAudio.play();
  } else {
    // Remove time if answer is incorrect
    secondsCount -= timePenalty;
    // Play incorrect audio.wav
    incorrectAudio.play();
    // Write new number to timer
    timerNumber.innerText = secondsCount;
    // Write and style incorrect feedback
    feedback.innerText = "Unlucky, that was incorrect!";
    feedback.setAttribute("style", "color: red; border-top: solid 2px red;");
  }
  // Print correct answers total
  correctAnswersDisplay.innerText = `Total correct answers: ${correctAnswersTotal} out of ${maxNumberOfQuestions} questions`;
  // Set timer for feedback to stay visible on the page
  feedback.setAttribute("class", "feedback");
  setTimeout(() => {
    feedback.setAttribute("class", "feedback hide");
  }, 700);
  // Remove current question from selection so it doesn't repeat
  availableQuestions.splice(questionIndex, 1);
  // Conditional to ensure that the quiz ends or get another question
  if (questionCount == maxNumberOfQuestions) {
    gameOver();
  } else {
    getQuestionAndChoices();
  }
}

gameOver = () => {
  // Show end screen
  endScreenWrap.classList.remove("hide");
  questionsWrap.classList.add("hide");
  startScreenWrap.classList.add("hide");
  timerWrap.classList.add("hide");
  submitBtn.classList.add("button");
  // Conditional make score/time equal to 0 if time is less than zero
  clearInterval(time);
  if (secondsCount < 0) {
    secondsCount = 0;
  }
  // Print final score, as remaining seconds
  finalScoreSpan.textContent = secondsCount;
};

function getScores() {
  var userScore = secondsCount;
  var userInitials = initials.value;
  var scores = JSON.parse(localStorage.getItem("scores")) || [];
  var score = {
    name: userInitials,
    score: userScore,
  };
  scores.push(score);
  // Sorts highest to lowest, if b score is higher than a score, put b before a
  scores.sort((a, b) => b.score - a.score);
  // Only show top 5, removes others
  scores.splice(5);
  // Update local storage with high scores
  localStorage.setItem("scores", JSON.stringify(scores));
  // When submitted go to leaderboard
  location.assign("leaderboard.html");
}
