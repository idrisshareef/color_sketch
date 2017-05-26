var symbolSize= 26;
//var stream;

function setup(){
	createCanvas(window.innerWidth, window.innerHeight);
	background(0);
	var x = 0;
	var y = 0;

	textSize(symbolSize);
}
function draw(){
	background(0);

	
}
function Symbol(x,y,speed){
	this.x= x;
	this.y= y;
	this.value;
	this.speed= speed;
	this.switchInterval= round(random(2,20));
	
	this.setToRandomSymbol= function(){
		this.value = (frameCount % this.switchInterval == 0) ? String.fromCharCode(0x30A0+ round(random(0,96)))
		}
	}

	this.rain= function(){
		this.y=(this.y >= height) ? 0 : this.y += this.speed;
	}
}
