package graphics.gui;

import static org.lwjgl.opengl.GL11.*;
import static org.lwjgl.opengl.GL15.*;
import static org.lwjgl.opengl.GL20.*;
import static org.lwjgl.opengl.GL30.*;

import java.awt.image.BufferedImage;
import java.awt.image.*;
import java.nio.ByteBuffer;

import org.lwjgl.opengl.GL20;

import graphics.imageloader.ImageLoader;
import graphics.rendering.VAO;
import graphics.rendering.VBO;

public class GUI {

	BufferedImage bitmap = ImageLoader.load("/resources/images/test2.png");
	
	VAO vao;

	int texture;
	
	float[] vertices = { 	
			-0.5f, +0.5f, +0.0f,
			+0.5f, +0.5f, +0.0f,
			+0.5f, -0.5f, +0.0f,
			-0.5f, -0.5f, +0.0f
	};
	
	int[] triangles = {
			0, 1, 3,
			3, 1, 2
	};
	
	float[] uvs = {
			0, 1,
			1, 1,
			1, 0,
			0, 0
	};
	
	public GUI() {
		
	}
	
	public void init() {
		byte[] data = null;
		
		try {
			data = ((DataBufferByte) bitmap.getRaster().getDataBuffer()).getData();
		}catch(Exception e) {
			e.printStackTrace();
		}
		
		int[] pixels = new int[data.length];
		
		for(int i = 0; i < data.length; i += 4) {
			int a = checkByte(data[i]);
			int b = checkByte(data[i + 1]);
			int g = checkByte(data[i + 2]);
			int r = checkByte(data[i + 3]);

			pixels[i] = r;
			pixels[i + 1] = g;
			pixels[i + 2] = b;
			pixels[i + 3] = a;
		}
		
		texture = glGenTextures();
		
		glBindTexture(GL_TEXTURE_2D, texture);
		glTexImage2D(texture, 0, GL_RGBA, bitmap.getWidth(), bitmap.getHeight(), 0, GL_RGBA, GL_INT, pixels);
		glBindTexture(GL_TEXTURE_2D, 0);
		
		vao = new VAO();
		
		vao.add(vertices);
		vao.add(triangles);
		
		glEnable(GL_TEXTURE_2D);
	}
	
	int checkByte(int data) {
		int i = data;
		
		if(i < 0) {
			i += 255;
		}
		
		return i;
	}
	
	public void render() {	
		vao.bind();

		glEnableVertexAttribArray(0);
		
		glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, 0);
		
		glDisableVertexAttribArray(0);
		
		vao.unbind();
	}
	
	public void destroy() {
		vao.destroy();

		glDeleteTextures(texture);
	}
}
