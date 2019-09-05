<?php 
	// directory to use
	$scan_dir = "res/documents";
	$image_dir = "res/images";

	// icons
	$folder_icon = $image_dir . "/folder.png";
	$empty_folder_icon = $image_dir . "/empty_folder/png";

	directoryScan($scan_dir);

	// function to generate a table with all our directory data inside
	function directoryScan($dir){
		// going to use these
		global $folder_icon;

		// start our table
		echo "<tbody>";

		// for each file in the scan_dir directory
		foreach(scandir($dir) as $file){
			if($file == "." || $file == "..") continue;

			// file path and extension for the current file
			$path = $dir . "/" . $file;
			$extension = pathinfo($path, PATHINFO_EXTENSION);
			$folder = is_dir($path);

			$class = $folder ? "folder" : "";
			$icon = $folder ? $folder_icon : "";

			// spit out all the informaiton
			echo "<tr>";
			echo "	<th class='". $class ."'>";
			echo "		<img src='". $icon ."' />";
			echo "		<p>". $file ."</p>";
			echo "	</th>";

			// if this is a directory, spit it out too
			if($folder){
				echo "<td class=''>";
				echo "	<table>";
				directoryScan($path);
				echo "	</table>";
				echo "</td>";
			}

			// close it off
			echo "</tr>";
		}

		// end our table
		echo "</tbody>";
	}
?>