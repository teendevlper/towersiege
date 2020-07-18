class box {
     constructor( x, y, width, height) {
          var options = {
             isStatic : false,
          }
        this.body   =  Bodies.rectangle(x,y,width,height,options);
        this.width  =  width;
        this.height =  height;  
        World.add( world, this.body );
     }
 display() {
   push();
   
   var pos = this.body.position;
   if(this.body.speed < 13  ){
      rectMode( CENTER );
      fill("blue");
      rect( pos.x, pos.y, this.width, this.height );
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
     }
   
    
   
   
  
   pop();
   }
}