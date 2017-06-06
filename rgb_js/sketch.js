var col=150;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(120,30,col);
    while(col<255){
        col+=2;
    }
}