class Slingshot 
{
    constructor(bodyA,pointB)
    {
        var options = 
        {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 12 
        }
        this.pointB = pointB
        this.sling = Constraint.create(options)
        World.add(world, this.sling)
    }
}