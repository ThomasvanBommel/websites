class Guage{
	constructor(canvas){
		this.canvas = canvas;
		this.counter = this.canvas.from;
	}

	async climb(){
		while(this.counter < this.canvas.to){
			this.counter += 0.02;

			if(this.counter > this.canvas.to) this.counter = this.canvas.to;

			this.update();
			this.draw();

			await new Promise(resolve => setTimeout(resolve, 20));
		}
	}

	update(){
		// get the screen dpi
		var dpi = window.devicePixelRatio || 2;

		// set canvas size
		this.canvas.width = this.canvas.clientWidth * dpi;
		this.canvas.height = this.canvas.clientHeight * dpi;

		// set context for new size (may not be nessessary)
		this.canvas.context = this.canvas.getContext("2d");
	}

	draw(){
		var center = [
			this.canvas.width / 2,
			this.canvas.height / 2
		];

		var smaller = center[0];
		if(center[1] < center[0]) smaller = center[1];
		// var smaller = center[1];

		var margin = smaller * 0.05;

		var radius = smaller - margin;
		var size = margin;
		var start = ((2 / 100) * this.canvas.from) * Math.PI;
		var end = (2 * this.counter) * Math.PI;

		var ctx = this.canvas.context;

		// ring
		ctx.beginPath();
		ctx.arc(center[0], center[1], radius, start, end);
		ctx.arc(center[0], center[1], radius - size, end, start, true);
		ctx.fillStyle = "#55f";
		ctx.fill();

		// label
		ctx.font = (smaller * 0.4) + "px Courier New, monospace";
		ctx.fillStyle = "#fff";
		ctx.textAlign = "center";
		ctx.fillText(this.canvas.label, center[0], center[1] + smaller * 0.);

		// second label
		ctx.font = (smaller * 0.25) + "px Courier New, monospace";
		ctx.fillText("hours", center[0], center[1] + smaller * 0.35);
	}
}

export default Guage