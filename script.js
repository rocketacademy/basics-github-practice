// Create a game where a player must correctly guess secret words to win.
//set counter for frequency of user guesses that won each game
//Update Secret Word with an additional rule: The player must guess correctly twice in a row to win.
var userWin = 0;
var main = function (input) {
  var computerSecretWord = computerWord();
  console.log(computerSecretWord);
  //If user guesses wrong the first time, reset userWin value to 0
  if (input == computerSecretWord) {
    userWin += 1;
  } else {
    userWin = 0;
  }
  myOutputValue = `You Lose. You guessed ${input}. Computer gives you ${computerSecretWord}`;
  //Gives a message for first correct guess
  if (userWin == 1) {
    myOutputValue = `You got the first time! Guess it correct again to win! You input ${input} and Computer gives ${computerSecretWord}`;
  }
  // To win the game the player must guess correctly twice in total, e.g. the player still wins if she guesses wrongly 1 or more times between her 2 correct guesses.
  if (userWin >= 2) {
    //For each guess, output all information such as the guessed word, the secret word, and how many correct guesses the player still needs until she wins.
    myOutputValue = `You Win. You input ${input}. Computer gives you ${computerSecretWord} and got it twice!`;
  }
  return myOutputValue;
};
//There is 1 secret word for each guess, and the computer randomly chooses that secret word from a set of 3 words: "banana", "chisel" and "faucet".
var computerWord = function () {
  // produces a decimal between 0 and 3
  var randomDecimal = Math.random() * 3;
  // take off the decimal
  var randomInteger = 1 + Math.floor(randomDecimal);
  //set of 3 words: "banana", "chisel" and "faucet"
  if (randomInteger == 1) {
    return "banana";
  } else if (randomInteger == 2) {
    return "chisel";
  }
  if (randomInteger == 3) {
    return "faucet";
  }
};
