class Plinko {
      Constructor(x,y,r){
          var Plinko_options={
              isStatic : true
          }
          this.r=r;
          this.Plinko = Bodies.circle(x, y, this.r, Plinko_options);
          World.add(world, this.Plinko);
      }

      Display(){
        translate(pos.x, pos.y);
        noStroke();
        Fill(255,0,255);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
      }
}