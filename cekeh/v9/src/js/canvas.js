console.log("canvas.js loaded");

class Canvas{    
    constructor(element_id){
        this.element = document.getElementById(element_id);
        this.drawables = [];
        
        if(this.element == null) throw "null element_id";
        
        this.updateCanvasSize();
    }
    
    update(){
        this.updateCanvasSize();
        
        this.drawables.forEach(function(e){
            e.update();
        });
    }
    
    updateCanvasSize(){
        this.width = this.element.width = this.element.offsetWidth;
        this.height = this.element.height = this.element.offsetHeight;
    }
    
    render(){
        var context = this.element.getContext("2d");
        
        if(context == null) throw "null context";
        
        context.fillStyle = "#000";
        context.fillRect(0, 0, this.width, this.height);
        
        this.drawables.forEach(function(e){
            e.render(context);
        });
        
        context.font = "25vmin monospace";
        context.textAlign = "center";
        context.fillStyle = "#666";
        context.fillText("Cekeh", this.width / 2, this.height * 0.5);
    }
    
    addPixie(){        
        this.drawables.push(new Pixie(Math.random() * this.width, Math.random() * this.height));
    }
    
    addDrawable(drawable){
        this.drawables.push(drawable);   
    }
}