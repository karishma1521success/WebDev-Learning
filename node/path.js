// "E:\Carrer\weblearning\node\path.js"
let path = require('path'); // returns an object
console.log(path);           // require does 1. read file   2. exectue file  3. return an object which module.exports contains

// returns an extension of the file (ex .js)
let extentsion = path.extname("E:\Carrer\weblearning\node\path.js"); // takes a argument of file's path
console.log(extentsion);   

//baseName returns an file name (like path.js)
let baseName = path.basename("E:\Carrer\weblearning\node\path.js")  // takes a argument of file's path
console.log(baseName);

//_dirname give the path of directory in which this file exists
let directoryName = __dirname;
console.log(directoryName);

//_filename gives the file's path of its own
let filePath = __filename; 
console.log(filePath);

console.log(path.join(directoryName,"karishma.js"));   //join returns the path in string format
