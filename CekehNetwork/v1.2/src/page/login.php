<?php
	$SQLConnection = mysqli_connect("localhost", "client", "12345", "users");
	$SQLPlayer;

	if($SQLConnection->connect_errno){
		echo("Connection Failed : " + connect_error);
	}

	if(!empty($_POST["username"]) && !empty($_POST["password"])){
		$Username = $_POST["username"];
		$Password = $_POST["password"];		

		$Player = Query( "SELECT * FROM users WHERE name='".$Username."';" , $SQLConnection);
		
		if($Player){
			if($Password == $Player->password){
				echo "Logged in as: " . $Player->name . " : #" . $Player->id . "<br>";
				echo "Password: " . $Player->password . "<br>";
				echo "Hits: ";

				$Hits = explode(",", $Player->hit_history);
				foreach($Hits as $hit){
					echo $hit . ", ";
				}
				

				$SQLPlayer = $Player;
			}else{
				echo "Wrong password, please try again.";
			}
		}else{
			echo $Username . " : Doesn't exist";
		}
	}

	if(isset($SQLPlayer)){
		echo "
			<a href='index.php' style='' >Log out</a>
		";
	}else{
		echo "
			<form method='POST' id='form'>
				<input type='text' name='username' placeholder='username'>
				<input type='password' name='password' placeholder='password'>
				<input type='submit' value='Log in'>
			</form>

			<div id='create_account'>
				Don't already have an account, 
				<a href='#'>
					Create One.
				</a>
			</div>
		";
	}

	function Query( $string , $connection ){//returns object
		return $connection->query( $string )->fetch_object();
	}
?>

