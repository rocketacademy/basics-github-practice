var randomWord = function () {
  // produces a decimal between 0 and 3
  var randomDecimal = Math.random() * 3;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal) + 1;

  // it's a number from 1-3. Assign word.
  if (randomInteger == 1) {
    computerWord = "banana";
  }
  if (randomInteger == 2) {
    computerWord = "chisel";
  }
  if (randomInteger == 3) {
    computerWord = "faucet";
  }
  return computerWord;
};

var randomNum = function () {
  // produces a decimal between 0 and 3
  var randomDecimal = Math.random() * 3;

  // take off the decimal and +2 to generate random num from 2-4
  var randomInteger = Math.floor(randomDecimal) + 2;

  return randomInteger;
};

var previousGuess = 0;
var targetGuess = randomNum();

var main = function (input) {
  var computerGuess = randomWord();

  //  if wrong.
  if (!(input == computerGuess)) {
    console.log("wrong");
    previousGuess = 0;
    var myOutputValue =
      "hello world. Your guess is " +
      input +
      " and you are wrong. Your guess count is " +
      previousGuess;
  }

  // if correct
  if (input == computerGuess) {
    previousGuess = previousGuess + 1;
    var myOutputValue =
      "hello world. Your guess is " +
      input +
      " and you are correct. Your guess count is " +
      previousGuess;
  }
  if (previousGuess >= targetGuess) {
    var myOutputValue =
      "You guessed right " +
      targetGuess +
      " in a row and won! Your guess is " +
      input +
      " and you are correct. Your guess count is " +
      previousGuess;
  }
  console.log("computer guess");
  console.log(computerGuess);
  console.log("Correct guess counter");
  console.log(previousGuess);

  return myOutputValue;
};
