<<<<<<< HEAD
// this is a basic version of scissors paper stone //
// scissors beats paper //
// paper beats stone //
// stone beats scissors //
// if both parties choose the same object, it is a draw //
// user chooses input as scissors paper or stone //
// randomly return one of scissors paper or stone //

var generateMove = function () {
  // Generate random number between 1 and 3 //
  var numPossibleMoves = 3;
  var randomNum = Math.floor(Math.random() * numPossibleMoves) + 1;

  // Return the word that corresponds to the relevant number //
  if (randomNum == 1) {
    return "scissors";
  }
  if (randomNum == 2) {
    return "paper";
  }
  return "stone";
};

var main = function (userMove) {
  var move = generateMove();
  var standardMessage = `You played: ${userMove}. Computer played: ${move}.`;
  // if both parties choose the same object, it is a draw //
  if (move == userMove) {
    return `${standardMessage} <br> <br> It's a draw! Please play again.`;
  }
  // scissors beats paper //
  if (move == "scissors" && userMove == "paper") {
    return `${standardMessage} <br> <br> You lost! Please play again.`;
  }
  // paper beats stone //
  if (move == "paper" && userMove == "stone") {
    return `${standardMessage} <br> <br> You lost! Please play again.`;
  }
  // stone beats scissors //
  if (move == "stone" && userMove == "scissors") {
    return `${standardMessage} <br> <br> You lost! Please play again.`;
  }
  // scissors beats paper //
  if (userMove == "scissors" && move == "paper") {
    return `${standardMessage} <br> <br> You won! Please play again.`;
  }
  // paper beats stone //
  if (userMove == "paper" && move == "stone") {
    return `${standardMessage} <br> <br> You won! Please play again.`;
  }
  // stone beats scissors //
  if (userMove == "stone" && move == "scissors") {
    return `${standardMessage} <br> <br> You won! Please play again.`;
  }
  // if user puts in undefined move //
  if (userMove != "scissors" || "paper" || "stone") {
    return `Your move is not valid! <br> <br> To play, please enter scissors, paper, or stone`;
  }
=======
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
>>>>>>> db229b9cc9dd75ff0cdca93f0d0e8809b0e87e66
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