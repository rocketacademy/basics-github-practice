 * Secret Word
 */
var numCorrectGuessesNeededToWin = 2;
var numCorrectGuessesSoFar = 0;

// Randomly return one of banana, chisel or faucet.
var generateSecretWord = function () {
  // Generate random number between 1 and 3
  var numPossibleWords = 3;
  var randomNum = Math.floor(Math.random() * numPossibleWords) + 1;

  // Return the word that corresponds to the relevant number
  if (randomNum == 1) {
    return 'banana';
  }
  if (randomNum == 2) {
    return 'chisel';
  }
  return 'faucet';
};

var playSecretWord = function (guessedWord) {
  var secretWord = generateSecretWord();
  var standardMessage = `You guessed: ${guessedWord}. Secret word: ${secretWord}.`;
  if (secretWord == guessedWord) {
    // "+=" (below) is just a shorter way to write  <numCorrectGuessesSoFar=numCorrectGuessesSoFar+1>
    numCorrectGuessesSoFar += 1;
    if (numCorrectGuessesSoFar >= numCorrectGuessesNeededToWin) {
      // Reset counter of correct guesses to restart game.
      numCorrectGuessesSoFar = 0;
      return `${standardMessage} You guessed twice correctly. You win! Please play again.`;
    }
    return `${standardMessage} You guessed correctly! You need 1 more correct guess to win.`;
  }
  var numCorrectGuessesRemainingToWin =
    numCorrectGuessesNeededToWin - numCorrectGuessesSoFar;
  return `${standardMessage} You guessed incorrectly. You need ${numCorrectGuessesRemainingToWin} more correct guesses to win.`;
};