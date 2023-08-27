const fs = require('fs');
//we will see serail promise means setting an order of promises because asychrounous execution depends on the time it will take so there order is never fixed

let file1KaPromise = fs.promises.readFile('file1.txt');   //doing promise to read a file

file1KaPromise.then(function (data){
    console.log(data + "");
    let file2KaPromise = fs.promises.readFile('file2.txt');
    return file2KaPromise;
}).then(function (data){
    console.log(data+"");
}).catch(function (error){
    console.log(error);
})

//here order is file1   then file2 because file2  promise is inside the file1promise   
//file2 will execute when file1 get executed

let arr = ['./file1.txt' , './file2.txt' , './file3.txt' , './file4.txt'];

let filePromise = fs.promises.readFile(arr[0]);

for(let i=1; i<arr.length; i++){
    filePromise = filePromise.then(function(data){
        console.log("" + data);
        let nextFilePromise = fs.promises.readFile(arr[i]);
        return nextFilePromise;
    })
}

filePromise.then(function(data){
    console.log(data + "");
})