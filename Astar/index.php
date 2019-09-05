<html>
	<head>
		<title>A*star : Tom</title>
		<link rel="stylesheet" type="text/css" href="style.css" />
        <script type="text/javascript" src="CanvasGrid.js"></script>
        <script type="text/javascript" src="AstarCalc.js"></script>
        <script type="text/javascript">
        function start(){
			startGrid();	
		}
        </script>
    </head>

	<body onload="start()">
		<center>
            
            <h1 id="h1">0,0</h1>
            <canvas id="mainCanvas" width="960px" height="540px"></canvas>
            <!--<script type="text/javascript" src="mainJS.js"></script>
            <script type="text/javascript" src="advanceJS.js"></script>-->
            <h4 id="past">0,0</h4><bR>
            <input type="button" onClick="advanceTile()" value="Adv >" />
        </center>
	</body>

</html>