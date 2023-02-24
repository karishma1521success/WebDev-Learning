// Topics covered --  1. Declaration of an array       2. looping ways in an array (for loop , forEach(), forMap(), for(var value of arr_Name))
// 3. Array Methods & properties   (length, push(), pop(), shift(), unshift(), splice(), concat() / (spread operator), sort(), reverse(), Math.max.apply(null,arr_Name), Math.min.apply(null, arr_name), arr_Name.find() , arr_Name.findIndex() , filter() 
//4. Array destructing --  let [a,b,c] = [1,2,3,4]

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


//4.  for(var value of array_name){}
let new_Arr = [1,2,3,90,7,8];
for(let value of new_Arr){
    console.log(value);
}



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
// syntax --  array_Name.slice(index,deleteCount, (items to added or replace items));
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


//6. concat()  - It is a method of merging two existing array
let array1 = [2,3,4,"hello", "bye",true];
let array2 = [3,4,"ola", "heyyy"];
let concatArray = array1.concat(array2);
console.log(concatArray);

// this same can be done by using create deep copy

// IF i WANT TO COPY THE WHOLE ARRAY THEN WE HAVE TWO WAYS TO COPY 
//1. SWALLOW COPY -- IF WE CREATE COPY OF ORIGINAL ARRAY THEN IF WE DO CHANGES IN COPY ARRAY IT WILL REFLECT ON ORIGINAL ARRAY TOO AND VICE VERSA
// swallow copy -  let arr = arr1; //this arr and arr1 refer to the same array because arr and arr1, is a reference variable storing the memory address.
//2. DEEP COPY-- IT WE CREATE COPY OF ORIGINAL ARRAY THEN IF WE DO CHANGES IN COPY ARRAY IT WILL NOT REFLECT ON ORIGINAL ARRAY AND VICE VERSA TOO 
 
// SO WE WANT TO MAKE ALWAYS A DEEP COPY THIS CAN BE CREATE USING SPREAD OPERATOR
let originalArray = [1,2,3,4];
let copyArray = [...originalArray];
console.log(copyArray);

// we can create a deep copy of two array at once in a single array(means concatenation)
let original1 = [1,4,6,7,45,5,6,6];
let original2 = [3,5,9,0,14,5,76,7,8];

let concatenateArray = [...original1,...original2];
console.log(concatenateArray);

//*************************************************************************************** */
//7. sort() == It is a method to sort the whole array in the ascending order or descending order

// array_name.sort(function(a,b){return a-b});   -- for sorting the numeric array in ascending order
// array_name.sort(function(a,b){return b-a});   -- for sorting the numeric array in the descending order
// array_name.sort()   -- It will sort the string array on the basis of alphabetically order
// array_name.sort(function(a,b){return a.key - b.key}) - to sort the array of objects using a particular key(note only work for numeric key values); (this function is built to sort the numeric values only)
let sortAsc = [23,4,-7,0,55,90,9847,0,-6];
sortAsc.sort(function(a,b){return a-b});
console.log(sortAsc);

let sortDes = [23,4,-7,0,55,90,9847,0,-6];
sortDes.sort(function(a,b){return b-a});
console.log(sortDes);

let fruits = ["papaya","banana","orange","apple"];
fruits.sort();
console.log(fruits);

const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

  cars.sort(function(a,b){return a.year - b.year}) // sort the whole array on the basis of year in ascending order
  console.log(cars);

;

//8. reverse() - it is a function to reverse the whole array
sortAsc.reverse();
console.log(sortAsc);

//9. Math.max()-maximum number in an array      Math.min() = method to find minimum number in an array
//syntax -- Math.max.apply(null,array_name);     Math.min.apply(null,array_name);
let array3 = [4,87,-3,0,88,9,-2];
let min  = Math.min.apply(null,array3);
console.log(min);

let max = Math.max.apply(null,array3);
console.log(max);

// but it will take tc = o(nlogn) so it can be done in O(n) by using for loop

//10. find() - It is a method to check whether that element is present or not in an array     syntax - array_name.find(function);
// check if 67 is present in an array or not   (so this can be do by for loop but javascript has in-built function to check this)
let findArr = [1,2,3,4,67,89,0,76];
let isExist = findArr.find(function (value) {
    return value == 67;        // note -- find() will return value if it is find otherwise if it is not present it will return the undefined.
})
console.log(isExist);

// find the index of 0 element in findArr
//11.  findIndex() - It is a method to return the index of find element if it is present or if find element is not present it will return -1
// syntax -   array_name.findIndex(function);
let findIndx = findArr.findIndex(function (value){return value == 0});
console.log(findIndx);

// remove all the even element in an findArr          (so we add all the odd element in filter new array and all the even array is not there )
// 12. filter() -- it is method which return the new array           (we can remove in an original array because it affect the indexes so we have to make a new array)
 let newArr = findArr.filter(function (value) {
    if(value % 2 != 0){ // odd value
        return value;
    }
 })
console.log(newArr);


// // Imp -- Array destructing

// let array_1 = [1,2,3];
// //now let's say we want to assign values to differnt variables
// let x = array_1[0];
// let y = array_1[1];
// let z = array_1[2];

// // But Instead of above javascript has special function to assign all the values of an array to different array at together
// // let [A,B,C] = [1,2,3];
// let [A,B,C] = array_1;    // this doing the same work as let [A,B,C] = [1,2,3]
// console.log(A);   // It will console arrary_1[0]
// console.log(B);
// console.log(C);

// // let's say if we have more variables but less values then it will return undefined to that variable
// let array_2 = [1,2,3,4];
// let [V,W,X,Y,Z] = [1,2,3,4];  // here clearly  variable are 5 but elements in an array is only 4 so for the last variable it will return the undefined
// console.log(Y);   // array_2[3]
// console.log(Z);   // return undefined

// // JavaScript assign value from starting to end one by one to differnet variables

// //Imp - let's say If you want to assign only 1st , 3rd and the 6 element of an array
// let [s,,t,,,u] = [1,2,3,4,5,6];   // another syntax  let[s,_,t,_,_,u];   (this underscore defines the empty place for leaving that particular index element of an array)
// console.log(s);
// console.log(t);
// console.log(u);