let font;
let fontPath;
let path;
let text = "VIE";
let pathArray;
let twoDArr = [];

let startingShape = -1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  noLoop();

  opentype.load('./data/Neutral Face/NeutralFace.otf', function(err, f) {
    if (err) {
      console.log(err);
    } else {
      font = f;
      loop();
    }
  });
}

function draw() {
  background(255);
  fill(0);
  
  if (startingShape) {
    if (!font) return;

    translate(width/4.5,height/1.2);
    fontPath = font.getPath(text, 0, 0, 400); // text, x offset, y offset, fontsize
    path = new g.Path(fontPath.commands);
    pathArray = path.commands;
    
    // Taking out resampling will get all z points again
    // path = g.resampleByAmount(path, 500); // change amount of pathing points
    // path = g.resampleByLength(path, 10); // change amount of pathing points
  
    for (let i = 0; i < pathArray.length; i++) {
      if (pathArray[i].type == "Z") {
        twoDArr.push(pathArray.slice(startingShape + 1, i)) // slice() = JS array funct. that allows to return the start & end of the objects within the array. 
        startingShape = i;
      }
    }
  }

  for (let i = 0; twoDArr.length; i++) {
    beginShape();
    
    for (let j = 0; j < twoDArr[i].length; j++) {
      // If no previous shape, do nothing
      if (i == 0) { 
      }
      // Else, check if next shape starts further right than last
      else if (twoDArr[i][j].x > twoDArr[i - 1][0].x) { 
        fill(0);
      }

      if (twoDArr[i][j].type == "L") {
        vertex(twoDArr[i][j].x, twoDArr[i][j].y);
      } else {
        vertex(twoDArr[i][j].x, twoDArr[i][j].y);
      }
    }
    endShape(CLOSE);
  }

  // let tracker = 0; // Tracks where Z is in the array
  // for (let j = tracker; j < path.commands.length; j++) {
  //   stroke(255, 0, 0);
  //   noFill();
  //   beginShape();
  //     for (let i = 0; i < path.commands.length; i++) {
  //       if (path.commands[i].type == "Z") {
  //         tracker = i + 1;
  //         break;
  //       }
  //       tracker = i + 1;
  //       vertex(path.commands[i].x, path.commands[i].y);

  //       // let jPath = path.commands[j];
  //       // let iPath = path.commands[i];
  //       // twoDArr = [jPath, iPath];
  //       // vertex(twoDArr.x, twoDArr.y);
  //     }
  //   endShape(CLOSE);
  // }
  // console.log("No. of points = " + path.commands.length);
  // console.log("Z in array = " + tracker); // Tracks where Z is in the array
  // noLoop();
}