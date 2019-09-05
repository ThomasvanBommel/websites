<html>
    <head>
        <title>Cekeh v4</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">        
        <link rel="stylesheet" href="src/css/style.css" />
        <script type="text/javascript" src="src/js/main.js"></script>
    </head>
    <body class="w100 h100 fixed hidden-overflow">
        <header id="header" class="left w100 header-height bg-white" style="min-width:var(--header-min-width);">
            <canvas id="logo" class="h100 left" style="width:71px;"></canvas>
            <div id="menu_toggle" class="right pointer" style="width:22px; height:22px; margin:10px;" onclick="toggleSidebar();" title="Open Sidebar">
                <div class="left border-black" style="height:7px; width:7px; margin:1px; border-radius:2px;"></div>
                <div class="left border-black" style="height:7px; width:7px; margin:1px; border-radius:2px;"></div>
                <div class="left border-black" style="height:7px; width:7px; margin:1px; border-radius:2px;"></div>
                <div class="left border-black" style="height:7px; width:7px; margin:1px; border-radius:2px;"></div>
            </div>
        </header>
        <div id="sidebar" class="sidebar-width h100 absolute bg-dark-gray light-gray" style="transition:right 0.5s;">
            <div href="#" class="w100 left pointer" style="padding:10px 0 0 10px;">About</div>
            <div href="#" class="w100 left pointer" style="padding:10px 0 0 10px;">Projects</div>
            <div href="#" class="w100 left pointer" style="padding:10px 0 0 10px;">Contact</div>
        </div>
        <main id="main" class="left w100 h100 sub-header-height auto-overflow transition">
            <span id="home" class="left w100">
                <div class="left w100 padding5 center-text" style="height:150px;">

                    <h1><span class="orange">Hello</span>, I'm Thomas</h1>
                    <h5>a self-taught <span class="orange">programmer</span>, with a passion for <span class="orange">server architecture</span> and <span class="orange">game mechanics.</span></h5>

                </div>
                <div class="left w100 padding5 center-text fixed" style="font-size:75%;bottom:0;">
                    Copyright &copy; 2019 <span class="orange">Thomas vanBommel</span>
                </div>
            </span>
        </main>
        
    </body>
</html>