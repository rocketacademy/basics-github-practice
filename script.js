// random word generator
var generateRandomWord = function () {
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
  // var secretWord = generateRandomWord();
  var secretWord = "banana";
  console.log("Secret word: ", secretWord);

  var myOutputValue =
    "You lose! You need to guess the secret word twice in a row to win.";

  if (winCount == 1 && input != secretWord) {
    winCount = 0;
  }

  if (input == secretWord) {
    winCount += 1;
    myOutputValue =
      "You managed to guess the secret word! Lucky? Guess it right again to win the game!";
  }

  if (winCount == 2) {
    myOutputValue = "Wow, you guessed it twice in a row! You win!";
    winCount = 0;
  }

  console.log("Win count: ", winCount);
  return `You guessed ${input}. The secret word was ${secretWord}. ${myOutputValue}`;
};
