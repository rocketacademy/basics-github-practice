var BANANA = "banana";
var CHISEL = "chisel";
var FAUCET = "faucet";
var winCount = 0;

var guessOptions = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  if (randomInteger == 0) {
    return "banana";
  } else if (randomInteger == 1) {
    return "chisel";
  } else if (randomInteger == 2) {
    return "faucet";
  }
};
var isGuessCorrect = function (guess, guessed) {
  if (guess == guessed) {
    winCount = winCount + 1;
  }
};

var main = function (input) {
  var word = guessOptions();
  console.log(word);
  console.log(input);
  isGuessCorrect(input, word);
  console.log(winCount);
  var myOutputValue =
    "The secret word is " +
    word +
    ". You guessed " +
    input +
    ".<br> You need " +
    (2 - winCount) +
    " more correct guesses to win.";
  return myOutputValue;
};
