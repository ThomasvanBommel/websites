var itemsLowerCase;
var items;
var nullImage = $.get('null.gif');
var count = 0;

console.log(nullImage.data.length);

var xhr = new XMLHttpRequest();
xhr.open('GET', 'items.html', true);
xhr.onload = function() {
    if (xhr.status === 200) {
		items = xhr.responseText.split("\n");
		result = xhr.responseText.toLowerCase();
		itemsLowerCase = result.split("\n");
    }else {
		console.log('Request failed.  Returned status of ' + xhr.status);
	}
};
xhr.send();

//------------------------------------------------------------------------
$(document).ready(function(){
	console.log('--jQuery Loaded');
	
	$('input').keydown(function(e){
		switch(e.keyCode){
			case 13:	console.log('Enter Pushed!');
						searchYQLQuery($(this).val());
				break;
		}
	});
	
});
//------------------------------------------------------------------------

function searchYQLQuery(text){
	$('#BOTTOM').html('');
	$.each(itemsLowerCase, function(num, val){
		if(val.indexOf(text.toLowerCase()) > -1){
			//console.log(val+' (includes: '+text+')');
			$urlName = val.split(' ').join('_');
			$urlName = $urlName.replace("'s", '');
			$urlName = $urlName.replace("(", '');
			$urlName = $urlName.replace(")", '');
			$firstLetter = $urlName[0];
			if($urlName[0] > 0){
				$firstLetter = '0-9';
			}
			
			$('#BOTTOM').append('<div class="result" id="'+num+'">'+items[num]+'<img src="http://runescape.salmoneus.net/assets/images/items/'+$firstLetter+'/'+$urlName+'.gif" width="32" height="32"></div>');
			
			image = $('#num').find('img');
			//console.log(image);
		}
	});
	$('#BOTTOM .result').click(function(){
		$(this).prependTo('#TOP');
	});
}