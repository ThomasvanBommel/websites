package graphics.shaders;

import org.lwjgl.opengl.GL20;

import loader.ResourceLoader;

public abstract class Shader {

	//-Reference ID for the graphics card
	protected final int program_id;
	protected final int vertex_id;
	protected final int fragment_id;
	
	int matrix_location;
	float[] matrix = {
			 1.0f, 0.0f, 0.0f,
			 0.0f, 1.0f, 0.0f,
			 0.0f, 0.0f, 1.0f
	};
	
	//-Create a new shader from a file path, link and validate it
	protected Shader(String vertex_path, String fragment_path) {
		vertex_id = compile(vertex_path, GL20.GL_VERTEX_SHADER);
		fragment_id = compile(fragment_path, GL20.GL_FRAGMENT_SHADER);
		
		program_id = GL20.glCreateProgram();
		
		GL20.glAttachShader(program_id, vertex_id);
		GL20.glAttachShader(program_id, fragment_id);		
		
		GL20.glLinkProgram(program_id);
		GL20.glValidateProgram(program_id);
		
		if(GL20.glGetProgrami(program_id, GL20.GL_VALIDATE_STATUS) != 1)
			System.out.println("Shader Error");
		
		GL20.glUseProgram(program_id);
		matrix_location = setUniformMatrix3fv("matrix", matrix);
	}
	
	//-Compile the shader and place it in a buffer on the graphics card
	private int compile(String path, int type) {
		int id = GL20.glCreateShader(type);
		
		GL20.glShaderSource(id, ResourceLoader.loadPlainText(path));
		GL20.glCompileShader(id);
		
		return id;
	}
	
	//-Set uniform in our shader program
	protected void setUniformi(String name, int data) {
		GL20.glUseProgram(program_id);
		int location = GL20.glGetUniformLocation(program_id, name);
		GL20.glUniform1i(location, data);
	}
	
	//-Set uniform in our shader program
	protected void setUniformfv(String name, float[] data) {
		GL20.glUseProgram(program_id);
		int location = GL20.glGetUniformLocation(program_id, name);
		GL20.glUniform4fv(location, data);
	}
	
	//-Set uniform matrix 2x2 in our shader program
	public int setUniformMatrix2fv(String name, float[] data) {
		GL20.glUseProgram(program_id);
		int location = GL20.glGetUniformLocation(program_id, name);
		GL20.glUniformMatrix2fv(location, false, data);
		
		return location;
	}
	
	//-Set uniform matrix 3x3 in our shader program
	public int setUniformMatrix3fv(String name, float[] data) {
		GL20.glUseProgram(program_id);
		int location = GL20.glGetUniformLocation(program_id, name);
		GL20.glUniformMatrix3fv(location, false, data);
		
		return location;
	}
	
	//-Set uniform matrix 4x4 in our shader program
	private int setUniformMatrix4fv(String name, float[] data) {
		GL20.glUseProgram(program_id);
		int location = GL20.glGetUniformLocation(program_id, name);
		GL20.glUniformMatrix4fv(location, false, data);
		
		return location;
	}
	
	//Transform a matrix in our shader
	void loadTransformMationMatrix(int matrix_location, float[] data) {
		//setUniformMatrixfv again basically
	}
	
	//-Bind the shader for use
	public void bind() {
		GL20.glUseProgram(program_id);
	}
	
	//-Unbind the shader so we don't accidently use it
	public void unbind() {
		GL20.glUseProgram(0);
	}
	
	//-Detach and delete the shader's from the program, then the graphics card
	public void cleanUp() {
		GL20.glDetachShader(program_id, vertex_id);
		GL20.glDetachShader(program_id, fragment_id);
		
		GL20.glDeleteProgram(vertex_id);
		GL20.glDeleteProgram(fragment_id);
		
		GL20.glDeleteProgram(program_id);
	}
	
	//-Get the id for the shader
	public int getProgramID() {
		return program_id;
	}
}
