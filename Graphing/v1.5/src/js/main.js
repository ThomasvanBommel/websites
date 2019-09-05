var g = new Graph('g', 300, 300, GeneratePoints(20));
//console.log(g);

window.onload = function(){
	document.body.appendChild(g.div);
	
	g.draw();
}

//Graph object(i-s,f, f,     f,      f,   a[i])
function Graph(id, width, height, points){
	var x_spacing = width / points.length;
	var y_spacing = height / 100;                //NEEDS CHANGE
	
	//<div> ELEMENT
	var div = document.createElement('DIV');
		div.id = id;
		div.className = 'graph';
		div.style.width = width;
		div.style.height = height;
	
	//<canvas> ELEMENT
	var canvas = document.createElement('CANVAS');
		canvas.id = 'canvas';
		canvas.width = width;
		canvas.height = height;
		
	div.appendChild(canvas);
	var context = canvas.getContext('2d');
	
	//return graph object
	return {
		id: 		id,
		points: 	points,

		div: 		div,
		canvas: 	canvas,
		ctx: 		context,
		
		append:		function(element){
			element.appendChild(div);
		},
		
		draw: 		function(){
			context.lineWidth = 1;
			context.strokeStyle = '#f00';
			
			context.beginPath();
			context.moveTo(0, 0);
			
			for(var i = 0; i < points.length; i++){
				var x = (i + 1) * x_spacing;
				var y = points[i] * y_spacing;
				
				var pnt = document.createElement('DIV');
				pnt.innerHTML = Math.round(points[i]);
				pnt.className = 'point';
				pnt.style.left = x;
				pnt.style.top = y;
				
				div.appendChild(pnt);
				
				context.lineTo(x, y);
			}
			
			context.stroke();
		}
	};
}

//Generate random values (int)
function GeneratePoints(count){
	var points = [];
	
	for(var i = 0; i < count; i++){
		points.push(Math.random() * 100);
	}
	
	//return array[float]
	return points;
}