console.log('Loaded : src/js/Canvas.js');

class Canvas{

	constructor(id){
		this.element = document.getElementById(id);
		this.ctx = this.element.getContext('2d');

		this.position = [0, 0];
		this.offset = [0, 0];
		this.scale = 1;

		this.projects = [];

		this.resize();
	}

	resize(){
		this.element.width = window.innerWidth - 8;
		this.element.height = window.innerHeight - 108;

		this.draw();
	}

	draw(){
		var ctx = this.ctx;
		var position = [this.position[0] + this.offset[0], this.position[1] + this.offset[1]];

		this.ctx.clearRect(0, 0, this.element.width * 9999, this.element.height * 9999);
		
		this.ctx.fillStyle = '#FFF';
		this.ctx.fillRect(0 + position[0], 0 + position[1], 1000, 1000);

		var x = 0, y = 0;
		this.projects.forEach(function(project){
			//console.log(project.name);
			project.container.x = x;
			project.container.y = y;
			ctx.fillStyle = project.color;
			ctx.fillRect(x + position[0], 0 + position[1], project.container.width, project.container.height);
			ctx.drawImage(project.image, x + position[0], project.container.y + position[1], project.container.width, project.container.height);
			x += project.container.width;
			//y += project.co
		});

		// var img = new Image();
		// img.src = "src/projects/hand/thumbnail.png";

		// var project = new Project('hand-io', img);
		// this.ctx.drawImage(project.image, position[0], position[1], project.width, project.height);
	}

	applyoffset(){
		this.position[0] += this.offset[0];
		this.position[1] += this.offset[1];

		this.offset = [0, 0];
	}
}