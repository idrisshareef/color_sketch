var col= 30;

function setup() {
    createCanvas(340, 260);
	print("setup function!");
	frameRate(5);
}

function draw() {
    background(120,30,col);
    
	if(col<255){
        col+=1;
	}
	console.log(col);
}

function mousePressed(){
	col = 250;
}