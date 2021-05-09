class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        //this.sling1 = loadImage("sprites/sling1.png");
        //this.sling2 = loadImage("sprites/sling2.png");
        //this.sling3 = loadImage("sprites/sling3.png");
        this.bodyA = bodyA;
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        
    }

    attach(body){
        this.sling.bodyA = body
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var bodyA = this.bodyA.position;
            var pointB = this.pointB;
            stroke(255)
            strokeWeight(2);
            line(bodyA.x,bodyA.y,pointB.x,pointB.y)
        }
    }
}
