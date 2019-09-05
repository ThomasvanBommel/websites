window.onload = init;

var slideshow;
var main_image;
var carousel;
var images;

function init(){
    console.log("maing.js initialized");
    
    slideshow = document.getElementById("slideshow");
    
    /* SLIDESHOW */
    main_image = slideshow.getElementsByClassName("main-image")[0];
    carousel = slideshow.getElementsByClassName("carousel")[0];
    images = carousel.getElementsByTagName("img");
    
    // open the main image when clicked
    main_image.addEventListener("click", function(e){
        window.location.href = carousel.getElementsByClassName("active")[0].src;
    });
    
    // set function for when you click the image
    for(var i = 0; i < images.length; i++){
        images[i].addEventListener("click", function(e){
            var active_image = carousel.getElementsByClassName("active")[0];
            
            if(active_image !== this){
                active_image.classList.remove("active");
                this.classList.add("active");
                
                main_image.style.backgroundImage = "url(" + this.src + ")";
            }
        });
    }
    
    // set background-image to the current active element
    var active_image = carousel.getElementsByClassName("active")[0];
    main_image.style.backgroundImage = "url(" + active_image.src + ")";
    
    setInterval(changeSlide, 6000);
}

/* SLIDESHOW */
// change slide to the next image
function changeSlide(){    
    for(var i = 0; i < images.length; i++){
        if(images[i].classList.contains("active")){
            var active_image = images[i];
            var index = i;
            
            var new_index = index !== images.length - 1 ? index + 1: 0;
            
            active_image.classList.remove("active");
            active_image = images[new_index];
            active_image.classList.add("active");
            
            main_image.style.backgroundImage = "url(" + active_image.src + ")";
            
            carousel.scrollLeft += active_image.width;
            if(new_index == 0) carousel.scrollLeft = 0;
            
            break;
        }
    }
}