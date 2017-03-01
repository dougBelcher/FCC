function destroyer(arr) {
  // Remove all the values
  var value = [];
  for (var i = 1; i < arguments.length; i++){
    value.push(arguments[i]);
  }
  return arr.filter(function(a) {
    return !value.includes(a);
  });
}

//destroyer([1, 2, 3, 1, 2, 3], 2, 3);
//destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
//destroyer(["tree", "hamburger", 53], "tree", 53);
