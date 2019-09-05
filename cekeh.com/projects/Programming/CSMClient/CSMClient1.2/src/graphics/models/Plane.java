package graphics.models;

import graphics.shaders.Shader;

public class Plane extends Model{
	
	Shader shader;
	
	//-Vertices for our model
	private final static float[] vertices = {
		0.0f, 1.0f, 0.0f,
		1.0f, 1.0f, 0.0f,
		1.0f, 0.0f, 0.0f,
		0.0f, 0.0f, 0.0f
	};
	
	//-Triangles for our model
	private final static int[] indices = {
		0, 1, 3,
		3, 1, 2
	};
	
	//-UV coords for our model
	private final static float[] texcoords = {
		0.0f, 0.0f,
		1.0f, 0.0f,
		1.0f, 1.0f,
		0.0f, 1.0f
	};
	
	//-Create a new plane model
	public Plane(Shader sha) {
		super(sha, vertices, texcoords, indices);
		
		this.shader = sha;
	}

}
