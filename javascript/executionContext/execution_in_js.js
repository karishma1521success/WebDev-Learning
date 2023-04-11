// Here we understand how javascript code runs 

// JavaScript code runs from top to bottom and left to right
// Note : Memory allocates first then execution happens 

// Before Execution global Execution context add on call stack 
// Execution context has two thing global and this and have two parts memory allocation and code execution
// whenever function Executes a function add on call stack and created a another execution context and in that context first memory allocates and then function code executes

console.log(a);  // here we can access the a variable due to var keyword and variable hoisting 
// if a is declared with let then this line will give an reference error

var a = 10;

console.log(a);

function fun(){
    var b=20;
    return b;
}

console.log(c);

var c= 30;
var d = fun();

console.log(d);

// this whole code gives a result:   undefined  10  undefined 20  
// and see the whole execution in images which you find inside the execution context folder

