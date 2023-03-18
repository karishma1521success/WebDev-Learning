let os = require('os');  // require does 1. read file   2. exectue file  3. return an object which module.exports contains
console.log(os);  // This will return the object and this method is used for getting the details about operating system

console.log(os.hostname());  // This will return the hostname of an os (in my case it's returning karishma)

console.log(os.arch());     // This will return the byte of os (in my case it's x64)

console.log(os.networkInterfaces());    // This will return an object and having the key:value pair which tells about the network details

console.log(os.userInfo());    // returns the user info object [in my case it's returning an object of
/*{
    uid: -1,
    gid: -1,
    username: 'karis',
    homedir: 'C:\\Users\\karis',
    shell: null
  }]*/
// if we use os.userInfo only then it will give whole function but did not run for running the function we have to call the function