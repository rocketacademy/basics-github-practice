var banana = 'banana'
var chisel = 'chisel'
var faucet = 'faucet'
var numOfCorrectGuesses = 0

var main = function (input) {
  var result = checkResult(input)
  console.log(`player guess ${input}`);
  return result
};


var getWordRandom = function () {
  var secretWords = ["banana", "chisel", "faucet"];
  var randomWord = secretWords[Math.floor(Math.random() * secretWords.length)];
  return randomWord;
};

var checkResult = function (input) {
  var secretWords = getWordRandom ()
  console.log(`secret word ${secretWords}`);

if (input == secretWords) {
  numOfCorrectGuesses += 1
  console.log(`number of correct guesses ${numOfCorrectGuesses}`);
};

if (numOfCorrectGuesses >= 2) {
  return `you win!`
}
else {return `one more correct guess to win!`};
};
