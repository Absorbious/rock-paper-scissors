let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
let playerSelection;
let computerSelection;

function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound() {
  computerSelection = computerPlay();
  playerSelection = prompt("Rock, paper or scissors?").toLowerCase();

  if (
    (playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "scissors")
  ) {
    //return ;
    console.log(`${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} can't beat ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`)
    console.log(`Player ${playerScore} : ${computerScore} Computer`)
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    
    //return ;
    console.log(`${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`)
    console.log(`Player ${playerScore + 1} : ${computerScore} Computer`)
    return playerScore += 1;
  } else {
    
    //return ;
    console.log(`${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} got beaten by ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`)
    console.log(`Player ${playerScore} : ${computerScore + 1} Computer`)
    return computerScore += 1;
  }
}

function game() {
  if (playerScore == 5 || computerScore == 5) {
    return `Game over in ${roundCount} rounds`
  } else {
    playRound();
    roundCount++;
    return `Round ${roundCount}`
  }
}


/* Ask for an input from the user; Based on his input, the game should compare that input to the one of the computer and then decide which message it should display and which score should it update */
