<html>
    <head>
        <title>Navigation Bar v1</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <style>
            :root{
                --font-size:20px;
            }
        </style>
        <link rel="stylesheet" href="src/css/style.css" />
        
        <script type="text/javascript" src="src/js/navigation.js"></script>
    </head>
    <body>
        <ul id="navigation">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>News</li>
            <li>Google</li>
            <li>
                Youtube
                <ul>
                    <li>page 1</li>
                    <li>page 2</li>
                    <li>page 3</li>
                    <li>page 4</li>
                    <li>
                        page 5
                        <ul>
                            <li>page 1</li>
                            <li>page 2</li>
                            <li>page 3</li>
                            <li>page 4</li>
                            <li>page 5</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="more">
                ...More...
                <ul></ul>
            </li>
        </ul>
    </body>
</html>