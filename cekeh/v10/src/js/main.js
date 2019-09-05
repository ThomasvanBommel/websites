window.onload = init;
window.onresize = resize;

var header;

function init(){
    console.log("main.js initialized")
    header = document.getElementById("header");
    
    header.logo = header.getElementsByClassName("logo")[0];
    header.navigation = header.getElementsByClassName("navigation")[0];
    header.navigation.bar = header.navigation.getElementsByClassName("bar")[0];
    header.navigation.menu = header.navigation.getElementsByClassName("menu")[0];
    
    header.navigation.bar.defaultWidth = header.navigation.bar.clientWidth;
    
    resize();
}

function resize(){
    if((header.logo.clientWidth + header.navigation.bar.defaultWidth) < header.clientWidth){
        header.navigation.bar.style.display = "block";
        header.navigation.menu.style.display = "none";
    }else{
        header.navigation.bar.style.display = "none";
        header.navigation.menu.style.display = "block";
    }
}