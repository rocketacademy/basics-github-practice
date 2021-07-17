var correctguesses = 0;

var main = function (input) {
  var comprandom = rollDice();

  var banana = 1;
  var chisel = 2;
  var faucet = 3;

  if (comprandom == 1) {
    comprandomword = "banana";
  }
  if (comprandom == 2) {
    comprandomword = "chisel";
  }
  if (comprandom == 3) {
    comprandomword = "faucet";
  }

  if (input != comprandomword) {
    var myOutputValue =
      "guess words:" +
      input +
      "<br>" +
      "secret words:" +
      comprandomword +
      "<br>" +
      " how many guesses correct: " +
      correctguesses;
  }

  if (input == comprandomword) {
    if (correctguesses == 1) {
      correctguesses = 0;
      return (myOutputValue = "you won");
    }
    correctguesses = correctguesses + 1;
    return (myOutputValue =
      "guess words:" +
      input +
      "<br>" +
      "secret words:" +
      comprandomword +
      "<br>" +
      " how many guesses correct: " +
      correctguesses);
  }

  return myOutputValue;
};

var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 3;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};
