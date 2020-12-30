class Division{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
     
      World.add(world, this.body);
    }
    display(){
     
      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);

      for(var i=0;i<=width;i=i+80)
      {
        divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
      }
     for(var i=0;i<divisions.length;i++)
      {
      divisions[i].display();
      }
    }
    
  }