//: Last edit 04/10/2018 - TvB
package com.cekeh.game.graphics.vertex_object;

import static org.lwjgl.opengl.GL11.*;
import static org.lwjgl.opengl.GL15.*;
import static org.lwjgl.opengl.GL20.*;
import static org.lwjgl.opengl.GL30.*;
import static org.lwjgl.opengl.GL45.*;

import java.util.ArrayList;

import com.cekeh.game.graphics.shader.Shader;

/**
 * Cekeh's Vertex Array Object
 * 04/09/2018
 * @author Thomas vanBommel (TvB)
 */
public abstract class VAO {

	//OpenGL handles/reference ID's
	private final int object_handle;
	private final int indices_handle;
	private final ArrayList<Integer> attribute_handle = new ArrayList<Integer>();
	
	//Shader for the object
	private Shader shader;
	
	/**
	 * Create a new vertex array object (VAO)
	 * @param vertices Points in space that represent our VAO model
	 * @param indices The triangles that connect the vertices together
	 * @throws Exception GL_BUFFER_SIZE of 0, buffer_target couldn't be added
	 */
	protected VAO(float[] vertices, int[] indices, Shader shader) throws Exception {
		this.shader = shader;
		
		object_handle = glGenVertexArrays();
		
		System.out.println("obj: " + object_handle);

		bind();
		
		addAttributefv(vertices, 3, GL_ARRAY_BUFFER);
		
		indices_handle = glGenBuffers();
		
		glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, indices_handle);
		glBufferData(GL_ELEMENT_ARRAY_BUFFER, indices, GL_STATIC_DRAW);
		
		unbind();
	}
	
	/**
	 * Render the vertex array object
	 */
	public void render() {
		if(shader != null)
			shader.bind();
		
		glBindVertexArray(object_handle);
		
		for(int i: attribute_handle)
			glEnableVertexAttribArray(i);
		
		int indices_handle = glGetVertexArrayi(object_handle, GL_ELEMENT_ARRAY_BUFFER_BINDING);
		glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, indices_handle);
		
		for(int i: attribute_handle)
			glDisableVertexAttribArray(i);
		
		glBindVertexArray(0);
		
		if(shader != null)
			shader.unbind();
	}
	
	/**
	 * Add float attribute to the vertex array object. example: texcoord's, colors, positions, time, etc...
	 * @param data Data to place in the attribute
	 * @param size Number of values per vertex. example: 2=UV, 3=UVW || 3=RGB || 3=XYZ, 4=RGBA || 4=BRGA || 4=XYZW, etc...
	 * @param buffer_target One of: GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_ATOMIC_COUNTER_BUFFER, GL_COPY_READ_BUFFER, GL_COPY_WRITE_BUFFER, GL_DISPATCH_INDIRECT_BUFFER, GL_DRAW_INDIRECT_BUFFER, GL_PIXEL_PACK_BUFFER, GL_PIXEL_UNPACK_BUFFER, GL_QUERY_BUFFER, GL_SHADER_STORAGE_BUFFER, GL_TEXTURE_BUFFER, GL_TRANSFORM_FEEDBACK_BUFFER, or GL_UNIFORM_BUFFER
	 * @param name Name of the attribute in the shader program
	 * @throws Exception GL_BUFFER_SIZE of 0, buffer_target couldn't be added
	 * @return Returns the handle/reference ID for the attribute
	 */
	public int addAttributefv(float[] data, int size, int buffer_target) throws Exception {
		int handle = glGenBuffers();
		
		glBindBuffer(buffer_target, handle);
		
		glBufferData(buffer_target, data, GL_STATIC_DRAW);
		glVertexAttribPointer(0, size, GL_FLOAT, false, 0, 0);
		
		System.out.println("Attrib: " + handle);
		
		int buffer_size = glGetBufferParameteri(buffer_target, GL_BUFFER_SIZE);
				
		if(buffer_size == 0)
			throw new Exception("Unable to add float[] attribute to vertex array object. Buffer size of " + buffer_size + " vs array size of " + data.length);
		
		glBindBuffer(buffer_target, 0);
		
		attribute_handle.add(handle);
		
		return handle;
	}
	
	/**
	 * Bind this VAO for use
	 */
	public void bind() {
		glBindVertexArray(object_handle);
	}
	
	/**
	 * Unbind this VAO so not to use it somewhere accidently
	 */
	public void unbind() {
		glBindVertexArray(0);
	}
	
	/**
	 * Set the shader of the object for rendering
	 * @param shader Shader to be set
	 */
	public void setShader(Shader shader) {
		this.shader = shader;
	}
	
	/**
	 * Clean up the memory used by our vertex array object and any shader attached
	 */
	public void cleanUp() {
		for(int i: attribute_handle)
			glDeleteBuffers(i);
		
		glDeleteBuffers(indices_handle);
		
		glDeleteVertexArrays(object_handle);
		
		if(shader != null)
			shader.cleanUp();
	}
}
