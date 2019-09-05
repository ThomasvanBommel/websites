var vertex = "\
	attribute vec4 aVertexPosition;\
	\
	uniform mat4 uModelViewMatrix;\
	uniform mat4 uProjectionMatrix;\
	\
	void main() {\
	  gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;\
	}\
";

var fragment = "\
    void main() {\
      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\
    }\
";

var canvas;
var gl;

var shader;
var shader_info;

main();

function main(){
	canvas = document.createElement('CANVAS');
	canvas.width = 640;
	canvas.height = 480;
	
	gl = canvas.getContext("webgl");
	if(!gl){ return; }
	
	gl.clearColor(0, 0, 0, 1);//0-1
	gl.clear(gl.COLOR_BUFFER_BIT);
	
	shader = gl.createProgram();
	gl.attachShader(shader, compile(gl.VERTEX_SHADER, vertex));
	gl.attachShader(shader, compile(gl.FRAGMENT_SHADER, fragment));
	gl.linkProgram(shader);
	console.log('shader compiled: ' + gl.getProgramParameter(shader, gl.LINK_STATUS));
	
	shader_info = {
		shader: shader,
		attribute: {
			vertex_position: gl.getAttribLocation(shader, 'aVertexPosition')
		},
		uniform: {
			projection_matrix: gl.getUniformLocation(shader, 'uProjectionMatrix'),
			model_view_matrix: gl.getUniformLocation(shader, 'uModelViewMatrix')
		}
	};
	
	var buffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	
	var vertices = [
		 1,	 1,
		-1,	 1,
		 1, -1,
		-1, -1
	];
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
}

function compile(type, src){
	compiled_shader = gl.createShader(type);
	gl.shaderSource(compiled_shader, src);
	gl.compileShader(compiled_shader);
	return compiled_shader;
}

window.onload = function(){
	document.body.appendChild(canvas);
	draw();
};

function draw(){
	console.log('drawing...');
	
	gl.clearColor(0, 0, 0, 1);
	gl.clearDepth(1);
	gl.enable(gl.DEPTH_TEST);
	gl.depthFunc(gl.LEQUAL);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	
	var field_of_view = 45 * Math.PI / 180;
	var aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
	var z_near = 0.1;
	var z_far = 100;
	var projection_matrix = mat4.create();
}

