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

function game() {
  for (let i = 0; i < 5; i++) {
    const playerInput = prompt(`Please input 'Paper', 'Scissors' or 'Rock'`);

    console.log(playRound(playerInput, computerPlay()));
  }
}

game();

