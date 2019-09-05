window.onload = init;

var articles;

function init(){
	articles = document.getElementsByTagName("article");

	console.log(articles[1]);

	window.addEventListener("resize", resize);
	resize();

	console.log("Initialized main.js")
}

function resize(){
	for(var i = 0; i < articles.length; i++){
		console.log(articles[i].clientWidth);
		articles[i].style.height = articles[i].clientWidth * 0.56;
	}
}