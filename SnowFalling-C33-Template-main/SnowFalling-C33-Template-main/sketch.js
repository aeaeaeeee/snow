const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snow;
var ground;
function preload()
{
  backgroundImg = loadImage("snow1.jpg");
}

function setup() {
  createCanvas(1000, 400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600, 400, 1200, 20);
  snow1 = new Snow(100, 50, 10, 10);
  snow2 = new Snow(200, 50, 10, 10);
  snow3 = new Snow(300, 50, 10, 10);
  snow4 = new Snow(400, 50, 10, 10);
  snow5 = new Snow(500, 50, 10, 10);
  snow6 = new Snow(600, 50, 10, 10);
  snow7 = new Snow(700, 50, 10, 10);
  snow8 = new Snow(800, 50, 10, 10);
  snow9 = new Snow(900, 50, 10, 10);
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);

  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  ground.display();
  drawSprites();
}