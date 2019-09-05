var container = document.getElementById("viewer-container");
var directory = container.getElementsByClassName("directory")[0];
var file = container.getElementsByClassName("file")[0];

// Add click function to the directory
var links = directory.getElementsByTagName("th");
for(var i = 0; i < links.length; i++){
	links[i].addEventListener("click", function(){
		// check if this element is a folder (set is classList)
		if(this.classList.contains("folder")){
			// toggle the folders elements (open the folder)
			this.parentElement.getElementsByTagName("td")[0].classList.toggle("hidden");
		}
	});
}

console.log("loaded");