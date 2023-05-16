const request  = require('request');
const link  = "https://github.com/topics";
const jsdom = require('jsdom');
const {JSDOM}  = jsdom;
const fs  = require('fs');
const path = require('path');

request(link , cb);   // asynchronous function

function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
        // console.log(html);
        const dom = new JSDOM(html);
        const document  = dom.window.document;
        const topicLinksEle = document.querySelectorAll('.topic-box a');
        // console.log(topicLinksEle.length); 
        for(let i=0; i<topicLinksEle.length; i++){ 
        const topicNameEle = topicLinksEle[i].querySelector('p.f3');
        const topicName  = topicNameEle.textContent;
        console.log(topicName + topicLinksEle[i].href);
        // console.log(typeof topicName); //string
        let topicPath = path.join(__dirname,topicName);
        if(!fs.existsSync(topicPath)){
            fs.mkdirSync(topicPath);
        }
        }
    }
}