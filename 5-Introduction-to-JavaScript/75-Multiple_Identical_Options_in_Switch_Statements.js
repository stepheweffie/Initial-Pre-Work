// Case statements can share results and if one is satisfied without a 'break' statement, the code will execute until one

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line

  switch (val) {
    case 1:
    case 2:
    case 3:
      answer += "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer += "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer += "High";
      break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
sequentialSizes(1);

