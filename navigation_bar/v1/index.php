<html>
    <head>
        <title>Navigation Bar v1</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script type="text/javascript" src="navigation.js"></script>
        
        <style>
            :root{
                --font-size:20px;
            }
        </style>
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        <script>
            function toggle(element){
                document.getElementsByClassName("active")[0].classList.toggle("active");
                element.classList.toggle("active");
            }
        </script>
        <div id="navigation">
            <table>
                <tr>
                    <td class="option active" onclick="toggle(this)">
                        <div class="img"></div>
                        Home
                    </td>
                    <td class="option" onclick="toggle(this)">
                        <div class="img"></div>
                        Contact
                    </td>
                    <td class="option" onclick="toggle(this)">
                        <div class="img"></div>
                        Forum
                    </td>
                    <td class="option" onclick="toggle(this)">
                        <div class="img"></div>
                        Sign
                    </td>
                    <td class="option" onclick="toggle(this)">
                        <div class="img"></div>
                        Media
                    </td>
                    <td class="option" onclick="toggle(this)">
                        <div class="img"></div>
                        Home
                    </td>
                    <td class="option" onclick="toggle(this)">
                        <div class="img"></div>
                        Contact
                    </td>
                    <td class="option" onclick="toggle(this)">
                        <div class="img"></div>
                        Forum
                    </td>
                    <td class="option" onclick="toggle(this)">
                        <div class="img"></div>
                        Sign
                    </td>
                    <td class="option" onclick="toggle(this)">
                        <div class="img"></div>
                        Media
                    </td>
                </tr>
            </table>
        </div>
    </body>
</html>