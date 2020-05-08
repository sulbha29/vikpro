class Arrow{
    constructor(x,y,angle){
       
        var options = {
            friction:0.001,
           
        }
        this.body = Bodies.rectangle(x,y,20,5,options);
        this.width = 20;
        this.height = 5;
        World.add(world,this.body);
        
    }
    display(){
        
        var angle = this.body.angle;
        rectMode(CENTER);
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
       // rect(0,0,this.width,this.height);
        rect(0,0,100,10);
        pop();
    }
}