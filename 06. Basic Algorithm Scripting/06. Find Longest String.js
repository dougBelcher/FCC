function findLongestWord(str) {
  var ary = str.split(' ');
  var lngth = 0;
  for (i=0; i<ary.length; i++) {
    var len = ary[i].length;
    if (len > lngth) {
      lngth = len;
    }
  }
  console.log(lngth);
  return lngth;
}

findLongestWord('The quick brown fox jumped over the lazy dog');