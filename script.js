// Secret Word Game (Base + Comfortable)

// var secretWord = function () {
//   var randomDecimal = Math.random() * 3;
//   var randomInteger = Math.floor(randomDecimal) + 1;
//   if (randomInteger == 1) {
//     computerWordChoice = "banana";
//   }
//   if (randomInteger == 2) {
//     computerWordChoice = "chisel";
//   }
//   if (randomInteger == 3) {
//     computerWordChoice = "faucet";
//   }
//   return computerWordChoice;
// };

// var randomWinCountNeeded = function () {
//   var randomDecimal2 = Math.random() * 3;
//   var randomInteger2 = Math.floor(randomDecimal2) + 2;
//   return randomInteger2;
// };

// var roundsNeededToWin = randomWinCountNeeded();
// var winsNeeded = roundsNeededToWin;
// var timesPlayed = 0;
// var computerWordChoice = " ";
// var decision = "guessed wrongly";
// var winCount = 0;
// var overallDecision = " ";

// var main = function (input) {
//   var computerChoice = secretWord();
//   timesPlayed = timesPlayed + 1;

//   if (input != computerChoice) {
//     winsNeeded = roundsNeededToWin;
//     winCount = 0;
//   }

//   if (input == computerChoice) {
//     decision = "guessed correctly";
//     winCount = winCount + 1;
//     winsNeeded = winsNeeded - 1;
//   }

//   if (winsNeeded == 0) {
//     overallDecision = "You won the game!";
//   }

//   var myOutputValue =
//     "You " +
//     decision +
//     ". The secret word is " +
//     computerChoice +
//     ". <br>You have guessed " +
//     timesPlayed +
//     " times. You still need " +
//     winsNeeded +
//     " correct guesses in a row.<br>" +
//     overallDecision;

//   return myOutputValue;
// };

// Dice Game (More Comfortable)

var diceRoll = function () {
  var randomDecimal = Math.random() * 6;
  var randomDiceRoll = Math.floor(randomDecimal) + 1;
  return randomDiceRoll;
};

var roundOf4D = function () {
  var randomDecimal2 = Math.random() * 10000;
  var randomInteger = Math.floor(randomDecimal2);
  return randomInteger;
};

var winCount = 0;
var play4D = false;

var diceRollGuess = function (userDiceGuess) {
  var randomWinDecimal = Math.random() * 3;
  var randomWinRange = Math.floor(randomWinDecimal) + 1;

  var computerRoll1 = diceRoll();
  var computerRoll2 = diceRoll();

  //Lose decision
  var rollDecision = "lose";

  //Win decision
  if (
    userDiceGuess > computerRoll1 + randomWinRange ||
    userDiceGuess < computerRoll1 - randomWinRange ||
    userDiceGuess > computerRoll2 + randomWinRange ||
    userDiceGuess < computerRoll2 - randomWinRange
  ) {
    rollDecision = "win";
    winCount = winCount + 1;
  }

  //Win twice decision
  if (winCount < 2) {
    var diceGameReply = "You " + rollDecision;
    console.log("Win count: ", winCount);
  }

  if (winCount == 2) {
    diceGameReply =
      "You won a second time! Please guess a 4-digit number for your chance to win the 4D lottery!";
    console.log("Win count: ", winCount);
  }
  return diceGameReply;
};

var gameOf4D = function (user4Dinput) {
  var computer4Dchoice = roundOf4D();
  var lotteryDecision = "Sorry, back to the dice roll game.";
  console.log("Winning number: ", computer4Dchoice);

  if (user4Dinput == computer4Dchoice) {
    lotteryDecision = "You win the LOTTERY!";
  }
  return lotteryDecision;
};

var main = function (input) {
  if (winCount < 2) {
    console.log("Dice roll game");
    var myOutputValue = diceRollGuess(input);
  }

  if (play4D == true) {
    console.log("4D game");
    var myOutputValue = gameOf4D(input);
    play4D = false;
    winCount = 0;
  }

  if (winCount == 2) {
    play4D = true;
  }

  return myOutputValue;
};
