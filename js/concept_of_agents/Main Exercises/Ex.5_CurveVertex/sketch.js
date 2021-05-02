let segmentArr = [];
// let numOfSegments = 6;
let segmentLength = 100;
let segmentWeight = 1;

function setup() {
    // createCanvas(windowWidth, windowHeight);
    createCanvas(500, 500);
    background(0);
    smooth();
    // noLoop();

    for (let i = 0; i < 6; i++) {
        segmentArr.push(i);
      }
}

function draw() {
    // background(0);
    object();
}

function object() {
    let stepAngle = TWO_PI / segmentArr.length; // TWO_PI = Circumference

    for (let i = 0; i <= segmentArr.length; i += stepAngle) {
        push();
            translate(width / 2, height / 2);
            rotate(i);

            stroke(255); 
            strokeWeight(segmentWeight);
            line(0, 0, segmentLength, segmentLength);
        pop();
    }
}