package texture;

import java.awt.image.BufferedImage;
import java.awt.image.DataBufferByte;
import java.io.File;
import java.net.URI;

import javax.imageio.ImageIO;

import org.lwjgl.opengl.GL11;

public class Texture {

	//-Reference id for the graphics card
	int id;
	
	//-Load an image from file
	//-Grab all the pixel colors
	//-Get and set the reference id of our texture to the graphics card
	//-Bind texture for writing to
	//-Write the texture data to the graphics card
	//-Unbind texture so we don't accidently use it elsewhere
	public Texture(String path) {
		BufferedImage image = loadImage(path);
		int[] pixels = getPixels(image);
		
		id = GL11.glGenTextures();
		
		GL11.glBindTexture(GL11.GL_TEXTURE_2D, id);
		GL11.glTexImage2D(GL11.GL_TEXTURE_2D, 0, GL11.GL_RGBA, image.getWidth(), image.getHeight(), 0, GL11.GL_RGBA, GL11.GL_INT, pixels);
		GL11.glBindTexture(GL11.GL_TEXTURE_2D, 0);
	}
	
	//-Buffer we can load our image into
	//-Create a path for ImageIO to grab our image
	//-Grab our image if it exists
	//-RETURN the image if it exists, null otherwise
	BufferedImage loadImage(String path) {
		BufferedImage image = null;
		
		try {
			URI uri = this.getClass().getResource(path).toURI();
			
			image = ImageIO.read(new File(uri));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return image;
	}
	
	//-Get byte data from the image file
	//-Set up our pixels variable for returning, we will need to do some math as byte will be negative
	//-For each byte there is one pixel
	//-Temporary byte for holding our data
	//-If a byte is negative, add 255. This will give us our RGBA data, 
	//-Set that to be our pixel color value
	//-RETURN all the pixel colors from the image provided
	int[] getPixels(BufferedImage image) {
		byte[] data = ((DataBufferByte) image.getRaster().getDataBuffer()).getData();
		int[] pixels = new int[data.length];
		
		for(int i = 0; i < data.length; i++) {
			int b = data[i];
			
			if(b < 0) {
				b += 255;
			}
			
			if(b != 0) {
				//System.out.println(b);
			}
			
			pixels[i] = b;
		}
		
		//System.out.println(pixels[1]);
		
		return pixels;
	}
	
	//-Bind the texture for use
	public void bind() {
		GL11.glBindTexture(GL11.GL_TEXTURE_2D, id);
	}
	
	//-Unbind the texture so we don't accidently use it
	public void unbind() {
		GL11.glBindTexture(GL11.GL_TEXTURE_2D, 0);
	}
	
	//-Get the graphics card reference id of this texture
	public int getID() {
		return id;
	}
	
	//-Delete the texture from the graphics card memory
	public void destroy() {
		GL11.glDeleteTextures(id);
	}
}
