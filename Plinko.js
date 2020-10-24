class Plinko {
    constructor(x, y){
        var options ={
            isStatic: true
        }

        this.radius = 10;
        this.body = Bodies.circle(x, y, this.radius, options);

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        /*var angle = this.body.angle;

        translate(pos.x, pos.y);
        rotate(angle);*/
        fill("white");
       // ellipseMode(RADIUS);
        circle(pos.x, pos.y, this.radius*2);
    }
}