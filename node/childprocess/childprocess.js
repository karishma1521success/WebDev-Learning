// Node is the run time environment which can run on the server (like google playstore node has npm (node package manager))
// child process is an in-built module in node
// child process run the small small process on the other hand at the same time. 

let cp = require('child_process');    // require does 1. read file   2. exectue file  3. return an object which module.exports contains
console.log(cp); // This will return an object having keys : _forkChild, ChildProcess, exec , execFile, execFileSync, execSync, fork, spawn, spawnSync and all these having an value of a function

//note  = windows = 'calc'   ,  linux = 'gnome-calculator'  mac = open -a Calculator
// cp.execFileSync('calc');


// opens vs code with the child process
// cp.execSync('code');

// run another file with the help of child process module
let anotherFileContent = cp.execSync("node anotherFile.js");  // running js file like this
console.log (anotherFileContent);   //Here we accessing the file but the data of file is in the binary format so if we want the data as its is not in binary format add the string
console.log(" " + anotherFileContent )
console.log("running another txt file using childprocess module of node" + cp.execSync("heyy.txt")) // text file like this 
console.log("html file " + cp.execSync("index.html"));
