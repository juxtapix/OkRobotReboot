//Example STT - "watson JSON"
// npm install request@2.81.0

var fs = require('fs');
var request = require('request');

function listen(something){
  var APIkey = "YOUR_API_KEY";
  var endpoint = "/v1/recognize?timestamps=true&max_alternatives=3"
  var url = "YOUR_API_URL" + endpoint;
  var auth = 'Basic ' + Buffer.from('apikey:' + APIkey).toString('base64');
  var data =  Buffer.from(fs.readFileSync(something));
  var options = {
      method: 'POST',
      headers: {'Content-Type': 'audio/flac', 'Authorization': auth},
      url: url,
      body: data
  };
  request.post(options, function (error, response, body) {
    fs.appendFileSync('watson.json', body);
    console.log("Saved!")
  });
}

listen("_audio/audio-file.flac");
