<html>
    <head>
        <title>Field Mapper v1.0</title>
        <link rel="stylesheet" type="text/css" href="src/css/style.css">
        <script type="text/javascript" src="src/js/main.js"></script>
    </head>
    <body>
        <div id="fps"></div>
        <div id="tools">
            <div id="field_tool">
                <button id="new_field" onclick="createField();">New Field</button>
                <button id="remove_field" onclick="removeField(selected_field);">Remove Field</button>
                <select id="field_selection" onchange="changeFieldSelection(this.selectedIndex);" size="5"></select>
                <button id="rename_field" onclick="renameField(selected_field);">Rename Field</button>
            </div>
            <div id="history_tool">
                <select id="history_selection" size="5">
                    <option>Placed coordinate(x, y, fieldName, index)</option>
                    <option>Created new field(fieldName, index)</option>
                </select>
            </div>
        </div>
        <canvas id="canvas"></canvas>
    </body>
</html>