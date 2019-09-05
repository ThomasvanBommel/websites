<?php

    $text_color = isset($_SESSION["text_color"]) ? $_SESSION["text_color"] : "#fff";

    $location = isset($_SESSION["location"]) ? $_SESSION["location"] : "cekeh";
    $dir = scandir($location);
    
    $history = isset($_SESSION["history"]) ? $_SESSION["history"] : [];

    $input = isset($_POST["input"]) ? $_POST["input"] : 0;
    $id = isset($_POST["id"]) ? $_POST["id"] : 0;

    $new_information = false;

    // Check if input information is new or the page has just been refreshed
    if($id != $_SESSION["old_id"]) {
        $new_information = true;
        $_SESSION["old_id"] = $id;
    }

    /** Push message to history, later to be printer to the screen
      * (string) $message: Message you wish to display to the user
      */
    $push = function($message) use(&$history, $new_information){
        if($new_information) array_push($history, $message);
    };

    $commands = [
        "cd" => [
            "name" => "CD",
            "params" => "params",
            "description" => "Changes current directory.",
            "function" => function($directory) use(&$location, $dir, $push, $input){
                if(!empty($directory)){
                    if(in_array($directory, $dir)){
                        $loc = $location;

                        if($directory == "."){
                        }else if($directory == ".."){
                            $loc = explode("/", $location);

                            if(count($loc) > 1){
                                array_pop($loc);
                            }

                            $loc = implode("/", $loc);
                        }else{
                            $loc = $location . "/$directory";
                        }

                        $push($location . ">" . $input);

                        if(is_dir($loc)) {
                            $location = $loc;
                        }else{
                            $push("'$loc' is not a directory.");
                        }

                        header("Refresh:0;");
                    }
                }
            }
        ], "color" => [
            "name" => "COLOR",
            "params" => "params",
            "description" => "Change terminal text-color.",
            "function" => function($color = "#fff") use(&$text_color, $push, $location, $input){
                $text_color = $color;
                $push($location . ">" . $input);
                header("Refresh:0;");
            }
        ], "cls" => [
            "name" => "CLS",
            "params" => "params",
            "description" => "Clears the screen.",
            "function" => function() use(&$history){
                $history = [];
            }
        ], "dir" => [
            "name" => "DIR",
            "params" => "params",
            "description" => "Display a list of files and subdirectories in a directory.",
            "function" => function() use($dir, $push, $location, $input){
                $push($location . ">" . $input);

                foreach($dir as $d){
                    $push($d);
                }
            }
        ], "help" => [
            "name" => "HELP",
            "params" => "params",
            "description" => "Provides helpful information on the available commands",
            "function" => function() use($push, $location, $input, &$commands){
                $push($location . ">" . $input);
                $push("For more information on a specific command, type HELP COMMAND-NAME");
                
                foreach($commands as $c){
                    $push(str_pad($c["name"], 15) . str_pad($c["params"], 10) . $c["description"]);
                }
            }
        ]
    ];

    /** Create an element and place it on the HTML page (Does not add to history)
      * (string) $message: Message you wish to display to the user
      */
    $say = function($message){
        echo    "<form method='post'>" .
                "   <p>$message</p>" .
                "   <span contenteditable='true'></span>" .
                "   <input class='input' name='input' type='hidden' />" .
                "   <input class='id' name='id' type='hidden' />" .
                "</form>\n";
    };

    
    $split = explode(" ", $input);

    // ADD check for new information (maybe)
    if(!empty($split[0])){
        if(isset($commands[$split[0]])){
            $params = [
                isset($split[1]) ? $split[1] : null,
                isset($split[2]) ? $split[2] : null,
                isset($split[3]) ? $split[3] : null,
                isset($split[4]) ? $split[4] : null,
            ];
            
            $commands[$split[0]]["function"]($params[0], $params[1], $params[2], $params[3]);
        }else{
            $push($location . ">" . $input);
        }
    }
    
    echo "<div id='terminal' style='color:$text_color;'>\n";

    foreach($history as $message){
        $say(str_replace(" ", "&nbsp;", $message));
    }

    $say($location . ">");

    $_SESSION["text_color"] = $text_color;
    $_SESSION["location"] = $location;
    $_SESSION["history"] = $history;

    echo "</div>";
?>