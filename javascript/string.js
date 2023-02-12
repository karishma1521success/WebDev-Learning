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

//3. replace -- It replace a part with word
 // syntax    replace()
let replaceStr = str1.replace("karishma","doaremon");     // It will not change the original string(str1)
console.log(replaceStr);

//4. uppercase -- It converts all the string characters into the uppercase characters.
let upperCase = str1.toUpperCase();                 // will not make any effect on the original string(str1)
console.log(upperCase);

//5. lowercase - same as the uppercase method but it changes the characters into the lowercase.
let lowerCase = str1.toLowerCase();
console.log(lowerCase);

//6. split -- It split(divided) the whole string into the parts on the basis of splitter.
// It will returns the array ( syntax  -->     str_Name.split(splitter))
let splitStr = str1.split(" ");            // string split on the basis of space
console.log(splitStr);



//.concat -- It append the two string together            str1_Name.concat(str2_Name);
let firstName = "karishma ";
let lastName = "Gupta";
let concatStr = firstName.concat(lastName);
console.log(concatStr);