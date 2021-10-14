var randomWordGenerate = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;

  var randomWord = 0;

  if (randomInteger == 1) {
    randomWord = "banana";
  }

  if (randomInteger == 2) {
    randomWord = "chisel";
  }

  if (randomInteger == 3) {
    randomWord = "faucet";
  }
  return randomWord;
};

var winCount = 0;

var main = function (input) {
  var secretWord = randomWordGenerate();
  //var secretWord = "banana";

  var myOutputValue = "You lose. You still need 2 correct guesses";

  console.log("secret word ===", secretWord);

  if (winCount == 1) {
    myOutputValue =
      "That was not the secret word. You now have 1 correct guess. Guess it correct again to win.";
  }

  if (input == secretWord) {
    winCount += 1;
    myOutputValue = "You have 1 correct guess. Guess it correct again to win.";
  }

  if (winCount == 2) {
    myOutputValue = "You have 2 correct guesses. You win!";
  }

  return (
    "You guessed " +
    input +
    ". The secret word was " +
    secretWord +
    ". " +
    myOutputValue
  );
};
