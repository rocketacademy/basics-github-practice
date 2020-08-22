// Please declare functions and variables above where they are used.
// Tom & Jerry
// Jerry runs RANDOM distance between 1-10 metres
// Tom needs to GUESS (input) distance between himself and Jerry's next position
// Tom & Jerry's moves are additive
// respectivew total distance tracked by GLOBAL VARIABLES

//global variables: Tom & Jerry individual distances
var tomDist = 0;
var jerryDist = 0;

//Jerry's randomized distance
var jerryRandom = function () {
  //random number 1-10
  var randomDist = (Math.random() * 10) + 1;
  //remove decimal
  var randomDistInteger = Math.floor(randomDist);
  return randomDistInteger;
}

var main = function (input) {
  var jerryRuns = jerryRandom();
  jerryDist = jerryDist + jerryRuns;
  var tomRuns = Number(input);
  tomDist = tomDist + tomRuns;
  var myOutputValue = 'Try harder next time Tom! Tom is at ' + tomDist + ' metres, ' + (jerryDist - tomDist) + ' metres away from Jerry.';
  if (jerryDist == tomDist) {
    var myOutputValue = 'Tom caught Jerry!';
  }

  return myOutputValue;
};
