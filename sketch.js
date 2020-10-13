
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Events = Matter.Events;

var boy,tree,ground,stone,constraintchain,boyimage;

var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

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

	tree = new Tree(1150,0);

	mango1 = new Mango(1300,60,30);
	/*mango2 = new Mango(90,60,40,60);
	mango3 = new Mango(140,1,45,70);
	mango4 = new Mango(60,110,50,50);
	mango5 = new Mango(140,70,50,80);
	mango6 = new Mango(1,90,40,80);*/
	//mango7 = new Mango();
	//mango8 = new Mango();
	//mango9 = new Mango();
	//mango10 = new Mango();

	ground = new Ground(800,595,1600,15)

	stone = new Stone(200,500,50);

	constraintchain = new Chain(stone.body,{x:260,y:350});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  tree.display();
 
  mango1.display();
  /*mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();*/
  //mango7.display();
  //mango8.display();
  //mango9.display();
  //mango10.display();

  

  constraintchain.display();

  ground.display();

  textSize(30);
  text("Press space to get a second chance",100,30)
  
  drawSprites();

  stone.display();

  detectCollison(stone,mango1);
 
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
       stone.attach(stone.body);
    }
}

function detectCollison(stone,mango){
    mposition = mango.body.position;
    sposition = stone.body.position;
    var distance = dist(mposition.x,mposition.y,sposition.x,sposition.y);
    if(distance<=mango.r+stone.r){
        Matter.Body.setStatic(mango.body,false);
    }
}

