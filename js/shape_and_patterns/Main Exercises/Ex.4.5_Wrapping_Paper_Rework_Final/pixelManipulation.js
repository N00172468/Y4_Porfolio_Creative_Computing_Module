/**
 * PIXEL MANIPULATION FUNCTION
 */
function ChangePixelColor() {
    /**
     * - Instead of using a 2-Dimensional Array, the "imageNumber" represents the first image within the grid (i.e. starting at 0, 0).
     * - This is then incremented within the grid loop to count through all of the images (i.e. "imageNumber++").
     * - This would allow the function of "imageArray[i]" and "colourArray[i]" to work within the pixel array.
     */
    let imageNumber = 0;

    for (let y = 0; y < canvasHeight/imageSize; y++) {
      for (let x = 0; x < canvasWidth/imageSize; x++) {
        let transX = x * imageSize;
        let transY = y * imageSize;

        imageNumber++;

        // ------------------------------------------------------------------------ //

        /**
         * ATTEMPTS TO CONVERT THE RGBA VALUE OF THE PIXELS TO HSB:   
         * 
         * - Result: 
         *    > Able to update colours via "colorArray[i] = random(100, 255);" however, this caused limitations on differentiating the colouring.
         *    > i.e. The updated colours are only a different shade of themselves. 
         */

        // const imageHue = hue(imageArray[imageNumber].pixels[index]);
        // const colorArr = [imageArray[imageNumber].pixels[index], imageArray[imageNumber].pixels[index +1], imageArray[imageNumber].pixels[index +2], imageArray[imageNumber].pixels[index+3]]
        // colorArr = [255, 0, 0, 1]
        // colorArr.map(color => color)
        // outputs 255, 0, 0, 1
        // color(`rgba(255,255,25)`);
        // HSB color object ^

        // const colorInRGB  = color(`rgba(${colorArr.map(color => color)})`)

        // const imageHue = hue(colorInRGB)

        // console.log('image hue', colorInRGB, colorArr);

        // ------------------------------------------------------------------------ //
        
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
              
              imageArray[imageNumber].pixels[index] = colorArray[imageNumber];
            }
  
            /**
             * - Check for Black pixels, then change colour: 
             */ 
            if (imageArray[imageNumber].pixels[index] == 0 && imageArray[imageNumber].pixels[index + 1] == 0 && imageArray[imageNumber].pixels[index + 2] == 0) {
              
              imageArray[imageNumber].pixels[index] = colorArray[imageNumber];
              imageArray[imageNumber].pixels[index + 1];
              imageArray[imageNumber].pixels[index + 2] = colorArray[imageNumber];
              imageArray[imageNumber].pixels[index + 3];
            }
  
            /**
             * - Check for Pink pixels, then change colour: 
             */ 
            if (imageArray[imageNumber].pixels[index] == 231 && imageArray[imageNumber].pixels[index + 1] == 1 && imageArray[imageNumber].pixels[index + 2] == 170) {
              
              imageArray[imageNumber].pixels[index] = 0;
              imageArray[imageNumber].pixels[index + 1] = colorArray[imageNumber];
              imageArray[imageNumber].pixels[index + 2] = colorArray[imageNumber];
              imageArray[imageNumber].pixels[index + 3];
            }
  
            /**
             * - Check for Purple pixels, then change colour: 
             */ 
            if (imageArray[imageNumber].pixels[index] == 125 && imageArray[imageNumber].pixels[index + 1] == 1 && imageArray[imageNumber].pixels[index + 2] == 187) {
              
              imageArray[imageNumber].pixels[index] = colorArray[imageNumber] / 5;
              imageArray[imageNumber].pixels[index + 1] = colorArray[imageNumber] / 2;
              imageArray[imageNumber].pixels[index + 2];
              imageArray[imageNumber].pixels[index + 3];
            }
  
            /**
             * - Check for Maroon pixels, then change colour: 
             */ 
            if (imageArray[imageNumber].pixels[index] == 172 && imageArray[imageNumber].pixels[index + 1] == 8 && imageArray[imageNumber].pixels[index + 2] == 6) {
              
              imageArray[imageNumber].pixels[index] = colorArray[imageNumber] / 5;
              imageArray[imageNumber].pixels[index + 1] = colorArray[imageNumber] / 2;
              imageArray[imageNumber].pixels[index + 2];
              imageArray[imageNumber].pixels[index + 3];
            }
  
            /**
             * - Check for Red pixels, then change colour: 
             */ 
            if (imageArray[imageNumber].pixels[index] == 237 && imageArray[imageNumber].pixels[index + 1] == 28 && imageArray[imageNumber].pixels[index + 2] == 37) {
              
              imageArray[imageNumber].pixels[index] = colorArray[imageNumber] / 2;
              imageArray[imageNumber].pixels[index + 1] = colorArray[imageNumber] / 5;
              imageArray[imageNumber].pixels[index + 2];
              imageArray[imageNumber].pixels[index + 3];
            }
  
            /**
             * - Check for Orange pixels, then change colour: 
             */ 
            if (imageArray[imageNumber].pixels[index] == 254 && imageArray[imageNumber].pixels[index + 1] == 126 && imageArray[imageNumber].pixels[index + 2] == 0) {
              
              imageArray[imageNumber].pixels[index] = colorArray[imageNumber] / 2;
              imageArray[imageNumber].pixels[index + 1] = colorArray[imageNumber];
              imageArray[imageNumber].pixels[index + 2];
              imageArray[imageNumber].pixels[index + 3];
            }
  
            /**
             * - Check for Light Orange pixels, then change colour: 
             */ 
            if (imageArray[imageNumber].pixels[index] == 254 && imageArray[imageNumber].pixels[index + 1] == 173 && imageArray[imageNumber].pixels[index + 2] == 1) {
              
              imageArray[imageNumber].pixels[index];
              imageArray[imageNumber].pixels[index + 1];
              imageArray[imageNumber].pixels[index + 2] = colorArray[imageNumber];
              imageArray[imageNumber].pixels[index + 3];
            }
  
            /**
             * - Check for Yellow pixels, then change colour: 
             */ 
            if (imageArray[imageNumber].pixels[index] == 255 && imageArray[imageNumber].pixels[index + 1] == 234 && imageArray[imageNumber].pixels[index + 2] == 0) {
              
              imageArray[imageNumber].pixels[index];
              imageArray[imageNumber].pixels[index + 1] = colorArray[imageNumber];
              imageArray[imageNumber].pixels[index + 2];
              imageArray[imageNumber].pixels[index + 3];
            }

            /**
             * - Check for Green pixels, then change colour: 
             */ 
            if (imageArray[imageNumber].pixels[index] == 81 && imageArray[imageNumber].pixels[index + 1] == 227 && imageArray[imageNumber].pixels[index + 2] == 2) {
              
                imageArray[imageNumber].pixels[index];
                imageArray[imageNumber].pixels[index + 1] = colorArray[imageNumber];
                imageArray[imageNumber].pixels[index + 2];
                imageArray[imageNumber].pixels[index + 3];
              }

            /**
             * - Check for Medium Green pixels, then change colour: 
             */ 
            if (imageArray[imageNumber].pixels[index] == 61 && imageArray[imageNumber].pixels[index + 1] == 180 && imageArray[imageNumber].pixels[index + 2] == 0) {
              
                imageArray[imageNumber].pixels[index] = colorArray[imageNumber];
                imageArray[imageNumber].pixels[index + 1];
                imageArray[imageNumber].pixels[index + 2];
                imageArray[imageNumber].pixels[index + 3];
              }

            /**
             * - Check for Blue pixels, then change colour: 
             */ 
            if (imageArray[imageNumber].pixels[index] == 5 && imageArray[imageNumber].pixels[index + 1] == 104 && imageArray[imageNumber].pixels[index + 2] == 172) {
              
                imageArray[imageNumber].pixels[index] = colorArray[imageNumber];
                imageArray[imageNumber].pixels[index + 1] = colorArray[imageNumber];
                imageArray[imageNumber].pixels[index + 2];
                imageArray[imageNumber].pixels[index + 3];
              }

            /**
             * - Check for Cyan pixels, then change colour: 
             */ 
            if (imageArray[imageNumber].pixels[index] == 0 && imageArray[imageNumber].pixels[index + 1] == 170 && imageArray[imageNumber].pixels[index + 2] == 214) {
              
                imageArray[imageNumber].pixels[index] = colorArray[imageNumber];
                imageArray[imageNumber].pixels[index + 1] = colorArray[imageNumber];
                imageArray[imageNumber].pixels[index + 2];
                imageArray[imageNumber].pixels[index + 3];
              }

            /**
             * - Check for Violet pixels, then change colour: 
             */ 
            if (imageArray[imageNumber].pixels[index] == 125 && imageArray[imageNumber].pixels[index + 1] == 0 && imageArray[imageNumber].pixels[index + 2] == 187) {
              
                imageArray[imageNumber].pixels[index];
                imageArray[imageNumber].pixels[index + 1] = colorArray[imageNumber];
                imageArray[imageNumber].pixels[index + 2];
                imageArray[imageNumber].pixels[index + 3];
              }
          }
          imageArray[imageNumber].updatePixels();
        pop();
      } 
    }
  }