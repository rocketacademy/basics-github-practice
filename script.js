/**
 * Secret Word
 */
//Create a game where a player must correctly guess secret words to win. There is 1 secret word for each guess, and the computer randomly chooses that secret word from a set of 3 words: "banana", "chisel" and "faucet". To win the game the player must guess correctly twice in total, e.g. the player still wins if she guesses wrongly 1 or more times between her 2 correct guesses. For each guess, output all information such as the guessed word, the secret word, and how many correct guesses the player still needs until she wins.

// define banana, chisel, faucet
var banana = "banana";
var chisel = "chisel";
var faucet = "faucet";
// 0 to 2
var getRandomGuess = function () {
  var randomGuess = Math.floor(Math.random() * 3);
  console.log("guess working. Number generated: " + randomGuess);
  if (randomGuess == 0) {
    return banana;
  }
  if (randomGuess == 1) {
    return chisel;
  }
  return faucet;
};

var gameCounter = 0;
var winCounter = 0;
var main = function (input) {
  console.log("start of program");
  gameCounter = gameCounter + 1;
  var counter = ` You have played this game ${gameCounter} times!`;
  // if user input random stuff
  if (input == "") {
    var myOutputValue = `Guess the word we chose! Type in Banana, Chisel, or Faucet!`;
  } else {
    var botGuess = getRandomGuess();
    var myOutputValue = actualGame(input, botGuess);
  }
  console.log("End of Program");
  return myOutputValue + counter;
};

var actualGame = function (userinput, generatedWord) {
  console.log("Running game.");
  var user = userinput;
  var program = generatedWord;

  //Condition1: If user guesses correctly ONCE, message tells them they have to guess correctly one more to win Toto
  if (user == program) {
    winCounter = winCounter + 1;
    var myOutputValue = `Wooo! Get one more win to be the ULTIMATE WINNER! You chose ${userinput}, and we chose ${generatedWord}`;
    console.log("Current correct guesses: " + winCounter);
  }
  //Condition2: If user guesses correctly twice, message shows
  if (winCounter == 2) {
    var myOutputValue = `You guessed our word twice! Congratulations!`;
    console.log("Game complete");
  }
  //Condition3: If user does not guess the word, message shows
  if (user !== program) {
    var myOutputValue = `HAHA! You lose! Want to try again? You chose ${userinput}, and we chose ${generatedWord}`;
    console.log("Current correct guesses: " + winCounter);
  }
  return myOutputValue;
};
