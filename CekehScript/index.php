<HTML>
	<HEAD>
    	<link rel="stylesheet" type="text/css" href="style/style.css">
    	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.0/jquery.min.js"></script>
		<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.9/jquery-ui.min.js"></script>
        <script src="jQuery.js"></script>
        <script src="scripts/menu.js"></script>
    </HEAD>
    
    <BODY BGCOLOR='#DDD'> 
    	<div id='logo'>
        	<div class='Aquino'>C</div>
            <div class='Aquino'>E</div>
            <div class='Aquino'>K</div>
            <div class='Aquino'>E</div>
            <div class='Aquino'>H</div>
        </div>       
        <div id='menuBar'>
            <div id='Menu' class='0'><a id='menuTitle'><b class='menu'>File</b></a><ul id='menuItem'>
                <li onClick='location.href="#"'>Modems / Gateways <sup>(new)</sup></li>
                <li onClick='location.href="#"'>Modems / Gateways <sup>(old)</sup></li><hr>
                <li onClick='location.href="#"'>Internet Packages <sup>(new)</sup></li>
                <li onClick='location.href="#"'>Internet Packages <sup>(old)</sup></li><hr>
                <li onClick='location.href="#"'>Previous Notes</li><hr>
                <li onClick='Shrink()'>System Down</li>
        	</ul></div>
            <div id='Menu' class='1'><a id='menuTitle'><b class='menu'>Edit</b></a><ul id='menuItem'>
                <li onClick='location.href="#"'>999999999 <sup>(new)</sup></li>
                <li onClick='location.href="#"'>Modems / Gateways <sup>(old)</sup></li><hr>
                <li onClick='location.href="#"'>Internet Packages <sup>(new)</sup></li>
                <li onClick='location.href="#"'>Internet Packages <sup>(old)</sup></li><hr>
                <li onClick='location.href="#"'>Previous Notes</li><hr>
                <li onClick='location.href="https://google.ca"'>System Down</li>
        	</ul></div>
        </div>
        	
        <div id='contentHolder'>
            <div id='content'>
            
                <div id='top'>
                	<?php
						//$url = 'http://services.runescape.com/m=itemdb_oldschool/Flax/viewitem?obj=1779';
						$url = 'http://services.runescape.com/m=itemdb_rs/api/catalogue/items.json?category=1&alpha=a&page=1&callback=?';
						
						//echo $url;
						
						//$content = file_get_contents($url);
						
						echo $content;
					?>
                </div>
                <hr>
                <div id='bottom'>
                
                </div>
            
            </div>
        </div>
        
	</BODY>
</HTML>