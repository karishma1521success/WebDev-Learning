const jsdom = require('jsdom');
const {JSDOM} = jsdom;  // this is for accesing all the keys of jsdom object moudle

const dom = new JSDOM(html);
 const document = dom.window.document;  // This is a document means actual content (in window we also have tab and other search bar in the html we don't want that we just want actual doucment )
 // basic code to use jsdom

 //jsdom is used to get the data from the doucment.
 // get href of a by accessing anchor tag using jsdom and then use ".href";
let anchor = document.querySelector('a');
let  link = anchor.href;