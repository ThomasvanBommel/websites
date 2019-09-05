var d = new Display(3, 312, 188);
console.log(d);


window.onload = function(){
	document.body.appendChild(d);
};





function Display(digit_count, width, height){
	var display = document.createElement('DIV');
	display.className = 'display';
	display.style.width = width;
	display.style.height = height;
	
	var digits = [];
	
	for(var i = 0; i < digit_count; i++){
		var digit_width = width / digit_count;
		var digit_height = height;
		var digit = new Digit(digit_width, digit_height);
		
		digits.push(digit);
		display.appendChild(digit);
	}
	
	return display;
}

function Digit(width, height){
	var digit = document.createElement('DIV');
	digit.className = 'digit';
	digit.style.width = width;
	digit.style.height = height;
	
	var segments = [];
	
	for(var i = 0; i < 7; i++){
		var segment = new Segment(i);
		
		segments.push(segment);
		digit.appendChild(segment);
	}
	
	return digit;
}

function Segment(i){
	var segment = document.createElement('DIV');
	segment.classList.add('segment');
	segment.classList.add('on');
	segment.classList.add('s' + i);
	//segment.innerHTML = i;
	
	switch(i){
		case 0:
		case 3:
		case 6:
			segment.classList.add('s_horizontal');
		break;
		
		case 1:
		case 2:
		case 4:
		case 5:
			segment.classList.add('s_vertical');
		break;
	}
	
	return segment;
}

// 	a0 = top
//	b1 = top-right
//	c2 = bottom-right
//	d3 = bottom
//	e4 = bottom-left
//	f5 = top-left
//	g6 = middle