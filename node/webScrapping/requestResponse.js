// web scraping - It's a automated task to extract the data from the websites.The program which extracts the data from websites is called a web scraper. You are going to learn to write web scrapers in JavaScript.
/*
There are mainly two parts to web scraping.
Getting the data using request libraries and a headless browser.
Parsing the data to extract the exact information that we want from the data.
*/


//1. Now to make a request node has a module name - request but it is not pre-installed in node like path, fs so firstly we have to install the module (request) by using npm(node package manager which works like a playstore in android) [[ to install use command -->   npm install request     or  npm i request   ]]

const request = require('request');
console.log(request);

request('http://www.google.com', function (error, response, body) {
   if(error){
    console.error('error:', error); // Print the error if one occurred
   }else{
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
   }
});

//here if else is saying if we get anyy error while scraping the data then give an error if not then show the data of that website ( that data we will get in the html form);
