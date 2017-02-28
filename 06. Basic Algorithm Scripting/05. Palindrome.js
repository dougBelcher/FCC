function palindrome(str) {
  str = str.replace(/[\W_]/g, '').toLowerCase();
  return str == str.split('').reverse().join('').toLowerCase();
}

palindrome("e -y -e");
