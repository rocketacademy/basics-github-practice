// Generate secret words
var secretWordOne = 'banana';
var secretWordTwo = 'chisel';
var secretWordThree = 'faucet';
var chosenSecretWord = '';
// make game counter
var gameCounter = 0;
// game details
var gameDetails = '';

/* --------------CREATE WIN LOGIC (Player has to have 2-4 correct guesses in a row)---------- */
var scoreBoard = 0;
var randomScoreboard = function () {
  // generate a random number from 2 - 4
  var randomScoreboardNum = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
  return randomScoreboardNum;
};
// generate winning logic
var winningLogic = randomScoreboard();

/* ----------------------RANDOM WORD GENERATOR LOGIC---------------------------------------- */
// Random number generator from 1 - 3 *Numbers correspond to chosen secret word
// Ensure that randomNumber generated does not repeat
var previousNum = '';
var randomNumGenerator = function () {
  // generate a random number from 1 - 3
  var randomNum = Math.floor(Math.random() * 3) + 1;
  // if first game let the number stay
  if (gameCounter == 0) {
    // pass
  }
  // if not first game do the check
  if (gameCounter > 0) {
    // check if number is repeated if it is change the number
    if ((randomNum == previousNum) && randomNum == 1) {
      randomNum += 1;
    }
    if ((randomNum == previousNum) && randomNum == 2) {
      randomNum += 1;
    }
    if ((randomNum == previousNum) && randomNum == 3) {
      randomNum -= 1;
    }
  }
  previousNum = randomNum;
  // TEST ALWAYS RETURN 1
  randomNum = 1;
  return randomNum;
};

// Get secret word
var secretWord = function () {
  // generate number
  var getNum = randomNumGenerator();
  if (getNum == 1) {
    chosenSecretWord = `${secretWordOne}`;
  }
  if (getNum == 2) {
    chosenSecretWord = `${secretWordTwo}`;
  }
  if (getNum == 3) {
    chosenSecretWord = `${secretWordThree}`;
  }
  return chosenSecretWord; // this outputs either banana, chisel or faucet
};

/* ----------------------USER GUESS LOGIC---------------------------------------- */
// Check if user guessed the secret word
var guessCorrect = function (input) {
  var correctAnswer = '';
  // user gets wrong answer
  if ((input != chosenSecretWord)) {
    // ensure that score doesn't go below zero
    if (scoreBoard <= 0) {
      scoreBoard = 0;
      correctAnswer = `Nope Try again! The secret word was ${chosenSecretWord}`;
    }
    // ensure that user has to guess correct answer consecutively
    if (scoreBoard > 0) {
      correctAnswer = `Nope Try again! The secret word was ${chosenSecretWord}`;
      // restart scoreboard
      scoreBoard = 0;
    }
  }
  // correct answer 1
  if ((input == chosenSecretWord) && (chosenSecretWord == secretWordOne)) {
    correctAnswer = `Yes! The secret word was indeed ${secretWordOne}`;
    // add to scoreboard
    scoreBoard += 1;
  }
  // correct answer 2
  if ((input == chosenSecretWord) && (chosenSecretWord == secretWordTwo)) {
    correctAnswer = `Yes! The secret word was indeed ${secretWordTwo}`;
    // add to scoreboard
    scoreBoard += 1;
  }
  // correct answer 3
  if ((input == chosenSecretWord) && (chosenSecretWord == secretWordThree)) {
    correctAnswer = `Yes! The secret word was indeed ${secretWordThree}`;
    // add to scoreboard
    scoreBoard += 1;
  }
  // Check if user has won the game
  if (scoreBoard == winningLogic) {
    correctAnswer = 'NICE! Time to start a new game!';
  }
  return correctAnswer;
};

// How many more correct guesses to win
var guessesToWin = winningLogic;
var guessesToWinChange = 0;
var howManyGuessesToWin = function () {
  var guessesToWinStatement = '';
  if (scoreBoard == 0) {
    guessesToWinStatement = `${scoreBoard}/${winningLogic}`;
  }
  if ((scoreBoard > 0) && (guessesToWin <= winningLogic)) {
    guessesToWinChange = (guessesToWin - scoreBoard);
    guessesToWinStatement = `${scoreBoard}/${winningLogic}`;
  }
  if (scoreBoard >= guessesToWin) {
    // Start a new game
    scoreBoard = 0;
    gameDetails = 'You won! Start a new game' + '<br>' + '<br>';
    winningLogic = randomScoreboard();
  }
  return guessesToWinStatement;
};

/* --------------------------------------------------------------------------- */
/* ----------------------MAIN FUNCTION---------------------------------------- */
/* --------------------------------------------------------------------------- */
var main = function (input) {
  var myOutputValue = '';
  // gameCounter
  gameCounter += 1;
  // generate secret word
  secretWord();
  // Display instructions for game
  gameDetails = 'Winning Condition:' + '<br>' + `${winningLogic} correct guesses in a row` + '<br>' + '<br>';
  // START GAME. Check if user guessed the secret word
  myOutputValue = 'Result:' + '<br>' + guessCorrect(input) + '<br>' + '<br>' + 'Scoreboard:' + '<br>' + howManyGuessesToWin();
  // TEST scoreboard
  console.log('THE Score Board ' + scoreBoard);
  // TEST gameCounter
  console.log(`Games played: ${gameCounter}`);
  // TEST previousNum
  console.log(`Previous Number: ${previousNum}`);
  return gameDetails + myOutputValue;
};
