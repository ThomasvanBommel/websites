<?php
        // Configuration
        $hostname = 'localhost';
        $username = 'client';
        $password = '12345';
        $database = 'users';
 
        $secretKey = "mySecretKey"; // Change this value to match the value stored in the client javascript below 
 
        try {
            $dbh = new PDO('mysql:host='. $hostname .';dbname='. $database, $username, $password);
        } catch(PDOException $e) {
            echo '<h1>An error has ocurred.</h1><pre>', $e->getMessage() ,'</pre>';
        }
 
        $realHash = md5($_GET['name'] . $_GET['password'] . $secretKey); 
        if($realHash == $hash) { 
            $sth = $dbh->prepare('INSERT INTO password VALUES (null, :name, :password)');
            try {
                $sth->execute($_GET);
            } catch(Exception $e) {
                echo '<h1>An error has ocurred.</h1><pre>', $e->getMessage() ,'</pre>';
            }
        } 
?>