function getIndexToIns(arr, num) {
  // Check if number already on array, push number onto the array if not
  if (arr.indexOf(num)==-1) {
    arr.push(num);
  }
  // Sort the array to get it in the correct order, use compareNumbers function for numbers
  arr.sort(compareNumbers);
  // Display the resulting array
  //console.log(arr);
  // Step through the array to find the index
  for (i=0; i<arr.length; i++) {
    if (arr[i] == num) {
      //console.log(i);
      return i;
    }
  }
  return i;
}
function compareNumbers(a, b) {
  return a - b;
}

//getIndexToIns([20, 10, 60, 30, 40, 70], 50);
//getIndexToIns([10, 20, 30, 40, 50], 35);
//getIndexToIns([10, 20, 30, 40, 50], 30);
//getIndexToIns([40, 60], 50);
//getIndexToIns([3, 10, 5], 3);
//getIndexToIns([5, 3, 20, 3], 5);
//getIndexToIns([2, 20, 10], 19);
//getIndexToIns([2, 5, 10], 15);
