var getDiceNumber = function () {
  return 1;

  var diceNumber = Math.random() * 6;
  var diceInteger = Math.ceil(diceNumber);
  console.log(`dice roll = ${diceInteger}`);
  return diceInteger;
};

var getWithinNumber = function () {
  var withinNumber = Math.random() * 3;
  var withinInteger = Math.ceil(withinNumber);

  return withinInteger;
};
// i will make a game for each within number
var playDiceWithinNumber = function (input, withinDiceNumber, dice1, dice2) {
  var upperlimit1 = dice1 + withinDiceNumber;
  var lowerlimit1 = dice1 - withinDiceNumber;
  var lowerlimit2 = dice2 - withinDiceNumber;
  var upperlimit2 = dice2 + withinDiceNumber;
  if ((input <= upperlimit1 && input >= lowerlimit1) || (input <= upperlimit2 && input >= lowerlimit2)) {
    wincount = wincount + 1;

    var outputSentence = `YOU WON! DICE 1 = ${dice1}. DICE 2 = ${dice2}. WITHIN NUMBER = ${withinDiceNumber}. INPUT = ${input}`;
    wincount = 0;
    return outputSentence;
  }
  wincount = wincount + 1;
  return `YOU LOSE! DICE 1 = ${dice1}. DICE 2 = ${dice2}. WITHIN NUMBER = ${withinDiceNumber}. INPUT = ${input}`;
};
// At the beginning of the game and each time the player wins, the computer selects a random number from 1 to 3, which we call the "within number"
var wincount = 0;

var withinDiceNumber = 0;
var main = function (input) {
  console.log(`wincount = ${wincount}`);
  console.log(`input = ${input}`);
  if (wincount == 0) {
    withinDiceNumber = getWithinNumber();
    console.log(`within ${withinDiceNumber}`);
    var dice1 = getDiceNumber();
    var dice2 = getDiceNumber();
    var playgame = playDiceWithinNumber(input, withinDiceNumber, dice1, dice2);
    return playgame;
  } else if (wincount != 0) {
    var dice1 = getDiceNumber();
    var dice2 = getDiceNumber();
    var playgame = playDiceWithinNumber(input, withinDiceNumber, dice1, dice2);
    return playgame;
  }
};
