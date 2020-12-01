class PatternImage {
    // constructor(width, height, x, y, image) {
    constructor(width, height, x, y, image1, image2) {
        this.width = width
        this.height = height
        this.x = x
        this.y = y
        // this.image = image;
        this.image1 = image1;
        this.image2 = image2;
    }

    render() {
        randomSeed(99);
        let randomNum = round(random(0, 1));

        if (randomNum == 0) {
            push();
                // filter(INVERT);
                image(this.image1, this.x, this.y, this.width, this.height);
            pop();
        } else {
            push();
                // filter(INVERT);
                image(this.image2, this.x, this.y, this.width, this.height);
            pop();
        }
        // push();
        //     // filter(INVERT);
        //     image(this.image, this.x, this.y, this.width, this.height);
        // pop();
    }

    changePixelColor() {
        let randomNum = round(random(0, 1));

        if (randomNum == 0) {
            this.image1.loadPixels();
    
            for (let i = 0; i < this.image1.pixels.length; i += 4) { // Loops through all pixels of image
                let r = this.image1.pixels[i + 0];
                let g = this.image1.pixels[i + 1];
                let b = this.image1.pixels[i + 2];
                let a = this.image1.pixels[i + 3];
                // let a = this.image.pixels[i + 5];
    
                // b&w filter:
                let blackAndWhite = (r + g + b) / 3;
    
                // purple tint:
                let purpleTint = random(r, 255) + g + random(b, 255); 
    
                // red
                this.image1.pixels[i + 0] = r;
                // this.image.pixels[i + 0] = random(0, 255);
                
                // green
                this.image1.pixels[i + 1] = g;
                // this.image.pixels[i + 1] = random(0, 255);
                
                // blue
                this.image1.pixels[i + 2] = b;
                // this.image.pixels[i + 2]= random(0,255);
                
                // alpha
                this.image1.pixels[i + 3] = a;
                // this.image.pixels[i + 3] = random(0,255);
            }
            this.image1.updatePixels();
        } else {
            this.image2.loadPixels();
    
            for (let i = 0; i < this.image2.pixels.length; i += 4) { // Loops through all pixels of image
                let r = this.image2.pixels[i + 0];
                let g = this.image2.pixels[i + 1];
                let b = this.image2.pixels[i + 2];
                // let a = this.image2.pixels[i + 3];
                let a = this.image2.pixels[i + 5];
    
                // b&w filter:
                let blackAndWhite = (r + g + b) / 3;
    
                // purple tint:
                let purpleTint = random(r, 255) + g + random(b, 255); 
    
                // red
                this.image2.pixels[i + 0] = r;
                // this.image.pixels[i + 0] = random(0, 255);
                
                // green
                this.image2.pixels[i + 1] = g;
                // this.image.pixels[i + 1] = random(0, 255);
                
                // blue
                this.image2.pixels[i + 2] = b;
                // this.image.pixels[i + 2]= random(0,255);
                
                // alpha
                this.image2.pixels[i + 3] = a;
                // this.image.pixels[i + 3] = random(0,255);
            }
            this.image2.updatePixels();
        }
    }
}

// changePixelColor() {for (let i = 0; i < this.image1.pixels.length; i += 4) { // Loops through all pixels of image
//         let r = this.image1.pixels[i + 0];
//         let g = this.image1.pixels[i + 1];
//         let b = this.image1.pixels[i + 2];
//         let a = this.image1.pixels[i + 3];
//         // let a = this.image.pixels[i + 5];

//         // b&w filter:
//         let blackAndWhite = (r + g + b) / 3;

//         // purple tint:
//         let purpleTint = random(r, 255) + g + random(b, 255); 

//         // red
//         this.image1.pixels[i + 0] = r;
//         // this.image.pixels[i + 0] = random(0, 255);
        
//         // green
//         this.image1.pixels[i + 1] = g;
//         // this.image.pixels[i + 1] = random(0, 255);
        
//         // blue
//         this.image1.pixels[i + 2] = b;
//         // this.image.pixels[i + 2]= random(0,255);
        
//         // alpha
//         this.image1.pixels[i + 3] = a;
//         // this.image.pixels[i + 3] = random(0,255);
//     }
//     this.image1.updatePixels();
// }







//   __
// <(o )___
//  ( ._> /  <---🥓🥓🍜
//   `---'  
// DON'T TOUCH THE DUCK