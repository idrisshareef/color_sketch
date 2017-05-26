//var video;
//var vScale=16;

function setup() {
    createCanvas(320, 240);
    pixelDensity(1);
    //video= createCapture(VIDEO);
    //video.size(width/vScale,height/vScale);
}

function draw() {
    background(60);
    //video.loadPixels();
    loadPixels();
    for(var y = 0; y< height; y++){
        for(var x= 0; x< width; x++){
            var index= (x + y * width)* 4;
            pixels[index+0]=x;
            pixels[index+1]=random(255);
            pixels[index+2]=y;
            pixels[index+3]=255;
        }
    }
    
    
    updatePixels();
}