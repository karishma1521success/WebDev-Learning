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
//forEach function does not have any return type means void (it will not return anything)*************imp****************** 
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
// array_Name.map(function); has a return value which is an array (it returns the array)[array return type]
let mapArr = arr1.map(function (value){
    return 10*value;                          // if we don't return anything then it will return undefined 
})                                            // means mapArr = [undefined, undefined, undefined,undefined];
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

//square the num array using map function********************************************************************
let nums = [1,2,3,4];
 let numsSquare = nums.map(function (value){
    return value*value;
})

console.log(numsSquare);





// ARRAY PROPERTIES
//1. length --> It is ARRAY PROPERTY that will tells the size of an array (means total no.of elements present in an array)
console.log(arr1.length);
console.log( typeof(arr1[6]), arr1[6]);   


// ARRAY METHODS*************************************************

// 1. push -- It is a method  that added the element to an array at the last.
arr1.push(59393);                         // syntax -->       array_Name.push(data);
console.log(arr1);

arr1.push(3,5,7,3.3);          
console.log(arr1);             // can also push multiple elements to an array at the last.

//2. pop -- It is a method that is used to remove an element from an array at the last
arr1.pop();                            //Syntax -->          array_Name.pop();
console.log(arr1);

//3. shift -- It is a method that is used to remove an element from an array at the start (it is similiar to the pop but the subtle difference is that it removed from the start)
arr1.shift();                            //Syntax -->          array_Name.shift();
console.log(arr1);

//4. unshift   --> It is a method  that added the element to an array at the start.(similiar to the push but it added at the start)
arr1.unshift("unshift");                         // syntax -->       array_Name.unshift(data);
console.log(arr1);

arr1.unshift(3,6,5);          // can add multiple values to an array at the start
console.log(arr1);       


//5. splice -- It is a method that delete an element at any index.
// syntax --  array_Name.slice(index,deleteCount);
let arr2 = [1,3,4,7,86,45,0,5.5];
arr2.splice(2,1);    // It is telling to delete the element at index 2 and only the one element
console.log(arr2);    // arr2 = [ 1, 3,7, 86, 45, 0, 5.5]

arr2.splice(3,3);    // It tell to delete the 3 elements starting from index 3 including 3rd index element.
console.log(arr2);     // arr2=[ 1, 3, 7, 5.5 ]

// arr2.splice(1);     // Here I have not given deleteCount so it will remove all the elements from index1 include
// console.log(arr2);


// delete an element and replace it with a new element at same index
arr2.splice(2,1,10000);  /// It deletes an element at index2 and replace with the 10000
console.log(arr2);        // arr2= [ 1, 3, 10000, 5.5 ]

// delete mulitple elements and replace it with a multiple element at their respective indexes.
arr2.splice(0,2,0,1);    // here It deletes the element at index 0 and 1 because delete count is 2 and replace with the 0 and 1 at index 0 and index 1 respectively
console.log(arr2);           // arr2 = [ 0, 1, 10000, 5.5 ]
 
