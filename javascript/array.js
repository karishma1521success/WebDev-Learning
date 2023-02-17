// array in js is a object which is used to store the muliple values together in a single variable.
// You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:


let arr = [];              // empty array ( array without any elements)
console.log(arr);           // we can direct access all the elements of the array by using the variable name. but we can't do this in java


let arr1 = [1,2,3,"hello",3.4,true,NaN,7];       // array with the elements
console.log(arr1);

console.log(arr1[0]);                 // access elements of array (0-based indexing)
console.log(arr1[6]);                 

arr1[3] = "bye"                       // changing the elements of an array
console.log(arr1);  


//LOOPING ARRAY ELEMENTS
//1. first way to iterate over array elements is for loop
for(let i=0; i<arr1.length;i++){
    console.log(arr1[i]);     // it will print all the elements of arr1 in console by for loop
}



//2. another way to iterate over array elements is using built-in forEach function
//forEach function does not have any return type (it will not return anything)*************imp****************** 
//array_Name.forEach(function_Name);     // here function need to declare seperately
arr1.forEach(print);          // forEach function behaves like a for loop and function around paranthesis work like a code inside the for loop block
function print(value){
    console.log(value);
}


 // if we don't wanna make a function seperately then we can just declare it inside the () brackets
//  syntax --  array_Name.forEach(function (paremeters){ block of code});
arr1.forEach(function (value){       
    console.log(value);
} );


//another way to write forEach function##########################################################
//syntax    array_Name.forEach((parameter) => {block of code});
arr1.forEach((value) => {
    console.log(value);
});


//3.Third way to iterate over array elements which is array_Name.map(function); in-built function
// array_Name.map(function); has a return value which is an array (it returns the array)
let mapArr = arr1.map(function (value){
    return 10*value;
})
console.log(mapArr);

//ex.  based on forEach function
let square = [1,2,3,4,5];
square.forEach(function (value,index){
    square[index] = value*value;
});
//now square array changes to = [1,4,9,16,25]
console.log(square);

square.forEach((value,index) => {square[index] = value*value;});
// sqaure = [ 1, 16, 81, 256, 625 ]
console.log(square);

//square the num array using map function
let nums = [1,2,3,4];
 let numsSquare = nums.map(function (value){
    return value*value;
})

console.log(numsSquare);





// // ARRAY PROPERTIES
// //1. length --> It is ARRAY PROPERTY that will tells the size of an array (means total no.of elements present in an array)
// console.log(arr1.length);
// console.log( typeof(arr1[6]), arr1[6]);   


// // ARRAY METHODS*************************************************

// // 1. push -- It is a method  that added the element to an array at the last.
// arr1.push(59393);                         // syntax -->       array_Name.push(data);
// console.log(arr1);

// //2. pop -- It is a method that is used to remove an element from an array at the last
// arr1.pop();                            //Syntax -->          array_Name.pop();
// console.log(arr1);

// //3. shift -- It is a method that is used to remove an element from an array at the start (it is similiar to the pop but the subtle difference is that it removed from the start)
// arr1.shift();                            //Syntax -->          array_Name.shift();
// console.log(arr1);

// //4. unshift   --> It is a method  that added the element to an array at the start.(similiar to the push but it added at the start)
// arr1.unshift("unshift");                         // syntax -->       array_Name.unshift(data);
// console.log(arr1);


