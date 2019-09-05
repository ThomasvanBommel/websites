<?php
	ob_start();
	$link = new mysqli("localhost", "client", "12345", "users");
	$error = ob_get_contents();

	$name = 'Log in';
	$player;
	

	if($link->connect_errno){
		$error = "Unable to connect to the database";
		ob_end_clean();
	}

	if(empty($error)){
		//connected to database
		if(isset($_POST['username'])){
			ob_start();
			$query = $link->query('SELECT * FROM users WHERE name="'.$_POST['username'].'"')->fetch_object();

			if($query != null){
				if(isset($_POST['password'])){
					if(!empty($_POST['password'])){
						if($query->password == $_POST['password']){
							$player = $query;
						}else{
							echo "Login";//Wrong password
						}
					}else{
						echo "Login";//No password entered
					}
				}
			}
			
			if($query == null){
				echo "Login";//Unable to find account
			}

			$error = ob_get_contents();
			ob_end_clean();
		}
		
		if(isset($player)){
			console($player->name);
			$name = $player->name;
		}
	}
	

	function console($s){
		echo '<script>';
		echo 'console.log("' . $s . '");';
		echo '</script>';
	}
?>


<html>
	<head>
		<link rel="stylesheet" type="text/css" href="src/css/style.css?version=32" />
		<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"></script>
		<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
		<script>
			
			$(document).ready(function() {

				//MENU
				$("#MenuToggle, .toggle_menu").click(function() {
					console.log("Toggle");
					$("#MenuToggle").toggleClass("bg_red");		
	
					$(".bar0").toggleClass("rot45");
					$(".bar1, .bar2").toggleClass("opacity0");
					$(".bar3").toggleClass("rot-45");

					$("#Menu").toggleClass("width0");
				});

				

			});

			function AddComponent(component){
				$("#Content").load(component);
				//$("#Content").html($.get(component));
			}			

		</script>
	</head>
	<body>
		<div id="Header" class="width100 bg_main">

			<div id="Logo" class="left">

				<a href="index.php" class="white hover_o50 trans_opacity" onclick="AddComponent('src/php/home.php');"><img src="bin/cloud.png" height="20px">Cekeh</a>

			</div>

			<div id="MenuToggle" class="right hover_pointer dur_1s">

				<div class="bar0 bg_white dur_04s"></div>
				<div class="bar1 bg_white dur_04s"></div>
				<div class="bar2 bg_white dur_04s"></div>
				<div class="bar3 bg_white dur_04s"></div>	
			
			</div>

			<div class="right font50 white hover_o50 trans_opacity hover_pointer m_top_10" onclick="AddComponent('src/php/login.php')">
				<?php echo $name ?>
			</div>

		</div>

		<div id="Content" class="w1000 height100">
			<?php 
				if(empty($player)){
					include("src/php/home.php"); 
				}else{
					include("src/php/player.php");
				}
			?>
		</div>
		
		<div id="Menu" class="right w200 width0 trans_width dur_04s font50">

			<div class="toggle_menu button hover_bg_DDD hover_pointer" onclick="AddComponent('src/php/home.php');">
				Home
			</div>

			<div class="m_top_10">
				<div class="toggle_menu button hover_bg_DDD hover_pointer" onclick="AddComponent('src/php/login.php');">
					Log in
				</div>

				<div class="toggle_menu button hover_bg_DDD hover_pointer" onclick="AddComponent('src/php/create.php');">
					Create Account
				</div>
			</div>

			<div class="m_top_10">
				<div class="toggle_menu button hover_bg_DDD hover_pointer" onclick="">
					Wiki
				</div>

				<div class="toggle_menu button hover_bg_DDD hover_pointer" onclick="">
					Shop
				</div>

				<div class="toggle_menu button hover_bg_DDD hover_pointer" onclick="">
					Forums
				</div>

				<div class="toggle_menu button hover_bg_DDD hover_pointer" onclick="">
					Membership
				</div>
			</div>

		</div>
	</body>
</html>