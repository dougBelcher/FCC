function destroyer(arr) {
  // Remove all the values
  //console.log(arr);
  var args = Array.prototype.slice.call(arguments, 1);
  for (i=0; i<args.length; i++) {
    console.log(args[i]);
	newArray = arr.filter(evalNumber, args[i]);
  }
  return arr;
}
function evalNumber(value) {
	console.log(value);
	return value !== this.args[i];
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

__________________________________________

newArray = arr.filter(evalNumber, args[i]);

function evalNumber(value, index, array) {
	return value !== this.args;
}

newArray = arr.filter(function (value,index, array, args[i]) {return value !== this.args});

This works__________________________________________
function destroyer(arr) {
  // Remove all the values
  var value = [];
  for (var i = 1; i < arguments.length; i++){
    value.push(arguments[i]);
  }
  return arr.filter(function(a) {
    return a != value[0] && a != value[1];
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

This works___________________________________________
function destroyer(arr) {
  // Remove all the values
  var allList = Array.prototype.slice.call(arguments, 1);
  newArray = arr.filter(function(evalNumber){
     return evalNumber !== allList[0] && evalNumber!== allList[1];
 });

  return newArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

