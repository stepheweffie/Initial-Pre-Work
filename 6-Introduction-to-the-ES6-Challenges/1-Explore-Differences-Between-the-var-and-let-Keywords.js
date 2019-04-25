/* The 'let' keyword declares variables but does not allow them to be redeclared like var does. Strict Mode can be
enabled with "use strict" which will catch common errors */

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();