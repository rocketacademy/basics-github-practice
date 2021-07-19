var main = function (input) {
  console.log(`you say ${input}`);

  var playStreakGame = playStreakOfX(input);
  return playStreakGame;
};
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
// this gets the streak needed for the round
var getStreakNeeded = function () {
  var streakNumber = Math.random() * 4;
  var streakInteger = Math.ceil(streakNumber);
  if (streakInteger == 1) {
    return getStreakNeeded();
  }
  console.log(`streak needed = ${streakInteger}`);
  return streakInteger;
};
var streakNeeded = 0;
var playCount = 0;
var correctCount = 0;
var playStreakOfX = function (input) {
  var computerWord = getComputerWord();
  //first round will get the streak needed
  if (playCount == 0) {
    streakNeeded = getStreakNeeded();
  }

  console.log(`computer says ${computerWord}`);
  if (input == computerWord) {
    playCount = playCount + 1;
    correctCount = correctCount + 1;
    if (correctCount < streakNeeded) {
      var output = `you have guessed correctly and have a streak count of ${correctCount}`;
    } else if (correctCount == streakNeeded) {
      var output = `you have guessed correctly again and have a steak count of ${correctCount}! YOU HAVE WON THE GAME!`;
      correctCount = 0;
      playCount = 0;
    }
  }

  if (input != computerWord) {
    playCount = playCount + 1;
    if (correctCount != 0) {
      correctCount = 0;
      var output = ` you have guessed wrongly and have lost ur streak count!`;
    } else if (correctCount == 0) {
      var output = `you have guessed wrongly! pls try again `;
    }
  }
  return output;
};
