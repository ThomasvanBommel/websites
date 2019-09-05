var body, intro;

window.onload = initialize;

function initialize(){
    console.log("JS Initialized");
    
    body = document.getElementsByTagName("body")[0];
    
    intro = new Intro(body);
}