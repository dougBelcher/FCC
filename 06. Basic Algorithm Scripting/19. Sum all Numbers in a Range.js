function sumAll(arr) {
  // Get the max number in the array
  var max = Math.max.apply(null, arr);
  // Get the min number in the array
  var min = Math.min.apply(null, arr);
  // Set a var to return
  var p = 0;
  for (i=min; i<max+1; i++) {
    p = i+p;
  }
  return(p);
}

//sumAll([1, 4]);
//sumAll([4, 1]);
//sumAll([5, 10]);
sumAll([10, 5]);