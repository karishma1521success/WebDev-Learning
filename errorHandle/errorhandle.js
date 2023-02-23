//Error handling in js

//1. TRY AND CATCH METHOD    --- always use try and catch in main function not dependent function
function mutliply(c){
   return c;
}

function math(a,b){
   try{
   console.log(d);                            // clearly it has obvious that d is not defined so it will throw and error to handle this we'll use try and catch error method
   return mutliply(a*b);
   } catch(error){
      console.log("error is "+ error );     // It will exectued only when there is error
   }finally{
      console.log("finally is invoked");     // It will exectued when there is error or not in both
   } // we don't use as much in company.
}

console.log(math(1,2));      /*error is ReferenceError: d is not defined                     VM377:10 undefined*/
//tell error like this and solve it








/* Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
   [This error occur due to  1.cannot access the element   2. script tag is written on the wrong place]
    Handle by -- 1. check that accessing the correct html element.
             2. check the script tag

*/



