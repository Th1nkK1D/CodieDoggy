import * as mdn from './scrape-mdn';
//import * as react from './scarpe-react'

export function getQuery(lang,q,n) {
    return new Promise(
        async (resolve, reject) => {
            let res;

            if(lang === 'react') {
                res = await react.scrapeQuery(lang,q,n);
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
export function getContent(lang,type,url) {
    return new Promise(
      async (resolve, reject) => {
            let res;

            if(lang === 'react') {
                // fetch react
                res = await react.scrapeContent(type,url);
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