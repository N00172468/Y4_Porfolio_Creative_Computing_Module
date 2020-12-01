let img;
let img1;
let img2;
let images = [];
let numOfImages = 3;
let imageSize = 200;

function preload() {
  // img = loadImage("assets/van.png");

  // let randomNum = round(random(0, 1));

  // if (randomNum == 0) {
  //   img = loadImage("assets/van.png");
  // } else {
    //   img = loadImage("assets/vanFlipped.png");
    // }
    img1 = loadImage("assets/van.png");
    img2 = loadImage("assets/vanFlipped.png");
}

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(imageSize * numOfImages, imageSize * numOfImages, P2D);

  // colorMode(HSB, 360, 100, 100); // Max. HSB
  pixelDensity(1); // Setting the pixel density for all monitors.

  createImages();
}

function draw() {
    background(0);
    
    renderImages();
}

function renderImages() {
    images.forEach(patternImage => {
      //This effects each IMAGE:
      patternImage.render();

      //This effects each PIXEL:
      // patternImage.changePixelColor();
    });
}

function createImages() {
  for (let i = 0; i < numOfImages; i++) {
    for(let j = 0; j < numOfImages; j++) {
      images.push(new PatternImage(
        // imageSize, imageSize, imageSize * i, imageSize * j, img)
        imageSize, imageSize, imageSize * i, imageSize * j, img1, img2)
      );
    }
  }
}