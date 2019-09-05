console.log('loaded: shader/world');

class World{

	constructor(){
		this.canvas = document.getElementById('world');
		this.gl = this.canvas.getContext('webgl');

		this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
		this.gl.clearColor(0, 0, 0, 1);
		this.gl.enable(this.gl.DEPTH_TEST);
		this.gl.depthFunc(this.gl.LEQUAL);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
		
		this.vertex = this.gl.createShader(this.gl.VERTEX_SHADER);
		this.gl.shaderSource(this.vertex, document.getElementById('vertex').text);
		this.gl.compileShader(this.vertex);

		this.fragment = this.gl.createShader(this.gl.FRAGMENT_SHADER);
		this.gl.shaderSource(this.fragment, document.getElementById('fragment').text);
		this.gl.compileShader(this.fragment);

		this.prog ram =this.gl.createProgram();
		this.gl.attachShader(this.program, this.vertex);
		this.gl.attachShader(this.program, this.fragment);
		this.gl.linkProgram(this.program);

		console.log(this.program);

		// if(!this.gl.getShaderParameter(this.fragment, this.gl.COMPILE_STATUS)){
		// 	console.log('error: ' + this.gl.getShaderInfoLog(this.fragment));
		// }

		this.verticies = new Float32Array([
			-.5, -.5,
			.5, -.5, 
			0, .5
		]);

		this.buffer = this.gl.createBuffer();
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
		this.gl.bufferData(this.gl.ARRAY_BUFFER, this.verticies, this.gl.STATIC_DRAW);

		this.gl.useProgram(this.program);
		this.program.color = this.gl.getUniformLocation(this.program, 'color');
		this.gl.uniform4fv(this.program.color, [1, 0, 0, 1]);

		this.program.position = this.gl.getAttribLocation(this.program, 'position');
		this.gl.enableVertexAttribArray(this.program.position);
		this.gl.vertexAttribPointer(this.program, 2, this.gl.FLOAT, false, 0, 0);
		
		this.gl.drawArrays(this.gl.TRIANGLES, 0, this.verticies.length / 2);
	}

	//

	frag(){
		//this.gl_FragColor
	}

	vert(){

	}

	//

	calc(){

	}

	draw(){
		
	}
}