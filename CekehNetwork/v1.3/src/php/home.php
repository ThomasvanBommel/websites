<div id="Home" class="w1000 height100">

	<?php
		if(!empty($error)){
			//echo $error;
			if($error == 'Login'){
				echo "Login error, try again.";
				include('src/php/login.php');
			}
		}else{
			//no errors connecting to the database
			// if(isset($player)){
			// 	echo 'Welcome ' . $player->name;
			// }else{
			// 	echo 'You need to login';
			// }
		}
	?>

	Home Page
</div>