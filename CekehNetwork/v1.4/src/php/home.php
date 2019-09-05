<div id="Home" class="wmax1000 mauto">
	<div class="tcenter bg_dark white mtop10 hover_opacity">Join today!</div>
	
	<div class="bg_green" >
	</div>

	<div id="Graph" class="bg_dark">
		<button id="graph_button" onclick="pw--;DrawGraph();">-</button>
		<button id="graph_button" style="left:25px;" onclick="pw++;DrawGraph();">+</button>
		<div id="Canvas"></div>
	</div>

	<div id="G2" class="w-14 m7 h300 bg_dark"></div>

</div>

<script>
	var hits = [0, 20, 25, 30, 65, 32, 0, 0, 11, 2, 4, 66, 44, 3, 72, 1, 2, 2, 3, 1, 2, 3, 2, 1, 2, 72];
	var count = hits.length - 1;

	var Canvas = $("#Canvas");
	Canvas.ready(function() { DrawGraph(); });
	$(window).resize(function() { DrawGraph(); console.log("refreshing"); });

	var pw = 10;

	function DrawGraph(){
		var width = $("#Graph").width();
		var height = Canvas.height();

		var gapx = width / pw;
		var gapy = height / 75;

		Canvas.width(count * gapx);

		Canvas.html("");

		var graph_points = new Array();
		for(i = 0; i < hits.length; i++){
			graph_points[i] = { x : parseInt(i * gapx), y : parseInt(height - (hits[i] * gapy)), hit : hits[i] };
			
			Canvas.append('<div class="graph_point" style="left:'+(graph_points[i].x - 7)+'px;top:'+(graph_points[i].y - 7)+'px;">' + '</div>');
			
			//console.log(hits.length);
			if(hits[i + 1] != null){
				g2 = { x : parseInt((i + 1) * gapx), y : parseInt(height - (hits[i + 1] * gapy)) };
				var svg = '<svg class="left" width="'+gapx+'" height="300"><line style="stroke:#F16A06;stroke-width:5px;" x1="0" y1="'+graph_points[i].y+'" x2="'+gapx+'" y2="'+g2.y+'" /></svg>';
				Canvas.append(svg);
			}
		}
	}
	
	var gr = new Graph(document.getElementById('G2'), [0,100,0,100,2,0,5,3,3,5,10,15,73,1,2,3,4,2,5,5,3,7,0,4,5]);
	
	console.log(document.getElementById('G2'));
</script>

