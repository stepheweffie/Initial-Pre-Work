/* A conditional statement will define parameters under which a program will or will not take steps. An 'if' statement
can take Boolean conditions that can only be 'true' or 'false' and if the conditional variable is equal to 'true', the
code block in the if statement curly brackets will execute. */

// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {
  // Only change code below this line.
  if (wasThatTrue) {
      return "Yes, that was true";
  }
  return "No, that was false";
  // Only change code above this line.
}

// Change this value to test
trueOrFalse(false);