//Web Speech API - speechSynthesis

function say(something) {
  speechSynthesis.speak(new SpeechSynthesisUtterance(something));
}

say("Hello there!");
