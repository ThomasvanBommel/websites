

class HTMLGenerator{

	constructor(){
		this.html = '';
	}

	div(id ){
		this.html += '<div ';
	}

}

function Style(width, height){ return Style(width, height, false, false, false, false, false, false, false, false, false); };
function Style(width, height, float, position, left, top, background, border, font_size, color, hover){
	var html = '';

	if(width){
		html += 'width:' + width + ';'
	}

	if(height){
		html += 'height:' + height + ';';
	}

	if(float){
		html += 'float:' + float + ';';
	}

	if(position){
		html += 'position:' + position + ';';
	}

	if(left){
		html += 'left:' + left + ';';
	}

	if(top){
		html += 'top:' + top + ';';
	}

	if(background){
		html += 'background:' + background + ';';
	}

	if(border){
		html += 'border:' + border + ';';
	}

	if(font_size){
		html += 'font-size:' + font_size + ';';
	}

	if(color){
		html += 'color:' + color + ';';
	}

	if(top){
		html += 'top:' + top + ';';
	}

	return html;
}

console.log(Style('100px', '6969px'));