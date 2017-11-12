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
	txt1= createP("something about the second image", 100, height-20);
	txt2= createP("something about the third image", 160, height-20);
	txt3= createP("something about the first image", 220, height-20);
}

function draw() {
	star1.show;
	txt1.mouseOver(flipto2);
  txt1.style("background-color", "red");
	txt2.mouseOver(flipto3);
  txt2.style("background-color", "yellow");
	txt3.mouseOver(flipto1);

}

function flipto2(){
	star2.show;
}
function flipto3(){
	star3.show;
}
function flipto1(){
	star1.show;
}
