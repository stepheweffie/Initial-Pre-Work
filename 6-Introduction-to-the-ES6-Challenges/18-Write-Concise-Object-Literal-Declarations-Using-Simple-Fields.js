// ES6 allows simplification of object fields when returned in functions  

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name, age, gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object