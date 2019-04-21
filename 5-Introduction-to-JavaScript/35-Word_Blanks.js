// Vriables can be passed into functions with a function call 

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";
    result += "My " + myAdjective + " " + myNoun + " " + myAdverb + " " + myVerb + ".";
  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");