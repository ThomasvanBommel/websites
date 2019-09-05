<?php
    // Include the notification class
    include('src/php/classes/notification.php');

    // Notifications to display to the user
    $notifications = array();

    // POST action
    $action = isset($_POST["action"]) ? $_POST["action"] : null;

    // Switch based on POST action
    switch($action){
        // User clicked "LOGIN"
        case "LOGIN":
            // Get submitted username and password from POST form
            $username = isset($_POST["username"]) ? $_POST["username"] : null;
            $password = isset($_POST["password"]) ? $_POST["password"] : null;
            
            // Check if username and password were submitted, else break
            if($username && $password){
                // Query database for the user specified
                $query = query("SELECT * FROM users WHERE username='" . $username . "'");
            
                // Check query for results
                if($query){
                    // Get results from query
                    $results = $query[0][0];
                    
                    // Welcome user
                    notify(new notification("Welcome " . $results["username"] . " : id#" . $results["id"]));
                    
                    // Break out of switch
                    break;
                }
                // No user found under that name
                notify(new notification("No user found with the name '" . $username . "'.", "error"));
                
                // Reset action to display login again
                $action = null;
                
                // Break out of switch
                break;
            }
            // Missing either username, password, or both
            notify(new notification("Missing information... Try again", "error"));
            
            // Reset action to display login again
            $action = null;
            
            // Break out of switch
            break;
            
        // User clicked "NEW USER"
        case "NEW USER":
            // Break out of switch
            break;
            
        // User clicked "GUEST"
        case "GUEST":
            // Break out of switch
            break;
            
        // User hasn't clicked anything
        default:
    }

//        // Hash password
//        $hashed_password = password_hash($salted_password, PASSWORD_BCRYPT, ["salt" => "12esfsefsefesfdsf4ww4fsd345", "cost" => 15]);
//        echo "hashed_password: " . $hashed_password . "<br>";      


    /* Query the database 
     * param $query MySQL query string
     * return MySQL query result or null */
    function query($query){
        global $username, $password;
        
        // Initialize mysqli
        $mysqli = mysqli_init();
        // Set connection timeout to 1 second
        $mysqli->options(MYSQLI_OPT_CONNECT_TIMEOUT, 1);
        // Attempt connection (suppressed)
        @$mysqli->real_connect("192.168.0.20", "web", "maggie", "testdb");
        
        // Check for any errors
        if($mysqli->connect_error){
            // Notify the user of any errors
            notify(new notification("MySQL:<br>" . $mysqli->connect_error, "error"));
            
            // Return null result
            return null;
        }
        
        // Get the query result
        $result = $mysqli->query($query);
        // Array for the result, we will return this value
        $array = array();
        
        // Check result for rows of information
        if($result->num_rows > 0){
            // For each row of information
            while($row = $result->fetch_all(MYSQLI_ASSOC)){
                // Push row to our return array
                array_push($array, $row);
            }
        }
        
        // Free our result
        $result->free();
        // Close MySQL connection
        $mysqli->close();
        
        // Return the result as an array of row information
        return $array;
    }

    /* Notify the user
     * param $notification Notification to display to user */
    function notify($notification){
        // Get global variables
        global $notifications;
                
        // Push the message to notification array
        array_push($notifications, $notification);
    }
?>

<html>
    <head>
        <title>Cekeh</title>
        <link rel="stylesheet" href="src/css/main_stylesheet.css?v=1.1" />
        <link rel="stylesheet" href="src/css/logo_stylesheet.css?v=1.1" />
        <script type="text/javascript" src="src/js/main.js"></script>
    </head>
    <body>
        <?php 
            // Include header
            include("src/php/header.php"); 
        
            if(!$action){
                
            }
        
            // Switch based off of POST action
            switch($action){
                // User clicked "LOGIN"
                case "LOGIN":
                    break;
                    
                // User clicked "NEW USER"
                case "NEW USER":
                    // Include newuser page
                    include("src/php/newuser.php");
                    break;
                    
                // User clicked "GUEST"
                case "GUEST":
                    break;
                    
                // User clicked "CREATE"
                case "CREATE":
                    // Tell 'em how it is
                    echo "This feature does not like you, scum.";
                    
                    // Break the switch
                    break;
                    
                // User hasn't clicked anything
                default:
                    // Include login page
                    include("src/php/login.php");
            }
        ?>

        <div id="notifications">
            <?php 
                // Notification count
                $notification_count = count($notifications);

                // Check for any notifications
                if($notification_count > 0){
                    // Loop through notifications
                    for($i = 0; $i < $notification_count; $i++){
                        // Print notification message
                        echo "<notification class='" . $notifications[$i]->type . "' title='dismiss' onclick='dismiss(this);'>" . $notifications[$i]->message . "</notification>";                        
                    }
                }
            ?>
        </div>
    </body>
</html>

<?php 
    // Reset POST
    $_POST = array(); 
?>