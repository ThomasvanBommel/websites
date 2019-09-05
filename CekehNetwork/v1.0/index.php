<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<?php 
	require("SCRIPT/PHP/CLASS/Session.php");
	$Session = new Session();
?>
<script src="SCRIPT/JS/CLASS/Player.js"></script>
<script>
	var player = GetJSON();
	
	function GetJSON(){
		
		var cookie = document.cookie.split(";");//%3B == ;
		console.log(cookie);
		
		var split_cookie;
		$.each(cookie, function(key, value){
			//console.log("key: " + key + ", value_slice: " + value.slice(7));
			
			if(value.slice(0, 6) == "PLAYER"){
				//console.log("slice: " + value.slice(7));
				
				if(value.slice(7) != 0){
					split_cookie = value;
					console.log("VALUE");
				}else{
					
				}
			}
			//console.log(key + ", " + value);
		});
		
		if(split_cookie){
			console.log(split_cookie);
			var json = unescape(split_cookie.slice(7));
			if(json){
				return JSON.parse(json);
			}
		}
		return false;
	}
	
	//function LogOut(){
//		document.location = "index.php";
//	}
	
	
	//if(player){
//		accountInformationPHP = "SCRIPT/PHP/PAGE/Stats.php";
//	}else{
//		accountInformationPHP = "SCRIPT/PHP/PAGE/Login.php";
//	}
//	$(document).ready(function(e) {
//        $('#content AccountInformation').load(accountInformationPHP);
//    });
//	
//    
//	
	function LoadCreateAccount(){
		$('#content AccountInformation').load("SCRIPT/PHP/PAGE/CreateAccount.php");
		//$.ajax({
//			type: "GET",
//			data: "src=CreateAccount.php"
//		});
	}
	
</script>
<html>
	<head>
		<title></title>
        <link rel="stylesheet" type="text/css" href="SCRIPT/CSS/index_style.css?version=3">
        
	</head>
    <body>
    
    	<div id="header" class="light_gray">
    		<div id="logo">CekehNetwork</div>
        </div>
        
        <div id="content" class="light_gray">
        	<AccountInformation>
            	<?php include("SCRIPT/PHP/PAGE/AccountInformation.php"); ?>
            </AccountInformation>
        	
            <br><hr><br>
            
            <changelog>
            <font size="5vw">Change Log:</font><br><br>
            <time>05/25/2017</time> - Create an account !
            	<description>-Cleaned up the websites CSS. Will makes things more organized in the future;</description><br><br>
            <time>05/23/2017</time> - Added "Change Log" to the locally tested site.
            	<description>This is where I'll try my best to post every change to the website and/or the mmo;</description><br><br>
            </changelog>
        </div>
    </body>
    <footer>
   		<div id="foot_text"><hr></div>
    </footer>
</html>