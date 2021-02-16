// p5.SpeechRec - Basic
var robot = new p5.SpeechRec(); // speech recognition object
robot.continuous = true; 				// allow continuous recognition
robot.interimResults = true; 		// allow partial recognition (faster, less accurate)
robot.onResult = showResult; 		// callback function that triggers when speech is recognized
robot.onError = showError; 			// callback function that triggers when an error occurs

function setup() {
	listen();

}

function draw() {

}

function listen() {
	robot.start();	// start listening
	console.log("I'm listening...");
}


function showResult() {
  console.log('Transcript: '+ robot.resultString); 			// log the transcript
	console.log('Confidence: '+ robot.resultConfidence); 	// log the confidence
}

function showError(){
	console.log('An error occurred!');
}
