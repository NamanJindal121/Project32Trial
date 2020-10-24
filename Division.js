class Division {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.width = 10;
      this.height = 300;
      this.body = Bodies.rectangle(x,y,width,height,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
