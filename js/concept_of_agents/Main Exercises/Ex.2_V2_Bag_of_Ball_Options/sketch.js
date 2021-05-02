let xPos = 0;
let yPos = 0;

// Controlling the Probability of Directions:
let optionsX = [-1, -1, 1, 1, 1, 1]; // 4/6 (66.67%) chance of moving to the right.
let optionsY = [-1, 1]; // 50% of either moving up or down.

// Variables for Interactions:
let stepSize = 20;
let diameter = 10;
let objAmt = 10;
let alpha = 10;
let fps = 60;

/**
 * SETUP FUNCTION:
 */
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    smooth(); // Anti-Aliasing
}

/**
 * DRAW FUNCTION:
 */
function draw() {
    background(0, alpha);
    frameRate(fps);
    
    animation();
}

/**
 * ANIMATION FUNCTION:
 */
function animation() {
    for (let i = 0; i < objAmt; i++) {
        //Choose a value from each array:
        let randomPosX = floor(random(0, optionsX.length));
        let randomPosY = floor(random(0, optionsY.length));
    
        // Move the Objects:
        xPos += optionsX[randomPosX] * stepSize;
        yPos += optionsY[randomPosY] * stepSize;
    
        // If objects is greater than the width & height, transfer objects to the appropriate opposite sides of canvas borders (and vice versa).  
        xPos > width ? xPos = 0 : null; 
        xPos < 0 ? xPos = width : null; 
        yPos > height ? yPos = 0 : null;
        yPos < 0 ? yPos = height : null;

        // Additional Probability Function (50/50) - To Draw Objects.
        let randomNum = round(random(0, 1));
        if (randomNum == 0) {
            noStroke();
            fill(17, 100, 100); // Blue-Green Fill
            ellipse(xPos, yPos, diameter, diameter);
        } else {
            noFill();
            strokeWeight(2);
            stroke(277, 100, 100); // Red Stroke
            ellipse(xPos, yPos, diameter, diameter);
        }
    
        // Interactions with Mouse Keys:
        if (mouseIsPressed) {
            if (mouseButton === LEFT) {
                stepSize = random(20, 50);
                diameter = random(10, 20);
            }
        
            if (mouseButton === CENTER) {
                stepSize = 60;
                diameter = random(20, 90);
            }
        }
    }
}

/**
 * INTERACTION FUNCTION:
 */
function keyReleased() {
    if (keyCode == LEFT_ARROW) {
        objAmt = 10;
    }

    if (keyCode == RIGHT_ARROW) {
        objAmt = 100;
    }

    if (keyCode == UP_ARROW) {
        alpha = 10;
    }

    if (keyCode == DOWN_ARROW) {
        alpha = 100;
    }

    if (key == '1') {
        loop();
    }

    if (key == '2') {
        noLoop();
    }
}