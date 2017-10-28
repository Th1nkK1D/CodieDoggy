import {
  analyzeNeed,
} from '../libs/talkative';
import {
  getQuery,
  getContent,
} from '../libs/scraper';

const params = process.argv.splice(2).join(' ');

console.log(analyzeNeed(params));
