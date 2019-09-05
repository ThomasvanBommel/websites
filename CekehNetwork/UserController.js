<?php 
        $db = mysql_connect('localhost', 'client', '12345') or die('Could not connect: ' . mysql_error()); 
        mysql_select_db('users') or die('Could not select database');
 
        // Strings must be escaped to prevent SQL injection attack. 
        $name = mysql_real_escape_string($_GET['name'], $db); 
        $password = mysql_real_escape_string($_GET['password'], $db); 
        $hash = $_GET['hash']; 
 
        $secretKey="mySecretKey"; # Change this value to match the value stored in the client javascript below 

        $real_hash = md5($name . $password . $secretKey); 
        if($real_hash == $hash) { 
            // Send variables for the MySQL database class. 
            $query = "SELECT * FROM users;"; 
            $result = mysql_query($query) or die('Query failed: ' . mysql_error()); 
        } 
?>