import * as mdn from './scrape-mdn';

// Scrape Query
export async function getQuery(lang,q,n) {
    return new Promise(
        (resolve, reject) => {
            let res;

            if(lang === 'react') {
                // fetch react
            } if(lang === 'js') {
                // fetch MDN
                res = await mdn.scrapeQuery(lang,q,n);

                resolve(res);
            } else {
                res = {
                    'error': true,
                    'message': lang+' is not supported',
                }

                reject(res);
            }
        },
    );
}

// Scrape Content
export async function getContent(lang,type,url) {
    return new Promise(
        (resolve, reject) => {
            let res;

            if(lang === 'react') {
                // fetch react
            } else if(lang === 'js') {
                // fetch MDN
                res = await mdn.scrapeContent(type,url);

                resolve(res);
            } else {
                res = {
                    'error': true,
                    'message': lang+' is not supported',
                }
            }

            reject(res);
        },
    );
}