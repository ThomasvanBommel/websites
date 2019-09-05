window.onload = initialize;

function initialize(){
    terminal = new Terminal(document.getElementById("terminal"));
    
    terminal.clear();
    terminal.say(   "Welcome to Cekeh.com [Version 5.2.3.2019]\n" +
                    "(c) 2019 Thomas vanBommel. All rights reserved.\n\n" +
                    "Cekeh\\home>");
}

function submit(input){
    var command = input.match(/^\w+/);
    command = Array.isArray(command) ? command[0] : command;
    
    console.log(command);
    
    if(command){
        switch(command){
            case "help":
                terminal.appendMessage( "For more information on a specific command, type HELP command-name\n" + 
                                        "LOGIN          Log into your account.\n" +
                                        "...            ...");
                break;
        }
    }
    terminal.appendMessage("Cekeh\\home>");
}