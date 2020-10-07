class Stone{
    constructor(x,y){
        var options = {
            isStatic : false,
            restitution : 0,
            friction : 1.0,
            density : 1.2,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.stone = loadImage('Plucking mangoes/stone.png');
        World.add(world, this.stone);
    }
    attach(body){
        this.stone.bodyA = body;
    }
    
    fly(){
        this.stone.bodyA = null;
    }

    display(){
        image(this.stone,200,300,100,70);
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        angleMode(RADIANS);
        rotate(angle);
        pop();
        
    }
    
}