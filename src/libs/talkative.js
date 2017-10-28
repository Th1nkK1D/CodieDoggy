import config from '../../config.json';

function commandValid(args) {
  if (args.length < 3) {
    return false;
  }
  if (!Array.isArray(args)) {
    return false;
  }
  return true;
}

export function send(status = 'ERROR', msg) {
  return {
    status,
    msg,
  }
}

export function analyzeNeed(msg) {
  try {
    const args = msg.trim().split(' ');
    // [laguage] [mode] [command]
    // check command pattern is valid
    if (!commandValid(args)) {
      throw 'Valid Command';
    }

    let language = args[0];
    language = language.toLowerCase();
    const mode = args[1];
    const query = args.slice(2).join(' ');

    if (config.LANGUAGES.indexOf(language) < 0) {
      throw [
        `Sorry, "${language}" is not avaiable right now.`,
        'Here, there are avaiable languages.',
        ...config.LANGUAGES,
      ]
    }

    if (config.MODES.indexOf(mode.toLowerCase()) < 0) {
      throw [
        `Sorry, ${mode} is not avaiable right now.`,
        'Here, there are avaiable modes.',
        ...config.MODES,
      ]
    }
    return send('OK', {
      language,
      mode,
      query,
    });
  } catch (e) {
    return send('ERROR', e);
  }
}

function Talkative() {

}

export default Talkative;