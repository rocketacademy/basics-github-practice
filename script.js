//track previous guess
var correctGuesses = 0;

var main = function (input) {
  var randomWord = calcRandomWord();
  console.log(randomWord);
  var myOutputValue = `You guessed this ${input}. We guessed this ${randomWord}. <br> Try again. <br>Correct Guesses: ${correctGuesses}. `;

  // if correct guess
  if (input == randomWord) {
    // add to correct guess tracking
    correctGuesses += 1;
    console.log(correctGuesses);
    if (correctGuesses == 1) {
      return `You guessed this ${input}. We guessed this ${randomWord}.<br>You got it right.<br> Correct Guesses: ${correctGuesses}. <br> Guess one more correctly to win.`;
    }
    if (correctGuesses == 2) {
      correctGuesses -= 2;
      return `You guessed this ${input}. We guessed this ${randomWord}.<br>You won!`;
    }
  }

  return myOutputValue;
};

// define secret words
var calcRandomNum = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomNumber = randomInteger + 1;
  return randomNumber;
};

// assign number values to secret words and generate random secret words
var calcRandomWord = function () {
  var totalNumWords = 3;
  var randomWord = calcRandomNum(totalNumWords);
  if (randomWord == 1) {
    return "banana";
  }
  if (randomWord == 2) {
    return "chisel";
  }
  if (randomWord == 3) {
    return "faucet";
  }
  return randomWord;
};
