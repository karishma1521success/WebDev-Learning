// web scraping - It's a automated task to extract the data from the websites.The program which extracts the data from websites is called a web scraper. You are going to learn to write web scrapers in JavaScript.
/*
There are mainly two parts to web scraping.
Getting the data using request libraries and a headless browser.
Parsing the data to extract the exact information that we want from the data.
*/


//1. Now to make a request node has a module name - request but it is not pre-installed in node like path, fs so firstly we have to install the module (request) by using npm(node package manager which works like a playstore in android) [[ to install use command -->   npm install request     or  npm i request   ]]

const request = require('request');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;  // this is for accesing all the keys of jsdom object moudle

/*
console.log(request);

request('http://www.google.com', function (error, response, body) {
   if(error){
    console.error('error:', error); // Print the error if one occurred
   }else{
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
   }
});
*/

//here if else is saying if we get anyy error while scraping the data then give an error if not then show the data of that website ( that data we will get in the html form);
//Above function is not a asynchornous means it's a synchronous (first data will fetch then remaining code will execute)
// To make the above code asynchornous make a function a callback function

const link = "https://www.bing.com/cricketdetails?q=CSK%20vs%20LSG%20cricket&IsCricketV3=1&QueryTimeZoneId=India%20Standard%20Time&ResponseType=FullScore&Intent=None&Provider=SI&Lang=English&ScenarioName=SingleGame&CricketTournamentId=5157&GameId=222174&";

request(link , cb)
function cb(error, response, html){
   if(error){
      console.error('error:', error); // Print the error if one occurred
     }else{
  //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', html); // Print the HTML for the link website webpage.
    //now we want to extract the data from that Html file we got but that file is too large that to extract a particular data will be a very hectic task so to make this easy jsdom comes in picture to make the extract data task easy
    //how jsdom works - we send the selector to js dom and js dom on that basis of selector it searcch that element having those selectors and gives that element as response.
    const dom = new JSDOM(body);
    const document = dom.window.document;  // This is a document means actual content (in window we also have tab and other search bar in the html we don't want that we just want actual doucment )


     }
}
