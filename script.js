var numberOfWins = 0;
var numberOfWinsRequired = 0;

var main = function (input) {
  var secretWord = "";
  numberOfWinsRequired = generateRandomNumber();
  var secretNumber = generateThreeNumber();

  if (secretNumber == 1) {
    secretWord = "banana";
  }
  if (secretNumber == 2) {
    secretWord = "chisel";
  }
  if (secretNumber == 3) {
    secretWord = "faucet";
  }
  var myOutputValue =
    "you lose! you guessed: " +
    input +
    ", the secret word is: " +
    secretWord +
    ", you need " +
    (numberOfWinsRequired - numberOfWins) +
    " number of wins";

  if (input == secretWord) {
    numberOfWins = numberOfWins + 1;
    myOutputValue =
      "you win. you guessed: " +
      input +
      ", the secret word is: " +
      secretWord +
      " you need " +
      (numberOfWinsRequired - numberOfWins) +
      " number of wins";
  }

  if (input != secretWord) {
    numberOfWins = 0;
    myOutputValue =
      "you lose! you guessed: " +
      input +
      ", the secret word is: " +
      secretWord +
      ", you need" +
      numberOfWinsRequired +
      "consecutive number of wins.";
  }

  return myOutputValue;
};

var generateThreeNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var threeNumber = randomInteger + 1;
  return threeNumber;
};

var generateRandomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomNumber = randomInteger + 2;
  return randomNumber;
};
// please input "banana", "chisel" and "faucet"
// var random "banana", "chisel" and "faucet".
// condition to win - the player must guess correctly twice in total, e.g. the player still wins if she guesses wrongly 1 or more times between her 2 correct guesses.
// For each guess, output 1 ) guessed word, 2) secret word, 3) how many correct guesses the player still needs until she wins.
// Update Secret Word with an additional rule: The player must guess correctly twice in a row to win
