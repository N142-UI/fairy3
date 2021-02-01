var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody,object1,object2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairy1.png","images/fairy2.png");
	bgImg = loadImage("images/starNight.png");
	//fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);


	fairy = createSprite(130, 480);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  if(keyDown("down_arrow")){
	star.velocityY= 20 
   }

  fairyVoice.play();

  if(keyDown("left_arrow")){
	fairy.x=fairy.x-20 
}

if(keyDown("right_arrow")){
	fairy.x=fairy.x+20 
   }

  
   starBody.x = star.position.x
   starBody.y = star.position.y

  
   if(isTouching(star,fairy)){
	
	star.velocityY=0  
   }


  drawSprites();

}

//function newFunction(star1) {

	function isTouching(object1,object2){
		if (object1.x - object2.x < object2.width/4 + object1.width/2
		  && object2.x - object1.x < object2.width/4 + object1.width/2
		  && object1.y - object2.y < object2.height/1 + object1.height/1
		  && object2.y - object2.y < object2.height/1 + object1.height/1) {
		  
		  return true;
		}
		else {
		  return false;
		} 
	}
//}