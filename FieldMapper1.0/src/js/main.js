var tree_background_pattern;

var canvas;
var context;

var fps_element;
var previous_time;

var map;
var offset;

var new_field_button;
var remove_field_button;
var rename_field_button;

var field_selection;
var selected_field;
var new_field_counter;


window.onload = start;

/* (void) Entry poing of the program, initialization */
function start(){
    var tree_background_image = new Image();
    tree_background_image.src = "res/images/trees.png";
    tree_background_image.onload = function(){ tree_background_pattern = context.createPattern(this, "repeat"); };
    
    canvas = document.getElementById("canvas");
    canvas.addEventListener("wheel", onScroll);
    canvas.addEventListener("click", onClick);
    context = canvas.getContext("2d");
    
    fps_element = document.getElementById("fps");
    previous_time = getTime();
    
    map = new Map();
    offset = [0, 0];
    
    new_field_button = document.getElementById("new_field");
    remove_field_button = document.getElementById("remove_field");
    rename_field_button = document.getElementById("rename_field");
    
    field_selection = document.getElementById("field_selection");
    selected_field = 0;
    new_field_counter = 0;
    
    updateFieldSelection();
    
    window.setInterval(update, 33);
}

/* (void) Update everything before rendering */
function update(){
    var now = getTime();
    var frame_time = now - previous_time;
    previous_time = now;
    
    fps_element.innerHTML = Math.round(1000 / frame_time);
    
    updateCanvasSize();
    map.update();
    
    render();
}

/* (void) Render everything to the canvas */
function render(){
    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    map.draw();
}

/* (void) Update the canvas size, so the image doesn't warp */
function updateCanvasSize(){
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
}

/* (float) Get the current time in miliseconds */
function getTime(){
    return new Date().getTime();
}

/* (void) Window scroll event */
function onScroll(wheel){
    var x = wheel.deltaX;
    var y = wheel.deltaY;
    
    offset[0] += wheel.deltaX;
    offset[1] += wheel.deltaY;
}

/* (void) Window mouse click event */
function onClick(click){
    if(click.button == 0){
        var x = click.clientX + offset[0] - canvas.offsetLeft;
        var y = click.clientY + offset[1] - canvas.offsetTop;
        
        var field = map.fields[selected_field];        
        if(field) field.coordinates.push(new Coordinate(x, y));
    }
}

/* (object) Map object */
function Map(){
    this.fields = [];
    
    /* (void) Update this before rendering */
    this.update = function(){
        for(i in this.fields) this.fields[i].update();
    };
    
    /* (void) Draw this to the canvas */
    this.draw = function(){
        for(i in this.fields) this.fields[i].draw();
    };
}

/* Create a new field ,add it to the map, and update field selection */
function createField(){
    var field = new Field(map.fields.length);
    map.fields.push(field);
    
    selected_field = field.index;
    updateFieldSelection();
}

/* Remove field and update field selection */
function removeField(index){    
    if(confirm("Remove field '" + map.fields[index].name + "', permanently?")){
        map.fields.splice(index, 1);

        selected_field = index > 0 ? index - 1 : 0;
        updateFieldSelection();
    }
}

/* Rename field object */
function renameField(index){
    var current_name = map.fields[index].name;
    var new_name = prompt("Rename '" + current_name + "':", current_name);
    
    if(new_name) map.fields[index].name = new_name;
    
    updateFieldSelection();
}

/* Updates the options in the field_selection tool */
function updateFieldSelection(){
    var html = "";
    
    for(i in map.fields){
        map.fields[i].index = i;
        
        var selected = i == selected_field ? " selected" : "";
        html += "<option value='" + map.fields[i].index + "'" + selected + ">" + map.fields[i].name + "</option>"
    }
    
    field_selection.innerHTML = html;
    
    if(map.fields.length == 0) {
        remove_field_button.disabled = true;
        rename_field_button.disabled = true;
    }else{
        remove_field_button.disabled = false;
        rename_field_button.disabled = false;
    }
}

/* Change the current selected field */
function changeFieldSelection(index){
    selected_field = index;
}

/* (object) Field object */
function Field(index){
    this.index = index;
    this.name = "Field #" + this.index;
    this.coordinates = [];
    
    /* (void) Update this before rendering */
    this.update = function(){
        for(i in this.coordinates) this.coordinates[i].update();
    };
    
    /* (void) Draw this to the canvas */
    this.draw = function(){
        context.beginPath();
        
        for(i in this.coordinates){
            if(i == 0){
                context.moveTo(this.coordinates[i].x, this.coordinates[i].y);
            }else{
                context.lineTo(this.coordinates[i].x, this.coordinates[i].y);
            }
        }
        
        context.closePath();
        context.fillStyle = tree_background_pattern;//"#6a6"
        context.strokeStyle = "#fff";
        context.fill();
        context.stroke();
        
        for(i in this.coordinates) this.coordinates[i].draw();
    };
}

/* (object) Coordinate object */
function Coordinate(x, y){
    this.size = 10;
    
    /* (void) Update this before rendering */
    this.update = function(){
        this.x = x - offset[0];
        this.y = y - offset[1];
    };
    
    /* (void) Draw this to the canvas */
    this.draw = function(){
        context.fillStyle = "#fff";
        context.fillRect(this.x - (this.size / 2), this.y - (this.size / 2), this.size, this.size);
    };
}