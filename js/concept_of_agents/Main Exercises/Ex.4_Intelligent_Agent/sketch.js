let xPos = 0;
let yPos = 0;
let stepSize = 1;
let angle = 45;
let objSpeed = 15;

let angleCount = 6;
let thickness = 1;

/**
 * SETUP FUNCTION:
 */
function setup() {
    // createCanvas(windowWidth, windowHeight);
    // createCanvas(500, 500);
    createCanvas(500, windowHeight);
    background(0);

    smooth();
    // noLoop()
}

/**
 * DRAW FUNCTION:
 */
function draw() {
    // background(0);
    
    // Finding the distance from point to point:
    // let d = int(dist(xPos, yPos, stepSize, stepSize));
    // textSize(24);
    // noStroke();
    // fill(255, 0, 0);
    // text("Dist. away from starting point: " + nfc(d, 0) + "px", 10, 30); // nfc() = p5.js funct.= allows to control the amount of decimals to be shown for the value.

    animation();
    // animationTwo();
}

/**
 * ANIMATION FUNCTION:
 */
function animation() {
    // let speed = map(mouseX, 0, width, 2, 10);
    // translate(width/2, height/2);

    for (let i = 0; i < objSpeed; i++) {
        stroke(objSpeed * i, objSpeed * i, 0 * i);
        strokeWeight(thickness);
        point(xPos, yPos);

        xPos += cos(radians(angle)) * stepSize;
        yPos += sin(radians(angle)) * stepSize;

        if (xPos > width || xPos < 0 || yPos > height || yPos < 0) {
            angle = getRandomAngleAdv(xPos, yPos);

        }
    }
}

/**
 * BOUNCE ON CANVAS BORDERS FUNCTION:
 * 
 * @param {*xPos} _x 
 * @param {*yPos} _y 
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

// -------------------------------------------------------------------------------------------------- //

function getRandomAngleAdv(_x, _y) {
    thickness = random(thickness, 10);
    let direction = floor(random((-angleCount, angleCount)) * 0.5) * 90 / angleCount;
    
    if (_x > width) {
        return direction + 90;
    }

    if (_x < 0) {
        return direction + 270;
    }

    if (_y > height) {
        return direction + 180;
    }

    if (_y < 0) {
        return direction;
    }
}