class rectangle{
    constructor(x,y,width1,height1){
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0,
            'isStatic':true
        }
        this.width = width1;
        this.height = height1;
        
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);

        World.add(world, this.body);
    }
    display(){
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        fill(255,0,0);
        rectMode(CENTER);
        translate(pos.x,pos.y);
        rect(0,0,this.width,this.height);
        pop();
    }
}