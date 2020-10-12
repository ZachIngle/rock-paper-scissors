function computerPlay() {
  let randomNum = Math.floor(Math.random() * 10);
  if (randomNum < 3)
    return "rock";
  else if (randomNum > 6)
    return "paper";
  else 
    return "scissors";
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          return 0;
        case "paper":
          return -1;
        case "scissors":
          return 1;
      }
      break;

    case "paper":
      switch (computerSelection) {
          case "rock":
            return 1;
          case "paper":
            return 0;
          case "scissors":
            return -1;
        }
      break;

    case "scissors":
      switch (computerSelection) {
          case "rock":
            return -1;
          case "paper":
            return 1;
          case "scissors":
            return 0;
        }
      break;

    default:
      console.log("Invalid input, forfeiting to computer!");
      return -1;
  }
  return outcome;
}


function updateResults() {
  $playerScore.textContent = `Player: ${playerScore}`;
  $computerScore.textContent = `Computer: ${computerScore}`;
  $result.textContent = result;
}

const imgs = document.querySelectorAll("img");
const $playerScore = document.querySelector("#player-score");
const $computerScore = document.querySelector("#computer-score");
const $result = document.querySelector("#result");
let outcome;
let result;
let playerScore = 0;
let computerScore = 0;

imgs.forEach((img) => {
  img.addEventListener("click", () => {
    playerSelection = img.attributes.alt.value;
    playerSelectionCap = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    computerSelection = computerPlay();

    outcome = playRound(playerSelection, computerSelection);


    switch (outcome) {
      case 1:
        result = `You win! ${playerSelectionCap} beats ${computerSelection}`;
        playerScore++;
        break;
      case 0:
        result = `You draw! You both had ${computerSelection}`;
        break;
      case -1:
        result = `You lose! ${playerSelectionCap} loses to ${computerSelection}`;
        computerScore++;
        break;
    }

    updateResults();
  });
});
/*
function game() {
  const playerScore = 0;
  let computerScore = 0;
  let outcome;

  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Enter rock, paper or scissors");
    computerSelection = computerPlay();

    outcome = playRound(playerSelection, computerSelection);
    playerSelectionCap = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    switch (outcome) {
      case 1:
        console.log(`You win! ${playerSelectionCap} beats ${computerSelection}`);
        playerScore++;
        break;
      case 0:
        console.log(`You draw! You both had ${computerSelection}`);
        break;
      case -1:
        console.log(`You lose! ${playerSelectionCap} loses to ${computerSelection}`);
        computerScore++;
        break;
    }
  }

  if (playerScore > computerScore)
    console.log(`The player wins with a score of ${playerScore} to the computer"s score of ${computerScore}`);
  else if (playerScore < computerScore)
    console.log(`The player loses with a score of ${playerScore} to the computer"s score of ${computerScore}`);
  else
    console.log(`You both draw! You both had a score of ${playerScore}`);
}

game();*/