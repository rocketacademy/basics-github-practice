var scoreBanana = 0;
var scoreChisel = 0;
var scoreFaucet = 0;
var gameNumber = 0;
var main = function (input) {
  gameNumber = gameNumber + 1;
  console.log("### GAME NUMBER ###");
  console.log(gameNumber);
  var randomSecretWord = readSecretWordNmbr(randomNumber());
  console.log("randomSecretWord = ");
  console.log(randomSecretWord);

  if (
    input.toLowerCase() == randomSecretWord && //player is only correct guess when the input is the same as computer's secret choice.
    input.toLowerCase() == "banana"
  ) {
    scoreBanana = scoreBanana + 1; // always fixing the score at one for each correct word means the score don't increase if player uses back the same word.
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
  var scoreDiff = 3 - sumScore;

  var myOutputValue = `Wrong guess<br> Your guess was ${input}.<br> Secret Word: ${randomSecretWord}.<br> You need ${scoreDiff} more correct guesses to win. `;
  var correctGuess = `Correct guess<br> Your guess was ${input}.<br> Secret Word: ${randomSecretWord}.<br> You need ${scoreDiff} more correct guesses to win. `;
  var win = `You WIN! <br> Your guess was ${input}.<br> Secret Word: ${randomSecretWord}.<br> `;

  if (input.toLowerCase() == randomSecretWord) {
    myOutputValue = correctGuess;
  }

  if (sumScore >= 2) {
    myOutputValue = win;
  }

  return myOutputValue;
};

var win = "You win";

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
