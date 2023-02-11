// topics -  variables, declaration + initilization , alert, propmt , confirm and parseInt() method

console.log("hello from intro.js file");

let num = prompt("Enter the number");     // declaration  + initilization

console.log(num);   // this is something which is not the syntax of js it becomes from the javascript engine(browser)
document.write("hello with the document.write method of js \n");  // this is the js method which is used to print something in the html body.(webpage)
document.write(num);    // print + cursor on the same line( just as System.out.print(""); in java)


// Interactions in js -- alert , prompt , confirm  methods  *****************************************************
// click ok - will close the alert pop up
  alert("This is alert box which can contain any message in the form of alert"); 
 
// a pop up will display to take an input from the user
// click on cancel then prompt will return null (which datatype is object).
 var age =  parseInt(prompt("Enter your age" , karishma));   // default output data type of prompt is string it return the string as output
 document.write(age + "" +  typeof age);

 // A confirm pop up will display
 // click ok - true   
 // click cancel - false
  var adult = confirm("are you adult");
  document.write(adult);


   // variables in js *****************************************************************
   // we have 3 keywords for declaring the variable in js latest version that are     let, var and const

   //Hoisting:   It moves the function, variable and class value to the top of their scope.

   // hoisting in js is behaviour in which a variable and a function can be used even before the declaration

