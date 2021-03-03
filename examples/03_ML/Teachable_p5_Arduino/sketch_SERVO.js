// Teachable Machine p5.js - Audio + Serial (minimal / LED)
const URL = 'https://teachablemachine.withgoogle.com/models/hs0JjXKUa/';  // Servo Example (For accuracy you should train your own model!)
let soundModel;
let serial;
let portName = '/dev/tty.usbmodem142301';   // arduino serial port name

const labelContainer = document.getElementById('label-container');

function preload() {
  soundModel = ml5.soundClassifier(URL+ 'model.json');
}

function setup() {
  serial = new p5.SerialPort();    // new instance of the serial port library
  serial.open(portName);           // open the serial port
  soundModel.classify(gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  let label = results[0].label;
  let confidence = results[0].confidence;
  if (confidence < 0.75){
    return;
  }
  if(label == 'Down'){
    serial.write('D');
  } else if(label == 'Up') {
    serial.write('U');
  } else if(label == 'Left') {
    serial.write('L');
  } else if(label == 'Right') {
    serial.write('R');
  } else if(label == 'Center') {
    serial.write('C');
  }

  labelContainer.innerHTML = label + ' : ' + confidence;
}
