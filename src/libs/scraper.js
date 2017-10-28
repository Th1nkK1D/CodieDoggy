import * as mdn from './scrape-mdn';

// Scrape Query
export async function getQuery(lang,q,n) {
    let res;

    if(lang === 'react') {
        // fetch react
    } if(lang === 'js') {
        // fetch MDN
        res = await mdn.scrapeQuery(lang,q,n);
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
        res = await mdn.scrapeContent(type,url);
    } else {
        res = {
            'error': true,
            'message': lang+' is not supported',
        }
    }

    return res;
}