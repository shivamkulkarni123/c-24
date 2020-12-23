const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,bird,box2,ground,box3,box4,box5,pig1,pig2,log1,log2,log3,log4;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(100,350,50,50);
    box2 = new Box(300,350,50,50);
    ground = new Ground(200,height,400,20)
    bird= new Bird(100,100);
    pig1=new Pig(200,350);
    log1=new Log(200,300,300,PI/2);
    box3=new Box(100,250,50,50);
    box4=new Box(300,250,50,50);
    pig2=new Pig(200,250);
    log2=new Log(200,200,300,PI/2);
    box5=new Box(200,180,50,50);
    log3=new Log(140,180,110,PI/7);
    log4=new Log(260,180,110,-PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body);
   // console.log(box2.body.position.y);
   // console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    bird.display();
    pig1.display();
    log1.display();
box3.display();
box4.display();
pig2.display();
log2.display();
box5.display();
log3.display();
log4.display();



}