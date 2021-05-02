let font;
// let word = "ÇA VA, ÇA VIENT";
let word = "ÇA VIENT";
let agentsArray = [];

let noiseScale = 500;
let noiseStrength = 1;

let t = 0;
let reverse = false;

function preload() {
  // font = loadFont('./data/Neutral Face/NeutralFace.otf');
  font = loadFont('./data/AvenirNextLTPro-Demi.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  smooth();
  // noLoop();
  // noCursor();

  let xPos = width/20;
  // let xPos = width/7.7;
  let yPos = height/1.65;
  // textAlign(CENTER);

  let agents = font.textToPoints(word, xPos, yPos, 300); // textToPoints() funct. ONLY WORKS with loadFonts() preload funct.
  // console.log(agents);

  for (let i = 0; i < agents.length; i++) {
    agentsArray[i] = new Agent(agents[i].x, agents[i].y);
  }
}

function draw() {
  background(0, 45);

  for (let i = 0; i < agentsArray.length; i++) {
    agentsArray[i].update();
    agentsArray[i].show();
    // agentsArray[i].flowToPlace();
    agentsArray[i].behaviours();
  }
}