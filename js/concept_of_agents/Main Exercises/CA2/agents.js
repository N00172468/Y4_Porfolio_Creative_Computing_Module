class Agent {
  constructor(_x, _y) {
    this.pos = createVector(random(width), random(height));
    this.target = createVector(_x, _y);
    this.vel = createVector();
    this.acc = createVector();
    this.maxSpeed = 12;
    this.maxForce = 1.3;

    this.angle = 0;
    this.dir = createVector(cos(this.angle), sin(this.angle));
    this.speed = random(0, 5, 2);
  }



  /**
   * ------------- UPDATE FUNCTION: -------------
   */
  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
  }



  /**
   * ------------- SHOW FUNCTION: -------------
   */
  show() {
    let rms = analyser.getLevel(); // rms = Root Mean Square amplitude
    let fromColour = color(255, 0, 0);
    let toColour = color(0, 0, 255);
    let lerpMap = map(mouseX, 0, width, 0, 1.0);
    let activateLerp = lerpColor(fromColour, toColour, lerpMap);

    strokeWeight(strokeThickness);
    fill(activateLerp);
    
    if (isPlaying === true) {
      rectMode(CENTER);
      strokeWeight(strokeThickness / 5);
      stroke(0);

      rect(this.pos.x, this.pos.y, agentSize + rms * amplitudeLevel, agentSize + rms * amplitudeLevel);
      } else {
      stroke(255);
      rect(this.pos.x, this.pos.y, agentSize, agentSize);
    }

  }



  /**
   * ------------- BEHAVIOUR FUNCTION: -------------
   */
  behaviours() {
    let arrive = this.arriveAtPlace(this.target);
    // let flowArrive = this.flowToPlace(this.target);
    arrive.mult(1); // Weight of agents flocking
    this.applyForce(arrive);
    // this.applyForce(flowArrive);

    let mouseInteraction = createVector(mouseX, mouseY);
    let fly = this.flyAway(mouseInteraction);
    // let flowFly = this.flowToPlace(mouseInteraction);
    fly.mult(10); // Weight of agents flying away
    this.applyForce(fly);
    // this.applyForce(flowFly);
  }



  /**
   * ------------- APPLY FORCE FUNCTION: -------------
   * Sub-function of "Behaviour"
   */
  applyForce(f) {
    this.acc.add(f);
  }



  /**
   * ------------- ARRIVE AT PLACE FUNCTION: -------------
   * Sub-function of "Behaviour"
   */
  arriveAtPlace(targ) {
    let wantedVel = p5.Vector.sub(targ, this.pos);
    let dist = wantedVel.mag();
    let speed = this.maxSpeed;

    if (dist < 100) {
      speed = map(dist, 0, 100, 0, this.maxSpeed);
    }
    wantedVel.setMag(speed);

    let flock = p5.Vector.sub(wantedVel, this.vel);
    flock.limit(this.maxForce);
    return flock;
  }



  /**
   * ------------- FLY AWAY FUNCTION: -------------
   * Sub-function of "Behaviour"
   */
  flyAway(targ) {
    let wantedVel = p5.Vector.sub(targ, this.pos);
    let dist = wantedVel.mag();

    if (dist < 50) {
      wantedVel.setMag(this.maxSpeed);
      wantedVel.mult(-1);

      let flock = p5.Vector.sub(wantedVel, this.vel);
      flock.limit(this.maxForce);
      return flock;
    } else {
      return createVector(0, 0);
    }
  }



  /**
   * ------------- FLOWFIELD FUNCTION: -------------
   */
  flowToPlace() {
    let angle = noise(this.pos.x/noiseScale, this.pos.y/noiseScale, frameCount/noiseScale) * TWO_PI * noiseStrength; // 0 - Two PI
    this.dir.x = cos(angle);
    this.dir.y = sin(angle);
    let vel = this.dir.copy();
    let dist = 1;
    vel.mult(this.speed * dist);
    this.pos.add(vel);

    return createVector(0, 0);
  }
}
