class Tree{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0,
            friction:1.0,
            density:1.2,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("Plucking mangoes/tree.png");
        World.add(world, this.image);
    }
    display(){
        image(this.image,1050,0,400,600);
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        angleMode(RADIANS);
        rotate(angle);
        pop();
    }
}