<?php
	/* Scan a directory and return a ul list element */
	function scan($path, $start){
		$data = "<ul " . ($start > 1 ? "style='display: none;'" : "") . ">";
		
		if(is_dir($path)){
			$files = scandir($path);
			
			foreach($files as $file){
                $file_type = pathinfo($file, PATHINFO_EXTENSION);
				//$file_type = substr($file, strpos($file, ".") + 1);
				if($file != "." && $file != ".." && $file != "bin" && $file != ".classpath" && $file != ".project" && $file != ".settings" && $file != ".git" && $file != ".gitignore" && $file_type != "log" && $file_type != "jar" && $file_type != "blend1"){
					
					$image = "folder.png";
					$is_file = false;
					
					switch($file_type){
						case "model":
						case "java":
						case "txt":
						case "vs":
						case "fs":
							$is_file = true;
							$image = "script.png";
							break;
						
						case "png":
						case "jpg":
							$is_file = true;
							$image = "image.png";
							break;
                            
                        case "blend":
                            $image = "blender.png";
                            break;
					}
					
					$icon = "<img src='res/images/icons/" . $image . "' class='icon'></img>";
					
					if($start == 0){
						$icon = "";
					}
					
					$f = $is_file == true ? "file" : "folder";
					
					$data .= "<div class='dir'>"
							. "<li onclick='listToggle(this, event)'>" 
								. "<a class='file_path' style='display: none;'>" 
									. $path 
								. "</a>" 
								. $icon
								. "<a class='file_name " . $f . "'>" 
									. $file
								. "</a>" 
								. "<br />" 
								. scan($path . "/" . $file, $start+1) 
							. "</li>"
						. "</div>";
				}
			}
		}
		
		return $data .= "</ul>";
	}
?>