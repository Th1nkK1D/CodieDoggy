import * as scraper from './libs/scraper'; 

(async () => {
    const list = await scraper.getQuery('js','slice',3);
    console.log(list);

    const content = await scraper.getContent('js','example',list[0].url);   
    console.log(content);
})();