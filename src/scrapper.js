const scrapeIt = require("scrape-it")

let q = 'slice';
let topic = 'js';
let type = 'syntax';

// Scrape Query
export async function getQuery(q,topic) {
    return await scrapeIt('https://developer.mozilla.org/en-US/search?q='+q+'&topic='+topic, {
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
        
    })
}

// Scrape Content
export function getContent(type,ur) {    
    if(type === 'syntax') {
        // Scrap Syntax
        scrapeIt(url, {
            name: "div.document-title > h1",
            syntax: "pre.syntaxbox > code"
        }).then(result => {
            console.log(result);
        })
    } else if(type === 'example') {
        // Example

    }
}