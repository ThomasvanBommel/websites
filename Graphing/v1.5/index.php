<?php
	$t = round(time() * microtime()) % 100000;
?>

<html>
	<head>
    
    	<title>Cekeh - Graphing v1.5</title>
        
    	<link rel="stylesheet" type="text/css" href="src/style/homepage.css?v=<?php echo $t; ?>" />
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script type="text/javascript" src="src/js/main.js?v=<?php echo $t ?>"></script>
        
    </head>
    <body>
    
<!--   	<div id="test" class="graph">
        	<canvas id="linework">Error loading canvas.</canvas>
        </div>
-->
		<button class="top_right" onClick="g = new Graph(Math.random(), Math.random() * 1000, Math.random() * 1000, GeneratePoints(Math.random() * 100));g.append(document.body);g.draw();">Generate</button>
        
    </body>
</html>