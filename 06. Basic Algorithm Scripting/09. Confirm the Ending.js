function confirmEnding(str, target) {
  var lastChar = str.substr(str.length-(target.length), target.length);
  console.log("1. " +lastChar);
  console.log("2. " +target);
  if(lastChar == target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding('Bastian', 'n');
//confirmEnding('He has to give me a new name', 'name');
//confirmEnding('Connor', 'n');
//confirmEnding('If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing', 'mountain');
