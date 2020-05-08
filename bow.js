class Bow {
    constructor(bodyA,pointB){
        var options = {
            
            'bodyA':bodyA,
            'pointB':pointB,
            'stiffness':0.7,
            'length':65
            
        }
        this.pointB = pointB;
        this.bow =Matter.Constraint.create(options);
        World.add(world,this.bow);
   // this.bow1 = loadImage("hanzo.png");
      }
  attach(body){
    this.bow.bodyA = body;
  }
    fly(){
        this.bow.bodyA = null;
        release+=1;
        strokeWeight(4);
        line(200,136,200,261);
    }
    display(){
       // image(this.bow1,130+100,415,200,170);
      if(this.bow.bodyA){
          var pointA = this.bow.bodyA.position;
          var pointB = this.pointB;
          push();
      strokeWeight(2);
      stroke("black");
      if(pointA.x){
          line(pointA.x,pointA.y+5,pointB.x,pointB.y);
          line(pointA.x,pointA.y+5,pointB.x,pointB.y+125);
      }
      else{
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        line(pointA.x,pointA.y,pointB.x,pointB.y+125);
      }
      pop();
      }
    }
  }