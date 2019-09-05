window.onload = initialize;
window.addEventListener("click", function(e){
    glitterBomb(new Vec2(e.clientX, e.clientY));
});

var animated_header;

var particle_count = 0;
var particles = [
    new Particle(new Vec2(50, 75))
];

function initialize(){
    animated_header = document.getElementById("animated_header");
    
    setInterval(update, 20);
//    for(var i = 0; i < 100; i++) particles.push(new Particle(new Vec2(500, 75), new Vec2((Math.random() * 50) - 25, (Math.random() * 50) - 25)));
}

function update(){
    if(!animated_header) return;
    
    particles.forEach(function(p){
        p.update();
    });
    
    render();
}

function render(){
    if(!animated_header) return;
    
    var width = animated_header.width = animated_header.clientWidth;
    var height = animated_header.height = animated_header.clientHeight;
    var context = animated_header.getContext("2d");
    
    context.fillStyle = "#0f0";
    context.fillRect(0, 0, width, height);
    
    particles.forEach(function(p){
        p.render(context);
    });
}

function glitterBomb(position){
    for(var i = 0; i < 500; i++) particles.push(new Particle(new Vec2(position.x, position.y), new Vec2((Math.random() * 50) - 25, (Math.random() * 50) - 25)));
}

function Particle(position = new Vec2(0, 0), velocity = new Vec2(0, 0)){
    this.id = particle_count++;
    
    this.color = "rgba(" + (Math.random() * 255) + ", " + (Math.random() * 255) + ", " + (Math.random() * 255) + ", " + (Math.random() * 0.25 + 0.75) + ")";
    this.life = 200;
    this.grounded = false;
    
    this.position = position;
    this.velocity = velocity;
    
    var size = 10;
    var gravity = 0.5;
    var drag = 0.1;
    var mass = 0.5;
    
    this.update = function(){
        if(this.life-- <= 0) this.kill();
        
        if(!this.grounded) this.velocity.y += gravity;
        
//        var vel_y = 
        
        if(this.position.x <= 0 || this.position.x >= animated_header.width) this.velocity.x *= (-1 + drag);
        if(this.position.y <= 0) this.velocity.y = 0;
        if(this.position.y + size >= animated_header.height) {
//            console.log(Math.abs(this.velocity.y));
            
            if(Math.abs(this.velocity.y) < .1){
//                console.log("grounded:" + this.velocity.y);
                
                if(this.position.y < 10){
                    console.log("me");
                }
                
                this.velocity.y = 0;
                this.position.y = animated_header.height - size / 2;
                this.grounded = true;
                
//                this.kill();
            }else{
                this.velocity.y *= -.8;
            }
        }else{
            this.grounded = false;
        }
        
        this.velocity.x = this.velocity.x > 0 ? this.velocity.x -= drag : this.velocity.x < 0 ? this.velocity.x += drag : 0;
        this.velocity.y = this.velocity.y > 0 ? this.velocity.y -= drag : this.velocity.y < 0 ? this.velocity.y += drag : 0;
        
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    };
    
    this.render = function(context){
        context.fillStyle = this.color;
        context.fillRect(this.position.x - size / 2, this.position.y - size / 2, size, size);
    };
    
    this.identify = function(){
        console.log(this.id + 
            ": Loc(" + this.position.x + ", " + this.position.y + 
            ") Vel(" + this.velocity.x + ", " + this.velocity.y + ")");
    };
    
    this.kill = function(){
        var i = particles.indexOf(this);
        
        particles.splice(i, 1);
        
//        console.log(particles.length);
    };
}

function Vec2(x, y){
    this.x = x;
    this.y = y;
}