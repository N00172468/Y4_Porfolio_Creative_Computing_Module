function setup() {
    createCanvas(500, 500);
    background(200);

    colorMode(HSB, 360, 100, 100);
    angleMode(DEGREES);
    // noStroke();
    rectMode(CENTER);
}

function draw() {
    push(); // Like opening a new layer in Photoshop. Your own temp. coordinate system
        fill(120, 100, 100);
        translate(200, 200);
        rotate(25);
        rect(0, 0, 50, 100);
    pop(); // Like closing that layer in Photoshop

    push();
        translate(200, 200);
        rotate(45);
        rect(0, 0, 50, 100);
    pop();
}