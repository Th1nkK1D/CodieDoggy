const scrapeIt = require("scrape-it")

export async function scrapeQuery(lang,q,n) {
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

export async function scrapeContent(type,url) {
    let res;

    if(type === 'syntax') {
        // Scrap Syntax
        res = await scrapeIt(url, {
            name: "div.document-title > h1",
            syntax: "pre.syntaxbox > code"
        })
    }else if(type === 'example') {
        // Example
        res = await scrapeIt(url, {
            resultList:  {
                listItem: "pre"            
                
            }
        })
    }

    return res.resultList[1];
}


