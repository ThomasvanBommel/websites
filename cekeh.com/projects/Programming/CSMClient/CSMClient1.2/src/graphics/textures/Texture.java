package graphics.textures;

import java.awt.image.BufferedImage;
import java.awt.image.DataBuffer;

import org.lwjgl.opengl.GL11;
import org.lwjgl.opengl.GL13;
import org.lwjgl.opengl.GL30;

import loader.ResourceLoader;

public class Texture {

	//-Reference id for the graphics card
	private final int id;
	
	//-Create a new texture from a file path
	public Texture(String path) {
		BufferedImage image = ResourceLoader.loadBufferedImage(path);
		
		DataBuffer image_buffer = image.getRaster().getDataBuffer();
		
		id = GL11.glGenTextures();
		GL11.glBindTexture(GL11.GL_TEXTURE_2D, id);
		
		System.out.println("Data type: " + image_buffer.getDataType());

		if(image_buffer.getDataType() != 1) {
			System.out.println("Invalid texture format");
		}
		
		ResourceLoader.cacheImageToGPU(image);
		//GL11.glTexImage2D(GL11.GL_TEXTURE_2D, 0, GL11.GL_RGBA, image.getWidth(), image.getHeight(), 0, GL11.GL_RGBA, GL11.GL_UNSIGNED_SHORT, ResourceLoader.getUShortBuffer(image));
		
		GL30.glGenerateMipmap(GL11.GL_TEXTURE_2D);

		GL11.glTexParameteri(GL11.GL_TEXTURE_2D, GL11.GL_TEXTURE_MAG_FILTER, GL11.GL_NEAREST);
		
		//These probably belong whereever the window -context is made
		GL11.glEnable(GL11.GL_BLEND);
		GL11.glBlendFunc(GL11.GL_SRC_ALPHA, GL11.GL_ONE_MINUS_SRC_ALPHA);
	}
	
	//-Binds the texture for use, GL13 texture slot example(GL_TEXTURE0)
	public void bind(int texture_slot) {
		GL13.glActiveTexture(texture_slot);
		GL11.glBindTexture(GL11.GL_TEXTURE_2D, id);
	}
	
	//-Unbind the texture so we don't accidently use it
	public void unbind() {
		GL11.glBindTexture(GL11.GL_TEXTURE_2D, 0);
	}
	
	//-Get the id for referencing to the graphics card
	public int getID() {
		return id;
	}
	
	//-Clean up all the memory associated with this texture
	public void cleanUp() {
		GL11.glDeleteTextures(id);
	}
}
