<?php
	$src;
	
	if(isset($_GET["PLAYER"])){
		$src = "Stats.php";
	}else{
		$src = "Login.php";	
	}
	
	if(!empty($src)){
		$path = "SCRIPT/PHP/PAGE/" . $src;
		include($path);
	}
?>