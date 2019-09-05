
class Canvas{

	constructor(){
		this.element = document.createElement('canvas');
		this.element.width = window.innerWidth;
		this.element.height = window.innerHeight;
		this.element.context = this.element.getContext('2d');

		this.mouse = new Mouse();
		this.background = new Background(this);

		document.body.append(this.element);
	}

	update(canvas){
		var ctx = canvas.element.context;
		ctx.clearRect(0, 0, canvas.element.width, canvas.element.height);
		ctx.beginPath();

		//console.log(canvas.mouse.position);
		canvas.background.update(ctx, canvas.mouse);

		ctx.closePath();
	}
}