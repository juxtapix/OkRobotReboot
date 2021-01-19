//Example STT - "watson"

var exec = require('child_process').execSync;
var util = require('util');

function listen(something){
  var APIkey = "YOUR_API_KEY";
  var url = "YOUR_API_URL";
  var data = "@" + something;
  command = util.format('curl -X POST -u \"apikey:%s\" -H \"Content-Type: audio/flac\" --data-binary %s \"%s/v1/recognize?timestamps=true&max_alternatives=3\" | grep -m1 \"transcript\" ', APIkey,data,url);
  output = exec(command, function(error, stdout, stderr){console.log('stdout: ' + stdout);});
  return output.toString().trim();
}

console.log(listen("_audio/audio-file.flac"));
