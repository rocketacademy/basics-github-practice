var winCounter = 0;
var roundCounter = 1;

var main = function (input) {
  var secretWord = randomWord();

  var myOutputValue = `Round ${roundCounter}<br><br>You guessed ${input}. The secret word was ${secretWord}.`;
  myOutputValue += `<br>Sorry you picked the wrong word. You have guessed correctly ${winCounter} time(s).<br>${
    2 - winCounter
  } more to go!`;

  if (input == secretWord) {
    winCounter = winCounter + 1;
    myOutputValue = `Round ${roundCounter}<br><br>You guessed ${input}. The secret word was ${secretWord}.`;
    myOutputValue += `<br>That's right! You have guessed correctly ${winCounter} time(s).<br>${
      2 - winCounter
    } more to go!`;
    if (winCounter == 2) {
      myOutputValue = `Round ${roundCounter}<br><br>You guessed ${input}. The secret word was ${secretWord}.`;
      myOutputValue += `<br>That's right!<br><br>You've won this round! Let's start a new round...`;
      roundCounter = roundCounter + 1;
      winCounter = 0;
    }
  }
  return myOutputValue;
};

var randomWord = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  if (randomInteger == 0) {
    var secret = "banana";
  }
  if (randomInteger == 1) {
    var secret = "chisel";
  }
  if (randomInteger == 2) {
    var secret = "faucet";
  }
  return secret;
};
