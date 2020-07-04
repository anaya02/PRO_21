var damage;
var bullet,speed,weight;
var wall,thickness;

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  speed = random (223,321);
  weight = random (30,52);
  bullet = createSprite(50,200,45,25);
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "white";
  damage = 0.5 * weight * speed * speed/thickness*thickness*thickness;

  }

function draw() {
  background(0);  
  if (wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
  }
  if (damage > 10){
    bullet.shapeColor = "red";
  } 
  if (damage < 10){
    bullet.shapeColor = "green";
  }
  drawSprites();
}