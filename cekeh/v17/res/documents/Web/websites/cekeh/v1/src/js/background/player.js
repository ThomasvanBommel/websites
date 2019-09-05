function Player(canvas){
    this.canvas = canvas;
    
    this.size = 50;
    this.position = [0, 0];
    this.velocity = 250;
    
    this.update = function(delta_time){
        this.position[1] = this.canvas.height - this.size - 10;
    
        var x = this.position[0] + this.velocity * delta_time;
        if(x >= this.canvas.width - this.size){
            this.position[0] = this.canvas.width - this.size;
            this.velocity = 0;
        }else if(x <= 0){
            this.position[0] = 0;
            this.velocity = 0;
        }else{
            this.position[0] = x;
        }
    };
    
    this.render = function(){
        var ctx = this.canvas.context;
        
        ctx.fillStyle = "#0f0";
        ctx.fillRect(this.position[0], this.position[1], this.size, this.size);
    };
}

export { Player };