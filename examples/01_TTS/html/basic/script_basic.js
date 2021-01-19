//Web Speech API - speechSynthesis
var synth = window.speechSynthesis;

var inputButton = document.querySelector('button');
var inputTxt = document.querySelector('.txt');

inputButton.onclick = function() {
  say(inputTxt.value);
}

function say(something){
  var utterThis = new SpeechSynthesisUtterance(something);
  utterThis.voice = synth.getVoices()[0];
  utterThis.pitch = 1;
  utterThis.rate = 1;

  synth.speak(utterThis);
}


/* -------------- This function log the avaiable Voices  -------------- */

// function displayVoices(){
//   var voices = synth.getVoices();
//     for(i = 0; i < voices.length ; i++) {
//       console.log(i + " : " + voices[i].lang + " : " + voices[i].name);
//     }
// }

/* -------------------------------------------------------------------- */
