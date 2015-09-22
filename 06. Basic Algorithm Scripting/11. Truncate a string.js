function truncate(str, num) {
  var newStr = str.slice(0, num-3);
  if(num < str.length) {
    newStr = newStr + "...";
    //console.log(newStr);
    return newStr;
  } else {
    //console.log(str);
    return str;
  }
}

truncate('A-tisket a-tasket A green and yellow basket', 11);