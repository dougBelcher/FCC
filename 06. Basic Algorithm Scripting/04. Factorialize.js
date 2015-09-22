function factorialize(num) {
  var f = 1;
  for (i=1; i<num+1; i++) {
    f *= i;
  }
  return f;
}

factorialize(5);