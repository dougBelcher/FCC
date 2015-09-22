function bouncer(arr) {
  // Filter out anything that does not pass Boolean function
  // Execute Boolean function to strip out falsey
  return arr.filter(checkBool);
}
function checkBool(arg) {
  return Boolean(arg) ;
}
bouncer([7, 'ate', '', false, 9]);