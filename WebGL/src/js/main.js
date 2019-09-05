//CANVAS
var canvas;

//WEBGL
var gl;
var program;
var buffer;

//SHADERS
var vert;
var frag;
var compiled = false;
var linked = false;

//MAIN
function start(){
	log('start');

	canvas = document.getElementById('world');
	gl = canvas.getContext('webgl');

	if(!gl){ unsupported(); return; }
	initGL();
}
//INIT
function initGL(){
	log('initGL');

	gl.viewport(0, 0, window.innerWidth, window.innerHeight);
	gl.clearColor(1, 0, 1, 1);
	gl.clear(gl.COLOR_BUFFER_BIT);

	vert = gl.createShader(gl.VERTEX_SHADER);
	gl.shaderSource(vert, document.getElementById('vertex').text);
	gl.compileShader(vert);
	compiled = gl.getShaderParameter(vert, gl.COMPILE_STATUS);
	if(!compiled){ unsupported(compiled); return; }else{ log('vert: ' + compiled); }

	frag = gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(frag, document.getElementById('fragment').text);
	gl.compileShader(frag);
	compiled = gl.getShaderParameter(frag, gl.COMPILE_STATUS);
	if(!compiled){ unsupported(compiled); return; }else{ log('frag: ' + compiled); }

	program = gl.createProgram();
	if(!program){ unsupported('program error'); return}else{ log('program: true'); }

	gl.attachShader(program, vert);
	gl.attachShader(program, frag);
	gl.linkProgram(program);
	linked = gl.getProgramParameter(program, gl.LINK_STATUS);
	if(!linked){ unsupported(linked); return; }else{ log('linked: ' + linked); }

	
	draw();
	//setInterval(draw, 1000);
}

//DRAW
function draw(){
	var verticies = new Float32Array([
			-.5, -.5,
			.5, -.5, 
			0, .5
		]);
	buffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.bufferData(gl.ARRAY_BUFFER, verticies, gl.STATIC_DRAW);

	gl.useProgram(program);

	var color = gl.getUniformLocation(program, "u_color");
	gl.uniform4fv(color, [0, 1, 0, 1]);

	var position = gl.getAttribLocation(program, 'a_position');
	gl.enableVertexAttribArray(position)
	gl.vertexAttribPointer(program, 2, gl.FLOAT, false, 0, 0);

	gl.drawArrays(gl.TRIANGLES, 0, verticies.length / 2);
}

//FUNCTIONS
function unsupported(string){
	alert('<canvas> Unsupported: ' + string);
}

function log(string){
	console.log(string);
}