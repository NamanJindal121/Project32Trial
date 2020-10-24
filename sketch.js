const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  var canvas = createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  //ground
  ground = new Ground(240, 780, 480, 20, "brown");
  gdiv = new Ground(240, 760, 480, 25, "white");

 /* if(frameCount %60 === 0){
    particles.push(new Particle(random(width/2 - 20, width/2 +20), -10));
  }*/

  //divisions

  for(i=5; i<= width; i=i+78){
    divisions.push(new Division(i, 600));
  }

  //plinkos

  for(p = 15; p<=width; p = p+50){
    plinkos.push(new Plinko(p, 50));
  }
  
  for(p = 15; p<=width; p = p+50){
    plinkos.push(new Plinko(p, 100));
  }
  
  for(p = 15; p<=width; p = p+50){
    plinkos.push(new Plinko(p, 150));
  }


  
}

function draw() {
  background(0,0,0);
  Engine.update(engine);

  ground.display();
  gdiv.display();


 /* for(k=0; k<=particles.length; p++){
    particles[k].display();
  }*/

  for(var d = 0; d<=divisions.length; d++){
    divisions[d].display();
  }

  for(var p = 0; p<=plinkos.length; p++){
    plinkos[p].display();
  }

  drawSprites();
}