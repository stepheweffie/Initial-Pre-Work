// Local variables are only visible inside their functions

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = "something";
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope


// Now remove the console log line to pass the test
