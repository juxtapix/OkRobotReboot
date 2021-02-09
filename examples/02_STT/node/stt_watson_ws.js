// Example STT - "watson Websockets"
// npm install ws

var fs = require('fs');
var WebSocket = require('ws');


var APIkey = "YOUR_API_KEY";
var url = "YOUR_API_URL";
var endpoint = "/v1/recognize?timestamps=true&max_alternatives=3";
var auth = 'apikey:' + APIkey;

var options = {
    headers: {'Content-Type': 'audio/flac', 'Authorization': 'Basic ' + Buffer.from(auth).toString('base64')},
};
var ws = new WebSocket(url+endpoint, options);

ws.on('open', function open() {
  var something = "_audio/audio-file.flac";
  var settings = {
        "action": "start",
        "content-type": "audio/flac",
        // "continuous": false,
        "interim_results": false,
        "word_confidence": true,
        "timestamps": true,
        "max_alternatives": 3
    };

  ws.send(JSON.stringify(settings));
  var data = Buffer.from(fs.readFileSync(something));
  ws.send(data);
  var done = {"action": "stop"};
  ws.send(JSON.stringify(done));
});

ws.on('message', function incoming(msg) {
  var data = JSON.parse(msg);
  if (data.hasOwnProperty('results')){
    console.log(data['results'][0]['alternatives'][0]['transcript']);
    var done = {"action": "stop"};
    ws.send(JSON.stringify(done));
  }
});

ws.on('error', function incoming(error) {
  console.log(error);
});
