class Segment {
    constructor( _radius) {
        this.vectorPoints = [];
        this.radius = _radius
        this.centreX = width/2;
        this.centreY = height/2;
        this.setup(); // In constr. so it will only be called once (NO MULTI. LOOPING).
    }
    
    /**
     * Calculates the no. of points and the x & y pos. to create the circumference.
     */
    setup() {
        for (let i = 0; i < numOfPoints; i++) {
            let xPos = cos(angle * i) * this.radius;
            let yPos = sin(angle * i) * this.radius;
            
            this.vectorPoints.push(createVector(xPos, yPos));
        }
    }

    animate() {
        // Translates obj. to centre w/ mouse cursor interaction
        this.centreX += (mouseX - this.centreX) * speed;
        this.centreY += (mouseY - this.centreY) * speed;

        // Mapping funct. for "in & out" illusion effect
        let disappear = map(mouseX, 0, width, 5, 255);
        let reappear = map(mouseY, 0, height, 5, 255);

        for (let i = 0; i < this.vectorPoints.length - 1; i++) {
            push();
                /**
                 * "Invisible trails" illusion
                 * 
                 * Simple trick by adding ellipses in the same loop of the 
                 * curve vertexes and filling them with the same bg. colour.
                 */
                fill(0);
                ellipse(this.vectorPoints[i].x + this.centreX, this.vectorPoints[i].y + this.centreY, 15,15);
                ellipse(this.vectorPoints[this.vectorPoints.length - 1].x + this.centreX, this.vectorPoints[this.vectorPoints.length - 1].y + this.centreY, 15,15);

                /**
                 * Curve Vertex
                 */
                noFill();
                stroke(disappear && reappear);
                beginShape();
                    // 1st = 1st control points / Last = 2nd control points
                    curveVertex(this.vectorPoints[this.vectorPoints.length - 1].x + this.centreX, this.vectorPoints[this.vectorPoints.length - 1].y + this.centreY);

                    for (let i = 0; i < this.vectorPoints.length; i++) {
                        curveVertex(this.vectorPoints[i].x + this.centreX, this.vectorPoints[i].y + this.centreY);
                    }
                    
                    curveVertex(this.vectorPoints[0].x + this.centreX, this.vectorPoints[0].y + this.centreY);  
                    curveVertex(this.vectorPoints[1].x + this.centreX, this.vectorPoints[1].y + this.centreY);

                    // Adds or subtracts random step to x & y on vector points
                    this.vectorPoints[round(random(0, this.vectorPoints.length - 1))].x += random(-stepX, stepX);
                    this.vectorPoints[round(random(0, this.vectorPoints.length - 1))].y += random(-stepY, stepY);
                endShape();
            pop();
        }
    }
}