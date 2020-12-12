// Generate secret words
var secretWordOne = 'banana';
var secretWordTwo = 'chisel';
var secretWordThree = 'faucet';
var chosenSecretWord = '';

// Random number generator from 1 - 3 *Numbers correspond to chosen secret word
var randomNumGenerator = function () {
  var randomNum = Math.floor(Math.random() * 3) + 1;
  return randomNum;
};

// Get secret word
var secretWord = function () {
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

// Score board
var scoreBoard = 0;

// Check if user guessed the secret word
var guessCorrect = function (input) {
  var correctAnswer = '';
  // wrong answer
  if ((input != chosenSecretWord)) {
    // ensure that score doesn't go below zero
    if (scoreBoard <= 0) {
      scoreBoard = 0;
      correctAnswer = `Nope Try again! The secret word was ${chosenSecretWord}`;
    }
    // ensure that user has to guess correct answer twice in a row
    if (scoreBoard > 0) {
      correctAnswer = `Nope Try again! The secret word was ${chosenSecretWord}`;
      // minus 1 point
      scoreBoard -= 1;
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
  return correctAnswer;
};

// How many more correct guesses to win
var guessesToWin = 2;
var guessesToWinChange = 0;
var howManyGuessesToWin = function () {
  var guessesToWinStatement = '';
  if (scoreBoard == 0) {
    guessesToWinStatement = 'You need 2 more correct guesses to win!';
  }
  if ((scoreBoard > 0) && (guessesToWin <= 2)) {
    guessesToWinChange = (guessesToWin - scoreBoard);
    guessesToWinStatement = `You need ${guessesToWinChange} more correct guesses to win!`;
  }
  if (scoreBoard >= guessesToWin) {
    guessesToWinStatement = 'You already won twice!';
  }
  return guessesToWinStatement;
};

// Main function
var main = function (input) {
  var myOutputValue = '';
  // generate secret word
  secretWord();
  // START GAME. Check if user guessed the secret word
  myOutputValue = guessCorrect(input) + '<br>' + howManyGuessesToWin();
  // TEST scoreboard
  console.log('THE Score Board ' + scoreBoard);
  return myOutputValue;
};
