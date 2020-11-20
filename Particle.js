class Particle{
    Constructor(x,y,r){
        var options={
            restitution:0.4
        }
        this.r=r;

        this.body = Bodies.circle(x,y,this.r,options);
        this.color=color(random(0,255), random(0,255), random(0,255));
        World.add(world, this.body);
    }
    Display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        Push();
          translate(pos.x, pos.y);
          rotate(angle);
          noStroke();
          Fill(this.color);
          ellipseMode(RADIUS);
          ellipse(0,0,this.r,this.r);
        Pop();
    }
}