let playerLives = 5;
let computerLives = 5;
let round = 1;

function computerChoice() {
  let selection = ["rock", "paper", "scissors"];
  return selection[Math.floor(Math.random() * selection.length)];
}

function decideWinner(playerMove, computerMove) {
  // 1 for player win, 0 for tie, -1 for computer win
  
}

function playerChoice() {
  
  return playerMove;
}
function playRound() {
  console.log(`Player lives: ${playerLives}`);
  console.log(`Computer lives: ${computerLives}`)
  let playerMove;
  while (true) {
    playerMove = prompt("Rock, paper, or scissors?").toLowerCase();
    if (playerMove === "rock" || playerMove === "scissors" || playerMove === "paper") {
      break;
    } else {
      console.log("Invalid input, please try again!");
      continue;
    }
  }
  let computerMove = computerChoice();
  if (computerMove === 'rock' && playerMove === 'paper' ||
          computerMove === 'paper' && playerMove === 'scissors'||
          computerMove === 'scissors' && playerMove === 'rock') {
            console.log(`Player's ${playerMove} beats computer's ${computerMove}!`)
            console.log(`Player wins round ${round}!`);
            computerLives--;
            round++;
          }
  else if (computerMove === playerMove) {
    console.log(`Player's ${playerMove} ties computer's ${computerMove}!`)
    round++;
  } else {
    console.log(`Computer's ${computerMove} beats player's ${playerMove}!`)
    console.log(`Computer wins round ${round}!`);
    playerLives--;
    round++;
  }
}

function playGame() {
  console.log(`Round ${round}... Fight!`)
  while (playerLives > 0 && computerLives > 0) {
    playRound();
  }
  if (playerLives === 0) {
    console.log("Computer wins!");
  } else {
    console.log("Player wins!");
  }
}

playGame();



