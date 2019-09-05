var gps;

function init(){
	gps = $("#gpsr").val();
	$("#graph_container").css("--gps", gps + 'px');
}

//MAIN FUNCTION
window.onload = function(){
	init();	
}