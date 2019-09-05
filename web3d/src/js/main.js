
//Function returns a canvas capable of 3D rendering
function Canvas(element, vss, fss){
	
	console.log(vss);
	
	//Create the canvas
	var canvas = document.createElement('CANVAS');
	canvas.width = element.offsetWidth;
	canvas.height = element.offsetHeight;
	
	var ctx = canvas.getContext('webgl');
	
	//To be returned as CANVAS object
	var child = {
		
		//HTML element to attach / resize the canvas to
		element: 	element,
	
		//Create the canvas, get the webgl context
		canvas:		canvas,
		ctx: 		ctx,
		
		//Shaders
		vertex: 	ctx.createShader(ctx.VERTEX_SHADER),
		fragment: 	ctx.createShader(ctx.FRAGMENT_SHADER),
		
		//Init function
		start: function(){	
			this.ctx.shaderSource(this.vertex, vss);
			this.ctx.shaderSource(this.fragment, fss);
			
			console.log('Loaded vss:\n-> ' + this.ctx.getShaderParameter(this.vertex, this.ctx.COMPILE_STATUS) + '\n-> ' + vss);
			console.log('Loaded fss:\n-> ' + this.ctx.getShaderParameter(this.fragment, this.ctx.COMPILE_STATUS) + '\n-> ' + fss);
				
			//Clear screen
			this.clear();
		},
		
		//Load shaders
		
		
		//Function to clear the screen
		clear:		function(){
			this.ctx.clearColor(0, 0, 0, 1);
			this.ctx.clear(this.ctx.COLOR_BUFFER_BIT);
		}
	};
	
	//Loaded
	console.log("Loaded ctx:\n-> " + child);
	
	//Append child to the element and return the canvas
	element.appendChild(canvas);
	return child;
}