var active_project = Math.floor(Math.random() * 3);
var projects = [];

projects[0] = new Project('Hand', 'src/images/Hand.png', 'Lol');
projects[1] = new Project('Character', 'src/images/Character.png', 'Lol');
projects[2] = new Project('HairBlend', 'src/images/HairBlend.png', 'Lol');
projects[3] = new Project('M1911', 'src/images/M1911.png', 'Lol');

function ChangeProject(project){
	var html = 	'<img src="' + project.image + '" />' +
				'<div class="overlay">' +
					'<div class="title"><h1>' + project.title + '</h1><h2>.blend</h2></div>' +
					'<div class="download"><h2 class="hover">download</h2></div>' +
					'<br>' +
					'<h3 class="description">' + project.description + '</h3>' +
				'</div>';
	
	$("#Project").html(html);
}

// ChangeProject(projects[active_project]);
// setInterval(function(){
// 	active_project ++;
// 	if(active_project > 3){
// 		active_project -= 3;
// 	}

// 	ChangeProject(projects[active_project]);
// }, 2000);