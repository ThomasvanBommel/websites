
class BackgroundDot{

	constructor(){
		this.max_speed = 5;
		this.speed = random(this.max_speed);
		this.lifespan = Math.floor((Math.random() * 1000) + 1);
		this.color = randomcolor();

		this.max_x = window.innerWidth;
		this.max_y = window.innerHeight;
		this.x = Math.floor((Math.random() * this.max_x) + 1);
		this.y = Math.floor((Math.random() * this.max_y) + 1);

		this.vel_x = randomrange(this.speed);
		this.vel_y = randomrange(this.speed);
	}

	calculate(){
		this.lifespan --;

		if(this.x + this.vel_x > 0 && this.x + this.vel_x < this.max_x){
			this.x += this.vel_x;
		}else{
			this.vel_x = randomrange(this.speed);
		}

		if(this.y + this.vel_y > 0 && this.y + this.vel_y < this.max_y){
			this.y += this.vel_y;
		}else{
			this.vel_y = randomrange(this.speed);
		}
	}

	draw(ctx){
		ctx.fillStyle = this.color;
		ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.fill();
	}

	die(){
		this.speed = random(this.max_speed);
		this.lifespan = Math.floor((Math.random() * 1000) + 1);
		this.color = randomcolor();
	}
}

function random(num){
	return Math.random() * num;
}

function randomint(num){
	return Math.round(Math.random() * num);
}

function randomrange(num){//return between -num and +num, excluding +num
	return Math.random() * (num + num) - num;
}

function randomcolor(){
	var r = randomint(255);
	var g = randomint(255);
	var b = randomint(255);
	var a = random(1);

	if(a < .2){
		a += .2;
	}else if(a > .8){
		a -= .2;
	}

	//console.log('rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')');
	return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
}