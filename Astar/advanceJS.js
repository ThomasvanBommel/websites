var tileIndex =0;
var CurrentTileSafe = false;
	OriginalTileSafe= false;

function advanceTile(){
	checkTileSafety('Current');
	checkTileSafety('Original');
}

function checkTileSafety(type){
	if(type == 'Current'){
		//Tiles from mainJS
		var CurrentTile = {x:ActiveTile.x, y:ActiveTile.y};
		//Minimum and Maximum Tiles
		var MinTile = {x: 0, y: 0};
			MaxTile = {x: sxDivider,y: syDivider};
		//Check if Tile is big enough
		if(CurrentTile.x >  MinTile.x && CurrentTile.y > MinTile.y){
			//CurrentTile is greater than 0,0
			//Check if Tile is too big
			if(CurrentTile.x <= MaxTile.x && CurrentTile.y <= MaxTile.y){
				//CurrentTile is within range
				
				CurrentTileSafe = true;
				
			}else{
				//CurrentTile is too big
				alert('Error 0002 : CurrentTile > '+sxDivider+','+syDivider);
				CurrentTileSafe = false;
			}
		}else{
			//CurrentTile is less than 1,1 causing error
			alert('Error 0001 : CurrentTile < 0,0');
			CurrentTileSafe = false;
		}
	}
	if(type == 'Original'){
		//Tiles from mainJS
		var OriginalTile = {x: seedTile.x, y: seedTile.y};
		//Minimum and Maximum Tiles
		var MinTile = {x: 0, y: 0};
			MaxTile = {x: sxDivider,y: syDivider};
		
		//Check if Tile is big enough
		if(OriginalTile.x >  MinTile.x && OriginalTile.y > MinTile.y){
			//OriginalTile is greater than 0,0
			//Check if Tile is too big
			if(OriginalTile.x <= MaxTile.x && OriginalTile.y <= MaxTile.y){
				//OriginalTile is within range
				
				OriginalTileSafe = true;
				
			}else{
				//OriginalTile is too big
				alert('Error 0004 : OriginalTile > '+sxDivider+','+syDivider);
				OriginalTileSafe = false;
			}
		}else{
			//OriginalTile is less than 1,1 causing error
			alert('Error 0003 : OriginalTile < 0,0');
			OriginalTileSafe = false;
		}
	}
}