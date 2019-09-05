<html>
    <head>
        <title>Cekeh</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="src/css/style.css" />
        <script type="text/javascript" src="src/js/main.js"></script>
    </head>
    <body class="bg-white w100 plus-sidebar-width h100 transition1s fixed">
        <header class="left w100 minus-sidebar-width" style="min-width:var(--header-min-width); height:var(--header-height);">
            <h1 class="logo color-black h100 fw-bold left">
                Ce<span class="" style="color:#ff8000; position:relative; top:-2px;">&#0164;</span>eh
            </h1>
            <button id="login_toggle_button" class="right" type="button" style="margin:5px 5px 0 0;" onclick="ToggleLoginPanel();">&#128274; Login</button>
            <button id="login_close_button" class="right hide" type="button" style="margin:5px 5px 0 0;" onclick="ToggleLoginPanel();">&#10060; Close</button>
        </header>
        <main class="left w100 h100 minus-header-height fixed" style="top:var(--header-height);">
            <span id="content" class="left bg-gray w100 minus-sidebar-width h100 transition1s" style="opacity:0.3;">
                <div class="w100 tall"></div>
            </span>
            <span id="sidebar" class="left h100 bg-light-gray" style="width:var(--sidebar-width);">
                <div id="login_panel" class="">
                    <form method="post">
                        <table class="w100">
                            <tr class="table-title pointer" onclick="document.getElementById('login_panel').classList.toggle('minimize');">
                                <th>Login</th>
                            </tr>
                            <tr>
                                <td align="center">
                                    <input class="w100" type="email" placeholder="Email" />
                                </td>
                            </tr>
                            <tr>
                                <td align="center">
                                    <input class="w100" type="password" placeholder="Password" />
                                </td>
                            </tr>
                            <tr>
                                <td align="center">
                                    <input class="w100" type="submit" value="Login" />
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
                <div id="new_user_panel" class="minimize">
                    <form method="post">
                        <table class="w100">
                            <tr class="table-title pointer" onclick="document.getElementById('new_user_panel').classList.toggle('minimize');">
                                <th>New User</th>
                            </tr>
                            <tr>
                                <td align="center">
                                    <input class="w100" type="email" placeholder="Email" />
                                </td>
                            </tr>
                            <tr>
                                <td align="center">
                                    <input class="w100" type="password" placeholder="Password" />
                                </td>
                            </tr>
                            <tr>
                                <td align="center">
                                    <input class="w100" type="password2" placeholder="Password2" />
                                </td>
                            </tr>
                            <tr>
                                <td align="center">
                                    <input class="w100" type="submit" value="Create Account" />
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
                <div id="recovery_panel" class="minimize">
                    <form method="post">
                        <table class="w100">
                            <tr class="table-title pointer" onclick="document.getElementById('recovery_panel').classList.toggle('minimize');">
                                <th>Password Recovery</th>
                            </tr>
                            <tr>
                                <td align="center">
                                    <input class="w100" type="email" placeholder="Email" />
                                </td>
                            </tr>
                            <tr>
                                <td align="center">
                                    <input class="w100" type="submit" value="Submit Request" />
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
            </span>
        </main>
    </body>
</html>