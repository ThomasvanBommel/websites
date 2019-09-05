<script>
	$("#Create").draggable();
</script>

<div id="Create" class="w200 h200 shadow">
	<div class="width100 h25 bg_main white hover_pointer font50">Create account</div>
	<form method="POST">
		<input class="width100 h25 font40" type="text" name="username" placeholder="username" />
		<input class="width100 h25 font40" type="text" name="avatar" placeholder="username" />
		<input class="width100 h25 font40" type="password" name="password" placeholder="password" />
		<input class="width100 h25 font40" type="password" name="passwordverification" placeholder="password verification" />
		<input class="width100 h25 font40" type="email" name="email" placeholder="email" />
		<input class="width100 h25 font40" type="email" name="emailverification" placeholder="email verification" />
		<input class="width100 h25 font40" type="submit" value="login" />
	</form>
</div>