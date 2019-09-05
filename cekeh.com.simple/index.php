<html>
    <head>
        <link rel="stylesheet" type="text/css" href="src/css/style.css" />
        <link rel="stylesheet" type="text/css" href="src/css/navigation_bar.css" />
        <link rel="stylesheet" type="text/css" href="src/css/filter.css" />
        <link rel="stylesheet" type="text/css" href="src/css/feed.css" />
        <script type="text/javascript" src="src/js/main.js"></script>
    </head>
    <body>
        <div id="navigation_bar">
            <div id="logo">Cekeh</div>
            <div id="menu" onclick="toggleMenu(this)">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
            <?php include("src/php/filters.php"); ?>
            <div id="toggle"  onclick="toggleFilter()">
                <div id="filter_toggle" class="arrow_down"></div>
            </div>
        </div>
        <div id="feed">
            <div class="image">
                <img src="heightmap.png" width="100%" />
                <div class="options">
                    <div class="center">
                        <button>View</button>
                        <button>Download</button>
                    </div>
                </div>
            </div>
            <div class="image">
                <img src="CS001.png" width="100%" />
                <div class="options">
                    <div class="center">
                        <button>View</button>
                        <button>Download</button>
                    </div>
                </div>
            </div>
            <div class="video"></div>
        </div>
        <div id="back_to_top" onclick="scrollToTop()"></div>
    </body>
</html>