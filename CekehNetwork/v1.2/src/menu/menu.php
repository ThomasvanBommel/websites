<!-- CSS -->
	<link rel="stylesheet" type="text/css" href="src/menu/style.css?version=10" />
<!-- END CSS -->


<!-- MENU TOGGLE -->
	<MenuToggle onclick="ToggleMenu();">
		<div></div>
		<div></div>
		<div></div>
	</MenuToggle>
<!-- END MENU TOGGLE -->

<!-- Menu -->
<Menu class="small">
	<!-- BUTTON -->
	<div id="button" onclick="ChangeContent('src/page/login.php');">
		<div class="text">
			Home
		</div>
	</div>
	<div id="button">
		<div class="text">
			Downloads
		</div>
	</div>
	<div id="button">
		<div class="text">
			Highscores
		</div>
	</div>
	<div id="button">
		<div class="text">
			Wiki
		</div>
	</div>
	<div id="button">
		<div class="text">
			Change Log
		</div>
	</div>
	<div id="button">
		<div class="text">
			Forums
		</div>
	</div>
	<div id="button">
		<div class="text">
			Account
		</div>
	</div>
	<div id="button">
		<div class="text">
			Log in / Create account
		</div>
	</div>
</Menu>
<!-- END MENU

<!-- JAVASCRIPT -->
<script>

	function ToggleMenu(){
		$("Menu").toggleClass("small", "large");
	}

	function ChangeContent(src){
		$("#Content").load(src);
	}

	$("Menu #button").click(function(event) {
		var html = $(this).find(".text").html();
		console.log(html);

		$("#Content").html(html);
	});
	
</script>
<!-- END JAVASCRIPT -->