var BANANA = "banana";
var CHISEL = "chisel";
var FAUCET = "faucet";
var winCount = 0;

var guessOptions = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  return "banana";
  if (randomInteger == 0) {
    return "banana";
  } else if (randomInteger == 1) {
    return "chisel";
  } else if (randomInteger == 2) {
    return "faucet";
  }
};

var correctsToWin = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  if (randomInteger == 0) {
    return 2;
  } else if (randomInteger == 1) {
    return 3;
  } else if (randomInteger == 2) {
    return 4;
  }
};

var staticCorrectsToWin = 1;

var resetScore = function () {};

var isGuessCorrect = function (guess, guessed) {
  if (guess == guessed) {
    winCount += 1;
  }
  if (guess != guessed) {
    winCount = 0;
  }
};

var main = function (input) {
  var word = guessOptions();
  console.log("word");
  console.log(word);
  console.log("input");
  console.log(input);
  isGuessCorrect(input, word);

  if (staticCorrectsToWin == 1) {
    staticCorrectsToWin = correctsToWin();
  }

  console.log("winCount");
  console.log(winCount);
  console.log("staticCorrectsToWin");
  console.log(staticCorrectsToWin);

  var myOutputValue =
    "The secret word is " +
    word +
    ". You guessed " +
    input +
    ".<br> You need " +
    (staticCorrectsToWin - winCount) +
    " more correct guesses to win.";
  if (winCount == staticCorrectsToWin) {
    myOutputValue =
      "The secret word is " +
      word +
      ". You guessed " +
      input +
      ".<br> You have guessed " +
      staticCorrectsToWin +
      " times correctly. You win!";
    staticCorrectsToWin = correctsToWin();
    winCount = 0;
  }
  return myOutputValue;
};
