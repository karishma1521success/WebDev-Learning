let puppeteer = require('puppeteer');

let browser = puppeteer.launch({headless:false});   //puppeteer.launch()  is a promise which opens the browser

browser.then(function (browser){
    console.log("browser is opened" +browser);   // This will open a browser;
    //If we want to open a new tab in our browser
    const page = browser.newPage();
    return page;

})






// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
  
//     await page.goto('https://developer.chrome.com/');
  
//     // Set screen size
//     await page.setViewport({width: 1080, height: 1024});
  
//     // Type into search box
//     await page.type('.search-box__input', 'automate beyond recorder');
  
//     // Wait and click on first result
//     const searchResultSelector = '.search-box__link';
//     await page.waitForSelector(searchResultSelector);
//     await page.click(searchResultSelector);
  
//     // Locate the full title with a unique string
//     const textSelector = await page.waitForSelector(
//       'text/Customize and automate'
//     );
//     const fullTitle = await textSelector?.evaluate(el => el.textContent);
  
//     // Print the full title
//     console.log('The title of this blog post is "%s".', fullTitle);
  
//     await browser.close();
//   })();