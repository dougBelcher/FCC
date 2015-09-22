function end(str, target) {
  var lastChar = str.substr(str.length-(target.length), target.length);
  console.log(lastChar);
  if(lastChar == target) {
    return true;
  } else {
    return false;
  }
}

//end('Bastian', 'n');
//end('He has to give me a new name', 'name');
//end('Connor', 'n');
end('If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing', 'mountain');