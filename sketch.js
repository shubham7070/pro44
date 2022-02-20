const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var arrow, ballon;

function preload()
{
	
}

function setup() {
	createCanvas(800, 750);
	engine = Engine.create();
	world = engine.world;

	arrow = new Arrow(100, 200);
	ballon = new Ballon();
	
	//Engine.run(engine);

}


function draw() {
  background(180);

  Engine.update(engine);
  arrow.display();
  ballon.display();

  drawSprites();

}
