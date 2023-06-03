//promisified function is that function which returns the promise
function promisifiedFunc(){
    return new Promise(function (resolve,reject){    // It is a syntax of the promisified function.
        let a=1;
        let b=1;
        if(a==b){
            resolve("Equal");  // this resolve is for promise then function
        }else{
            reject("Not Equal");   //this is for promise catch function.
        }
    })
}

let somePromise = promisifiedFunc();

somePromise.then(function (x){
    console.log(x);     // here x = Equal because resolve is for then function of promise
})

somePromise.catch(function (error){
    console.log(error);
})