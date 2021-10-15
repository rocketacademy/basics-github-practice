var random2to4 = function () {
  var randomDecimal = Math.random() * 3; // Math.random() --> 0 --- <1  0.1 , 0.2121241, 0.999999999999 float 2.09999
  var randomInteger = Math.floor(randomDecimal); //0,1,2
  return randomInteger + 2; // returns 2,3, or 4.
};

var gameNumber = 0;
var nTimesNeeded = random2to4(); //N times needed for winning--> this starts first.
var randomNtimesNeeded = "not yet activated"; //2nd: this is for count when player wins all N times. can't start this definition anywhere locally in the main function.
var sumScore = 0;
console.log("===GLOBAL nTimesNeeded to 1st ROUND===");
console.log(nTimesNeeded);

var main = function (input) {
  gameNumber = gameNumber + 1;
  console.log("##### GAME NUMBER #####");
  console.log(gameNumber);
  console.log("===LOCAL nTimesNeeded to Win CURRENT ROUND ===");
  console.log(nTimesNeeded);

  var randomSecretWord = readSecretWordNmbr(randomNumber());
  console.log("randomSecretWord = ");
  console.log(randomSecretWord);

  if (
    (input.toLowerCase() == randomSecretWord &&
      input.toLowerCase() == "banana") ||
    (input.toLowerCase() == randomSecretWord &&
      input.toLowerCase() == "chisel") ||
    (input.toLowerCase() == randomSecretWord && input.toLowerCase() == "faucet")
  ) {
    sumScore = sumScore + 1;
  }

  var scoreDiff = nTimesNeeded - sumScore; // This tells the player how many more correct guesses needed to win current round.
  var myOutputValue = "";

  //need message for when the person doesn't win 2wice in a row.
  var wrongGuess = `Your guess was ${input}.<br><br> Secret Word: ${randomSecretWord}.<br><br> You need ${nTimesNeeded}  correct guess/guesses in a row to win. Try again. `;

  var correctGuess = `Correct guess... <br><br> Your guess was ${input}.<br> Secret Word: ${randomSecretWord}.<br><br>  You need ${scoreDiff} more correct guess/guesses to win. `;

  if (input.toLowerCase() == randomSecretWord && sumScore == nTimesNeeded) {
    myOutputValue = outputForWin;
    randomNtimesNeeded = random2to4();
  }
  console.log("-----> randomNtimesNeeded ------>");
  console.log(randomNtimesNeeded);

  var outputForWin = ` YOU WIN!<br><br>You have guessed the secret word correctly ${nTimesNeeded} times in a roll! <br><br> Your  ${nmbrSuffix(
    nTimesNeeded
  )} guess was ${input}.<br> Secret Word: ${randomSecretWord}.<br><br>In the next round, you will need to make <br> ${randomNtimesNeeded} correct guesses in a row`;

  if (input.toLowerCase() != randomSecretWord) {
    myOutputValue = wrongGuess;
    sumScore = 0;
  }

  if (input.toLowerCase() == randomSecretWord && sumScore < nTimesNeeded) {
    myOutputValue = correctGuess; //because sumScore and nTimesNeeded are tied to scoreDiff, I added an extra condition for better control, such that the output is correct to the exact game situation before winning after 1st correct guess.
  }

  if (input.toLowerCase() == randomSecretWord && sumScore == nTimesNeeded) {
    nTimesNeeded = randomNtimesNeeded; //NEXT ROUND'S N TIMES TRANSFERED TO 'nTimesNeeded'
    myOutputValue = outputForWin;
    sumScore = 0;
  }
  console.log(">>>>>> scoreDiff = nTimesNeeded - sumScore");
  console.log(scoreDiff);

  console.log(">>>>>> sumScore END of this guess= ");
  console.log(sumScore);

  console.log("nTimesNeeded to WIN CURRENT / NEXT ROUND ===");
  console.log(nTimesNeeded);

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
  return secretWordString; // amend to 1 string input to test.
};

var nmbrSuffix = function (nTimesNeeded) {
  if (nTimesNeeded == 2) {
    stNdThSuffix = "2nd";
  }
  if (nTimesNeeded == 3) {
    stNdThSuffix = "3rd";
  }
  if (nTimesNeeded == 4) {
    stNdThSuffix = "4th";
  }
  return stNdThSuffix;
};
