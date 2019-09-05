package shaders;

import java.io.BufferedReader;
import java.io.FileReader;

import org.lwjgl.opengl.GL20;

public class Shader {
	
	//-OpenGL shader id, vertex_id, and fragment_id
	int id, vertex_id, fragment_id;
	
	//-Load the vertex shader from a file onto the graphics card and get the id
	//-Load the fragment shader from a file onto the graphics card and get the id
	//-Get the id for the entire shader program
	//-Attach the vertex shader to the program (this)
	//-Attach the fragment shader to the program (this)
	//-Bind the position to the shader
	//-Bind the uvs to the shader
	//-Link the program together
	//-Validate the program for use on the graphics card
	public Shader(String vertex_path, String fragment_path) {
		vertex_id = load(vertex_path, GL20.GL_VERTEX_SHADER);
		fragment_id = load(fragment_path, GL20.GL_FRAGMENT_SHADER);
		
		id = GL20.glCreateProgram();
		GL20.glAttachShader(id, vertex_id);
		GL20.glAttachShader(id, fragment_id);
		
		bindAttribute(0, "position");
		bindAttribute(1, "texcoord");
		
		GL20.glLinkProgram(id);
		GL20.glValidateProgram(id);
	}
	
	//-String to hold the files data
	//-Reader to read out the file, line by line
	//-Try to find the file using the path
	//-Add data, line by line, to our return string
	//-Close our reader to clean up any memory it's used
	//-Get the id for referencing the shader, will also be returned
	//-Set the source of the shader on the graphics card
	//-Compile the shader
	//-RETURN vertex_id / fragment_id
	int load(String path, int type) {
		String data = "";
		BufferedReader reader;
		
		try {
			reader = new BufferedReader(new FileReader(path));
			
			String line;
			
			while((line = reader.readLine()) != null) {
				data += line + "\n";
			}
			
			reader.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		int return_id = GL20.glCreateShader(type);
		
		GL20.glShaderSource(return_id, data);
		GL20.glCompileShader(return_id);
		
		return return_id;
	}
	
	//-Bind variable in the shader program
	void bindAttribute(int index, String name) {
		GL20.glBindAttribLocation(id, index, name);
	}
	
	//-Bind the shader program for use
	public void bind() {
		GL20.glUseProgram(id);
	}
	
	//-Unbind our shader program so it doesn't affect any other models
	public void unbind() {
		GL20.glUseProgram(0);
	}
	
	//-Detach the vertex shader
	//-Detach the fragment shader
	//-Delete the vertex shader
	//-Delete the fragment shader
	//-Delete the shader program
	public void destroy() {
		GL20.glDetachShader(id, vertex_id);
		GL20.glDetachShader(id, fragment_id);
		GL20.glDeleteShader(vertex_id);
		GL20.glDeleteShader(fragment_id);
		GL20.glDeleteProgram(id);
	}
}
