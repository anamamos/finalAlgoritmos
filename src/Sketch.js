
new p5(function (app) {

    
    app.setup = function () {
        logica=new Logica(app);
        app.createCanvas(1000, 600);
        logica.preload();
        
        
        

    }
    
    app.draw = function () {
       
       
        logica.pintar();

    } 

    app.keyPressed= function(){
      logica.moverJugadores();

    }
    app.keyReleased= function(){
      logica.pararJugadores();

    }

    app.mouseClicked= function(){
      logica.click();

    }
  
  
});