let imageArray = []; // Instead of looping through the same image within the grid, this array would allow that one image to be split into individual images. 
let colorArray = []; // In conjunction to imageArray[], this would allow us to change the colouring of each individual image within the grid.

let imageSize = 250;
let numOfImages = 100;

canvasWidth = 1754;
canvasHeight = 2481;

function preload() {
  for (let i = 0; i < numOfImages; i++) {
    // imageArray[i] = loadImage("assets/pixelFlat.png"); 
    imageArray[i] = loadImage("assets/diptychArt.png"); 
    colorArray[i] = random(125, 255);
    
    // ------------------------------------------------------------------------ //

    /**
     * ATTEMPTS TO VIVIDLY DISPLAY DIFFERENT COLOURS PER IMAGE:
     * 
     * - Result: 
     *    > Successfully manipulated the pixels per image without fully hard-coding however, the changes in colour are not vividly different.
     *    > i.e. The updated colours are only a different shade of themselves.    
     */

    // let mapped = map(mouseX, 0, width, 0, 100);
    // colorArray[i] = random(mapped);
    // colorArray[i] = random(0, 255);
    // to = color(0, 100, 100);
    // from = color(360, 100, 100);
    // let lerped = lerpColor(to, from, 0.5);
    
    // colorArray[i] = random(to, from);
    // let r = random(0, 255);
    // let g = random(0, 255);
    // let b = random(0, 255);

    // colorArray[i] = random(0, 255);
    // colorArray[i] = random(r, g, b);
    // colorArray[i] = color(random(255));

    // ------------------------------------------------------------------------ //
  }
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  pixelDensity(1); // Setting the pixel density for all monitors.

  smooth(); // Anti-aliasing
  imageMode();

  // colorMode(HSB, 360, 100, 100);
  // noLoop();
}

function draw() {
  // randomSeed(16);

  ChangePixelColor();
}

