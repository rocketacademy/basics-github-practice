var wordGenerator = function () {
  var randomInteger = Math.floor(Math.random() * 3);
  console.log(randomInteger);
  if (randomInteger == 0) {
    return "banana";
  } else if (randomInteger == 1) {
    return "chisel";
  } else if (randomInteger == 2) {
    return "faucet";
  }
};

var correctGuesses = 0;

var main = function (input) {
  var secretWord = wordGenerator();
  if (input == secretWord) {
    correctGuesses = correctGuesses + 1;
    if (correctGuesses >= 2) {
      myOutputValue = `Your guess was ${input}, and the secret word was ${secretWord}. <br><br> You won!`;
    } else {
      myOutputValue = `Your guess was ${input}, and the secret word was ${secretWord}. <br><br> You require another ${
        2 - correctGuesses
      } guesses to win.`;
    }
  } else {
    myOutputValue = `Your guess was ${input}, and the secret word was ${secretWord}. <br><br> You require another ${
      2 - correctGuesses
    } guesses to win.`;
  }
  return myOutputValue;
};
