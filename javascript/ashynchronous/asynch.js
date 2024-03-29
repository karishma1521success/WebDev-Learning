const request = require('request');
const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-schedule-fixtures-and-results";
const jsdom = require('jsdom');
const {JSDOM} = jsdom;

const leaderBoardArr = [];
let counter = 0;
request(link , cb);

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
            // console.log(matchLink); 
            request(matchLink, cb2);
            counter++;
        }   
    }
}

function cb2(error,response,html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        const batsmanTable = document.querySelectorAll('.ci-scorecard-table tbody');
        for(let table=0; table<batsmanTable.length; table++){
        const batsmanRowsobj = batsmanTable[table].querySelectorAll('tr');
        const batsmanRows = [...batsmanRowsobj];
        // console.log(typeof batsmanRows);
        // console.log(batsmanRows.length);
        let exactBatsmanRows=[];
        for(let tr=0; tr<batsmanRows.length; tr++){
            let className = batsmanRows[tr].className;
            // console.log(batsmanRows[tr] + className + typeof className);

            if(typeof className == "string" && className == ""){
                 // deleting the class element
                //  console.log(batsmanRows[tr]);
                 exactBatsmanRows.push(batsmanRows[tr]);
            }
        }

        exactBatsmanRows.pop();
        exactBatsmanRows.pop();
        // console.log(exactBatsmanRows);
        
        for(let i=0; i<exactBatsmanRows.length; i++){
            let tds = exactBatsmanRows[i].querySelectorAll('td');
            let playerName = tds[0].textContent;
            let runs = tds[2].textContent;
            let balls = tds[3].textContent;
            let fours = tds[5].textContent;
            let sixs = tds[6].textContent;
            processPlayer(playerName,runs,balls,fours,sixs);
        }
    }
    counter--;
    if(counter == 0){
        console.log("All players processed");
        console.log(leaderBoardArr);
    }
}
}

function processPlayer(playerName,runs,balls,fours,sixs){
    // This is a synchornous function it will execute at the time of calling then only other cb2 will execute from the waiting queue
    runs= Number(runs);
    balls = Number(balls);
    fours= Number(fours);
    sixs = Number(sixs);
    for(let i=0; i<leaderBoardArr.length; i++){
        if(leaderBoardArr[i].playerName == playerName){
            leaderBoardArr[i].matches = leaderBoardArr[i].matches + 1;
            leaderBoardArr[i].runs = leaderBoardArr[i].runs + runs;
            leaderBoardArr[i].balls = leaderBoardArr[i].balls + balls;
            leaderBoardArr[i].fours = leaderBoardArr[i].fours + fours;
            leaderBoardArr[i].sixs = leaderBoardArr[i].sixs + sixs;
            return;
        }
    }
    let playerObj = {
        playerName:playerName,
        matches: 1,
        runs:runs,
        balls:balls,
        fours:fours,
        sixs:sixs
    }

    leaderBoardArr.push(playerObj);
}
