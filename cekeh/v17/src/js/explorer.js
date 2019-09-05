var element = document.getElementById("explorer");

var file_viewer = document.getElementById("file-viewer");
var file_content = file_viewer.getElementsByClassName("content")[0];

// explorer
var p_elements = element.getElementsByTagName("span");

for(var i = 0; i < p_elements.length; i++){
	// th_elements[i].classList.add("hidden");

	p_elements[i].addEventListener("click", function(){
		if(this.innerHTML == ".."){
			var tbody = this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
			console.log(tbody);
			var children = tbody.children;

			for(var j = 0; j < children.length; j++){
				// children[j].children[0].classList.toggle("hidden");
			}

			return;
		}

		var first_table = this.parentElement.parentElement.getElementsByTagName("table")[0];

		// console.log(this.parentElement.parentElement);
		if(first_table){
			first_table.classList.toggle("hidden");
		}

		// get the file path, this also means its not a folder
		var path = this.getAttribute("path");
		var extension = this.getAttribute("extension");

		if(path){
			fetch(path).then(function(response){
				return response.text();
			}).then(function(text){
				// place html files in an iframe
				if(extension == "php"){
					file_content.innerHTML = "<iframe src='" + path + "' style='width:100%;height:50vh;'></iframe>";
					return;
				}

				// replace new lines
				var txt = text.replace(/\n/gm, "<br />");

				// replace double spacing
				txt = txt.replace(/  /gm, "&nbsp;&nbsp;");

				// place file contents in file viewer
				file_content.innerHTML = txt;
			});
		}else{ // is a folder
			// move tables to the left
			// var table = element.getElementsByTagName("tbody")[0];

			var tbody = this.parentElement.parentElement.parentElement;
			var children = tbody.children;

			for(var j = 0; j < children.length; j++){
				// children[j].children[0].classList.toggle("hidden");
			}

			// if(table.style.left){
				// table.style.left = parseInt(table.style.left) - this.clientWidth;
			// }else{
				// table.style.left = -table.clientWidth;
			// }
		}
	});
}

console.log("all good!");