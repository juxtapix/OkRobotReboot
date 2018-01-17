const fs = require('fs');

function encode_audio(audio){
  data = fs.readFileSync(audio);
  return data.toString('base64');
}
