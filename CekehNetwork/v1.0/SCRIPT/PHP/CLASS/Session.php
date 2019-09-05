<?php
	require("SCRIPT/PHP/CLASS/MySQL.php");
	require("SCRIPT/PHP/CLASS/Player.php");

	class Session{
			
		public $mysql;
		public $player;
		
		function Session(){
			ob_start();
			$this->mysql = new MySQL();
			$this->mysql->Connect();
			
			$this->player = $this->LoginOnPOST();
			
			setcookie("TEST", "error...", time() + 10, "/");
			
			if(!empty($_COOKIE["TEST"])){
				echo "<script>console.log('".$_COOKIE["TEST"]."');</script>";
			}
			ob_end_flush();
		}
		
		function LoginOnPOST(){
			$PLAYER;
			//if(isset($_COOKIE["PLAYER"])){
//				if(!empty($_COOKIE["PLAYER"]) && !$_COOKIE["PLAYER"] == 0){
//					$PLAYER = $_COOKIE["PLAYER"];
//					echo $_COOKIE["PLAYER"];
//				}
//			}
			if(isset($_GET["PLAYER"])){
				$PLAYER = $_GET["PLAYER"];
			}
			
			if(empty($PLAYER)){
				if(isset($_POST["username"]) && isset($_POST["password"])){
					if(!empty($_POST["username"]) && !empty($_POST["password"])){
						//query the database for the player
						
						$login_query = $this->mysql->Login($_POST["username"], $_POST["password"], $this);
						
						if(!empty($login_query)){
							$user = new Player($login_query["id"], $login_query["name"], $login_query["hit_history"]);
							
							//this will become out javascript object
							$json = '
							{
								"id":"'.$user->id.'",
								"name":"'.$user->name.'",
								"hit_history":"'.$user->hit_history.'"	
							}
							';
							
							//set as a cookie so we can retrieve it from javascript
							$_GET["PLAYER"] = $json;
							echo "OMFG !! -" . $_GET["PLAYER"];
							setcookie("PLAYER", $json + ";", time() + 10, "/");
							return $user;
						}
					}
				}
			}
		}
		
		function CreateAccountOnPOST(){
			$mama = $_POST["create_username"];
			if(isset($mama)){
				echo $mama;
			}
			 if(isset($_COOKIE["CREATEACCOUNT"])){
				echo $_COOKIE["CREATEACCOUNT"];	 
			 }
			if(isset($_POST["create_username"]) && isset($_POST["create_password_1"]) && isset($_POST["create_password_2"])){
				$username = $_POST["create_username"];
				$password1 = $_POST["create_password_1"];
				$password2 = $_POST["create_password_2"];
				if($password1 == $password2){
					setcookie("CREATEACCOUNT", "account created!", time() + 10, "/");
					return true;
				}else{
					setcookie("CREATEACCOUNT", "passwords did not match", time() + 10, "/");
					return false;
				}
			}
			setcookie("CREATEACCOUNT", "error...", time() + 10, "/");
			echo "<script>console.log('".$_COOKIE["CREATEACCOUNT"]."');</script>";
			return false;
		}
		
		
	}
?>