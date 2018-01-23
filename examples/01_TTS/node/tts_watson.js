// Example TTS - "watson"

// require "child_process" to run Child Process Applications
var exec = require('child_process').execSync;
// require "util" to access utility functions such as "format"
var util = require('util');

function say(something){
  var user = "USER";
  var password = "PASS";
  var data = encodeURIComponent(something);
  var voice = "voice=en-US_AllisonVoice";
  command = util.format('curl -X GET -u \"%s:%s\" --output say.mp3 \"https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?accept=audio/mp3&text=\"%s\"&%s\" && afplay say.mp3 ', user,password,data,voice);
  exec(command);
}

say(process.argv[2]);
