// we have three keywords to declare a variable 


// var keyword
console.log(a);    // In var declaration it will give undefined due to hoisting [[so hoisting is possible in var]]
var a;
a=10;              // also in var  we can declare like this also     var a=10; (declaration with initilization)
console.log(a);    
a=12;              // re -initilization also possible in var keyword
var a= 20;          // this re-declaration is also possible in var that will not give any error


//let keyword
console.log(b);   // this will give an error because memory got allocated but in the case of let we cannot access that variable before initilization (because hoisting done in temporary dead zone) 
let b;           
b=10;            // also in var  we can declare like this also     let b=10; (declaration with initilization)
console.log(b);

b=20;           // re-intilization can be possible in let

// let b=30;    // re-declaration is not possible in let if we do so then it will give an error
 

//const keyword
console.log(c); // this will give an error because memory got allocated but in the case of const we cannot access that variable before initilization (because hoisting done in temporary dead zone) 
const c =20;     // we can't initilize const variable like this const c;   c=20; 
 
// c=30;              // In const re-initilization is not possible

// const c= 30;        // In const re-declaration is also not possible.