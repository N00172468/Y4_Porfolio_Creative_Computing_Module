/**
 * ------------- GLOBAL VARIABLES: -------------
 */
// Fonts:
let font;
let word = "GALVANIZE";
let agentsArray = [];

// Flowfield:
let noiseScale = 500;
let noiseStrength = 1;

// Colour Lerp:
let t = 0;
let reverse = false;
let timedLerpColour;

// Audio:
let sound;
let fft;
let analyser;
let cnv; // Variable for Canvas
let isPlaying = false;
let sampleFactorValue = 0.5;

// GUI Variables:




/**
 * ------------- PRE-LOAD FUNCTION: -------------
 */
function preload() {
  font = loadFont('./data/AvenirNextLTPro-Demi.otf');
  sound = loadSound('./data/Galvanize_TheChemicalBrothers.mp3');
}



/**
 * ------------- SETUP FUNCTION: -------------
 */
function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  // cnv = createCanvas(1500, 500);
  cnv.mouseClicked(togglePlay);

  fft = new p5.FFT();
  sound.amp(0.6); // Controlling the volume output.

  // create a new Amplitude analyzer
  analyser = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyser.setInput(sound);

  background(0);
  smooth();

  let xPos = width/55;
  let yPos = height/1.55;

  // let agents = font.textToPoints(word, xPos, yPos, 255); // textToPoints() funct. ONLY WORKS with loadFonts() preload funct.
  let agents = font.textToPoints(word, xPos, yPos, 255, {sampleFactor: sampleFactorValue}); // textToPoints() funct. ONLY WORKS with loadFonts() preload funct.
  // console.log(agents);

  for (let i = 0; i < agents.length; i++) {
    agentsArray[i] = new Agent(agents[i].x, agents[i].y);
  }
}



/**
 * ------------- DRAW FUNCTION: -------------
 */
function draw() {
  background(0);

  spectrum();
  // waveform();
  displayText();

  for (let i = 0; i < agentsArray.length; i++) {
    agentsArray[i].update();
    agentsArray[i].show();
    agentsArray[i].behaviours();
    // agentsArray[i].flowToPlace();
  }
}



/**
 * ------------- TOGGLE PLAY AUDIO FUNCTION: -------------
 */
function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
    isPlaying = false;
  } else {
    sound.loop();
    isPlaying = true;
  }
}



/**
 * ------------- SPECTRUM AUDIO ANIMATION FUNCTION: -------------
 * Large Spectrum Graph
 */
function spectrum() {
  let spectrum = fft.analyze();
  noStroke();
  fill(255); // For dark mode
  for (let i = 0; i< spectrum.length; i++){
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x * 2, height, width / spectrum.length * 2.5, h); // x * 2 = centering xPos, spectrum.length * 2.5 = thickness of spectrum lines 
  }
}



/**
 * ------------- WAVEFORM AUDIO ANIMATION FUNCTION: -------------
 * Large Waveform Line Graph
 */
function waveform() {
  if (isPlaying == true) {
  let waveform = fft.waveform();
  noFill();
  beginShape();
    stroke(255, 0, 0);
    for (let i = 0; i < waveform.length; i++){
      let x = map(i, 0, waveform.length, 0, width);
      let y = map( waveform[i], -1, 1, 0, height);
      vertex(x,y);
    }
  endShape();
  }
}



/**
 * ------------- TEXT FUNCTION: -------------
 */
function displayText() {
  if (isPlaying == true) {
    noStroke();
    textSize(22);
    textFont(font);
    fill(90);
    text('CLICK TO STOP MUSIC', 50, 50);
    text(sound.url, 75, 80);
  } else {
    noStroke();
    textSize(22);
    textFont(font);
    fill(90);
    text('CLICK TO PLAY MUSIC', 65, 65);
  }
}