const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const resultDraw='DRAW';
const playreWin= 'player_win';
const computerWin='computer_win';
const unValid='un_Valid_Input';
let unValidInput=1; // unvalid flag
// player choice
const getPlayerChoice = function() {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase(); // convert input to UPPERASE
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE; 
  }
  unValidInput=0; // valid flag
  return selection; // return valid selsction
};
// random computer choice
const getComputerChoice= function(){
  const choice=Math.random();

if(choice<.3) return ROCK;
else if(choice<.6) return PAPER;
else return SCISSORS;

};

//determine the winner
function getWinner(cChoice,pChoice){
 if (cChoice===pChoice) return resultDraw; // Draw
else if((cChoice===ROCK && pChoice===PAPER) ||
(cChoice===PAPER && pChoice===SCISSORS)||
(cChoice===SCISSORS &&pChoice===ROCK)) return playreWin; // playerwin
else return computerWin; // computerwin 
};

// monitor the start game button 
startGameBtn.addEventListener('click', function() {
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const resultDisplay = document.getElementById('result-display');
  
  const winner = getWinner(computerChoice, playerChoice);
  
  let message = '';
  let resultClass = '';
  
  if (winner === resultDraw) {
    message = `🤝 It's a DRAW! You both chose ${playerChoice}`;
    resultClass = 'draw';
  } else if (winner === playreWin) {
    message = `🎉 YOU WIN! ${playerChoice} beats ${computerChoice}`;
    resultClass = 'win';
  } else {
    message = `😞 COMPUTER WINS! ${computerChoice} beats ${playerChoice}`;
    resultClass = 'lose';
  }
  
  resultDisplay.textContent = message;
  resultDisplay.className = `result-display show ${resultClass}`;
  
  // Reset flag for next game
  unValidInput = 1;
})


