var numberOfTimesCorrect = 0;
var numberOfTimeLeft = 2;
var main = function (input) {
  console.log(input);
  var correctSecretWord = randomSecretWord();
  console.log(`secret word`);
  console.log(correctSecretWord);
  numberOfTimeLeft = 2 - numberOfTimesCorrect;
  console.log(`number of time left : ${numberOfTimeLeft}`);
  if (input == correctSecretWord) {
    numberOfTimesCorrect += 1;
    numberOfTimeLeft = 2 - numberOfTimesCorrect;
    myOutputValue = `You guess ${input}, secret word is ${correctSecretWord} and the player still need to guess ${numberOfTimeLeft} times`;
  }
  var myOutputValue = `You guess ${input}, secret word is ${correctSecretWord} and the player still need to guess ${numberOfTimeLeft} times`;

  return myOutputValue;
};

var diceRoll = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var randomSecretWord = function () {
  var secretWord = diceRoll();
  if (secretWord == 1) {
    return "banana";
  } else if (secretWord == 2) {
    return "chisel";
  } else if (secretWord == 3) {
    return "faucet";
  }
};
