<?php 
$username = 'guest';
$password = '';

$mysqli = new mysqli('192.168.0.20', $username, $password, 'testdb');

if($mysqli->connect_errno){
	printf("Connection failed: %s\n", $mysqli->connect_error);
	exit();
}

$query = "SELECT * FROM auctions";
$result= $mysqli->query($query);

if($result->num_rows > 0){
	while($row = $result->fetch_assoc()){
		echo "id: " . $row["id"] . " - item: " . $row["item"] . " - price: " . $row["price"] . "<br/>";
	}
}else{
	echo "no results";
}

$mysqli->close();
?>