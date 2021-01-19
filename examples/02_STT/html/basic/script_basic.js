//Web Speech API - SpeechRecognition
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.interimResults = false;
recognition.lang = 'en-US';
recognition.maxAlternatives = 1;

// var output = document.querySelector('.output');

document.body.onclick = function() {
  listen();
}

function listen(){
  recognition.start();
  console.log("I'm listening...");
}

recognition.onresult = function(event) {
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    console.log('Transcript: '+ event.results[i][0].transcript);
    console.log('Confidence: '+ event.results[i][0].confidence);
  }
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnomatch = function() {
  console.log('Speech not recognised');
}

recognition.onerror = function(event) {
  console.log('Error occurred in recognition: ' + event.error);
}
