var prevScore = 0;
var previousWord = 0;

var main = function (input) {
  // generate random word
  var randomWord = diceRoll();
  console.log(`secret word = ${randomWord}`);
  var prevWord = getPreviousWord();

  // update previous word with current word
  previousWord = randomWord;
  console.log(`previous word = ${prevWord}`);

  var myOutputValue = `You guessed ${input}. The secret word is ${randomWord}. You Lose! Your score is ${prevScore}.`;

  if (input == randomWord) {
    // if input is guessed correctly once
    myOutputValue = `You guessed ${input}. The secret word is ${randomWord}. You need one more guess! Your score is ${prevScore}`;
    // if input is guessed correctly twice in a row, score is given
    if (randomWord == prevWord) {
      prevScore = prevScore + 1;
      myOutputValue = `You guessed ${input}. The secret word is ${randomWord}. You Win! Your score is ${prevScore}`;
    }
  }
  return myOutputValue;
};

var diceRoll = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger;
  if (diceNumber == 0) {
    return "banana";
  }
  if (diceNumber == 1) {
    return "chisel";
  }
  if (diceNumber == 2) {
    return "faucet";
  }
};

// a function to display previous word
var getPreviousWord = function () {
  return previousWord;
};
