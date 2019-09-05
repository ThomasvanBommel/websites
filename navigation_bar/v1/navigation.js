console.log("navigation.js");

window.onload = init;
window.onresize = resizing;

var navigation;
var nav_default;

function init(){
    navigation = document.getElementById("navigation");
    nav_default = navigation.innerHTML;
    
    resizing();
}

function resizing(){
    navigation.innerHTML = nav_default;
    
    var buttons = navigation.getElementsByClassName("option");
    
    if(navigation.scrollWidth > navigation.clientWidth){
        
        if(!document.getElementById("more")){
            var more = document.createElement("td");
            more.id = "more";
            more.innerHTML = "More...";

            navigation.getElementsByTagName("tr")[0].appendChild(more);
        }
        
        while(navigation.scrollWidth > navigation.clientWidth){
            var last_button = buttons.item(buttons.length - 1);
            navigation.getElementsByTagName("tr")[0].removeChild(last_button);
            
            console.log("popped!");
        }
    }
}