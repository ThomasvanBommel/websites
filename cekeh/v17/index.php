<html>
    <head>
        <title>v3</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="src/css/style.css" />
        
        <script type="module" src="src/js/main.js"></script>
        <script type="module" src="src/js/explorer.js"></script>
        <script type="module" src="src/js/viewer.js"></script>
    </head>
    <body>
        <header id="header">
            <div id="logo">CEKEH</div>
            <div id="slogan">By: Thomas vanBommel</div>
            <div id="menu">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </header>
        <main>
            <table id="skills">
                <tr class="guagues">
                    <td class="guage" from="0" to="0.9" label="1500+" subtext="hours"></td>
                    <td class="guage" from="0" to="0.7" label="500+" subtext="hours"></td>
                    <td class="guage" from="0" to="0.55" label="100+" subtext="hours"></td>
                </tr>
                <tr class="headings">
                    <th><h3>Web</h3></th>
                    <th><h3>Game</h3></th>
                    <th><h3>Server</h3></th>
                </tr>
                <tr class="requirements">
                    <td><h5>HTML, CSS, Javascript, PHP, MySQL</h5></td>
                    <td><h5>OpenGL, Java, GLSL, Blender, Unity, C#</h5></td>
                    <td><h5>Java, Window, Linux</h5></td>
                </tr>
            </table>
            <div id="explorer-container">
                <table id="explorer" class="horizontal"><?php include("src/php/file-explorer.php"); ?></table>
                <div id="file-viewer">
                    <!-- <div class="file"> -->
                        <div class="content">
                            Please select a file to view... 
                        </div>
                    <!-- </div> -->
                </div>
            </div>
            <div id="viewer-container">
                <table class="directory">
                    <?php include("src/php/viewer.php"); ?>
                </table>
                <div class="file">
                    <!-- Hello there! -->
                </div>
            </div>
            <div id="contact">
                <h3>Say hi!</h3>
                <table>
                    <tr>
                        <td>
                            <input type="email" name="email" placeholder="Email" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <textarea type="text" name="message" placeholder="Message..." style="width:100%;"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="submit" name="submit" />
                        </td>
                    </tr>
                    
                </table>
            </div>
            <div id="extension"></div>
        </main>
    </body>
</html>