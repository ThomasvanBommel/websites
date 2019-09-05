$(function(){
	
	var canvas = document.getElementById('canvas');
	var gfx = canvas.getContext('2d');
	//--
	canvas.width = canvas.width;
	canvas.height = canvas.height;
	//--
	var $0 = $('#p0');
	var $0 = $('#p1');
	var $0 = $('#p2');
	var $0 = $('#p3');
	//--
	var lines = [];
	lines.push({from:0, to:1});
	lines.push({from:1, to:2});
	lines.push({from:2, to:3});
	connect();
	//--
	function connect(){
		
		gfx.clearRect(0, 0, canvas.width, canvas.height);
		//--
		for(var i = 0; i  < lines.length; i++){
			
			var line = lines[i];
			var iFrom = line.from;
			var iTo = line.to;
			//--
			var pos1 = iFrom.offset();
			var pos2 = iTo.offset();
			//--
			var size1 = iFrom.size();
			var size2 = iTo.size();
			//--
			gfx.beginPath();
			gfx.moveTo(pos1.left + iFrom.width(), pos1.top + iFrom.height() / 2);
			gfx.lineTo(pos2.left, pos2.top + iTo.height() / 2);
			gfx.stroke();
		}
	}
});