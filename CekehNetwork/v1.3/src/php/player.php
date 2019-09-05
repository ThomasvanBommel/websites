<?php
	$id = $player->id;
	$name = $player->name;
	$highest_hit = $player->highest_hit;
	
	$hit_history = explode(",", $player->hit_history);
	$count = count($hit_history);
	$sum = array_sum($hit_history);	
	$avg = $sum / $count;

	$start = $player->start;
	$hours = (time() - strtotime($start)) / 3600;
	//Console($sum);

	$coins = $player->coins;

	
?>
<div class="w400 h500 border bg_gray mauto">
	
	<div id="PlayerCard" class="left width100 height100">
		<div class="w-10 h-10 m5">
			<div id="Avatar" class="w150 h150 bg_white font400 tcenter opacity50 hover_o100 hover_pointer left border">
				?
			</div>
			<div id="Info" class="right w230 h150">
				<div class="left"><?php echo $name; ?></div><div class="right font50">ID: <?php echo $id; ?></div><br><br>
				<div class="left font75 opacity50">COINS:</div><div class="right font50 opacity50">$<?php echo $coins; ?></div><br>
				<div class="left font75 opacity50">ALL TIME:</div><div class="right font50 opacity50"><?php echo $highest_hit; ?></div>
			</div>
			<div id="Stats" class="left width100 h170 m_top_10">
				<div class="left font75 opacity50">SUM:</div><div class="right font50 opacity50"><?php echo $sum; ?></div><br>
				<div class="left font75 opacity50">AVERAGE:</div><div class="right font50 opacity50"><?php echo $avg; ?></div><br>
				<div class="left font75 opacity50">STARTED:</div><div class="right font50 opacity50"><?php echo $start; ?></div><br>
				<div class="left font75 opacity50">HOURS:</div><div class="right font50 opacity50"><?php echo (int)$hours; ?></div>
			</div>
			<div id="History" class="left width100 h150 m_top_10 border bg_darkgray">
				<div class="left font50 title">History</div>
				<div id="Graph" class="w-10 h-10 m5">
					<?php 
						$width = 380;
						$height = 130;

						$gapx = $width / $count;
						$gapy = $height / $highest_hit;

						$i = 0;
						foreach($hit_history as &$hit){
									

							//graph point
							echo '<div class="left graph_point hover_bg_white hover_pointer" style="left:'.(($i + 0.25) * $gapx).'px;top:'.($height - ($hit * $gapy)).'px;" ><p class="font25">'.$hit.'</p></div>';
							$i++;
						}
					?>
				</div>
				
			</div>
		</div>
	</div>
</div>