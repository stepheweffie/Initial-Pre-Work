// The strict equality operator, '===', does not perform a data type conversion like the equality operator.

// Setup
function testStrict(val) {
  if (val===7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);