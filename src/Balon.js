class Balon{

    constructor(app) {
    
        this.app=app;
      
     
        this.x=500;
        this.y=250;
        this.tam=20;
       this.gol=false;
       this.dir = [-4, -2, 2, 4];
       this.img=5; 
       this.clr = []; 
       this.isTocando=null;
       this.mover=this.mover.bind(this);   
       this.validar=this.validar.bind(this);
       setInterval(this.validar,10);
       this.clr[0]=this.app.loadImage("/src/img/devede.png");
       this.clr[1]=this.app.loadImage("/src/img/devede1.png");
       this.clr[2]=this.app.loadImage("/src/img/devede2.png");
       this.clr[3]=this.app.loadImage("/src/img/devede3.png");
       this.clr[4]=this.app.loadImage("/src/img/devede4.png");
       this.clr[5]=this.app.loadImage("/src/img/devede5.png");
       
      
        }
 
        preload(){

            this.pong= this.app.loadSound('/src/sound/pong.mp3');
        }


iniciar(){
    
    this.x=500;
    this.y=250;
    this.dx = this.app.random(this.dir);
    this.dy = this.app.random(this.dir);
    
    this.mv=setInterval(this.mover,15);
    
   
}
pintar() {
    
        this.app.imageMode(this.app.CENTER);
        this.app.image(this.clr[this.img],this.x,this.y,60,30);
    
      
   }
mover(){
    if(Logica.pantallas==2){
     this.x += this.dx;
       this.y += this.dy;
     
       if (this.y > 480) {
           this.dy = -this.dy;
           this.img=Math.floor(this.app.random(0,5));
       }
     
       if (this.y < 0) {
       
           this.dy = -this.dy;
           this.img=Math.floor(this.app.random(0,5));
       }
    }
    
    
}
validar(){

    if(this.x>=Logica.jugadores[1].getX() && this.x<= Logica.jugadores[1].getX()+30&&this.y>=Logica.jugadores[1].getY() && this.y<= Logica.jugadores[1].getY()+120&& this.isTocando==false||
    this.x>=Logica.jugadores[1].getX() && this.x<= Logica.jugadores[1].getX()+30&&this.y>=Logica.jugadores[1].getY() && this.y<= Logica.jugadores[1].getY()+120&& this.isTocando==null){
        this.isTocando=true;
        if(this.dx>0){
            this.dx+=0.4;
        }
        if(this.dx<0){
            this.dx-=0.4;
        }
        if(this.dy>0){
            this.dy+=0.4
        }
        if(this.dy<0){
            this.dy-=0.4;
        }
        
       
            this.dy = this.app.random(this.dir);
            this.img=Math.floor(this.app.random(0,5));
           this.dx= -this.dx;
           this.pong.jump(0.7);

           return;
           

          
       }
       

       if(this.x>=Logica.jugadores[2].getX() && this.x<= Logica.jugadores[2].getX()+30&&this.y>=Logica.jugadores[2].getY() && this.y<= Logica.jugadores[2].getY()+120&&this.isTocando==true||
       this.x>=Logica.jugadores[2].getX() && this.x<= Logica.jugadores[2].getX()+30&&this.y>=Logica.jugadores[2].getY() && this.y<= Logica.jugadores[2].getY()+120&&this.isTocando==null){
        this.isTocando=false;
        if(this.dx>0){
            this.dx+=0.4;
        }
        if(this.dx<0){
            this.dx-=0.4;
        }
        if(this.dy>0){
            this.dy+=0.4;
        }
        if(this.dy<0){
            this.dy-=0.4;
        }
        
        this.img=Math.floor(this.app.random(0,5));
        this.dy = this.app.random(this.dir);
        this.dx = -this.dx;
        this.pong.jump(0.7);
           
        return;
       }

       

}


getX(){
    return this.x;
}

getY(){
    return this.y;
}

eliminarBalon(){
    clearInterval(this.mv);
    this.isTocando=null;
    
}






}