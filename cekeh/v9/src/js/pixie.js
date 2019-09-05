console.log("pixie.js loaded");

class Pixie extends Drawable{
    
    constructor(x, y){
        super();
        
        this.x = x;
        this.y = y;
        
        this.brightness = 1.0;
        this.speed = -Math.random() * 0.05;
        this.radius = Math.random() * 15;
        
    }
    
    update(){
        super.update();
        
        this.brightness += this.speed;
        
        if(this.brightness < 0) {
            this.brightness = 0;
            this.speed *= -1;
        }else if(this.brightness > 1){
            this.brightness = 1;
            this.speed *= -1;
        }
    }
    
    render(context){
        super.render(context);
        
        var r = (1.0 - this.brightness) * 255;
        
        context.beginPath();
        
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        
        context.fillStyle = "rgba(" + r + ", " + r + ", " + r + ", 0.5)";
        context.fill();
    }
}