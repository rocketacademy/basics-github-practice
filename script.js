var BANANA = "banana";
var CHISEL = "chisel";
var FAUCET = "faucet";
var numCorrectGuesses = 0;
var winCondition = 2;

var randomWord = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);

  if (randomInteger == 0) {
    return BANANA;
  }
  if (randomInteger == 1) {
    return CHISEL;
  }
  if (randomInteger == 2) {
    return FAUCET;
  }
};

var main = function (input) {
  var secretWord = randomWord();
  if (input == secretWord) {
    numCorrectGuesses += 1;
  }

  var myOutputValue = `You guessed ${input}, the secret word is ${secretWord}, you have guessed the secret word correctly ${numCorrectGuesses} times and you need to guess the secret word correctly ${
    winCondition - numCorrectGuesses
  } more time(s) to win.`;

  if (numCorrectGuesses == winCondition) {
    return "Congrats, you won after guessing the secret word correctly twice in total.";
  }

  return myOutputValue;
};
