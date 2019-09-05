var canvas;
var context;

var notifications;
var notification_count;

var latitude;
var longitude;
var latitude_max;
var longitude_max;

var viewport_x;
var viewport_y;
var viewport_width;
var viewport_height;

var points;

window.onload = start;

function start(){
    canvas = document.getElementById("canvas");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    context = canvas.getContext("2d");
    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    notifications = document.getElementById("notifications");
    notification_count = 0;
    
    latitude = document.getElementById("latitude");
    longitude = document.getElementById("longitude");
    latitude_max = 0;
    longitude_max = 0;
    
    viewport_x = 0;
    viewport_y = 0;
    viewport_width = 1;
    viewport_height = 1;
    
    points = [];
    
    new Notification("Location data unavailable", "error");
}

/* (object) Notification(string) */
function Notification(notification){
    console.log("New notification!");
    
    var id = "notification_" + notification_count++;
    
    var div = document.createElement("div");
    div.id = id;
    div.classList.add("notification");
    div.innerHTML = notification;
    
    var close = document.createElement("button");
    close.type = "button";
    close.innerHTML = "Close";
    close.onclick = function(){
        console.log(id);
        console.log(document.getElementById(id));
        notifications.removeChild(document.getElementById(id));
    };
    
    div.appendChild(close);
    
    notifications.appendChild(div);
}

/* (void) getCurrentPosition(function(position), function) */
function getCurrentPosition(success, error){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success, error);
    }else{
        new Notification("Location data unavailable", "error");
    }
}

function setPosition(lat, lon){
    latitude.value = lat;
    longitude.value = lon;
}

function GPSSuccess(position){
    setPosition(position.coords.latitude, position.coords.longitude);
}

function getLocation(){
    setPosition(0, 0);
    getCurrentPosition(GPSSuccess, console.log);
}

function place(){
    points.push(new point(latitude.value, longitude.value));
    console.log("Point added.");
}

function point(lat, lon){
    this.latitude = lat;
    this.longitude = lon;
    
    if(lat < viewport_x || viewport_x == 0) viewport_x = lat;
    if(lon < viewport_y || viewport_y == 0) viewport_y = lon;
    if(lon > longitude_max || longitude_max == 0) longitude_max = lon;
    if(lat > latitude_max || latitude_max == 0) latitude_max = lat;
    
    viewport_width = latitude_max - viewport_x;
    viewport_height = longitude_max - viewport_y;
    
    this.draw = function(){
        var x = lat - viewport_x;
        var y = lon - viewport_y;
        
        var diff = latitude_max - viewport_x;
        var p_width = diff != 0 ? (canvas.width - 10) / diff : 0;
        
        console.log("p_width: " + p_width);
        console.log("canvas: " + ((p_width * (lat - viewport_x))));
        
        context.fillStyle = "#fff";
        context.fillRect((p_width * (lat - viewport_x)), y, 10, 10);
    };
    
    this.draw();
}