function reverseString(str) {
  // split the string (str) into an array (ary)	
  ary = str.split('');
  // reverse the element of the array (ary)
  ary.reverse();
  // convert the array (ary) back into a string (str)
  str = ary.join('');
  console.log(str);
  return str;
}

reverseString('hello');