var col= 0;
function setup() {
  // uncomment this line to make the canvas the full size of the window
  createCanvas(600, 400);
}

function draw() {
    background(col);
    col= map(mouseY,0,400,255,0);
    fill(0,255,0);
    ellipse(10,mouseY,45,45);
}