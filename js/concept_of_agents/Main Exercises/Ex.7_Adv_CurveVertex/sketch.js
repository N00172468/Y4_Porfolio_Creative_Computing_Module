let objArr = [];
let segmentArr = [];
let numOfSegments = 12;
let radius = 100;

let centreX;
let centreY;
let speed = 0.02;

function setup() {
    createCanvas(windowWidth, windowHeight);
    // createCanvas(500, 500);
    background(0);
    smooth();
    // noLoop();

    let angle = TWO_PI/numOfSegments; // TWO_PI = Circumference
    centreX = width/2;
    centreY = height/2;

    for (let i = 0; i < numOfSegments; i++) {
        let xPos = cos(angle * i) * radius;
        let yPos = sin(angle * i) * radius;
        segmentArr.push(createVector(xPos, yPos));
    }
}

function draw() {
    // background(0);
    background(0, 25);

    let changeX = map(mouseX, 0, width, 0, 255);
    let changeY = map(mouseY, 0, width, 0, 255);
    let fromColour = color(changeX, 0, 0); // Start of range
    let toColour = color(0, 0, changeY); // End of range

    centreX += (mouseX - centreX) * speed;
    centreY += (mouseY - centreY) * speed;

    for (let i = 0; i < segmentArr.length - 1; i++) {
        push();
            // translate(width / 2, height / 2);
            // fill(255, 0, 0);
            fill(0);
            // fill(lerpColor(fromColour, toColour, i / segmentArr.length));
            // fill(lerpColor(fromColour, toColour, i / segmentArr.length));
            ellipse(segmentArr[i].x + centreX, segmentArr[i].y + centreY, 20, 20);
            ellipse(segmentArr[segmentArr.length - 1].x + centreX, segmentArr[segmentArr.length - 1].y + centreY, 20, 20);
        pop();
    }

    for (let i = 0; i < segmentArr.length - 1; i++) {
        push();
            noFill();
            stroke(255);
            // stroke(lerpColor(fromColour, toColour, i / segmentArr.length));
            // fill(50);
            beginShape();
                // translate(width /2, height / 2);
                // translate(mouseX, mouseY);

                // 1st Two = 1st control points, last two = 2nd control points
                curveVertex(segmentArr[segmentArr.length - 1].x + centreX, segmentArr[segmentArr.length - 1].y + centreY);
                // curveVertex(segmentArr[i].x, segmentArr[i].y);
                
                // curveVertex(mouseX, mouseY);

                for (let i = 0; i < segmentArr.length; i++) {
                    curveVertex(segmentArr[i].x + centreX, segmentArr[i].y + centreY);
                    // curveVertex(segmentArr[i].x + mouseX, segmentArr[i].y + mouseY);
                    // curveVertex(segmentArr[1].x, segmentArr[1].y); // i = [0] = Default starting point = Right ("3 o'clock") point of object. Changing the targeted array value will update its default starting point (e.g. [1] = starting point will be a step down)
                }
                
                curveVertex(segmentArr[0].x + centreX, segmentArr[0].y + centreY);  
                curveVertex(segmentArr[1].x + centreX, segmentArr[1].y + centreY);

                // curveVertex(100, 200);
                // curveVertex(300, 300);

                // curveVertex(450, 100);
            endShape();
        pop();
    }
}