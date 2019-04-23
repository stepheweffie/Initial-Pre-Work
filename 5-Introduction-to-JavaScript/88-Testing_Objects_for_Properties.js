// The 'hasOwnProperty' function will check for the presence of an 'object' property and returns true or false

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  var check = myObj.hasOwnProperty(checkProp);
  if (check) {
    return myObj[checkProp];
  }
  else {
    return "Not Found";
  }
}

// Test your code by modifying these values
checkObj("gift");