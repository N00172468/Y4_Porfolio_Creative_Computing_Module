// ------------------------POINT TO RECTANGLE INTERSECTION: ------------------------ //

// Point Variables:
let xPointPos, yPointPos;
let stepSize = 1;
let stepAngle = 45;

// Square Variables:
let xSquarePos = 250;    
let ySquarePos = 100;
let wSquare = 200;    
let hSquare = 200;

// Curve Vertex Variables:
let segmentArr = [];
let numOfSegments = 10;
let radius = 100;
let cv1, cv2, cv3, cv4;

// Flowfield Variables:
let numOfFlowfield = 100;
let noiseScale = 50;
let noiseStr = 1;
let flowfieldAgents = [numOfFlowfield];

/**
 * SETUP FUNCTION:
 */
function setup() {
  // GLOBAL SETUP SETTINGS:
  // createCanvas(windowWidth, windowHeight);
  createCanvas(500, 500);
  background(0);
  // noCursor();
  smooth();

  // PARTICLE SETTINGS:
  strokeWeight(5); // Thicker stroke = easier to see

  let curveAngle = TWO_PI/numOfSegments; // TWO_PI = Circumference

    for (let i = 0; i < numOfSegments; i++) {
      xPointPos = cos(curveAngle * i) * radius;
      yPointPos = sin(curveAngle * i) * radius;
      segmentArr.push(createVector(xPointPos, yPointPos));
    }

    // FLOWFIELD SETTINGS:
    for (let i = 0; i < numOfFlowfield; i++) {
      let location = createVector(random(width * 1.2), random(height), 2)
      let flowAngle = 0;
      let direction = createVector(cos(flowAngle), sin(flowAngle));
      let flowSpeed = random(0, 5, 2);
      // let flowSpeed = random(5, map(mouseX, 0, width, 5, 20)); // Faster

      flowfieldAgents[i] = new FlowParticle(location, direction, flowSpeed, xPointPos, yPointPos);
    }
}

/**
 * DRAW FUNCTION:
 */
function draw() {
  background(0, 10);

  // xPointPos = mouseX;
  // yPointPos = mouseY;

  let intersecting = pointRect(xPointPos, yPointPos, xSquarePos, ySquarePos, wSquare, hSquare);

  if (intersecting) {
    fill(255,150,0);
  }
  else {
    fill(0,150,255);
  }
  noStroke();
  rect(xSquarePos, ySquarePos, wSquare, hSquare);
  
  pointAnimation();

  // CURVE VERTEX:
  for (let i = 0; i < segmentArr.length - 1; i++) {
    push();
      translate(width /4.2, height/1.3);
      noStroke();
      fill(255, 0, 0);
      ellipse(segmentArr[i].x, segmentArr[i].y, 10, 10); // all points but last
      ellipse(segmentArr[segmentArr.length - 1].x, segmentArr[segmentArr.length - 1].y, 10, 10); // last point
    pop();
  }

  for (let i = 0; i < segmentArr.length - 1; i++) {
    push();
      beginShape();
        translate(width/4.2, height/1.3);
        cv1 = curveVertex(segmentArr[segmentArr.length - 1].x, segmentArr[segmentArr.length - 1].y);

        for (let i = 0; i < segmentArr.length; i++) {
          cv2 = curveVertex(segmentArr[i].x, segmentArr[i].y);
        }
        cv3 = curveVertex(segmentArr[0].x, segmentArr[0].y);
        cv4 = curveVertex(segmentArr[1].x, segmentArr[1].y);
      endShape();
    pop();
  }

  // FLOWFIELD:
  // rect(0, 0, width, height);
  for (let i = 0; i < flowfieldAgents.length; i++) {
    flowfieldAgents[i].run();
  }
}

/**
 * CALCULATING THE INTERSECTION FUNCTION:
 * 
 * @param {*} _xPointPos 
 * @param {*} _yPointPos 
 * @param {*} xSquareBounds 
 * @param {*} ySquareBounds 
 * @param {*} wSquareBounds 
 * @param {*} hSquareBounds 
 * @returns 
 */
function pointRect(_xPointPos, _yPointPos, xSquareBounds, ySquareBounds, wSquareBounds, hSquareBounds){

  // Is the point inside the rectangle's bounds?
  if (_xPointPos >= xSquareBounds && // Right of the left edge AND
    _xPointPos <= xSquareBounds + wSquareBounds && // Left of the right edge AND
    _yPointPos >= ySquareBounds && // Below the top AND
    _yPointPos <= ySquareBounds + hSquareBounds) { // Above the bottom
      return true;
  }
  return false;
}

/**
 * POINT ANIMATION FUNCTION:
 */
 function pointAnimation() {
  let speed = map(mouseX, 0, width, 2, 10);
  // translate(width/2, height/2);

  for (let i = 0; i < 10; i++) {
    stroke(255);
    strokeWeight(5);
    point(xPointPos, yPointPos);

    xPointPos += cos(radians(stepAngle)) * stepSize;
    yPointPos += sin(radians(stepAngle)) * stepSize;

    if (xPointPos > width || xPointPos < 0 || yPointPos > height || yPointPos < 0) {
      stepAngle = getRandomAngle(xPointPos, yPointPos);
    }
  }
}

/**
 * BOUNCE ON CANVAS BORDERS FUNCTION:
 * 
 * @param {*xPointPos} _x 
 * @param {*yPointPos} _y 
 */
 function getRandomAngle(_x, _y) {
  let randomAngle = floor(random(0, 180));
  
  if (_x > width) {
    return randomAngle + 90;
  }
  if (_x < 0) {
    return randomAngle + 270;
  }
  if (_y > height) {
    return randomAngle + 180;
  }
  if (_y < 0) {
    return randomAngle;
  }
}