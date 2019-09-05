/* global window */
/* global document */
import { Player } from "./player.js";
import { Shooter } from "./npc.js";

window.onload = init;

var canvas;
var player;
var npcs = [];

var target_FPS = 30;

// initialize everything needed for the background "game"
function init(){
    canvas = document.getElementById("background-canvas");
    canvas.context = canvas.getContext("2d");
    checkCanvasSize();
    
    player = new Player(canvas);
    npcs.push(new Shooter());
    console.log(npcs[0]);
    
    window.setInterval(update, 1000 / target_FPS);
}

var delta_time = 1;
var loop_time = Date.now();

// update is called once per frame
function update(){
    var now = Date.now();
    var elapsed = now - loop_time;
    loop_time = now;
    delta_time = elapsed / (1000);
    
    checkCanvasSize();
    
    player.update(delta_time);
//    for(var i = 0; i < npcs.length; i++) npcs[i].update();
    
    render();
}

// render to the canvas after updating
function render(){
    var ctx = canvas.context;
    
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    player.render();
    for(var i = 0; i < npcs.length; i++) npcs[i].render(ctx);
}

// check / set canvas size (will change dynamically)
function checkCanvasSize(){
    if(canvas == null) return;
    
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
}