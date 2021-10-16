var counter = 0;

var main = function (input) {
  var myOutputValue = "hello world";

  var computer_choice = secret_word();
  console.log(computer_choice);

  if (input == computer_choice) {
    counter += 1;
    myOutputValue = "You win! You guessed it correctly " + counter + " time(s)";
  } else {
    myOutputValue = "You guessed it wrongly!";
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
