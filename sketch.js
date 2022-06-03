var edges;

var bg;

var bgImage;

var plat1, plat1Image;


var plat2, plat2Image, plat3; 

var pc, pcImage;

var animal

var flipchar

var door

var gamestate

function preload(){
bgImage = loadImage("background.png")
plat1Image = loadImage("plat1.png")
plat2Image = loadImage("plat2.png")
pcImage = loadAnimation("chara.png")
animalImage = loadImage("bear.png")
flipcharImage = loadAnimation("charaflip.png")
doorImage = loadImage("door.png")
}


function setup(){
createCanvas(1500,950)
bg = createSprite(0,0,1500,1500)
bg.addImage(bgImage)
bg.scale = 2.7

plat1 = createSprite(300,600)
plat1.addImage(plat1Image)
plat1.scale = 0.4

plat2 = createSprite(1100,400)
plat2.addImage(plat1Image)
plat2.scale = 0.4

plat3 = createSprite(700,500)
plat3.addImage(plat2Image)
plat3.scale = 0.2

pc = createSprite(700,300)
pc.addAnimation("l",pcImage)
pc.addAnimation("r",flipcharImage)
pc.scale = 0.5


animal = createSprite(random(10,1000),880)
animal.addImage(animalImage)
animal.scale = 0.2

door = createSprite(110,800)
door.addImage(doorImage)
door.scale = 0.5

edges = createEdgeSprites()
}



function draw(){
background("gray")

animal.velocityX = Math.floor(random(20,-20))

if(animal.collide(pc)){
   pc.remove();
   
   }

 drawSprites()
 if(plat3.y<10){
    plat3.y += 10;

 }


 


 if(plat3.y>1500){
plat3.y -=10

   

}

if(keyDown(LEFT_ARROW)){
   pc.x -= 25
   pc.changeAnimation("r",pcImage)
   }

   if(keyDown(RIGHT_ARROW)){
      pc.x += 25
      pc.changeAnimation("l",flipcharImage)
      }
 
      if(keyDown(UP_ARROW)){
         pc.velocityY = -12
         }
         if(keyDown(DOWN_ARROW)){
            pc.velocityY = +300
            }
            
if(keyDown()){
pc.velocityY =+ 1000
}
            
    pc.velocityY += 0.5

   pc.collide(plat1)
   pc.collide(plat2)
   pc.collide(plat3)
   pc.collide(edges)
   animal.collide(edges)
   animal.collide(pc)
   pc.collide(door)
   animal.collide(door)
}
