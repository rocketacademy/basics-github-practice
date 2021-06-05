var bananas = "bananas";
var chisel = "chisel";
var faucet = "faucet";
var guessCount = 0;

var diceRoll = function () {
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);
  if (randomNumber == 1) {
    return bananas;
  }
  if (randomNumber == 2) {
    return chisel;
  }
  if (randomNumber == 3) {
    return faucet;
  }
};

var main = function (input) {
  var secretWord = diceRoll();
  if (input == secretWord) {
    if (guessCount >= 1) {
      guessCount = 0;
      return "You have made two correct guesses.";
    }
    return `Good job. You got it right. You have made ${guessCount} correct guesses so far.`;
  }
  if (input != secretWord) {
    return `Too bad. You guessed wrong. You have made ${guessCount} correct guesses so far.`;
  }
};
