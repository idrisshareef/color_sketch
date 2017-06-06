	var col=51;
	var Engine = Matter.Engine,

	World = Matter.World,
	Bodies = Matter.Bodies;
	var engine;
	var world;
	var box1;
	var ground;

function setup() {
  createCanvas(400,400);
	engine = Engine.create();
	world = engine.world();
	box1 = Bodies.rectangle(200,100,80,80);
	Engine.run(engine);
	box1 = new box1(200, 100, 50, 50);
	var options {
		isStatic: true,
		restitution: 0.1,
		friction: 1
	}

	ground = Bodies.rectangle(200, height-50, width, 50, options);
	World.add(world, ground);
}

function mouseDragged(){
	boxes.push(new Box1(mouseX, mouseY, 20, 20));
}
function draw() {
	background(col);
	for(var i=0; i< boxes.length; i++){
		box1.show;
	}
}
