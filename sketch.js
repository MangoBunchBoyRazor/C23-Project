//Creating global variable
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	//Loading the images
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	//Creating the sprites
	packageSprite = createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//creating the engine
	engine = Engine.create();
	world = engine.world;

	//Creating the bodies
	packageBody = Bodies.rectangle(packageSprite.x , packageSprite.y , 50, 50,{restitution:0.8, isStatic:true, mass: 50});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(groundSprite.position.x, groundSprite.position.y, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	//Creating the wall
	wall1 = new rectangle(width/2 - 50,height - 90,20,100);
	wall2 = new rectangle(width/2 + 10,height - 50,100,20);
	wall3 = new rectangle(width/2 + 70,height - 90,20,100);

	//Running the engine 
	Engine.run(engine);
}

function draw() {
	
  rectMode(CENTER);
  background(0);

  //Setting the sprite position to the body position
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites(); //Drawing the sprites
  wall1.display();	//displaying the wall
  wall2.display();	//displaying the wall2
  wall3.display();	//displaying the wall3
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }
}