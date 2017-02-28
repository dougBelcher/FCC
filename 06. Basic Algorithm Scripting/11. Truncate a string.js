function truncateString(str, num) {
  console.log("1. " + num);
  if (num < str.length) {
    if (num >3) {
    num -= 3;
    }
  }
  console.log("1.1 " + num);
  var newStr = str.slice(0, num);
  if(num < str.length) {
    newStr = newStr + "...";
    console.log("2. " + newStr);
    return newStr;
  } else {
    console.log("3. " + str);
    return str;
  }
}

//truncateString('A-tisket a-tasket A green and yellow basket', 11);
//truncateString('Peter Piper picked a peck of pickled peppers', 14);
//truncateString('A-tisket a-tasket A green and yellow basket','A-tisket a-tasket A green and yellow basket'.length);
//truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length + 2);
truncateString('A-', 1);
//truncateString('A-', 2);
