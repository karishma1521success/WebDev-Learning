// A JavaScript string is zero or more characters written inside quotes.

let str = " "; // empty string(string with the 0 characters)
console.log(str);

let str1 = "My name is karishma";                 // string with the more characters
console.log(str1);

// STRING METHODS
// 1. length -- It returns the size of the string (total no. of characters in a string)
console.log(str1.length);                        //syntax is same as for array [ str_Name.length]

//2. slice -- It returns the substring 
// syntax --       str_Name.slice(index)  ---->   This will give substring from index value (include) to last(include)
//                 str_Name.slice(startIndex,lastIndex);     (substring from startIndex(include) to  lastIndex(exclude))
console.log(str1.slice(2));
console.log(str1.slice(3,8));
