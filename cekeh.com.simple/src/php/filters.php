<div id="filter">
    <div class="options active">
        <table>
            <tr>
                <th colspan="2">Filter:</th>
            </tr>
            <tr>
                <td>
                    Project:
                </td>
                <td>
                    <select onchange="toggleFilter()">
                        <option selected hidden>...</option>
                        <option>CSMClient</option>
                        <option>CSMServer</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    Project type:
                </td>
                <td>
                    <select onchange="toggleFilter()">
                        <option selected hidden>...</option>
                        <option>Programming</option>
                        <option>Rendering</option>
                        <option>Shaders</option>
                        <option>Web design</option>
                        <option>Game design</option>
                        <option>Logo design</option>
                        <option>For work</option>
                        <option>For fun</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    File type:
                </td>
                <td>
                    <select onchange="toggleFilter()">
                        <option selected hidden>...</option>
                        <option>Image</option>
                        <option>Video</option>
                        <option>Web site</option>
                        <option>Script</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    Sort:
                </td>
                <td>
                    <select onchange="toggleFilter()">
                        <option selected hidden>...</option>
                        <option>Newest first</option>
                        <option>Oldest first</option>
                        <option>Favorites</option>
                    </select>
                </td>
            </tr>
        </table>
    </div>
    <div class="toggle" onclick="toggleFilter()">
        <div class="arrow_down"></div>
    </div>
</div>