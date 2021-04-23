
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var dustbinObj,paperObj,groundObj;
var world;
function setup() {
	createCanvas(1600,700);
  rectMode(CENTER)

  engine = Engine.create();
	world = engine.world;

 paperObj = new paper(200,450,70);
 dustbinObj = new dustbin(1200,650);
 groundObj = new Ground(width/2,670,width,20);
Launcher = new launcher(paperObj.body,{x:200,y:400});
	


	Engine.run(engine);
  //Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);

  paperObj.display();
  dustbinObj.display();
  groundObj.display();
  
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(paperObj.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  Launcher.fly();
}


