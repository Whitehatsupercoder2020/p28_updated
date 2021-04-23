class launcher {
    constructor(bodyA,pointB) {
      var options={
       bodyA: bodyA,
       pointB: pointB,
       stiffness: 0.04,
       length: 1
      }
     
      this.bodyA=bodyA
      this.pointB=pointB
      this.launcher = Constraint.create(options)
      //this.image=loadImage("paper1.jpg")
     
     World.add(world,this.launcher)
    }
    display(){
     if(this.launcher.bodyA){
         var pointA = this.launcher.bodyA.position;
         var pointB = this.pointB;
         strokeWeight(4);
         line(pointA.x,pointA.y,pointB.x,pointB.y);
     }
    }
    fly(){
        this.launcher.bodyA=null;
    }
    }