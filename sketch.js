
var space , spaceImg;
var rocket,rocketImg;

function preload(){ // load images, animations and sound files

  spaceImg = loadImage("space2.png");
  rocketImg - loadImage("rk2.png");

}

function setup(){ // create sprites, add animation and images, executes its st. only once
  createCanvas(600,800);

  var space = createSprite("300,400");
  space.addImage(spaceImg);
  

  var rocket= createSprite("400,600");
  rocket.addImage(rocketImg);
  


  

 

  
 

  
 
}

function draw(){
  background("white")

  

  
  
  drawSprites();

}