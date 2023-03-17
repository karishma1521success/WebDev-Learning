// Node is the run time environment which can run on the server (like google playstore node has npm (node package manager))
// child process is an in-built property in node
// child process run the small small process on the other hand at the same time. 

let cp = require('child_process');
console.log(cp); // This will return an object having keys : _forkChild, ChildProcess, exec , execFile, execFileSync, execSync, fork, spawn, spawnSync and all these having an value of a function

//note  = windows = 'calc'   ,  linux = 'gnome-calculator'  mac = open -a Calculator
cp.execFileSync('calc');


// opens vs code with the child process
cp.execSync('code');