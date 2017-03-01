function getIndexToIns(arr, num) {
  // Push the number to be added onto the array
  arr.push(num);
  // Sort the array to get it in the correct order
  arr.sort();
  // Display the resulting array
  console.log(arr);
  // Step through the array to find the index
  for (i=0; i<arr.length; i++) {
    if (arr[i] == num) {
      console.log(i);
      return i;
    }
  }
  return i;
}

//getIndexToIns([20, 10, 60, 30, 40, 70], 50);
//getIndexToIns([10, 20, 30, 40, 50], 35);
getIndexToIns([10, 20, 30, 40, 50], 30);
//getIndexToIns([40, 60], 50);
//getIndexToIns([3, 10, 5], 3);
//getIndexToIns([5, 3, 20, 3], 5);
//getIndexToIns([2, 20, 10], 19);
//getIndexToIns([2, 5, 10], 15);
