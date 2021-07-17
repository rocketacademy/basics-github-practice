var correctGuessCount = 0;

var main = function (input) {
  var randomNumber = randomNumGenerator();
  console.log(randomNumber);
  var secretWord = secretWordGenerator(randomNumber);
  console.log(secretWord);
  var result = evaluateResult(input, secretWord);
  var myOutputValue = "";

  if (correctGuessCount == 2) {
    correctGuessCount = 0;
    myOutputValue = `You guessed ${input} and the secret word was ${secretWord}. <br> <br> ${result} <br><br> Congrats, you have managed to get 2 correct guesses! Let's play again!`;
    return myOutputValue;
  }

  var remainingCorrectGuess = 2 - correctGuessCount;
  myOutputValue = `You guessed ${input} and the secret word was ${secretWord}. <br> <br> ${result} <br> <br> You still need ${remainingCorrectGuess} correct guess in order to win.`;
  return myOutputValue;
};

//to evaluate if the user guess correctly
var evaluateResult = function (userGuess, secretWord) {
  if (userGuess == secretWord) {
    correctGuessCount++;
    return "You guess correctly!";
  }
  return "That was an incorrect guess!";
};

//to determine the secret word for this round
var secretWordGenerator = function (randomNum) {
  if (randomNum == 1) {
    return "banana";
  }
  if (randomNum == 2) {
    return "chisel";
  }
  if (randomNum == 3) {
    return "faucet";
  }
};

//to randomly generate a number from 1 to 3
var randomNumGenerator = function () {
  //Math.random generate a decimal from 0 to 1
  var randomDecimal = Math.random() * 3;
  //Math.floor round the number down to an integer
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};
