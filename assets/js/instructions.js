var numberOfQuestions = document.querySelector("#number-questions");
var numberOfSeconds = document.querySelector("#number-seconds");

var totalQuestions = questions.length;
var totalSeconds = questions.length * 10;

function getQuizInfo() {
  numberOfQuestions.innerHTML = totalQuestions;
  numberOfSeconds.innerHTML = totalSeconds;
}
getQuizInfo();
