function setup() {
  createCanvas(400, 400);
  background(225,226,226);
}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}

function doubleClicked() {
    background(225,226,226);
}
s
function draw() {
  
  strokeWeight(3);
  circle(mouseX, mouseY, 15);
  fill(50,50,50,50);
  stroke(255,0,0);

}

