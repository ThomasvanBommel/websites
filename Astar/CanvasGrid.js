var mainCanvas;
var ctx;
var tileCount;
	tileSize;
var tile = [];

function startGrid(){
	
	mainCanvas = document.getElementById('mainCanvas');
	ctx = mainCanvas.getContext('2d');
	tileCount = {x:80, y:40};
	tileSize = {width:mainCanvas.width / tileCount.x, height:mainCanvas.height / tileCount.y};
	
	refreshGrid();
}

function refreshGrid(){
	var num =0;
	for(x=0; x<tileCount.x; x++){
		for(y=0; y<tileCount.y; y++){
			
			ctx.strokeStyle = '#a6aeff';//set outline color
			ctx.strokeRect(x*tileSize.x, y*tileSize.y, tileSize.x, tileSize.y);//draw grid
			
			num++
			
		}
	}
	alert(num);
}