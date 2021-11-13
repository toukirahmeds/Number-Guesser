let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function getAbsoluteDistance(num1, num2) {
  return Math.abs(num1 - num2);
}

function compareGuesses(human, computer, target) {
  if(human < 0 || human > 9) {
    alert("Input should be in the inclusive range 0 to 9");
  }
  return getAbsoluteDistance(target, human) <= getAbsoluteDistance(target, computer);
}


function updateScore(winner) {
  if(winner === 'human') {
    humanScore++;
  } else if(winner === 'computer') {
    computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++;
}


console.log(generateTarget());
console.log(compareGuesses(3, 5, 8))
updateScore('computer');
console.log(humanScore, computerScore);
advanceRound();
console.log(currentRoundNumber);
