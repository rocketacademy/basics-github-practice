/*
Day 4 in-class: Secret Word Game
1. For each guess there is one secret word.
2. Randomy chosen from three words: "banana", "chisel", & "faucet".
3. To win player guess correct two times.
4. After each guess ouput all guessed word, secret word and how many correct guesses needed to win.
*/

// Global Variable
var reqCorrectGuess = 2;
var currentCorrectGuess = 0;

// Get random value from array
var rollSecretWord = function () {
  var secretWordList = ['banana', 'chisel', 'faucet'];
  var randSecretWord = secretWordList[Math.floor(Math.random() * secretWordList.length)];
  console.log(randSecretWord);
  return randSecretWord;
};

var main = function (input) {
  var secretWord = rollSecretWord();
  var myOutputValue = 'Your guess word is ' + input + '. The secret word is ' + secretWord + '!';
  if (secretWord == input) {
    currentCorrectGuess += 1;
    if (currentCorrectGuess >= reqCorrectGuess) {
      currentCorrectGuess = 2;
      return myOutputValue + ' you guessed second time correctly, you win!';
    }
    return myOutputValue + ' Good job! Now you need to guess the second time to win!';
  }
  var remainingCorrectGuess = reqCorrectGuess - currentCorrectGuess;

  return 'Sorry your guess is incorrect, you need ' + remainingCorrectGuess + ' correct guesses to win';
};
