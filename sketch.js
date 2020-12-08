var wall,bullet
var speed,weight,thickness
var lBullet,lWall


function setup() {
  createCanvas(1600,400);
  
  //speed=random(55,90);

  //weight=random(400,1500);
  weight=34
  //thickness=random(22.83)
  thickness=40;



  bullet=createSprite(50,200,50,5);
 // bullet.velocityX=speed;
   bullet.shapeColor="grey"
   bullet.velocityX=223
  

  wall=createSprite(1400,200,thickness,height/2);
 // wall.shapeColor=color(230,230,230)
  wall.shapeColor="white" 

}

function draw() {
  background("black");  
 
  if(hasCollided(bullet,wall)){
	bullet.velocityX=0
	var damage=0.5*weight*speed*speed/( thickness*thickness*thickness);

	if(damage>5){
		//wall.shapeColor=color(255,0,0)\
		wall.shapeColor="red" 
		}

	if(damage<5){
		//wall.shapeColor=color(0,255,0);
		wall.shapeColor="yellow" 

	}



  }
 
 
 
 
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
  	bullet.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>180)
	{
		bullet.shapeColor=color(255,0,0);
	}

	if(deformation<180 && deformation>100)
	{
		bullet.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
	     bullet.shapeColor=color(0,255,0);
	}
  }  
  
  drawSprites();
}

function hasCollided(lBullet,lWall){
	bulletRightEdge=lBullet+lBullet.width;
	wallLeftEdge=lWall.x

	if(bulletRightEdge>=wallLeftEdge){
		return true;
	}
	return false;
}