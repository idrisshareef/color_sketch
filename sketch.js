var col= 30;

function setup() {
    createCanvas(340, 260, webGL);
	print("setup function!");
	frameRate(5);
}

function draw() {
    background(120,30,col);
	
	fill(255,0,0);
	rect(0,0,40,40);
    
	if(col<255){
        col+=1;
	}
	console.log(col);
}

function mousePressed(){
	col = 250;
}