class Mango{
    constructor(x,y,width,height){
        var options={
            isStatic : true,
            restitution : 0,
            friction : 1.0,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("Plucking mangoes/mango.png");
        this.width = width;
        this.height = height;

    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,1150,100,this.width,this.height)
        pop();
    }
}