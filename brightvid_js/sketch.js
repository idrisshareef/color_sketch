var macvideo;
var sqrDiv = 22;

function setup() {
  createCanvas(860, 640);
  pixelDensity(2);

  macvideo = createCapture(VIDEO);
  macvideo.size(width/sqrDiv, height/sqrDiv);
};

function draw() {
  background(58);
  macvideo.loadPixels();

  for(var y = 0; y < macvideo.height; y++){
      for(var x = 0; x < macvideo.width; x++){

          var index = (x + y * macvideo.width) * 4;
          var r = macvideo.pixels[index+0];

          var g = macvideo.pixels[index+1];
          var b = macvideo.pixels[index+2];
          var brightness = (r+ g + b)/3;

          var w= map(brightness, 0, 255, 0, sqrDiv);

          noStroke();

          fill(255, brightness);
          rectMode(CENTER);
          rect((x+1) * sqrDiv, (y+1) * sqrDiv, w, w);
      };
  };
};
