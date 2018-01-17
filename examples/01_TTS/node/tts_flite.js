// Example TTS - "flite"
// To install flite please see Tech Resources:
// https://github.com/juxtapix/ExpressiveInterfaces_Voice/wiki/01.-TTS#technical-resources

const exec = require('child_process').execSync;
const util = require('util');

function say(something){
  command = util.format('flite "%s" -o test.wav && afplay test.wav', something);
  // command = util.format('flite -voice voices/cmu_us_jmk.flitevox "%s" -o test.wav && afplay test.wav', something);
  exec(command);
}

say(process.argv[2]);
