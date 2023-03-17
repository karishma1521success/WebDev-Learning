let fs = require('fs');   // This will also return an object [this module tells about related to file system]
console.log(fs);
// we can perfom CRUD operation using fs module

let pathFile = require('path');
let newFilePath = pathFile.join(__dirname , "newFile.txt")
console.log(newFilePath);
console.log("hey " + __dirname);

// C - create  
// It create new file it it doesn't exist or else overwrite it
fs.writeFileSync(newFilePath, "hello I am new file created using file system module");      // It needs two arguments - 1. path  2.data [used to write something in path file] 

//R-read 
// It will read all the data (takes two arguments 1. file path 2. utf-8)
let fileContent = fs.readFileSync( newFilePath , 'utf-8');
console.log(fileContent);

//U - update
// It will add the updated content at the end  [ needs two arguments 1, file path   2. updated data]
fs.appendFileSync(newFilePath, "hey I am update content");

//D - Delete
// It will delete the file (needs one arguments 1. file)
fs.unlinkSync(newFilePath);


