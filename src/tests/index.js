import {
  analyzeNeed,
} from '../libs/talkative';
import {
  getQuery,
  getContent,
} from '../libs/scraper';

const params = process.argv.splice(2).join(' ');

const needs = analyzeNeed(params);


getQuery(needs.msg.language, needs.msg.query, 3).then((result ) => console.log(result))

// console.log();