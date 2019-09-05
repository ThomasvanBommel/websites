var navigation_bar;

window.onload = start;

function start(){
    navigation_bar = document.getElementById("navigation");
}

function slide(){
    var options = navigation_bar.getElementsByTagName("a");
    
    for(i in options){
        console.log(options[i].offsetHeight);
        options[i].classList.toggle("nowidth");
    }
}