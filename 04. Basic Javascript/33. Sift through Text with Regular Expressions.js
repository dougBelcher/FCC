33. Sift through Text with Regular Expressions
var test = (function() {
  var testString = "George Boole and Alan Turing went to the shop and got some milk";
  var expressionToGetMilk = /milk/gi;
  // Only change code below this line.

  var expression = /and+/gi;

  // Only change code above this line.
  // We use this function to show you the value of your variable in your output box.
  return(testString.match(expression).length);
})();(function(){return(test);})();