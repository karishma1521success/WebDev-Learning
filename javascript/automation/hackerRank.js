//first install the puppeter in this file integerated terminal.
//step1. open the browser
//step2. open the new page/new tab
//step3. go to link
//step4. wait         [do wait for sometime to load the page because automation is very fast it will not give time to browser to load the url page]
//step5. click on something on page if you want and you can also make promisified function to perform a similiar task
const puppeteer = require('puppeteer');
let page;
const name = "Tony Stark";
const email = "kenz0210@rdupi.org";
const password = "1234567";
const answersKey = require('./codekey'); //this is how we require self made module in different folder.

//let's make wait and check promisified function which do wait and check promise both and return a promise
function waitAndCheck(selector){
    return new Promise(function (resolve,reject){
        let waitPromise = page.waitForSelector(selector);
        waitPromise.then(function (){
            let clickPromise = page.click(selector);
            return clickPromise;
        }).then(function (){
            resolve();
        })
    })
}

// defaultViewport: null,args: ['--start-fullscreen']
let browserPromise = puppeteer.launch({headless:false});
//{headless:false} - is used to make browser visible opening so that we can see all the automation.
//
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
    return waitAndCheck('.home22-intro-text a:nth-of-type(1)');   //this below code is replaced by this function 
})
// .then(function (){
//     console.log("hackerRank url is opened");
//     //now It will take a time to load the url page so we have to wait for signup selector
//     let waitPromise = page.waitForSelector('.home22-intro-text a:nth-of-type(1)');
//     return waitPromise;
// }).then(function (){
//     //Here fullfilled it means page has loaded fully now I have to click on signup button
//     let clickPromise = page.click('.home22-intro-text a:nth-of-type(1)');
//     return clickPromise;  // It is making a promise that I will click on this selector
// })
.then(function (){
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
    console.log("algorithm has clicked");
    return page.waitForSelector('.filter-wrap .filter-group:nth-of-type(4)');  
}).then(function (){
    let clickPromise = page.click('.filter-wrap .filter-group:nth-of-type(4) .ui-checklist-list-item:nth-of-type(1) .checkbox-wrap .checkbox-input')
    return clickPromise;
}).then(function (){
    console.log("clicked the warmup filter");
    return page.waitForSelector('.challenges-list a');
}).then(function (){
    let arrPromise = page.evaluate(function(){
        let arr=[];
        let aTags = document.querySelectorAll('.challenges-list a');
        console.log(aTags);
        console.log(aTags.length);
        for(let i=0; i<aTags.length; i++){
            let link = aTags[i].href;
            console.log(link);
            arr.push(link);
        }
        return arr;
    })
    return arrPromise;
}).then(function (questionArr){
    questionSolver(questionArr[0] , answersKey.answers[0]);  //it is for one question for testing for do the same for all the questions we use loop
    // for(let questionIdx = 0; questionIdx < questionArr.length; questionIdx++){
    //     questionSolver(questionArr[questionIdx],answersKey.answers[questionIdx]);
    // }
})

//this function will take link and open that link and submit the correct answer of that question
function questionSolver(link, answer){
    return new Promise(function (resolve, reject){
        let linkPromise = page.goto(link);
        linkPromise.then(function (){
            console.log("link is opened");
            return waitAndCheck('.checkbox-wrap .checkbox-input');
        }).then(function (){
            console.log("click");
            let typePromise = page.type('#input-1' , answer);
            return typePromise;
        }).then(function (){
            console.log("answer typed");
            //copy the whole text
            let holdPromise = page.keyboard.down('Control'); //down means still pressing that key   and up means release that key and press means press and release instantly
            return holdPromise;
        }).then(function (){
            //here this then tells that it pressing the control key
            console.log("pressed control");
            let pressA = page.keyboard.press('A');
            return pressA;
        }).then(function (){
            //A key is pressed now press C
            console.log("pressed A");
            let pressC = page.keyboard.press('C');
            return pressC;
        }).then(function (){
            console.log("pressed C");
            let unholdPromise = page.keyboard.up('Control');
            return unholdPromise;
        }).then(function (){
            //copied the text now paste it
            console.log("unhold control");
            let clickPromise = page.click('.view-line');
            return clickPromise;
        }).then(function (){
            let holdPromise = page.keyboard.down('Control'); //down means still pressing that key   and up means release that key and press means press and release instantly
            return holdPromise;
        }).then(function (){
            //clicked now paste
            console.log("pressed control");
            let pressA = page.keyboard.press('A');
            return pressA;
        }).then(function (){
            let pressBackspace = page.keyboard.press('Backspace');
            return pressBackspace;
        }).then(function (){
            console.log("pressed backspace");
            let pressV = page.keyboard.press('V');
            return pressV;
        }).then(function (){
            console.log("pressed V");
            let unholdPromise = page.keyboard.up('Control');
            return unholdPromise;
        }).then(function (){
            let clickPromise = page.click('.hr-monaco-submit');  //promise of clicking submit button
            return clickPromise;
        }).then(function (){
            console.log("submit is clicked");
        }).then(function (){
            resolve();
        })
    })
}


//console.log() inside the page.evaluate() function runs on the browser only not in the terminal and other console.log() runs on terminal only








