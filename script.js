var CorrectGuessCounter = 0;
var CorrectGuessToWin = 2;

var main = function (input) {
  var SecretWord = chooseSecretWord();
  console.log("selecting SecretWord");
  console.log(SecretWord);
  var myOutputValue =
    "You selected '" +
    input +
    "' which is not the secret word. Please try again.";

  //note that the sequence of the if functions matter as it determines the statement first
  if (input == SecretWord && CorrectGuessCounter == 1) {
    CorrectGuessCounter = CorrectGuessCounter + 1;
    var CorrectGuessRemainingToWin = CorrectGuessToWin - CorrectGuessCounter;
    console.log("counting correct guesses");
    console.log(CorrectGuessCounter);
    return `You guessed correctly twice. You win.`;
  }

  if (input == SecretWord) {
    CorrectGuessCounter = CorrectGuessCounter + 1;
    var CorrectGuessRemainingToWin = CorrectGuessToWin - CorrectGuessCounter;
    console.log("counting correct guesses");
    console.log(CorrectGuessCounter);
    return `You guessed correctly. You need ${CorrectGuessRemainingToWin} more correct guess to win.`;
  }

  return myOutputValue;
};

var chooseSecretWord = function () {
  var randomDecimal = Math.random() * 3;
  var randomSecretWord = Math.floor(randomDecimal);
  if (randomSecretWord == 0) {
    return "banana";
  }
  if (randomSecretWord == 1) {
    return "chisel";
  }
  return "faucet";
};
