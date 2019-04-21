//  A queue adds an item to the end of an array and removes the first

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var q = arr[0];
  arr.shift();
  return q;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));