const scrapeIt = require("scrape-it")

let q = 'slice';
let topic = 'js';

scrapeIt('https://developer.mozilla.org/en-US/search?q='+q+'&topic='+topic, {
    data:  ".result-list-item > h4 > a"
    
}).then(page => {
    console.log(page)
})