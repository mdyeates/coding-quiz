var orderedListTag = document.getElementById("leaderboard");

// Event listener to run clearLeaderboard function when clicked
document.getElementById("clear").onclick = clearLeaderboard;

var scores = JSON.parse(localStorage.getItem("scores")) || [];

function clearLeaderboard() {
  localStorage.removeItem("scores");
  location.reload();
}

function printScores() {
  // Loop over each score and create li tag
  scores.forEach((score) => {
    var newListTag = document.createElement("li");
    var initialsEntered = score.name.length;
    // Conditional to insert text if there is a blank entry
    if (initialsEntered > 0) {
      newListTag.innerHTML = `${score.name}: ${score.score}`;
    } else {
      newListTag.innerHTML = `Anonymous: ${score.score}`;
    }
    // Print to leaderboard
    orderedListTag.appendChild(newListTag);
  });
}

printScores();
