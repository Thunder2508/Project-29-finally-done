const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon;
var sling;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var box21,box22,box23,box24,box25;
var ground1,ground2;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    polygon=new Polygon(200,50,50,50);
    sling = new Slingshot(polygon.body,{x:200,y:100});

    ground1=new Ground(500,300,280,30);
    ground2=new Ground(950,250,300,30);
    box1=new Box(380,200,50,50);
    box2=new Box(430,200,50,50);
    box3=new Box(480,200,50,50);
    box4=new Box(530,200,50,50);
    box5=new Box(580,200,50,50);
    box6=new Box(630,200,50,50);
    box8=new Box(430,100,50,50);
    box9=new Box(480,100,50,50);
    box10=new Box(530,100,50,50);
    box11=new Box(580,100,50,50);
    box12=new Box(480,50,50,50);
    box13=new Box(530,50,50,50);
    box14=new Box(500,20,50,50);
    box15=new Box(850,200,50,50);
    box16=new Box(900,200,50,50);
    box17=new Box(950,200,50,50);
    box18=new Box(1000,200,50,50);
    box19=new Box(1050,200,50,50);
    box20=new Box(880,150,50,50);
    box21=new Box(930,150,50,50);
    box22=new Box(980,150,50,50);
    box23=new Box(1030,150,50,50);
    box24=new Box(900,100,50,50);
    box25=new Box(950,100,50,50);
    box26=new Box(1000,100,50,50);
    box27=new Box(950,50,50,50);


}
function draw(){
    background(0);
    Engine.update(engine);
    polygon.display();
    sling.display();
    ground1.display();
    ground2.display();
    fill("blue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    fill("red");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    fill("yellow");
    box12.display();
    box13.display();
    fill("white");
    box14.display();
    fill("purple");
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    fill("blue");
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    fill("green");
    box24.display();
    box25.display();
    box26.display();
    fill("pink");
    box27.display();


}
function mouseDragged()
{
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
    sling.fly();
}
