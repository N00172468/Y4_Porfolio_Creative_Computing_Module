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
let noiseScale = 500;
let noiseStr = 1;
let flowfieldAgents = [numOfFlowfield];

// PolyCircle Variables: 
let pointPoint;
let r = 50;


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

      
    }
}

/**
 * DRAW FUNCTION:
 */
function draw() {
  background(0);
  
  pointAnimation();

  let hit = polyCircle(segmentArr, pointPoint.x, pointPoint.y, r);
  if (hit) {
    fill(255,150,0);
    console.log("Delighted");
  }
  else {
    fill(0,150,255);
  }

  noStroke();


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
}

/**
 * CALCULATING THE INTERSECTION FUNCTION:
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
    pointPoint = point(xPointPos, yPointPos);

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

// POLYGON/CIRCLE
function polyCircle(vertices, cx, cy, r) {

  // go through each of the vertices, plus
  // the next vertex in the list
  let next = 0;
  for (let current=0; current<vertices.length; current++) {

    // get next vertex in list
    // if we've hit the end, wrap around to 0
    next = current+1;
    if (next == vertices.length) next = 0;

    // get the PVectors at our current position
    // this makes our if statement a little cleaner
    let vc = createVector(vertices[current].x, vertices[current].y);    // c for "current"
    let vn = createVector(vertices[next].x, vertices[next].y);       // n for "next"

    // check for collision between the circle and
    // a line formed between the two vertices
    let collision = lineCircle(vc.x,vc.y, vn.x,vn.y, cx,cy,r);
    if (collision) return true;
  }

  // the above algorithm only checks if the circle
  // is touching the edges of the polygon – in most
  // cases this is enough, but you can un-comment the
  // following code to also test if the center of the
  // circle is inside the polygon

  // boolean centerInside = polygonPoint(vertices, cx,cy);
  // if (centerInside) return true;

  // otherwise, after all that, return false
  return false;
}

// LINE/CIRCLE
function lineCircle(x1, y1, x2, y2, cx, cy, r) {

  // is either end INSIDE the circle?
  // if so, return true immediately
  let inside1 = pointCircle(x1,y1, cx,cy,r);
  let inside2 = pointCircle(x2,y2, cx,cy,r);
  if (inside1 || inside2) return true;

  // get length of the line
  let distX = x1 - x2;
  let distY = y1 - y2;
  let len = sqrt( (distX*distX) + (distY*distY) );

  // get dot product of the line and circle
  let dot = ( ((cx-x1)*(x2-x1)) + ((cy-y1)*(y2-y1)) ) / pow(len,2);

  // find the closest point on the line
  let closestX = x1 + (dot * (x2-x1));
  let closestY = y1 + (dot * (y2-y1));

  // is this point actually on the line segment?
  // if so keep going, but if not, return false
  let onSegment = linePoint(x1,y1,x2,y2, closestX,closestY);
  if (!onSegment) return false;

  // optionally, draw a circle at the closest point
  // on the line
  fill(255,0,0);
  noStroke();
  ellipse(closestX, closestY, 20, 20);

  // get distance to closest point
  distX = closestX - cx;
  distY = closestY - cy;
  let distance = sqrt( (distX*distX) + (distY*distY) );

  // is the circle on the line?
  if (distance <= r) {
    return true;
  }
  return false;
}

// LINE/POINT
function linePoint(x1, y1, x2, y2, px, py) {

  // get distance from the point to the two ends of the line
  let d1 = dist(px,py, x1,y1);
  let d2 = dist(px,py, x2,y2);

  // get the length of the line
  let lineLen = dist(x1,y1, x2,y2);

  // since floats are so minutely accurate, add
  // a little buffer zone that will give collision
  let buffer = 0.1;    // higher # = less accurate

  // if the two distances are equal to the line's
  // length, the point is on the line!
  // note we use the buffer here to give a range, rather
  // than one #
  if (d1+d2 >= lineLen-buffer && d1+d2 <= lineLen+buffer) {
    return true;
  }
  return false;
}


// POINT/CIRCLE
function pointCircle(px, py, cx, cy, r) {
  
  // get distance between the point and circle's center
  // using the Pythagorean Theorem
  let distX = px - cx;
  let distY = py - cy;
  let distance = sqrt( (distX*distX) + (distY*distY) );

  // if the distance is less than the circle's 
  // radius the point is inside!
  if (distance <= r) {
    return true;
  }
  return false;
}


// POLYGON/POINT
// only needed if you're going to check if the circle
// is INSIDE the polygon
function polygonPoint(vertices, px, py) {
  let collision = false;

  // go through each of the vertices, plus the next
  // vertex in the list
  let next = 0;
  for (current=0; current<vertices.length; current++) {

    // get next vertex in list
    // if we've hit the end, wrap around to 0
    next = current+1;
    if (next == vertices.length) next = 0;

    // get the PVectors at our current position
    // this makes our if statement a little cleaner
    let vc = createVector(vertices[current].x, vertices[current].y);    // c for "current"
    let vn = createVector(vertices[next].x, vertices[next].y);       // n for "next"

    // compare position, flip 'collision' variable
    // back and forth
    if (((vc.y > py && vn.y < py) || (vc.y < py && vn.y > py)) &&
         (px < (vn.x-vc.x)*(py-vc.y) / (vn.y-vc.y)+vc.x)) {
            collision = !collision;
    }
  }
  return collision;
}