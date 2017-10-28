const scrapeIt = require("scrape-it")

let q = 'slice';
let topic = 'js';
let type = 'syntax';

async function scrapeMdnQuery(lang,q,n) {
    const res = await scrapeIt('https://developer.mozilla.org/en-US/search?q='+q+'&topic='+lang, {
        list:  {
            listItem: "ul.result-list > li",
            
            data: {
                name: {
                    selector: "div.result-list-item > h4 > a"
                },
                url: {
                    selector: "div.result-list-item > h4 > a",
                    attr: "href"
                }
            }
        }
    })
    return res.list.slice(0,n);
}

async function scrapeMdnContent(type,url) {
    let res;

    if(type === 'syntax') {
        // Scrap Syntax
        res = await scrapeIt(url, {
            name: "div.document-title > h1",
            syntax: "pre.syntaxbox > code"
        })
    } else if(type === 'example') {
        // Example

    }

    return res;
}

// Scrape Query
export async function getQuery(lang,q,n) {
    let res;

    if(lang === 'react') {
        // fetch react
    } if(lang === 'js') {
        // fetch MDN
        res = await scrapeMdnQuery(lang,q,n);
    } else {
        res = {
            'error': true,
            'message': lang+' is not supported',
        }
    }

    return res;
}

// Scrape Content
export async function getContent(lang,type,url) {  
    let res;

    if(lang === 'react') {
        // fetch react
    } if(lang === 'js') {
        // fetch MDN
        res = await scrapeMdnContent(type,url);
    } else {
        res = {
            'error': true,
            'message': lang+' is not supported',
        }
    }

    return res;
}