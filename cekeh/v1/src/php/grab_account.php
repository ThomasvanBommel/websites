<?php
    $error = null;

    $username = isset($_POST['username']) ? $_POST['username'] : null;
    $password = isset($_POST['password']) ? $_POST['password'] : null;

    $connection = mysqli_init();
    $connection->options(MYSQLI_OPT_CONNECT_TIMEOUT, 1);
    @$connection->real_connect('192.168.0.20', 'web', 'maggie', 'testdb');

    if(!$connection->connect_error){
        $action = isset($_POST['action']) ? $_POST['action'] : "";

        
        if($username && $password && $action == "LOGIN"){
            $query = 'SELECT * FROM users WHERE user_name="' . $username . '"';
            $result = $connection->query($query);

            if($result->num_rows > 0){
                while($row = $result->fetch_assoc()){
                    echo 'id: ' + $row['id'] . ', username: ' . $row['user_name'] . ', password: ' . $row['password'] . ', salt: ' . $row['salt'] . ', email: ' . $row['email'];
                }
            }else{
                echo "user not found";
            }
        }else{
            include('src/pages/login.php');
        }
        $connection->close();
    }else{
        $error = "Unable to connect to MySQL";
    }

    $_POST = array();
?>