// Step 0: Global variable Declaration
var winCounter = 0;
var guessCounter = 0;
var maxGuess = 5;
var prevRandomWord = "";

// Function 1
// random word generator
var randomWord = function(prevRandomWord){
  // produces a decimal between 0 and 3
  var randomDecimal = Math.random() * 3;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 2 ... add 1
  var wordNumber = randomInteger + 1;

  if (wordNumber == 1){
    secretWord = "banana";
  }
  if (wordNumber == 2){
    secretWord = "chisel";
  }
  if (wordNumber == 3){
    secretWord = "faucet";
  }
  if (secretWord == prevRandomWord){
    randomWord(prevRandomWord);
  }
  return secretWord;
};

var diceRoll = function () {
  // produces a decimal between 0 and 3
  var randomDecimal = Math.random() * 3;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's anumber from 0 - 2 ... add 2
  var diceNumber = randomInteger + 2;

  return diceNumber;
};


maxGuess = diceRoll();

var main = function (input) {
  var randomSecretWord = randomWord(prevRandomWord);
  prevRandomWord = randomSecretWord;
  guessCounter = guessCounter + 1;
  
  // if user guesses one secret word, add one to winCounter
  if (input == randomSecretWord){
    var myOutputValue = "You guessed " + randomSecretWord + " correctly! You have " + (maxGuess - guessCounter) + " guesses left.";
    winCounter = winCounter + 1;
    }
  else {
    var myOutputValue = "You guessed " + randomSecretWord + " wrongly! You have " + (maxGuess - guessCounter) + " guesses left.";
    winCounter = 0;
  }

  console.log("Total guesses allowed: " + maxGuess);
  console.log("Guess number: " + guessCounter);
  console.log("win counter: " + winCounter);

  // If user has used up all his guesses, he loses. reset game
  if ((maxGuess - guessCounter) < 1){
    var myOutputValue = "You have used up all your guesses. Too bad!"
    winCounter = 0;
    guessCounter = 0;
    maxGuess = diceRoll();
  }

  // if the winCounter is 2 (user has guessed two words correctly)
  if (winCounter == 2){
    var myOutputValue = "You won! You took " + guessCounter + " guesses."
    winCounter = 0;
    guessCounter = 0;
    maxGuess = diceRoll();
  }

  return myOutputValue;
};
