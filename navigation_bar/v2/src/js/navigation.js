console.log("navigation.js");

window.onload = init;
window.onresize = resize;

var navigation;

function init(){
    navigation = document.getElementById("navigation");
    var elements = navigation.getElementsByTagName("li");
    
    for(var i = 0; i < elements.length; i++){
        elements[i].onclick = function(e){
            console.log(e);
            e.stopPropagation();
//            if(element[i].offset < e.)
            
            var list = this.getElementsByTagName("ul")[0];
            if(list.style.display == "block"){
                list.style.display = "none";
            }else{
                list.style.display = "block";
            }
        };
    }
    
    resize();
}

function resize(){
//    var navigation = document.getElementById("navigation");
    var children = navigation.children;
    
//    console.log("Children: " + children.length);
//    console.log("Child 0: " + children[0]);
    
    while(navigation.scrollWidth > navigation.clientWidth){
        console.log("Overflown!");
        
        var last_child = children[children.length - 2];
        
        navigation.removeChild(last_child);
        
        var more = navigation.getElementsByClassName("more")[0];
        more.style.display = "inline";
        
        more.getElementsByTagName("ul")[0].prepend(last_child);
    }
}