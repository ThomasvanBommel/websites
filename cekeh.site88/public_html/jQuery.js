var PLAYERNAME = 'cekeh';
var PLAYERSTATS = false;

var YReturn = false;
var highscoreDetails = 'http://services.runescape.com/m=itemdb_rs/api/catalogue/items.json?category=10&alpha=c&page=1';
var grandexchangeCat = 'http://services.runescape.com/m=itemdb_rs/api/catalogue/items.json?category=24&alpha=dh&page=1';
var playerStats = 'http://services.runescape.com/m=hiscore_oldschool/index_lite.ws?player=';

$(document).ready(function(){
	console.log('--jQuery Loaded');
	
	
	getStats();
	
});

YJson(grandexchangeCat, 'test', 'item');

function YJson(url, location, tag){
	YUI().use('node', 'yql', function(Y){
		Y.YQL("select * from json where url='"+url+"'", function(json){
			results = json.query.results.json.items;
			//console.log(results);
			$.each(results, function(num, res){
				//console.log('something: '+res.name);
				$('#'+location).append('<div class="'+tag+'">'+res.name+'</div>');
			});
		});
	});
}

function getStats(){
	$('#stats').html('');
	$('.box b').html(PLAYERNAME.toUpperCase());
	YUI().use('node', 'yql', function(Y){
		Y.YQL("select * from html where url='"+playerStats+PLAYERNAME+"'", function(json){
			$result = json.query.results.body;
			$arr = $result.split('\n');
			var skillArray = [];
			$.each($arr, function(num, res){
				$split = res.split(',');
				//console.log(skillArray);
				console.log($split+', #'+num);
				skillArray[num] = $split;
				//skillArray[num] = $split[1];
				//skillArray[num] = $split[2];
				
				
				
				$('#stats').append('<div class="row">'
									+'<div class="rank"><div class="skillName">Attack</div><b>'+$split[0]+'</b></div>'
									+'<div class="level"><b class="levelL"></b><b>'+$split[1]+'</b></div>'
									+'<div class="exp"><b class="expL"></b><b>'+$split[2]+'</b></div>'
									+'</div>');
			});
			PLAYERSTATS = skillArray;
			//
		});
	});
}


function keyPress(){
	var val = $('input').val();
	console.log(val);
	PLAYERNAME = val;
	getStats();
}