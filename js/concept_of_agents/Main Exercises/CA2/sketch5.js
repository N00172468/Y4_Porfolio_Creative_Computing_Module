/**
 * ------------- GLOBAL VARIABLES: -------------
 * Variables starting with "var" are for the GUI.
 * With p5.gui, "let" does not work!
 */
// Fonts:
let font;
let word = "GALVANIZE";
let agentsArray = [];

// Flowfield:
// let noiseScale = 500;
// let noiseStrength = 1;

// Audio:
let sound;
let fft;
let analyser;
let cnv; // Variable for Canvas
let isPlaying = false;
let sampleFactorValue = 0.5;

// GUI Variables:
// Spectrum GUI Variables:
var toggleSpectrum = true;
var spectrumColour = '#ffffff'
var spectrumSpacing = 2;
var spectrumThickness = 2.5;

// Waveform GUI Variables:
var toggleWaveform = false;
var waveformColour = '#FFEE00'
var waveformThickness = 1;

// Agent Dimensions GUI Variables:
var toggleAgents = true;
var agentSize = 2.5;
var amplitudeLevel = 100;
var strokeThickness = 2.5;

// Agent Colour GUI Variables:
// Agent Physics GUI Variables:
// Both fucked so left out.
// var fromColour = '#ff0000';
// var toColour = '#1100ff';
// var fromColour = [255, 0, 0];
// var toColour = [0, 0, 255];

// Track Information GUI Variables:
var toggleText = true;

var gui, gui2, gui3, gui4, gui5;



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
  
  background(0);
  smooth();

  fft = new p5.FFT();
  sound.amp(0.6); // Controlling the volume output.
  analyser = new p5.Amplitude(); // Create a new Amplitude analyzer.
  analyser.setInput(sound); // Patch the input to an volume analyzer.

  let xPos = width/55;
  let yPos = height/1.65;
  // let yPos = height/1.45;

  let agents = font.textToPoints(word, xPos, yPos, 255, {sampleFactor: sampleFactorValue}); // textToPoints() funct. ONLY WORKS with loadFonts() preload funct.
  // console.log(agents);

  for (let i = 0; i < agents.length; i++) {
    agentsArray[i] = new Agent(agents[i].x, agents[i].y);
    // agentsArray[i] = new Agent(agents[i].x, agents[i].y, size);
  }

  displayGUI();
}



/**
 * ------------- DRAW FUNCTION: -------------
 */
function draw() {
  clear();
  background(0);


  spectrum();
  waveform();
  displayText();

  if (toggleAgents == true) {
    for (let i = 0; i < agentsArray.length; i++) {
      agentsArray[i].update();
      
      agentsArray[i].show();
      
      agentsArray[i].behaviours();
      // agentsArray[i].flowToPlace();
    }
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
  if (toggleSpectrum == true) {
    let spectrum = fft.analyze();
    noStroke();
    fill(spectrumColour); // For dark mode
    for (let i = 0; i< spectrum.length; i++){
      let x = map(i, 0, spectrum.length, 0, width);
      let h = -height + map(spectrum[i], 0, 255, height, 0);
      rect(x * spectrumSpacing, height, width / spectrum.length * spectrumThickness, h); // x * 2 = centering xPos, spectrum.length * 2.5 = thickness of spectrum lines 
    }
  }
}



/**
 * ------------- WAVEFORM AUDIO ANIMATION FUNCTION: -------------
 * Thin Waveform Line Graph
 */
function waveform() {
  if (isPlaying == true && toggleWaveform == true) {
  let waveform = fft.waveform();
  noFill();
  beginShape();
    strokeWeight(waveformThickness);
    stroke(waveformColour);
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
  if (toggleText == true) {
    if (isPlaying == true) {
    noStroke();
      textAlign(LEFT);
      textSize(22);
      textFont(font);
      fill(0, 50);
      text('Now playing ' + sound.url, width / 1.7, height / 1.05);
    } else {
      noStroke();
      textAlign(LEFT);
      textSize(22);
      textFont(font);
      fill(255, 50);
      text('CLICK TO PLAY MUSIC', width / 1.2, height / 1.05);
    }
  }
}



/**
 * ------------- GUI FUNCTION: -------------
 */
function displayGUI() {
  // SPECTRUM GUI:
  // gui = createGui('SPECTRUM SETTINGS');
  gui = createGui('SPECTRUM SETTINGS').setPosition(width - 250, 20);
  gui.addGlobals('toggleSpectrum');
  gui.addGlobals('spectrumColour');
  sliderRange(0.1, 10, 0.1);
  gui.addGlobals('spectrumSpacing');
  sliderRange(0.5, 10, 0.1);
  gui.addGlobals('spectrumThickness');

  // WAVEFORM GUI:
  // gui2 = createGui('WAVEFORM SETTINGS').setPosition(width - 1250, 20);
  gui2 = createGui('WAVEFORM SETTINGS').setPosition(width - 250, 255);
  gui2.addGlobals('toggleWaveform', 'waveformColour');
  // gui2.addGlobals('waveformColour');
  sliderRange(1, 100, 1);
  gui2.addGlobals('waveformThickness');

  // Agents GUI:
  // gui3 = createGui('AGENT DIMENSION SETTINGS').setPosition(width - 1020, 20);
  gui3 = createGui('AGENT DIMENSION SETTINGS').setPosition(width - 250, 435);
  sliderRange(0, 100, 1);
  gui3.addGlobals('toggleAgents');
  sliderRange(0.3, 25, 0.1);
  gui3.addGlobals('agentSize');
  sliderRange(50, 400, 0.1);
  gui3.addGlobals('amplitudeLevel');
  sliderRange(0, 6, 0.1);
  gui3.addGlobals('strokeThickness');

  // TEXT GUI:
  // gui5 = createGui('TRACK INFORMATION').setPosition(width - 793, 20);
  gui5 = createGui('TRACK INFORMATION').setPosition(width - 250, 672);
  sliderRange(0, 100, 1);
  gui5.addGlobals('toggleText');
}