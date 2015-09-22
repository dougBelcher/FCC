function mutation(arr) {
  // Converted both arrays to uppercase and split into separate arrays
  arr0 = arr[0].toUpperCase().split('');
  arr1 = arr[1].toUpperCase().split('');
  // Step through the array used to match
  for (i=0; i<arr[1].length; i++) {
	// Put result of match into idx, -1 means not found
    var idx = arr0.indexOf(arr1[i]);
    console.log(idx);
    if (idx == -1) {
      return false;
    }
  }
  return true;
}

//mutation(['hello', 'hey']); // returns false
//mutation(['abcdefghijklmnopqrstuvwxyz', 'Not Even']); //returns false
//mutation(['Hello', 'hEy']); // returns false
//mutation(['HeLlO', 'hEllo']); // returns true
mutation(['abcdefghijklmnopqrstuvwxyz', 'NotEven']); //returns true