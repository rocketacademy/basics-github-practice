// Secret Word V3

var testing = 1234

/* Initialise variables for score, guesses, boolean of current, previous, one-before-last input,
& an arrayto keep track of all guesses */
var scoreCounter = 0;
var guessCounter = 4; // Max: 4x guesses
var currentGuessBool;
var previousGuessBool;
var oneBeforePreviousGuessBool;
var guessArray = [];

// 3 Secret words
const secretWords = ['banana', 'chisel', 'faucet'];

// Function to select 1 of 3 secret words randomly
var randomWordSelector = function () {
  var randomInt = Math.floor(Math.random() * 3);
  // Take a random number of the secret words list above to generate 1 of 3 random words
  var randomWord = secretWords[randomInt];
  return randomWord;
};

// Generate random number from 2 to 4
var randomNumber = function () {
  const randInt = Math.floor(Math.random() * 2) + 2;
  return randInt;
};

// Generate a random number for the number of times needed to guess correctly in a row
const n = randomNumber();

// Run main function
var main = function (input) {
  var myOutputValue = 'This round, your guess was:<br>' + input;

  // Generate random word
  var secretWord = randomWordSelector();
  // secretWord = 'faucet'; // Set an early return for debugging

  // If the user input matches the secret word, a point is added to the scoreCounter
  if (input == secretWord) {
    scoreCounter += 1;
    guessCounter -= 1;
    currentGuessBool = true;
  // If the user input does not the secret word, a guess point is deducted
  } else if (input != secretWord) {
    guessCounter -= 1;
    currentGuessBool = false;
  }

  // Append every guess to an array initialised above
  guessArray.push(currentGuessBool);
  // Extract the previous guess' value's boolean value
  previousGuessBool = guessArray[guessArray.length - 2];
  // Extract the one before previous guess' value's boolean value
  oneBeforePreviousGuessBool = guessArray[guessArray.length - 3];

  // Conditions are placed purposefully in this order to output properly:
  // 1) To lose, user's 4 guesses run out aka turns ti zero
  if (guessCounter == 0) {
    myOutputValue = "You've lost! You ran out of guesses!<br> Please try again. <br> Game resets in 3 seconds..";
    setTimeout(() => {
      window.location.reload(true);
    }, 4000);
  }
  // 2) If guess right twice but not in a row, & guesses run out, they lose
  if (scoreCounter == 2 && guessCounter == 0) {
    myOutputValue = "You've lost! You did not manage to guess correctly twice in a row & you've run out of guesses!<br> Game resets in 3 seconds..";
    setTimeout(() => {
      window.location.reload(true);
    }, 4000);
  }
  // 3) To win, user must guess correctly n times in a row
  // a) n = 2
  if (n == 2) {
    if (currentGuessBool == true && previousGuessBool == true) {
      myOutputValue = "You've won! You guessed the secret word twice correctly in a row! Good! <br> Game will reset in 3 seconds..";
      setTimeout(() => {
        window.location.reload(true);
      }, 4000);
    }
  }

  // b) n = 3
  if (n == 3) {
    // eslint-disable-next-line max-len
    if (currentGuessBool == true && previousGuessBool == true && oneBeforePreviousGuessBool == true) {
      myOutputValue = "You've won! You guessed the secret word 3 times correctly in a row! Great! <br> Game will reset in 3 seconds..";
      setTimeout(() => {
        window.location.reload(true);
      }, 4000);
    }
  }

  // c) n = 4
  if (n == 4) {
    // eslint-disable-next-line max-len
    if (guessArray[0] == true && guessArray[1] == true && guessArray[2] == true && guessArray[3] == true) {
      myOutputValue = "You've won! You guessed the secret word 4 times correctly in a row! Amazing! <br> Game will reset in 3 seconds..";
      setTimeout(() => {
        window.location.reload(true);
      }, 3000);
    }
  }

  var gameInfo = `<br><br> This round's secret word was:<br> ${secretWord}<br>
                  <br> Number of correct matches:<br> ${scoreCounter} / ${n} <br>
                  <br> Number of guesses left:<br> ${guessCounter} / 4 <br>`;

  // Debugging
  console.log('Input');
  console.log(input);
  console.log('Secret Word');
  console.log(secretWord);
  console.log('Score Counter');
  console.log(scoreCounter);
  console.log('Guess Counter');
  console.log(guessCounter);
  console.log('Current Guess Correct?');
  console.log(currentGuessBool);
  console.log('Guess Array');
  console.log(guessArray);
  console.log('Guess Array Length');
  console.log(guessArray.length);
  console.log('Previous Guess');
  console.log(previousGuessBool);
  console.log('Previous Previous Guess');
  console.log(oneBeforePreviousGuessBool);
  console.log('Number of guesses needed to be correct in a row');
  console.log(n);

  // Return output plus game information
  return myOutputValue + gameInfo;
};
