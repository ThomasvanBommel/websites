console.log("Loaded: logo.js")

// get the logo element
var canvas = document.getElementById("logo_canvas");
var context = canvas.getContext("2d");

var r = 3;

// size the canvas
// canvas.height = "1em";
canvas.style.height = "100%";
canvas.style.width = "1.75em";

canvas.width = canvas.offsetWidth * r;
canvas.height = canvas.offsetHeight * r;

console.log(canvas.width + ", " + canvas.height);
console.log(canvas.offsetWidth + ", " + canvas.offsetHeight);

// draw to the context
context.fillStyle = "#fff";
context.font = (20 * r) + "px Lekton";
context.fillText("Ce eh", 1 * r, 17 * r);