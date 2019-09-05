//: Last edit 04/11/2018 - TvB
package com.cekeh.game.texture;

import static org.lwjgl.opengl.GL11.*;
import static org.lwjgl.opengl.GL13.*;
import static org.lwjgl.opengl.GL30.*;

import java.awt.image.BufferedImage;
import java.awt.image.DataBuffer;
import java.awt.image.DataBufferUShort;

import com.cekeh.utility.Loader;

/**
 * Cekeh's Texture class
 * 04/11/2018
 * @author Thomas vanBommel (TvB)
 */
public class Texture {
	
	private final int handle;
	
	/**
	 * Create a new texture from a file path
	 * @param file_path A string representing the location of the image file
	 * @throws Exception Unable to find or load the image
	 */
	public Texture(String file_path) throws Exception {
		BufferedImage image = Loader.loadImage(file_path);
		
		DataBuffer data_buffer = image.getRaster().getDataBuffer(); 
		
		if(data_buffer.getDataType() != DataBuffer.TYPE_USHORT)
			throw new Exception("Incorrect image format(" + data_buffer.getDataType() + "): " + file_path);
		
		DataBufferUShort image_buffer = (DataBufferUShort) data_buffer;
		
		handle = glGenTextures();
		
		glTexImage2D(
				GL_TEXTURE_2D, 0,
				GL_RGBA, 
				image.getWidth(),
				image.getHeight(), 0,
				GL_RGBA,
				GL_UNSIGNED_SHORT,
				image_buffer.getData()
		);
		
		glGenerateMipmap(GL_TEXTURE_2D);
		glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_NEAREST);
	}
	
	/**
	 * Bind this texture for use in openGL
	 * @param texture_slot The texture slot to hold the image in, (example: GL_TEXTURE0, GL_TEXTURE1, etc...)
	 */
	public void bind(int texture_slot) {
		glActiveTexture(texture_slot);
		glBindTexture(GL_TEXTURE_2D, handle);
	}
	
	/**
	 * Unbind this texture from use, so you don't accidently use it
	 */
	public void unbind() {
		glBindTexture(GL_TEXTURE_2D, 0);
	}
	
	/**
	 * Clean up memory used by this texture
	 */
	public void cleanUp() {
		glDeleteTextures(handle);
	}
	
	/**
	 * Get the handle/reference ID for the texture
	 * @return The handle/reference ID for the texture
	 */
	public int getHandle() {
		return handle;
	}
}
