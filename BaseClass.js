class BaseClass 
{
   constructor(x,y,width,height){

   this.body = Bodies.rectangle(x,y,width,height)
   this.image = loadImage("polygon.png")
   this.width = width 
   this.height = height
   World.add(world, this.body)
}
display()
{
    push()
    translate(this.body.position.x, this.body.position.y)
    rotate(this.body.angle)
    rectMode(CENTER)
    image(this.body, 0, 0, this.width, this.height)
    pop()
}
} 
