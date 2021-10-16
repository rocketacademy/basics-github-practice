// Function
var random_Number = function () {
  var randomNumber = Math.random() * 3;
  // range from 0 to 2
  var integernumber = Math.floor(randomNumber);
  // range from 2 to 4
  var number = integernumber + 2;
  return number;
};

var counter = 0;
var round = random_Number();
console.log(round);

var main = function (input) {
  var myOutputValue = "";

  var computer_choice = secret_word();
  console.log(computer_choice);

  if (input == computer_choice) {
    counter += 1;
    myOutputValue = "You guessed it correctly " + counter + " time(s)";
  } else {
    counter = 0;
    myOutputValue =
      "You guessed it wrongly! " + counter + " time(s) correctly.";
  }

  if (counter == round) {
    myOutputValue = `You win! You guessed it correctly  ${counter}  time(s)`;
  }

  return myOutputValue;
};

var rollRandom = function () {
  var randomNumber = Math.random() * 3;
  var integernumber = Math.floor(randomNumber);
  var choices = integernumber + 1;
  return choices;
};

var secret_word = function () {
  var choice = rollRandom();
  var word = "";

  if (choice == 1) {
    word = "banana";
  }

  if (choice == 2) {
    word = "chisel";
  }
  if (choice == 3) {
    word = "faucet";
  }

  return word;
};
