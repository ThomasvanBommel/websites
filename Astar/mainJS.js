var mainCanvas = document.getElementById('mainCanvas');
var ctx = mainCanvas.getContext('2d');

var mainWidth = mainCanvas.width;
	mainHeight = mainCanvas.height;

var sxDivider = 40;
	syDivider = 20;

var sx = mainWidth / sxDivider;
	sy = mainHeight / syDivider;

var coordX = [];
	coordY = [];

var button = [];
	clicked = [];
	
var ActiveTile = {x:0, y:0};
	seedTile = {x:0, y:0};
//Draw Tiles from TL to BR
for(x=0; x<sxDivider; x++){//x
	for(y=0; y<syDivider; y++){//y
		//Draw outlined Rectangle
		ctx.strokeStyle = '#a6aeff';
		ctx.strokeRect(x*sx, y*sy, sx, sy);
		//Add button to array
		button[x+y] = {x: x*sx, y: y*sy, width: sx, height: sy};
		//Add coords to array
		coordY.push(y*sy);
		coordX[x+y] = x*sx;
	}
}

//Mouse Listener
mainCanvas.addEventListener('click', mousePressed, false);
function mousePressed(e){
	//Get mouse position
	var mx = e.clientX - mainCanvas.offsetLeft;
		my = e.clientY - mainCanvas.offsetTop;
	//Make mouse position usable
	var fx = (Math.floor(mx/24)+1);
		fy = (Math.floor(my/24)+1);
	//Do something when you click a tile
	fill(fx, fy, '000000');
	setActiveTile(fx, fy);
	setSeedTile(fx, fy);
	//document.getElementById('h1').innerHTML = fx+','+fy;
	
	clicked.push('<b> '+fx+','+fy+' </b>');
	var text = "";
	for(z in clicked){
		text += clicked[z];
	};
	document.getElementById('past').innerHTML = text;
	
}

//Fill Tile function
function fill(j,k,color){
	ctx.fillStyle = '#'+color;
	ctx.fillRect(coordX[j-1], coordY[k-1], sx, sy);
	ctx.strokeStyle = '#ffffff';
	ctx.strokeText('0', coordX[j-1]+9, coordY[k-1]+16, sx);
}

//Advance
function Advance(){
	if(ActiveTile.x == 0 && ActiveTile.y == 0){
	//x and y are 0
		alert('Nothings changed');
	}else{
		//x and y have changed
		if(ActiveTile.x > 0 && ActiveTile.x <= sxDivider && ActiveTile.y > 0 && ActiveTile.y <= syDivider){
			//if last tiles coords are greater then 0 and smaller then their divider
			//set right side of Tile
			var rx = ActiveTile.x+1;
				ry = ActiveTile.y;
				//check Right side of Active tile
			if(seedTile.x == ActiveTile.x && seedTile.y == ActiveTile.y){
				if(rx <= sxDivider){
					fill(rx, ry, '555555');
					setActiveTile(rx, ry);
				}
				
			}else{
				//if activeTile is not the same as seedTile
				//move SEED
				if(seedTile.x == ActiveTile.x && seedTile.y == ActiveTile.y-1){
					//TEST
					setSeedTile(seedTile.x+1, seedTile.y+1);
					setActiveTile(seedTile.x, seedTile.y);
					fill(seedTile.x, seedTile.y, '000000');
				}
				//gotoBottom
				if(seedTile.x == ActiveTile.x+1 && seedTile.y == ActiveTile.y){	
					//set Bottom
					var bx = ActiveTile.x+1;
						by = ActiveTile.y+1;
						//check bottom
					if(by <= syDivider){
						fill(bx, by, '555555');
						setActiveTile(bx, by);
						
						
					}
				}
				//gotoLEFT SIDE
				if(seedTile.x == ActiveTile.x && seedTile.y == ActiveTile.y+1){
					//set LeftSide
					var lx = ActiveTile.x-1;
						ly = ActiveTile.y+1;
						//check leftSide
					if(lx >= 1){
						fill(lx, ly, '555555');
						setActiveTile(lx, ly);
					}
				}
				//gotoTOP
				if(seedTile.x == ActiveTile.x-1 && seedTile.y == ActiveTile.y){
					//set Top
					var tx = ActiveTile.x-1;
						ty = ActiveTile.y-1;
						//check top
					if(ty >= 1){
						fill(tx, ty, '555555');
						setActiveTile(tx, ty);
					}
				}
			}
		}else{
			//if not
			alert('NumError # 000001');
		}
	}
}
function button(){//TEST FUNCTION
	advanceTile();
}
function setActiveTile(x, y){
	ActiveTile.x = x;
	ActiveTile.y = y;
	
	document.getElementById('h1').innerHTML = x+','+y;
}
function setSeedTile(x, y){
	seedTile.x = x;
	seedTile.y = y;
}