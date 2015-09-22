function repeat(str, num) {
  var dup = str;
  if(num > 0) {
  for (i=0; i<num-1; i++) {
    dup = dup + str;
    console.log(dup);
    }
  return dup;
  } else return '';
}

//repeat('abc', 3);
//repeat('*', 3);
repeat('*', -2);