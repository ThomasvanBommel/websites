window.onload = initialize;
window.addEventListener("resize", onresize);

var header;

var fps = 60;
var time = new Time(fps);
var background;

function initialize(){
    header = document.getElementById("header");
    header.logo = header.getElementsByClassName("logo")[0];
    header.menu = header.getElementsByClassName("menu")[0];
    header.menu.addEventListener("click", toggleNavigationMenu);
    header.options = header.getElementsByClassName("options")[0];
    header.options.defaultWidth = header.options.clientWidth;
    checkHeaderSize();
    
    var background_canvas = document.getElementById("background");
    background = new Background(background_canvas);
    setInterval(update, 1000 / fps);
}

function onresize(){
    checkHeaderSize();
}

function update(){
    time.tick();
    
    background.update();
    background.render();
}

//// Upadate the canvas background before rendering
//function updateBackgroundCanvas(){
//    background_canvas.width = background_canvas.clientWidth;
//    background_canvas.height = background_canvas.clientHeight;
//    
//    for(var i = 0; i < background_canvas.boxes.length; i++) background_canvas.boxes[i].update();
//}
//
//// Render the background canvas to the screen
//function renderBackgroundCanvas(){
//    var canvas = background_canvas;
//    var ctx = canvas.context;
//    
//    ctx.clearRect(0, 0, 200, 400);
//    
//    
//    for(var i = 0; i < background_canvas.boxes.length; i++) background_canvas.boxes[i].render();
//}
//
//// Render bouncing-box to the background-canvas
//function bouncingBox(
//    x = Math.random() * background_canvas.clientWidth, 
//    y = Math.random() * background_canvas.clientHeight, 
//    velx = (Math.random() * 2 - 1), 
//    vely = (Math.random() * 2 - 1), 
//    size = Math.random() * 20, 
//    color = "#f00"
//){
//    this.x = x;
//    this.y = y;
//    this.velx = velx * size;
//    this.vely = vely * size;
//    this.size = size;
//    this.color = color;
//    this.life = 100;
//    
//    this.update = function(){
//        // babies
//        if(Math.round(Math.random() * 150) === 1){
//            if(background_canvas.boxes.length < 75){
//                this.splode();
//                this.life = 0;
//            }
//        }
//        
//        // life
//        if(this.life-- <= 0){
//            for(var i = 0; i < background_canvas.boxes.length; i++){
//                if(background_canvas.boxes[i] === this){
//                    background_canvas.boxes.splice(i, 1);
//                }
//            }
//        }
//        
//        // physics
//        var futurex = this.x + this.velx;
//        var futurey = this.y + this.vely;
//
//        if(futurex <= 0 || futurex >= background_canvas.width){
//            this.velx *= -1.0;
//        }else{
//            this.x = futurex;
//        }
//
//        if(futurey <= 0 || futurey >= background_canvas.height){
//            this.vely *= -1.0;
//        }else{
//            this.y = futurey;
//        }
//    };
//    
//    this.render = function(){
//        var ctx = background_canvas.context;
//        
//        ctx.fillStyle = "#FF0000";
//        ctx.fillRect(this.x, this.y, this.size, this.size);
//    };
//      
//    // make some babies
//    this.splode = function(){
//        for(var i = 0; i < (Math.random() * 3 + 1); i++){
//            background_canvas.boxes.push(new bouncingBox(this.x, this.y));
//        }
//    };
//}

// Check the header size, and if we should use compact version of the navigation bar
function checkHeaderSize(){
    if((header.options.defaultWidth + header.logo.clientWidth + 10) > header.clientWidth){
        // use compact version
        if(!header.classList.contains("compact")) header.classList.add("compact");
    }else{
        // use full navigation bar
        if(header.classList.contains("compact")) header.classList.remove("compact");
        closeNavigationMenu();
    }
}

// "Open" the compact version of the navigation menu
function openNavigationMenu(){
    if(!header.classList.contains("open")) header.classList.add("open");
}

// "Close" the compact version of the navigation menu
function closeNavigationMenu(){
    if(header.classList.contains("open")) header.classList.remove("open");
}

// Toggle between open and close compact version of the navigation menu
function toggleNavigationMenu(){
    if(!header.classList.contains("open")){
        header.classList.add("open");
    }else{
        header.classList.remove("open");
    }
}