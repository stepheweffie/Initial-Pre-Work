// Variables declared with 'const' are still mutable 

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  // s = [2, 5, 7]; <- this is invalid
  let i = s[s.length -1];
  s.unshift(i);
  s.pop();
  // change code above this line
}
editInPlace();