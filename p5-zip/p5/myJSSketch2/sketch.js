var col;
var posX=0;
function setup() {
    createCanvas(600, 400);
}

function draw() {
    col=posX;
    background(0);
    fill(col);
    noStroke();
    ellipse(posX,mouseY,45,45);
}