var guessesToWin = 2;

var main = function (input) {
  //Option is Computer Generated Result of RPS
  var assignNumberToOption = randomiser();
  console.log(assignNumberToOption);

  //How many more Guesses needed to win
  if (assignNumberToOption == input) {
    guessesToWin = guessesToWin - 1;
  }
  //Player plays until she guesses twice correctly
  if (guessesToWin == 0) {
    return "You won bitch";
  }
  //Messages
  var myOutputMessage =
    "You guessed " +
    input +
    ", the secret word is " +
    assignNumberToOption +
    " ,you need " +
    guessesToWin +
    " to win!!";
  var emptyMessage = "Please enter banana/chisel/faucet into box";
  var invalidMessage = "Invalid entry!!!!";

  //Empty input
  if (input == "") {
    return emptyMessage;
  }
  //Invalid message if it's not banana, chisel or faucet.
  if (input != "banana" && input != "chisel" && input != "faucet") {
    return invalidMessage;
  }
  //Win scenario
  if (input == assignNumberToOption) {
    return myOutputMessage;
  }
  //Lose scenario
  //if input not equal to computer choice (banana,chisel,faucet)
  if (input != assignNumberToOption) {
    return myOutputMessage;
  }
};

//Number randomiser assigned to RPS
var randomiser = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var actualInteger = randomInteger + 1;
  if (actualInteger == 1) {
    return "banana";
  }
  if (actualInteger == 2) {
    return "chisel";
  }
  if (actualInteger == 3) {
    return "faucet";
  }
};
