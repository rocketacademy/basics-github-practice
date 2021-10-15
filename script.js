var scoreBanana = 0;
var scoreChisel = 0;
var scoreFaucet = 0;
var gameNumber = 0;
var main = function (input) {
  gameNumber = gameNumber + 1;
  console.log("##### GAME NUMBER #####");
  console.log(gameNumber);

  var randomSecretWord = readSecretWordNmbr(randomNumber());
  console.log("randomSecretWord = ");
  console.log(randomSecretWord);

  /*   //======================================
  // INPUT CONTROL FLOW TEST BLOC;
  if (gameNumber == 2) {
    randomSecretWord = "banana";
  }
  if (gameNumber == 3) {
    randomSecretWord = "chisel";
  }
  if (gameNumber == 4) {
    randomSecretWord = "faucet";
  }
  if (gameNumber == 6) {
    randomSecretWord = "faucet";
  }
  //====================================== */

  if (
    input.toLowerCase() == randomSecretWord &&
    input.toLowerCase() == "banana"
  ) {
    scoreBanana = scoreBanana + 1;
  }
  console.log("** ScoreBanana **");
  console.log(scoreBanana);
  if (
    input.toLowerCase() == randomSecretWord &&
    input.toLowerCase() == "chisel"
  ) {
    scoreChisel = scoreChisel + 1;
  }
  console.log("** scoreChisel **");
  console.log(scoreChisel);
  if (
    input.toLowerCase() == randomSecretWord &&
    input.toLowerCase() == "faucet"
  ) {
    scoreFaucet = scoreFaucet + 1;
  }
  console.log("** scoreFaucet **");
  console.log(scoreFaucet);

  var sumScore = scoreBanana + scoreChisel + scoreFaucet;
  var scoreDiff = 2 - sumScore;

  //need message for when the person doesn't win 2wice in a row.
  var TwoWrongGuesses = `Wrong guess<br> Your guess was ${input}.<br> Secret Word: ${randomSecretWord}.<br> You need ${scoreDiff}  correct guesses in a row to win. Try again.  `;

  var myOutputValue = TwoWrongGuesses;

  var correct1stGuess = `Correct guess... <br><br> Your guess was ${input}.<br> Secret Word: ${randomSecretWord}.<br><br>  You need ${scoreDiff} more correct guess to win. `;

  var correct2wiceInArow = ` YOU WIN!<br><br>You have guessed the secret word twice in a roll! <br><br> Your guess for the 2nd word was ${input}.<br> Secret Word: ${randomSecretWord}.<br> `;

  var gameOver = `You have already beaten the game in this round. <br><br>Please refresh the webpage to restart the game. `;

  if (input.toLowerCase() == randomSecretWord && sumScore == 1) {
    myOutputValue = correct1stGuess;
  }

  if (sumScore == 2 && input.toLowerCase() == randomSecretWord) {
    myOutputValue = correct2wiceInArow;
  }

  if (
    (sumScore > 2 && input.toLowerCase() == randomSecretWord) ||
    (sumScore >= 2 && input.toLowerCase() != randomSecretWord)
  ) {
    myOutputValue = gameOver;
  }
  return myOutputValue;
};

// TO KEEP SCORE OF THE CORRECT WORD
var randomNumber = function () {
  var randomDecimal = Math.random() * 3; // Math.random() --> 0 --- <1  0.1 , 0.2121241, 0.999999999999 float 2.09999
  var randomInteger = Math.floor(randomDecimal); //0,1,2
  return randomInteger + 1; // 1,2,3
};

// read random Number to output  random GameHand
var readSecretWordNmbr = function (secretWordIndex) {
  var secretWordString = "";
  if (secretWordIndex == 1) {
    secretWordString = "banana";
  }
  if (secretWordIndex == 2) {
    secretWordString = "chisel";
  }
  if (secretWordIndex == 3) {
    secretWordString = "faucet";
  }
  return secretWordString;
};
