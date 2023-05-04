// This is a file which contains the code of scraping the highest wicket taker's name in an ipl match.
const request = require('request');
const jsdom  = require('jsdom');
const {JSDOM} = jsdom;


const link  = 'https://www.bing.com/cricketdetails?q=LSG%20vs%20RCB%20cricket&IsCricketV3=1&QueryTimeZoneId=India%20Standard%20Time&ResponseType=FullScore&Intent=None&Provider=SI&Lang=English&ScenarioName=SingleGame&TeamId0=1105&GameId=222215&'
function cb(error, response, html){
    if(error){
        console.log(error);
    }else{
        console.log(html); // body of whole link 
        const dom = new JSDOM(html);
        const document = dom.window.doucment;
        const teamNames = document.querySelectorAll()
    }
}
request(link, cb);
