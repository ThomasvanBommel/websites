var linework_canvas;
var linework; //graphic-context

var points = [];
var highest_point = 0;

//MAIN FUNCTION
window.onload = function(){
	linework_canvas = document.getElementById("linework");
	linework_canvas.width = linework_canvas.offsetWidth;
	linework_canvas.height = linework_canvas.offsetHeight;;
	linework = linework_canvas.getContext("2d");
	
	var start_time = Date.now();
	RandomSample(50);
	console.log(
		"Loading time: " + (Date.now() - start_time) + "ms\n" +
		"g < " + highest_point
	);
	
	//test line
	linework.beginPath();
	linework.moveTo(0, 0);
	linework.lineTo(linework_canvas.width, linework_canvas.height * (highest_point * .01));
	linework.stroke();
}

function Point(label, value, position){
	this.label = label;
	this.value = value;
	this.position = position;
}

function RandomSample(count){
	var x = 0;
	
	for(var i = 0; i < count; i++){
		var rand = Math.round((Math.random() * 100 + 1) * 100) / 100;
		rand = i;
		
		if(rand > highest_point){ highest_point = rand; }
		
		var pnt = new Point(i, rand, x + ", " + rand);
		points.push(pnt);
		
		var graph_element = document.getElementById("test");
		var element = document.createElement("DIV");
		element.id = i;
		element.className = 'point';
		element.innerHTML = pnt.value;
		
		var top_px = (graph_element.offsetHeight / 100) * pnt.value;
		var left_px = (graph_element.offsetWidth / count) * i;
		
		element.style.top = (top_px / graph_element.offsetHeight) * 100 + '%';
		element.style.left = (left_px / graph_element.offsetWidth) * 100 + '%';
		
		document.getElementById('test').appendChild(element);
		x++;
		
		if(i > 0){
			linework.beginPath();
			linework.moveTo(
				(graph_element.offsetHeight / 100) * points[i - 1].value,
				(graph_element.offsetWidth / count) * (x - 1)
			);
			
			//console.log(top_px, left_px);
			//console.log(element.style.top, element.style.left);
			
			linework.lineTo(
				top_px, left_px
			);
			linework.stroke();
		}
	}
	
	console.log('Document size: ' + $('body').width() + ', ' + $('body').height());
}

