var numCorrectGuesses = 0;
console.log(`number correct guesses`, numCorrectGuesses);

var main = function (input) {
  var computerWord = generateRandomWord();
  console.log(`computer word`, computerWord);
  console.log(`guess`, input);

  var myOutputValue = `Computer chose "${computerWord}". You chose "${input}". You lose.`;

  if(
    input == computerWord
  ){
    numCorrectGuesses = numCorrectGuesses + 1
    myOutputValue = `Computer chose "${computerWord}". You chose "${input}". One more correct guess to win.`
  };

  if(
    numCorrectGuesses >= 2
  ){
    myOutputValue = `You guessed the correct word twice. You win!`
  };

  return myOutputValue;
};



var generateRandomNum = function(){
  var randomDecimal = Math.random()*3;
  var randomInteger = Math.floor(randomDecimal);
  var oneToThree = randomInteger +1;
  return oneToThree;
};

var generateRandomWord = function(){
  var randomWord = generateRandomNum(3)
 
  if(randomWord == 1){
    return `banana`;
  };

  if(randomWord == 2){
     return `chisel`;
  };

  if(randomWord == 3){
    return `faucet`;
  };

  return `Oops there was a bug`;
};