
class Main{

	constructor(){
		this.canvas = new Canvas();
	}

	start(){
		var main = this;
		setInterval(this.update, 5, this);//update every 16.6ms

		window.onresize = function(){
			main.canvas.resize();
		};
	}

	update(main){
		console.log('frame');
		main.canvas.calculate();
		main.canvas.draw();
	}
}