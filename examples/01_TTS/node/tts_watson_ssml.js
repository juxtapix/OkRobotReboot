// Example TTS - "watson with ssml"

var exec = require('child_process').execSync;
var util = require('util');
var fs = require('fs');

function say(something){
  var APIkey = "YOUR_API_KEY";
  var url = "YOUR_API_URL";
  var data = encodeURIComponent(something);
  var voice = "voice=en-US_AllisonVoice";
  command = util.format('curl -X GET -u \"apikey:%s\" --output say.mp3 \"%s/v1/synthesize?accept=audio/mp3&text=\"%s\"&%s\" && afplay say.mp3 ', APIkey,url,data,voice);
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
