<html>
	<head>
		<title>WebGL</title>
		<link rel="stylesheet" type="text/css" href="src/css/style.css?version=<?=time();?>" />
		<script id="fragment" type="x-shader/x-fragment"><?php include('src/shaders/world.frag'); ?></script>
		<script id="vertex" type="x-shader/x-vertex"><?php include('src/shaders/world.vert'); ?></script>

		<!-- <script src="src/js/shaders/world.js"></script> -->

		<!-- <script src="src/js/main.js" id="helo"></script> -->
		<script src="src/js/webgl.js?version=<?=time();?>" id="helo"></script>
	</head>
	<body onload="" onmousemove="mousemove(event);" onmousewheel="mousewheel(event);" onkeydown="keydown(event);" onkeyup="keyup(event);">
		<div id="controls">
			<input type="checkbox" onclick="fixed = !fixed;"/>fixed<br>
			<input type="button" value="center_camera" onclick="center();" /><br>
			<input id="land_height" type="range" min="-1" max="1" step=".01" value=".75" />land_height
		</div>
		<canvas id="canvas">
			This browser doesn't support the <code>&lt;canvas&gt;</code> tag.
		</canvas>
		<div id="extra"></div>
	</body>
</html>

<!-- VERTEX -->
<script id="world-vertex-shader" type="notjs">
	//in vec2 in_coord;

	// an attribute will receive data from a buffer
  	attribute vec4 a_position;
  	attribute vec2 a_texcoord;

  	varying highp vec2 v_texcoord;
 
	void main() {
    	gl_Position = a_position;
    	v_texcoord = a_texcoord;
	}
</script>

<!-- FRAGMENT -->
<script id="world-fragment-shader" type="notjs">
	// fragment shaders don't have a default precision so we need
	// to pick one. mediump is a good default

	precision mediump float;

	uniform vec2 u_size;
	uniform vec2 u_offs;
	uniform float u_zoom;
	uniform float u_time;

	uniform vec2 u_player_position;
	uniform vec2 u_mouse_position;
	uniform float u_land_height;

	uniform sampler2D u_water_tex;
	uniform sampler2D u_grass_tex;

	varying highp vec2 v_texcoord;

	#define M_PI 3.14159265358979323846

	//float rand(vec2 c);
	
	// float rand(vec2 co){return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);}
	// float rand (vec2 co, float l) {return rand(vec2(rand(co), l));}
	// float rand (vec2 co, float l, float t) {return rand(vec2(rand(co, l), t));}	

	//float noise(vec2 p, float freq);
	float perlin(vec2 p, float dim);
	float perlin(vec2 p, float dim, float time);

	float LAND = .75;
	 
	void main() {
		float zoom = u_zoom;

		vec2 texcoord = ((gl_FragCoord.xy * zoom) / u_size) + u_offs;
		vec2 moucoord = ((u_mouse_position.xy * zoom)) + u_offs;

		vec3 rgb = vec3(0., 0., 0.);

		//vec2 tc = texcoord / 64.;
		float p1 = perlin(texcoord, .05);
		float p2 = perlin(texcoord, .1);
		float p3 = perlin(texcoord, .3);
		float p4 = perlin(texcoord, .125);
		float p5 = perlin(texcoord, .3725);

		//float p1 = 
		// float t = perlin(texcoord, .01);
		// float p = t;

		// t = perlin(texcoord * .2, .01);
		// if(t < 0.){ p += t; p /= 2.; }

		// t = perlin(texcoord * .2, .0333);
		// if(t < 0.){ p += t; p /= 2.; }

		float p = (p1 + p2 + p3 + p4 + p5) / 5.;
		p = (p + p2);
		if(p1 < 0.){ p = (p + p1) / 2.; }

		float p6 = perlin(texcoord, .01337);
		if(p6 < .5){
			p = (p + p6) / 2.;
		}
		p = (p1 + p2) / 2.;

		//WATER
		if(p < u_land_height * 2. - 1.){
			rgb = vec3(0., 0., .75 + p);
			rgb += texture2D(u_water_tex, mod(texcoord * 64., 1.)).rgb;
			rgb *= .8;
		}

		//LAND
		if(p >= u_land_height * 2. - 1.){
			rgb = vec3(0., .75 - p, 0.);
			rgb += texture2D(u_grass_tex, mod(texcoord * 64., 1.)).rgb;
			rgb *= .75;
		}

		float size = .01;
		if(texcoord.x < u_player_position.x + size && texcoord.y < u_player_position.y + size && texcoord.x > u_player_position.x - size && texcoord.y > u_player_position.y - size){
			rgb = vec3(1., 0., 0.);
		}

		float dist = distance(texcoord, moucoord);

		if(dist < .1 * u_zoom){
			rgb += vec3(.1, .1, .1);
		}else{
			float d = .25 * dist;
			rgb -= vec3(d, d, d);
		}

		//rgb = vec3(moucoord.x, 0., 0.);
		
		gl_FragColor = vec4(rgb, 1.0); // return redish-purple
	}

	//PERLIN NOISE

	float rand(vec2 co){return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);}//fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453)
	float rand (vec2 co, float l) {return rand(vec2(rand(co), l));}
	float rand (vec2 co, float l, float t) {return rand(vec2(rand(co, l), t));}	

	float noise(vec2 p, float freq){
		float unit = u_size.x/freq;
		vec2 ij = floor(p/unit);
		vec2 xy = mod(p,unit)/unit;
		//xy = 3.*xy*xy-2.*xy*xy*xy;
		xy = .5*(1.-cos(M_PI*xy));
		float a = rand((ij+vec2(0.,0.)));
		float b = rand((ij+vec2(1.,0.)));
		float c = rand((ij+vec2(0.,1.)));
		float d = rand((ij+vec2(1.,1.)));
		float x1 = mix(a, b, xy.x);
		float x2 = mix(c, d, xy.x);
		return mix(x1, x2, xy.y);
	}

	float pNoise(vec2 p, int res){
		float persistance = .5;
		float n = 0.;
		float normK = 0.;
		float f = 4.;
		float amp = 1.;
		int iCount = 0;
		for (int i = 0; i<50; i++){
			n+=amp*noise(p, f);
			f*=2.;
			normK+=amp;
			amp*=persistance;
			if (iCount == res) break;
			iCount++;
		}
		float nf = n/normK;
		return nf*nf*nf*nf;
	}

	float perlin(vec2 p, float dim, float time) {
		vec2 pos = floor(p * dim);
		vec2 posx = pos + vec2(1.0, 0.0);
		vec2 posy = pos + vec2(0.0, 1.0);
		vec2 posxy = pos + vec2(1.0);
		
		float c = rand(pos, dim, time);
		float cx = rand(posx, dim, time);
		float cy = rand(posy, dim, time);
		float cxy = rand(posxy, dim, time);
		
		vec2 d = fract(p * dim);
		d = -0.5 * cos(d * M_PI) + 0.5;
		
		float ccx = mix(c, cx, d.x);
		float cycxy = mix(cy, cxy, d.x);
		float center = mix(ccx, cycxy, d.y);
		
		return center * 2.0 - 1.0;
	}

	// p must be normalized!
	float perlin(vec2 p, float dim) {
		
		/*vec2 pos = floor(p * dim);
		vec2 posx = pos + vec2(1.0, 0.0);
		vec2 posy = pos + vec2(0.0, 1.0);
		vec2 posxy = pos + vec2(1.0);
		
		// For exclusively black/white noise
		/*float c = step(rand(pos, dim), 0.5);
		float cx = step(rand(posx, dim), 0.5);
		float cy = step(rand(posy, dim), 0.5);
		float cxy = step(rand(posxy, dim), 0.5);*/
		
		/*float c = rand(pos, dim);
		float cx = rand(posx, dim);
		float cy = rand(posy, dim);
		float cxy = rand(posxy, dim);
		
		vec2 d = fract(p * dim);
		d = -0.5 * cos(d * M_PI) + 0.5;
		
		float ccx = mix(c, cx, d.x);
		float cycxy = mix(cy, cxy, d.x);
		float center = mix(ccx, cycxy, d.y);
		
		return center * 2.0 - 1.0;*/
		return perlin(p, dim, 0.0);
	}
</script>