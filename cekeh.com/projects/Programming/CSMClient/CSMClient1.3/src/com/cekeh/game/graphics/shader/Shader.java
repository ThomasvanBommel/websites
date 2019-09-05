//: Last edit 04/10/2018 - TvB
package com.cekeh.game.graphics.shader;

import static org.lwjgl.opengl.GL20.*;

import com.cekeh.utility.Loader;
import com.cekeh.utility.data_type.Vector4f;

/**
 * Cekeh's Shader class
 * 04/09/2018
 * @author Thomas vanBommel (TvB)
 */
public abstract class Shader {

	//OpenGL handles/reference ID's
	protected final int program_handle;
	protected final int vertex_handle;
	protected final int fragment_handle;
	
	/**
	 * Creates a new shader program
	 * @param vertex_file_path File path to the vertex shader ".vs"
	 * @param fragment_file_path File path to the fragment shader ".fs"
	 * @throws Exception Invalid shader type
	 * @throws Exception Invalid shader extension
	 * @throws Exception Unable to compile shader
	 * @throws Exception Unable to link shader program (usually a GLSL error)
	 * @throws Exception Unable to validate the shader program
	 */
	protected Shader(String vertex_file_path, String fragment_file_path) throws Exception {
		vertex_handle = loadShaderFile(vertex_file_path, GL_VERTEX_SHADER);
		fragment_handle = loadShaderFile(fragment_file_path, GL_FRAGMENT_SHADER);
		
		program_handle = glCreateProgram();
		
		glAttachShader(program_handle, vertex_handle);
		glAttachShader(program_handle, fragment_handle);
		
		//TODO: something... maybe
		//glBindAttribLocation(program_handle, 1, "position");
		//glBindAttribLocation(program_handle, 3, "texcoord");
		
		glLinkProgram(program_handle);
		
		if(glGetProgrami(program_handle, GL_LINK_STATUS) != 1)
			throw new Exception("Shader(): unable to link shader\n" + glGetProgramInfoLog(program_handle));
	
		glValidateProgram(program_handle);
		
		if(glGetProgrami(program_handle, GL_VALIDATE_STATUS) != 1)
			throw new Exception("Shader(): unable to validate shader\n" + glGetProgramInfoLog(program_handle));
	}
	
	/**
	 * Load and compile individual shader's for this program
	 * @param file_path File path to the shader file starting with "src/"
	 * @param shader_type Type of shader to load and compile
	 * @return Handle/reference ID for the shader
	 * @throws Exception Invalid shader type
	 * @throws Exception Invalid shader extension
	 * @throws Exception Unable to compile shader
	 */
	private int loadShaderFile(String file_path, int shader_type) throws Exception {
		if(shader_type != GL_VERTEX_SHADER && shader_type != GL_FRAGMENT_SHADER)
			throw new Exception("Invalid shader type: " + shader_type);
		
		String file_extension = file_path.substring(file_path.length() - 2);
		
		switch(shader_type) {
			case GL_VERTEX_SHADER:
				if(!file_extension.equals("vs"))
					throw new Exception("Incorrect shader extension: " + file_path);
				break;
			case GL_FRAGMENT_SHADER:
				if(!file_extension.equals("fs"))
					throw new Exception("Incorrect shader extension: " + file_path);
				break;
		}
		
		String shader_source = Loader.loadPlainText(file_path);
		
		int handle = glCreateShader(shader_type);
		
		glShaderSource(handle, shader_source);
		glCompileShader(handle);
		
		if(glGetShaderi(handle, GL_COMPILE_STATUS) != 1) 
			throw new Exception("Unable to compile shader: " + file_path + "\n" + glGetShaderInfoLog(handle));
		
		return handle;
	}
	
	/**
	 * Bind this shader program for use
	 */
	public void bind() {
		glUseProgram(program_handle);
	}
	
	/**
	 * Unbind this shader program from use, so not to accidently use it somewhere else
	 */
	public void unbind() {
		glUseProgram(0);
	}
	
	protected void setUniform1i(String name, int data) {
		bind();
		
		int location = glGetUniformLocation(program_handle, name);
		glUniform1i(location, data);
		
		unbind();
	}
	
	/**
	 * Set uniform4f <float[4]> || <vec4> variable in a shader
	 * @param name Name of the variable in the shader, must be exact
	 * @param data Data to be stored in that uniform variable
	 */
	protected void setUniform4f(String name, Vector4f data) {
		bind();
		
		int location = glGetUniformLocation(program_handle, name);
		glUniform4fv(location, data.getData());
		
		unbind();
	}
	
	/**
	 * Clean up all memory use by this shader program
	 */
	public void cleanUp() {
		glDetachShader(program_handle, vertex_handle);
		glDetachShader(program_handle, fragment_handle);
		
		glDeleteShader(vertex_handle);
		glDeleteShader(fragment_handle);
		
		glDeleteProgram(program_handle);
	}
}
