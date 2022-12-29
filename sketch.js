
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 1100);
	
	engine = Engine.create();
	world = engine.world;
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	//Create the Bodies Here.
	ball=Bodies.circle(500,300,150,ball_options);
	World.add(world,ball);
	
	groundObj= new Ground(width/2,670,width,20)
	leftSide= new Ground(1100,600,20,120)
	rightSide= new Ground(100,600,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  drawSprites();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0.05,y:-0.05})
	}
}


