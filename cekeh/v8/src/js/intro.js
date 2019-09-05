class Intro{
    
    
    constructor(element){
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        
        console.log(this.canvas);
        
        this.canvas.width = this.width = 300;
        this.canvas.height = this.height = 90;
        
//        element.appendChild(this.canvas);
//        
//        this.draw();
    }
    
    draw(){
        var ctx = this.context;
        var vmin = this.width < this.height ? this.width / 100 : this.height / 100;
        
        ctx.rect(0, 0, this.width, this.height);
        ctx.fillStyle = "#fff";
        ctx.fill();
        
        ctx.font = (50 * vmin) +"px Monospace";
        ctx.textAlign = "center";
        ctx.fillStyle = "#000";
        ctx.fillText("Cekeh", this.width / 2, this.height / 2 - 5 * vmin);
        
//        ctx.beginPath();
//        ctx.moveTo(0.4 * vmin, this.height / 2 + 0.05 * vmin);
//        ctx.lineTo(2.9 * vmin, this.height / 2 + 0.05 * vmin);
//        ctx.strokeStyle = "#ccc";
//        ctx.stroke();
        
        ctx.font = (30 * vmin) + "px Monospace";
        ctx.textAlign = "center";
        ctx.fillStyle = "#bbb";
        ctx.fillText("Thomas vanBommel", this.width / 2, this.height / 2 + 30 * vmin);
        
    }
}