let playerLives = 5;
let computerLives = 5;
let round = 1;

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    playRound(e.target.textContent.toLowerCase());
  });
})

function displayLives() {
  const player = document.querySelector('.player-lives');
  const computer = document.querySelector('.computer-lives');
  player.textContent = `Player lives: ${playerLives}`;
  computer.textContent = `Computer lives: ${computerLives}`;
}

displayLives();

function computerChoice() {
  let selection = ["rock", "paper", "scissors"];
  return selection[Math.floor(Math.random() * selection.length)];
}

function playRound(playerMove) {
  let computerMove = computerChoice();
  if (computerMove === 'rock' && playerMove === 'paper' ||
          computerMove === 'paper' && playerMove === 'scissors'||
          computerMove === 'scissors' && playerMove === 'rock') {
            announceRound('Player', 'Computer', playerMove, computerMove);
            computerLives--;
            round++;
            displayLives();
          }
  else if (computerMove === playerMove) {
    announceTie(playerMove);
    round++;
  } else {
    announceRound('Computer', 'Player', computerMove, playerMove);
    playerLives--;
    round++;
    displayLives();
  }
  checkForWinner();
}

function announceRound(winner, loser, winnerMove, loserMove) {
  const announcement = document.createElement('p');
  announcement.textContent = `${winner}'s ${winnerMove} beats ${loser}'s ${loserMove}! ${winner} wins round ${round}!`;
  document.querySelector('.game-container').appendChild(announcement);
}

function announceTie(move) {
  const announcement = document.createElement('p');
  announcement.textContent = `Player's and Computer's ${move} both tie! No winner for round ${round}`;
  document.querySelector('.game-container').appendChild(announcement);
}

function checkForWinner() {
  if (playerLives !== 0 && computerLives !== 0) {
    return;
  }
  buttons.forEach(button => {
    button.disabled = true;
  })
  const winnerBox = document.createElement('div');
  if (playerLives === 0) {
    winnerBox.textContent = 'Player\'s lives have reached 0! Computer wins!';
  } else if (computerLives === 0) {
    winnerBox.textContent = 'Computer\'s lives have reached 0! Player wins!';
  }
  winnerBox.classList.add('winner-box');
  document.querySelector('.game-container').appendChild(winnerBox);

  const replayButton = document.createElement('button');
  replayButton.textContent = 'Play Again?'
  replayButton.addEventListener('click', () => {
    restartGame();
  });
  document.querySelector('.game-container').appendChild(replayButton);
}

function restartGame() {
  // Reset game
  playerLives = 5;
  computerLives = 5;
  round = 1;
  displayLives();
  // Remove child nodes from game container
  removeChildNodes(document.querySelector('.game-container'));
  buttons.forEach(button => {
    button.disabled = false;
  });
  
}

// Remove all child nodes of the parent
function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}






