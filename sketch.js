const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var backgroundImg, snowflakeImg;
var snowflake = [];
var girl;

function preload(){
   backgroundImg = loadImage("bg.jpg");
   girlImg =loadImage("elsa1.png");
   snowImage = loadImage("snow.png");
   snowmanImg = loadImage("evilsnowman.png");
}


function setup() {
  createCanvas(1200,600);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;


  girl=createSprite(100,400);
  girl.addImage("skating",girlImg);
  girl.scale = 0.7;

  snowman=createSprite(950,400);
  snowman.addImage("standing",snowmanImg);
  snowman.scale = 0.9;

  snowGroup = new Group();
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);

  
    girl.velocityX = 0;

  // display the snowflakes
  for (var i = 0; i < snowflake.length; i++) {
    snowflake[i].display();}

    //create snowflake objects
  if(frameCount%10===0){
    snowflake.push(new  Snowflake(random(0,800), 10,random(20,100)));
}    

if (snowGroup.isTouching(snowman)){
  snowman.destroyEach();
  snowGroup.destroyEach();
  //score = score+3;
}

  drawSprites();

}

function keyPressed(){

  //if(keyCode === LEFT_ARROW){
     // girl.velocityX = -5;
  //}

  //if(keyCode === RIGHT_ARROW){
     //  girl.velocityX = +5;
  //}

  if (keyDown("space")) {
    createSnow();
    
  }


}

function createSnow() {
  var snow= createSprite(100, 100, 60, 10);
  snow.addImage(snowImage);
  snow.x = 360;
  snow.y=bow.y;
  snow.velocityX = -4;
  snow.lifetime = 100;
  snow.scale = 0.1;
  //return arrow;
  snowGroup.add(snow); 
   
   
}