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
const playerChoice=getPlayerChoice();
const computerChoice=getComputerChoice();
if(unValidInput===1) return console.log(unValid); // check invalid input
const winner=getWinner(computerChoice,playerChoice);
console.log(winner); // display the winner
})
