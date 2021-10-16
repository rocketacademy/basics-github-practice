// Create a game where a player must correctly guess secret words to win.
// There is 1 secret word for each guess, and the computer randomly chooses that secret word from a set of 3 words: "banana", "chisel" and "faucet".
// To win the game the player must guess correctly twice in total, e.g. the player still wins if she guesses wrongly 1 or more times between her 2 correct guesses. For each guess,
// output all information such as the guessed word, the secret word, and how many correct guesses the player still needs until she wins.

var correctGuessCounter = 0;
var correctGuessToWin = 2;
var main = function (input) {
  var computer = generateSecretWords();
  console.log("Computer is choosing");
  console.log(computer);
  var myOutputValue = `${input} is not the secret word! Please try again!`;

  // note that the sequence of the if functions matter
  if (input == computer && correctGuessCounter == 1) {
    correctGuessCounter = correctGuessCounter + 1;
    console.log("counting correct guesses");
    console.log(correctGuessCounter);
    return "You guessed correctly twice. You've won the game!";
  }
  if (input == computer) {
    correctGuessCounter = correctGuessCounter + 1;
    console.log("counting correct guesses");
    console.log(correctGuessCounter);
    return `Correct guess, you've input ${input}. Secret word is ${computer}. You just need 1 more guess to win the game!`;
  }
  return myOutputValue;
};

// helper functions here
var chooseSecretWords = function () {
  var randomDecimal = Math.random() * 3; // computer random selection
  var randomInteger = Math.floor(randomDecimal);
  var randomSecretWords = randomInteger + 1; // Add 1 to get valid numbers 1 to 3 inclusive, which represents each action
  return randomSecretWords; // return 3 random values to represent each action
};

var generateSecretWords = function () {
  var secretWords = chooseSecretWords(); // assigning values to variables here
  if (secretWords == 1) {
    return "banana";
  }

  if (secretWords == 2) {
    return "chisel";
  }

  if (secretWords == 3) {
    return "faucet";
  }
};
