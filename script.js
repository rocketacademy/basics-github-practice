var getDiceNumber = function () {
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
var playDiceWithinNumber = function (input, withinDiceNumber, rolledDiceNumber) {
  var upperlimit = rolledDiceNumber + withinDiceNumber;
  var lowerlimit = rolledDiceNumber - withinDiceNumber;
  if (input <= upperlimit && input >= lowerlimit) {
    wincount = wincount + 1;

    var outputSentence = `YOU WON! you had to guess within ${withinDiceNumber} of ${rolledDiceNumber} AND u inputed ${input}`;
    wincount = 0;
    return outputSentence;
  }
  wincount = wincount + 1;
  return `YOU LOSE! you had to guess within ${withinDiceNumber} of ${rolledDiceNumber} BUT u inputed ${input}`;
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
    var rolledDiceNumber = getDiceNumber();
    var playgame = playDiceWithinNumber(input, withinDiceNumber, rolledDiceNumber);
    return playgame;
  } else if (wincount != 0) {
    var rolledDiceNumber = getDiceNumber();
    var playgame = playDiceWithinNumber(input, withinDiceNumber, rolledDiceNumber);
    return playgame;
  }
};
