<?php
	$Content = 'src/php/home.php';
?>
<script>
</script>

<html>
	<head>
		<link rel="stylesheet" type="text/css" href="src/css/normalize.css" />
		<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"></script>
		<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

		<link rel="stylesheet" type="text/css" href="style.css?version=128" />
		<script src="src/js/html_generator.js"></script>
		<script src="src/js/graph.js"></script>
		<script src="src/js/jQuery.js"></script>
	</head>
	<body class="bg_light">
		<div id="Information" class="font40 bg_second">
			<div class="">
				Sign in / join
			</div>
		</div>
		<div id="Header" class="bg_dark white">Cekeh</div>
		<div id="Content">
			<?php include($Content); ?>
		</div>
	</body>
</html>