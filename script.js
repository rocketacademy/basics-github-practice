// secret word

// var winCount = 0;
// var sw = function () {
//   var randomInteger = Math.ceil(Math.random() * 3);
//   var word = "";
//   switch (randomInteger) {
//     case 1:
//       word = "banana";
//       break;
//     case 2:
//       word = "chisel";
//       break;
//     case 3:
//       word = "faucet";
//   }
//   return word;
// };

// var checkGuess = function (guess, randomWord) {
//   if (guess == randomWord) {
//     winCount += 1;
//   }
// };

// var main = function (input) {
//   var secretWord = sw();
//   checkGuess(input, secretWord);

//   var myOutputValue = `Guessed word: ${input}, Secret word: ${secretWord}, Number of correct guesses required: ${
//     2 - winCount
//   }`;
//   if (winCount == 2) {
//     winCount = 0;
//   }

//   return myOutputValue;
// };

// secret word twice in a row

// var winCount = 0;
// var sw = function () {
//   return "banana";
//   var randomInteger = Math.ceil(Math.random() * 3);
//   var word = "";
//   switch (randomInteger) {
//     case 1:
//       word = "banana";
//       break;
//     case 2:
//       word = "chisel";
//       break;
//     case 3:
//       word = "faucet";
//   }
//   return word;
// };

// var checkGuess = function (guess, randomWord) {
//   if (guess == randomWord) {
//     winCount += 1;
//   } else {
//     winCount = 0;
//   }
// };

// var main = function (input) {
//   var secretWord = sw();
//   checkGuess(input, secretWord);

//   var myOutputValue = `Guessed word: ${input}, Secret word: ${secretWord}, Number of correct guesses required: ${
//     2 - winCount
//   }`;
//   if (winCount == 2) {
//     winCount = 0;
//   }

//   return myOutputValue;
// };

// within Number

// var rollDice = function () {
//   // produces a decimal between 0 and 6
//   var randomDecimal = Math.random() * 6;
//   // take off the decimal
//   var randomInteger = Math.floor(randomDecimal);
//   // it's anumber from 0 - 5 ... add 1
//   var diceNumber = randomInteger + 1;
//   return diceNumber;
// };

// var withinNumber = function () {
//   var randomInteger = Math.ceil(Math.random() * 3);
//   return randomInteger;
// };

// var main = function (input) {
//   var randomDiceNumber = rollDice();
//   var userGuess = Number(input);
//   if (userGuess > 6 || userGuess < 1) {
//     return "Please enter a number from 1 to 6";
//   }
//   var within = withinNumber();
//   var myOutputValue = `within number: ${within} <br><br> number rolled: ${randomDiceNumber} <br><br> your guess: ${userGuess} <br><br> you lose!`;
//   if (Math.abs(userGuess - randomDiceNumber) <= within) {
//     myOutputValue = `within number: ${within} <br><br> number rolled: ${randomDiceNumber} <br><br> your guess: ${userGuess} <br><br> you win!`;
//   }
//   return myOutputValue;
// };

//Dice within 2 dice + 4d

var time4D = false;
var numWins = 0;
var play4d = function (playerGuess) {
  var fourDNum = Math.floor(Math.random() * 10000);
  var outputMessage = `Your guess: ${playerGuess}. 4D number : ${fourDNum}.`;
  if (playerGuess == fourDNum) {
    outputMessage += " You won 4D! congratulations!";
  } else {
    outputMessage += " You did not win 4D.";
  }
  return `${outputMessage} Please enter a dice roll guess. To play 4D again, please play and win the dice game twice`;
};

var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;
  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);
  // it's a number from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var withinNumber = function () {
  var randomInteger = Math.ceil(Math.random() * 3);
  return randomInteger;
};

var dice4d = function (playerGuess) {
  if (time4D) {
    time4D = false;
    return play4d(playerGuess);
  }
};

var main = function (input) {
  if (time4D) {
    time4D = false;
    return play4d(input);
  }
  var diceRoll1 = rollDice();
  var diceRoll2 = rollDice();
  var userGuess = Number(input);
  if (userGuess > 6 || userGuess < 1) {
    return "Please enter a number from 1 to 6";
  }
  var within = withinNumber();

  var myOutputValue = `within number: ${within} <br><br> number rolled: ${diceRoll1} and ${diceRoll2} <br><br> your guess: ${userGuess} <br><br> you lose! <br><br> number of wins: ${numWins}`;
  if (
    Math.abs(userGuess - diceRoll1) <= within ||
    Math.abs(userGuess - diceRoll2) <= within
  ) {
    numWins += 1;
    myOutputValue = `within number: ${within} <br><br> number rolled: ${diceRoll1} and ${diceRoll2} <br><br> your guess: ${userGuess} <br><br> you win! <br><br> Number of wins: ${numWins}`;
    if (numWins == 2) {
      time4D = true;
      numWins = 0;
      myOutputValue = `within number: ${within} <br><br> number rolled: ${diceRoll1} and ${diceRoll2} <br><br> your guess: ${userGuess} <br><br> you win! <br><br> Number of wins: ${numWins}. Time for 4d game next.`;
    }
  }
  return myOutputValue;
};
