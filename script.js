var diceRoll = function () {
  var randomInteger = 1 + Math.floor(Math.random() * 6);
  return randomInteger;
};

var withinNumber = function () {
  var randomInteger = 1 + Math.floor(Math.random() * 3);
  return randomInteger;
};

var generate4D = function () {
  var randomInteger = Math.floor(Math.random() * 10000);
  return randomInteger;
};

var generate4Digits = function () {
  var randomInteger1 = Math.floor(Math.random() * 10);
  var randomInteger2 = Math.floor(Math.random() * 10);
  var randomInteger3 = Math.floor(Math.random() * 10);
  var randomInteger4 = Math.floor(Math.random() * 10);
  return (
    randomInteger1.toString() +
    randomInteger2.toString() +
    randomInteger3.toString() +
    randomInteger4.toString()
  );
};

var withinNum = withinNumber();
var winCount = 0;

var main = function (input) {
  if (winCount == 2) {
    winCount = 0;
    var numberOf4D = generate4Digits();
    var num4D = parseInt(numberOf4D);
    var numInput = parseInt(input);
    if (num4D == numInput) {
      return `You win! The 4D number generated is ${numberOf4D} and you guessed ${input}.`;
    } else {
      return `You lose! The 4D number generated is ${numberOf4D} and you guessed ${input}.`;
    }
  }
  input = parseInt(input);
  var diceNumber1 = diceRoll();
  var diceNumber2 = diceRoll();
  console.log("dice number 1: " + diceNumber1);
  console.log("dice number 2: " + diceNumber2);
  console.log("within number: " + withinNum);
  if (
    (diceNumber1 >= input - withinNum && diceNumber1 <= input + withinNum) ||
    (diceNumber2 >= input - withinNum && diceNumber2 <= input + withinNum)
  ) {
    var myOutputValue = `You win! You rolled ${diceNumber1} & ${diceNumber2}. You guessed ${input}, which is within ${withinNum} of one or more of the dice rolls.`;
    withinNum = withinNumber();
    winCount = winCount + 1;
  } else {
    var myOutputValue = `You lose! You rolled ${diceNumber1} & ${diceNumber2}. You guessed ${input}, which is not within ${withinNum} of any of the dice roll.`;
  }

  return myOutputValue;
};
