let cal = require("./calculator");   // This is our own created module that we accessed
console.log(cal);      // require does 1. read file   2. exectue file  3. return an object which module.exports contains

console.log(cal.addition(3,4));   // here I accessed the calculator function
// same we can do with the other functions

