var PassingMark = function () {
  var randMark = Math.ceil(Math.random() * 3) + 1;
  return randMark;
};
var Points = 0;
var WinCounter = PassingMark();
var WinCounter02 = WinCounter;
var main = function (input) {
  var ComputerWords = "a";
  console.log(ComputerWords);
  var myOutputValue = "Please continue guessing.";
  if (ComputerWords == input && WinCounter == 1) {
    return `Congratulations you guessed it right ${WinCounter02} times! The game will end.`;
  }
  if (ComputerWords != input) {
    WinCounter = WinCounter + Points;
    Points = 0;
    myOutputValue = "Sorry! You're back to square one. Please try again.";
  }
  if (ComputerWords == input) {
    WinCounter = WinCounter - 1;
    Points = Points + 1;
    myOutputValue = "Congratulations you guessed it right!";
  }
  console.log(`WinCounter ${WinCounter}.`);
  console.log(`Points ${Points}`);
  return myOutputValue;
};
//If the computer != players input & the score equals to one, player loses 1 point.
//Three secret words: banana, chisel and faucet.
//Player must guess correctly twice in total.
//Use dice roll to determine the computer choice.
var RollDice = function () {
  var randNumber = Math.ceil(Math.random() * 3);
  return randNumber;
};
var WordChoice = function () {
  var Computerchoice = RollDice();
  if (Computerchoice == 1) {
    return "banana";
  }
  if (Computerchoice == 2) {
    return "chisel";
  }
  if (Computerchoice == 3) {
    return "faucet";
  }
};
