function slasher(arr, howMany) {
  var arr1 = arr.slice(howMany);
  arr = arr1;
  return arr;
}

slasher([1, 2, 3], 2);
//slasher([1,2,3], 0);
//slasher([1,2,3], 9);