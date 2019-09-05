class Background{
    constructor(canvas){
        this.canvas = canvas;
        this.canvas.context = canvas.getContext("2d");
        
        Background.newShip = function(){
            Background.ships.push(new MotherShip(canvas, Math.random() * canvas.clientWidth, Math.random() * canvas.clientHeight));
        };
        Background.ships = [];
        for(var i = 0; i < 10; i++) Background.newShip();
    }
    
    update(){
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;
        
        for(var i = 0; i < Background.ships.length; i++) Background.ships[i].update();
    }
    
    render(){
        var ctx = this.canvas.context;
        var width = this.canvas.clientWidth;
        var height = this.canvas.clientHeight;
        
        ctx.clearRect(0, 0, width, height);
        
        for(var i = 0; i < Background.ships.length; i++) Background.ships[i].render();
    }
}

class MotherShip{
//    MotherShip.max_velocity = 2;
//    var max_range = 150;
//    var max_size = 50;
    
    constructor(canvas, x, y){
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.max_velocity = 2;
        this.max_range = 150;
        this.max_size = 50;
        this.default_color = "#0f0";
        this.velx = (Math.random() * 2 - 1) * this.max_velocity;
        this.vely = (Math.random() * 2 - 1) * this.max_velocity;
        this.range = Math.random() * this.max_range;
        this.size = Math.random() * this.max_size;
        this.inrange = false;
        this.color = this.default_color;
    }
    
    update(){
        this.checkLife();
        this.calculatePosition();
        this.checkForTargets();
    }
    
    render(){
        var ctx = this.canvas.context;
        var hsize = this.size / 2;
        
        if(hsize <= 0) return;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, hsize, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.range, 0, 2 * Math.PI);
        ctx.strokeStyle = "#ff0";
//        ctx.stroke();
        
        if(this.target){
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.target.x, this.target.y);
            ctx.lineWidth = 2;
            ctx.strokeStyle = "#f00";
            ctx.stroke();
        }
    }
    
    checkLife(){
        if(this.size <= 0){
            for(var i = 0; i < Background.ships.length; i++){
                if(Background.ships[i] === this) {
                    Background.ships.splice(i, 1);
                    return;
                }
            }
        }
        
        if(this.size >= this.max_size) this.split();
    }
    
    split(){
        this.size /= 2;
        Background.newShip();
    }
    
    calculatePosition(){
        var adjvelx = this.inrange ? this.velx * 0.5 : this.velx;
        var adjvely = this.inrange ? this.vely * 0.5 : this.vely;
        
        var futurex = this.x + adjvelx * Time.deltatime;
        var futurey = this.y + adjvely * Time.deltatime;
        
        if(futurex <= 0 || futurex >= this.canvas.clientWidth){
            this.velx *= -1;
        }else{
            this.x = futurex;
        }
        
        if(futurey <= 0 || futurey >= this.canvas.clientHeight){
            this.vely *= -1;
        }else{
            this.y = futurey;
        }
    }
    
    checkForTargets(){
        var ships = Background.ships;
        
        for(var i = 0; i < ships.length; i++){
            if(ships[i] !== this){
                var targetx = ships[i].x;
                var targety = ships[i].y;
                var distance = this.distance(this.x, this.y, targetx, targety) - ships[i].size / 2;
                
                if(distance < this.range){
                    this.inrange = true;
                    this.target = ships[i];
//                    this.color = "#f00";
                    ships[i].size--;
                    this.size++;
                    return;
                }else{
                    this.inrange = false;
                    this.color = this.default_color;
                }
            }
        }
        
        this.target = null;
    }
    
    distance(x0, y0, x1, y1){
        return Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2));
    }
}