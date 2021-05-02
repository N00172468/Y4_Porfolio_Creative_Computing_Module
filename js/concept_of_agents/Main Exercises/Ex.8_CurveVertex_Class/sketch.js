// For Class Object:
let objArr = [];
let numOfObj = 3;

// For Shape of Object: (Global vars in case for interactions)
let numOfPoints = 16;
let radius = 100;
let speed = 0.01;
let angle

// For Interactions:
let stepX = 0;
let stepY = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    smooth();

    angle = TWO_PI/numOfPoints;

    /**
     * radius * i =
     * 
     * By adding the radius variable and multiplying it by i
     * within the parameter of calling the new object, 
     * 
     * i.e. For each no. of objects, enlarge them. 
     */
    for (let i = 0; i < numOfObj; i++) {
        objArr[i] = new Segment(radius * i);
    }    
}

function draw() {
    background(0, 25);

    for (let i = 0; i < objArr.length; i++) {
        objArr[i].animate();
    }

    if (mouseIsPressed) {
        // Left click = start distorting the vector points
        if (mouseButton === LEFT) {
            stepX = stepX + 1;
            stepY = stepX + 1;
        }
    
        // Middle click = stop distorting the vector points
        if (mouseButton === CENTER) {
            stepX = 0;
            stepY = 0;
        }
    }
}

// function mousePressed() {
//     for (let i = 0; i < numOfObj; i++) {
//         objArr.push(new Segment(radius * i));
//     }
// }