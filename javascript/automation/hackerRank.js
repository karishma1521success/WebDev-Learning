//step1. open the browser
//step2. open the new page/new tab
//step3. go to link
//step4. wait         [do wait for sometime to load the page because automation is very fast it will not give time to browser to load the url page]
//step5. click on something on page if you want
const puppeteer = require('puppeteer');
let page;

let browserPromise = puppeteer.launch({headless:false});


//promise chaining is the chainig of promise which is done by returning the another promise in the other then function
browserPromise.then(function (browser){
    console.log("browser is opened");
    let pageInstance = browser.newPage();  // do the promise that I will open the new tab of browser
    return pageInstance;
}).then(function (pageInstance){
    console.log("page is opened");
    page = pageInstance;
    //now open the url 
    let urlPromise = page.goto('');
})



//console.log() inside the page.evaluate() function runs on the browser only not in the terminal and other console.log() runs on terminal only








