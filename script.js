/*
---REQUIREMENTS---
[x] Program randomly chooses secret word from set of 3 words: "banana", "chisel" and "faucet"
[x] Win condition == user guessing secret word twice in total 
  [x] user input the correct word from the 3 words
  [x] counter that tracks user wins 
[x] Each guess output all information
 */

var playerWins = 0;
var requiredWins = 2;

var main = function (input) {
  var myOutputValue = 'hello world';
  var playerChoice = input;
  console.log(playerChoice);

  if (
    playerChoice !== "banana" ||
    playerChoice !== "chisel" ||
    playerChoice !== "faucet"
  ) {
    myOutputValue =
      "Wrong input detected, please enter 'banana', 'chisel' or 'faucet'!";
  };

  var computerChoice = secretWord();
  console.log(computerChoice);

  if (playerChoice == computerChoice) {
    playerWins += 1;
    console.log(playerWins);
    myOutputValue = `You guessed ${playerChoice}, the secret word is ${computerChoice}. You currently have ${playerWins} wins, you need ${
      requiredWins - playerWins
    } more wins for victory!`;
    if (playerWins == requiredWins) {
      myOutputValue = `You guessed ${playerChoice}, the secret word is ${computerChoice}. You currently have ${playerWins} wins, you achieved ${requiredWins} wins. Victory!!!`;
    };
  } else {
    console.log(playerWins);
    myOutputValue = `You guessed ${playerChoice}, the secret word is ${computerChoice}. You currently have ${playerWins} wins, you need ${
      requiredWins - playerWins} more wins for victory`;
  };

  return myOutputValue;
};



var secretWord = function() {
  var randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber == 1) {
    return "banana"
  } else if (randomNumber == 2) {
    return "chisel"
  } else if (randomNumber == 3) {
    return "faucet"
  };
};
