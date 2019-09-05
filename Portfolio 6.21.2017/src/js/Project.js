console.log('Loaded : src/js/Project.js');

class Project{

	constructor(name, image){
		this.container = new Container(0, 0, 200, 225);

		this.name = name;
		this.image = new Image();
		this.image.src = image;

		this.color = '#F00';
	}
}