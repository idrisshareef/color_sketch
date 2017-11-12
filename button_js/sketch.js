var col;
var button;
var text;
var mballX= 1;

function setup() {
  createCanvas(200, 200);
  col= color(185);

  button= createButton("go");
  button.mousePressed(changeStyle);
  button.style("font-size","14px");

  text= createP('I can create lots of great things and have a ball!');
  text.mouseOver(changeStyle);
  text.mouseOut(revertStyle);

  text.style("background-color","blue");
  text.style("text-color","white");
  text.style("font-size", "18px");
};

function draw() {
    background(col);
    fill(0,255,0);

    ellipse(ballX,150,30,30);
    mballX= mballX + 1;
    if(changeStyle return true){
        button.mousePressed(revertStyle);
    }
};
function changeStyle(){
    text.style("background-color","red");
    text.style("padding","24px");
    col=179;
};
function revertStyle(){
    text.style("background-color","blue");
    text.style("padding","12px");
    col=255;
};
