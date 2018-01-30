// Example TTS - "say"

// require "child_process" to run Child Process Applications
var exec = require('child_process').execSync;

function say(something){
  command = "say ";                      // "say" in this case is a built-in shell command on MAC OS.
  // command = "say -v \"Victoria\" ";   // use the flag "-v" to change to a different voice
  exec(command + something);
}

say("Tell me what you want, what you really really want!");
