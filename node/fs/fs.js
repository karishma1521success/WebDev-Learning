/**
 * Common use for the File System module:
Read files
Create files
Update files
Delete files
Rename files
 */

let fs = require('fs');   // This will also return an object [this module tells about related to file system]
console.log(fs);          // require does 1. read file   2. exectue file  3. return an object which module.exports contains
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
// fs.unlinkSync(newFilePath);

// CRUD FOR DIRECTORY ***************************************************
//I want to create a new directory for that I want to create the new directory path
// C - create for directory
let newDirPath = pathFile.join(__dirname , "newDirectory");
console.log(newDirPath);
if(!fs.existsSync(newDirPath)){      // fs.existSync(path) - is method to check whether directory if present or not
    fs.mkdirSync(newDirPath);   // This will created a new Directory in same folder where this file exist   
}

// now I am adding a file in the new created directory 

let dirFilePath = pathFile.join(newDirPath, "dirFilePath.txt");
console.log(dirFilePath);

fs.writeFileSync(dirFilePath , "heyy I can new created file inside the new Created directory using ");


//R - read operation of Directory
let readDir = fs.readdirSync(newDirPath , 'utf-8');
console.log(readDir);
//but if this directory with the same name is existed already then it will give an error-- This will resolve by setting the condition in if block
//D- delelte for directory
// fs.rmdirSync(newDirPath);

let jsPath = "E:\Carrer\weblearning\javascript";
console.log(fs.readdirSync(jsPath));


