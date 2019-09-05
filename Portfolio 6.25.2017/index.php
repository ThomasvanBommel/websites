<html>
	<head>
		<link rel="stylesheet" type="text/css" href="src/css/style.css?v=<?=time();?>" />
		<!-- <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"></script> -->
		<!-- <script src="src/js/background.js"></script> -->
	</head>
	<body onload="" onclick="" bgcolor="#CCC" onmousemove="updatemouse(event);">
		<div id="DeltaTime">DeltaTime</div>
		<div id="Color"></div>

		<section class="header">
			<div id="cube">

				<figure class="front long"></figure>
				<figure class="back long" style="background-color:rgba(0, 0, 0, 0.5)">
					<p>[t*homas]</p>
				</figure>
				<figure class="right short" style="background-color:rgba(255, 255, 255, 0.5)"></figure>
				<figure class="left short" style="background-color:rgba(255, 255, 255, 0.5)"></figure>
				<figure class="top long" style="background-color:rgba(255, 255, 255, 0.5)"></figure>
				<figure class="bottom long" style="background-color:rgba(255, 255, 255, 0.5)"></figure>
				
				<p>[t<font color="#0f0">*</font>homas]</p>
			</div>
		</section>

		<section class='container'>
			<div id="content">
				<figure class="back"></figure>
				<figure class="front">
					<iframe width="560" height="315" src="https://www.youtube.com/embed/RzBxiBrAHbg" frameborder="0" allowfullscreen style="margin:10px;" onmousemove="iframemove(event);"></iframe>
				</figure>
			</div>
		</section>

	</body>
</html>

<script>
	var content_rotation = [0, 0];
	var distance = 500;
	var rotx = 0;
	var roty = 0;

	var minx = -20;
	var maxx = 20;

	var miny = -5;
	var maxy = 5;

	var speedx = 0.06;
	var speedy = -0.02;

	var cube = document.getElementById('cube');

	var interval = setInterval(updatelogo, 20);
	function updatelogo(){
		rotx += speedx;
		roty += speedy;

		if(rotx > maxx || rotx < minx){
			speedx *= -1;
		}

		if(roty > maxy || roty < miny){
			speedy *= -1;
		}

		//document.getElementById('DeltaTime').innerHTML = rotx;
		cube.style.transform = 'translateZ( -' + distance + 'px ) rotateX( ' + rotx + 'deg ) rotateY( ' + roty + 'deg )';
	
		//document.getElementById('DeltaTime').innerHTML = [event.clientX, event.clientY];
	}

	document.addEventListener('mousemove', updatemouse);
	function updatemouse(e){
		var offsetx = window.innerWidth / 2;
		var offsety = window.innerHeight / 2;
		
		content_rotation[0] = ((e.clientY - offsety)) * .03;
		content_rotation[1] = ((e.clientX - offsetx) * -1) * .03;

		var content = document.getElementById('content');
		content.style.transform = 'rotateX( ' + content_rotation[0] + 'deg ) rotateY( ' + content_rotation[1] + 'deg )';
		//content.innerHTML = parseInt(content_rotation[0]);
	}

	
	function iframemove(e){
		document.getElementById('DeltaTime').innerHTML = [e.clientX, e.clientY];
	}
</script>