const request = require('request');

request('http://www.google.com', cb);

function cb(error, response, html) {
    if(error){
     console.error('error:', error); // Print the error if one occurred
    }else{
 //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
   console.log('body:', html); // Print the HTML for the Google homepage.
    }
 }
 