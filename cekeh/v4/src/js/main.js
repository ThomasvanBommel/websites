window.onload = initialize;

var r = 2;

function initialize(){
    drawLogo(document.getElementById("logo"));
    
    console.log("Initialized!");
}

function toggleSidebar(){
    if(typeof body === "undefined"){
        body = document.getElementsByTagName("body")[0];
    }
    
    body.classList.toggle("active-sidebar");
}

function drawLogo(canvas){
    if(!canvas) return;
    
    var context = canvas.getContext("2d");
    
    canvas.width = canvas.clientWidth * r;
    canvas.height = canvas.clientHeight * r;
    
    context.fillStyle = "#000000";
    context.font = "bold " + (40 * r) + "px BebasLight";
    context.fillText("Ce", 0.8 * r, 34 * r);
    context.fillText("eh", 41.2 * r, 34 * r);
    
    context.lineWidth = 2 * r;
    context.strokeStyle = "#ff8c00";
    context.moveTo(39.5 * r, 5  * r);
    context.lineTo(31.5 * r, 20 * r);
    context.lineTo(39.5 * r, 35 * r);
    context.stroke();
}


















