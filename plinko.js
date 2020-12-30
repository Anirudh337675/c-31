class Plinko
{
    constructor(x,y,radius,options)
    {
          var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2


        }
      
        this.radius=10
        this.body=  Matter.Bodies.circle(x,y,this.radius,options)
        World.add(world,this.body);
    }
    display()
    {
        var roc=this.body.position;
     
      
        ellipseMode(CENTER);
        fill("purple");
        ellipse(roc.x,roc.y,this.radius);

        for(var i=40;i<=width;i=i+50)
        {
          plinkos.push(new Plinko(i,75));
        }
      
        for(var i=15;i<=width-10;i=i+50)
        {
          plinkos.push(new Plinko(i,175));
        }

        for(var i=40;i<=width;i=i+50)
        {
          plinkos.push(new Plinko(i,75));
        }

        for(var i=15;i<=width-10;i=i+50)
        {
          plinkos.push(new Plinko(i,175));
        }

        for(var i=0;i<divisions.length;i++){
            plinkos[i].display();
          }
        
    }

}