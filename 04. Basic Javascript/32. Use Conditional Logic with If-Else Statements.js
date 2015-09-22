32. Use Conditional Logic with If-Else Statements
function myFunction(){
  var flip = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
  // Create an if-else statement here to return "heads" if flip is 0. Otherwise return "tails".

  // Only change code below this line.
  console.log(flip);
if (flip === 0) {
  return("heads");
} else {
  return("tails");
}

}

// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
(function(){return(myFunction());})();