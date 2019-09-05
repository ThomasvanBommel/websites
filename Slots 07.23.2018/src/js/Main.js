//var banner = new Image();
//banner.src = "res/Banner.png";

var images = [
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image()
];

images.forEach(function(image, index){
    image.src = "res/" + index + ".png";
});

var canvas;

var machine;

function start(){
    canvas = document.getElementById("slot0");
    
    machine = new SlotMachine(canvas);
    setInterval(update, 20);
    
    document.addEventListener("click", function(info){
        machine.click(info);
    });
    
    document.addEventListener("mousemove", function(info){
        machine.move(info);
    });
}

function update(){
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    machine.update();
    
    draw();
}

function draw(){
    machine.draw(images);
}

