// Example TTS - "watson"

// required to run Child Process Applications
var exec = require('child_process').execSync;
// required to access utility functions such as "format"
var util = require('util');

function say(something){
  var APIkey = "YOUR_API_KEY";
  var url = "YOUR_API_URL";
  var data = encodeURIComponent(something);
  var voice = "voice=en-US_AllisonVoice";
  command = util.format('curl -X GET -u \"apikey:%s\" --output say.mp3 \"%s/v1/synthesize?accept=audio/mp3&text=\"%s\"&%s\" && afplay say.mp3 ', APIkey,url,data,voice);
  exec(command);
}

say(process.argv[2]); // Request the command line argument after the script name
