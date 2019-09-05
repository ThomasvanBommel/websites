window.onload = initialize;
window.onscroll = scroll;

var root;

var filter;
var filter_options;
var filter_toggle;

var background_color = "#fff";
var foreground_color = "#666";

/* Initialize is run when the window has loaded fully */
function initialize(){
    root   = document.documentElement;
    
    filter = document.getElementById("filter");
    filter_options = filter.getElementsByClassName("options")[0];
    filter_toggle = filter.getElementsByClassName("toggle")[0];
    
    root.style.setProperty("--background-color", background_color);
    root.style.setProperty("--foreground-color", foreground_color);
}

/* Toggle activation menu on navigation bar */
function toggleMenu(element){
    element.classList.toggle("active");
}

/* Toggle feed filters */
function toggleFilter(){
    filter_options.classList.toggle("active");
    filter_toggle.classList.toggle("active");
}

/* Invert background / foreground colors */
function invertColors(){
    var background = background_color;
    
    background_color = foreground_color;
    foreground_color = background;
    
    root.style.setProperty("--background-color", background_color);
    root.style.setProperty("--foreground-color", foreground_color);
}

/* Scroll the page back to the top, smoothly */
function scrollToTop(){
    window.scrollTo({ left:0, top:0, behavior:"smooth" });
}

function scroll(){
    console.log(window.pageYOffset);
}