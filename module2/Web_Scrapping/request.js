const request = require('request');
const jsdom = require("jsdom");
const {JSDOM} = jsdom;
request('http://www.google.com', cb);

const link = "https://www.espncricinfo.com/series/new-zealand-in-england-2022-1276891/england-vs-new-zealand-1st-test-1276901/live-cricket-score"

request(lik,cb);

function cb(error,response, html) {
    if (error){
  console.error('error:', error); // Print the error if one occurred
    }
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
    }

}