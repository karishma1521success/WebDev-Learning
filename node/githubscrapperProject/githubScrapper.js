const request = require('request');
const githubLink = "https://github.com/topics";
const jsdom  = require('jsdom');
const {JSDOM} = jsdom;
const fs = require('fs');
const path = require('path');
request(githubLink, cb);

function cb(error, response, html){
    if(error){
        console.log(error);
    }else{
        // console.log(html);
        const dom = new JSDOM(html);
        const document  = dom.window.document;
        let  topicBoxes = document.querySelectorAll('.topic-box');
        for(let i=0; i<topicBoxes.length; i++){
            let topicName = topicBoxes[i].querySelector('p').textContent;
            console.log(topicName + typeof topicName);
            let directoryPath = path.join(__dirname,topicName);
            console.log(directoryPath);   
            //create a directory
            let topicLink = topicBoxes[i].querySelector('a');
            topicLink = "https://github.com/" + topicLink.href;
            console.log(topicLink); 
            request(topicLink,cb2);
        }

    }
}

function cb2(error,response,html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let repoList = document.querySelectorAll("article .px-3 h3 a:nth-of-type(2)");
        for(let i=0; i<10; i++){
            let repoName = repoList[i].textContent;
            console.log(repoName);
            let file=repoName+".txt";
            console.log(file);
            let filePath = path.join(__dirname,'task1' , file);
            fs.writeFileSync(filePath,"");
        }
    }
}