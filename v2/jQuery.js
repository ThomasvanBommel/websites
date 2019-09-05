$(document).ready(function(){
	//hideHeader
		$("#hideHeader").click(function(){
			$("#header").slideToggle("slow");
		});
	//ButtonList
		$(".buttonList").hover(function(){
			$(".buttonList").css({width: '116px'});
			$(".buttonList list").show();
		});
		$(".buttonList").mouseleave(function(){
			$(".buttonList").animate({width: '29px'});
			$(".buttonList list").fadeOut('fast');
		});
	//sizes
		$(".wideScreen").click(function(){
			$("#page").animate({width: '90%'});
		});
		$(".midScreen").click(function(){
			$("#page").animate({width: '50%'});
		});
		$(".smallScreen").click(function(){
			$("#page").animate({width: '25%'});
		});
		
	//test
		
		$(".optClass").click(function(){
			$(this).find("ul").fadeToggle("fast");
		});
		$("#content").click(function(){
			$(".optClass").find("ul").fadeOut("fast");
		});
		$("div#p").draggable();
		
});