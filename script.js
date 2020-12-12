// Please declare functions and variables above where they are used.
// generate a random number from 1 to 3
var randomNumber = function () {
  return (Math.floor(Math.random() * 3)) + 1;
};
var correctGuesses = 0;

var main = function (input) {
  var secretWord = '';
  var secretNumber = randomNumber();

  if (secretNumber == 1) {
    secretWord = 'banana';
  } else if (secretNumber == 2) {
    secretWord = 'chisel';
  } else {
    secretWord = 'faucet';
  }

  var myOutputValue = `The secret word is ${secretWord}.`;
  if (input == secretWord) {
    correctGuesses += 1;
    myOutputValue += 'You guessed correctly, you need ' + (2 - correctGuesses) + ' more correct guess to win';
  } else {
    myOutputValue += 'Your guess was incorrect. You need ' + (2 - correctGuesses) + ' correct guesses to win';
  }

  if (correctGuesses == 2) {
    myOutputValue += 'You made 2 correct guesses, you win!';
  }

  return myOutputValue;
};
