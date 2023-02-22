// function  is a set of statments that takes inputs and perform some operations and return the output
// function are first class citizen in js. *********
// function is used when we want to do same operation again and again at different places then we group that code into the function and can be used just by calling them

//function  in js 
// Syntax       function function_Name(parameters){ block of code}   


function sayHello(){
    console.log("hello");                        // function without the parameters and no return value
}

sayHello();


function add(a,b){                                       // In js there is no need to tell the data type of the  ---                                                        parameters and the return type
    let c=a+b;
    console.log("The sum of two number is " + c);         //function with the parameters and no return value
}                               

add(2,3);

function mul(a,b){
    return a*b;                                           // function with the parameters and the return value
}

let mulAns = mul(2,3);                // calling of a function
console.log(mulAns);

//IMP -- 
//storing a function into the variable called FUNCTION EXPRESSION*********************************************************************
let a = function sub(a,b){                                   //here we store the function into the variable and -- --                                                                the output will store to the variable a.
            return a-b;
        }  

        //now we can call the function by the call of variable only in this case we cannot call the function by its name now (imp)
        console.log(a(3,1));
        // sub(a,b) --invalid 

// IIFE - Immediately Invoked Function Expression
// syntax--                   (function(parameters){ block of code})();              // no function name in IIFE

(function(){
    console.log("hello from IIFE");    // IIFE without the parameters
})();

(function(a,b){
   let c= a*b;
   console.log(c);                  // function with the parameters
})(3,4); 
 
