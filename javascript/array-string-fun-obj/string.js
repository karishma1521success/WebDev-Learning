// A JavaScript string is zero or more characters written inside quotes.

let str = " "; // empty string(string with the 0 characters)
console.log(str);

let str1 = "My name is karishma";                 // string with the more characters
console.log(str1);

// STRING METHODS
// 1. length -- It returns the size of the string (total no. of characters in a string)
console.log(str1.length);                        //syntax is same as for array [ str_Name.length]

//2. charAt(index) - To find the character at partiuclar index
let char1 = str1.charAt(5);
console.log(char1); 

//3. charCodeAt(index) - to find the ascii code of character at particular index
console.log(str1.charCodeAt(4));    // character at 4 is 'a' and it ascii is 97 so it will console 97

//4. indexOf(string);     // string can be of single character 'a' or combination of character 'abc'
console.log(str1.indexOf('a')); //ans-4 // return the index of first occurence of 'a' in whole string present else -1
console.log(str1.indexOf('name')); //ans - 3// return the starting index of substring name it is present else -1

//5. slice()  -- It returns the substring  [[ 6. substring()-- same as slice method]]
// syntax --       str_Name.slice(index)  ---->   This will give substring from index value (include) to last(include)
//                 str_Name.slice(startIndex,lastIndex);     (substring from startIndex(include) to  lastIndex(exclude))
console.log(str1.slice(2));
console.log(str1.slice(3,8));

console.log(str1.substring(2));
console.log(str1.substring(3,8));

//7. str_name.search('substring') -- it returns starting indx of substring - present    || -1 - not present
//8  str_name.includes('substring') -- return true - present    || false - not present
var isExist = str1.search("is");  // ans -  8
console.log(isExist);

isExist = str1.includes('is');  // true
console.log(isExist);


//9. startsWith('substring')  - check if string starts with this substring if it is - true else false
console.log(str1.startsWith("hheueh"));   // string - "My name is karishma" clearly string is starting with My not hheuh so returns false
console.log(str1.startsWith('My'));        // true       

//10. endWith('substring) -- check is string end with this substring  (ends with -true else false)
console.log(str1.endsWith("karishma"));    // true
console.log(str1.endsWith('hehe'));   // false



//11. split -- It split(divided) the whole string into the parts on the basis of splitter.
// It will returns the array ( syntax  -->     str_Name.split(splitter))
let splitStr = str1.split(" ");            // string split on the basis of space
console.log(splitStr);


//12. replace() -- It replace a part with word (only the first occurence of replace word)
 // syntax    string_name.replace('replace_string-is' , 'replace_string_with');
let replaceStr = str1.replace("karishma","doaremon");     // It will not change the original string(str1)
console.log(replaceStr);

let string1 = "my name is hey and is is gone to Is"
let replaceStrAll = string1.replaceAll('is', 'was');   //ans - my name was hey and was was gone to Is  [ note - it Doesn't replace last Is because I is capital so it os case senstive]
console.log(replaceStrAll);

// so replace all the is no matter it is capital or small it can be done using regex Expression
//13. regexExpression - 1./replace-word/g - (replace all replace word in whole string)
//2. /replace-word/gi - (replace all the replace word globally and incasesestively)
console.log(string1.replace( /is/gi, 'was'));


//4. uppercase -- It converts all the string characters into the uppercase characters.
let upperCase = str1.toUpperCase();                 // will not make any effect on the original string(str1)
console.log(upperCase);

//5. lowercase - same as the uppercase method but it changes the characters into the lowercase.
let lowerCase = str1.toLowerCase();
console.log(lowerCase);




//.concat -- It append the two string together            str1_Name.concat(str2_Name);
let firstName = "karishma ";
let lastName = "Gupta";
let concatStr = firstName.concat(lastName);
console.log(concatStr);

// trim()
var input = " abc    ";
console.log(input.trim());


// match()

var sentence = "This is a sample Is string. sample is very good.sample sample";
var regularExpression = /is/gi;
var res = sentence.match(regularExpression);  // return an array of all the matching word 
console.log(res);  //[ 'is', 'is', 'Is', 'is' ]


var input = "This67 is a sample 763764Is string. sample e637is very good.SAMPLE sample7236737463726379"
var rgx = /[0-9]+/ig;
console.log(input.match(rgx)); //[ '67', '763764', '637', '7236737463726379' ]
console.log(input.match(/[a-z]+/g)); //['his', 'is','a',  'sample', 's',  'string', 'sample', 'e','is', 'very','good', 'sample']
console.log(input.match(/s.*/gi))  //['s67 is a sample 763764Is string. sample e637is very good.SAMPLE sample7236737463726379']



