var winCount = 0;
var sw = function () {
  var randomInteger = Math.ceil(Math.random() * 3);
  var word = "";
  switch (randomInteger) {
    case 1:
      word = "banana";
      break;
    case 2:
      word = "chisel";
      break;
    case 3:
      word = "faucet";
  }
  return word;
};

var checkGuess = function (guess, randomWord) {
  if (guess == randomWord) {
    winCount += 1;
  }
};

var main = function (input) {
  var secretWord = sw();
  checkGuess(input, secretWord);

  var myOutputValue = `Guessed word: ${input}, Secret word: ${secretWord}, Number of correct guesses required: ${
    2 - winCount
  }`;
  if (winCount == 2) {
    winCount = 0;
  }

  return myOutputValue;
};
