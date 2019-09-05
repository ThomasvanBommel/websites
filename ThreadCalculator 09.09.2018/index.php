<html>
    <head>
        <title>ThreadCalculator 1.0</title>
        <link rel = "stylesheet" type = "text/css" href = "src/css/style.css?version=<? = time(); ?>" />
        <script src="src/js/main.js"></script>
    </head>
    <body>
        <table id = "input">
            <caption><b>Input</b></caption>
            <tr>
                <td>Diameter ( <b>Dmax</b> )</td>
                <td><input id = "diameter" type = "number"></td>
                <td>
                    <select>
                        <option value = "m">m</option>
                        <option value = "cm">cm</option>
                        <option value = "mm" selected>mm</option>
                        <option value = "um">um</option>
                        <option value = "nm">nm</option>
                        <option value = "pm">pm</option>
                        <option value = "fm">fm</option>
                        <option value = "am">am</option>
                        <option value = "zm">zm</option>
                        <option value = "ym">ym</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Pitch ( <b>P</b> )</td>
                <td><input id = "pitch" type = "number"></td>
                <td>
                    <select>
                        <option value = "m">m</option>
                        <option value = "cm">cm</option>
                        <option value = "mm" selected>mm</option>
                        <option value = "um">um</option>
                        <option value = "nm">nm</option>
                        <option value = "pm">pm</option>
                        <option value = "fm">fm</option>
                        <option value = "am">am</option>
                        <option value = "zm">zm</option>
                        <option value = "ym">ym</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td colspan = "3"><input id = "submit" type = "submit" onclick = "recalculate()"></td>
            </tr>
        </table>
        
        <canvas id = "canvas">Canvas tag is not supported by this browser.</canvas>
        
        <table id = "output">
            <caption><b>Output</b></caption>
            <tr>
                <td>Height ( <b>H</b> )</td>
                <td><input id = "height" type = "text" readonly></td>
            </tr>
            <tr>
                <td>Diameter Minimum ( <b>Dmin</b> )</td>
                <td><input id = "diameter_minimum" type = "text" readonly></td>
            </tr>
        </table>
    </body>
</html>