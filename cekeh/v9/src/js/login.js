console.log("login.js loaded");

class Login extends Drawable{
    
    
    
    constructor(x, y){
        super();
        
        this.x = x;
        this.y = y;
        
        this.width = 250;
        this.input_height = 20;
        
        this.alpha = 0.5;
    }
    
    update(){
        super.update();
    }
    
    render(context){
        super.render(context);
        
        this.drawInput(this.x, this.y, context);
        this.drawInput(this.x, this.y + this.input_height * 2, context);
    }
    
    drawInput(x, y, context){
        context.fillStyle = "rgba(255, 255, 255, " + this.alpha + ")";
        context.fillRect(x - this.width / 2, y, this.width, this.input_height);
    }
}