<html>
    <head>
        <link rel="stylesheet" type="text/css" href="src/css/normalize.css?version=<?=time();?>" />
        <link rel="stylesheet" type="text/css" href="src/css/style.css?version=<?=time();?>" />
        <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
        
    </head>
    <body onscroll="CloseProject();">
    	<div id="Header">
        	<div id="Logo"><h1>[t<font color="#0F0">*</font>homas]</h1><h2>-vanbommel-</h2></div>
        </div>
        
        <div id="Content">

        	<div id="HighlightProject">
        		<div class="left height50 width50-30 margin o-1" style="background-color:#EEE;">
        			<img class="center" style="" />
        		</div>
        		<div id="Info" class="left height50 width50-30 margin bg_EEE">
        			hello
        		</div>
        	</div>

            <div id="Project" onclick="ExpandProject(this);">
            	<img src="src/projects/hand/thumbnail.2.png" class="left hover" />

            	<div class="info w-285 left none">
            		hand model
            	</div>
            	<div class="tab">
            		<div>b</div><div>l</div><div>e</div><div>n</div><div>d</div>
            	</div>
            </div>

            <div id="Project" onclick="ExpandProject(this);" class="project">
            	
            	<img src="src/projects/character/thumbnail.png" class="left hover" />

            	<div class="info w-285 left none">
            		character model
            	</div>
            	<div class="tab1">
            	<div>b</div><div>l</div><div>e</div><div>n</div><div>d</div>
            	</div>
            </div>

            <div id="Project" onclick="ExpandProject(this);" class="project">
            	<img src="src/projects/m1911/thumbnail.png" class="left hover" />

            	<div class="info w-285 left none">
            		m1911
            	</div>
            	<div class="file_type">
            		<img src="src/images/icons/blender.png" />
            	</div>
            	<div class="file_name font white">
            		M1911
            	</div>
            </div>

            <div id="Project" onclick="ExpandProject(this);">
            	<img src="src/projects/hand/thumbnail.2.png" class="left hover" />

            	<div class="info w-285 left none">
            		hand model
            	</div>
            	<div class="tab">
            	blend
            	</div>
            </div>

            <div id="Project" onclick="ExpandProject(this);">
            	<img src="src/projects/character/thumbnail.png" class="left hover" />

            	<div class="info w-285 left none">
            		character model
            	</div>
            	<div class="tab">
            	blend
            	</div>
            </div>

            <div id="Project" onclick="ExpandProject(this);">
            	<img src="src/projects/m1911/thumbnail.png" class="left hover" />

            	<div class="info w-285 left none">
            		m1911
            	</div>
            	<div class="tab">
            	blend
            	</div>
            </div>

            <div id="Project" onclick="ExpandProject(this);">
            	<img src="src/projects/hand/thumbnail.2.png" class="left hover" />

            	<div class="info w-285 left none">
            		hand model
            	</div>
            	<div class="tab">
            	blend
            	</div>
            </div>

            <div id="Project" onclick="ExpandProject(this);">
            	<img src="src/projects/character/thumbnail.png" class="left hover" />

            	<div class="info w-285 left none">
            		character model
            	</div>
            	<div class="tab">
            	blend
            	</div>
            </div>

            <div id="Project" onclick="ExpandProject(this);">
            	<img src="src/projects/m1911/thumbnail.png" class="left hover" />

            	<div class="info w-285 left none">
            		m1911
            	</div>
            	<div class="tab">
            	blend
            	</div>
            </div>


        </div>
    </body>
</html>

<script>

	function ExpandProject(element){
		window.scrollTo(0,0);
		$('#HighlightProject').slideDown(400, function(){
			var highlight_project = document.getElementById('HighlightProject');
			var image = element.getElementsByTagName('img')[0];
			//var info = element.getElementsByClassName('info')[0];
			
			highlight_project.getElementsByTagName('img')[0].src = image.src;
			//highlight_project.getElementById('Info');

			console.log(image);
		});
	}

	function CloseProject(){
		document.getElementById('HighlightProject').getElementsByTagName('img')[0].src = '';
		$('#HighlightProject').slideUp(400);

	}

	$(document).ready(function($) {
		console.log('ready');
		$('.project').hover(function() {
			/* Stuff to do when the mouse enters the element */
			console.log('entered');
			//$(this).find('.file_name').fadeIn(400);
			$(this).find('.file_name').animate({width:'toggle'}, 350);
		}, function() {
			/* Stuff to do when the mouse leaves the element */
			//$(this).find('.file_name').fadeOut(400);
			$(this).find('.file_name').animate({width:'toggle'}, 350);
		});
	});
</script>

<!-- <script src="src/js/project.js"></script>
<script src="src/js/main.js"></script> -->