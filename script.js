function computerPlay() {
  const types = ['Rock', 'Paper', 'Scissors'];
  const randInt = Math.floor(Math.random() * 3);

  return types[randInt];
}

function playRound(playerSelection, computerSelection) {
  if (!playerSelection) return "wrong input";

  const lowerPlayerSelection = playerSelection.toLowerCase();
  const lowerComputerSelection = computerSelection.toLowerCase();


  if (lowerPlayerSelection === lowerComputerSelection) {
    return `No Win No Lose! `;
  }

  if (lowerPlayerSelection === 'rock' && lowerComputerSelection === 'scissors') {
    return 'You Win! Rock beats Scissors';
  }

  if (lowerPlayerSelection === 'rock' && lowerComputerSelection === 'paper') {
    return 'You Lose! Paper beats Rock';
  }

  if (lowerPlayerSelection === 'paper' && lowerComputerSelection === 'scissors') {
    return 'You Lose! Scissors beats Paper';
  }

  if (lowerPlayerSelection === 'paper' && lowerComputerSelection === 'rock') {
    return 'You Win! Paper beats Rock';
  }

  if (lowerPlayerSelection === 'scissors' && lowerComputerSelection === 'paper') {
    return 'You Win! Scissors beats Paper';
  }

  if (lowerPlayerSelection === 'scissors' && lowerComputerSelection === 'rock') {
    return 'You Lose! Rock beats Scissors';
  }

  return 'wrong input';
}

function setScore(target, score) {
  if (target === 'player') {
    playerScore = score;
    playerScoreBox.textContent = playerScore;
  }

  if (target === 'computer') {
    computerScore = score;
    computerScoreBox.textContent = computerScore;
  }
}

function checkMsg(msg) {
  if (msg.includes('You Win')) {
    setScore('player', ++playerScore);
  }

  if (msg.includes('You Lose')) {
    setScore('computer', ++computerScore);
  }

  if (playerScore == 5) {
    alert('You Win!!');
    setScore('player', 0);
    setScore('computer', 0);
    messageBox.textContent = '---';
  }

  if (computerScore == 5) {
    alert('Computer Win!!');
    setScore('player', 0);
    setScore('computer', 0);
    messageBox.textContent = '---';
  }
}


const playerScoreBox = document.querySelector('#playerScore');
const computerScoreBox = document.querySelector('#computerScore');
const messageBox = document.querySelector('.message');

let playerScore = 0;
let computerScore = 0;

document.querySelector('#btnRock').addEventListener('click', () => {
  const msg = playRound('Rock', computerPlay());
  messageBox.textContent = msg;

  checkMsg(msg);
});

document.querySelector('#btnPaper').addEventListener('click', () => {
  const msg = playRound('Paper', computerPlay());
  messageBox.textContent = msg;

  checkMsg(msg);
});

document.querySelector('#btnScissors').addEventListener('click', () => {
  const msg = playRound('Scissors', computerPlay());
  messageBox.textContent = msg;

  checkMsg(msg);
});
