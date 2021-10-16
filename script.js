//Create a game where a player must correctly guess secret words to win.
//There is 1 secret word for each guess, and the computer randomly chooses that secret word from a set of 3 words: "banana", "chisel" and "faucet".
// To win the game the player must guess correctly twice in total, e.g. the player still wins if she guesses wrongly 1 or more times between her 2 correct guesses. For each guess, output all information such as the guessed word, the secret word, and how many correct guesses the player still needs until she wins.

// Update Secret Word with an additional rule: The player must guess correctly twice in a row to win.
// Update Secret Word game such that the number of times the player needs to guess correctly in a row changes between rounds.
// We define "round" as all gameplay until a player wins. The number of times the player needs to guess correctly is a number from 2 to 4, randomly chosen at the start of the round. When the player wins, the computer updates the number of times the player needs to guess correctly in a row for the upcoming round.

var win = 0;
var randomRound;

var chooseRandomWord = function () {
  var words = ["banana", "chisel", "faucet"];
  var word = words[Math.floor(Math.random() * words.length)];
  return word;
};

var chooseRandomRound = function () {
  var time = [2, 3, 4];
  var round = time[Math.floor(Math.random() * time.length)];
  return round;
};

randomRound = chooseRandomRound();

var main = function (input) {
  var randomWord = chooseRandomWord();
  // console.log(randomRound);

  if (input == randomWord) {
    win = win + 1;

    if (win == randomRound) {
      win = 0; // restart the game
      randomRound = chooseRandomRound(); // choose another win round condition
      return `YOU WIN THE GAME - you chose ${input}, computer chose ${randomWord}`;
    }
    return `CORRECT, you need ${
      randomRound - win
    } win to win the game - you chose ${input}, computer chose ${randomWord}`;
  } else {
    win = 0; // restart the game
    return `INCORRECT, you need ${
      randomRound - win
    } wins - you chose ${input}, computer chose ${randomWord}`;
  }
};
