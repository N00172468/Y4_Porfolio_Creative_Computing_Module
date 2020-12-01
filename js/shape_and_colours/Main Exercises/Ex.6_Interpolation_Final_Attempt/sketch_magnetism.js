let t = 0; // Set time

// Magnet Variables:
let friction = 0.99;
let maxAge = 100;
let maxSpeed = 10;
let particles = [];
let magnet;
let magnetStrength = 500;
let radius = 15;


function setup() {
    createCanvas(windowWidth, windowHeight);

    colorMode(HSB, 360, 100, 100); // Max. HSB
    noStroke();
    smooth(); // Anti-aliasing

    magnet = createVector(250,360);
}

function draw() {
    background(0, 0, 0);

    spiralAbstract(); // Execute Spiral
    // mousePressed();

    push();
        // fill(360, 0, 100);
        noFill();
        ellipse(magnet.x,magnet.y,50,50);    
    pop();

    particles.push(new particle(mouseX, mouseY, random(-1,1), random(-1,1)));
    for (let p of particles){
        // p.draw();
        // p.move();
        // p.magnet();

        /**
         * MOUSE CLICK-AND-HOLD INTERACTIONS:
         * 
         * Left Mouse Button: Activate Particles (Kind of broken).
         */
        if (mouseIsPressed) {
                if (mouseButton === LEFT) {
                    p.draw();
                    p.move();
                    p.magnet();
                }
            }
    }
    particles = particles.filter(p => { return p.age < maxAge }) // Delete particle after its age expires.
}

/** 
 * - ADD PARTICLES GETTING SUCKED INTO CENTRE WHILE IT 
 *   CHANGES COLOUR WHEN PASSED CERTAIN RANGE.
 * 
 * - Shrink particles when it gets closer to magnet.
 * 
 * BROKEN! Work in progress!   
 */
function particle(x, y, xv, yv){
    this.pos = createVector(x, y);
    this.velocity = createVector(xv, yv);
    this.age = 0;

    let changeX = map(mouseX, 0, width, 17, 235);
    let changeY = map(mouseY, 0, width, 10, 235);
    
    let fromColour = color(changeX, 100, 100);
    let toColour = color(changeY, 100, 100);

    // Mapping the radius of particles depending on the position of the cursor (Work in Progress)
    let shrink = map(mouseX, width, 10, 20, 0);

    /**
     * DRAW FUNCTION:
     */
    this.draw = function(){
        push();
            stroke(lerpColor(fromColour, toColour, xv / this.pos.x));
            noFill()
            // ellipse(this.pos.x, this.pos.y, radius, radius);
            ellipse(this.pos.x, this.pos.y, shrink, shrink);
        pop(); 
    }

    /**
     * MOVE FUNCTION:
     */
    this.move = function(){
        this.pos.add(this.velocity);
        this.velocity.mult(friction);
        this.velocity.limit(maxSpeed);
        this.age++;
        // radius = radius - 1;
    }

    this.magnet = function(){
        var magnetPull = p5.Vector.sub(magnet,this.pos);
        var magnetStrength = magnetStrength / this.pos.dist(magnet);
        magnetPull.normalize().mult(magnetStrength);
        this.velocity.add(magnetPull);
    }
}

function mousePressed() {
    particles.push(new particle(mouseX, mouseY, random(-1,1), random(-1,1)));
    for (let p of particles){
        p.draw();
    }
}

/**
 * SPIRAL ANIMATION AND INTERACTIVE COLOUR INTERPOLATION FUNCTION:
 */
function spiralAbstract() {
    // Mapping colour ranges for interpolation:
    let changeX = map(mouseX, 0, width, 17, 360);
    let changeY = map(mouseY, 0, width, 10, 235);

    // Setting colours for interpolation:
    let fromColour = color(changeX, 100, 100); // Start of range
    let toColour = color(changeY, 100, 100); // End of range

    // A set of spirals are needed to restrict the growth rate of the spiral width. i.e. If there is only one spiral variable, its width would continuously grow.
    let spiralOne = 0; // Inner Spiral
    let spiralTwo = 0; // Outer Spiral
    let step = 1; // The maximum circumference of the Spiral
    let spiralWidth = 2;
    let dynamicWidth = spiralWidth / 190; // What gives the spiral its "body". Not as evident in this example, must be played around to fully see. For this instance, it makes the chromatics sharper and bolder.

    push();
        beginShape(TRIANGLE_STRIP);
            translate(width/6, height/2);

            for (let i = 0; i <= 190 ; i++) { // 190 = Diameter of Spiral
                spiralOne += step; // Generate the Spiral effect (Inner Spiral)
                spiralWidth -= dynamicWidth; // Generate the "body" of the Spiral
                spiralTwo = spiralOne + spiralWidth; // Generate the restriction of the growing width (Outer Spiral)
                
                let rotationalSpeed = PI / -10; // PI = Represents the circumference of the Spiral

                let spiralOneX = spiralOne * sin(rotationalSpeed * i * t);
                let spiralOneY = spiralOne * cos(rotationalSpeed * i * t);

                let spiralTwoX = spiralTwo * sin(rotationalSpeed * i * t);
                let spiralTwoY = spiralTwo * cos(rotationalSpeed * i * t);
                
                fill(lerpColor(fromColour, toColour, i / 190)); 
                vertex(spiralOneX, spiralOneY);
                vertex(spiralTwoX, spiralTwoY);
            }
        endShape();
    pop();

    t = t + 0.005; // Animate Spiral
}