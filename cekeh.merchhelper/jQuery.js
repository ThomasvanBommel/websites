var itemNames, itemsLowerCase;



$(document).ready(function(){
	$('#History').resizable({handles: 'w,s'});
	//LOAD ITEM FILE
	$.get('items.html').done(function(data){
		
		itemNames = data.split("\n");
		temp = data.toLowerCase();
		itemsLowerCase = temp.split("\n");
	});
	//END
	//KEYLISTENER
	$('input').keydown(function(e){
		switch(e.keyCode){
			case 13:	console.log('Enter Pushed!');
						Search($(this).val());
				break;
		}
		
		//HOVER EVENT
		$('.result').mouseenter(function(){
			$(this).append('<div class="add"></div>');
		});
		$('.result').mouseleave(function(){
			$('[class=add]').remove();
		});
		//END
		
		//CLICK EVENT
		$('[class=result]').click(function(){
			$content = $('#content').html();
			$History = $('#History').html();
			$this = $(this).parent().html();
			
			if($this == $content){
				$(this).appendTo('#History');
			}
			if($this == $History){
				$(this).find('img').toggle();
			}
			
		});
		//END
		
	});
	//END
	
	
});

//SEARCH FUNCTION
function Search(txt){
	$('#content').html('');
	$.each(itemsLowerCase, function(num, val){
		//IF VALUE == SEARCH
		if(val.indexOf(txt.toLowerCase()) > -1){
			//REPLACE AWKWARD VALUES
			$urlName = val.split(' ').join('_');
			$urlName = $urlName.replace("'s", '');
			$urlName = $urlName.replace("(", '');
			$urlName = $urlName.replace(")", '');
			//APPEND SEARCH RESULTS TO DIV
			$('#content').append('<div class="result" id="'+num+'"><p>'+itemNames[num]+'</p><center><img src="images/'+$urlName+'.gif" /></center></div>');
		}
	});
}