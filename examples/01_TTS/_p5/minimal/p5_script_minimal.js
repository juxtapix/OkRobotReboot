// p5.speech - Minimal
var robot = new p5.Speech(); // speech synthesis object

function setup() {
	say('Hello Human');

}

function draw() {

}

function say(something) {
	robot.speak(something); // say something
}
