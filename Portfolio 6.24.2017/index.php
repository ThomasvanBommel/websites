<html>
        <head>
        	<link rel="stylesheet" type="text/css" href="src/css/normalize.css?version=<?=time();?>" />
        <link rel="stylesheet" type="text/css" href="src/css/style.css?version=<?=time();?>" />
        <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

        <script src="src/js/Mouse.js?version=<?=time();?>"></script>
        <script src="src/js/Canvas.js?version=<?=time();?>"></script>
        <script src="src/js/Background.js?version=<?=time();?>"></script>
        <script src="src/js/Particle.js?version=<?=time();?>"></script>

        <script src="src/js/Main.js?version=<?=time();?>"></script>
        </head>
        <body onload="start();" onmousemove="updatemouse(event);">
            <div id="MouseInfo"></div>
            <div id="Collected"></div>
            <div id="Message"></div>
        </body>
</html>

<script>
</script>