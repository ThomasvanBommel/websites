<link rel="stylesheet" type="text/css" href="SCRIPT/CSS/stats_style.css">
<script>
	if(player){
		$("id").html(player.id);
		$("name").html(player.name);
		$("hit_history").html(player.hit_history);
	}
	
	$("#log_out_button").click(function(e){
			LogOut();
	});
</script>

<div id="stats" class="gray">
	
    <div id="information_box">
        <name style="font-size:5vw;"></name><br />
        
        <stat>Password: ********</stat><br />
        <stat> # <id></id></stat>
        
    </div>
    <div id="history_box">
    	<stat>Hit History: <hit_history></hit_history></stat>
        
        <div id="log_out_button">Log Out</div>
    </div>
</div>