var c= color(255,50,100);
var x, y= 5;

function setup() {
    createCanvas(600, 400);
    background(c);
}

function draw() {
    noStroke();
    fill(0,20,15);
    ellipse(mouseX, mouseY, 20, 20);
    x= mouseX;
    y= mouseY;
}

function mousePressed(){
    background(c);
}