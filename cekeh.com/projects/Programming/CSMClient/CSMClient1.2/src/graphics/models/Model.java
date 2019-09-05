package graphics.models;

import static org.lwjgl.opengl.GL15.GL_ELEMENT_ARRAY_BUFFER_BINDING;
import static org.lwjgl.opengl.GL45.glGetVertexArrayi;

import org.lwjgl.opengl.GL11;
import org.lwjgl.opengl.GL15;
import org.lwjgl.opengl.GL20;
import org.lwjgl.opengl.GL30;

import graphics.shaders.Shader;

public abstract class Model {

	//-Handle id's for the GPU
	private final int model_id;
	
	private final int vertex_id;
	private final int texcoord_id;
	
	private final int indices_id;
	
	//-Number of attributes (VBO) attached to this model (VAO)
	private int attribute_count = 0;
	
	//-Shader for our graphics card to render with our model
	private Shader shader;
	
	//-Create a new model
	protected Model(Shader shader, float[] vertices, float[] texcoords, int[] indices) {
		this.shader = shader;
		
		model_id = GL30.glGenVertexArrays();
		
		bind();
		
		vertex_id = addAttribute(vertices, 3);
		texcoord_id = addAttribute(texcoords, 2);
		
		indices_id = addIndices(indices);
		
		unbind();
	}
	
	//-Create an attribute and adds it to our model
	private int addAttribute(float[] data, int length) {
		int id = GL15.glGenBuffers();
		
		GL15.glBindBuffer(GL15.GL_ARRAY_BUFFER, id);
		
		GL15.glBufferData(GL15.GL_ARRAY_BUFFER, data, GL15.GL_STATIC_DRAW);
		GL20.glVertexAttribPointer(attribute_count++, length, GL11.GL_FLOAT, false, 0, 0);
		
		return id;
	}
	
	//-Add indices (triangles) to our model
	int addIndices(int[] data) {
		int id = GL15.glGenBuffers();
		
		GL15.glBindBuffer(GL15.GL_ELEMENT_ARRAY_BUFFER, id);
		GL15.glBufferData(GL15.GL_ELEMENT_ARRAY_BUFFER, data, GL15.GL_STATIC_DRAW);
		
		return id;
	}
	
	//-Bind this model for use
	void bind() {
		GL30.glBindVertexArray(model_id);
	}
	
	//-Unbind this model so we don't accidently use it
	void unbind() {
		GL30.glBindVertexArray(0);
	}
	
	//-Render the model
	public void render() {
		shader.bind();
		
		bind();
		
		for(int i = 0; i < attribute_count; i++)
			GL20.glEnableVertexAttribArray(i);
		
		GL11.glDrawElements(GL11.GL_TRIANGLES, 6, GL11.GL_UNSIGNED_INT, 0);
		
		for(int i = 0; i < attribute_count; i++)
			GL20.glDisableVertexAttribArray(i);
		
		unbind();
		
		shader.unbind();
	}
	
	//-Remove model from memory
	public void cleanUp() {
		GL15.glDeleteBuffers(vertex_id);
		GL15.glDeleteBuffers(texcoord_id);
		GL15.glDeleteBuffers(indices_id);
		
		GL30.glDeleteVertexArrays(model_id);
		
		shader.cleanUp();
	}
}
