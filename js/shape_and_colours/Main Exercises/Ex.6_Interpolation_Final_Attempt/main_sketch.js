let t = 0; // Set time
let rotateSpeed = 5; // Set speed of rotation


function setup() {
    createCanvas(windowWidth, windowHeight);

    colorMode(HSB, 360, 100, 100); // Max. HSB
    noStroke();
    smooth(); // Anti-aliasing
}

function draw() {
    background(0, 0, 0);

    /**
     * MOUSE CLICK-AND-HOLD INTERACTIONS:
     * 
     * Left Mouse Button: Speed up time.
     * Middle Mouse Button: Reverse time.
     * Right Mouse Button: Stop time.
     */
    if (mouseIsPressed) {
        if (mouseButton === LEFT) {
            t += 0.01;
        }
        if (mouseButton === CENTER) {
            t -= 0.01;
        }
        if (mouseButton === RIGHT) {
            t -= 0.005;
        }
    }
    

    spiralExpand(); // Execute Spiral
}

/**
 * SPIRAL ANIMATION AND INTERACTIVE COLOUR INTERPOLATION FUNCTION:
 */
function spiralExpand() {
    // Mapping colour ranges for interpolation:
    let changeX = map(mouseX, 0, width, 17, 360);
    let changeY = map(mouseY, 0, width, 10, 235);
    
    // Setting colours for interpolation:
    let fromColour = color(changeX, 100, 100); // Start of range
    let toColour = color(changeY, 100, 100); // End of range

    // A set of spirals are needed to restrict the growth rate of the spiral width. i.e. If there is only one spiral variable, its width would continuously grow.
    let spiralOne = 0; // Inner Spiral
    let spiralTwo = 0; // Outer Spiral
    let step = 10; // The maximum circumference of the Spiral
    let spiralWidth = 1.5; 
    let dynamicWidth = spiralWidth / 60; // What gives the spiral its "body". Not as evident in this example, must be played around to fully see. For this instance, it makes the chromatics sharper and bolder.
    
    push();
        beginShape(TRIANGLE_STRIP);
            translate(width/6, height/2);

            for (let i = 0; i <= 360 ; i++) { // 360 = Diameter of Spiral
                spiralOne += step; // Generate the Spiral effect (Inner Spiral)
                spiralWidth += dynamicWidth; // Generate the "body" of the Spiral
                spiralTwo = spiralOne + spiralWidth; // Generate the restriction of the growing width (Outer Spiral)
                
                let rotationalSpeed = PI / rotateSpeed; // PI = Represents the circumference of the Spiral

                let spiralOneX = spiralOne * sin(rotationalSpeed * i * t);
                let spiralOneY = spiralOne * cos(rotationalSpeed * i * t);

                let spiralTwoX = spiralTwo * sin(rotationalSpeed * i * t);
                let spiralTwoY = spiralTwo * cos(rotationalSpeed * i * t);
                
                fill(lerpColor(fromColour, toColour, i / 360)); 
                vertex(spiralOneX, spiralOneY);
                vertex(spiralTwoX, spiralTwoY);
            }
        endShape();
    pop();

    t = t + 0.005; // Animate Spiral
  }