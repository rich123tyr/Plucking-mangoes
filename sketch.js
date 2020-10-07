
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,tree,ground,stone,constraintchain,boyimage;

var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

var gameState = "onSling";

function preload(){
	
	boyimage = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1600, 600);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(370,470,20,20);
	boy.addImage(boyimage);
	boy.scale = 0.20;

	tree = new Tree(1350,350);

	mango1 = new Mango(40,50,50,80);
	mango2 = new Mango(90,60,40,60);
	mango3 = new Mango(140,1,45,70);
	mango4 = new Mango(60,110,50,50);
	mango5 = new Mango(140,70,50,80);
	//mango6 = new Mango();
	//mango7 = new Mango();
	//mango8 = new Mango();
	//mango9 = new Mango();
	//mango10 = new Mango();

	ground = new Ground(800,595,1600,15)

	stone = new Stone(200,400);

	constraintchain = new Chain(stone.body,{x:260,y:290});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  tree.display();
 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  //mango6.display();
  //mango7.display();
  //mango8.display();
  //mango9.display();
  //mango10.display();

  stone.display();

  constraintchain.display();

  ground.display();

  textSize(30);
  text("Press space to get a second chance",100,30)
  
  drawSprites();
 
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    stone.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       stone.attach(bird.body);
    }
}

