var playerScore = 0;

var main = function (input) {
  var myOutputValue = "you guessed it wrong";
  {
    var diceChoice = diceRoll();
    if (input == "bananas" && diceChoice == 1) {
      playerScore = playerScore + 1;
      myOutputValue = "you guessed it right!";
    }
    if (input == "chisel" && diceChoice == 2) {
      playerScore = playerScore + 1;
      myOutputValue = "you guessed it right!";
    }
    if (input == "faucet" && diceChoice == 3) {
      playerScore = playerScore + 1;
      myOutputValue = "you guessed it right!";
    }
  }
  if (playerScore == 2) {
    var winMessage = myOutputValue;
    myOutputValue = winMessage + "<br> You won the Game!";
  }

  return myOutputValue;
};

var diceRoll = function () {
  var randomDecimal = Math.random() * 3;
  var randomDiceNumber = Math.ceil(randomDecimal);
  console.log(randomDiceNumber);
  return randomDiceNumber;
};
