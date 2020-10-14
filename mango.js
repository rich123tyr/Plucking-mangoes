class Mango{
    constructor(x,y,radius){
        var options={
            isStatic : true,
            restitution : 0.3,
            friction : 1.0,
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.image = loadImage("Plucking mangoes/mango.png")
        this.radius = radius;
        World.add(world,this.body)

    }
    display(){
        var angle = this.body.angle;
        push();
        angleMode(RADIANS);
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius*2,this.radius*2);
        pop();
    }
}