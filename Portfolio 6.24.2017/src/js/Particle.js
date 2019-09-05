
class Particle{

	constructor(){
		this.color = randomcolor();
		this.difficulty = .01;
		this.velocity = [0, .2];
		this.position = [
			random(window.innerWidth),
			-10
		];
	}

	contains(position){
		if(position[0] > this.position[0] && position[0] < this.position[0] + 10){
			if(position[1] > this.position[1] && position[1] < this.position[1] + 10){
				return true;
			}
		}
		return false;
	}

	update(){

		if(randomint(100) > 90){
			this.velocity[0] += randomrange(this.velocity[0] * (this.difficulty + this.difficulty));
			this.velocity[1] += random(this.velocity[1] * this.difficulty);
		}

		this.position[0] += this.velocity[0];
		this.position[1] += this.velocity[1];

		if(this.position[1] > window.innerHeight){
			//this.reset();
			stop();
		}
	}

	draw(ctx){
		ctx.fillStyle = this.color;
		ctx.rect(this.position[0], this.position[1], 10, 10);
		ctx.fill();
		ctx.stroke();
	}

	reset(){
		//this.velocity = [0, .2];
		this.position = [
			random(window.innerWidth),
			-10
		];
	}
}

//RANDOM FUNCTIONS

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

	//console.log('rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')');
	return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
}