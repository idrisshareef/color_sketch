var col=10;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
	print("setup function!");
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