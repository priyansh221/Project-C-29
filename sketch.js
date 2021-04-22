const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine, world 
var box1, ball 
var slingshot 
var ball 


function setup()
{
    var canvas = createCanvas(400,400)
    engine = Engine.create()
    world = engine.world
    var bal = 
    {
       restitution : 0.2,
       density: 1.5
    }
    ball = Bodies.circle(145,50,10,bal)
    World.add(world,ball)
    ground = new Ground(400,400,400,30)

    box1 = new Box(300,370,20,20)
    
    

    sling = new Slingshot(ball.body,{x:150,y:50})
}

function draw()
{
    background(0,0,0)
    Engine.update(engine)
    ground.display()
    box1.display()
    ellipseMode(RADIUS)
    ellipse(ball.position.x,ball.position.y,10,10)
}