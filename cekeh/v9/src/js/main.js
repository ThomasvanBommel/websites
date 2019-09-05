console.log("main.js loaded");

var FPS = 15;

var canvas;

window.onload = init;

function init(){    
    canvas = new Canvas("background");
    
//    canvas.addPixie();
//    canvas.addDrawable(new Login(canvas.width / 2, canvas.height / 2));
    
    for(var i = 0; i < 100; i++) canvas.addPixie();
    
    setInterval(update, 1000 / FPS);
}

function update(){
    canvas.update();
    canvas.render();
}