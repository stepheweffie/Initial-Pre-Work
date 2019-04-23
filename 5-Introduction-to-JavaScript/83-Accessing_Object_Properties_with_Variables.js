/* Variables can access 'object' properties by assigning the value of another variable that accesses the data in dot or
bracket notation, or by a matching data type and value or by assigning a function call that returns the value of the data. */

// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber= 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line