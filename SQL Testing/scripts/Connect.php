<?php	

	//$loggedIn = false;
	$connection = Connect();
	
	//connect to the mysql database
	function Connect(){
		$conn = mysqli_connect("localhost", "client", "12345", "users");
		if($conn){ return $conn; }
		return false;
	}
	
	if(isset($_POST["user"])){
		$user = $_POST["user"];
		$pass = $_POST["pass"];
		
		$query = "SELECT id FROM users WHERE name='".$user."' AND password='".$pass."' LIMIT 1";
		$result = mysqli_query($connection, $query);
			
		if($result){
			if(mysqli_num_rows($result) == 1){
				$_GET["loggedIn"] = true;
				
				$q = "SELECT hit_history FROM users WHERE name='".$user."' LIMIT 1";
				$r = mysqli_query($connection, $q);
				
				$_GET["history"] = mysqli_fetch_array($r)["hit_history"];
				//echo mysqli_fetch_array($r)["hit_history"];
				
			}else{
				echo "Username or password incorrect.";
			}
		}else{
			echo "Error";
		}
	}
	
?>