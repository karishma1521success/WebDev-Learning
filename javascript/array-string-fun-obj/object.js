//Topics - 1. declaration of an object     2. Ways of creating an object     3. Acessing value of key and manipulating 
//4. create new key-value pair / delete existing pair    //5.Acessing all the keys    //6. accessing all the values       // acessing all the key-value pairs
//7. creating obj with interchanging key-value pair       //8. creating deep copy of an object

//  object is a key-value pair entity

let obj = {}   // empty object
console.log(obj);

let obj1 = {
    name: "Emaa watson",
    age: 23,
    gender: "female",
    "height" : "5.0ft"      // here we wrap the key around double quotes becuase key is by default string
};

console.log(obj1);


//ways of creating an object
/*
1. let obj = {}; (better approach)
2. let obj  = object.create(null) -- this creates a emtpyobject
3. let obj = new object();  -- this will create a object with no entity 
*/

     
// accessing object value    
// syntax - obj_Name.key   or   obj_Name["key"] -- this syntax can take dynamic variables but . syntax not

console.log(obj1.name);
console.log(obj1["gender"]);

// overwrite the values
obj1.name = "karishma";        
console.log(obj1);


// create a key-value pair in js
// syntax is obj_name["key_name"] = value; (means we want to add another key value pair in objec_name)
obj1["addObj"] = "addedObject";
console.log(obj1);


// delete a key from an object in js
// syntax  delete obj_name["key"];

delete obj1["name"];   // this will delete a key:value of name from an object
console.log(obj1);


// accessing all the keys of an object in js 
// we have a function which is Object.keys(obj_name); (this function return an array of all they keys)

let keys = Object.keys(obj1);
console.log(keys);


// accessing all the key values 

for(let i=0; i<keys.length; i++){
    console.log(obj1[keys[i]]);           // here console.log(obj1.keys[i]) will not work because keys is a dynamic variable not a actual key 
    // also we know the syntax is obj["key"] but here there is no "" because keys[i] will return an string "age"
}

keys.forEach(function (key) {
    console.log(key +": " + obj1[key]);
});

// acessing all the value of object
console.log(obj1);
let values = Object.values(obj1);   // It will return an array of all the values of an object
console.log(values);


// acessing all the key:value pairs of an object
// obj1 = { age: 23, gender: 'female', height: '5.0ft', addObj: 'addedObject' }
let key_Value = Object.entries(obj1);   // return array of an array of key value pair 
console.log(key_Value);
//ans - key_value = [ [ 'age', 23 ], [ 'gender', 'female' ],[ 'height', '5.0ft' ], [ 'addObj', 'addedObject' ]]


/**  NEW OBJECT WITH INTERCHANGING OF KEY-VALUE PAIR OF ORIGINAL OBJECT
 *  obj[key] = value;
 *  Given a object create a new object with interchanging keys and value
 *  { "name" : "rahul",
 *     age : 24
 * } 
 * 
 * {
 *  "rahul": "name",
 *   24 : age
 * }
 */

var user = {
    name : "Rahul",
    age: 24
};
var userKeys = Object.keys(user); //["name", "age"]

var updatedUser = {};

userKeys.forEach(function (key) { // "name"
    var value = user[key] // rahul
  updatedUser[value] = key; // updatedUser["rahul"] = "name"
});

console.log(updatedUser);










// IF i WANT TO COPY THE WHOLE object THEN WE HAVE TWO WAYS TO COPY 
//1. SWALLOW COPY -- IF WE CREATE COPY OF ORIGINAL object THEN IF WE DO CHANGES IN COPY ARRAY IT WILL REFLECT ON ORIGINAL ARRAY TOO AND VICE VERSA
//2. DEEP COPY-- IT WE CREATE COPY OF ORIGINAL objects THEN IF WE DO CHANGES IN COPY ARRAY IT WILL NOT REFLECT ON ORIGINAL ARRAY AND VICE VERSA TOO 
 
// SO WE WANT TO MAKE ALWAYS A DEEP COPY THIS CAN BE CREATE USING SPREAD OPERATOR
//1. first create a new object   2. use spread operator   syntax --  let newObj = {...obj_name};
let originalObj = {id:1, name:"doaremon"};
let copyObj = {...originalObj};
console.log(copyObj);

//note: we cannot concatenate two objects. 
