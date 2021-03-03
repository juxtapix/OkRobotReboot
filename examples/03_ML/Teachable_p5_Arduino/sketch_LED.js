// Teachable Machine p5.js - Audio + Serial (minimal / LED)
const URL = 'https://teachablemachine.withgoogle.com/models/lcZiaZOrc/';  // Clicky!
let soundModel;
let serial;
let portName = '/dev/tty.usbmodem143301';   // arduino serial port name

const labelContainer = document.getElementById('label-container');

function preload() {
  soundModel = ml5.soundClassifier(URL+ 'model.json');
}

function setup() {
  serial = new p5.SerialPort();    // new instance of the serial port library
  serial.open(portName);           // open a serial port
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
  labelContainer.innerHTML = label + ' : ' + confidence;
  if(label == 'Click'){
    serial.write(1);
  } else {
    serial.write(0);
  }
}
