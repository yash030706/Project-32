
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
const Render = Matter.Render;
var ground;
var polygon;
var slingshot;
var world;
var box;
var x;
var ball
var y;
var bg = "bg1.png"
var backgroundImg

function preload() {
  getBackgroundImg();
  polygon = loadImage("polygon.png");
  
}

function setup() {
  createCanvas(1275,600);
  engine = Engine.create();
	world = engine.world;
  //createSprite(400, 200, 50, 50);
  ground = new Ground(635,height,1275,25);
  ground1 = new Ground(635,500,400,35);
  box1 = new Box(460,486,50,50);
  box2 = new Box(510,486,50,50);
  box3 = new Box(560,486,50,50);
  box4 = new Box(610,486,50,50);
  box5 = new Box(660,486,50,50);
  box6 = new Box(710,486,50,50);
  box7 = new Box(760,486,50,50);
  box8 = new Box(810,486,50,50);
  //Second layer
  box9 = new Box(485,425,50,50);
  box10 = new Box(785,425,50,50);
  box11 = new Box(535,425,50,50);
  box12 = new Box(585,425,50,50);
  box13 = new Box(635,425,50,50);
  box14 = new Box(685,425,50,50);
  box15 = new Box(735,425,50,50);
  //Third Layer
  box16 = new Box(510,375,50,50);
  box17 = new Box(560,375,50,50);
  box18 = new Box(610,375,50,50);
  box19 = new Box(660,375,50,50);
  box20 = new Box(710,375,50,50);
  box21 = new Box(760,375,50,50);
  //Fourth Layer
  box22 = new Box(535,325,50,50);
  box23 = new Box(585,325,50,50);
  box24 = new Box(635,325,50,50);
  box25 = new Box(685,325,50,50);
  box26 = new Box(735,325,50,50);
  //Fifth Layer
  box27 = new Box(560,275,50,50);
  box28 = new Box(610,275,50,50);
  box29 = new Box(660,275,50,50);
  box30 = new Box(710,275,50,50);
  //Sixth Layer
  box31 = new Box(585,225,50,50);
  box32 = new Box(635,225,50,50);
  box33 = new Box(685,225,50,50);
  //Seventh Layer
  box34 = new Box(610,175,50,50);
  box35 = new Box(660,175,50,50);
  //Eighth Layer
  box36 = new Box(635,125,50,50);
  //polygon
  //polygon = new Polygon(260,275,25);
  //polygon.shapeColor = color(80,80,80);
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  //sling
  slingshot = new SlingShot(this.ball,{x:250,y:225});
  
  
  
  
  Engine.run(engine);
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
  //x = mouseX;
  //y = mouseY;
  ground.display();
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  //polygon.display();
  imageMode(CENTER)
  image(polygon,ball.position.x,ball.position.y,40,40);
  slingshot.display();
  //noStroke();
  //textSize(35)
  //fill("white")
  //text("x  " + x, width-300, 50);
  //text("y  " + y, width-300, 85);
}

function keyPressed(){
  if(keyCode === 32){ 
  slingshot.attach(this.ball)
}
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=17){
      bg = "bg1.png";
  }
  else{
      bg = "bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}

