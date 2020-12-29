
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper, ground;
var dustbin1, dustbin2, dustbin3;

function setup() {
	createCanvas(1100, 700);
  engine = Engine.create();
  world = engine.world;

  // dustBin1 = createSprite(835,575,20,100);
	// dustBin1.shapeColor = "white";

	// dustBin2 = createSprite(920,625,150,20);
  // dustBin2.shapeColor = "white";

	// dustBin3 = createSprite(1000,575,20,100);
	// dustBin3.shapeColor = "white";


  ground = new Ground(500,650,1200,20);

  paper = new Paper(100,30,40,40); 

   dustBin1 = new Dustbin(835,575,20,100);
   dustBin2 = new Dustbin(920,625,150,20);
   dustbin3 = new Dustbin(1000,575,20,100);
}


function draw() {
  background(0);
  drawSprites();
  Engine.update(engine);

  // paper.bounce(dustBin3);
  
  ground.display();

  paper.display();

   dustBin1.display();
   dustBin2.display(); 
   dustbin3.display();
}

function keyPressed() {
  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(paper.body, paper.body.position,{x:75,y:-75});

  }
}




