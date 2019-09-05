<html>
	<head>
		<link rel="stylesheet" type="text/css" href="src/css/normalize.css?version=<?=time();?>" />
        <link rel="stylesheet" type="text/css" href="src/css/style.css?version=<?=time();?>" />
        <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

        <script src="src/js/Canvas.js?version=<?=time();?>"></script>
        <script src="src/js/Mouse.js?version=<?=time();?>"></script>
        <script src="src/js/Container.js?version=<?=time();?>"></script>
        <script src="src/js/Project.js?version=<?=time();?>"></script>
    </head>

    <body onmousedown="mouse.down(event);" onmousemove="mouse.move(event);" onmouseup="mouse.up(event);" onmousewheel="mouse.scroll(event);">
    <!-- onmousedown="MouseDown(event);" onmousemove="MoveMouse(event);" onmouseup="MouseUp(event);" -->
   <!-- onmousedown="mouse.mousedown(event);" onmousemove="mouse.mousemove(event);" onmouseup="mouse.mouseup(event);" -->
    	<canvas id="Canvas">
    		Not Supported.
    	</canvas>
    	<div id="Coords"></div>
    	<img src="" />
    </body>
</html>

<script>
var canvas = new Canvas('Canvas');
var mouse = new Mouse(canvas);

var projects = [
	new Project('hand', 'src/projects/hand/thumbnail.png'),
	new Project('character', 'src/projects/character/thumbnail.png'),
	new Project('m1911', 'src/projects/m1911/thumbnail.png')
];

canvas.projects = projects;
canvas.draw();

console.log(projects[0]);

window.onresize = function(){
	canvas.resize();
};
</script>