function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600,400,60,60);
  fixedRect.shapeColor="blue";
  movingRect=createSprite(700,400,60,60);
  movingRect.shapeColor="blue";
}

function draw() {
  background(0);  
  drawSprites();
  
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(touching()){
    textSize(40);
    stroke ("pink")
    fill("pink");
    text("Object is touching something", 300,50);
    
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    textSize(40);
    stroke ("green")
    fill("green");
    text("Object is not touching anything", 300,50);
    
  }
  
  
}


function touching(){
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    return true;
  }
  else {
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
    return false;
  }
}