var initialized = false;

var body, main;

window.onload = Initialize;

function Initialize(){
    body = document.getElementsByTagName("body")[0];
    main = document.getElementsByTagName("main")[0];
    
    content = document.getElementById("content");
    
    if(body){
        console.log("Ready to go.");
        initialized = true;
    }else{
        console.log("Trouble initializing.");
    }
}

function ToggleLoginPanel(){
    if(initialized) {
        var login_button = document.getElementById("login_toggle_button");
        var close_button = document.getElementById("login_close_button");
        var logo = document.getElementsByClassName("logo")[0];
        
        body.classList.toggle("flip-colors");
        content.classList.toggle("active-sidebar");
        login_button.classList.toggle("hide");
        close_button.classList.toggle("hide");
        logo.classList.toggle("flip-colors");
    }
}