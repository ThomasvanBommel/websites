console.log('loaded background');

//TIME
var time = Date.now();

//CANVAS
var canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

//CLASSES
class Mouse{
	constructor(){
		document.addEventListener('move', this.update);
	}

	update(){
		console.log('moving');
	}
}

class Ring{
	constructor(){
		this.speed = 1;
		this.changetime = 500;

		this.red = Math.random() * 255;
		this.green = Math.random() * 255;
		this.blue = Math.random() * 255;
		this.alpha = Math.random();

		//console.log(this.red + 'red')
		this.x = canvas.width * Math.random();
		this.y = canvas.height * Math.random();
		this.r = (canvas.height / 2) * Math.random();
	}

	draw(ctx){
		ctx.beginPath();

		ctx.strokeStyle = 'rgba(' + parseInt(this.red) + ', ' + parseInt(this.green) + ', ' + parseInt(this.blue) + ', ' + this.alpha + ')';
		ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
		ctx.stroke();
	}

	move(delta){
		var red = this.randomrange(this.changetime) * delta;
		var green = this.randomrange(this.changetime) * delta;
		var blue = this.randomrange(this.changetime) * delta;
		var alpha = this.randomrange(1) * delta;

		if(this.red + red > 0 && this.red + red < 255){
			this.red += red;
		}
		if(this.green + green > 0 && this.green + green < 255){
			this.green += green;
		}
		if(this.blue + blue > 0 && this.blue + blue < 255){
			this.blue += blue;
		}
		if(this.alpha + alpha > 0 && this.alpha + alpha < 1){
			this.alpha += alpha;
		}

		//document.getElementById('Color').innerHTML = 'r: ' + this.red + ', g: ' + this.green + ', b: ' + this.blue;

		this.x += this.randomrange(this.speed) * delta;
		this.y += this.randomrange(this.speed) * delta;

		var r = this.randomrange(5) * delta;
		if(this.r + r > 0){
			this.r += r;
		}
		
	}

	randomrange(max){
		return Math.random() * (max + max) - max;
	}

	randomcolor(){
		var r = parseInt(Math.random() * 255) + ', ',
			g = parseInt(Math.random() * 255) + ', ',
			b = parseInt(Math.random() * 255) + ', ',
			a = Math.random();
		return 'rgba(' + r + g + b + a + ')';
	}
}

//FUNCTIONS
function loadbackground(){
	document.body.append(canvas);
}

//MAIN
var mouse = new Mouse();

var ringcount = 100;
var rings = [];
for(i = 0; i < ringcount; i++){
	rings.push(new Ring());
}
console.log(rings);

//UPDATE
//var interval = setInterval(update, 20);
function update(){
	var delta = (Date.now() - time) * 0.001;
	time = Date.now();

	document.getElementById('DeltaTime').innerHTML = delta;

	//ctx.clearRect(0, 0, canvas.width, canvas.height);

	rings.forEach(function(ring, i, array){
		ring.move(delta);
		ring.draw(ctx);
	});
}

function stop(){
	clearInterval(interval);
}