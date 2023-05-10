const request = require('request');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;
const link = 'https://www.bing.com/cricketdetails?q=PBKS%20vs%20RCB%20cricket&IsCricketV3=1&QueryTimeZoneId=India%20Standard%20Time&ResponseType=FullScore&Intent=None&Provider=SI&Lang=English&ScenarioName=SingleGame&TeamId0=1105&GameId=222199&';



function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
        // console.log(html);
        const dom = new JSDOM(html);
        const document = dom.window.document;
        const batsmansTables = document.querySelectorAll('.ckt_l2 .ckt_gamesc .ckt_table_card .ckt_batsmen')
        console.log(batsmansTables.length);
        for(let i=0; i<batsmansTables.length;i++){
            const batsmansRows = batsmansTables[i].querySelectorAll('table tbody .ckt_row_item')
            for(let j=0; j<batsmansRows.length; j++){
                const batsmanLinkEle = batsmansRows[j].querySelector('td a');
                const batsmanName = batsmanLinkEle.textContent;
                let batsmanLink = batsmanLinkEle.href; // get anchor href attribute value
                let indexOfSpace = batsmanLink.indexOf(' ');
                // console.log(indexOfSpace);
                batsmanLink  = batsmanLink.slice(0,indexOfSpace);
                console.log( batsmanName, "------" , batsmanLink);
                const completeLink = "https://www.bing.com" + batsmanLink;
                //getting problems in scraping the exact link 
                console.log(completeLink);
                request(completeLink, cb2);
            }   
        }
    }
}

function cb2(error,response,html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        //get name and details but I'm getting problems while scraping.
        
    }
}

request(link , cb);