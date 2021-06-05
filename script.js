// User guesses a word out of 3 possible words: "banana", "chisel" and "faucet"
// User wins when they guess correctly twice. They can try as many times as possible.
// For each guess, output all information such as the guessed word, the secret word, and how many correct guesses the player still needs until she wins.

var NUMBER_OF_WORDS = 3;
var banana = "banana";
var chisel = "chisel";
var faucet = "faucet";

var generateSecretWord = function () {
  var randomDecimal = Math.random() * NUMBER_OF_WORDS;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1; // returns either 1, 2 or 3
  var secretWord = banana;
  if (diceNumber == 2) {
    secretWord = chisel;
  }
  if (diceNumber == 3) {
    secretWord = faucet;
  }
  return secretWord;
};

var numCorrectGuess = 0;

var main = function (userGuess) {
  var progWord = generateSecretWord();
  var myOutputValue = `You guessed ${userGuess}. The secret word is ${progWord}. You have made a total of ${numCorrectGuess} correct guesses and so you need ${
    2 - numCorrectGuess
  } more correct guesses to win.`;
  if (userGuess == progWord) {
    numCorrectGuess = numCorrectGuess + 1;
    myOutputValue = `You guessed ${userGuess}. The secret word is ${progWord}. You have made a total of ${numCorrectGuess} correct guesses and so you need ${
      2 - numCorrectGuess
    } more correct guesses to win.`;
    if (numCorrectGuess >= 2) {
      myOutputValue = `You guessed ${userGuess}. The secret word is ${progWord}. You have made a total of ${numCorrectGuess} correct guesses - you won!`;
    }
  }
  return myOutputValue;
};
