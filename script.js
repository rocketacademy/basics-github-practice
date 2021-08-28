var prevScore = 0;

var main = function (input) {
  var randomWord = diceRoll();
  console.log(`secret = ${randomWord}`);

  var myOutputValue = `You guessed ${input}. The secret word is ${randomWord}. You Lose! Your score is ${prevScore}.`;

  if (input == randomWord) {
    prevScore = prevScore + 1;
    myOutputValue = `You guessed ${input}. The secret word is ${randomWord}. You Win! Your score is ${prevScore}`;
    if (prevScore >= 2) {
      myOutputValue = `You guessed ${input}. The secret word is ${randomWord}. You have officially won the game!!`;
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
