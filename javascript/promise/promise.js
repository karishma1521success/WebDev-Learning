// promise is just like a call back but we don't pass any function that's why it is more secure than the callback
/* A Promise is in one of these states:
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.
*/

const fs = require('fs');
console.log("before");
let fileKaPromise = fs.promises.readFile('file1.txt');   // asychrounous operation

fileKaPromise.then(function (data){    // fileKaPromise is fullfilled then run the function  then- fulfilled
    console.log(data + "");
})

fileKaPromise.catch(function (error){
    console.log(error);
})

console.log("after");