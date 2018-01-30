//Example STT - "watson JSON"
// npm install request@2.81.0

var fs = require('fs');
var request = require('request');

function listen(something){
  var user = "USER";
  var password = "PASS";
  var data = new Buffer(fs.readFileSync(something));
  var options = {
      url: 'https://stream.watsonplatform.net/speech-to-text/api/v1/recognize?timestamps=true&max_alternatives=3',
      method: 'POST',
      headers: {'Content-Type': 'audio/flac', 'Authorization': 'Basic OWUwYTM0MzctYWEyNS00YTIxLTg3ZTAtMjBmYjFkMDJkYjYzOlVQdThTT3NyejhlWA=='},
      body: data
  };
  request.post(options, function (error, response, body) {
    fs.appendFileSync('watson.json', body);
  });
}

listen("_audio/audio-file.flac");
