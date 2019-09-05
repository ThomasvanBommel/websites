
class Canvas{

	//var element;
	//
	//var width;
	//var height;
	//var ctx;
	//
	//var background_dots[];

	constructor(){
		this.element = document.createElement('canvas');
		this.element.width = window.innerWidth;
		this.element.height = window.innerHeight;
		this.element.context = this.element.getContext('2d');

		this.width = this.element.width;
		this.height = this.element.height;
		this.ctx = this.element.context;

		document.body.append(this.element);

		this.background_dots = [
			[new BackgroundDot(), new BackgroundDot(), new BackgroundDot()], 
			[new BackgroundDot(), new BackgroundDot(), new BackgroundDot()],
			[new BackgroundDot(), new BackgroundDot(), new BackgroundDot()],
			[new BackgroundDot(), new BackgroundDot(), new BackgroundDot()]
		];
		console.log(this.background_dots);
	}

	resize(){
		var width = window.innerWidth;
		var height = window.innerHeight;

		this.element.width = width;
		this.element.height = height;
		this.width = width;
		this.height = height;

		this.background_dots.forEach(function(group){
			group.forEach(function(dot){
				dot.max_x = width;
				dot.max_y = height;
			});
		});
		
	}

	calculate(){
		this.background_dots.forEach(function(group){
			group.forEach(function(dot, i, array){
				if(dot.lifespan <= 0){
					//array[i] = new BackgroundDot();
					dot.die();
				}
				dot.calculate();
			});
		});
	}

	draw(){
		var ctx = this.ctx;
		this.ctx.clearRect(0, 0, this.width, this.height);
		

		this.background_dots.forEach(function(group){
			
			ctx.beginPath();

			group.forEach(function(dot){
				dot.draw(ctx);
			});

			ctx.closePath();
		});

		
	}

}