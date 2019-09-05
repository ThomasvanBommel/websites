var active = false;
var menuNum = -1;

$(document).ready(function(){
	
	$('[id=Menu]').find('.menu').mouseenter(function() {
		$.class = $(this).parent().parent().attr('class');
		menuNum = $.class;
		$(this).click(function(){
			active = true;	
			$('.'+menuNum).find('#menuItem').slideDown('fast');
		});
		if(active){ Slide(); }
    });
	
	$('html').click(function(e){
		if($(e.target).attr('class') != 'menu'){
			$('[id=Menu]').find('#menuItem').slideUp('fast');
			active = false;
		}
	});	
	
});

function Slide(){
	$('[id=Menu]').find('#menuItem').slideUp('fast');
	$('.'+menuNum).find('#menuItem').slideDown('fast');
}

function Shrink(){
	$('body').animate({width: '300', height: '500'}).draggable();
	}