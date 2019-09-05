class Terminal{
//    element;
    
    /** Create a new Terminal object
      * element: HTML element to display terminal information and user input
      */
    constructor(element){
        this.element = element;
        this.location = "Cekeh\\home";
    }
    
    /** Write a message display to the user
      * message: A string to display to the user
      */
    say(message){
        if(typeof(message) == "string"){
            var container = document.createElement("div");
            var input_element = document.createElement("span");
            var terminal = this;
            
            // Set focus so the user can type
            container.onclick = function(){ input_element.focus(); };
            input_element.contentEditable = true;
            
            /** Submit input text when user clicks "enter"
              * e: KeyDown event
              */
            input_element.addEventListener("keydown", function(e){
                if(e.key == "Enter" && !e.shiftKey){
                    input_element.contentEditable = false;
                    terminal.submit(input_element.innerHTML);
                    e.preventDefault();
                }
            });
            
            // Set the message to display inside the container, replacing spaces / backslashes / line-breaks with HTML code
            container.innerHTML = message.replace(/ /g, "&nbsp;").replace(/\n/g, "<br />").replace(/\\/g,"&#92;");
            container.appendChild(input_element);
            
            // Add our message container to the terminal, as the last element
            this.element.appendChild(container);
            input_element.focus();
        }
    }
    
    /** Clear the element of all messages
      */
    clear(){ this.element.innerHTML = ""; }
    
    /** Process and return input
      * command: A string of steps for the terminal to follow
      */
    submit(command){
        var commands = command.split(" ");
        
        // Switch based off the first command
        switch(commands[0]){
            case "help":
            case "HELP":
                this.say(   "For more information on a specific command, type HELP command-name\n" + 
                            "LOGIN          Log into your account.\n" +
                            "...            ...");
                break;
                
            case "login":
            case "LOGIN":
                this.say("Username:");
                return;
        }
        
        this.say(this.location + ">"); // Try using just location without this.
    }
}