let xPos = 0;
let yPos = 0;
let stepSize = 1;
let angle = 45;

/**
 * SETUP FUNCTION:
 */
function setup() {
    // createCanvas(windowWidth, windowHeight);
    createCanvas(500, 500);
    background(0);

    smooth();
}

/**
 * DRAW FUNCTION:
 */
function draw() {
    // background(0, 10);
    
    animation();
}

/**
 * ANIMATION FUNCTION:
 */
function animation() {
    let speed = map(mouseX, 0, width, 2, 10);
    // translate(width/2, height/2);

    for (let i = 0; i < 10; i++) {
        stroke(255);
        strokeWeight(5);
        point(xPos, yPos);

        xPos += cos(radians(angle)) * stepSize;
        yPos += sin(radians(angle)) * stepSize;

        if (xPos > width || xPos < 0 || yPos > height || yPos < 0) {
            angle = getRandomAngle(xPos, yPos);
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