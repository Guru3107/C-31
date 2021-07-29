const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, height, 800, 20);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Division(k, height - divisionHeight / 2, 10, divisionHeight))
  }

  for (var j = 50; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75))
  }

  for (var j = 25; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175))
  }

  for (var j = 50; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 275))
  }

  for (var j = 25; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 375))
  }

}

function draw() {
  Engine.update(engine);
  background(0);
  drawSprites();

  ground.display();

  if (frameCount % 60 === 0) {

    particles.push(new Particle(random(20, 780), 10, 10))

  }

  for (var l = 0; l < particles.length; l++) {
    particles[l].display()
  }


  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display()
  }


  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display()
  }
}