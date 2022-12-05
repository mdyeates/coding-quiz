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

// || GLOBAL
var indexOfCurrentQuestion = Math.floor(Math.random() * questions.length);
var timePenalty = 10;
var questionCount = 0;
var maxNumberOfQuestions = 5;
var secondsCount = maxNumberOfQuestions * 10;

// Event listener to start quiz/submit score
startBtn.onclick = startQuiz;
submitBtn.onclick = getScores;

// || FUNCTIONS
startTimer = () => {
  // Display seconds on screen
  timerNumber.innerText = secondsCount;
  // Sets timer
  var intervalTime = setInterval(() => {
    secondsCount--;
    timerNumber.innerText = secondsCount;
    // Tests if time has run out or if questions are completed
    if (secondsCount <= 0 || questionCount === maxNumberOfQuestions) {
      gameOver();
      clearInterval(intervalTime);
    } else {
      getQuestionAndChoices();
    }
  }, 1000);
};

function startQuiz() {
  // Shows question page + timer, and hides home screen + leaderboard
  startScreenWrap.classList.add("hide");
  highScores.classList.add("hide");
  questionsWrap.classList.remove("hide");
  timerWrap.classList.remove("hide");
  startTimer();
  getQuestionAndChoices();
}

getQuestionAndChoices = () => {
  // Assign index of current question to a variable
  var currentQuestion = questions[indexOfCurrentQuestion];
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
  // Assign audio.wav to corresponding variables
  var incorrectAudio = new Audio("assets/sfx/incorrect.wav");
  var correctAudio = new Audio("assets/sfx/correct.wav");
  // Check if the choice selected value matches the corresponding answer
  if (this.value === questions[indexOfCurrentQuestion].answer) {
    // Write and style correct feedback
    feedback.innerText = "Well done, that was correct!";
    feedback.setAttribute("style", "color: --highlight-turqoise; border-top: solid 2px --highlight-turqoise;");
    // Play correct audio.wav
    correctAudio.play();
  } else {
    // Remove time if incorrect from count
    secondsCount -= timePenalty;
    // Play incorrect audio.wav
    incorrectAudio.play();
    // Write new number to timer
    timerNumber.innerText = secondsCount;
    // Write and style incorrect feedback
    feedback.innerText = "Unlucky, that was incorrect!";
    feedback.setAttribute("style", "color: red; border-top: solid 2px red;");
  }
  // Set timer for feedback to stay visible on the page
  feedback.setAttribute("class", "feedback");
  setTimeout(() => {
    feedback.setAttribute("class", "feedback hide");
  }, 1500);
  // Remove current question from selection so it doesn't repeat
  questions.splice(indexOfCurrentQuestion, 1);
  // View next question and add 1 to count
  questionCount++;
  indexOfCurrentQuestion++;
}

gameOver = () => {
  endScreenWrap.classList.remove("hide");
  questionsWrap.classList.add("hide");
  startScreenWrap.classList.add("hide");
  timerWrap.classList.add("hide");
  submitBtn.classList.add("button");
  if (secondsCount < 0) {
    secondsCount = 0;
  }
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
  // wWhen submitted go to leaderboard
  window.location.assign("leaderboard.html");
}
