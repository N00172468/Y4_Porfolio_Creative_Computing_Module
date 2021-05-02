let font;
let word = "INCOMING";
let agentsArray = [];

function preload() {
  // font = loadFont('./data/Neutral Face/NeutralFace.otf');
  font = loadFont('./data/AvenirNextLTPro-Demi.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  smooth();

  // noLoop();

  let agents = font.textToPoints(word, 10, 400, 228); // textToPoints() funct. ONLY WORKS with loadFonts() preload funct.

  for (let i = 0; i < agents.length; i++) {
    let arrayPoints = agents[i];
    let renderAgents = new Agent(arrayPoints.x, arrayPoints.y);
    agentsArray.push(renderAgents);
  }
}

function draw() {
  background(255);
  // background(255, 25);

  for (let i = 0; i < agentsArray.length; i++) {
    let animateAgents = agentsArray[i];
    animateAgents.update();
    animateAgents.show();
    animateAgents.behaviours();
  }
}