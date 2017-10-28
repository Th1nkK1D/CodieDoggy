import * as scrapper from './libs/scrapper'; 

(async () => {
    const list = await scrapper.getQuery('js','slice',3);
    console.log(list);

    const content = await scrapper.getContent('js','syntax',list[0].url);   
    console.log(content);
})();