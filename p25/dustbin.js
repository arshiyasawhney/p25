class Dustbin{
    // box1 = new Box()
    constructor(newx,newy,newwidth,newheight){
        var options = {
            isStatic: true,
            restitution : 1.0,
            friction : 0.3,
            density : 1.0
          }
          this.body = Bodies.rectangle(newx,newy,newwidth,newheight, options);
          this.width = newwidth;
          this.height = newheight;
          World.add(world,this.body);
    }
}