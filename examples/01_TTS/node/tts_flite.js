//Example TTS - "flite"

const exec = require('child_process').execSync;
const util = require('util');

function say(something){
  command = util.format('flite "%s" -o test.wav && afplay test.wav', something);
  // command = util.format('flite -voice voices/cmu_us_jmk.flitevox "%s" -o test.wav && afplay test.wav', something);
  exec(command);
}

say(process.argv[2]);
