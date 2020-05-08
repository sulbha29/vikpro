const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var arrow1;
var points =0;
var b,release=0;
var restart;
var brickimg = [];
function preload(){
    brickimg[0] = loadImage("images/redd_burned.png")
    brickimg[1] = loadImage("images/yellow1_burned.png");
    brickimg[2] = loadImage("images/blu1_burned.png")
    brickimg[3] = loadImage("images/black1_burned.png")
}

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;
    arrow1 = new Arrow(200+100,400,PI/2);
    string = new Bow(arrow1.body,{x:200+100,y:436});
    restart = createSprite(500,500,20,40);
red = new Brick(600,375,25,25,brickimg[0]);
yellowu = new Brick(600,375,52,35,brickimg[1]);
blue = new Brick(600,375,80,57,brickimg[2]);
black = new Brick(600,375,100,65,brickimg[3]);
 
}

function draw(){
    background(0);
    Engine.update(engine);
    arrow1.display();
    string.display();
    if(release>=10){
        restart.display();
      }
      if(mousePressedOver(restart)){
        release=0;
        points=0;
        Matter.Body.setPosition(arrow1.body,{x:300,y:400});
      }
      red.display();
      yellowu.display();
      blue.display();
      black.display();
      if(arrow1.body.x-red.body.x===arrow1.width/2+red.width/2 && arrow1.body.y-red.body.y ===arrow1.height/2+red.height/2){
        Matter.Body.setPosition(arrow1.body,{x:600,y:375});
        Matter.Body.setStatic(arrow1.body,isStatic);
      }
}
function mouseDragged(){
  
    Matter.Body.setPosition(arrow1.body,{x:mouseX,y:mouseY});
    
  }
  function mouseReleased(){
    string.fly();
  }
  function keyPressed(){
    if(keyCode === 32){
      Matter.Body.setPosition(arrow1.body,{x:300,y:510});
         string.attach(arrow1.body);
         Matter.Body.setAngle(arrow1.body,PI/2);
    }
  }