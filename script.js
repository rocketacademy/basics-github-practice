var correctCounter = 0; //Define the default win counter as zero

var main = function (input) {
  var randomSecretWord = secretWordReturn ();
  console.log (randomSecretWord);
  
  // Perform input validation
  if (input != "banana" && input != "chisel" && input != "faucet") {
    var myOutputValue = 'Please enter "faucet", "chisel" or "banana" to play.'
  }

  // 1st win statement with counter increment by 1 to track win times
  else if (input == randomSecretWord && correctCounter == 0 ) {
    myOutputValue = `You guess ${input}, the secret word is ${randomSecretWord}, keep guessing to win the 2nd time.`
    correctCounter = correctCounter + 1;
  }
  
  // 2nd win statement with counter reset to zero
  else if (input == randomSecretWord && correctCounter == 1 ) {
    myOutputValue = `You guess ${input}, the secret word is ${randomSecretWord}, you have win twice, good job!`
    correctCounter = 0;
  }
  
  // Keep track of how many wins remaining in between losses
  else if (input != randomSecretWord && correctCounter == 1) {
    myOutputValue = `You guess ${input}, the secret word is ${randomSecretWord}, you have to guess correctly one more time.`    
  }

  // Default statement for all non-defined conditions
  else {
    myOutputValue = `You guess ${input}, the secret word is ${randomSecretWord}, please try again.`    
  }

  return myOutputValue;
};

// Use random numbers to generate word return logic
var secretWordReturn = function () {
  var randomDecimal = Math.random () * 3; // Define random numbers between 0 to 3
  var randomInteger = Math.floor (randomDecimal); // Define integers 0, 1 ,2 

  if (randomInteger == 0) return "banana"; // If random number is 0, return "banana"
  else if (randomInteger == 1) return "chisel"; // If random number is 1, return "chisel"
  else return "faucet"; // All other numbers, return "faucet"
}