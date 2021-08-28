var randomNum = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  return randomInteger;
};

var pegNumToWord = function () {
  var comNum = randomNum();

  if (comNum == 0) {
    return "banana";
  }
  if (comNum == 1) {
    return "chisel";
  }
  if (comNum == 2) {
    return "faucet";
  }
};

var winCounter = 0;

var main = function (input) {
  var comWord = pegNumToWord();
  if (input == comWord && winCounter == 1) {
    winCounter += 1;
    return `you have selected ${input}, the secret word is ${comWord}. you have 2 correct guesses. YOU WIN!`;
  }

  if (input == comWord) {
    winCounter += 1;
    return `you have selected ${input}, the secret word is ${comWord}. one more right guess to win!`;
  }
  if (input != comWord) {
    return `you have selected ${input}, the secret word is ${comWord}. you have got it wrong! try again.`;
  }
};
