var bkimg;
var player;
var playerimg;
var bk;
var enemy_1;
var bullets,bulletsGroup;
var positionsE=[];
var positionsB=[];

function preload(){
  bkimg=loadImage("background.jpg");
  playerimg=loadImage("enemy.png");
  enemy_1=loadImage("plane.png");
  bullets=loadImage("Bullets.png")
}
function setup(){
  createCanvas(windowWidth, windowHeight);
  bk=createSprite(width/2,height/2,width,height);
  bk.shapeColor="black"; 
  bk.velocityY=-5;
  player=createSprite(width/2,height-100,20,30);
  console.log(width);
  player.addImage(playerimg);
  player.scale=0.8;

  createEnemy();
  bulletsGroup=new Group();
 
}
function createEnemy(){
  positionsE=[250,450,650,850,1050];
  for(var i=0; i<positionsE.length; i++){
    var enemy=createSprite(positionsE[i],height-500);
    enemy.addImage(enemy_1);
    enemy.scale=0.8;
  }
}
function createBullets(){
  positionsB=[[player.x+70,height-155],[player.x+60,height-165],[player.x+50, height-165],[player.x-50, height-155],[player.x-60,height-165],[player.x-70,height-175]];
  for(var i=0; i<positionsB.length;i++){
    var bullet=createSprite(positionsB[i][0],positionsB[i][1]);
    bullet.addImage(bullets);
    bullet.scale=0.1;
    bullet.velocityY=-15;
    bulletsGroup.add(bullet);
  }
}
function keyPressed(){
  if(keyCode===32){
    createBullets();
  }
}
function draw(){
  background(0);
  if(keyIsDown(LEFT_ARROW)){
    player.x=player.x-10;
  }
 
  if(keyIsDown(RIGHT_ARROW)){
    player.x=player.x+10;
  }
  if(bk.y<250){
    bk.y=height/2;
  }

  drawSprites();
}