var c= color(255,50,100);
var txt1;
var txt2;
var txt3;
var star1;
var star2;
var star3;

function setup() {
    createCanvas(600, 400);
    background(c);
	star1= loadImage("curvesYellowGreen.odt");
	star2= loadImage("curvesYellowGreen2.odt");
	star3= loadImage("curvesYellowGreen3.odt");
	txt1= createP("something about the images");
	txt2= createP("something else");
	txt3= createP("something else");
}

function draw() {
	createImage(star1, 20, 20);
	txt1.mouseOver(flipto2);
	txt2.mouseOver(flipto3);
	txt3.mouseOver(flipto1);
}

function flipto2(){
	createImage(star2, 20, 20);
}
function flipto3(){
	createImage(star3, 20, 20);
}
function flipto1(){
	createImage(star1, 20, 20);
}