package graphics.rendering;

import static org.lwjgl.opengl.GL11.*;
import static org.lwjgl.opengl.GL15.*;
import static org.lwjgl.opengl.GL20.*;
import static org.lwjgl.opengl.GL30.*;

import java.util.ArrayList;

public class VAO {

	int id;
	
	ArrayList<VBO> vbo = new ArrayList<VBO>();
	
	public VAO() {
		id = glGenVertexArrays();
	}
	
	public void add(float[] data) {
		bind();
		
		vbo.add(new VBO(data, vbo.size()));
		
		unbind();
	}
	
	public void add(int[] data) {
		bind();
		
		vbo.add(new VBO(data, vbo.size()));
		
		unbind();
	}
	
	public void destroy() {
		for(VBO i: vbo)
			i.destroy();
		
		glDeleteVertexArrays(id);
	}	
	
	public void bind() {
		glBindVertexArray(id);
	}
	
	public void unbind() {
		glBindVertexArray(0);
	}
}
