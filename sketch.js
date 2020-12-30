const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var divisions=[];
var particles=[];
var plinkos=[];

var divisionHeight=300;



function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
  
  

 

  ground=new Ground(240,800,480,10)
 

  Engine.run(engine);
}

function draw() {
  background("red");
  
  ground.display();
 
  drawSprites();
}