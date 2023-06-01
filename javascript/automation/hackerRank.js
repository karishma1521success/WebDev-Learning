//first install the puppeter in this file integerated terminal.
//step1. open the browser
//step2. open the new page/new tab
//step3. go to link
//step4. wait         [do wait for sometime to load the page because automation is very fast it will not give time to browser to load the url page]
//step5. click on something on page if you want
const puppeteer = require('puppeteer');
let page;
const name = "Tony Stark";
const email = "io1g4mko@nextsuns.com";
const password = "1234567";


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
    //make a promise to open a url in the new tab
    let urlPromise = page.goto('https://www.hackerrank.com/');
    return urlPromise;
}).then(function (){
    console.log("hackerRank url is opened");
    //now It will take a time to load the url page so we have to wait for signup selector
    let waitPromise = page.waitForSelector('.home22-intro-text a:nth-of-type(1)');
    return waitPromise;
}).then(function (){
    //Here fullfilled it means page has loaded fully now I have to click on signup button
    let clickPromise = page.click('.home22-intro-text a:nth-of-type(1)');
    return clickPromise;  // It is making a promise that I will click on this selector
}).then(function (){
    console.log('signup button is clicked');
    let waitPromise = page.waitForSelector('a[data-action="practice"]');
    return waitPromise;
}).then(function (){
    //here it means it found that selector and page has fully loaded
    return page.click('a[data-action="practice"]');  //making a promise of clicking on that selector and returning that promise
}).then(function (){
    let clickPromise = page.click('.button');
    return clickPromise;
}).then(function (){
    //I have to wait for the login selector
    return page.waitForSelector('#tab-1-item-1');
}).then(function (){
    //here login has found now I will click on the login button
    return page.click('#tab-1-item-1');
}).then(function (){
    //now wait for email and password input field
    return page.waitForSelector('#input-1');
}).then(function (){
    let emailTypePromise = page.type('#input-1' , email, {delay: 100 });
    return emailTypePromise;
}).then(function (){
    console.log("email has typed");
    let passwordTypePromise = page.type('#input-2' , password , {delay:100});
    return passwordTypePromise;
}).then(function (){
    console.log("password has typed fully");
    return page.click('.checkbox-input'); // this make a promise of clicking checkbox of terms and condition 
}).then(function (){
    console.log('terms and conditions checkbox has clicked');
    return page.click('button[data-analytics="LoginPassword"]');
}).then(function (){
    console.log('login button has clicked');
    //now login button has clicked we have to have to load the page
    return page.waitForSelector('a[data-attr1="algorithms"]');
}).then(function (){
    return page.click('a[data-attr1="algorithms"]');
}).then(function (){
    return page.waitForSelector('.filter-wrap .filter-group:nth-of-type(4)');  
}).then(function (){
    let clickPromise = page.evaluate(function (){
        let subdomainDiv = document.querySelector('.filter-wrap .filter-group:nth-of-type(4)');
        let warmupbutton =  subdomainDiv.querySelector('ui-checklist-list-item:nth-of-type(1) .checkbox-wrap');
        warmupbutton.click();
        console.log(warmupbutton); // this console will not print on terminal it will print on browser console.
        return;
    })
    return clickPromise;
}).then(function (){
    console.log("clicked the warmup filter");
})


//console.log() inside the page.evaluate() function runs on the browser only not in the terminal and other console.log() runs on terminal only







