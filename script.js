var roundCounter = 0;
var winCounter = 2;

var main = function (input) {
  var secretWord = 2;
  console.log(secretWord);

  if (secretWord == 1) {
    secretWord = `banana`;
    console.log(secretWord);
  }

  if (secretWord == 2) {
    secretWord = `chisel`;
    console.log(secretWord);
  }

  if (secretWord == 3) {
    secretWord = `faucet`;
    console.log(secretWord);
  }

  if (input == secretWord) {
    winCounter = winCounter - 1;
    console.log(secretWord);
  }

  var myOutputValue = `you guessed ${input} and the secret word is ${secretWord} and you have to guess ${winCounter} time more to win`;
  console.log(myOutputValue);

  return myOutputValue;
};
var generateRandomInteger = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};
