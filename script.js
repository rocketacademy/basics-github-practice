var correctGuess = 0;
var banana = "banana";
var chisel = "chisel";
var faucet = "faucet";

var randomWords = function () {
  var random = Math.ceil(Math.random() * 3);
  if (random == 1) return banana;
  if (random == 2) return chisel;
  if (random == 3) return faucet;
};

var message = function (guess, secret, correct) {
  return `The guessed word is ${guess} and the secret word is ${secret}. <br><br> You have guessed ${correct} secret word(s) correctly.`;
};

var main = function (input) {
  computer = randomWords();

  if (input == "") return "Please enter banana, chisel or faucet";
  if (correctGuess == 2) {
    correctGuess = 0;
  }
  if (input == computer) {
    correctGuess += 1;
  }
  if (input == computer && correctGuess == 2) {
    return "You win!" + "<br><br>" + message(input, computer, correctGuess);
  }

  return message(input, computer, correctGuess);
};
