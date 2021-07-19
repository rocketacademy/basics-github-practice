var numCorrectGuessNeededToWin = 2;
var numCorrectGuess = 0;

function generateSecretWord() {
  var randomGenerator = generateRandomInteger();
  if (randomGenerator == 1) {
    return "banana";
  }
  if (randomGenerator == 2) {
    return "chisel";
  }
  if (randomGenerator == 3) {
    return "faucet";
  }
}

var main = function (userGuess) {
  var secretWord = generateSecretWord();
  var output = "your guess: " + userGuess + " secret guess: " + secretWord;
  //validation
  if (
    userGuess !== "banana" &&
    userGuess !== "chisel" &&
    userGuess !== "faucet"
  ) {
    return userGuess + " error, plese try again";
  }

  if (userGuess == secretWord) {
    numCorrectGuess += 1;
    numCorrectGuessNeededToWin -= 1;
    return (
      output +
      "you win, you need to guess corretly " +
      numCorrectGuessNeededToWin +
      " until you win."
    );
  }
  if (userGuess != secretWord) {
    return (
      output + "you are wrong " + numCorrectGuessNeededToWin + " until you win."
    );
  }
  if (numCorrectGuess >= numCorrectGuessNeededToWin) {
    return output + " you win!";
  }

  return output + " you still need " + numCorrectGuessNeededToWin;
};

function generateRandomInteger() {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
}
