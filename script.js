var correctGuess1 = 0;

var main = function (input) {
  var sysGuess = systemGuess();
  var guessLeft = 2 - correctGuess1;
  var myOutputValue = `You guessed ${input}, the secret word is ${sysGuess}, and you need ${guessLeft} many correct guesses the player still needs until you win. `;

  if (input == sysGuess) {
    correctGuess1 = correctGuess1 + 1;
    guessLeft = 2 - correctGuess1;
    var myOutputValue = `You win! You guessed ${input}, the secret word is ${sysGuess}, and you need ${guessLeft} many correct guesses the player still needs until you win.`;
  }

  if (correctGuess1 >= 2) {
    correctGuess1 = correctGuess1 + 1;
    var myOutputValue = `You win! You guessed ${input}, the secret word is ${sysGuess}, and you need 0 many correct guesses the player still needs until you win.`;
  }
  return myOutputValue;
};

// this is to match each randomThrow integer to either scissors or paper or stone
var systemGuess = function () {
  var guess = randomThrow();
  if (guess == 1) {
    return `banana`;
  }
  if (guess == 2) {
    return `chisel`;
  }
  if ((guess = 3)) {
    return `faucet`;
  }
};

var randomThrow = function () {
  // random number between 0-1 then multiple by 3
  var randomDecimal = Math.random() * 3;
  // rounding down the value to the nearest integer
  var randomInteger = Math.floor(randomDecimal);
  // creating a range from 1-3
  var finalThrow = randomInteger + 1;
  return finalThrow;
};
// Create a game where a player must correctly guess secret words to win.
//There is 1 secret word for each guess, and the computer randomly chooses that secret word from a set of 3 words: "banana", "chisel" and "faucet".
// To win the game the player must guess correctly twice in total, e.g. the player still wins if she guesses wrongly 1 or more times between her 2 correct guesses.
//For each guess, output all information such as the guessed word, the secret word, and how many correct guesses the player still needs until she wins.
