//make the computer generate random number from 1-3
//assign "banana" "chisel" and "faucet" to each number
//if the player guesses 2 times correctly, the player wins
//display guess word and secret word and amount of guesses left to win

var numOfCorrectGuesses = 0;
var numOfGuessesToWin = 2;

var getRandomNum = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomNum = randomInteger + 1;
  return randomNum;
};

var assignedNumToWord = function () {
  var randomNum = getRandomNum();
  if (randomNum == 1) return "banana";
  if (randomNum == 2) return "chisel";
  if (randomNum == 3) return "faucet";
};

var main = function (input) {
  // var randomNumFrom1To3 = getRandomNum();
  var computersRandomWord = assignedNumToWord();
  console.log(computersRandomWord);
  if (input !== computersRandomWord) {
    var myOutputValue = " You guessed wrongly, please try again";
  }
  if (input == computersRandomWord) {
    numOfCorrectGuesses = numOfCorrectGuesses + 1;
    myOutputValue =
      "You guessed correctly, your current number of correct guesses is " +
      numOfCorrectGuesses;
  }
  // var correctGuess = winCondition();
  if (numOfCorrectGuesses == numOfGuessesToWin) {
    myOutputValue =
      "You won! You guessed " +
      input +
      " computer random word is " +
      computersRandomWord +
      " Your total number of correct guess is " +
      numOfCorrectGuesses;
  }
  return myOutputValue;
};
