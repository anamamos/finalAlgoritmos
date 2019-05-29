class Logica{

    static jugadores= [2];
    static pantallas=0;

    constructor(app){
        this.app=app;
        
        this.jugador1=100;
        this.jugador2=850;
        this.puntajeJ1=0;
        this.puntajeJ2=0;
        this.J1arriba=false;
        this.J1abajo=false;
        this.J2arriba=false;
        this.J2abajo=false;
        this.y=190;
        this.balon= new Balon(app);
 
     Logica.jugadores[1]= new Jugador(app,this.jugador1,this.y);
           
     Logica.jugadores[2]= new Jugador(app,this.jugador2,this.y);
           
     this.meterGol=this.meterGol.bind(this);
     setInterval(this.meterGol,1000);
     this.update=this.update.bind(this);
     this.mova=setInterval(this.update,10);
           
     this.balon.iniciar();
     this.fondo=this.app.loadImage("/src/img/fondo.png");
     this.contador=this.app.loadImage("/src/img/cosito.png");
     this.titulo= this.app.loadImage("/src/img/inicio.png");
     this.instrucciones= this.app.loadImage("/src/img/instrucciones.png");
     this.v1=this.app.loadImage("/src/img/jugador1v.png");
     this.v2=this.app.loadImage("/src/img/jugador2v.png");

    }
    preload(){
        this.balon.preload();
        this.inicio= this.app.loadSound('/src/sound/inicio.mp3');
        this.game = this.app.loadSound('/src/sound/game.mp3');
        this.win1 = this.app.loadSound('/src/sound/miguewin.mp3');
        this.win2 = this.app.loadSound('/src/sound/venuswin.mp3');
        this.inicio.setVolume(0.2);
        this.game.setVolume(0.1);
        this.win1.setVolume(0.1);
        this.win2.setVolume(0.1);
        
       
        
    }

    pintar(){
        switch(Logica.pantallas){
            case 0: 
                 this.app.image(this.titulo,0,0);
                 
            break;

            case 1:
                    this.app.image(this.instrucciones,0,0);
            break;

            case 2:
                    this.app.image(this.fondo,0,0);
                    this.app.image(this.contador,0,500,1000,100);
                    this.app.textSize(60);
                    this.app.fill(0);
                    this.app.textStyle(this.app.BOLD);
                    this.app.text(this.puntajeJ1,320,575);
                    this.app.text(this.puntajeJ2,690,575);
                    this.balon.pintar();
                   Logica.jugadores[1].pintarJ1();
                   Logica.jugadores[2].pintarJ2();
                   

                   
                   if(this.puntajeJ1==5){
                    Logica.pantallas=3;
                    this.game.stop();
                    this.win1.play();
                   }
                   if(this.puntajeJ2==5){
                    Logica.pantallas=4;
                    this.game.stop();
                    this.win2.jump(58);
                    
                   }
            break;

            case 3:
                   this.app.image(this.v1,0,0);
            break;

            case 4:
                    this.app.image(this.v2,0,0);
            break;

        }

        
    }

    moverJugadores(){
        if (this.app.keyCode === this.app.UP_ARROW && Logica.pantallas==2) {
            this.J2arriba=true;
          }
  
          if(this.app.keyCode === this.app.DOWN_ARROW && Logica.pantallas==2){
             this.J2abajo=true;
            }

            if(this.app.key === 'w' && Logica.pantallas==2){
                this.J1arriba=true;
              }
      
              if(this.app.key === 's' && Logica.pantallas==2){
                  this.J1abajo=true;
                }
    }

    pararJugadores(){
        if (this.app.keyCode === this.app.UP_ARROW && Logica.pantallas==2) {
            this.J2arriba=false;
          }
  
          if(this.app.keyCode === this.app.DOWN_ARROW && Logica.pantallas==2){
             this.J2abajo=false;
            }

            if(this.app.key === 'w' && Logica.pantallas==2){
                this.J1arriba=false;
              }
      
              if(this.app.key === 's' && Logica.pantallas==2){
                  this.J1abajo=false;
                } 
    }

    update(){
        if(this.J1arriba){
            Logica.jugadores[1].moverArriba();
        }
        if(this.J1abajo){
            Logica.jugadores[1].moverAbajo();
        }
        if(this.J2arriba){
            Logica.jugadores[2].moverArriba();
        }
        if(this.J2abajo){
            Logica.jugadores[2].moverAbajo();
        }
    }

    meterGol(){
        if (this.balon.getX() < 0 ) {
    
              
        
                this.balon.eliminarBalon();
                this.puntajeJ2++;
                 if(this.app.frameCount % 100){
                  this.balon.iniciar();
                 }
                
              
           
    
           }
    
        if (this.balon.getX() > 1000) {
           
            this.balon.eliminarBalon();
            this.puntajeJ1++;
            if(this.app.frameCount % 60){
                this.balon.iniciar();
               }
               
           

           }     
    }
  
click(){
    switch(Logica.pantallas){
        case 0:
            if(this.app.mouseX>=404&&this.app.mouseY>=540&&this.app.mouseX<=565&&this.app.mouseY<=580){
                Logica.pantallas=1;
                if(Logica.pantallas==1){
                    this.inicio.jump(0.5);
                }
               
                
            }
            break;

            case 1:
            if(this.app.mouseX>=770&&this.app.mouseY>=545&&this.app.mouseX<=940&&this.app.mouseY<=570){
                Logica.pantallas=2;
                
                this.game.play();
                this.game.setLoop(true);
                
                
            }
            break;
            case 3:
                    if(this.app.mouseX>=645&&this.app.mouseY>=380&&this.app.mouseX<=940&&this.app.mouseY<=520){
                        Logica.pantallas=2;
                        this.puntajeJ1=0;
                        this.puntajeJ2=0;
                        this.game.play();
                    this.win1.stop();
                        
                        
                    }
            break;

            case 4:
                    if(this.app.mouseX>=645&&this.app.mouseY>=380&&this.app.mouseX<=940&&this.app.mouseY<=520){
                        Logica.pantallas=2;
                        this.puntajeJ1=0;
                        this.puntajeJ2=0;
                        this.game.play();
                    this.win2.stop();
                    }
            break;
    }
}
}