function where(arr, num) {
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

//where([20, 10, 60, 30, 40, 70], 50);
//where([10, 20, 30, 40, 50], 35);
where([10, 20, 30, 40, 50], 30);