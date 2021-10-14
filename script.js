var generate = function () {
  const words = ["banana", "chisel", "faucet"];
  var select = words[Math.floor(Math.random() * words.length)];
  return select;
};

var word = generate();
var gamesWon = 0;
var guesses = 0;

var main = function (input) {
  if (input == word) {
    gamesWon += 1;
    guesses +=1;
    word = generate();
    if (gamesWon == 2) {
      return "Game Reset " + "Your Guess: " + input + " The word: " + word + " Games Won: " + gamesWon;
    }
    else {
      return "Your Guess: " + input + " The word: " + word + " Games Won: " + gamesWon;

    }
    
  }
  else{
    guesses = 0;
    gamesWon = 0;
    word = generate();
    return "That was incorrect. "+ "Your Guess: " + input + " The word: " + word + " Games Won: " + gamesWon;
  }

};
