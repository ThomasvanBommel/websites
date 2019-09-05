<html>
<body onLoad="drawCircle(0)">
<center>
<canvas id="arc" width="500" height="500"></canvas>
<script>
function blackCore(){
	var c = document.getElementById("arc");
	var ctx = c.getContext("2d");
	var position = 0;
		
	ctx.beginPath();
	
		ctx.arc(250, 250, 200, ((Math.PI*2)/360)*position, 2*Math.PI);
		ctx.fillStyle = "black";
		
	ctx.fill();
	
}
</script>
<script>
	function drawCircle(pos){
		
		var c = document.getElementById("arc");
		var ctx = c.getContext("2d");
		var position = pos;
		var goinUp = false;
		var goinDown = false;
		
		ctx.beginPath();
			//Clear
			ctx.clearRect(0,0, document.getElementById("arc").width, document.getElementById("arc").height);
			//Draw
			
			ctx.arc(250, 250, 250, ((Math.PI*2)/360)*position, 2*Math.PI);
			ctx.fillStyle = "red";
			
			//Fill
			ctx.fill();
		blackCore();
		
		if(goinUp){
			pos += 1;
		}
		if(goinDown){
			pos -= 1;
		}
		
		if(pos < 360 && pos > 0){
			
			goinDown = false;
			goinUp = true;
			var loopTimer = setTimeout('drawCircle('+pos+')', 1);
		}else if(pos == 360){
			
			goinDown = true;
			goinUp = false;
			var loopTimer = setTimeout('drawCircle('+pos+')', 1);
		}else if(pos == 0){
			goinDown = false;
			goinUp = false;
			}
		
		
		//blackCore() Ends Path
	}
	
</script>


<!--content-->
<br>

<!--<input type="textbox" id="t" value="90">-->
<input type="button" value="^" onClick="drawCircle(1)">

</center>
</body>
</html>