class Jugador{
  

    constructor(app,x,y,ctrl,arriba,abajo){
        this.app=app;
        this.x=x;
        this.y=y;
        this.ctrl=ctrl;
        this.arriba=arriba;
        this.abajo=abajo;
        this.migue=this.app.loadImage("/src/img/migue.png");
        this.venus=this.app.loadImage("/src/img/venus.png");
   
        
       
    }

    pintarJ1(){
        this.app.imageMode(this.app.CORNER);
            this.app.image(this.migue,this.x,this.y,50,120);
          
              

           
        
    }
    pintarJ2(){
        this.app.imageMode(this.app.CORNER);
        this.app.image(this.venus,this.x,this.y,50,120);
       
           

        
}
   

    moverArriba(){
        if(this.y-5>=0&&this.y<=380 ){
           
        this.y-=5;
        }
    }
    moverAbajo(){
        if(this.y>=0&&this.y+5<=380){
            this.y+=5;
            }
    }

   getX(){
       return this.x;
   }

   getY(){
       return this.y;
   }
}