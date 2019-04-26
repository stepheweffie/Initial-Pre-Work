/* The 'rest' operator will take all arguments (n) passed into a function and insert them into an array of length n
 And the 'spread' syntax will combine arrays like 'concat'. */

const sum = (function() {
  "use strict";
  return function sum(...args) {
    //const [...args] = [...n];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6