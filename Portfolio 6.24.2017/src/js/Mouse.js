
class Mouse{

	constructor(){
		this.position = [0, 0];
	}

	update(e){
		this.position = [e.clientX, e.clientY];
	}
}