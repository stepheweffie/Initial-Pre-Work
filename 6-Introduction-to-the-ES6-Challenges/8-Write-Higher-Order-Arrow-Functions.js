// Higher order arrow functions can use 'filter()', 'map()', and 'reduce()' to chain functions together

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter((n) => n > 0 && n % parseInt(n) === 0 ).map( (n) => Math.pow(n, 2) );
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);