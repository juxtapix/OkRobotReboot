//Web Speech API - SpeechRecognition
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition

var recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

document.body.onclick = function() {
  listen();
}

function listen(){
  recognition.start();
  console.log("I'm listening...");
}

recognition.onresult = function(event) {
  console.log('Transcript: '+ event.results[0][0].transcript);
  console.log('Confidence: '+ event.results[0][0].confidence);
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onerror = function(event) {
  console.log('Error occurred in recognition: ' + event.error);
}
