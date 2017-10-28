import {
  analyzeNeed,
} from '../libs/talkative';
import {
  getQuery,
  getContent,
} from '../libs/scraper';

const params = process.argv.splice(2).join(' ');

const needs = analyzeNeed(params);

console.log(needs);

// let res;
// getQuery(needs.msg.language, needs.msg.query, 3)
//   .then((result) => {
//     res = result;
//   })
//   .catch((err) => {
//     res = err;
//   })

getContent('js', 'example', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/slice')
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err))
