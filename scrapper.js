const scrapeIt = require("scrape-it")

let q = 'slice';
let topic = 'js';

scrapeIt('https://developer.mozilla.org/en-US/search?q='+q+'&topic='+topic, {
    result:  {
        listItem: "ul.result-list > li",
        
        data: {
            name: {
                selector: "div.result-list-item > h4 > a"
            },
            link: {
                selector: "div.result-list-item > h4 > a",
                attr: "href"
            }
        }
    }
    
}).then(page => {
    console.log(page)
})