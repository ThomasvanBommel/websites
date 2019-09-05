var x;


$(document).ready(function () {
	
	console.log("Loaded jQuery");
	//GameRollovers
	$("#gContainer #gContent").each(function(){
		$(this).css({background: "#553990"});
		//OnMouseEnter
		$(this).mouseenter(function(){
			$(this).parent().animate({
		  		left: "-25%"
	  		}, 500);
		});
		//OnMouseExit
		$(this).mouseleave(function(){
			$(this).parent().animate({
		  		left: "0"
	  		}, 150);
		});
	});
	//TagRollovers
	$("#tag img").each(function(){
		var n;
		n = 20;
		//OnMouseEnter
		$(this).mouseenter(function(){
			$(this).animate({
		  		left: -n
	  		}, 500);
			switch($(this).width().valueOf()){
				case 134:
					$(".u").animate({left: x}, 150);
					break;
				case 184:
					$(".b").animate({left: x}, 150);
					break;
			}
		});
		//OnMouseExit
		$(this).mouseleave(function(){
			$(this).animate({
		  		left: 0
	  		}, 150);
			switch($(this).width().valueOf()){
				case 134:
					$(".u").animate({left: "-100px"}, 150);
					break;
				case 184:
					$(".b").animate({left: "-100px"}, 150);
					break;
			}
		});
	});
	//
});