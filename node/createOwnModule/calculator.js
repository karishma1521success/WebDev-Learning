// WE want to create this file as a module so that other file can use it and can require like other modules such as fs, os, child process
function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}


function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

// now will use module.exports property and give a value of an object so that we can export this file as a module and other files can aceess this
module.exports = {
    addition:add,
    subtraction:sub,
    multiplication:mul,
    divsion:div
}