const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const newGame = document.querySelector(".newGame");
const body = document.querySelector("body");
const result = document.querySelector(".result");
const commentary = document.querySelector(".commentary");
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
let playerSelection;
let computerSelection;
let newDiv = document.createElement('p');

function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(e) {
  computerSelection = computerPlay();
  playerSelection = e.target.className;

  if(playerScore === 5 || computerScore === 5){
    commentary.appendChild(newDiv);
    newDiv.innerHTML = 'Start a new game';
  } else{
    if (
      (playerSelection === "rock" && computerSelection === "rock") ||
      (playerSelection === "paper" && computerSelection === "paper") ||
      (playerSelection === "scissors" && computerSelection === "scissors")
    ) {
      //return ;
      commentary.innerHTML = `${
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
      } can't beat ${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
      }`;
      result.innerHTML = `Player ${playerScore} : ${computerScore} Computer`;
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      //return ;
      commentary.innerHTML = `${
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
      } beats ${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
      }`;
      result.innerHTML = `Player ${playerScore + 1} : ${computerScore} Computer`;
      playerScore += 1;
      if (playerScore === 5) {
        commentary.innerHTML = `<p style='font-weight: bold;'>You win!!</p>`;
        return playerScore;
      } else {
        return playerScore;
      }
    } else {
      //return ;
      commentary.innerHTML = `${
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
      } got beaten by ${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
      }`;
      result.innerHTML = `Player ${playerScore} : ${computerScore + 1} Computer`;
      computerScore += 1;
      if (computerScore === 5) {
        commentary.innerHTML = `<p style='font-weight: bold;'>Computer wins!!</p>`;
        return computerScore;
      } else {
        return computerScore;
      }
    }
  }

  
}

newGame.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  result.innerHTML = `Player ${playerScore} : ${computerScore} Computer`;
  commentary.innerHTML = "";
});

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);

/* Ask for an input from the user; Based on his input, the game should compare that input to the one of the computer and then decide which message it should display and which score should it update */
