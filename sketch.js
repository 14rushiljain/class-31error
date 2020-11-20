const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var plinkos,divisions;
//var divisions1,divisions2,divisions3,divisions4,divisions5,divisions6,divisions7;
var divisionHeight=300;

var Plinkos=[];
var Particles=[];
var divisions=[];

function setup() {
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  createCanvas(480,800);
  ground=new Ground(800,480,100,10);


  for(var k = 0; k <=width; k = k + 80){
    divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight))
  }
  
  for(var j = 40; j<=width ; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }
  for(var j =15; j<=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  }
    /*divisions1=new Divisions(400,350,5,300);
    divisions2=new Divisions(350,350,5,300);
    divisions3=new Divisions(300,350,5,300);
    divisions4=new Divisions(250,350,5,300);
    divisions5=new Divisions(200,350,5,300);
    divisions6=new Divisions(150,350,5,300);
    divisions7=new Divisions(100,350,5,300);
    divisions8=new Divisions(50,350,5,300);
    divisions9=new Divisions(450,350,5,300);
    divisions10=new Divisions(500,350,5,300);
    divisions11=new Divisions(550,350,5,300);
    divisions12=new Divisions(600,350,5,300);
    divisions13=new Divisions(650,350,5,300);
    divisions14=new Divisions(700,350,5,300);
    divisions15=new Divisions(750,350,5,300);*/
  
  
}

function draw() {
background(255,255,255);  

 /*divisions1.display();
 divisions2.display();
 divisions3.display();
 divisions4.display();
 divisions5.display();
 divisions6.display();
 divisions7.display();
 divisions8.display();
 divisions9.display();
 divisions10.display();
 divisions11.display();
 divisions12.display();
 divisions13.display();
 divisions14.display();
 divisions15.display();*/

 for (var j = 0; j < Particles.length; j++){
   particles[j].display();
 }
 for(var k = 0; k < divisions.length; k++){
   divisions[k].display();
 }
 for(var j = 0; j < plinkos.length; j++){
   plinkos[j].display();
 }
 
 ground.display();
}