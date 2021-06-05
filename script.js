// Create random number generator between 0 to 2
var numberGenerator = function () {
  return Math.floor(Math.random() * 3);
};

var numCorrectGuesses = 0;

var main = function (input) {
  var secretWord = "";
  // Assign random number to one of the 3 words
  var number = numberGenerator();
  if (number == 0) {
    secretWord = "banana";
  } else if (number == 1) {
    secretWord = "chisel";
  } else {
    secretWord = "faucet";
  }

  console.log(secretWord);

  // If numberCorrectGuesses = 2, Player wins
  if (numCorrectGuesses >= 2) {
    return `You have already won.`;
  } else {
    var requiredGuesses = 2 - numCorrectGuesses;
    // if player input is secret word, increment numCorrectGuesses by 1
    if (input == secretWord && numCorrectGuesses < 1) {
      numCorrectGuesses += 1;
      requiredGuesses = 2 - numCorrectGuesses;
      return `You guessed ${input}. The secret word is ${secretWord}. You will need ${requiredGuesses} additional guesses to win.`;
    } else if (input == secretWord && numCorrectGuesses == 1) {
      return `You win! You guessed ${input}. The secret word is ${secretWord}.`;
    } else {
      return `You guessed ${input}. The secret word is ${secretWord}. You will need ${requiredGuesses} additional guesses to win.`;
    }
  }
};
