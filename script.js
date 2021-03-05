// generate secret word from a set of 3 words: "banana", "chisel" and "faucet".

function randomWordNumber() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  return randomNumber;
}

function oneOfSecretWord(randomWordIndex) {
  let secretWord = '';
  if (randomWordIndex == 1) {
    secretWord = 'banana';
  }
  else if (randomWordIndex == 2) {
    secretWord = 'chisel';
  }
  else if (randomWordIndex == 3) {
    secretWord = 'faucet';
  }
  return secretWord;
}

let correctAnswers = 0;

var main = function (input) {

  let randomWordIndex = randomWordNumber();
  let randomSecretWord = oneOfSecretWord(randomWordIndex);
  let result = `you guessed ${input}, the secret word is ${randomSecretWord}, You Lost.you still need ${2 - correctAnswers} correct guesses to win.`;



  if (randomSecretWord == input) {
    correctAnswers += 1;
    let correctAnswersRequired = 2 - correctAnswers;

    if (correctAnswersRequired != 0) {
      result = ` you guessed ${input}, the secret word is ${randomSecretWord}, you still need ${correctAnswersRequired} correct guesses to win.`;
    }

    else {
      result = `you guessed ${input}, the secret word is ${randomSecretWord}, you WON!!.`;
      correctAnswers = 0;
    }
  }
  return result;
}
