// class Point {
//     constructor(_x, _y, _root) {
//       this.position = createVector(_x, _y);
//       this.rootI = _root;
//       this.setPosition = this.position;
//       this.distance =
//         this.rootI && this.setPosition.dist(points[this.rootI].position);
//       this.radius = round(random(minRadius, maxRadius));
//       this.amount = 0;
//       this.finished = false;
//     }
  
//     render() {
//       fill(255);
  
//       if (this.rootI && this.distance > this.radius + points[this.rootI].radius) {
//         this.amount += 0.01;
  
//         this.setPosition = p5.Vector.lerp(
//           this.position,
//           points[this.rootI].setPosition,
//           this.amount
//         );
//         this.distance = this.setPosition.dist(points[this.rootI].setPosition);
//       } else this.setIsFinished();
  
//       ellipse(this.setPosition.x, this.setPosition.y, 20, 20);
//     }
  
//     setIsFinished() {
//       this.finished = true;
//     }
  
//     isFinished() {
//       return this.finished;
//     }
//   }