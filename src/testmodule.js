import * as scrapper from './scrapper'; 

(async () => {
    let result = await scrapper.getQuery('slice','js');
    console.log(result);
})();