var wall,thickness;
var bullet,speed,weight; 
function setup() {
createCanvas(800,400); 
bullet=createSprite(400,200,100,10);
wall=createSprite(700,200,60,800) 
speed=random(223,321);
thickness=random(30,52)
weight=random(400,1500); 
bullet.velocityX=speed;
}
function draw() { 
background(0,0,0); 
if(hasColiided(bullet,wall)){
bullet.velocityx=0;
var damage=0.5*wieght*speed*speed/(thickness*thickness*thikness);
if(damage>10){
    wall.shapeColour="red";
}
if(damge<10){
    wall.shapeColor="green";
}
} 
drawSprites(); 
}
function hasColiided(wall1,bullet1){
    bullet.RightEdge=bullet1.x+bullet1.width;
    wall.LeftEdge=wall1.x;
    if(bullet.RightEdge=wall.LeftEdge){
        return true
    }
    return false
}