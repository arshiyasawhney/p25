class Paper{
    
    constructor(newx,newy,newwidth,newheight){
        var options = {
            isStatic:false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
          }
          this.body = Bodies.circle(newx,newy,newradius,options);
          this.radius = newradius;
          World.add(world,this.body);
        }
    }