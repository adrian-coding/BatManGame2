
var drops=[];
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;
var engine, world;
function preload(){

    thunder1=loadAnimation("proc41images/images/thunderbolt/1.png",
    "proc41images/images/thunderbolt/2.png",
    "proc41images/images/thunderbolt/3.png",
    "proc41images/images/thunderbolt/4.png");

    batMan=loadAnimation("proc41images/images/WalkingFrame/walking_1.png",
    "proc41images/images/WalkingFrame/walking_2.png",
    "proc41images/images/WalkingFrame/walking_3.png",
    "proc41images/images/WalkingFrame/walking_4.png",
    "proc41images/images/WalkingFrame/walking_5.png",
    "proc41images/images/WalkingFrame/walking_6.png",
    "proc41images/images/WalkingFrame/walking_7.png",
    "proc41images/images/WalkingFrame/walking_8.png")
}
var maxDrops=100;

function setup(){
    engine = Engine.create();
    world = engine.world;
   createCanvas(1000,1000)
    batman=createSprite(300,650);
    batman.addAnimation("walking",batMan);
    batman.scale=0.8;
    thunder=createSprite(300,100);
    thunder.addAnimation("light",thunder1);
    thunder.scale=0.7;

    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops;  i++){
        drops.push(new Drop(random(0,1000),random(0,1000)))
        }
    }
}

function draw(){
    Engine.update(engine);
    background("grey");

    
        for(var i = 0; i<maxDrops; i++)
        {
        drops[i].display();
        drops[i].update();
        }
drawSprites();
}   

