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
};
