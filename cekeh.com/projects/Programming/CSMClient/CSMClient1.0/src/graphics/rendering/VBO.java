package graphics.rendering;

import static org.lwjgl.opengl.GL11.*;
import static org.lwjgl.opengl.GL15.*;
import static org.lwjgl.opengl.GL20.*;
import static org.lwjgl.opengl.GL30.*;

public class VBO {

	int id;
	
	//vertices
	public VBO(float[] data, int number) {
		id = glGenBuffers();
		
		glBindBuffer(GL_ARRAY_BUFFER, id);
		glBufferData(GL_ARRAY_BUFFER, data, GL_STATIC_DRAW);
		
		glVertexAttribPointer(number, 3, GL_FLOAT, false, 0, 0);//3==x,y,z for each point
		
		glBindBuffer(GL_ARRAY_BUFFER, 0);
	}
	
	//triangles
	public VBO(int[] data, int number) {
		id = glGenBuffers();
		
		glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, id);
		glBufferData(GL_ELEMENT_ARRAY_BUFFER, data, GL_STATIC_DRAW);
		
	}
	
	public void bind() {
		glBindBuffer(GL_ARRAY_BUFFER, id);
	}
	
	public void unbind() {
		glBindBuffer(GL_ARRAY_BUFFER, 0);
	}
	
	public void destroy() {
		glDeleteBuffers(id);
	}
}
