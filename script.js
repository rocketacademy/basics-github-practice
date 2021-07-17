var main = function (input) {
  console.log(`i guess ${input}`);
  var findWinner = whoWins(input);
  return findWinner;
};
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
var correctCount = 0;
console.log(correctCount);
var whoWins = function (input) {
  var computerWord = getComputerWord();
  console.log(`computer says ${computerWord}`);
  if (input == computerWord) {
    correctCount = correctCount + 1;
    if (correctCount == 1) {
      var output = `you have guessed correctly and have a streak count of ${correctCount}`;
    } else if (correctCount == 2) {
      var output = `you have guessed correctly again and have a steak count of ${correctCount}! YOU HAVE WON THE GAME!`;
      correctCount = 0;
    }
  }

  if (input != computerWord) {
    if (correctCount == 1) {
      correctCount = 0;
      var output = ` you have guessed wrongly and have lost ur streak count!`;
    } else if (correctCount == 0) {
      var output = `you have guessed wrongly! pls try again `;
    }
  }
  return output;
};
