let points = [];
let numOfPoints = 150; // max count of the circles
let currentPoint = 1;
let xPos = [];
let yPos = [];
let radius = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  // first object
  xPos[0] = width / 2;
  yPos[0] = height / 2;
  radius[0] = 50;
}

function draw() {
  background(255);

  // create a random set of parameters
  let nextPointRadius = random(5, 25);
  let nextPointXPos = random(nextPointRadius, width - nextPointRadius);
  let nextPointYPos = random(nextPointRadius, height - nextPointRadius);

  let nearestPoint = Number.MAX_VALUE;
  let moveToNewPos = 0;
  // Which object is the closest?
  for (let i = 0; i < currentPoint; i++) {
    let nextPoint = dist(nextPointXPos, nextPointYPos, xPos[i], yPos[i]);
    
    if (nextPoint < nearestPoint) {
      nearestPoint = nextPoint;
      moveToNewPos = i;
    }
  }

  // aline it to the closest circle outline
  let angle = atan2(nextPointYPos - yPos[moveToNewPos], nextPointXPos - xPos[moveToNewPos]);

  xPos[currentPoint] = xPos[moveToNewPos] + cos(angle) * (radius[moveToNewPos] + nextPointRadius);
  yPos[currentPoint] = yPos[moveToNewPos] + sin(angle) * (radius[moveToNewPos] + nextPointRadius);
  radius[currentPoint] = nextPointRadius;
  currentPoint++;

  // draw them
  for (let i = 0; i < currentPoint; i++) {
    noStroke();
    fill(50 + i, 0, currentPoint + i);
    rect(xPos[i], yPos[i], radius[i] * 2, radius[i] * 2);
  }

  if (currentPoint >= numOfPoints) noLoop();
}