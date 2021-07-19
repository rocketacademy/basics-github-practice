var previousGuess = 0;

var main = function (input) {
  var computerGuess = randomWord();
  //  assume wrong.

  var myOutputValue =
    "hello world. Your guess is " +
    input +
    " and you are wrong. Your guess count is " +
    previousGuess;

  if (!(input == computerGuess)) {
    console.log("wrong");
    previousGuess = 0;
  }

  if (input == computerGuess) {
    previousGuess = previousGuess + 1;
    var myOutputValue =
      "hello world. Your guess is " +
      input +
      " and you are correct. Your guess count is " +
      previousGuess;
  }
  if (previousGuess >= 2) {
    var myOutputValue =
      "You guessed right twice in a row and won! Your guess is " +
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
