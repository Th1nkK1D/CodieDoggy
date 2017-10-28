import {
  analyzeNeed,
} from '../libs/talkative';

const params = process.argv.splice(2).join(' ');

console.log(analyzeNeed(params));
