var canvas;
var context;

var diameter;
var pitch;
var height;
var diameter_maximum;
var diameter_minimum;

var teeth = [];

window.onload = start;
window.onresize = recalculate;

function start(){
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    
    diameter = document.getElementById("diameter");
    pitch = document.getElementById("pitch");
    
    height = document.getElementById("height");
    diameter_minimum = document.getElementById("diameter_minimum");
    
    recalculate();
}

function recalculate(){
    height.value = Math.round(((Math.sqrt(3) / 2) * pitch.value) * 1000) / 1000;
    diameter_minimum.value = Math.round((diameter.value - (2 * (5 / 8) * height.value)) * 1000) / 1000;

    redraw();
}

function redraw(){
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    
    context.fillStyle = "#4e9afc";
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    teeth = [
        new tooth(0),
        new tooth(1)
    ];
    
    for(i in teeth){
        teeth[i].draw(context);
    }
}

function point(index, x, y){
    this.index = index;
    this.x = x;
    this.y = y;
    this.radius = 5;
    
    this.draw = function(context){        
        /* Background */
        context.beginPath();
        context.fillStyle = "#ffffff";
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fill();
        
        /* Text */
        context.fillStyle = "#4e9afc";
        context.font = this.radius * 1.5 + "px Arial";
        context.textAlign = "center";
        context.fillText("p" + index, this.x, y + (this.radius / 2), 100);
    };
}

function tooth(index){
    this.index = index;
    this.start = pitch.value * index;
    this.offsetx = (canvas.width / 2) - calcWidth(pitch.value);
    this.offsety = calcWidth((diameter.value / 4) - (height.value / 2));
    
    this.offsetx = 0;
    this.offsety = 0;
    
    this.points = [
        new point(index * 4, this.offsetx + calcWidth(this.start), this.offsety + calcHeight(diameter.value / 2)),
        new point(index * 4 + 1, this.offsetx + calcWidth(this.start + (pitch.value / 2) - (pitch.value / 16) - (pitch.value / 8)), this.offsety + calcHeight(diameter_minimum.value / 2)),
        new point(index * 4 + 2, this.offsetx + calcWidth(this.start + (pitch.value / 2) - (pitch.value / 16) - (pitch.value / 8) + (pitch.value / 4)), this.offsety + calcHeight(diameter_minimum.value / 2)),
        new point(index * 4 + 3, this.offsetx + calcWidth(this.start + (pitch.value - (pitch.value / 8))), this.offsety + calcHeight(diameter.value / 2)),
    ];
    
    this.draw = function(context){
        context.strokeStyle = "#ffffff";
        context.beginPath();

        for(i in this.points){
            if(i == 0){
                context.moveTo(this.points[0].x, this.points[0].y);
            }else{
                context.lineTo(this.points[i].x, this.points[i].y);
            }
        }

        context.stroke();
        
        for(i in this.points){
            this.points[i].draw(context);
        }
    }
}

function calcHeight(amount){
    var scale = (canvas.clientHeight / ((diameter.value / 2)));
    
    return (canvas.clientHeight - amount * scale);
}

function calcWidth(amount){
    var scale = ((canvas.clientWidth / (diameter.value / 2)) / 16) * 9;//pitch.value * 2
    
    return amount * scale;
}