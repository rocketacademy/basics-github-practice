// var main = function (input) {
//   var myOutputValue = 'hello world';
//   return myOutputValue;
// };

var correctGuessCount = 0;

var main = function (input) {
  const Food = ['Banana', 'Chisel', 'faucet'];
  const random = Math.floor(Math.random() * Food.length);
  var requiredGuessesToWin = 2;
  var myOutputValue = 'you lose :(';

  console.log(random, Food[random]);
  if (input == Food[random]) {
    correctGuessCount = correctGuessCount + 1;
    console.log(correctGuessCount, 'number of correct guesses');

    myOutputValue = `Nice, you guessed ${Food[random]}. You have ${correctGuessCount} correct guesses.`;
  }
  if (correctGuessCount == requiredGuessesToWin) {
    myOutputValue = 'You have won, awesome!';
  }
  return myOutputValue;
};
