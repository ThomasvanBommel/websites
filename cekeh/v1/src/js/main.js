var navigation_element;

//window.onload = start;

function start(){
    navigation_element = document.getElementById("navigation");
    
    update();
    //window.setInterval(update, 500);
}

function update(){
    setNavigationSize();
}

function setNavigationSize(){
    var width = navigation_element.offsetWidth;
    
//    document.documentElement.style.setProperty("--navigation-width", width + "px");

    
    var content_width = document.getElementById("content").offsetWidth;
    
    console.log("navigation_width: " + width);
    console.log("content_width: " + content_width);
    console.log("navigation + content: " + (width + content_width) + "\n");
    
    console.log("viewport_width: " + window.innerWidth);
    
    
}