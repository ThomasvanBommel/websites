package graphics.imageloader;

import java.awt.image.BufferedImage;
import java.io.File;
import java.net.URI;

import javax.imageio.ImageIO;

public class ImageLoader{

	public ImageLoader() {}
	
	public static BufferedImage load(String path) {
		BufferedImage image = null;
		
		try {
			URI uri = ImageLoader.class.getResource(path).toURI();
			
			image = ImageIO.read(new File(uri));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return image;
	}
}
