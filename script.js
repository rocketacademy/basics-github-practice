var generate = function () {
  const words = ["banana", "chisel", "faucet"];
  var select = words[Math.floor(Math.random() * words.length)];
  return select;
};

var word = generate();
var gamesWon = 0;

var main = function (input) {
  if (input == word) {
    gamesWon += 1;
    word = generate();
  }
  return input + " " + word + " " + gamesWon;
};
