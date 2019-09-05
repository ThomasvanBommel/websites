<?php
	$t = round(time() * microtime()) % 100000;
?>

<html>
	<head>
    
    	<title>Cekeh - Graphing</title>
        
    	<link rel="stylesheet" type="text/css" href="src/style/homepage.css?v=<?php echo $t; ?>" />
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script type="text/javascript" src="src/js/main.js?v=<?php echo $t ?>"></script>
        
    </head>
    <body>
    
    	<div id="graph_container" class="graph">
        
        	<div id="0" class="graph_point" style="top: calc(0% - (var(--gps) /2))" >0</div>
            <div id="1" class="graph_point" style="top: calc(100% - (var(--gps) /2))" >10000001</div>
            
            <div id="microtime">T: <?php echo $t; ?></div>
            
        </div>
        
        <div id="main_control" class="control">
        
        	<div class="slider_input">
        	<b>GPSR</b> <input id="gpsr" type="range" min="10" max="100" value="50" onchange="init()" />
            </div>
            
            
        </div>
        
    </body>
</html>