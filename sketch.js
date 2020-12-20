var fixedRect, movingRect, car , wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite (200, 300, 40, 40);
  car.shapeColor = "red"
  car.velocityX = 4;


  wall =createSprite(1000, 300, 20, 90);
  wall.shapeColor = "pink"  

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(car, wall))
  {
fill("red");
textSize("24");
text("Touched", 500, 500);


  }
BounceOff(car, wall);

  drawSprites();
}

