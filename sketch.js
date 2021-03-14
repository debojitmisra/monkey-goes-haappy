//Making variables
var monkey , monkey_running;
var bananaImage, obstacleImage;
var obstacle,obstacleGroup1;
var score;
var ground , groundimg, invisibleGround;
var back, bg;
var bananaGroup1, bananaGroup2;
var banana3;
var game = 1;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  groundimg = loadImage("grou.png");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadAnimation("lion1.png","lion2.png","lion3.png","lion4.png","lion5.png","lion6.png","lion7.png","lion8.png","lion9.png","lion10.png","lion11.png","lion12.png","lion13.png","lion14.png","lion15.png","lion16.png");
  back = loadImage("back.jpg");
 
}



function setup() {
   createCanvas(windowWidth,450);
   
   score = 30;
  
   
  
   ground = createSprite(350,420.5);
   ground.addImage("ground",groundimg);
  
   monkey = createSprite(70,300);
   monkey.addAnimation("running",monkey_running);
   monkey.scale = 0.15;
  
   invisibleGround = createSprite(70,405,700,10);
   invisibleGround.visible = false;
    
   bananaGroup1 = new Group();
   bananaGroup2 = new Group();
  
   obstacleGroup1 = new Group();
  

     banana3 = createSprite(windowWidth,120);
     banana3.y = round(random(200,400));
     banana3.addImage("banana",bananaImage);
     banana3.velocityX = -3;
     banana3.scale = 0.1;
   
  
  
  
}


function draw() {
  
 

  background(back);
  
  if(game === 1){
   spawnObstacles();
  
  if(frameCount % 30 === 0){
    score -= 1;
  }
  
  
  monkey.setCollider("rectangle",0,0,460,590);

  
  if(ground.x < 100){
    ground.x = 600;
  }
   ground.velocityX = -3;
  
  
  console.log(monkey.y);

  if(keyDown("space") && monkey.y > 350){
    monkey.velocityY = -18;
  }
  //adding gravity
  monkey.velocityY = monkey.velocityY + 0.9;
  
  
  monkey.collide(invisibleGround);

  spawnBananas1();
  spawnBananas2();
  
  
  console.log(frameCount);
  
  if(monkey.isTouching(bananaGroup1)){
    bananaGroup1.destroyEach();
    score = 30;
  }
  if(monkey.isTouching(bananaGroup2)){
    bananaGroup2.destroyEach();
    score = 30;
  }
  if(monkey.isTouching(banana3)){
    banana3.y = 1000;
    score = 30;
  }
    //setup for the survival time
  fill("red");
  textFont("none");
  stroke("black");
  textSize(30);
  strokeWeight("5");
  text("SurvivalTime:  " + score, 230,50);
}
  if(game === 0){
    ground.velocityX = 0;
    monkey.velocityY = 0;
    bananaGroup1.setVelocityXEach(0);
    bananaGroup2.setVelocityXEach(0);
    banana3.velocityX = 0;
    obstacleGroup1.setVelocityXEach(0);
    monkey.pause();
  }
  
  
  
  if(monkey.isTouching(obstacleGroup1) || score === 0 ){
    game = 0;
    textSize(60);
    fill("red");
    text("Game Over",230,225);
    textSize(30);
    fill("black");
    text("Press ctrl + r to Restart",230,255);
    
  }
  
  console.log(game);
 
  //drawSprites function
  drawSprites();
  
  
  
}

 function spawnBananas1() {
   if(frameCount % 400 === 0){
     var banana = createSprite(windowWidth,120);
     banana.y = round(random(200,400));
     banana.addImage("banana",bananaImage);
     banana.velocityX = -3;
     banana.scale = 0.1;
    
     bananaGroup1.add(banana);
   }
 }
function spawnBananas2() {
   if(frameCount % 600 === 0){
     var banana2 = createSprite(windowWidth,120);
     banana2.y = round(random(200,400));
     banana2.addImage("banana",bananaImage);
     banana2.velocityX = -3;
     banana2.scale = 0.1;
    
     bananaGroup2.add(banana2);
   }
 }
 function spawnObstacles() {
   if(frameCount % 400 === 0){
     obstacle = createSprite(windowWidth,352,1);
     obstacle.addAnimation("lion",obstacleImage);
     obstacle.velocityX = -9.5;
     obstacle.scale = 0.4;
     obstacleGroup1.add(obstacle);
   }
 }




