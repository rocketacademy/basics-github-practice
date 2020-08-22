// Please declare functions and variables above where they are used.
var jerrysPosition = 0;
var tomsPosition = 0;

var getRandomNumFrom1To10 = function () {
  var randomDecimal = Math.random() * 10;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

var main = function (input) {
  var myOutputValue = 'Tom did not catch Jerry. ';
  var jerrysNextPosition = getRandomNumFrom1To10();
  jerrysPosition += jerrysNextPosition;
  tomsPosition += parseInt(input);
  if (jerrysPosition == tomsPosition) {
    myOutputValue = 'Tom has caught Jerry! ';
  }
  myOutputValue += 'Total distance of Jerry = ' + jerrysPosition + ' Total distance of Tom = ' + tomsPosition;
  return myOutputValue;
};
