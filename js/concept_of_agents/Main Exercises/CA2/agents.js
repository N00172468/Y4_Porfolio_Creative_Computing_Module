class Agent {
  constructor(_x, _y) {
    this.pos = createVector(random(width), random(height));
    this.target = createVector(_x, _y);
    this.vel = createVector();
    this.acc = createVector();
    this.maxSpeed = 12;
    this.maxForce = 1.3;
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

      rect(this.pos.x, this.pos.y, agentSize + rms * amplitudeLevel, agentSize + rms * amplitudeLevel); // Connecting agentSize and the rms by the amplitude level will allow the agents to "dance" to the beat of the track.
      } else {
      stroke(255);
      rect(this.pos.x, this.pos.y, agentSize, agentSize);
    }

  }



  /**
   * ------------- BEHAVIOUR FUNCTION: -------------
   */
  behaviours() {
    // Agents finding and "flocking" their places:
    let arrive = this.arriveAtPlace(this.target);
    arrive.mult(1); // Weight of agents flocking
    this.applyForce(arrive);

    // Agents "flying away" from their places:
    let mouseInteraction = createVector(mouseX, mouseY);
    let fly = this.flyAway(mouseInteraction);
    fly.mult(10); // Weight of agents flying away
    this.applyForce(fly);
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
}
