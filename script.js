var main = function (input) {
  console.log(`input = ${input}`);
  computerWord = getComputerWord();
  console.log(`computer word = ${computerWord}`);
  var startGame1 = playGame(input, computerWord);
  return startGame1;
};
var winStreak = 0;
var computerWord = 0;
var lastComputerWord = 0;
//this gets the computer output
var getComputerWord = function () {
  var number = Math.random() * 3;
  var integer = Math.ceil(number);

  if (integer == 1) {
    return `banana`;
  }
  if (integer == 2) {
    return `chisel`;
  }
  if (integer == 3) {
    return `faucet`;
  }
};
var compareInputAndComputer = function (input, computerWord) {
  console.log(`last computer word = ${lastComputerWord}`);
  var output = `computer word = ${computerWord}. last computer word = ${lastComputerWord}`;
  lastComputerWord = `${computerWord}`;

  if (input == computerWord) {
    winStreak = winStreak + 1;

    return "you win! " + output;
  }
  if (input != computerWord) {
    return `you lose! ` + output;
  }
};

var playGame = function (input, computerWord) {
  if (winStreak == 0) {
    var outcome = compareInputAndComputer(input, computerWord);
    return outcome;
  }
  if (winStreak > 0) {
    if (lastComputerWord == computerWord) {
      computerWord = getComputerWord();
      console.log(`computer word = ${computerWord}`);
      return playGame(input, computerWord);
    }
    if (lastComputerWord != computerWord) {
      var outcome = compareInputAndComputer(input, computerWord);
      return outcome;
    }
  }
};
