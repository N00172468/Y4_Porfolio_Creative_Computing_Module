let img1;
let img2;
let numOfImages = 3;
// let imageSize = 235; // Fit Laptop Monitor.
let imageSize = 310; // Fit Desktop Monitor.

function preload() {
  // img1 = loadImage("assets/customPiece1.png");
  // img2 = loadImage("assets/customPiece2.png");
  img1 = loadImage("assets/customPiece1_noClouds.png");
  img2 = loadImage("assets/customPiece2_noClouds.png");
}

/**
 * SETUP FUNCTION
 */
function setup() {
  createCanvas(imageSize * numOfImages, imageSize * numOfImages, P2D);

  pixelDensity(1); // Setting the pixel density for all monitors.
  // colorMode(HSB, 360, 100, 100); // Max. HSB

  smooth(); // Anti-aliasing
  imageMode(CENTER); // Prevents object from rotating on the top-left corner. Enables rotation within centre of object.
}

/**
 * DRAW FUNCTION
 */
function draw() {
  randomSeed(16); // Setting the seed value to return the same pseudo-random numbers every time.
  // randomSeed(108); 
  // randomSeed(116); 

  ChangePixelColor();
}

/**
 * PIXEL MANIPULATION FUNCTION
 */
function ChangePixelColor() {
  for (let y = 0; y < numOfImages; y++) {
    for (let x = 0; x < numOfImages; x++) {
      let transX = x * imageSize + imageSize / 2;
      let transY = y * imageSize + imageSize / 2;
      let randomNum = round(random(0, 1));
      let manipulateColor = random(0);

      if (randomNum == 0) { // ------ IMG1 ------ 
        push();
          translate(transX, transY);
  
            image(img1, numOfImages, numOfImages, imageSize, imageSize);
            img1.loadPixels();
    
            for (let index = 0; index < img1.pixels.length; index += 4) { 
    
              /**
               * Check for white pixels, then change colour: 
               */ 
              if (img1.pixels[index] == 255 && img1.pixels[index + 1] == 255 && img1.pixels[index + 2] == 255 && img1.pixels[index + 3] == 255) {
                // let c = color(255, 255, 0);
                // let value = hue(c)

                // Update White to Yellow:
                img1.pixels[index] = 255;
                img1.pixels[index + 1] = 255;
                img1.pixels[index + 2] = 0;
                img1.pixels[index + 3];
              }

              /**
               * Check for pink pixels, then change colour: 
               */ 
              if (img1.pixels[index] == 237 && img1.pixels[index + 1] == 55 && img1.pixels[index + 2] == 115 && img1.pixels[index + 3] == 255) {
    
                // Update Pink to Dark Purple:
                img1.pixels[index] = 204;
                img1.pixels[index + 1] = 0;
                img1.pixels[index + 2] = 204;
                img1.pixels[index + 3];
              }

              /**
               * Check for blue pixels, then change colour
               */
              if (img1.pixels[index] == 23 && img1.pixels[index + 1] == 128 && img1.pixels[index + 2] == 195) {

                // Update Blue to Royal Purple:
                img1.pixels[index] = 133;
                img1.pixels[index + 1] = 2;
                img1.pixels[index + 2] = 255;
                img1.pixels[index + 3];
              }
            }
            img1.updatePixels();
          pop();
      } else { // ------ IMG2 ------
        
        push();
          translate(transX, transY);
  
          image(img2, numOfImages, numOfImages, imageSize, imageSize);
          img2.loadPixels();
  
          for (let index = 0; index < img2.pixels.length; index += 4) {

            /**
             * Check for white pixels, then change colour: 
             */ 
            if (img2.pixels[index] == 255 && img2.pixels[index + 1] == 255 && img2.pixels[index + 2] == 255 && img2.pixels[index + 3] == 255) {
  
              // Update White to Neon Purple:
              img2.pixels[index] = 255;
              img2.pixels[index + 1] = 0;
              img2.pixels[index + 2] = 242;
              img2.pixels[index + 3];
            }

            /**
             * Check for pink pixels, then change colour: 
             */ 
            if (img2.pixels[index] == 237 && img2.pixels[index + 1] == 55 && img2.pixels[index + 2] == 115 && img2.pixels[index + 3] == 255) {
  
              // Pink to Yellow:
              img2.pixels[index] = 255;
              img2.pixels[index + 1] = 255;
              img2.pixels[index + 2] = 0;
              img2.pixels[index + 3];
            }

            /**
             * Check for blue pixels, then change colour
             */
            if (img2.pixels[index] == 23 && img2.pixels[index + 1] == 128 && img2.pixels[index + 2] == 195) {

              // Update Blue to Orange:
              img2.pixels[index] = 255;
              img2.pixels[index + 1] = 153;
              img2.pixels[index + 2] = 0;
              img2.pixels[index + 3];
            }

            /**
             * Check for dark navy blue pixels, then change colour
             */
            // if (img2.pixels[index] == 36 && img2.pixels[index + 1] == 38 && img2.pixels[index + 2] == 73) {

            //   // Update Dark Navy Blue to Navy Blue:
            //   img2.pixels[index] = 12;
            //   img2.pixels[index + 1] = 19;
            //   img2.pixels[index + 2] = 120;
            //   img2.pixels[index + 3];
            // }
          }
          img2.updatePixels();
        pop();
      }
    }
  }
}
