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


// create a key-value pair injs
// syntax is obj_name["key_name"] = value; (means we want to add another key value pair in objec_name)
obj1["addObj"] = "addedObject";
console.log(obj1);


// delete a key from an object in js
// syntax  delete obj_name["key"];

 delete obj1["name"];   // this will delete a key:value of name from an object
console.log(obj1);


// accessing all the keys of an object in js 
// we have a function which is Object.keys(obj_name); (this function return an array)

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