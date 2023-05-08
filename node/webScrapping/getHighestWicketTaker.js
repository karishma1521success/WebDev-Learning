// This is a file which contains the code of scraping the highest wicket taker's name in an ipl match.
const request = require('request');
const jsdom  = require('jsdom');
const {JSDOM} = jsdom;
const link  = 'https://www.bing.com/cricketdetails?q=LSG%20vs%20RCB%20cricket&IsCricketV3=1&QueryTimeZoneId=India%20Standard%20Time&ResponseType=FullScore&Intent=None&Provider=SI&Lang=English&ScenarioName=SingleGame&TeamId0=1105&GameId=222215&'

let maxWicket = 0;
function getHighestWicketNumber(bowlerWicket){
    console.log(bowlerWicket.textContent);
    if(bowlerWicket.textContent > maxWicket){
        maxWicket = bowlerWicket.textContent;
    }
}

function cb(error, response, html){
    if(error){
        console.log(error);
    }else{
        // console.log(html); // body of whole link 
        const dom = new JSDOM(html);
        const document = dom.window.document;
        const BowlerInfoElementArr = document.querySelectorAll('.ckt_table_card .ckt_bowlers .ckt_row_item');  // got whole row of bowlers of both the team
        //find max wicket among all the players of both the teams
        const BowlersWicketInfoArr = document.querySelectorAll('.ckt_table_card .ckt_bowlers .ckt_row_item td:nth-child(5)')
        for(let i=0; i<BowlersWicketInfoArr.length; i++){
            getHighestWicketNumber(BowlersWicketInfoArr[i]); //pass bowler's wicket html element
        }
        console.log("highest" + maxWicket);

        //Print the bowler name or bowler's name with the highest wicket taker

        
        
    }
}

request(link, cb);


