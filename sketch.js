var box;

function setup() {
  createCanvas(400,400);
  box = createSprite (200,200,40,40)
}

function draw() 
{


if(keyDown ("r")){
  background("red");
}

if(keyDown ("b")){
  background("blue");
}

if(keyDown ("g")){
  background("green");
}

if(keyDown ("p")){
  background("purple");
}

if(keyDown ("o")){
  background("orange");
}

if(keyDown ("y")){
  background("yellow");
}

if(keyDown ("w")){
  background("white");
}

drawSprites();
}




