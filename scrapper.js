const scrapeIt = require("scrape-it")

let q = 'slice';
let topic = 'js';

// Scrap Query
scrapeIt('https://developer.mozilla.org/en-US/search?q='+q+'&topic='+topic, {
    resultList:  {
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
    
}).then(data => {
    // console.log(resultList);

    let i = 0;

    // Scrap Syntax
    scrapeIt(data.resultList[i].link, {
        name: "div.document-title > h1",
        syntax: "pre.syntaxbox > code"
    }).then(result => {
        console.log(result);
    })
})