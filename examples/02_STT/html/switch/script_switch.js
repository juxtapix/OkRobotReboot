//Web Speech API
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = false;
recognition.lang = 'en-US';

var toggler = document.querySelector('.toggle-switch');

document.body.onclick = function() {
  listen();
}

function listen(){
  recognition.start();
  console.log("I'm listening...");
}

recognition.onresult = function(event) {
  var command;
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    command = event.results[i][0].transcript.trim();
    if(command == 'turn on'){
      toggler.classList.value = 'toggle-switch active';
    } else if (command == 'turn off') {
      toggler.classList.value = 'toggle-switch';
    }
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
