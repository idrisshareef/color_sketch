var topR= 0;
var lastR= 0;

function setup() {
  createCanvas(600, 400);
  println("setupfunction!");
}

function draw() {
  console.log(frameCount);
  background(topR, lastR, mouseX);

//set the background to the mouse at the top starting at red then to black when 
//the mouse gets to y of 170
    if(mouseY<170){
        topR= map(mouseY,0,170,255,0);
        //blk= map(mouseY,0,170,0,125);

//set the background to the mouse at the bottom beginning with red then black   
    }else if(mouseY>220){
        topR= map(mouseY,220,400,255,0);
        //blk= map(mouseY,220,400,125,255);
        
//make a gradient between the top and bottom so from black to red
    }else{
        topR= map(mouseY,170,220,0,255);
        //blk= 125;
    }
}
