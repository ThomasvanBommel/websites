var machine_size = [5, 3];

var number_of_slots = 0;
var slot_margin = [0, 0];

var images = [
	new image("res/images/0.png"),
	new image("res/images/1.png"),
	new image("res/images/2.png"),
	new image("res/images/3.png"),
	new image("res/images/4.png"),
	new image("res/images/5.png")
];

var body;

var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");

var size = [window.innerWidth, window.innerHeight];

var slots = [];
for(var i = 0; i < machine_size[0]; i++){ slots.push(new slot()); }

function start(){
	console.log("started");
	
	body = document.getElementsByTagName("body")[0];
	
	canvas.width = size[0];
	canvas.height = size[1];
	
	body.appendChild(canvas);
	
	window.setInterval(update, 75);
}

function update(){
	size = [window.innerWidth, window.innerHeight];
	
	canvas.width = size[0];
	canvas.height = size[1];
	
	context.clearRect(0, 0, size[0], size[1]);
	
	context.fillStyle = "#000";
	context.fillRect(0, 0, size[0], size[1]);
	
	slots.forEach(function(slot){
		slot.update();
		slot.draw();
	});
}

function roll(){
	slots.forEach(function(slot){
		slot.roll();
	});
}

function slot(){
	this.id = number_of_slots++;
	this.cards = [];
	for(var i = 0; i < machine_size[1]; i++){ this.cards.push(new card()); }
	
	this.velocity = 0;
	this.gravity = 1;
	
	this.x = function(){
		return (size[0] / number_of_slots) * this.id + slot_margin[0] / 2;
	};
	
	this.y = function(){
		return slot_margin[1] / 2;
	};
	
	this.width = function(){ return size[0] / number_of_slots - slot_margin[0]; };
	this.height = function(){ return size[1] - slot_margin[1]; };

	this.update = function(){
		if(this.velocity > 0){ this.rotate(); };
		this.velocity = this.velocity - this.gravity >= 0 ? this.velocity - this.gravity : 0;
	};

	this.draw = function(){
		context.fillStyle = "#F00";
		context.fillRect(this.x(), this.y(), this.width(), this.height());
		
		for(var i = 0; i < this.cards.length; i++){
			var green = false;
			
			if(this.id > 0 && slots[this.id - 1].cards[i].id == this.cards[i].id){
				green = true;
			}
			
			if(this.id < slots.length - 1 && slots[this.id + 1].cards[i].id == this.cards[i].id){
				green = true;
			}
			
			if(green && slots[slots.length - 1].velocity == 0){
				context.fillStyle = "#0F0";
				context.fillRect(this.x(), this.y() + (this.height() / this.cards.length) * i, this.width(), this.height() / this.cards.length);
				
			}
			
			context.drawImage(this.cards[i].image, this.x(), this.y() + (this.height() / this.cards.length) * i, this.width(), this.height() / this.cards.length);
		}
	};
	
	this.roll = function(){
		this.velocity = Math.floor(Math.random() * 10) + 10;
		
		if(this.id != 0){
			this.velocity += slots[this.id - 1].velocity;
		}
	};
	
	this.rotate = function(){
		for(var i = this.cards.length - 1; i > 0; i--){
			this.cards[i] = this.cards[i - 1];
		}
		
		this.cards[0] = new card();
	};
}

function card(){
	this.id = Math.floor(Math.random() * 6);
	this.image = images[this.id];
}

function image(path){
	var texture = new Image();
	texture.src = path;
	
	return texture;
}