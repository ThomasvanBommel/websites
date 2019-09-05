<?php

// Notification class
class notification{
    
    // Message to display to the user
    public $message;
    // Type of message, one of "normal", "error", ...
    public $type;
    
    /* Notification constructor
     * param $message Message to display to the user
     * param $type the type of message, one of "normal, "error", ... */
    function __construct($message = "null", $type = "normal"){
        // Set public variables
        $this->message = $message;
        $this->type = $type;
    }
}

?>