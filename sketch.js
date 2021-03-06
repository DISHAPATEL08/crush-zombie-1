const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var stones=[]

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  ground=new Base(0,height-10,width*2,20,"blue",true)
  leftwall=new Base(300,height/2+50,600,100,"blue",true)
  rightwall=new Base(width-300,height/2+50,600,100,"blue",true)
  bridge=new Bridge(15,{x:width/2-400,y:height/2})
  jointpoint=new Base(width-600,height/2+10,40,20,"blue",true)
  Matter.Composite.add(bridge.body,jointpoint)
  jointlink=new Link(bridge,jointpoint)
  for(var i=0;i<=8;i++){
    var x=random(width/2-200,width/2+300)
    var y=random(-10,140)
    var stone=new Stone(x,y,80,80)
    stones.push(stone)
  }
  
  
  frameRate(80);

}

function draw() {
  background(51);
  Engine.update(engine);
ground.show()
bridge.show()
leftwall.show()
rightwall.show()
for(var stone in stones){
  stone.show()
}
}
