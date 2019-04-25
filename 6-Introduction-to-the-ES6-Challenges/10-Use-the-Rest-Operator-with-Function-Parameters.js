/* The 'rest' operator will take all arguments (n) passed into a function and insert them into an array of length n
 And the 'spread' syntax will combine arrays like 'concat'. I am not sure how to overcome the error in this proplem.
 The console is asking to use 'spread' on args, but it seems like a mistake. */

const sum = (function() {
  "use strict";
  return function sum(...n) {
    const args = [ ...n ];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6