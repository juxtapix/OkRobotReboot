// Teachable Machine p5.js - Audio
const URL = 'https://teachablemachine.withgoogle.com/models/lcZiaZOrc/';  // Clicky!
let soundModel;

const labelContainer = document.getElementById('label-container');

function preload() {
  soundModel = ml5.soundClassifier(URL+ 'model.json');
}

function setup() {
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
}
