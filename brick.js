class Brick{
    constructor(x, y, width, height,image) {
        var options = {
            
            'friction':1.0,
            'density':1.0,
            'isStatic':true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = image;
        //this.image = loadImage("aim1.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
       image(this.image,0,0,this.width,this.height);
        pop();
      }
  }