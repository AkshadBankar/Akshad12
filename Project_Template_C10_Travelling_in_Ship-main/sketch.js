var sea,ship_floating,seaImage,ship,edges;

function preload(){
 
  ship_floating = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
 seaImage = loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);

  edges = createEdgeSprites();
  sea = createSprite(200,200,20,50);
  sea.addImage(seaImage);
  sea.scale = 0.25

  ship = createSprite(180,200,20,50);
  ship.addAnimation("floating",ship_floating);
  ship.scale = 0.2


}

function draw() {
  background("blue");

  sea.velocityX = -3;
 if(sea.x < 0){
     sea.x = sea.width/8;
    
    }


  drawSprites();
}