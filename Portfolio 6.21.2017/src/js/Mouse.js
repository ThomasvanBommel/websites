console.log('Loaded : src/js/Mouse.js');

class Mouse{

	constructor(canvas){
		this.canvas = canvas;

		this.mousedown = false;

		this.position = [0, 0];
		this.distance = [0, 0];
	}

	down(event){
		this.mousedown = true;
		this.position = [event.clientX, event.clientY];
	}

	up(event){
		this.mousedown = false;
		this.distance = [event.clientX - this.position[0], event.clientY - this.position[1]];

		this.canvas.applyoffset();
	}

	move(event){

		if(event.buttons > 0){
			if(this.mousedown){
				this.distance = [event.clientX - this.position[0], event.clientY - this.position[1]];
				this.canvas.offset = this.distance;
				this.canvas.draw();
			}
		}

		var x = (event.clientX - (this.canvas.position[0] + this.canvas.offset[0]));
		var y = (event.clientY - (this.canvas.position[1] + this.canvas.offset[1]));
		document.getElementById('Coords').innerHTML = "x " + x + " : y " + y;

		this.canvas.projects.forEach(function(project){
			if(project.container.contains([x, y])){
				//console.log('contained!');
				project.color = '#F00';
				canvas.draw();
			}else{
				project.color = '#0F0';
				canvas.draw();
			}
		});
	}

	scroll(event){

		if(event.wheelDelta < 0){//scroll in
			
			this.canvas.ctx.scale(.9, .9);
			this.canvas.scale *= .9;
			this.canvas.draw();
			console.log('smaller :' + this.canvas.scale);
		}else if(event.wheelDelta > 0){
			
			this.canvas.ctx.scale(1.1, 1.1);
			this.canvas.scale *= 1.1;
			this.canvas.draw();
			console.log('bigger :' + this.canvas.scale);
		}

		
	}
}