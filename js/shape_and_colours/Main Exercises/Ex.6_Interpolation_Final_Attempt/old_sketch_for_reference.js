// Time:
let t = 0; 

// Magnet Variables:
let friction = 0.99;
let maxAge = 100;
let maxSpeed = 10;
var particles = [];
var magnet;
var magnetStrength = 500;

function setup() {
    createCanvas(windowWidth, windowHeight);

    colorMode(HSB, 360, 100, 100); // Max. HSB
    noStroke();
    smooth();

    magnet = createVector(250,360);
}

function draw() {
    background(0, 0, 0);

    spiralExpand();
    spiralAbstract();

    push();
        // fill(360, 0, 100);
        noFill();
        ellipse(magnet.x,magnet.y,50,50);    
    pop();
    
    
    particles.push(new particle(mouseX,mouseY,random(-1,1),random(-1,1)));
    for (let p of particles){
        p.draw();
        p.move();
        p.magnet();
    }
    particles = particles.filter(p => { return p.age < maxAge})
}

// ADD PARTICLES GETTING SUCKED INTO CENTRE WHILE IT CHANGES COLOUR WHEN PASSED RANGE???
function particle(x, y, xvel, yvel){
    this.pos = createVector(x,y);
    this.vel = createVector(xvel,yvel);
    this.age = 0;

    let changeX = map(mouseX, 0, width, 17, 235);
    let changeY = map(mouseY, 0, width, 10, 235);
    
    // let fromColour = color(60, 100, 100);
    // let toColour = color(280, 100, 100);
    let fromColour = color(changeX, 100, 100);
    let toColour = color(changeY, 100, 100);

    let shrink = map(mouseX, width, 10, 50, 0);

    this.draw = function(){
        push();
            // stroke(fromColour, toColour, xvel / this.pos.x);
            stroke(lerpColor(fromColour, toColour, xvel / this.pos.x));
            noFill()
            // ellipse(this.pos.x, this.pos.y, 20, 20);
            ellipse(this.pos.x, this.pos.y, shrink, shrink);
        pop(); 
    }

    this.move = function(){
    this.pos.add(this.vel);
    this.vel.mult(friction);
    this.vel.limit(maxSpeed);
    this.age++;
    }

    this.magnet = function(){
        var magpull = p5.Vector.sub(magnet,this.pos);
        var magstrength = magnetStrength / this.pos.dist(magnet);
        magpull.normalize().mult(magstrength);
        this.vel.add(magpull);
    }
}

function spiralExpand() {
    let changeX = map(mouseX, 0, width, 17, 360);
    let changeY = map(mouseY, 0, width, 10, 235);
    
    let fromColour = color(changeX, 100, 100);
    let toColour = color(changeY, 100, 100);

    let spiralOne = 0;
    let spiralTwo = 0;
    let step = 10;
    let spiralWidth = 1.5;
    let dynamicWidth = spiralWidth / 250;
    
    push();
        beginShape(TRIANGLE_STRIP);
            translate(width/6, height/2);

            for (let i = 0; i <= 360 ; i++) {
                spiralOne += step;
                spiralWidth += dynamicWidth;
                spiralTwo = spiralOne + spiralWidth;
                
                let rotationalSpeed = PI / 10;

                let spiralOneX = spiralOne * sin(rotationalSpeed * i * t);
                let spiralOneY = spiralOne * cos(rotationalSpeed * i * t);

                let spiralTwoX = spiralTwo * sin(rotationalSpeed * i * t);
                let spiralTwoY = spiralTwo * cos(rotationalSpeed * i * t);
                
                fill(lerpColor(fromColour, toColour, i / 360)); 
                vertex(spiralOneX, spiralOneY);
                vertex(spiralTwoX, spiralTwoY);
            }
        endShape();
    pop();

    t = t + 0.005;
  }

  function spiralAbstract() {
    let changeX = map(mouseX, 0, width, 120, 60);
    let changeY = map(mouseY, 0, width, 300, 150);

    let fromColour = color(changeX, 100, 100);
    let toColour = color(changeY, 100, 100);

    let spiralOne = 0;
    let spiralTwo = 0;
    let step = 1;
    let spiralWidth = 20;
    let dynamicWidth = spiralWidth / 50;
    
    push();
        beginShape(TRIANGLE_STRIP);
            translate(width/6, height/2);

            for (let i = 0; i <= 50 ; i++) {
                spiralOne += step;
                spiralWidth -= dynamicWidth;
                spiralTwo = spiralOne + spiralWidth;
                
                let rotationalSpeed = PI / -10;

                let spiralOneX = spiralOne * sin(rotationalSpeed * i * t);
                let spiralOneY = spiralOne * cos(rotationalSpeed * i * t);

                let spiralTwoX = spiralTwo * sin(rotationalSpeed * i * t);
                let spiralTwoY = spiralTwo * cos(rotationalSpeed * i * t);
                
                fill(lerpColor(fromColour, toColour, i / 50)); 
                vertex(spiralOneX, spiralOneY);
                vertex(spiralTwoX, spiralTwoY);
            }
        endShape();
    pop();

    t = t + 0.005;
    }