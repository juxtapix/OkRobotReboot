// p5.SpeechRec - Minimal
var robot = new p5.SpeechRec(); // speech recognition object
robot.onResult = showResult; 		// callback function that triggers when speech is recognized

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
  console.log(robot.resultString); // log the result
}
