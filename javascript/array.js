// array in js is a object which is used to store the muliple values together in a single variable.

let arr = [];              // empty array ( array without any elements)
console.log(arr);           // we can direct access all the elements of the array by using the variable name. but we can't do this in java


let arr1 = [1,2,3,"hello",3.4,true,NaN,7];       // array with the elements
console.log(arr1);

console.log(arr1[0]);                 // access elements of array (0-based indexing)
console.log(arr1[6]);                 

arr1[3] = "bye"                       // changing the elements of an array
console.log(arr1);     


// ARRAY METHODS*************************************************

// 1. push -- It is a method  that added the element to an array at the last.
arr1.push(59393);                         // syntax -->       array_Name.push(data);
console.log(arr1);

//2. pop -- It is a method that is used to remove an element from an array at the last
arr1.pop();                            //Syntax -->          array_Name.pop();
console.log(arr1);

//3. shift -- It is a method that is used to remove an element from an array at the start (it is similiar to the pop but the subtle difference is that it removed from the start)
arr1.shift();                            //Syntax -->          array_Name.shift();
console.log(arr1);

//4. unshift   --> It is a method  that added the element to an array at the start.(similiar to the push but it added at the start)
arr1.unshift("unshift");                         // syntax -->       array_Name.unshift(data);
console.log(arr1);

//5. length --> It is method that will tells the size of an array (means total no.of elements present in an array)
console.log(arr1.length);

console.log( typeof(arr1[6]), arr1[6]);