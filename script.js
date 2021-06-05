var diceRoll = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var DiceNumber = randomInteger + 1;
  return DiceNumber;
};

var TRIES = 0;
var WIN = 0;

var main = function (input) {
  TRIES = TRIES + 1;

  var computernumber = diceRoll();
  if (computernumber == 1) {
    var SECRETWORD = "banana";
  }
  if (computernumber == 2) {
    var SECRETWORD = "chisel";
  }
  if (computernumber == 3) {
    var SECRETWORD = "faucet";
  }

  console.log(SECRETWORD);
  console.log("Tries : " + TRIES);

  if (WIN <= 2) {
    var NEEDED = 2 - WIN;
  }
  if (WIN > 2) {
    var NEEDED = "no";
  }

  var myOutputValue =
    "You are wrong. <br>You guessed " +
    input +
    " while the secret word is " +
    SECRETWORD +
    ". <br>You need " +
    NEEDED +
    " more correct answers. <br> Try again.";

  if (!(input == "banana" || input == "chisel" || input == "faucet")) {
    myOutputValue = "Please type in either 'banana', 'chisel' or 'faucet' .";
  }

  if (input == SECRETWORD) {
    WIN = WIN + 1;
    if (WIN == 2 || WIN > 2) {
      myOutputValue =
        "Both the guessed word and the secret word is " +
        SECRETWORD +
        "<br>You won! Congrats! <br>You took " +
        TRIES +
        " tries.";
    }
    if (WIN == 1) {
      myOutputValue =
        "You are correct. You need to be correct one more time to win. <br>You have taken " +
        TRIES +
        " tries.";
    }
  }

  return myOutputValue;
};
