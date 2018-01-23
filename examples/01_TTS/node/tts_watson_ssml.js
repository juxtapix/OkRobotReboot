// Example TTS - "watson with ssml"

var exec = require('child_process').execSync;
var util = require('util');
var fs = require('fs');

function say(something){
  var user = "USER";
  var password = "PASS";
  var data = encodeURIComponent(something);
  var voice = "voice=en-US_AllisonVoice";
  command = util.format('curl -X GET -u \"%s:%s\" --output say.mp3 \"https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?accept=audio/mp3&text=\"%s\"&%s\" && afplay say.mp3 ', user,password,data,voice);
  exec(command);
}

function formatSSML(data){
  var quoteFree = data.replace(/["]+/g, '\"');
  var singleLine = quoteFree.replace(/(\r\n|\n|\r|\t)/gm,"");
  return singleLine;
}

function loadSSML(filename){
  fs.readFile(filename, 'utf8', function(err, data) {
    say(formatSSML(data));
  });
}


loadSSML('watson.xml');
