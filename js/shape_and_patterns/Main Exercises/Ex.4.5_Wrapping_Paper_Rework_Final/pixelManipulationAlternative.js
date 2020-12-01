/**
 * PIXEL MANIPULATION FUNCTION FOR ALTERNATIVE IMAGE
 * 
 * - An alternative pixel manipulation file for the "assets/diptychArt.png" image.
 */
function ChangePixelColor() {
    let imageNumber = 0;

    for (let y = 0; y < canvasHeight/imageSize; y++) {
      for (let x = 0; x < canvasWidth/imageSize; x++) {
        let transX = x * imageSize;
        let transY = y * imageSize;

        imageNumber++;
        
        push();
          image(imageArray[imageNumber], transX, transY,imageSize, imageSize);
          
          imageArray[imageNumber].loadPixels();
  
          for (let index = 0; index < imageArray[imageNumber].pixels.length; index += 4) { 
          
            /**
             * BACKGROUND:
             * 
             * - Check for White pixels, then change colour: 
             */ 
            if (imageArray[imageNumber].pixels[index] == 255 && imageArray[imageNumber].pixels[index + 1] == 255 && imageArray[imageNumber].pixels[index + 2] == 255) {
              
              imageArray[imageNumber].pixels[index] = 0;
              imageArray[imageNumber].pixels[index + 1] = colorArray[imageNumber];
              imageArray[imageNumber].pixels[index + 2] = 0;
              imageArray[imageNumber].pixels[index + 3];
            }

            /**
             * - Check for Cyan pixels, then change colour: 
             */ 
            if (imageArray[imageNumber].pixels[index] == 0 && imageArray[imageNumber].pixels[index + 1] == 255 && imageArray[imageNumber].pixels[index + 2] == 255) {
              
              imageArray[imageNumber].pixels[index] = colorArray[imageNumber];
              imageArray[imageNumber].pixels[index + 1] = colorArray[imageNumber];
              imageArray[imageNumber].pixels[index + 2] = 0;
              imageArray[imageNumber].pixels[index + 3];
            }
  
            /**
             * - Check for Purple pixels, then change colour: 
             */ 
            if (imageArray[imageNumber].pixels[index] == 138 && imageArray[imageNumber].pixels[index + 1] == 43 && imageArray[imageNumber].pixels[index + 2] == 226) {
              
              imageArray[imageNumber].pixels[index] = 0;
              imageArray[imageNumber].pixels[index + 1] = colorArray[imageNumber];
              imageArray[imageNumber].pixels[index + 2] = colorArray[imageNumber];
              imageArray[imageNumber].pixels[index + 3];
            }

            /**
             * - Check for Deep Pink pixels, then change colour: 
             */ 
            if (imageArray[imageNumber].pixels[index] == 255 && imageArray[imageNumber].pixels[index + 1] == 1 && imageArray[imageNumber].pixels[index + 2] == 137) {
              
              imageArray[imageNumber].pixels[index] = colorArray[imageNumber];
              imageArray[imageNumber].pixels[index + 1] = 0;
              imageArray[imageNumber].pixels[index + 2] = colorArray[imageNumber];
              imageArray[imageNumber].pixels[index + 3];
            }

            /**
             * - Check for Yellow pixels, then change colour: 
             */ 
            if (imageArray[imageNumber].pixels[index] == 255 && imageArray[imageNumber].pixels[index + 1] == 255 && imageArray[imageNumber].pixels[index + 2] == 0) {
              
              imageArray[imageNumber].pixels[index + 1] = colorArray[imageNumber];
              imageArray[imageNumber].pixels[index + 3];
            }
          }
          imageArray[imageNumber].updatePixels();
        pop();
      } 
    }
  }