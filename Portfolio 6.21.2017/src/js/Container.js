console.log('Loaded : src/js/Container.js');

class Container{

	constructor(x, y, width, height){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	contains(position){
		if(position[0] > this.x && position[0] < this.x + this.width){
			//console.log('horizontal');
			if(position[1] > this.y && position[1] < this.y + this.height){
				//console.log('vertical');
				return true;
			}
		}
		//console.log(position);
		return false;
	}
}