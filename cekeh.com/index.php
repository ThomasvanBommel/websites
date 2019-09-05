<?php include("src/php/functions.php"); ?>

<html>
    <head>
    	<title>Cekeh.com</title>
        <link rel="stylesheet" type="text/css" href="src/css/index.css?v=27" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="src/js/side_bar.js?v=18"></script>
    </head>
    <body>
   		<div id="side_bar">
        	<?php echo scan("projects", 0); ?>
        </div>
        <div id="nav_bar">
            <a id="title" href="#" onClick="console.log(this)">Thomas vanBommel</a>      
        </div>
		<div id="content">
        	<div id="page">
	        	<div id="text"></div>
            </div>
        </div>
    </body>
</html>