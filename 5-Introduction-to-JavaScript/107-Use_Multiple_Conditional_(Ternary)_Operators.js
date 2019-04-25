// Ternary operators can be combined to create multi conditional statements 

function checkSign(num) {
  return (num == 0) ? "zero" : (num < 0) ? "negative" : "positive";
}

checkSign(10);