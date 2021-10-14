var randomWinsNeeded = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 2;

  return randomInteger;
};

var winsNeeded = randomWinsNeeded();
console.log("correct guesses to win=====", winsNeeded);

var randomWordGenerate = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;

  var randomWord = 0;

  if (randomInteger == 1) {
    randomWord = "banana";
  }

  if (randomInteger == 2) {
    randomWord = "chisel";
  }

  if (randomInteger == 3) {
    randomWord = "faucet";
  }
  return randomWord;
};

var winCount = 0;

var main = function (input) {
  //var secretWord = randomWordGenerate();
  var secretWord = "banana";

  var myOutputValue = `You need ${winsNeeded} correct guesses in a row to win`;

  console.log("secret word ===", secretWord);

  if (input != secretWord) {
    winCount = 0;
  }

  if (input == secretWord) {
    winCount += 1;
    console.log("curren correct guesses", winCount);
    myOutputValue = `You have ${winCount} correct guesses. You need need ${
      winsNeeded - winCount
    } more correct guesses in a row to win`;
  }

  if (winCount == winsNeeded) {
    myOutputValue = `You guess correctly ${winsNeeded} time. You win!`;
    winCount = 0;
    winsNeeded = randomWinsNeeded();
    console.log("correct guesses to win in new round=====", winsNeeded);
  }

  return (
    "You guessed " +
    input +
    ". The secret word was " +
    secretWord +
    ". " +
    myOutputValue
  );
};
