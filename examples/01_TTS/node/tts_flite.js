// Example TTS - "flite"

// To install "flite" please see Tech Resources:
// https://github.com/juxtapix/OkRobotReboot/wiki/02.-TTS#technical-resources

// require "child_process" to run Child Process Applications
var exec = require('child_process').execSync;
// require "util" to access utility functions such as "format"
var util = require('util');


function say(something){
  command = util.format('flite "%s" -o test.wav && afplay test.wav', something);
  // command = util.format('flite -voice voices/cmu_us_jmk.flitevox "%s" -o test.wav && afplay test.wav', something);
  exec(command);
}

// "process.argv" returns an array with the arguments passed when Node.js process was launched.
say(process.argv[2]);
