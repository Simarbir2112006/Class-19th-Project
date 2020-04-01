var robot, robot_image;

function preload(){
  robot_image= loadImage("bumblebee.jpg");
  

}

function setup() {
  createCanvas(400, 400);
  robot= createSprite(300, 150, 390,10);
  robot.addImage(robot_image);
}

function draw() {
  background(220);
  robot_left.x=mouse.x
  drawSprites(robot);
}