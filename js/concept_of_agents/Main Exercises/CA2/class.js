/**
 * FLOWFIELD CLASS:
 */
 class FlowParticle {
    constructor(_location, _direction, _flowSpeed, _xPointPos, _yPointPos) {
      this.location = _location;
      this.direction = _direction;
      this.flowSpeed = _flowSpeed;
      this.xPointPos = _xPointPos;
      this.yPointPos = _yPointPos;
    }
  
    run() {
      this.move();
      this.checkEdges();
      this.update();
    }
  
    move() {
      let classAngle = noise(this.location.x/noiseScale, this.location.y/noiseScale, frameCount/noiseScale) * TWO_PI * noiseStr;
  
      this.direction.x = cos(classAngle);
      this.direction.y = sin(classAngle);
  
      let velocity = this.direction.copy();
      let directionChange = 1;
  
      velocity.mult(this.speed * directionChange);
      this.location.add(velocity);
    }
  
    checkEdges() {
      if (this.location.x < 0 || this.location.x > width || this.location.y < 0 || this.location.y > height) {    
        this.location.x = random(width * 1.2);
        this.location.y = random(height);
      }
    }
  
    update(){
      fill(255);
      ellipse(this.location.x, this.location.y, this.location.z);
    }
  }