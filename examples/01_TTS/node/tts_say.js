//Example TTS - "say"

var exec = require('child_process').execSync;

function say(something){
  command = "say ";
  exec(command + something);
}

say(process.argv[2]);
