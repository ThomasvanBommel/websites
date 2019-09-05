<?php
	class MySQL{
			
		private $host = "localhost";
		private $user = "client";
		private $pass = "12345";
		private $data = "users";
		
		public $connection;
		
		function MySQL(){
			//create connection to the mysql database
			$this->connection = mysqli_connect($this->host, $this->user, $this->pass, $this->data);
		}
		
		public function Connect(){
			if($this->ConnectionError()){
				return ConnectionError();
			}	
			return true;
		}
		
		public function ConnectionError(){
			if(mysqli_errno($this->connection)){
				//if there is an error, return a descriptive string of what the issue is
				return mysqli_error($this->connection);
			}
			//if there are no errors return false
			return false;
		}
		
		public function Login($username, $password, $session){
			$query = "SELECT * FROM users WHERE name='".$username."' AND password='".$password."'";
			$result = mysqli_fetch_array(mysqli_query($this->connection, $query));
			
			if($result){
				$session->loggedIn = true;
				return $result;
			}
			return false;
		}
	}
?>