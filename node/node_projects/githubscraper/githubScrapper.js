const request  = require('request');
const link  = "https://github.com/topics";
const jsdom = require('jsdom');
const {JSDOM}  = jsdom;

request(link , cb);   // asynchronous function

function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
        // console.log(html);
        const dom = new JSDOM(html);
        const document  = dom.window.document;
    }
}