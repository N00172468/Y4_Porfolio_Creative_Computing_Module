/**
 * Variables for Radial Fan:
 */
numOfSegments = 360;
radius = 200;

function setup() {
    createCanvas(1200, 540);

    colorMode(HSB, 360, 100, 100); // Max. HSB
    angleMode(DEGREES);
    noStroke();
    smooth();
}

function draw() {
    background(0, 0, mouseX); // Transitional Brightness for Canvas 
    fill(200, 0, 0);
    let stepAngle = 360/numOfSegments;

    /**
     * Mapping the transition speed of Hue, Saturation and Brightness Vertical Strips:
     * i.e. Fine-tuning the transition sped per rectangle. 
     */
    let slowChangeH = map(mouseX, 600, width, 0, 360); 
    let slowChangeS = map(mouseX, 750, width, 0, 100); 
    let slowChangeB = map(mouseX, 750, width, 0, 100);

    /**
     * RADIAL FAN:
     * (`TRIANGLE_FAN` based on P5.js)
     */
    beginShape(TRIANGLE_FAN);
        vertex(300, 300); // Centre of diameter (Static)
        for (let a = 0; a <= 360; a += stepAngle) {
            let vx = radius * cos(a) + 300;
            let vy = radius * sin(a) + 300;
            fill(mouseX - a, mouseX, 100); // Interactive Radial Colour Hue (HSB variant)
            vertex(vx, vy);
        }
    endShape(CLOSE);

    /**
     * INSTRUCTION ON HOW TO INTERACT:
     */
    textSize(24);
    textAlign(CENTER, CENTER);
    fill(0, 0, 100 - mouseX); // Reverse Brightness against Canvas
    text('Slide Mouse Cursor from Left to Right', 300, 50);

    /**
     * HUE DEMONSTRATION:
     */
    push();
    textSize(24);
    textAlign(CENTER, CENTER);
    fill(slowChangeH, mouseX, mouseX); // Saturation has transition to match transition of canvas.
    text('Hue', 712, 50);

    fill(slowChangeH, mouseX, mouseX);
    translate(700, 100);
    rect(0, 0, 25, 400);
    pop();

    /**
     * SATURATION DEMONSTRATION:
     */
    push();
    textSize(24);
    textAlign(CENTER, CENTER);
    fill(282, slowChangeS, mouseX);
    text('Saturation', 912, 50);
 
    fill(282, slowChangeS, mouseX);
    translate(900, 100);
    rect(0, 0, 25, 400);
    pop();

    /**
     * BRIGHTNESS DEMONSTRATION:
     */
    push();
    textSize(24);
    textAlign(CENTER, CENTER);
    fill(64, mouseX, slowChangeB);
    text('Brightness', 1112, 50);
 
    fill(55, mouseX, slowChangeB);
    translate(1100, 100);
    rect(0, 0, 25, 400);
    pop();
}