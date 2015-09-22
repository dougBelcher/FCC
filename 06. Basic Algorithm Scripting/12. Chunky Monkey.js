function chunk(arr, size) {
  var arr1 = [];
  for(i=0, x=size; i<arr.length; i+=size, x+=size) {
    arr1.push(arr.slice(i, x));
  }
  return(arr1);
}

chunk(['a', 'b', 'c', 'd'], 2);
//chunk([0,1,2,3,4,5], 3);
//chunk([0,1,2,3,4,5], 2);
//chunk([0,1,2,3,4,5], 4);
