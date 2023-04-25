const request = require('request');

request('http://www.google.com', cb);  // Here link can be anything which we want to access

function cb(error, response, html) {
    if(error){
     console.error('error:', error); // Print the error if one occurred
    }else{
 //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
   console.log('body:', html); // Print the HTML for the Google homepage.
    }
 }

 //Just like we send a request to server from the browser we can do this the same thing with the help of node script file. 
 
 