// function  is a set of statments that takes inputs and perform some operations and return the output
// function are first class citizen in js. *********
// function is used when we want to do same operation again and again at different places then we group that code into the function and can be used just by calling them
// remove redudancy of code, increase readability of code, changes become easy .

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
        // sub(a,b) --invalid  (if we cannot no longer call the function by it's name in function expression there is not compulsory to give the function name)
        let b = function (a,b){              // imp - those function who don't have name that called as UNANIMOUS FUNCTION
            return a-b;
        } // we can write function expression like this too.without the function name.

// IIFE - Immediately Invoked Function Expression
// syntax--                   (function(parameters){ block of code})();              // no function name in IIFE

(function (){
    console.log("hello from IIFE");    // IIFE without the parameters
})();

(function (a,b){
   let c= a*b;
   console.log(c);                  // function with the parameters
})(3,4); 





// HIGHER ORDER FUNCTIONS  - It is that function which has function in parameters (means function is passed as an arguments)
// syntax -   function function_name(function){}          calling    function_name(function);
function paraFunction(a,b){
    return a+b;
}
//note: If we pass the function as an argument that it is called callback function
function higherFunction (para_Function){
   let sum =  para_Function(1,2);
   return sum;
}
 // note -- we dont call the function in arguments and the parameters. we just pass the function name.
let ans = higherFunction(paraFunction);
console.log(ans);

 

// create a function which recieve n numbers arguments and return it's sum 
// so for n arguments we have to take n arguments manually but it will be hectic task to do this function sum (a,b,c,d,e,f,g,h...)
// so there is a operator to take n number of arguments that is called as rest operator (...nameOfargument)
//rest operator is uesd to take mutliple dynamic parameters. (means no.of parameters decided when we called the function and pass the arguments)
let sumOfN = 0;
function consoleN_numbers (...args) {
    console.log(args);      // it return an array 
    args.forEach((value) => {sumOfN += value});
}


consoleN_numbers(1,2,3,4,5,6,7);   //returns [1,2,3,4,5,6,7]
console.log(sumOfN);


//default parameter function ; 
let hey = function (arr = ['a' , 'b']){
    let sum = arr[0] + arr[1] + arr.length;
    console.log(sum);
}  // this arr in parameter will take as default parameter when no arguments will pass if pass then this default arr will not work