/* The equality operator, '==', checks for equivalent values but does not assign values. Type Coercion will convert one
 data type to another for comparison. */

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);