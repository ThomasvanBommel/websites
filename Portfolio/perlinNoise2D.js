
var canvas;
var inc = 0.01;
var start = 0;
var w, h;

function setup(){
	w = $("#canvas").width().valueOf();
	h = $("#canvas").height().valueOf();
	canvas = createCanvas(w, h);
	canvas.parent('canvas');
	frameRate(20);
	background(9);
}

function draw(){
	background(9);
  stroke(246);
  noFill();
  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x++) {
    stroke(246);
    var y = noise(xoff + 83479837) * (height / 2);
	stroke(147);
	//WHITE
    vertex(x, y);
	vertex(x, h);
	
    xoff += inc / 2;
  }
  endShape();
  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x++) {
    stroke(246);
    var y = noise(xoff) * height;
	stroke(246);
	//WHITE
    vertex(x, y);
	vertex(x, h);
	
    xoff += inc;
  }
  endShape();
  

  start += inc;
}