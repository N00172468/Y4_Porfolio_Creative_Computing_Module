let segmentArr = [];
let numOfSegments = 10;
let radius = 100;

function setup() {
    // createCanvas(windowWidth, windowHeight);
    createCanvas(500, 500);
    background(0);
    smooth();
    // noLoop();

    let angle = TWO_PI/numOfSegments; // TWO_PI = Circumference

    for (let i = 0; i < numOfSegments; i++) {
        let xPos = cos(angle * i) * radius;
        let yPos = sin(angle * i) * radius;
        segmentArr.push(createVector(xPos, yPos));
    }
}

function draw() {
    background(0, 25);

    for (let i = 0; i < segmentArr.length - 1; i++) {
        push();
            translate(width / 2, height / 2);
            fill(255, 0, 0);
            ellipse(segmentArr[i].x, segmentArr[i].y, 10, 10);
            ellipse(segmentArr[segmentArr.length - 1].x, segmentArr[segmentArr.length - 1].y, 10, 10);
        pop();

    }

    for (let i = 0; i < segmentArr.length - 1; i++) {
        // push();
        //     translate(width /2, height / 2);
        //     stroke(255);
        //     line(segmentArr[i].x, segmentArr[i].y, segmentArr[i + 1].x, segmentArr[i + 1].y);
        //     line(segmentArr[segmentArr.length - 1].x, segmentArr[segmentArr.length - 1].y, segmentArr[0].x, segmentArr[0].y);
        // pop();

        // fill(255);
        // ellipse(50, 300, 10, 10);
        // ellipse(250, 200, 10, 10);

        push();
            noFill();
            stroke(255);
            beginShape();
                // translate(width /2, height / 2);
                translate(mouseX, mouseY);
                // 1st Two = 1st control points, last two = 2nd control points
                // curveVertex(50, 300);
                curveVertex(segmentArr[segmentArr.length - 1].x, segmentArr[segmentArr.length - 1].y);

                for (let i = 0; i < segmentArr.length; i++) {
                    curveVertex(segmentArr[i].x, segmentArr[i].y);
                }
                curveVertex(segmentArr[0].x, segmentArr[0].y);
                curveVertex(segmentArr[1].x, segmentArr[1].y);

                // curveVertex(100, 200);
                // curveVertex(300, 300);

                // curveVertex(450, 100);
            endShape();
        pop();
    }
}