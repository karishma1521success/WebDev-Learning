const jsdom = require('jsdom');
const {JSDOM} = jsdom;  // this is for accesing all the keys of jsdom object moudle

const dom = new JSDOM(html);
 const document = dom.window.document;  // This is a document means actual content (in window we also have tab and other search bar in the html we don't want that we just want actual doucment )
 // basic code to use jsdom