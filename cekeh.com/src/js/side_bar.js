var breaks = [
	" ",
	".",
	",",
	"(",
	")",
	"[",
	"]",
	"{",
	"}",
	";"
];

var filters = [
	"package", 
	"implements",
	"extends",
	"import", 
	"static", 
	"public", 
	"private", 
	"protected", 
	"class", 
	"super", 
	"new", 
	"while",
	"try",
	"catch",
	"for",
	"null",
	"throw",
	"throws",
	"switch",
	"case",
	"break",
	"return",
	"final",
	"if",
	"else",
	"true",
	"false",
	"this",
	
	"int",
	"void",
	"long",
	"double",
	"float",
	"boolean",
	"byte"
];

function listToggle(element, event){
	event.cancelBubble = true;
	
	var lists = element.getElementsByTagName("ul");
	var list = lists[0];
	
	if(list.style.display == "none"){
		list.style.display = "block";		
	}else{
		list.style.display = "none";
	}
	
	var file_name = element.getElementsByClassName("file_name")[0].innerHTML;
    var file_type = file_name.split(".").pop();
	//var file_type = file_name.split(".")[1];
	//var file_type = file_name.substring(file_name.length - 5, file_name.length);
	var file_path = element.getElementsByClassName("file_path")[0].innerHTML + "/" + file_name;
	
	
	if(file_type == "model" || file_type == "java" || file_type == "txt" || file_type == "vs" || file_type == "fs"){
		$.ajax({
			url: file_path,
			dataType: "text",
			success: function(data){
				if(file_type == "java"){
					for(var i in filters){
						for(var j in breaks){
							data = data.replace(new RegExp(filters[i] + "\\" + breaks[j], "g"), "<div class='filter'>" + filters[i] + "</div>" + breaks[j]);	
						}
					}
				}
				
				var line_comments = data.match(/\/\/.*/g);
				
				if(line_comments != null){
					for(var i in line_comments){
						var comment = line_comments[i];
						
						data = data.replace(comment, "<div class='comment'>" + comment + "</div>");
					}
				}
				
				var multi_comment = data.match(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//g);
				
				if(multi_comment != null){
					console.log(multi_comment.length);
					
					for(var i in multi_comment){
						var comment = multi_comment[i];
						
						var parameters = comment.match(/@\w*/g);
						
						console.log("PARAMETERS: " + parameters);
						
						if(parameter != null){
							for(var j in parameters){
								var parameter = parameters[j];
								
								//comment = comment.replace(parameter, "<div class='parameter'>hello" + parameter + "</div>");
							}							
						}
						
						if(comment.substring(0, 3) == "/**"){
							data = data.replace(comment, "<div class='javadoc'>" + comment + "</div>");
						}else{
							data = data.replace(comment, "<div class='comment'>" + comment + "</div>");
						}
						
						
					}
				}
				
				$("#text").html(data);
				$("#title").html(file_name);
			}
		});
	}else if(file_type == "png"){
		$("#text").html("<img src='" + file_path + "' />");
		$("#title").html(file_name);
	}
}