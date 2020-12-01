rectLoop = 75;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    // RGB to HSB:
    colorMode(HSB, width, height, 100); 
}

function draw() {
    // HSB Canvas:
    // let stepX = 15;
    // let stepY = 15;

    // Interactive HSB Canvas with Mouse:
    let stepX = mouseX + 1;
    let stepY = mouseY + 1;

    for (let y = 0; y < height; y = y + stepY) {
        for (let x = 0; x < width; x = x + stepX) {
            noStroke();
            fill(x, height - y, 100);
            rect(x, y, stepX, stepY);
        }
    }
}

// Key Bind Interactivity:
function keyPressed() {
    if (key=='s' || key=='S') {
        // saveCanvas('Carlo', 'png');
        saveCanvas(gd.timestamp(), 'png');
    }
}