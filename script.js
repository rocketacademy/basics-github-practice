// Secret Word V1

var counter = 0;
var guesses = 4;

// 3 Secret words
const secretWords = ['banana', 'chisel', 'faucet'];

// Function to select 1 of 3 secret words randomly
var randomWordSelector = function () {
  var randomInt = Math.floor(Math.random() * 3);
  // Take a random number of the secret words list above to generate 1 of 3 random words
  var randomWord = secretWords[randomInt];
  return randomWord;
};

// Run main function
var main = function (input) {
  var myOutputValue = 'This round, your guess was ' + input;

  // App to generate random word
  var secretWord = randomWordSelector();
  // secretWord = 'faucet'; // Early return

  // If the user input matches the secret word, a point is added to the counter
  if (input == secretWord) {
    counter += 1;
  }

  // If the user input does not the secret word, a guess point is deductecd
  if (input != secretWord) {
    guesses -= 1;
  }

  // To win, user must guess correctly twice
  if (counter == 2) {
    myOutputValue = "You've won! You guessed the secret word twice correctly!";
  }

  // To lose, user 4 guesses becomes zero
  if (guesses == 0) {
    myOutputValue = "You've lost! You ran out of guesses!<br> Please try again.";
  }

  var gameInfo = `<br>This round's secret word was: ${secretWord}<br>
                  Number of correct matches: ${counter}/2 <br>
                  Number of guesses left: ${guesses}/4 <br>`;

  // Debugging
  console.log('Input');
  console.log(input);
  console.log('Secret Word');
  console.log(secretWord);
  console.log('Counter');
  console.log(counter);
  console.log('Guesses');
  console.log(guesses);

  return myOutputValue + gameInfo;
};
