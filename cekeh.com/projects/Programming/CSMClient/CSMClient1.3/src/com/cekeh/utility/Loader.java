//: Last edit 04/10/2018 - TvB
package com.cekeh.utility;

import java.awt.image.BufferedImage;
import java.awt.image.DataBuffer;
import java.awt.image.DataBufferUShort;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.net.URISyntaxException;

import javax.imageio.ImageIO;

/**
 * Cekeh's Utility Loader class
 * 04/09/2018
 * @author Thomas vanBommel (TvB)
 */
public class Loader {

	/**
	 * Load plain text from any file format
	 * @param file_path File path to the file, start with "src/"
	 * @return Contents of the file in a string with lines separated by "\n"
	 * @throws Exception File not found exception
	 */
	public static String loadPlainText(String file_path) throws Exception {
		String contents = "";
		
		BufferedReader reader = new BufferedReader(new FileReader(file_path));
		String line;
		
		while((line = reader.readLine()) != null)
			contents += line + "\n";
		
		reader.close();
		
		return contents;
	}
	
	/**
	 * Load BufferedImage from file path
	 * @param file_path	String representing where the image is located
	 * @return The buffered image requested
	 * @throws Exception Unable to find image
	 */
	public static BufferedImage loadImage(String file_path) throws Exception {
		File file = new File(Loader.class.getResource(file_path).toURI());
		return ImageIO.read(file);
	}
}
