var car,wall;
var speed, weight;


function setup() {
  createCanvas(800,400);
  car =createSprite(200, 150, 50, 50);
  wall=createSprite(550, 150, 50, 50);

}

function draw() {
  background("black");  
 speed= Math.round(random(55,90));
 weight=Math.round(random(400,1500));

car.velocityX=speed

if(wall.x - car.x < (wall.width + car.width)/2){
  car.velocityX=0
  var deformation= 0.5 * weight * speed *speed/2
if(deformation>180){
  car.shapeColor=color(0,0,255)

}
if(deformation>100 && deformation<180){
  car.shapeColor=color(255,255,0)

}
if(deformation<100){
  car.shapeColor=color(255,0,0)
}
}

  drawSprites();
}