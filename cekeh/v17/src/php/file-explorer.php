<?php
	$dir = "res/documents";
	
	echoDir($dir);

	function echoDir($path){
		$files = scandir($path);
		$folder_icon = "res/images/folder.png";
		$empty_folder_icon = "res/images/empty_folder.png";

		echo "<tbody>";

		foreach($files as $file){
			$icon = null;

			// ignore these file names
			if($file != '.' && $file != ".."){// && $file != ".."
				// $extension = "";

				// if($file != ".."){
				// path for this file
				$sub_path = $path . "/" . $file;

				// if($file == "..") $sub_path = $path;

				// get the file type
				$extension = pathinfo($sub_path, PATHINFO_EXTENSION); 

				// check if the file is a directory
				if(is_dir($sub_path)){
					// set icon to folder
					$icon = $folder_icon;

					// check if the folder is empty
					if(count(scandir($sub_path)) == 2){
						$icon = $empty_folder_icon;
					}
				}
				// }

				// put file path and extension in the element if the file is not a folder
				$file_path = "";

				if($extension != ""){
					$file_path = "path='" . $sub_path . "'" . "extension='" . $extension . "'";
				}

				$icon_element = $icon == null ? "" : "<img src='" . $icon . "' />";
				echo "<tr><th><span " . $file_path . ">" . $icon_element . "<p>" . $file . "</p></span></th>"; 
				
				if($icon == $folder_icon){
					// echo everything out
					echo "<td><table class='hidden'><tbody>";
					echoDir($sub_path);
					echo "</tbody></table></td>";
				}

				echo "</tr>";
			}
		}

		echo "</tbody>";
	}
?>