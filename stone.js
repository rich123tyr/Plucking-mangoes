class Stone{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 1.0,
            density : 0.5,
        }
        this.body = Bodies.circle(x,y,radius/2,options);
        this.stone = loadImage('Plucking mangoes/stone.png');
        this.radius = radius;
        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        imageMode(CENTER);
        image(this.stone,0,0,this.radius*2,this.radius*2);
        pop();
    }
}