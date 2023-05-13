const request = require('request');
const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-schedule-fixtures-and-results";
const jsdom = require('jsdom');
const {JSDOM} = jsdom;

function cb2(error,response,html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        
    }
}

function cb(error, response, html){
    if(error){
        console.log(error);
    }else{
        // console.log(html);
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let matchesLinkEle = document.querySelectorAll('.ds-grow.ds-px-4.ds-border-r.ds-border-line-default-translucent a');
        console.log(matchesLinkEle.length);
        for(let element= 0; element<matchesLinkEle.length; element++){
            let matchLink = matchesLinkEle[element].href;
            matchLink = "https://www.espncricinfo.com/" + matchLink;
            console.log(matchLink); 
            request(matchLink, cb2);
        }   

        
    }
}

request(link , cb);