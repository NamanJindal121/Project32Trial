class Particle {
    constructor(x, y){
        var options ={
            restitution: 0.8,
            friction: 0,
            density: 1.2
        }

        this.radius = 7;
        this.body = Bodies.circle(x, y, this.radius, options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        fill(this.color);
        circle(pos.x, pos.y, this.radius*2);
    }
}