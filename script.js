// there are 3 secret words
// banana, chisel, faucet
// there is a counter for number of times you win the game
// to win the game, player must win 2 times
// output:
// guessed word
// secret word
// number of correct guesses they still need to win (2-current no of guess)
var numberOfWins = 0;
var rollDice = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};
var assignNumberToSecretWord = function () {
  var randomGeneratedNumber = rollDice();
  if (randomGeneratedNumber == 1) {
    return 'banana';
  }
  if (randomGeneratedNumber == 2) {
    return 'chisel';
  }
  if (randomGeneratedNumber == 3) {
    return 'faucet';
  }
  return 'got bug';
};
var main = function (input) {
  var secretWord = assignNumberToSecretWord();
  var myOutputValue = 'you lose! you guessed: ' + input + ', the secret word is ' + secretWord + ', you need ' + (2 - numberOfWins) + ' more guesses to win.';
  if (input == secretWord) {
    numberOfWins = numberOfWins + 1;
    myOutputValue = 'you win! you guessed: ' + input + ', the secret word is ' + secretWord + ', you need ' + (2 - numberOfWins) + ' more guesses to win.';
  }
  return myOutputValue;
};