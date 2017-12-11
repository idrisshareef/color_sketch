var col=0;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    col=mouseY;
    background(col);
        
    fill(0,255,0);
    ellipse(10,mouseY,45,45);
}