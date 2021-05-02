let xPos = 250;
let yPos = 250;
let stepSize = 10;
let radius = 10;

function setup() {
    createCanvas(500, 500);
    background(0);
    // noLoop();
}

function draw() {
    background(0, 10);

    // for (let x; x < mouseX; x++) {

        let randomPos = round(random(-stepSize, stepSize));
        let moveX = round(random(-randomPos, randomPos));
        let moveY = round(random(-randomPos, randomPos));
    
        xPos += moveX;
        yPos += moveY;
        
        noStroke();
        fill(random(0, 255), 75);
        ellipse(xPos, yPos, radius, radius);
    // }
}
