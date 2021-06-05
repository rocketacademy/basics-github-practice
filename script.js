var winningStreak = 0;

var main = function (input) {
  var computerChosenSecretWord = chooseSecretWord();
  var winOrNot;
  if (
    (input == "banana" && computerChosenSecretWord == "banana") ||
    (input == "chisel" && computerChosenSecretWord == "chisel") ||
    (input == "faucet" && computerChosenSecretWord == "faucet")
  ) {
    winningStreak = winningStreak + 1;
  }
  console.log(
    "computer chose " + computerChosenSecretWord,
    "my input " + input
  );

  if (winningStreak == 2) {
    winOrNot = "You've won";
  } else if (winningStreak < 2) {
    winOrNot = `you need ${2 - winningStreak} more correct guess(es) to win`;
  }
  return `You guessed ${input}, the secret word is ${computerChosenSecretWord}, ${winOrNot}`;
};

function chooseSecretWord() {
  var chosenSecretWord;
  var randomIntegerToDecideWord = getRandomInterger123();
  if (randomIntegerToDecideWord == 1) {
    chosenSecretWord = "banana";
  } else if (randomIntegerToDecideWord == 2) {
    chosenSecretWord = "chisel";
  } else if (randomIntegerToDecideWord == 3) {
    chosenSecretWord = "faucet";
  }
  return chosenSecretWord;
}

function getRandomInterger123() {
  var randomDecimal = Math.random();
  var randomInteger123 = Math.ceil(randomDecimal * 3);
  return randomInteger123;
}
