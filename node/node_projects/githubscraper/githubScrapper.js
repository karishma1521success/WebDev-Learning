const request  = require('request');
const link  = "https://github.com/topics";

request(link , cb);   // asynchronous function

function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
        console.log(html);
    }
}