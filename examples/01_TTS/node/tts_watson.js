//Example TTS - "watson"

const exec = require('child_process').execSync;
const util = require('util');

function say(something){
  const user = "34fc6e5d-0c31-4edb-9879-733a85fe8149";
  const password = "cAo5yxlGdJHm";
  var data = encodeURIComponent(something);
  const voice = "voice=en-US_AllisonVoice";
  command = util.format('curl -X GET -u \"%s:%s\" --output say.mp3 \"https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?accept=audio/mp3&text=\"%s\"&%s\" && afplay say.mp3 ', user,password,data,voice);
  exec(command);
}

say(process.argv[2]);
