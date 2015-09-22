var array = [4,5,6,7,8];
var singleVal = 0;
// Only change code below this line.
singleVal = array.reduce(function(a,b) {
	return a + b;
});
// Only change code above this line.
(function() {return singleVal;})();