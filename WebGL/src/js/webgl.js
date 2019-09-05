//PLAYER
var player;
var player_speed = .5;

//CAMERA
var cam_offset = [0, 0];//[-1959, -549]
var cam_speed = 5.;
var fixed = false;

//CONTROLS
var mouse_position = [0., 0.];
var zoom = 1;
var zoomSpeed = .1 * zoom;

var time;

//MAIN VARIABLES
var canvas;
var webgl;

var interval;
var delta;

var last = Date.now();

//SHADER VARIABLES
var a_position;

var u_size;
var u_offs;
var u_zoom;
var u_time;

var u_player_position;
var u_mouse_position;
var u_land_height;

var land_height = .75;

var u_water_loc;
var u_grass_loc;

var water_tex;
var grass_tex;

var tile_images = loadImages(['src/images/16px/water.png', 'src/images/16px/grass.png'], start);
var textures = [];

//KEY BOOLS
var w = false;
var a = false;
var s = false;
var d = false;

var up = false;
var left = false;
var down = false;
var right = false;

//FUNCTIONS----------------------------------------------------------------------------------
function start(){
	canvas = document.getElementById('canvas');
	canvas.width = vmin();
	canvas.height = vmin();

	webgl = canvas.getContext('webgl', {antialias: false});

	if(!webgl){ error('webgl-context'); return; }

	var vert = createShader("world-vertex-shader", webgl.VERTEX_SHADER);
	var frag = createShader("world-fragment-shader", webgl.FRAGMENT_SHADER);

	if(!vert || !frag){ error('shader-compile'); return; }

	var program = createProgram(vert, frag);

	if(!program){ error('create-program'); return; }

	a_position = webgl.getAttribLocation(program, 'a_position');

	u_size = webgl.getUniformLocation(program, 'u_size');
	u_offs = webgl.getUniformLocation(program, 'u_offs');
	u_zoom = webgl.getUniformLocation(program, 'u_zoom');
	u_time = webgl.getUniformLocation(program, 'u_time');

	u_player_position = webgl.getUniformLocation(program, 'u_player_position');
	u_mouse_position = webgl.getUniformLocation(program, 'u_mouse_position');
	u_land_height = webgl.getUniformLocation(program, 'u_land_height');

	u_water_loc = webgl.getUniformLocation(program, 'u_water_tex');
	u_grass_loc = webgl.getUniformLocation(program, 'u_grass_tex');

	water_tex = new Texture('src/images/16px/water.png');
	grass_tex = new Texture('src/images/16px/grass.png');

	createTexture(tile_images[0]);
	createTexture(tile_images[1]);

	var buffer = webgl.createBuffer();
	webgl.bindBuffer(webgl.ARRAY_BUFFER, buffer);
	webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1]), webgl.STATIC_DRAW);

	player = new Player();

	interval = setInterval(draw, 10, program, buffer);//50ms

	console.log('Fully loaded. 0 errors');
}

function vmin(){
	if(window.innerHeight < window.innerWidth){ return window.innerHeight; }
	return window.innerWidth;
}

function createProgram(vert, frag){
	var program = webgl.createProgram();
	webgl.attachShader(program, vert);
	webgl.attachShader(program, frag);
	webgl.linkProgram(program);

	var success = webgl.getProgramParameter(program, webgl.LINK_STATUS);
	if(success){ return program; }

	webgl.deleteProgram(program);
	return null;
}

function createShader(id, type){
	var shader = webgl.createShader(type);
	webgl.shaderSource(shader, document.getElementById(id).text);
	webgl.compileShader(shader);

	var success = webgl.getShaderParameter(shader, webgl.COMPILE_STATUS);
	if(success){ return shader; }

	webgl.deleteShader(shader);
	return null;
}

function error(string){
	console.log(string + ' error!');
}

function draw(program, buffer){
	time = new Date().getSeconds();
	var now = Date.now();
	delta = (now - last) * .001;
	last = now;

	calculate();

	webgl.viewport(0, 0, canvas.width, canvas.height);
	webgl.clearColor(0, 0, 0, 0);//transparent canvas
	webgl.clear(webgl.COLOR_BUFFER_BIT);
	webgl.useProgram(program);

	webgl.enableVertexAttribArray(a_position);
	webgl.bindBuffer(webgl.ARRAY_BUFFER, buffer);
	webgl.vertexAttribPointer(a_position, 2, webgl.FLOAT, false, 0, 0);

	webgl.uniform2fv(u_size, [canvas.width, canvas.height]);
	webgl.uniform2fv(u_offs, cam_offset);
	webgl.uniform1f(u_zoom, zoom * zoom);
	//webgl.uniform1f(u_time, time);

	webgl.uniform2fv(u_player_position, player.position);
	webgl.uniform2fv(u_mouse_position, mouse_position);
	webgl.uniform1f(u_land_height, land_height);

	webgl.uniform1i(u_water_loc, 0);
	webgl.uniform1i(u_grass_loc, 1);

	webgl.activeTexture(webgl.TEXTURE0);
	webgl.bindTexture(webgl.TEXTURE_2D, textures[0]);
	webgl.activeTexture(webgl.TEXTURE1);
	webgl.bindTexture(webgl.TEXTURE_2D, textures[1]);

	webgl.drawArrays(webgl.TRIANGLES, 0, 6);

	//console.log(cam_offset);
}

function calculate(){
	//player_speed = 1 * zoom;
	land_height = document.getElementById('land_height').value;
	cam_speed = 1. * zoom * zoom;

	// if(fixed){ cam_offset = player.position; }
	// console.log(fixed);

	if(w){ cam_offset[1] += cam_speed * delta; };
	if(a){ cam_offset[0] -= cam_speed * delta; };
	if(s){ cam_offset[1] -= cam_speed * delta; };
	if(d){ cam_offset[0] += cam_speed * delta; };

	if(up){ player.position[1] += player_speed * delta; };
	if(left){ player.position[0] -= player_speed * delta; };
	if(down){ player.position[1] -= player_speed * delta; };
	if(right){ player.position[0] += player_speed * delta; };

	var zdist = (.5 * zoom * zoom);
	if(fixed){ cam_offset = [player.position[0] - zdist, player.position[1] - zdist]; }
}

function mousemove(event){
	var size = vmin();
	var hsize = size / 2;

	var x = (event.clientX) / size;
	var y = ((size - event.clientY)) / size;
	mouse_position = [x, y];
	document.getElementById('extra').innerHTML = mouse_position;
}

function mousewheel(event){
	if(event.deltaY < 0){
		zoom -= zoomSpeed;
	}else{
		//console.log('out');
		zoom += zoomSpeed;
	}

	if(zoom < 0.1){ zoom = 0.1; }

	console.log('zoom: ' + zoom + ' : 1/zoom ->' + (1 / zoom));
}

function keydown(event){
	if(event.keyCode == 87 && !fixed){//W
		w = true;
	}
	if(event.keyCode == 65 && !fixed){//A
		a = true;
	}
	if(event.keyCode == 83 && !fixed){//S
		s = true;
	}
	if(event.keyCode == 68 && !fixed){//D
		d = true;
	}

	if(event.keyCode == 38){//up
		up = true;
	}
	if(event.keyCode == 37){//left
		left = true;
	}
	if(event.keyCode == 40){//down
		down = true;
	}
	if(event.keyCode == 39){//right
		right = true;
	}
	//console.log(event.keyCode + ', ' + cam_offset + ' : delta ->' + delta);
}

function keyup(event){
	if(event.keyCode == 87){//W
		w = false;
	}
	if(event.keyCode == 65){//A
		a = false;
	}
	if(event.keyCode == 83){//S
		s = false;
	}
	if(event.keyCode == 68){//D
		d = false;
	}

	if(event.keyCode == 38){//up
		up = false;
	}
	if(event.keyCode == 37){//left
		left = false;
	}
	if(event.keyCode == 40){//down
		down = false;
	}
	if(event.keyCode == 39){//right
		right = false;
	}
	console.log('offset ->' + cam_offset + ' : delta ->' + delta + ' : zoom ->' + zoom);
}

//IMAGES-------------------------------------------------------------------------------------

function loadImage(url, callback){
	var image = new Image();
	image.src = url;
	image.onload = callback;
	return image;
}

function loadImages(urls, callback){
	var images = [];
	var imagesToLoad = urls.length;

	var onImageLoad = function(){
		--imagesToLoad;
		if(imagesToLoad == 0){
			tile_images = images;
			callback(images);
		}
	};

	for(var i = 0; i < imagesToLoad; i++){
		var image = loadImage(urls[i], onImageLoad);
		images.push(image);
	}
}

function createTexture(img){
	var texture = webgl.createTexture();
	webgl.bindTexture(webgl.TEXTURE_2D, texture);

	webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_WRAP_S, webgl.CLAMP_TO_EDGE);
    webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_WRAP_T, webgl.CLAMP_TO_EDGE);
    webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_MIN_FILTER, webgl.NEAREST);
    webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_MAG_FILTER, webgl.NEAREST);

    webgl.texImage2D(webgl.TEXTURE_2D, 0, webgl.RGBA, webgl.RGBA, webgl.UNSIGNED_BYTE, img);
    textures.push(texture);
}

//CAMERA-------------------------------------------------------------------------------------

function center(){
	var zdist = (.5 * zoom * zoom);
	cam_offset = [player.position[0] - zdist, player.position[1] - zdist];
	//console.log((zdist));
}

//CLASSES------------------------------------------------------------------------------------

class Player{
	constructor(){
		this.size = 20;
		this.radius = this.size / 2;

		this.position = [0, 0];
	}
}

class Texture{
	constructor(src){
		this.texture = webgl.createTexture();
		webgl.bindTexture(webgl.TEXTURE_2D, this.texture);
		webgl.texImage2D(webgl.TEXTURE_2D, 0, webgl.RGBA, 1, 1, 0, webgl.RGBA, webgl.UNSIGNED_BYTE, new Uint8Array([255, 0, 0, 255]));

		this.image = new Image();
		this.image.src = src;

		var me = this;
		this.image.addEventListener('load', function(e){
			
			//document.getElementById('extra').innerHTML = e.target;
			webgl.bindTexture(webgl.TEXTURE_2D, me.texture);
			webgl.texImage2D(webgl.TEXTURE_2D, 0, webgl.RGBA, webgl.RGBA, webgl.UNSIGNED_BYTE, e.target);//new Uint8Array([0, 255, 0, 255])
			webgl.generateMipmap(webgl.TEXTURE_2D);
			console.log('Texture is texture : ' + webgl.isTexture(me.texture));
		});
	}
}