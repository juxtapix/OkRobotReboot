// Teachable Machine JS - Audio
const URL = 'https://teachablemachine.withgoogle.com/models/lcZiaZOrc/';  // Clicky!
const modelJson = URL + 'model.json';
const metadataJson = URL + 'metadata.json';
const recognizer = speechCommands.create(
  'BROWSER_FFT', // fourier transform type, not useful to change
  undefined,     // speech commands vocabulary feature, not useful for your models
  modelJson,
  metadataJson
);

const labelContainer = document.getElementById('label-container');

loadModel();

async function loadModel() {
  await recognizer.ensureModelLoaded();   // check that model and metadata are loaded via HTTPS requests.
  console.log('Model Loaded!');
  await startListening();
}

async function startListening() {
  // listen() takes two arguments:
  // 1. A callback function that is invoked anytime a word is recognized.
  // 2. A configuration object with adjustable fields
  recognizer.listen(result => {
    gotResults(result);
  }, {
    includeSpectrogram: true,
    probabilityThreshold: 0.25,
    overlapFactor: 0.75 // something between 0.5 and 0.75
  });
  // setTimeout(() => recognizer.stopListening(), 5000); // Stop the recognition in 5 seconds.
}

function gotResults(result) {
  let labels = "";
  for (let i = 0; i < result.scores.length; i++) {
    const classPrediction = recognizer.words[i] + ': ' + result.scores[i].toFixed(2);
    labels += classPrediction + '<br>';
  }
  labelContainer.innerHTML = labels;
}
