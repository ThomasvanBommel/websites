
class Blob{

	constructor(){
		this.x = 100;
		this.y = 0;
	}

	calculate(){
		if(this.y < window.innerHeight - 100){
			this.y += 9.6;
		}
	}

	draw(ctx){
		ctx.rect(this.x, this.y, 100, 100);
		ctx.stroke();
	}
}