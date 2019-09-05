class Guage{
	constructor(canvas, ring_color = "#0f5", center_color = "#000", font_color = "#fff"){
		this.canvas = canvas;
		this.ring_color = ring_color;
		this.center_color = center_color;
		this.font_color = font_color;

		try{
			this.from = parseFloat(this.canvas.getAttribute("from"));
			this.to = parseFloat(this.canvas.getAttribute("to"));
			this.label = this.canvas.getAttribute("label");
		}catch(e){}

		try{
			this.canvas.context = canvas.getContext("2d");
		}catch(e){}
		this.finished = 0;
	}

	async climb(increment, sleep){
		this.finished = this.from;

		while(this.finished < this.to){
			this.finished += increment;
			if(this.finished > this.to) this.finished = this.to;

			this.setSize();
			this.draw();
			await this.sleep(sleep);
		}
	}

	setSize(){
		this.canvas.width = this.canvas.clientWidth;
		this.canvas.height = this.canvas.clientWidth;
	}

	draw(){
		var ctx = this.canvas.context;
		var center = [this.canvas.width / 2, this.canvas.height / 2];

		var ring_size = this.canvas.width * 0.03;
		var radius = this.canvas.width / 2;

		var font_size = Math.round(this.canvas.width * 0.20);

		// ring
		ctx.beginPath();
		ctx.moveTo(center[0], center[1]);
		ctx.arc(center[0], center[1],radius, 0, ((2 / 100) * Math.round(this.finished * 100)) * Math.PI);
		ctx.moveTo(center[0], center[1]);
		ctx.fillStyle = this.ring_color;
		ctx.fill();

		// center
		ctx.beginPath();
		ctx.arc(center[0], center[1], radius - ring_size, 0, 2 * Math.PI);
		ctx.fillStyle = this.center_color;
		ctx.fill();

		// text
		ctx.font = font_size + "px Arial";
		ctx.fillStyle = this.font_color;
		ctx.textAlign = "center";
		// ctx.fillText(Math.round(this.finished * 100) + "%", center[0], center[1]);
		ctx.fillText(this.label, center[0], center[1] + font_size * 0.35);
	}

	sleep(ms) {
	  return new Promise(resolve => setTimeout(resolve, ms));
	}
}

export { Guage };