
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
dustbin = new Dustbin(750,600,200,20);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  dustbinObj.display();
  groundObject.display();
  paperObject.dislapy();
  
}



