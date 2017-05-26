var symbolSize= 35;
var stream;

function setup(){
	createCanvas(window.innerWidth, window.innerHeight);
	background(0);
	var x = 0;
	var y = 0;
	for(var i=0; i<=width/symbolSize; i++){
		var stream= new Stream();
		stream.generateSymbols(x, y);
		streams.push(stream);
		x+= symbolSize;
	}
	textSize(symbolSize);
}
function draw(){
	background(0);
	streams.forEach(function(stream){
		stream.render();
	});
	
}
function Symbol(x,y,speed){
	this.x= x;
	this.y= y;
	this.value;
	this.speed= speed;
	this.switchInterval= round(random(2,20));
	
	this.setToRandomSymbol= function(){
		this.value = (frameCount % this.switchInterval == 0) ? String.fromCharCode(0x30A0+ round(random(0,96)));
		}
	}

	this.rain= function(){
		this.y=(this.y >= height) ? 0 : this.y += this.speed;
	}
}
function Stream(){
	this.symbols= [];
	this.totalSymbols= round(random(5,30));
	this.speed= random(5,20);
	
	this.generateSymbols= function(){
		for(var i=0; i<= totalSymbols; i++){
			symbol= new Symbol(x, y, this.speed);
			symbol.setToRandomSymbol();
			this.symbols.push(Symbol);
			y-= symbolSize;
		}
	}
	this.render= function(){
		this.symbols.forEach(function (symbol){
			fill(0, 255, 70);
			text(symbol.value, symbol.x, symbol.y);
			symbol.rain();
			symbol.setToRandomSymbol();
		});
	}
}
