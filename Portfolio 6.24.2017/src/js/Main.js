var canvas;
var mouse_position = [0, 0];

var loop;

function start(){
	canvas = new Canvas();

	loop = setInterval(canvas.update, 10, canvas);
}

function stop(){
	clearInterval(loop);
	document.getElementById('Message').innerHTML = 'You Loose!';
}

function updatemouse(e){
	canvas.mouse.update(e);
	document.getElementById('MouseInfo').innerHTML = 'x: ' + e.clientX + ' / y: ' + e.clientY;
}

