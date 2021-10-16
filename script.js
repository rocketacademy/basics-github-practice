//To win the game the player must guess correctly twice in total, e.g. the player still wins if she guesses wrongly 1 or more times between her 2 correct guesses.
//For each guess, output all information such as the guessed word, the secret word, and how many correct guesses the player still needs until she wins.

var winCount = 0;
var correctNeeded = 2;
var playerCount = 0;

var main = function (input) {
  playerCount = playerCount + 1;
  var guessedWord = input;
  console.log("Guessed Word:", guessedWord);
  console.log("Numbers of Correct Guessed Needed:", correctNeeded);
  var secretNumber = generateNumber();
  var secretWord = generateSecretWord(secretNumber);
  console.log("Secret Word:", secretWord);
  var myOutputValue =
    "You lose! You guessed " +
    guessedWord +
    " and the secret word is " +
    secretWord +
    ". You need " +
    correctNeeded +
    " more guesses to win.";
  if (guessedWord == secretWord && winCount != 2) {
    winCount = winCount + 1;
    correctNeeded = correctNeeded - winCount;
    myOutputValue =
      "You win! You guessed " +
      guessedWord +
      " and the secret word is " +
      secretWord +
      ". You still need " +
      correctNeeded +
      " more guess to win.";
  }
  if (guessedWord == secretWord && winCount == 2) {
    winCount = winCount + 1;
    correctNeeded = correctNeeded - winCount;
    myOutputValue =
      "You have won the game in " +
      playerCount +
      " tries! You guessed " +
      guessedWord +
      " and the secret word is " +
      secretWord +
      ".";
  }
  return myOutputValue;
};

//Number Generator
var generateNumber = function (max) {
  var max = 3;
  var estRandomNumber = Math.random() * max;
  var randomInteger = Math.floor(estRandomNumber);
  var randomNumber = randomInteger + 1;
  return randomNumber;
};

//Secret Word Generator
var generateSecretWord = function (inputNumber) {
  if (inputNumber == 1) {
    return "banana";
  }
  if (inputNumber == 2) {
    return "chisel";
  }
  if (inputNumber == 3) {
    return "faucet";
  }
};
