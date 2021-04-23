class dustbin {
    constructor(x, y) {
      
     
this.x=x;
this.y=y;
this.dustbinWidth=200;
this.dustbinHeight=213;
this.wallThickness=20;
 
this.image=loadImage("dustbingreen.png")
 this.rightWallBody = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,
        {isStatic:true,restitution:0.2,friction:10,density:1.0});
this.leftWallBody = Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,
  {isStatic:true,restitution:0.2,friction:10,density:1.0});
  this.bottomBody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,
    {isStatic:true,restitution:0.2,friction:10,density:1.0});    
   
      World.add(world, this.bottomBody);
      World.add(world, this.leftWallBody);
      World.add(world, this.rightWallBody);
    }
    display(){
    
      var posBottom=this.bottomBody.position;
      var posLeft=this.leftWallBody.position;
      var posRight=this.rightWallBody.position;

      //var angle=this.body.angle;
      push();
      translate(posLeft.x,posLeft.y);
      rectMode(CENTER);
      angleMode(RADIANS); 
      fill(255);
      rotate(this.angle);
      
     
     // rect(0, 0, this.width, this.height);
      pop();

      push();
      translate(posRight.x,posRight.y);
      angleMode(RADIANS)
      rotate(-1*this.angle);
      rectMode(CENTER);
      fill(255);
     // rect(0, 0, this.width, this.height);
      pop();

      push();
      translate(posBottom.x,posBottom.y+10);
      angleMode(RADIANS)
      rotate(this.angle);
      rectMode(CENTER);
      fill(255);
      imageMode(CENTER);
      image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight);
       //rect(0, 0, this.width, this.height);
      pop();
    }
  };
  