package game;

import java.util.ArrayList;

import org.lwjgl.opengl.GL11;
import org.lwjgl.opengl.GL13;
import org.lwjgl.opengl.GL15;
import org.lwjgl.opengl.GL20;
import org.lwjgl.opengl.GL30;

import shaders.Shader;
import texture.Texture;

public class Model {
	
	//-Reference id for openGL
	int id;
	
	//-Shader for rendering our model on the GPU
	Shader shader = new Shader("src/shaders/vertex.vs", "src/shaders/fragment.fs");
	
	//-Texture to make our model look nicer
	Texture texture = new Texture("/images/cekeh.png");
	
	//-List of the buffer id's (vertex_id (v_id), triangle_id (t_id))
	//-We use this list to destroy all the buffers from memory
	ArrayList<Integer> buffers = new ArrayList<Integer>();
	
	//-Get an openGL id
	//-Bind this model for use
	//-Add vertices to the model
	//-Add triangles to the model
	//-Add uvs to the triangle
	//-Bind default so our model doesn't get overwritten
	public Model(float[] vertices, int[] triangles, float[] uvs) {
		id = GL30.glGenVertexArrays();
		
		bind();
		buffers.add(setVertices(vertices));
		buffers.add(setTriangles(triangles));
		buffers.add(setUVS(uvs));
		unbind();
	}
	
	//TODO: fix this mess
	//-Bind shader for use
	//-Bind texture for use
	//-Bind this model for use
	//-Enable position attribute
	//-Enable texcoord attribute
	//-Tell graphics where to find the vertices on the list
	//-Load texture into graphics card texture bank
	//-Tell graphics card to render the model and how to interpret the data
	//-Tell graphics card to forget where we told him to look
	//-Bind default texture
	//-Bind default shader
	//-Bind default model
	public void render() {
		shader.bind();
		//texture.bind();
		
		bind();
		
		GL20.glEnableVertexAttribArray(0);
		GL20.glEnableVertexAttribArray(1);
		
		texture.bind();
		GL13.glActiveTexture(GL13.GL_TEXTURE0);
		
		GL11.glDrawElements(GL11.GL_TRIANGLES, 6, GL11.GL_UNSIGNED_INT, 0);
		
		GL20.glDisableVertexAttribArray(0);
		GL20.glDisableVertexAttribArray(1);
		
		unbind();
		
		//texture.unbind();
		shader.unbind();
	}
	
	//-Destroy model dependencies
	//-Clean up some memory
	//-Clean up shader memory
	public void destroy() {
		for(int id: buffers)
			GL15.glDeleteBuffers(id);
		
		shader.destroy();
	}
	
	//-Bind this model for use
	void bind() {
		GL30.glBindVertexArray(id);
	}
	
	//-Bind openGL default so we don't render twice
	void unbind() {
		GL30.glBindVertexArray(0);
	}
	
	//-Get the buffer id (works like a list; vertices, triangles, uvs, lighting coords, etc...)
	//-Bind a spot on that list for use
	//-Send the data to the list
	//-Inform GPU how to read the data
	//-Bind default buffer so our new one doesn't get overridden
	//-RETURNS buffer_id (it's indexed-spot on the list)
	int setVertices(float[] vertices) {
		int v_id = GL15.glGenBuffers();
		
		GL15.glBindBuffer(GL15.GL_ARRAY_BUFFER, v_id);
		GL15.glBufferData(GL15.GL_ARRAY_BUFFER, vertices, GL15.GL_STATIC_DRAW);
		
		GL20.glVertexAttribPointer(0, 3, GL11.GL_FLOAT, false, 0, 0);//TODO: remove test
		GL15.glBindBuffer(GL15.GL_ARRAY_BUFFER, 0);
		
		return v_id;
	}
	
	//-Get the buffer id (works like a list; vertices, triangles, uvs, lighting coords, etc...)
	//-Bind a spot on that list for use
	//-Write data to the list
	//-RETURNS buffer_id (it's indexed-spot on the list)
	int setTriangles(int[] triangles) {
		int t_id = GL15.glGenBuffers();
		
		GL15.glBindBuffer(GL15.GL_ELEMENT_ARRAY_BUFFER, t_id);
		GL15.glBufferData(GL15.GL_ELEMENT_ARRAY_BUFFER, triangles, GL15.GL_STATIC_DRAW);
		
		return t_id;
	}
	
	//-Get the buffer id (works like a list; vertices, triangles, uvs, lighting coords, etc...)
	//-Bind a spot on that list for use
	//-Write data to the list
	//-Bind default buffer so our new one doesn't get overridden
	//-RETURNS buffer_id (it's indexed-spot on the list)
	int setUVS(float[] uvs) {
		int u_id = GL15.glGenBuffers();
		
		GL15.glBindBuffer(GL15.GL_ARRAY_BUFFER, u_id);
		GL15.glBufferData(GL15.GL_ARRAY_BUFFER, uvs, GL15.GL_STATIC_DRAW);
		
		GL20.glVertexAttribPointer(1, 2, GL11.GL_FLOAT, false, 0, 0);//TODO: remove test, LIST
		
		GL15.glBindBuffer(GL15.GL_ARRAY_BUFFER, 0);
		
		return u_id;
	}
}
