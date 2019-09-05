console.log("main.js");
window.onload = init;

var navigation;

function init(){
    navigation = document.getElementById("navigation");
    
    if(navigation){
        var options = navigation.getElementsByTagName("li");

        if(options){
            for(var i = 0; i < options.length; i++){
                options[i].addEventListener("click", function(e){
                    var list = this.getElementsByTagName("ul")[0];

                    if(list){
                        list.classList.toggle("hidden");
                    }
                    
                    e.stopPropagation();
                });
            }
        }
    }
}