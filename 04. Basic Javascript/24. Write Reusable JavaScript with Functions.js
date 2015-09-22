24. Write Reusable JavaScript with Functions
var a = 4;
var b = 5;

ourFunction = function() {
  return a - b;
};

//Don't modify above this line
//Create a function called myFunction that returns the value of a plus b.
  // Only change code below this line.

myFunction = function(a,b) {
  return a + b;
};


// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
if(typeof(myFunction) !== "undefined"){
var f=myFunction(a,b);
(function(){return(f);})();
}