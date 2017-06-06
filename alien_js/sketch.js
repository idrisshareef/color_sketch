var col=(0,100,30);
var etX=250;
var etY=140;

function setup() {
  createCanvas(600, 400);
};

function draw() {
    background(col);
    col= map(mouseY,0,400,255,0);
    ellipseMode(CENTER);
    rectMode(CENTER);
    etX= mouseX;

//body
    stroke(0);
    fill(5,100,10,50);
    rect(etX-10,etY,20,100);
//head
    fill(0,255,0);

    ellipse(etX-10,etY-25,60,60);
    fill(0);
//eyes
    ellipse(etX-29,etY-25,16,32);
    ellipse(etX+9,etY-25,16,32);
//legs
    stroke(0);
    line(etX-20,etY+50,etX-30,etY+65);
    line(etX,etY+50,etX+10,etY+65);

    etX+=1;
    etX= (etX>width) ? 60;
};
