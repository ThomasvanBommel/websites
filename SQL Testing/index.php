<?php
	//include all php files in ../scripts/
	foreach(glob("scripts/*.php") as $file){
		include $file;	
	}
?>
<html>
    <head>
        <title></title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script>
		
		</script>
    </head>
    <body bgcolor="#009999">
        <?php 
			$loggedIn;
			$logAttempt = isset($_GET["loggedIn"]);
			
			$form = '
				<form method="POST">
				<input typ="text" name="user" placeholder="username" /><br />
				<input type="password" name="pass" placeholder="password" /><br />
				<input type="submit" />
				</form>
			';
		
			if($logAttempt){
				$loggedIn = $_GET["loggedIn"];
				
				if($loggedIn === true){
					if(isset($_GET["history"])){
						echo $_GET["history"];
					}
					echo "<input type='submit' value='Change Password' onclick=".ChangePassword()." />";
				}else{
					echo $form;
				}
			}else{
				echo $form;
			}
			
			function ChangePassword(){
				echo "change your password";	
			}
		?>
        
        <br /><br /><br /><bR /><bR />
        <h1>HELLO!</h1>
    
    </body>
</html>