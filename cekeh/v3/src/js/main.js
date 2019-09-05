import Guage from "./guage2.js";

window.addEventListener("resize", resize);

var guages = [];

var elements = document.getElementsByClassName("guage");

for(var i = 0; i < elements.length; i++){
	// create a new canvas element
	var canvas = document.createElement("canvas");

	// get the attributes from the guage elements
	canvas.from = parseFloat(elements[i].getAttribute("from"));
	canvas.to = parseFloat(elements[i].getAttribute("to"));
	canvas.label = elements[i].getAttribute("label");

	// add our canvas to the guage elements
	elements[i].prepend(canvas);

	console.log(canvas.clientWidth);

	// store guages in an array
	var guage = new Guage(canvas);
	guages.push(guage);

	// animate the guage
	guage.climb();
}

// for when the user decides to change the window size
function resize(){
	for(var i = 0; i < guages.length; i++){
		guages[i].update();
		guages[i].draw();
	}
}