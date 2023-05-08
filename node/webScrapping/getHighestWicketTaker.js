// This is a file which contains the code of scraping the highest wicket taker's name in an ipl match.
const request = require('request');
const jsdom  = require('jsdom');
const {JSDOM} = jsdom;
const link  = 'https://www.bing.com/cricketdetails?q=LSG%20vs%20RCB%20cricket&IsCricketV3=1&QueryTimeZoneId=India%20Standard%20Time&ResponseType=FullScore&Intent=None&Provider=SI&Lang=English&ScenarioName=SingleGame&TeamId0=1105&GameId=222215&'


function cb(error, response, html){
    if(error){
        console.log(error);
    }else{
        // console.log(html); // body of whole link 
        const dom = new JSDOM(html);
        const document = dom.window.document;
        const bowlerTables = document.querySelectorAll('.ckt_l2 .ckt_gamesc .ckt_table_card .ckt_bowlers');  //Acess bowler Tables for each team
        console.log(bowlerTables.length)
        //Now access only bowler names with their respective wickets
        let maxWicket = 0;
        for(let i=0; i<bowlerTables.length; i++){
            let bowlerRows = bowlerTables[i].querySelectorAll('table tbody .ckt_row_item');
            for(let j=0; j<bowlerRows.length; j++){  //accesing each rows of bowlers table
                 let tds = bowlerRows[j].querySelectorAll('td');
                 if(tds.length>1){
                 let name = tds[0].textContent;
                 let wicket = tds[4].textContent;
                  console.log("name--->",name, "  wicket--->",wicket );
                  if(wicket > maxWicket){
                    maxWicket = wicket;                  
                  }
                }
            }
        }

        for(let i=0; i<bowlerTables.length; i++){
            let bowlerRows = bowlerTables[i].querySelectorAll('table tbody .ckt_row_item');
            for(let j=0; j<bowlerRows.length; j++){
                let tds = bowlerRows[j].querySelectorAll('td');
                let name = tds[0].textContent;
                let wicket =tds[4].textContent;
                if(wicket == maxWicket){
                    console.log("highest wicket Taker is ", name , "with wickets " , wicket);
                }
            }
        }


        
    }
}

request(link, cb);

/** 
 * 1. ACcess bowler div from the document
 */


