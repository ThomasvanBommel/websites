function Start(){
	var machine = new Machine("Sloots", 1000);
	
	document.getElementsByTagName("body")[0].appendChild(machine.element);
	
	//window.setInterval(machine.canvas.update, 50);
	machine.canvas.update();
}

function Machine(title, credit){
	this.title = title;
	
	this.credit = credit;
	this.bet = 10;
	
	this.canvas = {
		element: CreateElement("canvas", null, ["canvas"], null),
		array: [
			[new Card(), new Card(), new Card()],
			[new Card(), new Card(), new Card()],
			[new Card(), new Card(), new Card()]
		],
		
		context: function(){
			return this.element.getContext("2d");
		},
		
		update: function(){
			
			this.draw();
		},
		
		draw: function(){
			this.context().clearRect(0, 0, this.element.width, this.element.height);
			
			var a = this.array;
			var ctx = this.context();
			
			this.array.forEach(function(deck, i){
				deck.forEach(function(card, j){
					var columns = deck.length;
					var rows = a.length;
					var index = i * columns + j;
					
					ctx.fillStyle = "#0F0";
					ctx.fillRect(50 * i, 50 * j, 40, 40);
					
					console.log(card + ", " + index);
				});
			});
		}
	};
	
	this.element = CreateElement("div", null, ["machine"], null);
	this.header = CreateElement("div", null, ["header"], this.title);
	this.footer = CreateElement("div", null, ["footer"], null);
	
	this.credit_panel = CreateElement("div", null, ["credit", "panel"], null);
	this.credit_title = CreateElement("p", null, ["title"], "Credit:");
	this.credit_value = CreateElement("p", null, ["value"], "$" + this.credit);
	
	this.bet_panel = CreateElement("div", null, ["bet", "panel"], null);
	this.bet_title = CreateElement("p", null, ["title"], "Bet:");
	this.bet_value = CreateElement("p", null, ["value"], "$" + this.bet);
	
	this.spin_button = CreateElement("button", null, ["spin", "panel"], "Spin");
	
	this.credit_panel.appendChild(this.credit_title);
	this.credit_panel.appendChild(this.credit_value);
	
	this.bet_panel.appendChild(this.bet_title);
	this.bet_panel.appendChild(this.bet_value);
	
	this.footer.appendChild(this.credit_panel);
	this.footer.appendChild(this.bet_panel);
	this.footer.appendChild(this.spin_button);
	
	this.element.appendChild(this.header);
	this.element.appendChild(this.canvas.element);
	this.element.appendChild(this.footer);
}

function CreateElement(type, id, class_list, inner_html){
	var element = document.createElement(type);
	element.id = id;
	element.innerHTML = inner_html;
	
	class_list.forEach(function(c){
		element.classList.add(c);
	});
	
	return element;
}

function Card(){
	this.id = Math.floor(Math.random() * 6);
}