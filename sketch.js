
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Events = Matter.Events;

var boy,tree,ground,stone,constraintchain,boyimage;

var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var mango11,mango12;

var mposition,sposition;

var gameState = "onsling";

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

    //tree = new Tree(1150,0);
    
    ground = new Ground(800,595,1600,15)

	mango1 = new Mango(1300,40,20);
	mango2 = new Mango(1200,80,30);
	mango3 = new Mango(1150,140,25);
	mango4 = new Mango(1250,130,25);
	mango5 = new Mango(1320,110,25);
	mango6 = new Mango(1070,180,20);
	mango7 = new Mango(1400,150,25);
	mango8 = new Mango(1150,240,30);
	mango9 = new Mango(1450,220,25);
    mango10 = new Mango(1240,200,25);
    mango11 = new Mango(1320,180,25);
    mango12 = new Mango(1320,250,25)

	

	stone = new Stone(200,500,25);

	constraintchain = new Chain(stone.body,{x:260,y:350});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  Engine.update(engine);

  //tree.display();

  ground.display();
 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  

  constraintchain.display();

  textSize(30);
  text("Press space to get a second chance",100,30)
  
  drawSprites();

  stone.display();

  detectCollison(stone,mango1);
  detectCollison(stone,mango2);
  detectCollison(stone,mango3);
  detectCollison(stone,mango4);
  detectCollison(stone,mango5);
  detectCollison(stone,mango6);
  detectCollison(stone,mango7);
  detectCollison(stone,mango8);
  detectCollison(stone,mango9);
  detectCollison(stone,mango10);
  detectCollison(stone,mango11);
  detectCollison(stone,mango12);

}

function mouseDragged(){
    Events.on(engine,"afterUpdate",function(){
        if (gameState!=="launched"){
            Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
        }
    })
    
}


function mouseReleased(){
    engine.events = {}
    constraintchain.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        constraintchain.attach(stone.body);
        gameState = "onSling";
    }
}

function detectCollison(stone,mango){
    mposition = mango.body.position;
    sposition = stone.body.position;
    var distance = dist(mposition.x,mposition.y,sposition.x,sposition.y);
    if(distance<=mango.radius+stone.radius){
        Matter.Body.setStatic(mango.body,false);
    }
}

