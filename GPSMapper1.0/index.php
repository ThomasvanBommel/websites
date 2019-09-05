<html>
    <head>
        <title>GPS Mapper v1.0</title>
        <link rel="stylesheet" type="text/css" href="src/css/style.css">
        <script src="src/js/main.js"></script>
    </head>
    
    <body>
        <div id="controls">
            <div id="coordinates">
                <p>Location:</p>
<!--
                <p id="latitude">0</p>
                <p id="longitude">0</p>
-->
                <input type="number" id="latitude" value="0">
                <input type="number" id="longitude" value="0">
            </div>
            <button id="place" onclick="place()">Place point</button>
            <button id="refresh" onclick="getLocation()">Refresh location</button>
        </div>
        
        <canvas id="canvas">Canvas not supported with this browser</canvas>
        
        <div id="notifications"></div>
    </body>
</html>