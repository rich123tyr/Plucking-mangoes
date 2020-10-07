class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA : bodyA,
            pointB : pointB,
            length : 5,
            stiffness : 0.04,
        }
        //this.body = Bodies.rectangle(x,y,width,height,options);
        this.chain = Constraint.create(options);
        this.bodyA = bodyA;
        this.pointB = pointB;
        World.add(world, this.chain);

    }
    display(){
        push();
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.pointB
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        strokeWeight(7)
        pop();


    }
}