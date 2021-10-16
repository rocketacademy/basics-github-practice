var rollDice = function () {
  // Generate a decimal from 0 through 3, inclusive of 0 but not 1
  var randomDecimal = Math.random() * 3;
  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 2 inclusive.
  var randomInteger = Math.floor(randomDecimal);
  return randomInteger;
};

var winRecord = 0;
// Generate a random dice number for required guesses in row
var guessesInRow = rollDice() + 2;

var main = function (input) {
  // Generate a random dice number for roll
  var randomDiceNumber = rollDice();
  console.log("number generated for computer play: ", randomDiceNumber);
  console.log("guesses in a row required: ", guessesInRow);
  // Assign a play to each dice number
  if (randomDiceNumber == 0) {
    var computerTurn = "banana";
    console.log("computer played 0 - banana");
    console.log(randomDiceNumber == 0);
  }

  if (randomDiceNumber == 1) {
    console.log("computer played 1 - chiesel");
    console.log(randomDiceNumber == 1);
    var computerTurn = "chiesel";
  }

  if (randomDiceNumber == 2) {
    console.log("computer played 2 - faucet");
    console.log(randomDiceNumber == 2);
    var computerTurn = "faucet";
  }

  // Assign an output based on each input
  // Input Validation
  if (input != "chiesel" && input != "banana" && input != "faucet") {
    myOutputValue =
      "You played " +
      input +
      " which is invalid, please only play chiesel, banana or faucet.";
    // Return output.
    console.log("input validation: ", input);
    return myOutputValue;
  }

  // If user guesses incorrect
  if (input != computerTurn) {
    myOutputValue =
      "You played " +
      input +
      " and the computer played " +
      computerTurn +
      " so you lose and your win record is " +
      winRecord +
      " which means you need " +
      (guessesInRow - winRecord) +
      " more correct guess to win";
    // Return output.
    console.log("you played ", input, " and computer played ", computerTurn);
    return myOutputValue;
  }

  // If user guesses correctly the required times
  if (input == computerTurn && winRecord == guessesInRow - 1) {
    winRecord = winRecord + 1;
    myOutputValue =
      "You played " +
      input +
      " and the computer played " +
      computerTurn +
      " so you win because your win record is " +
      winRecord;
    // Return output.
    console.log("you played ", input, " and computer played ", computerTurn);
    // Reset win record and number of guesses required
    winRecord = 0;
    guessesInRow = rollDice() + 2;
    return myOutputValue;
  }

  // If user guesses correctly once
  if (input == computerTurn && winRecord < guessesInRow) {
    winRecord = winRecord + 1;
    myOutputValue =
      "You played " +
      input +
      " and the computer played " +
      computerTurn +
      " so you win and you need " +
      (guessesInRow - winRecord) +
      " more correct guess to win";
    // Return output.
    console.log("you played ", input, " and computer played ", computerTurn);
    return myOutputValue;
  }
};
