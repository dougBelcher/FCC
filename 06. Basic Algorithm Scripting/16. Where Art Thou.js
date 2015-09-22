function where(collection, source) {
  var arr = [];
  // Extract enumerated properties, i.e. last or first from source
  var matchKey = Object.keys(source);
  // What's in a name?
  for (var item in collection) {
     if (collection[item][matchKey] === source[matchKey]) {
    arr.push(collection[item]);
   }
  }
  return arr;
}
//where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });  // reurns Tybalt Capulet
where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { first: 'Romeo' });  // returns Romeo Montague