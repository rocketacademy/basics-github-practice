// Please declare functions and variables above where they are used.
// Define two global variables to record the displacement of Tom and Jerry
//For every submission, The forward distance of Tom = input
//The forward distance of Jerry = random (10);
//We add the distance of Tom and Jerry to their global displacement 
//We calculate the distance between Tom and Jerry
//Is less or equal to zero, Tom catch Jerry

//Global variables 
var TomPosition = 0;
var JerryPosition = 20; 


var main = function (input) {
  var TomForward = Number(input);   //How far Tom runs in this round
  var JerryForward = getRandomInteger (10);
  TomPosition = TomPosition + TomForward;
  JerryPosition = JerryPosition + JerryForward;
  var Distance = JerryPosition - TomPosition; 

  console.log (JerryForward);
  console.log (TomPosition);
  console.log (JerryPosition);
  var myOutputValue = 'Distance is ' + Distance;
  
  if (Distance <= 0){
    myOutputValue = myOutputValue + 'Caught ';
  };
 
  return myOutputValue;
};



var getRandomInteger = function (max) {
  // produces a float between 1 and max + .999999 etc.
  var randomFloat = (Math.random() * max) + 1;

  // take off the decimal
  var resultInteger = Math.floor(randomFloat);

  return resultInteger;
};