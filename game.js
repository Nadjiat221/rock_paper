// /////////////////////////////////////////////////////////////// return a choice for the computer: rock,paper,scissors
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  ///////////////////////////////////////////////////// first play  round of Rock Paper Scissors
  function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();
  
    if (playerChoice === computerChoice) {
      return " its neutral!";
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return `You won! ${playerChoice} vs ${computerChoice}.`;
    } else {
      return `You lost! ${computerChoice} vs ${playerChoice}.`;
    }
  }
  
  /////////////////////////////////////////////////////// Playing a 5 round game of Rock Paper Scissors and give the winner
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt('insert your choice(rock, paper or scissors):');
      const computerSelection = getComputerChoice();
      const roundResult = playRound(playerSelection, computerSelection);
      console.log(roundResult);
  
      if (roundResult.includes('win')) {
        playerScore++;
      } else if (roundResult.includes('lose')) {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log("yuppiiiiiiii! You won the game!!!!!!!!!!1.");
    } else if (playerScore < computerScore) {
      console.log("Sorry! You lost the game.");
    } else {
      console.log("it was draw ,Try again.");
    }
  }
  
  // Start the game
  game();
  